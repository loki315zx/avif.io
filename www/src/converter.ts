import _ from "lodash"

export interface ConversionResult {
    data: Uint8Array
}

export interface ConversionOptions {
    inputData: ArrayBuffer
    isRawRgba?: boolean
    width?: number
    height?: number

    onProgress(progress: number): void

    onFinished(result: ConversionResult): void

    onError(error: string): void
}

interface ConversionWorker {
    worker: Worker
    busy: boolean
}

interface Conversion {
    options: ConversionOptions
    conversionId: number
}

export type ConversionId = number

export default class Converter {
    private readonly workers: readonly ConversionWorker[]
    private readonly pendingConversions: Conversion[] = []
    private lastConversionId: number = 0

    constructor() {
        const numWorkers = Math.max(1, Math.floor(navigator.hardwareConcurrency / 2))
        this.workers = _.range(numWorkers).map(() => {
            return {
                worker: new Worker("worker.js"),
                busy: false,
            }
        })
    }

    convertFile(options: ConversionOptions): ConversionId {
        const conversionId = this.lastConversionId
        this.lastConversionId++
        this.pendingConversions.push({options, conversionId})
        this.tryConvertingFiles()
        return conversionId
    }

    private tryConvertingFiles(): void {
        if (_.isEmpty(this.pendingConversions))
            return

        const worker = this.getAvailableWorker()
        if (worker === undefined)
            return

        const {options} = this.pendingConversions.shift()
        worker.busy = true

        worker.worker.onmessage = (msg) => {
            switch (msg.data.type) {
                case "progress":
                    options.onProgress(msg.data.progress)
                    break
                case "finished":
                    options.onFinished({
                        data: msg.data.data,
                    })
                    worker.busy = false
                    this.tryConvertingFiles()
                    break
                case "error":
                    options.onError(msg.data.error);
                    worker.busy = false
                    this.tryConvertingFiles()
                    break
            }
        }

        worker.worker.postMessage({
            input: options.inputData,
            isRawRgba: options.isRawRgba,
            width: options.width,
            height: options.height,
        }, [options.inputData])
    }

    private getAvailableWorker(): ConversionWorker {
        for (const worker of this.workers) {
            if (!worker.busy)
                return worker
        }

        return undefined
    }
}
