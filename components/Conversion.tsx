import ProgressBar from "@components/ProgressBar";
import { Settings } from "@components/SettingsBox";
import ConversionTimeEstimator from "@utils/ConversionTimeEstimator";
import Converter, { ConversionId, ConversionResult } from "@utils/converter";
import { splitNameAndExtension } from "@utils/utils";
import prettyBytes from "pretty-bytes";
import { ReactElement, useEffect, useState } from "react";
import Tooltip from "@components/Tooltip";

import arrow from "@assets/arrow.svg";

export interface ConversionProps {
  file: File;
  converter: Converter;
  settings: Settings;

  onFinished(outputFile: File): void;
}

function formatRemainingTimeEstimate(estimator: ConversionTimeEstimator) {
  if (estimator.minutes === undefined) return "";
  if (estimator.seconds === undefined) return "";

  if (estimator.minutes === 0 && estimator.seconds === 0)
    return "almost ready..";

  let result = "";
  if (estimator.minutes !== 0) {
    result += `${estimator.minutes} minute`;
    if (estimator.minutes > 1) {
      result += "s";
    }
  } else {
    result += `${estimator.seconds} seconds`;
  }

  result += " left";
  return result;
}

type ConversionStatus = "inProgress" | "cancelled" | "finished";

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
            console.error(e);
            if (
              confirm(
                "Oh no, the conversion has failed. Can we use your file to check what went wrong and fix it in a future release?"
              )
            ) {
              (window as any).firebase
                .storage()
                .ref()
                .child(Date.now().toString())
                .put(props.file);
            }
          },
        })
      );
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const percentageSaved = Math.max(
    Math.ceil((1 - outputSize / originalSize) * 100),
    0
  );

  function cancelConverison() {
    if (status === "inProgress" && conversionId !== undefined) {
      props.converter.cancelConversion(conversionId);
      setStatus("cancelled");
    }
  }

  const finished = status === "finished";
  const cancelled = status === "cancelled";

  return (
    <div
      className={`conversion justify-between w-full relative z-10 flex flex-row items-center self-auto mt-4 py-2 px-3 bg-white rounded-md text-gray-900${
        finished ? "pointer-events-auto" : "progress group"
      } ${cancelled ? "hidden" : ""}`}
      transition-style={finished ? "bounceIn" : ""}
    >
      <div className="flex flex-col justify-between items-baseline py-2">
        <p className="overflow-hidden relative z-50 text-gray-900 whitespace-nowrap select-none overflow-ellipsis">
          {fileName?.substring(0, 20)}
          {finished ? ".avif " : " "}
        </p>
        <p className={`z-50 text-tiny text-gray-400 `}>
          {cancelled
            ? "cancelled"
            : finished
            ? percentageSaved + "% smaller · " + prettyBytes(outputSize)
            : (progress * 100).toFixed() +
              "%" +
              (remainingTime !== "" ? " · " + remainingTime : "")}

          {percentageSaved === 0 && (
            <Tooltip
              text="Why 0%?"
              explanation="Adjust your conversion settings to achieve higher compression."
            />
          )}
        </p>
      </div>
      {finished ? (
        ""
      ) : (
        <p className="z-50 mr-6 ml-2 text-gray-900 rounded-md">
          <span className="conversion_format">
            {originalFormat} · {prettyBytes(originalSize)}
          </span>
        </p>
      )}
      <a
        role="button"
        tabIndex={0}
        title={`download ${fileName}`}
        download={`${fileName}.avif`}
        href={outputObjectURL}
        className={`group absolute top-0 right-0 w-6 h-full overflow-hidden cursor-pointer transform ${
          finished ? "" : "hidden"
        }`}
      >
        {" "}
        <span
          style={{ backgroundSize: "200%" }}
          className="absolute top-0 right-0 bottom-0 left-0 bg-center bg-cover rounded-r-md cursor-pointer bg-gradient"
        ></span>
        <span
          className="absolute top-0 right-0 bottom-0 left-0 z-50 text-white bg-center bg-no-repeat transition-all duration-300 ease-in transform rotate-180 hover:scale-110 hover:translate-y-1"
          style={{
            backgroundImage: `url(${arrow})`,
            backgroundSize: "30%",
          }}
        ></span>
      </a>
      {status === "inProgress" && <ProgressBar progress={progress} />}
      {status === "inProgress" && (
        <a
          role="button"
          title="stop conversion"
          className="flex absolute left-full z-50 justify-center items-center pb-1 ml-1 w-4 h-4 text-gray-900 bg-white rounded-lg opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
          onClick={cancelConverison}
          onKeyPress={cancelConverison}
          tabIndex={0}
        >
          ■
        </a>
      )}
    </div>
  );
}
