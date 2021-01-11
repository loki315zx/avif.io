import Blog from "@components/Blog";
import { BlogSubtitle } from "@components/BlogComponents";

import { placeholder as postdata } from "lib/meta";
import { placeholder as post1 } from "lib/meta";
import { placeholder as post2 } from "lib/meta";
import { placeholder as post3 } from "lib/meta";

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <BlogSubtitle text="Misc" />
      Placeholder
    </Blog>
  );
}
