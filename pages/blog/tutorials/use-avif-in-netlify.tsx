import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import Syntax from "@components/Blog/Syntax";
import Link from "@components/Link";
import meta from "@lib/meta.json";
import Blog from "@components/Blog";
import { useState } from "react";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function callback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }
  return (
    <Blog
      postMeta={meta.tutNetlify}
      posts={[meta.tutCloudflare, meta.tutFrameworks, meta.tutWordpress]}
    >
      <ContentTable contentTable={contentTable} />
      <H level={2} callback={callback} text="Wishing for native support" />
      Many Netlify users wanted a native solution that would allow them to
      deliver images in WebP or AVIF format at any time. However, at the time of
      the article on February 21, there is no easy way to enable this feature.
      Instead,{" "}
      <b>
        you can enable AVIF files through Netlify's header tag and then ship
        AVIF files with a native image HTML tag
      </b>
      , as we explained here:
      <Link
        link="/blog/tutorials/use-avif-in-html/"
        text="How to use AVIF in HTML"
      />
      <H level={2} callback={callback} text="Defining custom headers" />
      While using the image tag on Netlify seems to work, there was a problem
      with using. avif files. When trying to view the images inside Firefox, we
      noticed that the images did not show up. This problem did not occur in
      Chrome, but it did happen in Firefox.
      <br /> We found that the response headers returned the Content-Type:
      application/octet-stream, which caused Firefox to refuse to display data.
      We resolved the bug by{" "}
      <b>
        defining custom headers within the Netlify configuration file
        (Netlify.toml).
      </b>
      <Syntax language="js">
        {`[[headers]]
for = "*.avif"
[headers.values]
Content-Type = "image/avif"`}
      </Syntax>
      <H level={2} callback={callback} text="Summary" />
      Enabling AVIF support on Netlify is not easy as simply clicking a single
      button. However, it can be easily achieved by customizing the
      configuration file to your specific needs. If this is the first time you
      hear about the configuration file, I suggest you take a look at its
      <Link
        ext
        link="docs.netlify.com/configure-builds/file-based-configuration/"
        text="documentation"
      />
      to find other ways to use this file.
    </Blog>
  );
}
