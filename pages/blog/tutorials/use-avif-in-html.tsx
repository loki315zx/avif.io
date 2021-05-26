import Blog from "@components/Blog";
import H from "@components/H";
import Checkbox from "@components/Checkbox";
import SmartLink from "@components/SmartLink";

import Code from "@components/Code";

import { useAvifInHtml as postdata } from "lib/meta";
import { useAvifInCss as post1 } from "lib/meta";
import { useAvifInFrameworks as post2 } from "lib/meta";
import { useAvifInFirefox as post3 } from "lib/meta";

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
      <H contentTableCallback={contentTableCallback} level={2} text="Introduction" />
      I'm not wasting your time with 10,000 word passages of text about how awesome AVIF is just to
      boost SEO rankings. AVIF is a file format based on a video codec and supports a high bit depth
      while maintaining a small file size. You can find many articles about how fantastic AVIF is
      right here, as well as anywhere else on the web. You clicked on this article because you want
      to learn how to use AVIF in HTML, so let's take a look at the topic.
      <H contentTableCallback={contentTableCallback} level={2} text="Browser Support" />
      The most important thing to keep in mind when using AVIF is that it is unfortunately not yet
      supported everywhere. That's a pity, isn't it? It took WebP (another excellent image format,
      but not good enough to keep up with AVIF) ten years to be fully supported as Apple wasn't
      ready to implement the format in Safari. But there is still only 90% support. At the time of
      writing, AVIF has 63% support on browsers. Google Chrome and Opera support it. Firefox will
      support it from June 2021. Safari doesn't yet have AVIF support. However, AVIF is an invention
      of the non-profit industry consortium Alliance of Open Media AOM. Major browser giants Apple,
      Mozilla and Google are all part of the project, so support can be expected relatively quickly.
      <H contentTableCallback={contentTableCallback} level={2} text="The picture element" />
      For now, you can still use the format in its almost complete glory with the native{" "}
      {`<picture>`} element in HTML. Why, you may ask? Well, the {`<picture>`}element allows
      progressive support. You can simply drop all image files in the order in which you want to
      load them. Your visitors' browsers load only one image at a time, which reduces the load on
      the server. Besides, you don't need a script to process multiple images.
      <Checkbox
        advantages={[
          "Does not download more than one image at a time",
          "Native support for selecting the most appropriate image",
          "96% browser support and automatic fallback",
          "Getting this implemented is easy and straightforward",
        ]}
        checked={true}
      />
      <H contentTableCallback={contentTableCallback} level={2} text="Implementation" />
      Currently 96% of browsers support the picture element. Even if your grandma visits your
      website with her disgusting Internet Explorer 6, her browser will simply revert to the default
      image format when you specify it. Have a look at the following example and copy it if you want
      to use it for your website:
      <Code language="html">
        {`<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img
  width="1280" height="720" decoding="async" loading="lazy"
  src="image.jpg" alt="an avif image" />
</picture>`}
      </Code>
      <H
        level={5}
        text="
        PS: The lazy loading attribute is supported by 75% of all browsers, make use of it! Also,
        don't forget to add width and height to avoid a Layout Shift. Providing width and height is
        more important than ever.
      "
      />
      This is a nice set up for all visitors. Just make sure the first source tag is an AVIF image
      for the browser to display the first media type it can handle.
      <H contentTableCallback={contentTableCallback} level={2} text="Responsiveness" />
      At this point, it seems great, doesn't it? Well, no, not yet, because our platform still lacks
      support for different types of devices. It's a little more difficult to create an optimal
      experience for Retina displays. We also want to make sure that mobile devices don't download
      images that are much larger than their screen.
      <Code language="html">
        {`<picture>

<source
sizes="(max-width: 640px) 100vw, 640px"
srcSet="/image-1280.avif 1280w, /image-640.avif 640w, /image-320.avif 320w"
type="image/avif" />

<source
sizes="(max-width: 640px) 100vw, 640px"
srcSet="/image-1280.avif 1280w, /image-640.webp 640w, /image-320.webp 320w"
type="image/webp" />

<source
sizes="(max-width: 640px) 100vw, 640px"
srcSet="/image-1280.avif 1280w, /image-640.jpg 640w, /image-320.jpg 320w"
type="image/jpg" />

<img
width="1280" height="720" decoding="async" loading="lazy"
src="/image.jpg" alt="an avif image" />

</picture>`}
      </Code>
      Okay, this is probably not as challenging as we originally thought, but creating AVIF images
      for any viewport of any format can be exhausting. Nevertheless, if your website does not have
      many images, it is a good way to prepare for the future. Please remember to provide fallback
      images for older browser versions or experimental use as in Firefox. Otherwise, your user
      experience may suffer as images are not rendered. AVIF is also good for backgrounds. Check out
      the <SmartLink text="CSS article." link="/blog/tutorials/use-avif-in-css/" /> How about
      <SmartLink text="frameworks?" link="/blog/tutorials/use-avif-in-frameworks/" /> Enjoy this
      article with the different types of frameworks you can use.
    </Blog>
  );
}
