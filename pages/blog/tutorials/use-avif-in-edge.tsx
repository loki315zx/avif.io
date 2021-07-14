import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import Image from "@components/Blog/Image";
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
      postMeta={meta.tutEdge}
      posts={[meta.tutFirefox, meta.tutGimp, meta.tutWindows]}
    >
      <ContentTable contentTable={contentTable} />
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Current status"
      />
      While Google can quickly implement new browser features, other companies
      such as Microsoft are much slower. AVIF was created as part of developing
      AV1, which was developed by the Alliance for Open Media. Since{" "}
      <b> all the major browser manufacturers are part of this alliance </b>
      and everyone is interested in displacing a new and modern format, you
      expect Microsoft Edge to support AVIF files soon. At the time of writing,
      Edge does not yet support AVIF images; it refuses to render or otherwise
      open AVIF images.
      <Image url="edge-new" alt="the new microsoft edge" />
      If you want to enable experimental AV1 support, you can do so by
      downloading a plugin. At least YouTube videos will then be streamed in the
      new format.
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Your Edge version"
      />
      If you are looking for a way to test the functionality and capabilities of
      AV1 on Microsoft Edge, you should
      <Link
        link="microsoft.com/edge"
        text="download the latest version of the browser."
        ext
      />
      <br />
      The new Microsoft Edge is based on Chromium and was first released in
      early 2020. It is compatible with all versions of Windows and macOS for
      whatever reason. Microsoft claims it is the only browser you will ever
      need, but well, who wouldn't say that about their own browser. You can
      quickly determine if you own a Chromium version of Edge by looking at the
      browser icon. The new version of Edge has a more minimalist and gradient
      style, while the old one looks like a Van Gogh.
      <Image url="edge-or-edge" alt="microsoft edge version difference" />
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="AV1 Plugin"
      />
      The AV1 Extension add-on is available from the
      <Link
        link="microsoft.com/en-us/p/av1-video-extension/9mvzqvxjbq9v"
        text="Microsoft Store."
        ext
      />
      It provides <b>support for AV1 videos on Windows 10 devices and Edge</b>.
      It also allows viewing AVIF images, including thumbnails, and editing in
      Paint.
      <Image url="edge-av1" alt="av1 extension" />
      In addition, this extension enables video apps installed on Windows 10 to
      play videos encoded using the AV1 video encoding standard developed by the
      Alliance for Open Media. As already mentioned,{" "}
      <b>there is no support for AVIF images yet</b>, although avif.io converts
      images seamlessly in Edge. However, since Microsoft Edge uses the same
      Chromium engine, support for Edge should be introduced soon.
    </Blog>
  );
}
