import Blog from "@components/Blog";

import CTA from "@components/CTA";

import { placeholder as postdata } from "lib/meta";
import { placeholder as post1 } from "lib/meta";
import { placeholder as post2 } from "lib/meta";
import { placeholder as post3 } from "lib/meta";

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <h2>JPG</h2>
      <h2>AVIF</h2>
      <h2>Why should I convert JPG to AVIF?</h2>
      <h2>How can I convert JPG to AVIF?</h2>
    </Blog>
  );
}

{
  /*
  title: "Why you should convert your JPG to AVIF",
  sources: [
    "coywolf.news/webmaster/avif-versus-webp-image-format",
    "css-tricks.com/three-things-you-didnt-know-about-avif",
    "freecodecamp.org/news/best-image-format-for-web-in-2019-jpeg-webp-heic-avif-41ba0c1b2789",
    "fronius.me/articles/2020-10-14-comparing-image-formats-jpg-webp-avif",
    "jakearchibald.com/2020/avif-has-landed",
    "lambdatest.com/blog/avif-image-format",
    "netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4",
    "reddit.com/r/AV1/comments/aabqdc/lossless_compression_test_png_vs_webp_vs_avif",
    "www.ctrl.blog/entry/webp-avif-comparison",
    "youtube.com/watch?v=UphN1_7nP8U",
    "zdnet.com/article/netflix-jpeg-needs-replacing-and-av1-image-file-format-is-our-best-option",
*/
}
