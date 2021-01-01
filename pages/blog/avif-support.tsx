import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogAdvantages,
  BlogSyntax,
  BlogNote,
  BlogLink,
} from "@components/BlogComponents";
const postdata = {
  readingtime: "",
  title: "",
  description: "",
  url: "",
  image: "",
  keywords: [""],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [""],
  tags: [""],
  questions: [""],
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
      Software, Hardware, Online Services
    </Blog>
  );
}
