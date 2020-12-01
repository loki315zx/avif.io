import _ from "lodash";
import { fileExtension } from "./utils";
import webpToRgba from "./webpToRgba";

export interface ConversionResult {
  data: Uint8Array;
}

interface ConversionMessageCallbacks {
  onProgress(progress: number): void;

  onFinished(result: ConversionResult): void;

  onError(error: string): void;
}

export interface ConversionOptions extends ConversionMessageCallbacks {
  effort: number; // Conversion effort as a 0-100 percentage
  quality: number; // Quality as a 0-100 percentage
  useYuv444: boolean;
  keepTransparency: boolean;
}

interface PendingConversion {
  file: File;
  options: ConversionOptions;
  id: ConversionId;
}

export class ConversionId {
  constructor(readonly value: number) {}
}

interface WorkerWithConversionId {
  worker: ConversionWorker;
  conversionId?: ConversionId;
}

export default class Converter {
  private workers: readonly WorkerWithConversionId[];
  private pendingConversions: PendingConversion[] = [];
  private lastConversionId = 0;

  constructor() {
    const numWorkers = Math.max(
      1,
      Math.floor(navigator.hardwareConcurrency / 2)
    );
    this.workers = _.range(numWorkers).map(() => ({
      worker: new ConversionWorker(),
    }));
  }

  async convertFile(
    file: File,
    options: ConversionOptions
  ): Promise<ConversionId> {
    const conversionId = new ConversionId(this.lastConversionId);
    this.lastConversionId++;
    this.pendingConversions.push({
      file,
      options,
      id: conversionId,
    });
    await this.tryConvertingFiles();
    return conversionId;
  }

  cancelConversion(conversionId: ConversionId): void {
    this.cancelPendingConversion(conversionId);
    this.cancelOngoingConversion(conversionId);
  }

  private async tryConvertingFiles(): Promise<void> {
    if (_.isEmpty(this.pendingConversions)) return;

    const workerWithConversionId = this.getAvailableWorker();
    if (workerWithConversionId === undefined) return;

    const { worker } = workerWithConversionId;
    const { file, options, id: conversionId } = this.pendingConversions.shift();
    workerWithConversionId.conversionId = conversionId;

    worker.sendConversionMessage(await startConversionMessage());

    worker.handleMessages({
      onProgress: options.onProgress,
      onFinished: (result: ConversionResult) => {
        options.onFinished(result);
        workerWithConversionId.conversionId = undefined;
        this.tryConvertingFiles();
      },
      onError: (error) => {
        options.onError(error);
        workerWithConversionId.conversionId = undefined;
        this.tryConvertingFiles();
      },
    });

    async function startConversionMessage() {
      if (fileExtension(file.name) === "webp") {
        const { data, width, height } = await webpToRgba(
          new Uint8Array(await file.arrayBuffer())
        );
        return {
          input: data.buffer,
          isRawRgba: true,
          options,
          width,
          height,
        };
      } else {
        const input = await file.arrayBuffer();
        return { input, options };
      }
    }
  }

  private getAvailableWorker(): WorkerWithConversionId {
    for (const worker of this.workers) {
      if (worker.conversionId === undefined) return worker;
    }

    return undefined;
  }

  private cancelPendingConversion(conversionId: ConversionId) {
    this.pendingConversions = this.pendingConversions.filter(
      (conversion) => conversion.id.value !== conversionId.value
    );
  }

  private cancelOngoingConversion(targetId: ConversionId) {
    for (const { worker, conversionId } of this.workers) {
      if (conversionId.value === targetId.value) {
        worker.restart();
      }
    }
  }
}

interface NonWebpConversionMessage {
  input: ArrayBuffer;
  options: ConversionOptions;
}

interface WebpConversionMessage extends NonWebpConversionMessage {
  isRawRgba: true;
  width: number;
  height: number;
}

type ConversionMessage = NonWebpConversionMessage | WebpConversionMessage;

class ConversionWorker {
  private worker: Worker;

  constructor() {
    this.worker = new Worker("worker.js");
  }

  async sendConversionMessage(message: ConversionMessage): Promise<void> {
    const messageToSend = {
      ...message,
      options: _.omitBy(message.options, (_, name) => name.startsWith("on")),
    };
    this.worker.postMessage(messageToSend, [messageToSend.input]);
  }

  handleMessages(cb: ConversionMessageCallbacks): void {
    this.worker.onmessage = (msg) => {
      switch (msg.data.type) {
        case "progress":
          cb.onProgress(msg.data.progress);
          break;
        case "finished":
          cb.onFinished({
            data: msg.data.data,
          });
          break;
        case "error":
          cb.onError(msg.data.error);
          break;
      }
    };
  }

  restart() {
    this.worker.terminate();
    this.worker = new Worker("worker.js");
  }
}
