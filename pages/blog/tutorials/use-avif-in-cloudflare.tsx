import Checklist from "@components/Blog/Checklist";
import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import Image from "@components/Blog/Image";
import Syntax from "@components/Blog/Syntax";
import Link from "@components/Link";
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
    <Blog
      postMeta={meta.tutCloudflare}
      posts={[meta.tutCss, meta.tutHtml, meta.tutNextjs]}
    >
      <ContentTable contentTable={contentTable} />
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Introduction"
      />
      Images compressed in AVIF usually take up half the storage space of JPEG
      and WebP. It uses the HEIF ISO standard and AV1 codec from Mozilla,
      Google, Cisco and others. On the other hand, Cloudflare provides hosting
      and distribution services for websites to optimize the loading of content
      for the user.
      <br />
      On October 3, Cloudflare announced support for automatic AVIF image
      delivery. If we check web statistics, we can see that more than half of an
      average website size is occupied by images. We can also see that about{" "}
      <b>15% of websites are powered by Cloudflare</b>, which gives Cloudflare a
      lot of leverage to speed up the web.
      <Image url="cloudflare-stats" alt="cloudflare stats" />
      The optimization of images into the new AVIF image format is an important
      milestone to make the web faster. Improved image compression{" "}
      <b>can reduce bandwidth usage and improve web performance</b>. Services
      and companies like Discord, ILovePDF, Hubspot and Zendesk all use the
      technology provided by Cloudflare to function. We assume that you are on
      this page because you are using Cloudflare services and want to know how
      to turn on AVIF support. Oh, and by the way, this post is not sponsored in
      any way. Let's see:
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="Cloudflare Support"
      />
      Regarding their latest blog post about AVIF, Cloudflare made the decision
      to support AVIF because of the following benefits:
      <Checklist
        items={[
          "fixes WebP biggest flaws",
          "uses the next generation VP10 video codec",
          "is not limited to 8-bit color depth and support 12-bit color",
          "support high dynamic range",
          "uses chrome-from-luma compression technique for smaller file size",
          "is already seeing faster adoption than previous royalty-free codecs",
          "is a feature-rich format with lots of possibilities",
          "already has multiple independent implementations like rav1e",
        ]}
        checked={true}
      />
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Business Plan"
      />
      The Image Resizing feature converts images to the AVIF format.
      Unfortunately, this feature is not free, but part of the Business Plan.
      Since a Business plan costs about $200 or more per month, this seems
      excessive for such a small feature.
      <Image url="cloudflare-pricing" alt="cloudflare pricing" />
      However, in another comment section of the Cloudflare blog, Kornel
      Lesinski of Cloudflare said that automatically converting your images into
      the best variant for your users{" "}
      <b>will eventually be part of their Pro plans in the future</b>. <br />{" "}
      Pro Plans start at $20 per month and have a lot more features. Automatic
      selection of the best TCP settings, automatic mobile and image
      optimization, a better firewall, captchas, cache analytics, etc. For an
      emerging small to medium-sized business, this seems like an attractive
      investment to get the last bit of performance out of your website.
      <H level={2} contentTableCallback={contentTableCallback} text="Workers" />
      Browsers with AVIF support add an image/avif note to their Accept request
      header. To request the AVIF format from the Image Resizing module of
      Cloudflare, simply set the format option to avif. Using a{" "}
      <b>worker script</b>, you can easily automatically detect and enable AVIF
      support:
      <Syntax language="javascript">
        {`addEventListener('fetch', event => {
  const imageURL = "https://yourdomain.com/image.jpg";

  const resizingOptions = {
    width: 800,
    sharpen: 1.0,
  };

  const accept = event.request.headers.get("accept");
  const isAVIFSupported = /image\/avif/.test(accept);
  if (isAVIFSupported) {
    resizingOptions.format = "avif";
  }
  event.respondWith(fetch(imageURL), {cf:{image: resizingOptions}})
})`}
      </Syntax>
      The resizing is done via the options of a fetch subrequest within a
      worker. It could also be beneficial to dynamically operate more image
      functions based on the state of the network. Crisp images in 4K are still
      incredible if your visitors have a bandwidth that supports it, and you can
      still handle the large file size.
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Picture element"
      />
      In our Tutorial on
      <Link
        link="/blog/tutorials/use-avif-in-html/"
        text="how to use avif in HTML"
      />
      , we present you the {`<picture>`} element as the best option to serve
      AVIF files in an HTML environment. Cloudflare allows you to use their
      image optimization endpoint to perform the conversion if you don't want to
      use Workers.
      <Syntax language="html">
        {`<picture>
    <source type="image/avif" 
            srcset="/cdn-cgi/image/format=avif/image.jpg">
    <img src="/image.jpg">
</picture>`}
      </Syntax>
      Keep in mind that support for the AVIF image format is still missing, but
      vendors such as Apple for Safari have confirmed integration. Please do not
      hesitate to look at the sources below for additional information about
      Cloudflare and their AVIF support.
      <br />
      Likewise, we are not sponsored in any way, but we love to see companies
      push technology, which Cloudflare does regularly. They already have
      preliminary support for HTTP/3. Is there anything else you would like to
      know about avif? Do you have a good suggestion for an advanced worker
      script?
      <Link
        link="twitter.com/jschmitz97"
        text="Tell us on Justin's Twitter."
        ext
      />
    </Blog>
  );
}
