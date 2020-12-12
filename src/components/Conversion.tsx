import Converter, {
  ConversionOptions,
  ConversionResult,
} from "../src/converter";
import React, { useEffect, useState } from "react";
import { FileWithId, splitNameAndExtension } from "../src/utils";
import prettyBytes from "pretty-bytes";
import ProgressBar from "./ProgressBar";
import webpToRgba from "../src/webpToRgba";
import { Settings } from "./SettingsBox";
import ConversionTimeEstimator from "./ConversionTimeEstimator";

export interface ConversionProps {
  file: FileWithId;
  converter: Converter;
  settings: Settings;

  onFinished(outputFile: File): void;
}

function formatRemainingTimeEstimate(estimator: ConversionTimeEstimator) {
  if (estimator.minutes === undefined) return "";

  if (estimator.minutes === 0 && estimator.seconds === 0)
    return "Less than 10 seconds left";

  let result = "";
  if (estimator.minutes !== 0) {
    result += `${estimator.minutes} minute`;
    if (estimator.minutes !== 1) {
      result += "s";
    }
    if (!!estimator.seconds) {
      result += " and ";
    }
  }
  if (!!estimator.seconds) {
    result += `${estimator.seconds} seconds`;
  }
  result += " left";
  return result;
}

export default function Conversion(props: ConversionProps) {
  // TODO Add conversion cancellation using props.file.id
  const [fileName, setFileName] = useState<string>();
  const [originalFormat, setOriginalFormat] = useState<string>();
  const [originalSize] = useState(props.file.data.byteLength);
  const [progress, setProgress] = useState(0);
  const [outputSize, setOutputSize] = useState(0);
  const [outputObjectURL, setOutputObjectURL] = useState("");
  const [finished, setFinished] = useState(false);
  const [remainingTime, setRemainingTime] = useState("");
  const [conversionTimeEstimator] = useState(
    new ConversionTimeEstimator(50, 300)
  );

  useEffect(() => {
    (async () => {
      const [fileName, format] = splitNameAndExtension(props.file.name);
      setFileName(fileName);
      setOriginalFormat(format);
      conversionTimeEstimator.start();

      function onFinished(result: ConversionResult) {
        setFinished(true);
        const outputFile = new File([result.data], `${fileName}.avif`);
        setOutputObjectURL(URL.createObjectURL(outputFile));
        setOutputSize(result.data.length);
        props.onFinished(outputFile);
      }

      function onProgress(progress: number) {
        setProgress(progress);
        conversionTimeEstimator.update(progress);
        setRemainingTime(formatRemainingTimeEstimate(conversionTimeEstimator));
      }

      let conversionOptions: ConversionOptions;
      if (format === "webp") {
        const { data, width, height } = await webpToRgba(
          new Uint8Array(props.file.data)
        );
        conversionOptions = {
          inputData: data.buffer,
          isRawRgba: true,
          ...props.settings,
          width,
          height,
          onFinished,
          onProgress,
          onError: (e) => window.alert(e),
        };
      } else {
        conversionOptions = {
          inputData: props.file.data,
          ...props.settings,
          onFinished,
          onProgress,
          onError: (e) => window.alert(e),
        };
      }

      props.converter.convertFile(conversionOptions);
    })();
  }, []);

  const percentageSaved = Math.max(
    Math.ceil((1 - outputSize / originalSize) * 100),
    0
  );

  return (
    <a
      download={`${fileName}.avif`}
      href={outputObjectURL}
      className={`will-change conversion ${finished ? "finished" : "progress"}`}
    >
      <div className="conversion_information">
        <p className="filename">
          {fileName}
          {finished ? ".avif" : ""}

          <span className="remaining-time">
            {" · "}
            {!finished && remainingTime && "" + remainingTime}
          </span>
        </p>
        <div className="conversion_meta">
          <span className="conversion_format">
            {originalFormat} · {prettyBytes(originalSize)}
          </span>

          <span className="conversion_outcome">
            {percentageSaved}% smaller · {prettyBytes(outputSize)}
          </span>
        </div>
      </div>
      <span className={"download"} />
      <ProgressBar progress={progress} />
    </a>
  );
}
