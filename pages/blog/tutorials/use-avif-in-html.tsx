import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax, BlogNote } from "@components/BlogComponents";

const postdata = {
  title: "How to use AVIF in HTML",
  description: "Enjoy this short, but still in depth guide on how to use AVIF in HTML.",
  url: "https://avif.io/blog/tutorials/use-avif-in-html",
  image: "",
  keywords: ["avif", "picture", "HTML", "image optimization"],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [
    "aomedia.org/about",
    "aomedia.org/av1-features/get-started",
    "caniuse.com/picture",
    "caniuse.com/avif",
    "caniuse.com/loading-lazy-attr",
    "caniuse.com/webp",
    "css-tricks.com/avif-has-landed",
    "developer.apple.com/documentation/safari-release-notes/safari-14-release-notes",
    "tollwerk.de/blog/schlanke-responsive-bilder-mit-picture-mozjpeg-webp-avif-sqip",
    "mediaevent.de/bilddatenformate-jpg-avif-png-webp",
  ],
};

const posts = [
  {
    url: "#",
    title: "7 tips on how to efficiently use AVIF in CSS.",
    date_modified: "last update: November 12, 2020",
    description:
      "AVIF, the file format based on the AV1 video codec, is the latest addition to the next-gen image formats. Early reports and comparisons show good results.",
  },
  {
    url: "#",
    title: "7 tips on how to efficiently use AVIF in CSS.",
    date_modified: "last update: November 12, 2020",
    description:
      "AVIF, the file format based on the AV1 video codec, is the latest addition to the next-gen image formats. Early reports and comparisons show good results.",
  },
  {
    url: "#",
    title: "7 tips on how to efficiently use AVIF in CSS.",
    date_modified: "last update: November 12, 2020",
    description:
      "AVIF, the file format based on the AV1 video codec, is the latest addition to the next-gen image formats. Early reports and comparisons show good results.",
  },
];

const advantages = [
  "Downloads only one image",
  "Native support for choosing the best image",
  "Has 96% support in browsers and provides an automatic fallback",
  "Easy to implement",
];

export default function BlogAvifInHtml() {
  return (
    <Blog postdata={postdata} posts={posts}>
      I won't bother you with a stupid 10.000 words text passages about how awesome AVIF is just to
      increase my SEO. You can read plenty of articles about how fantastic AVIF is right here on X
      or Y, as well as everywhere else on the web. Or just enjoy my constant, slightly annoying
      twitter updates about this site. You've clicked this article because you'd like to find out
      how to use AVIF in HTML, so let's get riiiiight into the topic.
      <BlogSubtitle text="Browser Support" />
      The most important thing you should remember when using AVIF is that it unfortunately isn't
      supported everywhere yet. It's a shame, right? It took webP (another excellent image format,
      but not as good as avif) ten years to be fully supported due to Apple not implementing the
      format in Safari. And even now, there's only 90% support. By the time of writing, AVIF has 25%
      support on Browsers. However, AVIF is an invention by the non-profit industry consortium AOM.
      The largest browser-creating giants like Apple, Mozilla and Google are part of it, so you can
      expect support quite quickly.
      <BlogSubtitle text="The picture element" />
      Meanwhile, you can still use the format in its almost-full glory with the native {`<picture>`}{" "}
      element in HTML. Why, you may ask? Well, the {`<picture>`} element allows for progressive
      support. You can simply list all image sources in the order in which you want them to be
      loaded. The wanky browser of your visitors will only download the first image it supports. You
      only load one image at a time, there's no need for a script and everyone is happy.
      <BlogAdvantages advantages={advantages} checked={true} />
      <BlogSubtitle text="Implementation" />
      Browser support for the picture element is at 96%. Still, even if your grandma is visiting
      your website with her disgusting Internet Explorer 6, her browser will simply fall back to
      using the default image. Take a look at this example and copy it for your website:
      <BlogSyntax language="html">
        {`<picture>
<source srcset="image.avif" type="image/avif" loading="lazy">
<source srcset="image.webp" type="image/webp" loading="lazy">
<img src="image.jpg" alt="avif in html" loading="lazy">
</picture>`}
      </BlogSyntax>
      <BlogNote text="PS: The lazy loading attribute is supported by 75% of all browsers, make use of it!" />
      This setup suits all visitors. Make sure to put the AVIF image as the first source tag, the
      browser will display the first media-type it can handle.
      <BlogSubtitle text="Responsiveness" />
      Great, right? Well, yes, but actually no. Because we are still lacking support for different
      device types. Creating an optimal experience for Retina displays can be a little more
      demanding:
      <BlogSyntax language="html">
        {`<picture>
<source srcset="image.avif 1x, image@2x.avif 2x" type="image/avif" loading="lazy">
<source srcset="image.webp 1x, image@2x.webp 2x" type="image/webp" loading="lazy">
<img src="image.jpg 1x, image@2x.jpg 2x" alt="avif in html" loading="lazy">
</picture>`}
      </BlogSyntax>
      Okay, probably not as demanding as it sounded like. Still, creating different images for every
      viewport with every format can be exhausting. However, if you don't have to deal with many
      images on your website, it's an excellent way to setup for the future. Looking to use AVIF as
      background images? How about frameworks? Enjoy the articles featured below. :)
    </Blog>
  );
}
