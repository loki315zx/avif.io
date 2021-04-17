import Blog from "@components/Blog";

import { useAvifInSafari as postdata } from "lib/meta";
import { useAvifInFirefox as post1 } from "lib/meta";
import { useAvifInEdge as post2 } from "lib/meta";
import { useAvifInHtml as post3 } from "lib/meta";

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <h2>Introduction</h2>
      AVIF support has been in development in web browsers. A version of Google Chrome was released
      that includes full AVIF support in mid-August 2020. Opera also supports the image format, and
      Mozilla is working on it for Firefox 89. Google Chrome 89 for Android adds AVIF support. Until
      now, we have heard little from Apple regarding their plans to support AVIF on their platforms,
      especially Safari. Since they are one of the companies in the Alliance of Open Media, which is
      actively developing AVIF, we can expect them to release support more quickly than they did
      with WebP. At least this is our hope, as incompatible browsers are just one major factor for
      an unsupported format. As for Safari for macOS, support for AV1 is still pending as well.
      <h2>Safari adding AVIF support soon</h2>
      But there's excellent news in the bug tracker for Webkit, which is the core of Safari. It is
      the engine used mainly in Apple's Safari web browser, along with all iOS web browsers. WebKit
      is also used in the BlackBerry Browser, PlayStation consoles starting with the PS3, Tizen
      mobile OS, and a browser part of the Amazon Kindle e-book reader. The tracked bug mentions
      added AVIF support on the 5th of March 2021. This patch brings initial support of the AVIF
      image format to the gtk port. This patch covers avif support and basic decoding for still
      images by using libavif. Animated AVIF images will be protected in a future patch.
      <h2>Even ANIMATED support!</h2>
      As if this was not great enough news, animated AVIF support was added sometime later.
      Developers updated dav1d and libavif dependencies and fixed parsing issues. They started
      asking for AVIF support to be switched on by default on the 14th of April. It seems like the
      port for Webkit is a safe bet to be enabled. There is still no indication from Apple who will
      issue the flip on Apple ports, but we can expect it to be enabled sometime this year.
    </Blog>
  );
}
