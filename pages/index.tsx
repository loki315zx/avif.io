import Conversion from "@components/Conversion";
import DownloadButton from "@components/DownloadButton";
import Dropzone from "@components/Dropzone";
import Layout from "@components/Layout";
import SettingsBox, { Settings } from "@components/SettingsBox";
import Converter from "@utils/converter";
import { uniqueId } from "@utils/utils";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import ReactCompareImage from "react-compare-image";
import meta from "@lib/meta.json";

/*
 Interfaces
*/

interface FileWithId {
  file: File;
  id: number;
}

interface Advantages {
  pre?: string;
  text?: string;
  post?: string;
  number?: string;
}

interface TutorialsBoxProps {
  cssclass: string;
  title: string;
  url: string;
}

/*
 Interfaces
*/

function AdvantageItem(props: Advantages) {
  return (
    <div className="advantage__grid__item">
      <div className="advantage__text f2">
        {props.pre && props.pre} <span className="advantage__important">{props.text}</span>{" "}
        {props.post}
      </div>
      <div className="advantage__visualizer overlay" id={props.number}></div>
    </div>
  );
}

function TutorialsBox(props: TutorialsBoxProps) {
  return (
    <Link href={`/blog/tutorials/use-avif-in-${props.url}/`}>
      <a href={`/blog/tutorials/use-avif-in-${props.url}/`} tabIndex={0}>
        <div className={"tutorials__box overlay-before"} id={props.cssclass}>
          <div className={"tutorial__overflow overlay"}>
            <span className="tutorial__title">{props.title}</span>
          </div>
          <div className="tutorial__shadow overlay"></div>
        </div>
      </a>
    </Link>
  );
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
    <Layout meta={meta.index}>
      <section className={"app-container"}>
        <h1>Convert all images to AVIF for free.</h1>
        <h2 className={"f1 m0 s3 center normal"}>
          No data is sent. The magic happens in your browser.
          <span tabIndex={0} role="button" className="tutorial">
            How?
          </span>
        </h2>

        <div className={"main-container" + " " + (settingsBoxOpen ? "open" : "")}>
          <Dropzone onDrop={onFilesSelected} />

          <button
            aria-label="Conversion settings"
            className={"will-change cog-button" + " " + (settingsBoxOpen ? "open" : "")}
            onClick={() => setSettingsBoxOpen(!settingsBoxOpen)}
          ></button>
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
      <div className="badge__shadow__container">
        <div className="badge__shadow overlay"></div>
      </div>
      <section id="avifbadge">
        <div className="white center badge__avif">
          <p>
            <b>.AVIF</b>
          </p>
        </div>
      </section>
      <section id="avifadvantages">
        <div className="advantage__grid  grid">
          <AdvantageItem
            text="reduces file size"
            post="of images by 20-90% for faster page loading"
            number="visualizer-1"
          />
          <AdvantageItem
            text="decreases required bandwidth"
            post="for service providers"
            number="visualizer-2"
          />
          <AdvantageItem
            text="actively developed by tech giants"
            post="like Google, Apple and Microsoft"
            number="visualizer-3"
          />
          <AdvantageItem
            text="open to use and royalty-free"
            post="for everyone"
            number="visualizer-4"
          />
          <AdvantageItem
            pre="provides the"
            text="highest quality to compression rate"
            post="ever achieved"
            number="visualizer-5"
          />
          <AdvantageItem
            pre="already"
            text="supported by Chrome, Opera and Firefox"
            number="visualizer-6"
          />
          <AdvantageItem
            text="supports transparency"
            post="and is therefore a better version of PNG"
            number="visualizer-7"
          />
          <AdvantageItem
            text="supports animated frames"
            post="which can replace GIFs and aPNGs"
            number="visualizer-8"
          />
          <AdvantageItem
            text="embraces HDR"
            post="with 12-bit color depth and wide color gamut"
            number="visualizer-9"
          />
          <AdvantageItem
            pre="provides"
            text="future-proof VP-10 codec technology"
            number="visualizer-10"
          />
          <AdvantageItem
            pre="latest GPUs already support"
            text="hardware decoding"
            number="visualizer-11"
          />
          <AdvantageItem
            text="rich of features for smartphones"
            post="like live photos"
            number="visualizer-12"
          />
        </div>
      </section>
      <section className="avifcompare overlay-after">
        <div id="comparison__container">
          <ReactCompareImage
            leftImage={"/img/comparison.jpg"}
            rightImage={"/img/comparison.avif"}
            leftImageAlt="jpg image"
            rightImageAlt="avif image"
            sliderLineWidth={4}
            handle={<div role="button" tabIndex={0} id="handle" />}
            sliderLineColor="rgba(255,255,255,0.2)"
            sliderPositionPercentage={0.5}
          />
          <p id="jpg">jpg · 18kB</p>
          <p id="avif">avif · 18kB</p>
        </div>
      </section>
      <section className="section__tutorials">
        <h2 className="center">How to use AVIF</h2>
        <div className="white s3 center explainer">
          Support is constantly rising across browsers, software and hardware. Thanks to being
          royalty-free, companies can include the format without having to deal with patents. We
          created articles for you on how to get started on all different type of browsers,
          operating systems and software. We didn't cover your software? Feel free to tell us on
          support@avif.io and we will write an article about it.
        </div>
        <div className="tutorials__container">
          <TutorialsBox cssclass="firefox" title="Firefox" url="firefox" />
          <TutorialsBox cssclass="safari" title="Safari" url="safari" />
          <TutorialsBox cssclass="edge" title="Edge" url="edge" />
          <TutorialsBox cssclass="css" title="CSS" url="css" />
          <TutorialsBox cssclass="html" title="HTML" url="html" />
          <TutorialsBox cssclass="angular" title="Angular" url="frameworks" />
          <TutorialsBox cssclass="react" title="React" url="frameworks" />
          <TutorialsBox cssclass="vue" title="Vue" url="frameworks" />
          <TutorialsBox cssclass="nextjs" title="Next.JS" url="nextjs" />
          <TutorialsBox cssclass="netlify" title="Netlify" url="netlify" />
          <TutorialsBox cssclass="cloudflare" title="Cloudflare" url="cloudflare" />
          <TutorialsBox cssclass="wordpress" title="WordPress" url="wordpress" />
          <TutorialsBox cssclass="magento" title="Magento" url="magento" />
          <TutorialsBox cssclass="windows" title="Windows" url="windows" />
          <TutorialsBox cssclass="gimp" title="GIMP" url="gimp" />
        </div>
      </section>

      <div className="advantages-explainer">
        In the last ten years,{" "}
        <b>the size of an average web page has increased from 500 kb to 2000 kb</b>. Images always
        take up half the amount. A new image format is needed to stop the increasing size of images
        on the web. JPEG has been the most popular image format for years due to its high
        compatibility.
        <br /> <b>AVIF is the modern solution</b>. It was developed by the Alliance for Open Media,
        a collaboration of Google, Apple, Mozilla, Intel and other tech giants. AVIF is a codec for
        highly compressed images of acceptable quality and is constantly improving.{" "}
        <b>
          AVIF offers a significant reduction in file size compared to the current JPEG or WebP
          codecs
        </b>
        .<br /> You can reduce file sizes by 20-90%, even for images with transparency and animated
        frames. Currently supported by Chrome, Opera and Firefox, you can expect it to get more
        support soon.
        <br /> AVIF is being<b> developed by the most influential technology companies</b>. Netflix
        has already considered AVIF superior to JPEG and even newer WebP image formats in terms of
        image quality to compressed file size ratio. AV1 has been developed by industry leaders and
        technological innovators from all reputable companies. They licensed their codec patents
        royalty-free to create an ecosystem that would last. <br />{" "}
        <b>There is no other codec that seems as promising as AVIF</b>. With its widespread support,
        current feature rate, royalty-free usage and highest compression rate achieved, we are only
        a few steps away from creating a truly modern web. avif.io helps strengthening the support
        of AVIF by providing information, news, ressources and an image converter.
      </div>
    </Layout>
  );
}
