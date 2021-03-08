import { ReactElement, useEffect, useState } from "react";
import ReactCompareImage from "react-compare-image";

import Conversion from "@components/Conversion";
import Dropzone from "@components/Dropzone";
import DownloadButton from "@components/DownloadButton";
import SettingsBox, { Settings } from "@components/SettingsBox";
import Tutorials from "@components/Tutorials";
import Advantages from "@components/Advantages";

import Converter from "@utils/converter";
import { uniqueId } from "@utils/utils";

import comparison_jpg from "@assets/comparison.jpg";
import comparison_avif from "@assets/comparison.avif";

import Head from "next/head";

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
      <Head>
        <title>AVIF Converter | avif.io ✨</title>
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Convert all image types to AVIF for free.🚀 Supports bulk converting. Blazing fast. Privacy protected. Compress your images now!⏱"
        />
        <meta name="author" content="Justin Schmitz" />
        <link rel="canonical" href="https://avif.io" />
        <meta property="og:site_name" content="AVIF Converter | avif.io ✨" />
        <meta property="og:url" content="https://avif.io" />
        <meta property="og:title" content="AVIF Converter | avif.io ✨" />
        <meta
          property="og:description"
          content="Convert all image types to AVIF for free.🚀 Supports bulk converting. Blazing fast. Privacy protected. Compress your images now!⏱"
        />
        <meta property="twitter:site" content="@jschmitz97" />
        <meta property="twitter:url" content={"https://twitter.com/jschmitz97"} />
        <meta property="twitter:title" content="AVIF Converter | avif.io ✨" />
        <meta
          property="twitter:description"
          content="Convert all image types to AVIF for free.🚀 Supports bulk converting. Blazing fast. Privacy protected. Compress your images now!⏱"
        />
      </Head>

      <section className={"app-container"}>
        <h1>Convert any image to AVIF for free.</h1>
        <h2 className={"f1 m0 s4 center normal"}>
          No data is sent. The magic happens in your browser.
          <span className="tutorial">How?</span>
        </h2>

        <div className={"main-container" + " " + (settingsBoxOpen ? "open" : "")}>
          <Dropzone onDrop={onFilesSelected} />

          <button
            aria-label="Conversion settings"
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
          <DownloadButton files={convertedFiles} />
        </div>
      </section>
      <Advantages />
      <section className="avifcompare overlay-after">
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
          <p id="jpg">jpg · 45kB</p>
          <p id="avif">avif · 45kB</p>
        </div>
      </section>
      <Tutorials />

      <div className="advantages-explainer">
        In the last ten years, an average website’s size has increased from 500kb to 2000kb. Images
        have always been taking up half the amount. There's a need for a new image format to stop
        the increasing size of pictures on the web. For years, JPEG has remained the most popular
        picture format due to its high compatibility. AVIF is the modern solution. It is developed
        by the Alliance for Open Media, a collaboration of Google, Apple, Mozilla, Intel and other
        tech giants. AVIF is a codec for super-compressed images with acceptable quality, and it’s
        constantly getting better. AVIF offers significant reductions in file size over the current
        JPEG or WebP codecs. You can reduce file sizes by 20-90%, even for images with transparency
        and animated frames. Currently supported by Chrome, Opera and Firefox, you can expect it to
        get more support soon. The most influential tech companies develop AVIF. Netflix has already
        considered .avif superior to the JPEG, PNG, and even the newer WebP image formats for its
        image quality to compressed file size ratio. AV1 was created by industry leaders and
        technology innovators from all prestigious companies. They licensed their codec patents
        royalty-free to create an ecosystem that would endure. There is no other codec that seems as
        promising as AVIF. With its widespread support, current feature rate, license-free usage,
        and the highest compression rate achieved, we are only steps away from creating a truly
        modern web.
      </div>
    </>
  );
}
