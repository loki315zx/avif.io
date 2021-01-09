import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax, BlogImage } from "@components/BlogComponents";

import { useAvifInFrameworks as postdata } from "lib/meta";
import { useAvifInHtml as post1 } from "lib/meta";
import { useAvifInCss as post2 } from "lib/meta";
import { useAvifInNextjs as post3 } from "lib/meta";

export default function BlogAvifInFrameworks() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      Now that you've learned how fantastic AVIF is, you might wonder: 'Yo, how do I use AVIF images
      in frameworks? As AVIF is quite new, this must be super complicated and time-consuming to
      implement!’ The answer is simple. Most javascript frontend frameworks support AVIF natively
      and rely on HTML and CSS implementation. To make sure we weren't talking nonsense, we tested
      it with the following frameworks:
      <BlogAdvantages
        advantages={[
          "facebook/react",
          "vuejs/vue",
          "angular/angular",
          "vercel/next.js",
          "svelte/svelte",
          "nuxt/nuxt.js",
          "gatsbyjs/gatsby",
        ]}
        checked={true}
      />
      You can see some screenshots of our test on Angular and React below:
      <BlogSubtitle id="other-frameworks" text="Other frameworks" />
      In principle, other frameworks might work differently. From our research, we found that Meteor
      and Ember support AVIF files without additional configuration. However because we have not
      experimented with the latest version live, we are listing them here as "maybe works" until
      we've been in the science lab.
      <BlogAdvantages
        advantages={["meteor/meteor", "jashkenas/backbone", "polymer/polymer", "emberjs/ember.js"]}
        checked={false}
      />
      <BlogSubtitle text="An example code" />
      This is the code I've used to display the image below in React and Next.JS:
      <BlogSyntax language="html">
        {`<picture>
          <source srcSet="/images/cloudflare-stats.avif" type="image/avif" />
          <source srcSet="/images/cloudflare-stats.webp" type="image/webp" />
          <img src="/images/cloudflare-stats.jpg" alt="avif in frameworks" />
        </picture>`}
      </BlogSyntax>
      <BlogImage url="react-avif" alt="using avif in react" />
      <BlogImage url="react-render" alt="rendered avif in react" />
      <BlogImage url="angular-avif" alt="using avif in angular" />
      <BlogImage url="angular-render" alt="rendered avif in angular" />
      <BlogSubtitle text="Webpack File Loader" />
      In some cases, especially with older versions and when using webpack, you may encounter some
      problems. Especially:
      <BlogSyntax language="html">
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
      We were unable to find a plugin that will convert the image into a different sizes and formats
      like AVIF to suit the needs of the client, and choose a modern format when possible. The
      Node.JS library sharp looks like its about to implement AVIF support. Did you ever come into
      contact with such a plugin? Did you have any good or bad experiences with it? Please let us
      know so we can complete this article.
    </Blog>
  );
}
