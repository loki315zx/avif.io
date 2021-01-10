import Blog from "@components/Blog";
import { BlogSubtitle } from "@components/BlogComponents";

import { useAvifInNetlify as postdata } from "lib/meta";
import { useAvifInHtml as post1 } from "lib/meta";
import { useAvifInCss as post2 } from "lib/meta";
import { useAvifInNextjs as post3 } from "lib/meta";

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <BlogSubtitle text="" />
      Placeholder
    </Blog>
  );
}
