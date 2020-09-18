import Converter, { ConversionOptions, ConversionResult } from "./converter";
import React, { useEffect, useState } from "react";
import { FileWithId, splitNameAndExtension } from "./utils";
import prettyBytes from "pretty-bytes";
import ProgressBar from "./ProgressBar";
import webpToRgba from "./webpToRgba";

export interface ConversionProps {
  file: FileWithId;
  converter: Converter;

  onFinished(outputFile: File): void;
}

export default function Conversion(props: ConversionProps) {
  // TODO file ID will be used for cancellation
  const [fileName, setFileName] = useState<string>();
  const [originalFormat, setOriginalFormat] = useState<string>();
  const [originalSize] = useState(props.file.data.byteLength);
  const [progress, setProgress] = useState(0);
  const [outputSize, setOutputSize] = useState(0);
  const [outputObjectURL, setOutputObjectURL] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    (async () => {
      const [fileName, format] = splitNameAndExtension(props.file.name);
      setFileName(fileName);
      setOriginalFormat(format);

      function onFinished(result: ConversionResult) {
        setFinished(true);
        const outputFile = new File([result.data], `${fileName}.avif`);
        setOutputObjectURL(URL.createObjectURL(outputFile));
        setOutputSize(result.data.length);
        props.onFinished(outputFile);
      }

      let conversionOptions: ConversionOptions;
      if (format === "webp") {
        const { data, width, height } = await webpToRgba(
          new Uint8Array(props.file.data)
        );
        conversionOptions = {
          inputData: data.buffer,
          isRawRgba: true,
          width,
          height,
          onFinished,
          onProgress: setProgress,
          onError: (e) => window.alert(e),
        };
      } else {
        conversionOptions = {
          inputData: props.file.data,
          onFinished,
          onProgress: setProgress,
          onError: (e) => window.alert(e),
        };
      }

      props.converter.convertFile(conversionOptions);
    })();
  }, []);

  const percentageSaved = Math.ceil((1 - outputSize / originalSize) * 100);

  const conversion = (
    <a
      download={`${fileName}.avif`}
      href={outputObjectURL}
      className={`conversion ${finished ? "finished" : "progress"}`}
    >
      <p className="filename">
        {fileName}
        {finished ? ".avif" : ""}
      </p>
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
        <span
          className={"download"}
        ></span>
      </div>
      <ProgressBar progress={progress} />
    </a>
  );
  return conversion;
}
