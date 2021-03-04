import Blog from "@components/Blog";
import SmartLink from "@components/SmartLink";
import Code from "@components/Code";

import { useAvifInNetlify as postdata } from "lib/meta";
import { useAvifInCloudflare as post1 } from "lib/meta";
import { useAvifInFrameworks as post2 } from "lib/meta";
import { useAvifInWordpress as post3 } from "lib/meta";

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <h2>Users wish for native support</h2>
      Many users of Netlify wished for a native solution, which would allow them to deliver images
      in WebP or AVIF format at any time. However, at the time of writing this article in February
      21, there is no easy way to enable this feature. Instead, you can enable AVIF files via the
      header tag of Netlify, and you can then serve AVIF files by using a native picture HTML tag,
      as we explained here:{" "}
      <SmartLink link="blog/tutorials/use-avif-in-html" text="How to use AVIF in HTML" />
      <h2>Defining custom headers with netlify.toml</h2>
      While using the picture tag on Netlify seems to work, there was a problem when using .avif
      files. When attempting to view the images within Firefox, we noticed that the images were not
      showing up. This problem did not happen in Chrome, but it did happen in Firefox. We found that
      the Response Headers were returning the Content-Type: application/octet-stream which caused
      Firefox to refuse to display any data. We resolved the bug by defining custom headers within
      the Netlify configuration file (Netlify.toml).
      <Code language="js">
        {`[[headers]]
for = "*.avif"
[headers.values]
Content-Type = "image/avif"`}
      </Code>
      <h2>Summary</h2>
      Enabling AVIF support on Netlify is not easy as simply clicking a single button. But it can be
      easily achieved by customizing the configuration file to satisfy your specific needs. If this
      is your first time hearing about the configuration file, I suggest you to take a look at their{" "}
      <SmartLink
        external
        link="https://docs.netlify.com/configure-builds/file-based-configuration/"
        text="documentation"
      />{" "}
      to find more ways to utilize this file.
    </Blog>
  );
}
