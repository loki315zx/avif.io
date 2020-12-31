import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogAdvantages,
  BlogSyntax,
  BlogNote,
  BlogLink,
  BlogLinkExternal,
} from "@components/BlogComponents";
const postdata = {
  title: "How to convert images to AVIF using Cloudflare",
  description:
    "Cloudflare has added support for AVIF, a new image format. Learn how to optimize images and convert them to WebP or AVIF on demand.",
  url: "https://avif.io/blog/tutorials/use-avif-in-cloudflare",
  image: "",
  keywords: ["avif", "cdn", "cloudflare", "image optimization"],
  author: "Justin Schmitz",
  data_published: "16.12.20",
  date_modified: "22.12.20",
  sources: [
    "blog.cloudflare.com/generate-avif-images-with-image-resizing",
    "blog.cloudflare.com/http3-the-past-present-and-future",
    "cloudflare.com/case-studies/discord",
    "cloudflare.com/case-studies/hubspot",
    "cloudflare.com/case-studies/zendesk",
    "cloudflare.com/plans/",
    "developers.cloudflare.com/images",
    "developers.cloudflare.com/images/resizing-with-workers",
    "endler.dev/2020/perf",
    "ilovepdf.com/help/privacy",
    "meterpreter.org/cloudflare-supports-the-new-avif-image-format-in-image-resizing",
    "neowin.net/news/cloudflare-image-resizing-adds-support-for-avif-images",
    "w3techs.com/technologies/details/cn-cloudflare",
  ],
  tags: [
    "image format",
    "cloudflare",
    "browser",
    "image resizing",
    "google",
    "file size",
    "safari",
    "apple",
    "bandwidth",
    "header",
    "video codec",
    "sites",
    "event",
    "request header",
    "jpeg xr",
    "image compression",
    "webp support",
    "cloudflare workers",
    "original image",
    "use case",
  ],
  questions: [
    "Cloudflare supports the new AVIF image format in Image Resizing",
    "Progressively delivering new image formats with CSS and Cloudflare Workers",
    "Cloudflare Image Resizing adds support for AVIF images",
    "Cloudflare Workers and AVIF Support",
    "Cloudflare Image Resizing docs",
    "AVIF, a next-gen image format for the web",
    "Resizing with Cloudflare Workers",
  ],
};

const posts = [
  {
    url: "#",
    title: "#",
    date_modified: "#",
    description: "#",
  },
  {
    url: "#",
    title: "#",
    date_modified: "#",
    description: "#",
  },
  {
    url: "#",
    title: "#",
    date_modified: "#",
    description: "#",
  },
];

const advantages = [
  "fixes WebP biggest flaws",
  "uses the next generation VP10 video codec",
  "is not limited to 8-bit color depth and support 12-bit color",
  "support high dynamic range",
  "uses chrome-from-luma compression technique for smaller file size",
  "is already seeing faster adoption than previous royalty-free codecs",
  "is a feature-rich format with lots of possibilities",
  "already has multiple independent implementations like rav1e (we use this for avif.io!)",
];

export default function BlogAvifInCloudflare() {
  return (
    <Blog postdata={postdata} posts={posts}>
      Images compressed in AVIF can be reduced to half the size of JPEG and WebP. It combines the
      HEIF ISO standard with the royalty-free AV1 codec from Mozilla, Google, Cisco, and others.
      Cloudflare on the other hand provides hosting services and distribution services to many
      websites to optimize the loading of content on the user's side. On the 3rd of October,
      Cloudflare announced support for automatic serving of AVIF images. Upon reviewing web stats,
      let's point out that more than half of an average website is spent on pictures, and that over
      15% of all websites are powered by Cloudflare.
      <picture>
        <source srcSet="/images/cloudflare-stats.avif" type="image/avif" />
        <source srcSet="/images/cloudflare-stats.webp" type="image/webp" />
        <img src="/images/cloudflare-stats.jpg" alt="avif in html" />
      </picture>
      Allowing users to optimize images into the new AVIF image format marks a major milestone in
      making the web a faster place. Improved image compression can reduce bandwidth usage and
      improve web performance. Services and companies like Discord, ILovePDF, Hubspot and Zendesk
      all use the technological foundation that is provided by Cloudflare to function. We assume you
      are on this page because you are using Cloudflare services and would like to know how to turn
      on AVIF support. Oh, and by the way, this post is not sponsored in any way. Let's see:
      <BlogSubtitle text="Why Cloudflare supports avif" />
      Regarding their latest blog post about avif, Cloudflare has made the decision to support avif
      for the following advantages:
      <BlogAdvantages advantages={advantages} checked={true} />
      <BlogSubtitle text="Business & Pro Plan" />
      The Image Resizing feature converts images to the AVIF format. Unfortunately, this feature is
      not available for free but is part of the Business Plan. Since a Business plan costs around
      $200 or more per month, this seems overkill for such a small feature. However, in another
      comment section on the Cloudflare Blog, Kornel Lesinski from Cloudflare said that
      automatically converting your images into the best variant for your users will eventually be
      part of their Pro plans in the future. Pro Plans start at $20/month and come with a lot more
      features. Things like automatically choosing the best TCP settings, automatic mobile and image
      optimizations, a better firewall, captchas, cache analytics, etc. For an upcoming small to
      medium-sized business, this seems like an attractive investment to get the last bit of
      performance out of your website.
      <BlogSubtitle text="Implementation with Workers" />
      Browsers with AVIF support add an image/avif note to their Accept request header. To request
      the AVIF format from the Image Resizing module of Cloudflare, simply set the format option to
      avif. Using a worker script, you can auto-detect and enable support for AVIF easily:
      <BlogSyntax language="javascript">
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
      </BlogSyntax>
      The resizing feature is accessed via the options of a fetch() subrequest inside a Worker. It
      might also be beneficial to dynamically serve more image features based on the network's
      condition. Crisp-clear images in 4K are still incredible if your visitors have a bandwidth
      that supports it, and you can keep serving the large file size. Also, supported image formats
      are the only ones that can be resized.
      <BlogSubtitle text="The picture element" />
      In our Tutorial on{" "}
      <BlogLink link="/blog/tutorials/use-avif-in-html" text="how to use avif in HTML" />, we
      present you the {`<picture>`} element as the best option to serve AVIF files in an HTML
      environment. Cloudflare allows you to use their image optimization endpoint to perform the
      conversion if you don't want to use Workers.
      <BlogSyntax language="html">
        {`<picture>
    <source type="image/avif" 
            srcset="/cdn-cgi/image/format=avif/image.jpg">
    <img src="/image.jpg">
</picture>`}
      </BlogSyntax>
      Remember that support for the AVIF image format is still missing, but vendors like Apple for
      Safari or Mozilla for Firefox have confirmed an integration. Please feel free to check out the
      sources below for additional information about Cloudflare and their avif support. Likewise,
      we're not sponsored in any way, however we love to see companies push technologies, which
      Cloudflare does regularly. They already have preliminary support for HTTP/3 as well. Is there
      anything else you'd like to know about avif? Got a good suggestion on an advanced worker
      script?{" "}
      <BlogLinkExternal
        link="https://twitter.com/jschmitz97"
        text="Let us know on Justin's Twitter."
      />
    </Blog>
  );
}
