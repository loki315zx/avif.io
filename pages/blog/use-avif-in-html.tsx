import React from "react";
import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax } from "@components/BlogComponents";

const posts = [
  {
    title: "7 tips on how to efficiently use avif in CSS.",
    date: "last update: November 12, 2020",
    summary:
      "AVIF, the file format based on the AV1 video codec, is the latest addition to the next-gen image formats. Early reports and comparisons show good results.",
  },
  {
    title: "7 tips on how to efficiently use avif in CSS.",
    date: "last update: November 12, 2020",
    summary:
      "AVIF, the file format based on the AV1 video codec, is the latest addition to the next-gen image formats. Early reports and comparisons show good results.",
  },
  {
    title: "7 tips on how to efficiently use avif in CSS.",
    date: "last update: November 12, 2020",
    summary:
      "AVIF, the file format based on the AV1 video codec, is the latest addition to the next-gen image formats. Early reports and comparisons show good results.",
  },
];

const sources = [
  "http://aomedia.org/about/",
  "http://aomedia.org/av1-features/get-started/",
  "https://caniuse.com/?search=picture",
  "https://caniuse.com/avif",
  "https://caniuse.com/loading-lazy-attr",
  "https://caniuse.com/webp",
  "https://css-tricks.com/avif-has-landed/",
  "https://developer.apple.com/documentation/safari-release-notes/safari-14-release-notes",
  "https://tollwerk.de/blog/schlanke-responsive-bilder-mit-picture-mozjpeg-webp-avif-sqip",
  "https://www.mediaevent.de/bilddatenformate-jpg-avif-png-webp/",
];

const advantages = [
  "Downloads only one image",
  "Native support for choosing the best image",
  "Has 96% support in browsers and provides automatic fallback",
  "Easy to implement",
];

const title = "How to use avif in HTML";

export default function BlogAvifInHtml() {
  return (
    <Blog title={title} sources={sources} posts={posts}>
      <div>
        You've clicked this article because you'd like to find out how to use avif in HTML.
        Therefore I won't bother you with a stupid 10.000 words text passages about how awesome avif
        is just to increase my SEO. You can read plenty of articles about how amazing avif is right
        here on X or Y, as well as everywhere else in the web, just like my constant slightly
        annoying twitter updates about this site. So let's get riiiiight into the topic.
      </div>
      <BlogSubtitle text="Browser Support" />
      <div>
        The most important thing you should remember when using avif is that it unfortunately isn't
        supported everywhere yet. It's a shame, right? It took webP (another awesome image format,
        but not as good as the latest ones like avif) ten years to be fully supported, due to Apple
        not implementing the format in Safari. And even now there's only a 90% support. By the time
        of writing, avif has a 25% support on Browsers. However, as avif is an invention by the
        non-profit industry consortium AOM and the largest browser-creating giants like Apple,
        Mozilla and Google are part of it, you can expect support quite quickly.
      </div>
      <BlogSubtitle text="The picture element" />
      <div>
        In the meanwhile, you can still use the format in its almost-full glory with the native{" "}
        {`<picture>`} element in HTML. Why you may ask? Well, the {`<picture>`} element allows for
        progressive support. You can simply list all image sources in the order in which you want
        them to be loaded. The wanky browser of your visitors will only download the first image it
        supports. You only load one image at a time, there's no need for a script and everyone is
        happy.
        <BlogAdvantages advantages={advantages} />
        <BlogSubtitle text="Implementation" />
        Browser support for the picture element is at 96%, but even if your grandma is visiting your
        website with her disguisting Internet Explorer 6, her browser will simply fallback to using
        the default image. Take a look at this example and copy it for your website:
      </div>
      <BlogSyntax>
        {`<picture>
<source srcset="image.avif" type="image/avif" loading="lazy">
<source srcset="image.webp" type="image/webp" loading="lazy">
<img src="image.jpg" alt="avif in html" loading="lazy">
</picture>`}
      </BlogSyntax>
      <div className="note">
        PS: The lazy loading attribute is supported by 75% of all browsers, make use of it!
      </div>
      This setup suits all visitors. Make sure to put the avif image as first source tag, the
      browser will display the first media-type it can handle.
      <BlogSubtitle text="Responsiveness" />
      Great, right? Well, yes, but actually no. Because we are still lacking support for different
      device types. Creating an optimal experience for Retina displays can be a little more
      demanding:
      <BlogSyntax>
        {`<picture>
<source srcset="image.avif 1x, image@2x.avif 2x" type="image/avif" loading="lazy">
<source srcset="image.webp 1x, image@2x.webp 2x" type="image/webp" loading="lazy">
<img src="image.jpg 1x, image@2x.jpg 2x" alt="avif in html" loading="lazy">
</picture>`}
      </BlogSyntax>
      Okay, probably not as demanding as it sounded like. Still, creating different images for every
      viewport with every format can be exhausting. However if you don't have to deal with a lot of
      images on your website, it's a good way to setup for the future. Looking to use avif as
      background images? How about frameworks? Enjoy the articles featured below. :)
    </Blog>
  );
}
