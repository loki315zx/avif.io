import { ReactElement, useEffect, useState } from "react";
import ReactCompareImage from "react-compare-image";

import Conversion from "@components/Conversion";
import Dropzone from "@components/Dropzone";
import DownloadAllButton from "@components/DownloadAllButton";
import SettingsBox, { Settings } from "@components/SettingsBox";
import Tutorials from "@components/Tutorials";
import Advantages from "@components/Advantages";
import Footer from "@components/Footer";
import CTA from "@components/CTA";

import Converter from "@utils/converter";
import { uniqueId } from "@utils/utils";

import comparison_jpg from "@images/comparison.jpg";
import comparison_avif from "@images/comparison.avif";

interface FileWithId {
  file: File;
  id: number;
}

export default function App(): ReactElement {
  const [converter, setConverter] = useState<Converter>();
  const [files, setFiles] = useState<FileWithId[]>([]);
  const [convertedFiles, setConvertedFiles] = useState<File[]>([]);
  const [settingsBoxOpen, setSettingsBoxOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    effort: 25,
    quality: 75,
    useYuv444: false,
    keepTransparency: true,
  });

  useEffect(() => setConverter(new Converter()), []);

  function onSettingsUpdate(settings: Settings) {
    setSettings(settings);
  }

  async function onFilesSelected(selectedFiles: File[]) {
    setFiles([...files, ...selectedFiles.map((file) => ({ file, id: uniqueId() }))]);
    setSettingsBoxOpen(false);
  }

  function onConversionFinished(file: File) {
    convertedFiles.push(file);
    setConvertedFiles([...convertedFiles]);
  }

  return (
    <>
      <div className={"app-container"}>
        <div className="app-container-blur"></div>
        <h1 className={"f3 white bold s1"}>Convert any images to avif for free.</h1>
        <h2 className={"f1 white s4 infobox"}>
          No data is sent. The magic happens in your browser.
        </h2>

        <div className={"main-container" + " " + (settingsBoxOpen ? "open" : "")}>
          <Dropzone onDrop={onFilesSelected} />

          <button
            className={"will-change cog-button" + " " + (settingsBoxOpen ? "open" : "")}
            onClick={() => setSettingsBoxOpen(!settingsBoxOpen)}></button>
          <div className={"settings_cog" + " " + (settingsBoxOpen ? "open" : "")}>
            <SettingsBox open={settingsBoxOpen} onSettingsUpdate={onSettingsUpdate} />
          </div>

          {converter &&
            files.map(({ file, id }) => (
              <Conversion
                onFinished={onConversionFinished}
                settings={settings}
                file={file}
                converter={converter}
                key={id}
              />
            ))}
          <DownloadAllButton files={convertedFiles} />
        </div>
        <div className="chevron" />
      </div>
      <Tutorials />
      <Advantages />
      <section id="avifcompare">
        <div id="comparison__container">
          <ReactCompareImage
            leftImage={comparison_jpg}
            rightImage={comparison_avif}
            leftImageAlt="jpg image"
            rightImageAlt="avif image"
            sliderLineWidth={4}
            handle={<div id="handle" />}
            sliderLineColor="rgba(255,255,255,0.2)"
            sliderPositionPercentage={0.5}
          />
          <p id="jpg">jpg · 45kb</p>
          <p id="avif">avif · 45kb</p>
        </div>
      </section>
      {/*
      <section className="more__grid">
        <div className="more__item">
          <div className="f2 s2">Comparisons</div>
          <div className="more__badges">
            <div className="badge">webp</div>
            <div className="badge">jpg</div>
            <div className="badge">jpegxl</div>
            <div className="badge">png</div>
            <div className="badge">mozjpg</div>
            <div className="badge">oxipng</div>
            <div className="badge">gif</div>
            <div className="badge">bmp</div>
            <div className="badge">svg</div>
            <div className="badge">heif</div>
          </div>
        </div>
        <div className="more__item">
          <div className="f2 s2">Usecases</div>
          <div className="more__badges">
            <div className="badge">Increase Conversions</div>
            <div className="badge">SaaS</div>
            <div className="badge">e-Commerce</div>
            <div className="badge">Improve SEO</div>
            <div className="badge">Save Data</div>
            <div className="badge">Performance</div>
            <div className="badge">User Experience</div>
          </div>
        </div>
        <div className="more__item">
          <div className="f2 s2">Support</div>
          <div className="more__badges">
            <div className="badge">'Can I use?'-overview</div>
            <div className="badge">Browser Support</div>
            <div className="badge">Software Support</div>
            <div className="badge">Hardware Support</div>
          </div>
        </div>
      </section>
*/}
      <CTA />
      <div className="advantages-explainer">
        In the last 10 years, the size of an average website has increased from 500kb to 2000kb.
        Images have always been taking up half the amount. To counteract the increasing size, the
        web is in need of a new alternative to JPEG, which currently is the most popular image
        format, despite its age and due to its high compability. AV1 (.avif) is the modern solution.
        It is developed by the Alliance for Open Media, a collaboration of Google, Apple Mozilla,
        Intel and other tech giants. Avif is a codec for super-compressed images with acceptable
        quality. Avif is in continuous development with the goal to achieve the best ratio of
        compression and quality. Avif offers significant reduction of file size compared to the
        current JPEG or WebP codec. You can typically reduce file sizes by 20-90%. Even for images
        with transparency or animated frames. Currently supported by Chrome, Opera and Firefox, you
        can expect it to get more support quickly.
      </div>
      <div className="advantages-explainer">
        avif is developed by the most influential tech companies. Netflix has already considered
        .avif superior to the JPEG, PNG, and even the newer WebP image formats for its image quality
        to compressed file size ratio. Leaders and technology innovators from all prominent
        companies contributed to the creation of AV1. They licensed their patents essential to the
        codec on a royalty-free basis to create an enduring ecosystem. No other codec looks as
        promising as avif. With its vast support, current feature rate, license-free usage and the
        best compression rate ever achieved, we are just a step away from innovating the modern web.
      </div>
      <Footer />
    </>
  );
}
