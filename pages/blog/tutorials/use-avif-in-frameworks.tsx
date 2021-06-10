import Checklist from "@components/Blog/Checklist";
import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import Image from "@components/Blog/Image";
import Syntax from "@components/Blog/Syntax";
import meta from "@lib/meta.json";
import Blog from "@components/Blog";
import { useState } from "react";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function contentTableCallback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }
  return (
    <Blog postMeta={meta.tutFrameworks} posts={[meta.tutCss, meta.tutHtml, meta.tutNextjs]}>
      <ContentTable contentTable={contentTable} />
      <H level={2} contentTableCallback={contentTableCallback} text="Framework List" />
      Now that you've learned how fantastic AVIF is, you may be asking yourself, "
      <b>How do I use AVIF images in frameworks?</b> Since AVIF is relatively new, the
      implementation must be super complicated and time-consuming!" The answer is simple:{" "}
      <b>Most Javascript front-end frameworks support AVIF natively</b> and rely on HTML and CSS
      implementation. To make sure we are not talking nonsense, we tested it with the following
      frameworks:
      <Checklist
        items={[
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
      <H level={2} contentTableCallback={contentTableCallback} text="Other frameworks" />
      In principle, other frameworks might work differently. We found out from our research that
      Meteor and Ember support AVIF files without additional configuration, but since we did not
      experiment with the latest version live, we list it here as "maybe works" until we were in the
      science lab.
      <Checklist
        items={["meteor/meteor", "jashkenas/backbone", "polymer/polymer", "emberjs/ember.js"]}
        checked={false}
      />
      <H level={2} contentTableCallback={contentTableCallback} text="Example code" />
      This is the code we used to display the image below in React and Next.JS:
      <Syntax language="html">
        {`<picture>
          <source srcSet="/images/cloudflare-stats.avif" type="image/avif" />
          <source srcSet="/images/cloudflare-stats.webp" type="image/webp" />
          <img src="/images/cloudflare-stats.jpg" alt="avif in frameworks" />
        </picture>`}
      </Syntax>
      <Image url="react-avif" alt="using avif in react" />
      <Image url="angular-avif" alt="using avif in angular" />
      <H level={2} contentTableCallback={contentTableCallback} text="Webpack File Loader" />
      In some cases, especially with older versions and when using webpack, you may encounter some
      problems. Especially:
      <Syntax language="html">
        Module parse failed: Unexpected character ' ' (1:0) You may need an appropriate loader to
        handle this file type, currently no loaders are configured to process this fail. See
        https://webpack.js.org/concepts#loaders
      </Syntax>
      Simply add the detection for AVIF files to the fileloader in your webpack.config.js:
      <Syntax language="javascript">
        {`module.exports = {
  module: {
    rules: [{
        test: /\.(png|jpe?g|gif|webp|avif)$/i,
        use: [{loader: 'file-loader'}]
      }]
  }
}`}
      </Syntax>
      <H level={2} contentTableCallback={contentTableCallback} text="Automatic conversion" />
      We could not find a plugin that converts the image to other sizes and formats such as AVIF to
      match the device of the client. Node.JS library Sharp implemented AVIF support, which might be
      a good choice for you. Have you ever encountered such a plugin? Have you had any good or bad
      experiences with it? Please let us know so we can complete this article.
    </Blog>
  );
}
