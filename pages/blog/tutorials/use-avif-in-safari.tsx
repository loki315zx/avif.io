import { Blog, ContentTable, H } from "@components/Blog/";
import { ContentTableEntry } from "@components/Blog/ContentTable";
import {
  useAvifInEdge as post2,
  useAvifInFirefox as post1,
  useAvifInHtml as post3,
  useAvifInSafari as meta,,
} from "lib/meta";
import { useState } from "react";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function contentTableCallback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }
  return (
    <Blog postMeta={meta} posts={[post1, post2, post3]}>
      <ContentTable contentTable={contentTable} />
      <H contentTableCallback={contentTableCallback} level={2} text="Introduction" />
      AVIF support is under development in web browsers. A version of Google Chrome was released in
      mid-August 2020 that includes full AVIF support. Opera also supports the image format, and
      Mozilla is working on it for Firefox 89. Google Chrome 89 for Android adds AVIF support.
      <br /> So far, we have heard little from Apple about their plans to support AVIF on their
      platforms, particularly Safari. Since they are among the companies in the Alliance of Open
      Media that are actively developing AVIF,{" "}
      <b>we can expect them to release support faster than they did with WebP</b>. This is at least
      our hope, as incompatible browsers are one major factor for an unsupported format. As for
      Safari for macOS, support for AV1 is still pending as well.
      <H contentTableCallback={contentTableCallback} level={2} text="Safari AVIF support soon" />
      But there's great news in the bug tracker for Webkit, which is the core of Safari. It's the
      engine that's mainly used in Apple's Safari web browser, along with all iOS web browsers.
      WebKit is also used in the BlackBerry browser, PlayStation consoles starting with the PS3,
      Tizen mobile operating system and a browser part of Amazon's Kindle e-book reader.
      <br /> The tracked bug mentions added AVIF support on the 5th of March 2021. This patch brings
      initial support of the AVIF image format to the gtk port. This patch includes AVIF support and
      basic decoding of still images using libavif. Animated AVIF images will be protected in a
      future patch.
      <H contentTableCallback={contentTableCallback} level={2} text="Even ANIMATED support!" />
      As if that wasn't already good news, <b>animated AVIF support</b> was added some time later.
      Developers updated dav1d and libavif dependencies and fixed parsing issues. They started to
      turn on AVIF support by default on April 14th. It seems that the port for Webkit is a safe bet
      to be enabled. There is no indication from Apple yet who will issue the flip on Apple ports,
      but we can assume that it will be enabled sometime this year.
    </Blog>
  );
}
