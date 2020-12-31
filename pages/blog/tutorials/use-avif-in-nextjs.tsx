import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogAdvantages,
  BlogSyntax,
  BlogNote,
  BlogLink,
  BlogLinkExternal,
} from "@components/BlogComponents";
const postdata = {
  title: "Use AVIF in Next.JS",
  description:
    "Curious to read on how to use AVIF images in Next.JS? Well, this site does exactly that! Learn more.",
  url: "https://avif.io/blog/tutorials/use-avif-in-nextjs",
  image: "",
  keywords: ["avif", "nextjs", "next", "react", "image optimization"],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [
    "github.com/cyrilwanner/next-optimized-images",
    "github.com/twopluszero/next-images",
    "github.com/vercel/next.js/discussions/17141",
    "github.com/vercel/next.js/tree/canary/examples/image-component",
    "nextjs.org/docs/basic-features/image-optimization",
  ],
  tags: [
    "avif",
    "react",
    "nextjs",
    "next.js",
    "next js",
    "google",
    "webpack",
    "const",
    "developer",
    "javascript",
    "user experience",
    "image component",
    "files",
    "export default",
    "react dom",
    "react components",
    "code splitting",
    "server side rendering",
    "server side",
    "image optimization",
    "format",
  ],
  questions: [
    "Automatic Image Optimization: Next.js 10 New Standards for 2020",
    "Server-side rendering with Gatsby and Next.js",
    "Automatic Image Optimization",
    "What are the advantages of using, for instance, Next.js over Gatsby, in that case?",
    "How Gatsby and Next.js really work (and what it means for speed and SEO)",
  ],
};

const posts = [
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
];

export default function BlogAvifInNextJS() {
  return (
    <Blog postdata={postdata} posts={posts}>
      So, you're expecting some colossal blog post? Well, it won't happen. The blog you are
      currently reading uses the latest version of both React and NextJS. Not only that, but the
      bundler automatically detects AVIF files and treats them accordingly. We didn't have to do
      anything for this work. That's what we call a top-notch service, gentlemen!
      <BlogSubtitle text="That's it?" />
      Yes. This approach is sometimes referred to as "GG EZ". You must simply include the AVIF files
      in your project and insert them via the usual methods using HTML or CSS. No configuration is
      required, however, you must make sure that next.config.js includes the following:
      <BlogSyntax language="javascript">
        {`const images = require("next-images");
module.exports = withImages()`}
      </BlogSyntax>
      Next.JS will handle all the bullshit behind the scenes for you.
      <BlogSubtitle text="You gotta be kidding me" />
      The team behind Next.JS has been working on improving the way images are processed since
      version 10.0.0. They are now offering both a built-in image component and Automatic Image
      Optimization service. They describe their image component as "an extension of the HTML img
      element, evolved for the modern web."Why, you may be wondering? Well, images in this component
      are resized, optimized, and automatically served in the right format based on the device and
      browser of the visitor. For example, you would not deliver a high-resolution image to a
      Nintendo Gameboy. Furthermore, the images that are lazy-loaded are supporting the Core Web
      Vitals by not shifting their layouts. Besides, this service may also be used when the server
      containing the images of the website is a CDN rather than a server hosted by the website.
      <BlogSubtitle text="Use the Next.JS image component" />
      All in all, it's a simple "put this image into your project, add it with the component and we
      do all the conversion and optimization. That's perfect for lazy people like us. Booyah!
      <BlogSyntax language="javascript">{`import Image from 'next/image'
(..)
      <Image
        src="/yourmum.jpg"
        alt="Picture of your mum"
        width={9001}
        height={0}
      />
(..)`}</BlogSyntax>
      <BlogSubtitle text="The component is not com..plete" />
      While it does convert images into newer formats, it yet does not do the same for AVIF. There's
      a canary version on Github which references AVIF on more than one occasion, so hopefully we
      will see this supported in future releases. As a final note, the images loaded through CSS do
      not get optimized, although we are praying this will be the case in future releases.
      <BlogSubtitle text="Next Optimized Images" />
      Until that point, we are using a third-party plugin in Next.JS called{" "}
      <BlogLinkExternal
        text="next-optimized-images"
        link="https://github.com/cyrilwanner/next-optimized-images"
      />
      . It has many additional features, and it supports loading images with CSS, which is very
      useful for our use-case. Yet, the plugin does not yet support AVIF as well. Still, the author
      is currently working on a complete rewrite of the entire plugin, and a canary version is
      already published. We've linked to the plugin in the sources below.
    </Blog>
  );
}
