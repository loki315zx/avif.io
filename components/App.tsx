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
import TutorialsBox from "./TutorialsBox";

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

      <div className="tutorial_container">
      <div className="text-60 f3 white">
        How to use avif in a productive environment.
      </div>
      <div className="text-40 white s5">
        AV1 (.avif) is the solution. It is developed by the Alliance for Open
        Media in collaboration with Google, Mozilla, Intel and other tech
        giants.
      </div>
      <div className="tutorials_container s5">
        <TutorialsBox cssclass="css" title="CSS" />
        <TutorialsBox cssclass="html" title="HTML" />
        <TutorialsBox cssclass="js" title="JS" />
        <TutorialsBox cssclass="svelte" title="Svelte" />
        <TutorialsBox cssclass="react" title="React" />
        <TutorialsBox cssclass="angular" title="Angular" />
        <TutorialsBox cssclass="vue" title="Vue" />
        <TutorialsBox cssclass="firefox" title="Firefox" />
        <TutorialsBox cssclass="gimp" title="GIMP" />
        <TutorialsBox cssclass="windows" title="Windows" />
        <TutorialsBox cssclass="netlify" title="Netlify" />
        <TutorialsBox cssclass="wordpress" title="WordPress" />
      </div>
    </div>
      <section id="whatisavif">

          <div className="white center s3 badge__avif">
            <p className="bold">.AVIF
            </p>
          </div>
          <div className="badge__grid">
          <div className="badge__grid__item">usually reduces image file size by 20-90%</div>
          <div className="badge__grid__item">reduces required bandwidth for service providers</div>
          <div className="badge__grid__item">
            developed by tech giants like Google, Apple, Facebook, Microsoft,
            Mozilla, Netflix, Nvidia
          </div>
          <div className="badge__grid__item">open and royalty-free for everyone</div>
          <div className="badge__grid__item">one of the highest quality to compression rates ever achieved</div>
          <div className="badge__grid__item">
            already supported by Chrome, Opera and Firefox
          </div>
          <div className="badge__grid__item">
            supports transparency
          </div>
          <div className="badge__grid__item">
            supports animated frames
          </div>
        </div>
      </section>
    </>
  );
}
