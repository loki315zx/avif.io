import Blog from "@components/Blog";
import Img from "@components/Img";
import BlogLink from "@components/BlogLink";

import { useAvifInEdge as postdata } from "lib/meta";
import { useAvifInWindows as post1 } from "lib/meta";
import { useAvifInFirefox as post2 } from "lib/meta";
import { useAvifInGimp as post3 } from "lib/meta";

export default function BlogAvifInEdge() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <h2>Current status and future plans</h2>
      While Google can implement new features quickly, other companies like Microsoft and Mozilla
      are much slower. At least when it comes to technology that we rely on, they constantly do all
      the sidequests instead of focusing on the plot. AVIF was created as part of the development of
      AV1, which was developed by the Alliance for Open Media. As all major browser creators are
      part of this alliance and everyone is interested in pushing out a new and modern format,
      expect Microsoft Edge to support AVIF files soon. By the time of writing, Edge does not yet
      support AVIF images; it refuses to render or otherwise open AVIF images.
      <Img url="edge-new" alt="the new microsoft edge" />
      If you plan to enable experimental AV1 support, you can do so by downloading a plugin. At
      least YouTube videos will then stream in the new format.
      <h2>Your version of Edge</h2>
      If you are looking for a way to test the functionality and capabilities of AV1 on Microsoft
      Edge, you should{" "}
      <BlogLink
        link="https://www.microsoft.com/edge"
        text="download the latest version of the browser"
      />{" "}
      . The new Microsoft Edge is based on Chromium and was first released first at the beginning of
      2020. It is compatible with all versions of Windows and macOS (for whatever reason). Microsoft
      claims it's the only browser you will ever need, but well, who wouldn't say that about their
      own browser. You may quickly determine if you own a Chromium version of Edge by looking at the
      browser icon. The new version of Edge has a more minimalistic and gradient style, where the
      old one looks like a Van Gogh.
      <Img url="edge-or-edge" alt="microsoft edge version difference" />
      <h2>AV1 Plugin</h2>
      The AV1 Extension add-on is available from the{" "}
      <BlogLink
        link="https://www.microsoft.com/en-us/p/av1-video-extension/9mvzqvxjbq9v"
        text="Microsoft Store"
      />
      . It provides support for AV1 videos on Windows 10 devices and Edge. It also allows for
      viewing AVIF images, including thumbnails, and editing them in Paint.
      <Img url="edge-av1" alt="av1 extension" />
      Furthermore, this extension allows video apps installed on Windows 10 to play videos encoded
      using the AV1 video coding standard developed by the Alliance for Open Media. As already
      stated, there isn't support for AVIF images yet, even though avif.io converts images
      seamlessly on Edge. However, since Microsoft Edge uses the same Chromium Engine, the support
      for Edge should roll out soon.
    </Blog>
  );
}
