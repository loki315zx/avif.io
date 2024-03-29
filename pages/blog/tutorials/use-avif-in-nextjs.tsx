import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import Image from "@components/Blog/Image";
import Syntax from "@components/Blog/Syntax";
import Link from "@components/Link";
import meta from "@lib/meta.json";
import Blog from "@components/Blog";
import { useState } from "react";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function callback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }
  return (
    <Blog
      postMeta={meta.tutNextjs}
      posts={[meta.tutCss, meta.tutFrameworks, meta.tutHtml]}
    >
      <ContentTable contentTable={contentTable} />
      <H level={2} callback={callback} text="Introduction" />
      NextJS images is easy! The blog you're reading uses both the latest
      version of React and NextJS. And not only that: the bundler automatically
      detects AVIF files and handles them accordingly. We didn't have to do
      anything for this work. That's what we call a first-class service,
      gentlemen!
      <br />{" "}
      <b>
        You simply need to include the AVIF files in your project and insert
        them via the usual methods using HTML or CSS
      </b>
      . No configuration is required, but you must make sure that next.config.js
      includes the following:
      <Syntax language="javascript">
        {`const images = require("next-images");
module.exports = withImages()`}
      </Syntax>
      Next.JS will handle all the hard work behind the scenes for you. The team
      behind Next. JS has been working to improve image processing since version
      10. They now offer both an integrated image component and a service for
      automatic image optimization. They describe their image component as{" "}
      <b>an extension of the HTML img element designed for the modern web.</b>
      <br /> Why, you may ask? Well, images in this component are resized,
      optimized and automatically served in the correct format based on the
      visitor's device and browser. For example, you would not deliver a
      high-resolution image to a Nintendo Game Boy.
      <br /> Furthermore, the images <b>support the Core Web Vitals</b> by not
      shifting their layouts. Furthermore, this service can also be used if the
      server that contains the images of the website is a CDN and not a server
      hosted by the website.
      <H level={2} callback={callback} text="Next.JS image component" />
      All in all, it's a simple "Put this image in your project, add it to the
      component and we'll do the entire conversion and optimization" approach.
      While it converts images to newer formats, it does not yet do so for AVIF.
      There is a
      <Link
        link="github.com/vercel/next.js/pull/20381"
        text="canary version"
        ext
      />{" "}
      on Github that refers to AVIF more than once, so hopefully we will see
      this supported in future versions. Finally, the images loaded via CSS will
      not be optimized, although we pray that this will be the case in future
      versions.
      <Syntax language="javascript">{`import Image from 'next/image'
(..)
      <Image
        src="/yourmum.jpg"
        alt="Picture of your mum"
        width={9001}
        height={0}
      />
(..)`}</Syntax>
      <H level={2} callback={callback} text="Next Optimized Images" />
      Until this point, if you rely heavily on CSS images, you can use the
      third-party plugin in Next.JS called
      <Link
        text="next-optimized-images"
        link="github.com/cyrilwanner/next-optimized-images"
        ext
      />
      . It has many additional features, and it{" "}
      <b> supports loading images with CSS</b>, which is very useful. However,
      the plugin does not yet support AVIF as well. Nevertheless, the author is
      currently working on a complete overhaul of the entire plugin, and a
      Canary version is already published.
      <H
        callback={callback}
        level={2}
        text="How do we at avif.io deal with AVIF support?"
      />
      As we don't want to rely on Vercel or third-party components, we perform
      the following steps.
      <H level={3} text="1. Add browser support detection script" />
      To find out if you as a visitor have a browser with AVIF support, we have
      implemented the following 600-byte script in our header:
      <Syntax language="javascript">
        {`function F(a){document.documentElement.classList.add(a)}var A=new Image;A.src="data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=",A.onload=function(){F("avif")},A.onerror=function(){var a=new Image;a.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",a.onload=function(){F("webp")}};`}
      </Syntax>
      <H level={3} text="2. Create image component with modern markup" />
      We have developed our own image component, which uses all the features
      that modern image markup should take into account, from the lazy load to
      the aspect ratio. We only have to choose a path and an alt text. For more
      information on the perfect image markup visit
      <Link
        text="Guide to Image Performance."
        link="/blog/articles/optimize-images-for-web-performance/"
      />
      <Image
        url="image-component"
        alt="screenshot of code that resembles our image component"
      />
      <H level={3} text="3. Convert images with sharp on build time" />
      Finally, we have the NodeJS library
      <Link text="sharp" link="sharp.pixelplumbing.com/" ext /> integrated into
      our build and release script to convert images before we upload our
      website data to Firebase. The sharp script detects all images in a
      specific folder and converts them into all the different formats and sizes
      we need. Below is the current script we are using.
      <Syntax language="javascript">
        {`const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const output = "../public/img/";
const input = "../images/";
const jpgQuality = { mozjpeg: true, quality: 50, progressive: true };
const webpQuality = { quality: 50, reductionEffort: 6 };
const avifQuality = { quality: 45, speed: 1 };
const sizes = [1440, 720, 360];

fs.readdir(input, (err, files) => {
  console.log("Found " + files.length + " files. Converting now, please be patient..");

  files.forEach((file) => {
    function convert(size) {
      let fileShort = path.parse(file).name;
      sharp(input + file)
        .jpeg(jpgQuality)
        .resize({ width: size })
        .toFile(output + fileShort + "-" + size + ".jpg");
      sharp(input + file)
        .webp(webpQuality)
        .resize({ width: size })
        .toFile(output + fileShort + "-" + size + ".webp");
      sharp(input + file)
        .avif(avifQuality)
        .resize({ width: size })
        .toFile(output + fileShort + "-" + size + ".avif");
    }
    if (file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg")) {
      for (let i = 0; i < sizes.length; i++) {
        convert(sizes[i]);
      }
    }
  });
});
`}
      </Syntax>
      Keep in mind that this is only suitable for website without many images,
      as it significantly increases build time. A way to bypass that could be
      creating an own sharp API and using
      <Link
        text="Incremental Static Regeneration."
        link="youtube.com/watch?v=nrfuN_Hyd3Y"
        ext
      />
    </Blog>
  );
}
