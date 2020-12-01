import React, { useEffect, useState } from "react";
import ReactCompareImage from "react-compare-image";
import _ from "lodash";
import Conversion from "./Conversion";
import Dropzone from "./Dropzone";
import DownloadAllButton from "./DownloadAllButton";
import SettingsBox, { Settings } from "./SettingsBox";
import Converter from "../src/converter";
import { FileWithId, uniqueId } from "../src/utils";
import lion from "../assets/images/lion.jpg";
import lion2 from "../assets/images/lion2.avif";

export default function App() {
  const [converter, setConverter] = useState<Converter>();
  const [files, setFiles] = useState<FileWithId[]>([]);
  const [convertedFiles, setConvertedFiles] = useState<File[]>([]);
  const [settingsBoxOpen, setSettingsBoxOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    effort: 25,
    quality: 50,
    useYuv444: false,
    keepTransparency: true,
  });

  useEffect(() => {
    setConverter(new Converter());
  }, []);

  function onSettingsUpdate(settings: Settings) {
    setSettings(settings);
  }

  async function onFilesSelected(selectedFiles: File[]) {
    const addedFiles = await Promise.all(
      _.map(selectedFiles, async (file) => ({
        name: file.name,
        data: await file.arrayBuffer(),
        id: uniqueId(),
      }))
    );

    setFiles([...files, ...addedFiles]);
    setSettingsBoxOpen(false);
  }

  function onConversionFinished(file: File) {
    convertedFiles.push(file);
    setConvertedFiles([...convertedFiles]);
  }


  return (
    <div>
      <div className={"app-container"}>
        <h1 className={"f3 white bold s1"}>Convert any images to avif for free.</h1>
        <h2 className={"f1 white s4"}>No data is sent. The magic happens in your browser.</h2>

        <div
          className={"main-container" + " " + (settingsBoxOpen ? "open" : "")}
        >
          <Dropzone onDrop={onFilesSelected} />

          <p
              className={"cog-button" + " " + (settingsBoxOpen ? "open" : "")}
              onClick={() => setSettingsBoxOpen(!settingsBoxOpen)}
            ></p>
          <div
            className={"settings_cog" + " " + (settingsBoxOpen ? "open" : "")}
          >
            <SettingsBox
              open={settingsBoxOpen}
              onSettingsUpdate={onSettingsUpdate}
            />
          </div>

          {files.map((f) => (
            <Conversion
              onFinished={onConversionFinished}
              settings={settings}
              file={f}
              converter={converter}
              key={f.id}
            />
          ))}
          <DownloadAllButton files={convertedFiles} />
        </div>
        <div className="chevron" />
      </div>


    </div>
  );
}
