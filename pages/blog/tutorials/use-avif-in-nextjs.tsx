import Blog from "@components/Blog";
import H from "@components/H";
import SmartLink from "@components/SmartLink";
import Code from "@components/Code";

import { useAvifInNextjs as postdata } from "lib/meta";
import { useAvifInFrameworks as post1 } from "lib/meta";
import { useAvifInCss as post2 } from "lib/meta";
import { useAvifInHtml as post3 } from "lib/meta";

import { useState } from "react";
import ContentTable, { ContentTableEntry } from "@components/ContentTable";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function contentTableCallback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <ContentTable contentTable={contentTable} />
      <H contentTableCallback={contentTableCallback} level={2} text="TL;DR" />
      So you're expecting a colossal blog post? Well, that's not going to happen. The blog you're
      reading uses both the latest version of React and NextJS. And not only that: the bundler
      automatically detects AVIF files and handles them accordingly. We didn't have to do anything
      for this work. That's what we call a first-class service, gentlemen!
      <H contentTableCallback={contentTableCallback} level={2} text="That's it?" />
      Yes. You simply need to include the AVIF files in your project and insert them via the usual
      methods using HTML or CSS. No configuration is required, but you must make sure that
      next.config.js includes the following:
      <Code language="javascript">
        {`const images = require("next-images");
module.exports = withImages()`}
      </Code>
      Next.JS will handle all the hard work behind the scenes for you.
      <H contentTableCallback={contentTableCallback} level={2} text="You gotta be kidding me" />
      The team behind Next. JS has been working to improve image processing since version 10. They
      now offer both an integrated image component and a service for automatic image optimization.
      They describe their image component as "an extension of the HTML img element designed for the
      modern web." Why, you may ask? Well, images in this component are resized, optimized and
      automatically served in the correct format based on the visitor's device and browser. For
      example, you would not deliver a high-resolution image to a Nintendo Game Boy. Furthermore,
      the images support the Core Web Vitals by not shifting their layouts. Furthermore, this
      service can also be used if the server that contains the images of the website is a CDN and
      not a server hosted by the website.
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="Use the Next.JS image component"
      />
      All in all, it's a simple "Put this image in your project, add it to the component and we'll
      do the entire conversion and optimization. That's perfect for lazy folks like us. Booyah!
      <Code language="javascript">{`import Image from 'next/image'
(..)
      <Image
        src="/yourmum.jpg"
        alt="Picture of your mum"
        width={9001}
        height={0}
      />
(..)`}</Code>
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="The component is not com..plete"
      />
      While it converts images to newer formats, it does not yet do so for AVIF. There is a{" "}
      <SmartLink link="https://github.com/vercel/next.js/pull/20381" text="canary version" /> on
      Github that refers to AVIF more than once, so hopefully we will see this supported in future
      versions. Finally, the images loaded via CSS will not be optimized, although we pray that this
      will be the case in future versions.
      <H contentTableCallback={contentTableCallback} level={2} text="Next Optimized Images" />
      Until this point, if you rely heavily on CSS images, you can use the third-party plugin in
      Next.JS called
      <SmartLink
        text="next-optimized-images"
        link="https://github.com/cyrilwanner/next-optimized-images"
      />
      . It has many additional features, and it supports loading images with CSS, which is very
      useful for our use-case. However, the plugin does not yet support AVIF as well. Nevertheless,
      the author is currently working on a complete overhaul of the entire plugin, and a Canary
      version is already published. We have linked to the plugin in the sources below.
    </Blog>
  );
}
