import React, { useEffect, useState } from "react";
import _ from "lodash";
import Converter from "./converter";
import Conversion from "./Conversion";
import Dropzone from "./Dropzone";
import { FileWithId, uniqueId } from "./utils";
import "./normalize.min.css";
import "./App.css";
import DownloadAllButton from "./DownloadAllButton";
import lion from "./assets/lion.jpg";
import lion2 from "./assets/lion2.avif";
import ReactCompareImage from "react-compare-image";
import SettingsBox, { Settings } from "./SettingsBox";

export default function App() {
  const [converter, setConverter] = useState<Converter>();
  const [files, setFiles] = useState<FileWithId[]>([]);
  const [convertedFiles, setConvertedFiles] = useState<File[]>([]);
  const [settingsBoxOpen, setSettingsBoxOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>({
    effort: 0,
    quality: 0,
    useYuv444: false,
    keepTransparency: false,
  });
  const [tutorial, setTutorial] = useState("css");

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

  const css = (
    <div className="container-code" id="css-tutorial">
      <p className="s1">
        <a
          className="blue"
          href="https://github.com/djpogo/avif-webp-css-support"
          title="avif detection"
        >
          Check for avif support & use
        </a>
      </p>
      <div className="opacity-half">
        <p className="gray">
          <span className="secondary">.div</span>
          <span className="braces">{`{`}</span>
          <span className="primary">{`background-image: url("lion.jpg")`}</span>
          <span className="braces">{`}`}</span>
        </p>

        <p className="gray">
          <span className="secondary">.webp .div</span>
          <span className="braces">{`{`}</span>
          <span className="primary">
            {`background-image: url("lion.webp")`}
          </span>
          <span className="braces">{`}`}</span>
        </p>
      </div>

      <p className="gray">
        <span className="secondary">.avif .div</span>
        <span className="braces">{`{`}</span>
        <span className="blue">{`background-image: url("lion.avif")`}</span>
        <span className="braces">{`}`}</span>
      </p>
    </div>
  );

  const html = (
    <div className="container-code" id="html-tutorial">
      <p className="gray">
        <span>{`<`}</span>
        <span className="secondary">picture</span>
        <span>{`>`}</span>
      </p>

      <p className="gray">
        <span className="braces">{`<`}</span>
        <span className="secondary">source </span>
        <span>type=</span>
        <span className="blue">"image/avif" </span>
        <span>srcset=</span>
        <span className="blue">"lion.avif"</span>
        <span className="braces">{`>`}</span>
      </p>
      <div className="opacity-half">
        <p className="gray">
          <span className="braces">{`<`}</span>
          <span className="secondary">source </span>
          <span>type=</span>
          <span className="primary">"image/webp" </span>
          <span>srcset=</span>
          <span className="primary">"lion.webp"</span>
          <span className="braces">{`>`}</span>
        </p>

        <p className="gray">
          <span className="braces">{`<`}</span>
          <span className="secondary">source </span>
          <span>type=</span>
          <span className="primary">"image/jpg" </span>
          <span>srcset=</span>
          <span className="primary">"lion.jpg"</span>
          <span className="braces">{`>`}</span>
        </p>

        <p className="gray">
          <span>{`<`}</span>
          <span className="secondary">/picture</span>
          <span>{`>`}</span>
        </p>
      </div>
    </div>
  );

  const wordpress = (
    <div className="container-code" id="wordpress-tutorial">
      <p>By default, WordPress does not (yet) accept avif files.</p>
      <p>
        {" "}
        In order to upload them,{" "}
        <a
          href="https://wordpress.org/plugins/wp-add-mime-types/"
          title="mime type"
        >
          use this plugin
        </a>{" "}
        and
      </p>
      <p>
        enable the mime type with:{" "}
        <span className="blue">avif = image/avif</span>.
      </p>
      <div>
        Then, add images to your site with the picture element:
        <p className="s1" />
        <p className="gray">
          <span>{`<`}</span>
          <span className="secondary">picture</span>
          <span>{`>`}</span>
        </p>
        <p className="gray">
          <span className="braces">{`<`}</span>
          <span className="secondary">source </span>
          <span>type=</span>
          <span className="blue">"image/avif" </span>
          <span>srcset=</span>
          <span className="blue">"lion.avif"</span>
          <span className="braces">{`>`}</span>
        </p>
        <div className="opacity-half">
          <p className="gray">
            <span className="braces">{`<`}</span>
            <span className="secondary">source </span>
            <span>type=</span>
            <span className="primary">"image/webp" </span>
            <span>srcset=</span>
            <span className="primary">"lion.webp"</span>
            <span className="braces">{`>`}</span>
          </p>

          <p className="gray">
            <span className="braces">{`<`}</span>
            <span className="secondary">source </span>
            <span>type=</span>
            <span className="primary">"image/jpg" </span>
            <span>srcset=</span>
            <span className="primary">"lion.jpg"</span>
            <span className="braces">{`>`}</span>
          </p>

          <p className="gray">
            <span>{`<`}</span>
            <span className="secondary">/picture</span>
            <span>{`>`}</span>
          </p>
        </div>
      </div>
    </div>
  );

  const netlify = (
    <div className="container-code" id="netlify-tutorial">
      <p className="s1">
        Define a custom header within the Netlify configuration file:
      </p>
      <div className="secondary s1">
        <p>[[headers]]</p> <p>for = "*.avif"</p>
        <p>[headers.values]</p>
        <p>Content-Type = "image/avif"</p>
        <p>Content-Disposition = "inline"</p>
      </div>

      <div>
        Now you can add images to your site with the picture element (see HTML).
        <a
          href="https://reachlightspeed.com/blog/using-the-new-high-performance-avif-image-format-on-the-web-today/"
          title="avif on netlify"
        >
          Thanks to Lightspeed for this approach.
        </a>
      </div>
    </div>
  );

  return (
    <div>
      <div className="header-two">
        This website uses GA to improve performance.
        <a
          href="https://tools.google.com/dlpage/gaoptout?hl=de"
          title="google analytics"
        >
          Click to deactivate.
        </a>
      </div>
      <div className={"app-container"}>
        <div className={"title f3 blue bold s1"}>avif.io</div>
        <h1 className={"f1 secondary"}>Convert any image to avif for free.</h1>
        <h2 className={"f1 secondary s3"}>works fast, simple and without uploading files</h2>

        <div
          className={"main-container" + " " + (settingsBoxOpen ? "open" : "")}
        >
          <Dropzone onDrop={onFilesSelected} />

          <div
            className={"settings_cog" + " " + (settingsBoxOpen ? "open" : "")}
          >
            <p
              className={"cog-button" + " " + (settingsBoxOpen ? "open" : "")}
              onClick={() => setSettingsBoxOpen(!settingsBoxOpen)}
            ></p>
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
        </div>
        <DownloadAllButton files={convertedFiles} />
        <div className="chevron" />
      </div>

      <div className="section" id="howto">
        <div className="f3 blue bold s4">How to use avif.</div>
        <div className="flex-center">
          <div className={"left-half " + tutorial}>
            <div
              className={"f2 bold secondary"}
              id="css"
              onClick={() => setTutorial("css")}
            >
              CSS
            </div>
            <div
              className={"f2 bold secondary"}
              id="html"
              onClick={() => setTutorial("html")}
            >
              HTML
            </div>
            <div
              className={"f2 bold secondary"}
              id="wordpress"
              onClick={() => setTutorial("wordpress")}
            >
              WordPress
            </div>
            <div
              className={"f2 bold secondary"}
              id="netlify"
              onClick={() => setTutorial("netlify")}
            >
              Netlify
            </div>
          </div>

          <div className={"right-half " + tutorial}>
            {css}
            {html}
            {wordpress}
            {netlify}
          </div>
        </div>
      </div>

      <div className="section" id="whatisavif">
        <div className="f3 blue bold s4">avif is the future.</div>
        <div className="flex-center">
          <div className="left-half">
            <div className="f1 secondary s2">
              <a
                className="secondary"
                href="https://httparchive.org/reports/page-weight?start=earliest&end=latest&view=list#bytesImg"
                title="image size"
              >
                In the last 10 years, the size of an average website has
                increased from 500kb to 2000kb. Images have always been taking
                up half the amount. To counteract the increasing size, the web
                is in need of a new alternative to JPEG.
              </a>
            </div>
            <div className="f1 secondary s2">
              AV1 (.avif) is the solution. It is developed by the Alliance for
              Open Media in collaboration with Google, Mozilla, Intel and other
              tech giants. Avif is a codec for super-compressed images with
              acceptable quality. Avif is in continuous development with the
              goal to achieve the best ratio of compression and quality.
            </div>
            <div className="f1 secondary">
              Avif offers significant reduction of file size compared to the
              current JPEG or WebP codec. You can typically reduce file sizes by
              20-90%. Even for images with transparency or animated frames.
              While currently only supported by Chrome, you can expect it to get
              more support quickly.
              <a title="avif support progress" href="https://caniuse.com/avif">
                View the progress.
              </a>
            </div>
          </div>
          <div className="right-half" id="comparison-img">
            <ReactCompareImage
              leftImage={lion2}
              rightImage={lion}
              leftImageAlt="avif image"
              rightImageAlt="jpg image"
              sliderLineWidth={4}
              handle={<div className="handle" />}
              sliderLineColor="rgba(255,255,255,0.2)"
              sliderPositionPercentage={0.5}
            />
            <div className="comparison-sub">
              <div>
                avif · <span className="blue">50kb</span>
              </div>
              <div>jpg ·75kb</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section" id="supportedbyplayers">
        <div className="f3 blue bold s4">Supported by big players.</div>
        <div className="flex-center">
          <div className="left-half">
            <div className="f1 secondary s2">
              <a
                className="secondary"
                title="netflix is using avif"
                href="https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4"
              >
                avif is developed and used by the most influential tech
                companies. Netflix has already considered .avif superior to the
                JPEG, PNG, and even the newer WebP image formats for its image
                quality to compressed file size ratio.
              </a>
            </div>
            <div className="f1 secondary s2">
              <a
                className="secondary"
                title="innovators"
                href="http://aomedia.org/membership/members/"
              >
                Leaders and technology innovators from all prominent companies
                contributed to the creation of AV1, and license their patents
                essential to the codec on a royalty-free basis to create an
                enduring ecosystem.
              </a>
            </div>
            <div className="f1 secondary">
              No other codec looks as promising as avif. With its huge support,
              its modern feature rate, the license free usage and the best
              compression rate ever achieved, we are just a step away from
              innovating the modern web.
            </div>
          </div>
          <div className="right-half" id="tech-companies" />
        </div>
      </div>
      <div className="section" id="gainanadvantage">
        <div className="f3 blue bold s4">Gain an advantage.</div>
        <div className="flex-center">
          <div className="left-half">
            <div className="f1 secondary s2">
              <a
                className="secondary"
                href="https://lawsofux.com/doherty-threshold.html"
                title="user experience page speed"
              >
                Productivity soars when a computer and its users interact at a
                pace under 400ms that ensures that neither has to wait on the
                other.
              </a>
            </div>
            <div className="f1 secondary s2">
              Increasing your speed increases your profit. Every successful
              e-commerce store focuses on increasing page loading speed. If your
              page takes too long to load, visitors will more likely switch to
              another page, quit the shopping process or stop visiting your
              website at all.
            </div>
            <div className="f1 secondary">
              So not only does a long page loading time decrease the user
              experience drastically, it also denies profit and decreases your
              SEO. You can check the slider below to find out several case
              studies on how performance increases revenue.
            </div>
          </div>
          <div className="right-half">
            <div className="carousel">
              <a
                className="slide center"
                href="http://radar.oreilly.com/2008/08/radar-theme-web-ops.html"
              >
                <div className="primary s1 bold">Amazon</div>
                <div className="secondary">
                  Found that every 100ms of latency cost them 1% in sales.
                </div>
              </a>
              <a
                className="slide center"
                href="https://blog.mozilla.org/metrics/category/website-optimization/"
              >
                <div className="primary s1 bold">Mozilla</div>
                <div className="secondary">
                  Mozilla cut load time by 2.2 seconds and saw download
                  conversions increase by 15.4%
                </div>
              </a>
              <a
                className="slide center"
                href="http://cdn.oreillystatic.com/en/assets/1/event/7/Improving%20Netflix%20Performance%20Presentation.pdf"
              >
                <div className="primary s1 bold">Netflix</div>
                <div className="secondary">
                  Netflix saw a 43% decrease in their bandwidth bill after
                  turning on GZip.
                </div>
              </a>
              <a
                className="slide center"
                href="https://www.slideshare.net/devonauerswald/walmart-pagespeedslide"
              >
                <div className="primary s1 bold">Walmart</div>
                <div className="secondary">
                  For every 1 second of improvement, they experienced up to a 2%
                  increase in conversions.
                </div>
              </a>
              <a
                className="slide center"
                href="https://www.akamai.com/de/de/about/events/edgeworld.jsp#edge2016futureofcommercemodal"
              >
                <div className="primary s1 bold">AliExpress</div>
                <div className="secondary">
                  Reduced load time by 36% and saw a 10.5% increase in orders
                  and a 27% increase in conversion for new customers.
                </div>
              </a>
              <a
                className="slide center"
                href="https://www.tribeuk.co.uk/blog/understanding-website-performance"
              >
                <div className="primary s1 bold">Zalando</div>
                <div className="secondary">
                  Zalando saw a 0.7% increase in revenue when they shaved 100ms
                  off their load time.
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section center" id="about">
        created by{" "}
        <a
          title="ux designer"
          href="https://www.linkedin.com/in/justinschmitz97/"
        >
          Justin Schmitz
        </a>{" "}
        &{" "}
        <a title="file encoding" href="https://github.com/ennmichael">
          Niksa Sporin
        </a>
      </div>
    </div>
  );
}
