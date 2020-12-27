import Blog from "@components/Blog";
import { BlogSubtitle, BlogSyntax } from "@components/BlogComponents";

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
      Are you expecting a colossal blog article? Well, suck it! This blog uses the latest version of
      both, React and Next.JS. Not only that, but the bundler automatically detects AVIF files and
      treats them accordingly. We didn't have to do anything for this work. That's what we call a
      top-notch service, gentlemen!
      <BlogSubtitle text="That's it?" />
      Yes. Some people refer to this as: "GG EZ". Simply add the required AVIF files to your project
      and insert them via the typical methods in HTML or CSS. There's no need for any configuration.
      Just make sure that your next.config.js includes:
      <BlogSyntax language="javascript">
        {`const images = require("next-images");
module.exports = withImages()`}
      </BlogSyntax>
      Next.JS will handle all the bullshit behind the scenes for you.
      <BlogSubtitle text="You gotta be kidding me" />
      Okay, kinda. The team behind Next.JS worked big time on providing optimizations to images.
      Since version 10.0.0, Next.js has a built-in Image Component and Automatic Image Optimization.
      They describe their image component as " an extension of the HTML {`<img>`} element, evolved
      for the modern web." Why, you may ask? The images in this component get automatically resized,
      optimized, and served in the right format, based on your visitor's device and browser. You
      won't deliver a 4k image to a Nintendo Gameboy. Furthermore, images are always lazy-loaded and
      supporting the Core Web Vitals by not shifting layouts. Further further furthermore, this
      service can also be used when serving images from a CDN.
      <BlogSubtitle text="Use the Next.JS image component" />
      All in all, it's a simple "put this image into your project, add it with the component and we
      do all the conversion and optimization. That's perfect for lazy people like us. Booyah!
      <BlogSyntax language="javascript">{`import Image from 'next/image'
(..)
      <Image
        src="/yourmum.jpg"
        alt="Picture of your mum"
        width={500}
        height={500}
      />
(..)`}</BlogSyntax>
      <BlogSubtitle text="The component is not com..plete" />
      Because while it does convert images into newer formats, it yet doesn't convert to avif.
      There's a canary version on Github that refers to AVIF multiple times, so we will definitely
      see support in the upcoming releases. Also, images loaded via CSS do not get optimized. We are
      crossing fingers that this will be the case in future releases.
      <BlogSubtitle text="Next Optimized Images" />
      Until then, we are using the third-party Next.JS plugin called 'next-optimized-images'. It has
      many additional features and support images loaded via CSS, which is highly appreciated in our
      use-case. It yet doesn't support AVIF as well. Still, the author is currently rewriting the
      whole plugin from scratch and a canary version is already published. We've linked to the
      plugin in the sources below.
    </Blog>
  );
}
