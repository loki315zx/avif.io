import Blog from "@components/Blog";
import H from "@components/H";
import Checkbox from "@components/Checkbox";
import Code from "@components/Code";
import Image from "@components/Image";

import { useAvifInFrameworks as postdata } from "lib/meta";
import { useAvifInNextjs as post1 } from "lib/meta";
import { useAvifInCss as post2 } from "lib/meta";
import { useAvifInHtml as post3 } from "lib/meta";

export default function BlogAvifInFrameworks() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      Now that you've learned how fantastic AVIF is, you may be asking yourself, "How do I use AVIF
      images in frameworks? Since AVIF is relatively new, the implementation must be super
      complicated and time-consuming!" The answer is simple: Most Javascript front-end frameworks
      support AVIF natively and rely on HTML and CSS implementation. To make sure we are not talking
      nonsense, we tested it with the following frameworks:
      <Checkbox
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
      <H level={2} text="Other frameworks" />
      In principle, other frameworks might work differently. We found out from our research that
      Meteor and Ember support AVIF files without additional configuration, but since we did not
      experiment with the latest version live, we list it here as "maybe works" until we were in the
      science lab.
      <Checkbox
        advantages={["meteor/meteor", "jashkenas/backbone", "polymer/polymer", "emberjs/ember.js"]}
        checked={false}
      />
      <H level={2} text="An example code" />
      This is the code we used to display the image below in React and Next.JS:
      <Code language="html">
        {`<picture>
          <source srcSet="/images/cloudflare-stats.avif" type="image/avif" />
          <source srcSet="/images/cloudflare-stats.webp" type="image/webp" />
          <img src="/images/cloudflare-stats.jpg" alt="avif in frameworks" />
        </picture>`}
      </Code>
      <Image url="react-avif" alt="using avif in react" />
      <Image url="react-render" alt="rendered avif in react" />
      <Image url="angular-avif" alt="using avif in angular" />
      <Image url="angular-render" alt="rendered avif in angular" />
      <H level={2} text="Webpack File Loader" />
      In some cases, especially with older versions and when using webpack, you may encounter some
      problems. Especially:
      <Code language="html">
        Module parse failed: Unexpected character ' ' (1:0) You may need an appropiate loader to
        handle this file type, currently no loaders are configured to process this fail. See
        https://webpack.js.org/concepts#loaders
      </Code>{" "}
      Simply add the detection for AVIF files to the fileloader in your webpack.config.js:
      <Code language="javascript">
        {`module.exports = {
  module: {
    rules: [{
        test: /\.(png|jpe?g|gif|webp|avif)$/i,
        use: [{loader: 'file-loader'}]
      }]
  }
}`}
      </Code>
      <H level={2} text="Automatic conversion" />
      We could not find a plugin that converts the image to other sizes and formats such as AVIF to
      meet the needs of the client, and if possible choose a modern format. Node.JS library Sharp
      implemented AVIF support, which might be a good choice for you. Have you ever contacted such a
      plugin? Have you had any good or bad experiences with it? Please let us know so we can
      complete this article.
    </Blog>
  );
}
