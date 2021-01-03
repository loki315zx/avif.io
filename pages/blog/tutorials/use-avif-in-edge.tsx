import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogAdvantages,
  BlogSyntax,
  BlogNote,
  BlogLink,
  BlogLinkExternal,
  BlogImage,
} from "@components/BlogComponents";
const postdata = {
  readingtime: "5",
  title: "View AVIF Images In Microsoft Edge",
  description:
    "Internet Explorer 6, the latest browser.. oh wait, it's called Edge? Well, okay. Microsoft Edge now supports AV1 image formats. Learn more about it here.",
  url: "https://avif.io/blog/tutorials/use-avif-in-edge",
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
  tags: [
    "windows 10",
    "image format",
    "avif images",
    "google",
    "av1 video",
    "users",
    "enable",
    "firefox",
    "av1 video extension",
    "video extension",
    "alliance",
    "alliance for open media",
    "browser",
    "file explorer",
    "file format",
    "image file",
    "image file format",
    "av1 image",
    "video codec",
    "google chrome",
  ],
  questions: [
    "Windows 10 graphics: GPU-powered AV1 video compression coming soon, says Microsoft",
    "To Enable AVIF image format support in Firefox",
    "Windows 10 will support AVIF images format",
    "To Enable AVIF Support in Microsoft Edge,",
    "Enable AVIF Support in Edge",
    "Enable AVIF or AV1 support in Chrome, Edge and Firefox",
    "What is AVIF or AV1? How to enable its support in Chrome and Firefox?",
    "What is AVIF or AV1 image format",
    "Windows 10 AVIF Support Gone?",
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
      While Google can implement new features quickly, other companies like Microsoft and Mozilla
      are much slower. At least when it comes to technology that we rely on, they constantly do all
      the sidequests instead of focusing on the plot. AVIF was created as part of the development of
      AV1, which was developed by the Alliance for Open Media. As all major browser creators are
      part of this alliance and everyone is interested in pushing out a new and modern format,
      expect Microsoft Edge to support AVIF files soon. By the time of writing, Edge does not yet
      support AVIF images; it refuses to render or otherwise open AVIF images. If you plan to enable
      experimental AV1 support, you can do so by downloading a plugin. At least YouTube videos will
      then stream in the new format.
      <BlogSubtitle text="Your version of Edge" />
      If you are looking for a way to test the functionality and capabilities of AV1 on Microsoft
      Edge, you should{" "}
      <BlogLinkExternal
        link="https://www.microsoft.com/edge"
        text="download the latest version of the browser"
      />{" "}
      . The new Microsoft Edge is based on Chromium and was first released first at the beginning of
      2020. It is compatible with all versions of Windows and macOS (for whatever reason). Microsoft
      claims it's the only browser you will ever need, but well, who wouldn't say that about their
      own browser. You may quickly determine if you own a Chromium version of Edge by looking at the
      browser icon. The new version of Edge has a more minimalistic and gradient style, where the
      old one looks like a Van Gogh.
      <BlogSubtitle text="AV1 Plugin" />
      The AV1 Extension add-on is available from the{" "}
      <BlogLinkExternal
        link="https://www.microsoft.com/en-us/p/av1-video-extension/9mvzqvxjbq9v"
        text="Microsoft Store"
      />
      . It provides support for AV1 videos on Windows 10 devices and Edge. It also allows for
      viewing avif images, including thumbnails, and editing them in Paint. Furthermore, this
      extension allows video apps installed on Windows 10 to play videos encoded using the AV1 video
      coding standard developed by the Alliance for Open Media. As already stated, there isn't
      support for AVIF images yet, even though avif.io converts images seamlessly on Edge. However,
      since Microsoft Edge uses the same Chromium Engine, the support for Edge should roll out soon.
    </Blog>
  );
}
