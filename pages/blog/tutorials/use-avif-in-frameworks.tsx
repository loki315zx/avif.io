import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogAdvantages,
  BlogSyntax,
  BlogNote,
  BlogLink,
} from "@components/BlogComponents";

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
  tags: [
    "avif",
    "image optimization",
    "javascript",
    "framework",
    "angular",
    "svelte",
    "react",
    "vue",
    "nuxt",
    "gatbsy",
    "meteor",
    "backbone",
    "polymer",
    "ember",
    "javascript framework",
  ],
  questions: ["How do I use AVIF images in React Single page Web App"],
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
      Now that you've learned how fantastic AVIF is, you might wonder: 'Yo, how do I use AVIF images
      in frameworks? As AVIF is quite new, this must be super complicated and time-consuming to
      implement!’ The answer is simple. Most javascript frontend frameworks support AVIF natively
      and rely on HTML and CSS implementation. To make sure we weren't talking nonsense, we tested
      it with the following frameworks:
      <BlogAdvantages advantages={advantages} checked={true} />
      You can see some screenshots of our test on Angular and React below:
      <BlogSubtitle id="other-frameworks" text="Other frameworks" />
      In principle, other frameworks might work differently. From our research, we found that Meteor
      and Ember support AVIF files without additional configuration. However because we have not
      experimented with the latest version live, we are listing them here as "maybe works" until
      we've been in the science lab.
      <BlogAdvantages advantages={disadvantages} checked={false} />
      <BlogSubtitle text="Webpack File Loader" />
      In some cases, especially with older versions and when using webpack, you may encounter some
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
      They will convert the image into a different size to suit the needs of the client, and choose
      a modern format when possible. However, we were unable to find a plugin yet that automatically
      converts images to AVIF. Did you ever come into contact with such a plugin? Did you have any
      good or bad experiences with it? Please let us know so we can complete this article.
    </Blog>
  );
}
