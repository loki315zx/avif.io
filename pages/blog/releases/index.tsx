import Archive from "@components/Archive";

import { january2021 as post1 } from "lib/meta";
import { february2021 as post2 } from "lib/meta";

const filler = "";

const posts = [post2, post1];

import { releaseIndex as postdata } from "lib/meta";

export default function BlogAvif() {
  return (
    <Archive className="releases" postdata={postdata} posts={posts}>
      {filler}
    </Archive>
  );
}
