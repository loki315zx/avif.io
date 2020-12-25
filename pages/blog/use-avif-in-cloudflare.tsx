import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax } from "@components/BlogComponents";

const postdata = {
  title: "How to use avif in Cloudflare",
  description:
    "Learn how to transform images on Cloudflare’s edge platform and convert images to WebP or AVIF format on demand.",
  url: "https://avif.io/blog/use-avif-in-cloudflare",
  image: "",
  keywords: ["avif", "cdn", "cloudflare", "image optimization"],
  author: "Justin Schmitz",
  data_published: "16.12.20",
  date_modified: "22.12.20",
  sources: [
    "blog.cloudflare.com/generate-avif-images-with-image-resizing",
    "blog.cloudflare.com/http3-the-past-present-and-future",
    "developers.cloudflare.com/images",
    "developers.cloudflare.com/images/resizing-with-workers",
    "endler.dev/2020/perf",
    "meterpreter.org/cloudflare-supports-the-new-avif-image-format-in-image-resizing",
    "neowin.net/news/cloudflare-image-resizing-adds-support-for-avif-images",
    "w3techs.com/technologies/details/cn-cloudflare",
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
      Cloudflare mainly provides content distribution services and provides free hosting for a large
      number of websites to quickly optimize the content loading on the user side. On the 3rd of
      October, Cloudflare has announced support for automatically serving avif images. Let's keep in
      mind that more than a half of an average website is spent on images and around 15% of all
      websites are powered by Cloudflare services. This marks a huge step toward making the web a
      faster place. Services like Discord, ILovePDF, Okta, Medium and Udemy all rely on the
      technological foundation of Cloudflare. WE suppose you are visiting this site because you are
      owning a website with Cloudflare services as well and would like to know how to turn on avif
      support. Oh and by the way, this post is not sponsored in any kind. Let's see:
      <BlogSubtitle text="Why Cloudflare supports avif" />
      Regarding their latest blog post about avif, Cloudflare has made the decision to support avif
      for the follow advantages:
      <BlogAdvantages advantages={advantages} />
      <BlogSubtitle text="Business & Pro Plan" />
      Converting images to the avif format is part of the Image Resizing feature. Unfortunately,
      this feature is not free and part of their Business Plan. As a Business plan is quite
      expensive with around $200 / month, this seems like an overkill for such a feature. However,
      in a comment section on the Cloudflare Blog, Kornel Lesiński from Cloudflare said that
      converting images automatically to serve the best variant for your users is going to be part
      of the 'Polish' feature and will therefore be accessible to Pro Users as well. Pro Plans start
      at $20 / month and come with many more features like automatically choosing the best TCP
      settings, automatic mobile and image optimizations, a better firewall, captchas, cache
      analytics and more. So for an upcoming small to medium-sized business, this seems like a good
      investment to get the last bit of performance out of your website.
      <BlogSubtitle text="Implementation with Workers" />
      Browsers with avif support add a image/avif to their Accept request header. In order to
      request the AVIF format from the Image Resizing module of Cloudflare, simply set the format
      option to avif. Using a worker script you can auto-detect and enable support for avif easily:
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
      might also be a good idea to dynamically serve more image features, based on the condition of
      the network. Crisp-clear images in 4K are still awesome, if you visitors are having a bandwith
      that supports it and you can support serving the high file size.
      <BlogSubtitle text="The picture element" />
      In our Tutorial on how to use avif in HTML, we present you the {`<picture>`} element as the
      best option to serve avif files in a HTML environment. If you don't want to use Workers,
      Cloudflare allows you to use their image optimization endpoint to perform the conversion.
      <BlogSyntax language="html">
        {`<picture>
    <source type="image/avif" 
            srcset="/cdn-cgi/image/format=avif/image.jpg">
    <img src="/image.jpg">
</picture>`}
      </BlogSyntax>
      That's it for today's article. If you'd love to find out more about Cloudflare and their avif
      support, feel free to check out the sources below. As said already, we are not sponsored in
      any way. However we find it amazing when companies push technologies, which Cloudflare
      regularly does. They already have preliminary support for HTTP/3 as well. Is there anything
      else you'd like to know about avif? Got a good suggestion on an advanced worker script? Let us
      know on Justin's Twitter.
    </Blog>
  );
}
