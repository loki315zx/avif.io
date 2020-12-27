import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax, BlogNote } from "@components/BlogComponents";
import Image from "next/image";

const postdata = {
  title: "Use AVIF in Javascript Frameworks like Vue, React & Angular",
  description: "Serving AVIF images via javascript frameworks is quite easy - find out more here.",
  url: "https://avif.io/blog/tutorial/use-avif-in-frameworks",
  image: "",
  keywords: [
    "avif",
    "image optimization",
    "javascript",
    "framework",
    "angular",
    "svelte",
    "react",
    "vue",
    "nuxt",
  ],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [
    "github.com/angular/angular-cli/releases?after=v11.0.2",
    "github.com/facebook/create-react-app/pull/9611",
    "image.nuxtjs.org/nuxt-picture",
    "newreleases.io/project/github/angular/angular-cli/release/v11.0.0-rc.1",
    "nuxtjs.org/docs/release-notes",
    "stackoverflow.com/questions/59433854/how-do-i-use-avif-images-in-react-single-page-web-app",
    "webpack.js.org/loaders/file-loader",
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

const advantages = [
  "facebook/react",
  "vuejs/vue",
  "angular/angular",
  "vercel/next.js",
  "svelte/svelte",
  "nuxt/nuxt.js",
  "gatsbyjs/gatsby",
];
const disadvantages = [
  "meteor/meteor",
  "jashkenas/backbone",
  "polymer/polymer",
  "emberjs/ember.js",
];

export default function BlogAvifInFrameworks() {
  return (
    <Blog postdata={postdata} posts={posts}>
      Now that you've learned how amazing AVIF is, you may be wondering: 'Yo, how do I use avif
      images in Frameworks? As AVIF is quite new, this must be super complex and hard to implement!'
      Listen here, little boygirl. We have the answer! .. there's nothing you need to do. No,
      really. Most javascript frontend frameworks support AVIF natively as they just rely on the
      HTML and CSS implementation. To make sure we ain't talking nonsense, we tested it on the
      following frameworks:
      <BlogAdvantages advantages={advantages} checked={true} />
      You can see some screenshots of our test on Angular and React below:
      <Image src="/images/angular-avif.jpg" alt="Angular" width={1920} height={1033} />
      <Image src="/images/react-avif.jpg" alt="React" width={1920} height={1032} />
      <Image src="/images/angular-render.jpg" alt="Angular render" width={1920} height={958} />
      <BlogSubtitle id="other-frameworks" text="Other frameworks" />
      Of course, there are other frameworks out there, which might work a little different. From
      pure research, we have found that Meteor und Ember support AVIF files without additional
      configuration. However as we didn't try it live on the latest version, we are listing them
      here as "maybe works" until we've went to the science lab:
      <BlogAdvantages advantages={disadvantages} checked={false} />
      <BlogSubtitle text="Webpack File Loader" />
      In some cases, especially on older versions and when using webpack, you might encounter some
      problems. Especially:
      <BlogSyntax language="txt">
        Module parse failed: Unexpected character ' ' (1:0) You may need an appropiate loader to
        handle this file type, currently no loaders are configured to process this fail. See
        https://webpack.js.org/concepts#loaders
      </BlogSyntax>{" "}
      Simply add the detection for AVIF files to the fileloader in your webpack.config.js:
      <BlogSyntax language="javascript">
        {`module.exports = {
  module: {
    rules: [{
        test: /\.(png|jpe?g|gif|webp|avif)$/i,
        use: [{loader: 'file-loader'}]
      }]
  }
}`}
      </BlogSyntax>
      <BlogSubtitle text="Automatic conversion" />
      Some plugins like next-optimized-images, or image components from Nuxt.js or Next.js offer
      automatic conversion, based on your visitors browser. They will resize the image accordingly
      and use modern formats if possible. However, we couldn't find a plugin that automatically
      converts images to avif.. yet. Did you encounter such a plugin? Did you have any good
      experiences, bad experiences? Let us know so we can continue completing this plugin.
    </Blog>
  );
}
