import React, { useEffect, useState } from "react";
import ReactCompareImage from "react-compare-image";
import _ from "lodash";
import Conversion from "./Conversion";
import Dropzone from "./Dropzone";
import Tutorials from "./Tutorials";
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
    quality: 75,
    useYuv444: true,
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
    <>
      <div className={"app-container"}>
        <h1 className={"f3 white bold s1"}>
          Convert any images to avif for free.
        </h1>
        <h2 className={"f1 white s4 infobox"}>
          No data is sent. The magic happens in your browser.
        </h2>

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

      <Tutorials />
      <section id="whatisavif">
        <div className="badge__grid">
          <div className="white center s2 badge__avif">
            <p className="bold">
              What is<span>.avif?</span>
            </p>
          </div>
          <div className="badge__grid__item">80% more bullshit</div>
          <div className="badge__grid__item">242 more cool things</div>
          <div className="badge__grid__item">
            developed by tech giants like Google, Apple, Facebook, Microsoft,
            Mozilla, Netflix, Nvidia
          </div>
          <div className="badge__grid__item">80% more bullshit</div>
          <div className="badge__grid__item">242 more cool things</div>
          <div className="badge__grid__item">
            developed by Google, Apple and more
          </div>
        </div>
      </section>
    </>
  );
}
