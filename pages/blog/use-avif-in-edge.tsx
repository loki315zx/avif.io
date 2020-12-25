import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax, BlogNote } from "@components/BlogComponents";

const postdata = {
  title: "Enable AVIF in Edge",
  description: "Learn how to view AVIF images in your favorite Microsoft Browser... Edge!",
  url: "https://avif.io/blog/use-avif-in-edge",
  image: "",
  keywords: ["avif", "image optimization", "microsoft", "edge"],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [
    "en.wikipedia.org/wiki/AV1",
    "microsoft.com/en-us/p/av1-video-extension/9mvzqvxjbq9v",
    "support.microsoft.com/en-us/microsoft-edge/download-the-new-microsoft-edge-based-on-chromium-0f4a3dd7-55df-60f5-739f-00010dba52cf",
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
      <BlogSubtitle text="Next Optimized Images" />
      Until then, we are using the third party Next.JS plugin called 'next-optimized-images'. It has
      lots of additional features and support images loaded via CSS, which in our usecase is highly
      appreciated. It yet doesn't support avif as well, but the author is currently rewriting the
      whole plugin from scratch and a canary version is already published. We've linked to the
      plugin in the sources below.
    </Blog>
  );
}
