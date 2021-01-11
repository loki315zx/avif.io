import Archive from "@components/Archive";
import { BlogAdvantages, BlogSubtitle } from "@components/BlogComponents";

const notes110120 = [
  "Added a fixed header for easier navigation.",
  "Browser Console errors do not show up.",
  "If you accept the Cookie Banner, it won't show again",
  "Fixed several links not working",
  "Optimized layout of mobile sites",
  "Sources of Blog Posts are now ordered alphabetically",
  "A sitemap has been added for search engines",
  "Fixed several mistakes in terms of accessibility",
  "Several other linting and bug fixes",
];

const posts = [""];

import { releaseIndex as postdata } from "lib/meta";

export default function BlogAvif() {
  return (
    <Archive postdata={postdata} posts={posts}>
      <BlogSubtitle text="11.01.2021" />
      <BlogAdvantages advantages={notes110120} checked />
    </Archive>
  );
}
