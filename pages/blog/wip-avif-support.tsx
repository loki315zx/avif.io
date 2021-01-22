import Blog from "@components/Blog";

import { placeholder as postdata } from "lib/meta";
import { placeholder as post1 } from "lib/meta";
import { placeholder as post2 } from "lib/meta";
import { placeholder as post3 } from "lib/meta";

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <h2></h2>
      Software, Hardware, Online Services
    </Blog>
  );
}
