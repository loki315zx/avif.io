import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax, BlogNote } from "@components/BlogComponents";

const postdata = {
  title: "",
  description: "",
  url: "",
  image: "",
  keywords: [""],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [""],
};

const posts = [
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
];

const advantages = ["", ""];

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={posts}>
      <BlogSubtitle text="" />
      use image set and a special fix for firefox with JPG
    </Blog>
  );
}
