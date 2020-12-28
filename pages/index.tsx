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

import Head from "next/head";
import Header from "@components/Header";

interface FileWithId {
  file: File;
  id: number;
}

const ldJson = `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How to convert JPG to AVIF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "1. Open up https://avif.io
2. Drag and drop your jpg images or use the browsing function
3. The conversion will happen automatically
4. Download the AVIF files by pressing the Download or Download All button"
    }
  },{
    "@type": "Question",
    "name": "How to convert WEBP to AVIF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "1. Open up https://avif.io
2. Drag and drop your webp images or use the browsing function
3. The conversion will happen automatically
4. Download the AVIF files by pressing the Download or Download All button"
    }
  },{
    "@type": "Question",
    "name": "How to convert PNG to AVIF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "1. Open up https://avif.io
2. Drag and drop your png images or use the browsing function
3. The conversion will happen automatically
4. Download the AVIF files by pressing the Download or Download All button"
    }
  },{
    "@type": "Question",
    "name": "How to convert GIF to AVIF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "1. Open up https://avif.io
2. Drag and drop your gif images or use the browsing function
3. The conversion will happen automatically
4. Download the AVIF files by pressing the Download or Download All button"
    }
  },{
    "@type": "Question",
    "name": "How to convert BMP to AVIF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "1. Open up https://avif.io
2. Drag and drop your bmp images or use the browsing function
3. The conversion will happen automatically
4. Download the AVIF files by pressing the Download or Download All button"
    }
  }]
}
`;

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
        <meta
          name="description"
          content="Convert all image types to AVIF for free.🚀 Supports bulk converting. Blazing fast. Privacy protected. Compress your images now!⏱"
        />
        <meta
          property="og:description"
          content="Convert all image types to AVIF for free.🚀 Supports bulk converting. Blazing fast. Privacy protected. Compress your images now!⏱"
        />
        <meta property="og:determiner" content="the" />
        <meta property="og:url" content="https://avif.io" />
        <meta property="og:site_name" content="AVIF Converter | avif.io ✨" />
        <script type="application/ld+json">{ldJson}</script>
      </Head>
      <Header />
      <div className={"app-container"}>
        <div className="app-container-blur overlay"></div>
        <h1 className={"f3 white bold s1"}>Convert any images to AVIF for free.</h1>
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
          <p id="jpg">jpg · 45kb</p>
          <p id="avif">avif · 45kb</p>
        </div>
      </section>
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
        AVIF is developed by the most influential tech companies. Netflix has already considered
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
