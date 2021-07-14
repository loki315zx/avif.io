import Conversion from "@components/Conversion";
import DownloadButton from "@components/DownloadButton";
import Dropzone from "@components/Dropzone";
import Layout from "@components/Layout";
import Tooltip from "@components/Tooltip";
import SettingsBox, { Settings } from "@components/SettingsBox";
import Converter from "@utils/converter";
import { uniqueId } from "@utils/utils";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import ReactCompareImage from "react-compare-image";
import meta from "@lib/meta.json";

import visualizer1 from "@assets/visualizer-1.svg";
import visualizer2 from "@assets/visualizer-2.svg";
import visualizer3 from "@assets/visualizer-3.svg";
import visualizer4 from "@assets/visualizer-4.svg";
import visualizer5 from "@assets/visualizer-5.svg";
import visualizer6 from "@assets/visualizer-6.svg";
import visualizer7 from "@assets/visualizer-7.svg";
import visualizer8 from "@assets/visualizer-8.svg";
import visualizer9 from "@assets/visualizer-9.svg";
import visualizer10 from "@assets/visualizer-10.svg";
import visualizer11 from "@assets/visualizer-11.svg";
import visualizer12 from "@assets/visualizer-12.svg";

import tutorial1 from "@assets/firefox.svg";
import tutorial2 from "@assets/safari.svg";
import tutorial3 from "@assets/edge.svg";
import tutorial4 from "@assets/css.svg";
import tutorial5 from "@assets/html.svg";
import tutorial6 from "@assets/angular.svg";
import tutorial7 from "@assets/react.svg";
import tutorial8 from "@assets/vue.svg";
import tutorial9 from "@assets/nextjs.svg";
import tutorial10 from "@assets/netlify.svg";
import tutorial11 from "@assets/cloudflare.svg";
import tutorial12 from "@assets/wordpress.svg";
import tutorial13 from "@assets/magento.svg";
import tutorial14 from "@assets/windows.svg";
import tutorial15 from "@assets/gimp.svg";

import cog from "@assets/settings.svg";

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
  image?: any;
}

interface TutorialsBoxProps {
  cssclass: string;
  title: string;
  url: string;
  image?: any;
}

/*
 Interfaces
*/

function AdvantageItem(props: Advantages) {
  return (
    <div
      className="overflow-hidden relative z-50 text-lg rounded-xl transition-all duration-200 ease-out transform-gpu hover:scale-105 group bg-bg-600 hover:bg-bg-500"
      style={{
        padding: "calc(100% - 8px) 8px 8px 8px",
      }}
    >
      <div className="absolute top-4 right-4 left-4 ease-in">
        {props.pre && props.pre}{" "}
        <span className="font-bold text-pink-700">{props.text}</span>{" "}
        {props.post}
      </div>
      <div
        className="absolute top-0 right-0 bottom-0 left-0 z-0 bg-center bg-contain rounded-lg ease-out origin-center group-hover:opacity-5 group-hover:scale-110 background-no-repeat group-hover:blur-md"
        id={props.number}
        style={{
          backgroundImage: `url(${props.image})`,
          opacity: "0.025",
          filter: "blur(4px)",
        }}
      ></div>
    </div>
  );
}

function TutorialsBox(props: TutorialsBoxProps) {
  return (
    <Link href={`/blog/tutorials/use-avif-in-${props.url}/`}>
      <a href={`/blog/tutorials/use-avif-in-${props.url}/`} tabIndex={0}>
        <div
          className={
            "py-7 md:p-rectangle group relative w-full cursor-pointer rounded-md md:rounded-xl lg:rounded-xl ease-in-out duration-300 overlay-before group transform hover:scale-105 hover:rotate-1 md:hover:rotate-6"
          }
          id={props.cssclass}
        >
          <div className="absolute top-0 right-0 bottom-0 left-0 rounded-md opacity-50 md:rounded-xl lg:rounded-xl group-hover:opacity-100 bg-gradient"></div>
          <div
            className={
              "flex items-center pl-4 overflow-hidden rounded-md md:rounded-xl lg:rounded-xl absolute top-0 right-0 left-0 bottom-0"
            }
          >
            <div
              style={{ opacity: 0.05, backgroundImage: `url(${props.image})` }}
              className="absolute top-0 right-0 bottom-0 left-0 bg-center bg-no-repeat bg-cover group-hover:blur-sm"
            ></div>
            <span className="relative z-50 text-xl font-bold">
              {props.title}
            </span>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 rounded-md md:rounded-xl lg:rounded-xl -z-1 bg-bg-400"></div>
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
    setFiles([
      ...files,
      ...selectedFiles.map((file) => ({ file, id: uniqueId() })),
    ]);
    setSettingsBoxOpen(false);
  }

  function onConversionFinished(file: File) {
    convertedFiles.push(file);
    setConvertedFiles([...convertedFiles]);
  }

  return (
    <Layout meta={meta.index}>
      <section className="px-3 mt-12 text-center">
        <h1>Convert all images to AVIF for free.</h1>
        <h2 className="mb-6 text-base font-normal">
          No data is sent. The magic happens in your browser.
          <Tooltip
            text="How?"
            explanation="We use Rav1e, Rust, and WASM to convert your images clientside."
          />
        </h2>

        <div
          style={{ width: 720 }}
          className={
            "relative animate-bouncingIn mx-auto flex flex-col items-center justify-center max-w-full rounded-xl p-4 bg-white bg-opacity-5" +
            " " +
            (settingsBoxOpen ? "open" : "")
          }
        >
          <Dropzone onDrop={onFilesSelected} />

          <button
            aria-label="Conversion settings"
            className={
              "absolute top-4 right-4 z-50 block w-5 h-5 p-5 cursor-pointer transition-all transform ease-cog duration-300 bg-no-repeat bg-center invisible md:visible" +
              " " +
              (settingsBoxOpen ? "rotate-180" : "rotate-0 ")
            }
            style={{
              backgroundImage: `url(${cog})`,
              backgroundSize: 24,
              filter: `${
                settingsBoxOpen
                  ? "invert(15%) sepia(52%) saturate(6095%) hue-rotate(348deg) brightness(87%) contrast(88%)"
                  : ""
              }`,
            }}
            onClick={() => setSettingsBoxOpen(!settingsBoxOpen)}
          ></button>
          <div
            className={
              "absolute top-0 left-full ml-4 w-24 h-auto p-4 bg-bg-400 rounded-md ease-out transform transition-all duration-500 origin-left" +
              " " +
              (settingsBoxOpen
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-12 scale-0 ")
            }
          >
            <SettingsBox
              open={settingsBoxOpen}
              onSettingsUpdate={onSettingsUpdate}
            />
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
      <div className="overflow-hidden max-w-full">
        <div
          className="absolute top-0 right-0 bottom-0 left-0 mx-auto w-3/5 rounded-full ease-in-out -z-1 bg-gradient animate-glow"
          style={{
            paddingTop: "30%",
            paddingBottom: "30%",
            filter: "blur(50px)",
          }}
        ></div>
      </div>
      <section
        className="container relative px-3 mt-12 mb-4 max-w-screen-lg"
        id="avifbadge"
      ></section>
      <section
        className="container relative px-3 max-w-screen-xl"
        id="avifadvantages"
      >
        <div className="grid grid-cols-1 gap-4 mb-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AdvantageItem
            text="reduces file size"
            post="of images by 20-90% for faster page loading"
            number="visualizer-1"
            image={visualizer1}
          />
          <AdvantageItem
            text="decreases required bandwidth"
            post="for service providers"
            number="visualizer-2"
            image={visualizer2}
          />
          <AdvantageItem
            text="actively developed by tech giants"
            post="like Google, Apple and Microsoft"
            number="visualizer-3"
            image={visualizer3}
          />
          <AdvantageItem
            text="open to use and royalty-free"
            post="for everyone"
            number="visualizer-4"
            image={visualizer4}
          />
          <AdvantageItem
            pre="provides the"
            text="highest quality to compression rate"
            post="ever achieved"
            number="visualizer-5"
            image={visualizer5}
          />
          <AdvantageItem
            pre="already"
            text="supported by Chrome, Opera and Firefox"
            number="visualizer-6"
            image={visualizer6}
          />
          <AdvantageItem
            text="supports transparency"
            post="and is therefore a better version of PNG"
            number="visualizer-7"
            image={visualizer7}
          />
          <AdvantageItem
            text="supports animated frames"
            post="which can replace GIFs and aPNGs"
            number="visualizer-8"
            image={visualizer8}
          />
          <AdvantageItem
            text="embraces HDR"
            post="with 12-bit color depth and wide color gamut"
            number="visualizer-9"
            image={visualizer9}
          />
          <AdvantageItem
            pre="provides"
            text="future-proof VP-10 codec technology"
            number="visualizer-10"
            image={visualizer10}
          />
          <AdvantageItem
            pre="latest GPUs already support"
            text="hardware decoding"
            number="visualizer-11"
            image={visualizer11}
          />
          <AdvantageItem
            text="rich of features for smartphones"
            post="like live photos"
            number="visualizer-12"
            image={visualizer12}
          />
        </div>
      </section>
      <section className="px-3 mx-auto max-w-screen-xl">
        <div className="relative">
          <ReactCompareImage
            leftImage={"/img/comparison.jpg"}
            rightImage={"/img/comparison.avif"}
            leftImageAlt="jpg image"
            rightImageAlt="avif image"
            sliderLineWidth={4}
            handle={
              <div
                role="button"
                className="py-4 px-2 bg-pink-700 rounded-lg"
                tabIndex={0}
                id="handle"
              />
            }
            sliderLineColor="rgba(255,255,255,0.2)"
            sliderPositionPercentage={0.5}
          />
          <p
            className="absolute top-4 left-4 py-2 px-3 rounded-md bg-bg-400"
            id="jpg"
          >
            jpg · 18kB
          </p>
          <p
            className="absolute top-4 right-4 py-2 px-3 rounded-md bg-bg-400"
            id="avif"
          >
            avif · 18kB
          </p>
        </div>
      </section>
      <section className="container relative z-10 px-3 mt-12 max-w-screen-xl">
        <h2 className="text-center">How to use AVIF</h2>
        <div className="my-6 mx-auto max-w-screen-md text-center">
          Support is constantly rising across browsers, software and hardware.
          Thanks to being royalty-free, companies can include the format without
          having to deal with patents. We created articles for you on how to get
          started on all different type of browsers, operating systems and
          software. We didn't cover your software? Feel free to tell us on
          support@avif.io and we will write an article about it.
        </div>
        <div className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 tutorials">
          <TutorialsBox
            cssclass="firefox"
            title="Firefox"
            url="firefox"
            image={tutorial1}
          />
          <TutorialsBox
            cssclass="safari"
            title="Safari"
            url="safari"
            image={tutorial2}
          />
          <TutorialsBox
            cssclass="edge"
            title="Edge"
            url="edge"
            image={tutorial3}
          />
          <TutorialsBox
            cssclass="css"
            title="CSS"
            url="css"
            image={tutorial4}
          />
          <TutorialsBox
            cssclass="html"
            title="HTML"
            url="html"
            image={tutorial5}
          />
          <TutorialsBox
            cssclass="angular"
            title="Angular"
            url="frameworks"
            image={tutorial6}
          />
          <TutorialsBox
            cssclass="react"
            title="React"
            url="frameworks"
            image={tutorial7}
          />
          <TutorialsBox
            cssclass="vue"
            title="Vue"
            url="frameworks"
            image={tutorial8}
          />
          <TutorialsBox
            cssclass="nextjs"
            title="Next.JS"
            url="nextjs"
            image={tutorial9}
          />
          <TutorialsBox
            cssclass="netlify"
            title="Netlify"
            url="netlify"
            image={tutorial10}
          />
          <TutorialsBox
            cssclass="cloudflare"
            title="Cloudflare"
            url="cloudflare"
            image={tutorial11}
          />
          <TutorialsBox
            cssclass="wordpress"
            title="WordPress"
            url="wordpress"
            image={tutorial12}
          />
          <TutorialsBox
            cssclass="magento"
            title="Magento"
            url="magento"
            image={tutorial13}
          />
          <TutorialsBox
            cssclass="windows"
            title="Windows"
            url="windows"
            image={tutorial14}
          />
          <TutorialsBox
            cssclass="gimp"
            title="GIMP"
            url="gimp"
            image={tutorial15}
          />
        </div>
      </section>

      <div className="container my-12 max-w-screen-md text-center">
        In the last ten years,{" "}
        <b>
          the size of an average web page has increased from 500 kb to 2000 kb
        </b>
        . Images always take up half the amount. A new image format is needed to
        stop the increasing size of images on the web. JPEG has been the most
        popular image format for years due to its high compatibility.
        <br /> <b>AVIF is the modern solution</b>. It was developed by the
        Alliance for Open Media, a collaboration of Google, Apple, Mozilla,
        Intel and other tech giants. AVIF is a codec for highly compressed
        images of acceptable quality and is constantly improving.{" "}
        <b>
          AVIF offers a significant reduction in file size compared to the
          current JPEG or WebP codecs
        </b>
        .<br /> You can reduce file sizes by 20-90%, even for images with
        transparency and animated frames. Currently supported by Chrome, Opera
        and Firefox, you can expect it to get more support soon.
        <br /> AVIF is being
        <b> developed by the most influential technology companies</b>. Netflix
        has already considered AVIF superior to JPEG and even newer WebP image
        formats in terms of image quality to compressed file size ratio. AV1 has
        been developed by industry leaders and technological innovators from all
        reputable companies. They licensed their codec patents royalty-free to
        create an ecosystem that would last. <br />{" "}
        <b>There is no other codec that seems as promising as AVIF</b>. With its
        widespread support, current feature rate, royalty-free usage and highest
        compression rate achieved, we are only a few steps away from creating a
        truly modern web. avif.io helps strengthening the support of AVIF by
        providing information, news, ressources and an image converter.
      </div>
    </Layout>
  );
}
