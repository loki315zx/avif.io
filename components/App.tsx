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
import { motion } from "framer-motion";

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
      <section id="avifbadge">

          <div className="white center badge__avif">
            <p className="bold">.AVIF
            </p>
            <motion.div    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", type: "scale",  damping: 0, mass: 0.5 }}
            animate={{
      scale: [1, 1.5]
    }} className="badge__shadow"></motion.div>
          </div>
          </section>
          <section id="avifadvantages">
          <div className="advantage__grid">
          <div className="advantage__grid__item">usually <span className="advantage__important">reduces file size</span> of images by 20-90% for faster page loading.</div>
          <div className="advantage__grid__item"><span className="advantage__important">decreases required bandwidth</span> for service providers.</div>
          <div className="advantage__grid__item">
          <span className="advantage__important">is actively developed by tech giants</span> like Google, Apple, Facebook, Microsoft,
            Mozilla, Netflix & Nvidia.
          </div>
          <div className="advantage__grid__item">is open to use and <span className="advantage__important">royalty-free</span> for everyone.</div>
          <div className="advantage__grid__item">provides the <span className="advantage__important">highest quality to compression rate</span> ever achieved.</div>
          <div className="advantage__grid__item">
            already <span className="advantage__important">supported by browsers</span> like Chrome, Opera and Firefox.
          </div>
          <div className="advantage__grid__item">
          <span className="advantage__important">supports transparency</span> and is therefore a better version of PNG.
          </div>
          <div className="advantage__grid__item">
          <span className="advantage__important">offers support for animated frames</span> and can replace GIFs as well as aPNGs.
          </div>
          <div className="advantage__grid__item">
          <span className="advantage__important">embraces HDR and wide color gamut</span> for viewing images on a wider range of colors.
          </div>
        </div>
        <ReactCompareImage
              leftImage={lion}
              rightImage={lion2}
              leftImageAlt="jpg image"
              rightImageAlt="avif image"
              sliderLineWidth={4}
              handle={<div className="handle" />}
              sliderLineColor="rgba(255,255,255,0.2)"
              sliderPositionPercentage={0.5}
            />
      </section>
      <section id="avifcompare">

      </section>
    </>
  );
}
