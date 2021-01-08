import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogAdvantages,
  BlogSyntax,
  BlogNote,
  BlogLink,
  BlogLinkExternal,
  BlogImage,
  BlogPosts,
} from "@components/BlogComponents";
import CTA from "@components/CTA";
import Meta from "@components/Meta";

import { placeholder as postdata } from "lib/meta";
import { useAvifInEdge as post1 } from "lib/meta";
import { useAvifInFirefox as post2 } from "lib/meta";
import { placeholder as post3 } from "lib/meta";
import { useAvifInEdge as post4 } from "lib/meta";
import { useAvifInFirefox as post5 } from "lib/meta";
import { placeholder as post6 } from "lib/meta";

export default function BlogAvif() {
  return (
    <>
      <BlogPosts posts={[post1, post2, post3, post4, post5, post6]} />
    </>
  );
}
