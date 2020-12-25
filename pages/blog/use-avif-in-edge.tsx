import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax, BlogNote } from "@components/BlogComponents";

const postdata = {
  title: "View AVIF Images In Microsoft Edge",
  description:
    "Internet Explorer 6, the latest browser.. oh wait, it's called Edge? Well, okay. Microsoft Edge now supports AV1 image formats. Learn more about it here.",
  url: "https://avif.io/blog/use-avif-in-edge",
  image: "",
  keywords: ["avif", "image optimization", "microsoft", "edge"],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [
    "en.wikipedia.org/wiki/AV1",
    "microsoft.com/en-us/p/av1-video-extension/9mvzqvxjbq9v",
    "support.microsoft.com/en-us/microsoft-edge",
    "techcommunity.microsoft.com/t5/discussions/avif-image-support/m-p/1802087",
    "thewindowsclub.com/what-is-avif-or-av1",
    "zdnet.de/88384405/microsoft-kuendigt-hardwarebeschleunigung-fuer-av1-an",
  ],
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

const advantages = ["", ""];

export default function BlogAvifInEdge() {
  return (
    <Blog postdata={postdata} posts={posts}>
      <BlogSubtitle text="Current status and future plans" />
      While Google can be a speedrunner when it comes to implementing new features, other companies
      like Microsoft and Mozilla seem to be slower. At least when it comes to technology that we
      rely on, they appear to do all sidequests instead of focusing on the plot. AVIF is part of the
      creation of AV1 that is developed by the Alliance of Open Media. As all significant browser
      creators are part of this alliance and everyone is interested in pushing a new and modern
      format, you can expect Microsoft Edge to support avif files soon. By the time of writing, Edge
      does not yet support avif images. It refuses to render or open AVIF images. If you're looking
      to enable experimental AV1 support, you can do so by downloading a plugin. At least videos on
      YouTube will then be streamed with the new format.
      <BlogSubtitle text="Your version of Edge" />
      If you're looking to play around with AV1 on Microsoft Edge, make sure to download the latest
      version. The new Microsoft Edge is based on Chromium and was released first at the beginning
      of 2020. It is compatible with all versions of Windows and macOS (for whatever reason).
      Microsoft claims it's the only browser you will ever need, but well, who doesn't say that
      about their own browser. You can quickly check if you own the Chromium version of Edge by
      looking at the browser icon. The new browser has a more minimalistic and gradient style, while
      the old one looks like a Van Gogh.
      <BlogSubtitle text="AV1 Plugin" />
      The AV1 Extension add-on can be installed in the Microsoft Store. It adds support for the AV1
      video to Windows 10 devices. This extension helps video apps installed on Windows 10 play
      videos that have been encoded using the AV1 video coding standard developed by the Alliance
      for Open Media. As already said, there's unfortunately no support for avif images yet, even
      though avif.io converts images seamlessly on Edge. Since Microsoft Edge uses the same Chromium
      Engine, the support for Edge should roll out soon.
    </Blog>
  );
}
