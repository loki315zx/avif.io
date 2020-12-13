import React, { ReactElement, useEffect, useState } from "react";
import prettyBytes from "pretty-bytes";
import Converter, { ConversionId, ConversionResult } from "@utils/converter";
import { splitNameAndExtension } from "@utils/utils";
import ProgressBar from "@components/ProgressBar";
import { Settings } from "@components/SettingsBox";
import ConversionTimeEstimator from "@utils/ConversionTimeEstimator";

export interface ConversionProps {
  file: File;
  converter: Converter;
  settings: Settings;

  onFinished(outputFile: File): void;
}

function formatRemainingTimeEstimate(estimator: ConversionTimeEstimator) {
  if (estimator.minutes === undefined) return "";

  if (estimator.minutes === 0 && estimator.seconds === 0) return "Less than 10 seconds left";

  let result = "";
  if (estimator.minutes !== 0) {
    result += `${estimator.minutes} minute`;
    if (estimator.minutes !== 1) {
      result += "s";
    }
    if (estimator.seconds) {
      result += " and ";
    }
  }
  if (estimator.seconds) {
    result += `${estimator.seconds} seconds`;
  }
  result += " left";
  return result;
}

type ConversionStatus = "inProgress" | "canceled" | "finished";

export default function Conversion(props: ConversionProps): ReactElement {
  const [status, setStatus] = useState<ConversionStatus>("inProgress");
  const [fileName, setFileName] = useState<string>();
  const [originalFormat, setOriginalFormat] = useState<string>();
  const [originalSize] = useState(props.file.size);
  const [progress, setProgress] = useState(0);
  const [outputSize, setOutputSize] = useState(0);
  const [outputObjectURL, setOutputObjectURL] = useState("");
  const [remainingTime, setRemainingTime] = useState("");
  const [conversionId, setConversionId] = useState<ConversionId>();
  const [conversionTimeEstimator] = useState(new ConversionTimeEstimator(50, 300));

  useEffect(() => {
    (async () => {
      const [fileName, format] = splitNameAndExtension(props.file.name);
      setFileName(fileName);
      setOriginalFormat(format);
      conversionTimeEstimator.start();

      function onFinished(result: ConversionResult) {
        setStatus("finished");
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

      setConversionId(
        await props.converter.convertFile(props.file, {
          ...props.settings,
          onFinished,
          onProgress,
          onError(e: string) {
            window.alert(e);
          },
        })
      );
    })();
  }, []);

  const percentageSaved = Math.ceil((1 - outputSize / originalSize) * 100);

  function cancelConverison() {
    if (status === "inProgress" && conversionId !== undefined) {
      props.converter.cancelConversion(conversionId);
      setStatus("canceled");
    }
  }

  const finished = status === "finished";

  return (
    <>
      {status === "inProgress" && <button onClick={cancelConverison}>Cancel</button>}
      <a
        download={`${fileName}.avif`}
        href={outputObjectURL}
        className={`will-change conversion ${finished ? "finished" : "progress"}`}>
        <div className="conversion_information">
          <p className="filename">
            {fileName}
            {finished ? ".avif" : ""}
          </p>
          <span className="remaining-time">
            {" "}
            {status === "inProgress" && remainingTime && " · " + remainingTime}
          </span>
        </div>
        <div className="conversion_meta">
          <span className="conversion_format">
            {originalFormat} · {prettyBytes(originalSize)}
          </span>

          <span className="conversion_outcome">
            {percentageSaved}% smaller · {prettyBytes(outputSize)}
          </span>
        </div>
        <span className={"download"} />
        {status === "inProgress" && <ProgressBar progress={progress} />}
        {status === "canceled" && <h1>Canceled</h1>}
      </a>
    </>
  );
}
