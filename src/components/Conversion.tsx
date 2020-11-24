import React, { useEffect, useState } from "react";
import prettyBytes from "pretty-bytes";
import Converter, { ConversionResult } from "@/Converter";
import { splitNameAndExtension } from "@/utils";
import ProgressBar from "@components/ProgressBar";
import { Settings } from "@components/SettingsBox";
import ConversionTimeEstimator from "@components/ConversionTimeEstimator";
import { InputFile } from "@/files";

export interface ConversionProps {
  file: InputFile;
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

      props.converter.convertFile(props.file, {
        ...props.settings,
        onFinished,
        onProgress,
        onError: (e) => window.alert(e),
      });
    })();
  }, []);

  const percentageSaved = Math.ceil((1 - outputSize / originalSize) * 100);

  return (
    <a
      download={`${fileName}.avif`}
      href={outputObjectURL}
      className={`conversion ${finished ? "finished" : "progress"}`}
    >
      <div className="flex-center">
        <p className="filename">
          {fileName}
          {finished ? ".avif" : ""}
        </p>
        <span className="remaining-time">
          {" "}
          {!finished && remainingTime && " · " + remainingTime}
        </span>
      </div>
      <div className="flex-center">
        <p className={"meta"}>
          <span className="originalformat">
            {originalFormat} · {prettyBytes(originalSize)}
          </span>
          <span className="conversionformat">
            {percentageSaved > 0 && (
              <>
                {" "}
                {percentageSaved}% smaller · {prettyBytes(outputSize)}
              </>
            )}{" "}
          </span>
        </p>
      </div>
      <span className={"download"} />
      <ProgressBar progress={progress} />
    </a>
  );
}
