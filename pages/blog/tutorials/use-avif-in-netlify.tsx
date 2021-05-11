import Blog from "@components/Blog";
import H from "@components/H";
import SmartLink from "@components/SmartLink";
import Code from "@components/Code";

import { useAvifInNetlify as postdata } from "lib/meta";
import { useAvifInCloudflare as post1 } from "lib/meta";
import { useAvifInFrameworks as post2 } from "lib/meta";
import { useAvifInWordpress as post3 } from "lib/meta";

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <H level={2} text="Users wish for native support" />
      Many Netlify users wanted a native solution that would allow them to deliver images in WebP or
      AVIF format at any time. However, at the time of the article on February 21, there is no easy
      way to enable this feature. Instead, you can enable AVIF files through Netlify's header tag
      and then ship AVIF files with a native image HTML tag, as we explained here:{" "}
      <SmartLink link="blog/tutorials/use-avif-in-html" text="How to use AVIF in HTML" />
      <H level={2} text="Defining custom headers with netlify.toml" />
      While using the image tag on Netlify seems to work, there was a problem with using. avif
      files. When trying to view the images inside Firefox, we noticed that the images did not show
      up. This problem did not occur in Chrome, but it did happen in Firefox. We found that the
      response headers returned the Content-Type: application/octet-stream, which caused Firefox to
      refuse to display data. We resolved the bug by defining custom headers within the Netlify
      configuration file (Netlify.toml).
      <Code language="js">
        {`[[headers]]
for = "*.avif"
[headers.values]
Content-Type = "image/avif"`}
      </Code>
      <H level={2} text="Summary" />
      to find more ways to utilize this file.// Enabling AVIF support on Netlify is not easy as
      simply clicking a single button. However, it can be easily achieved by customizing the
      configuration file to your specific needs. If this is the first time you hear about the
      configuration file, I suggest you take a look at its{" "}
      <SmartLink
        external
        link="https://docs.netlify.com/configure-builds/file-based-configuration/"
        text="documentation"
      />{" "}
      to find other ways to use this file.
    </Blog>
  );
}
