import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax, BlogNote } from "@components/BlogComponents";

const postdata = {
  title: "Make use of avif in frameworks",
  description: "",
  url: "https://avif.io/blog/use-avif-in-frameworks",
  image: "",
  keywords: ["avif", "image optimization", "framework", "angular", "svelte", "react.js", "vue.js"],
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

export default function BlogAvifInFrameworks() {
  return (
    <Blog postdata={postdata} posts={posts}>
      <BlogSubtitle text="Next Optimized Images" />
      Webpack config if it doesn't work. Vue, React, Angular. Or other plugins like nuxt-images or
      https://webpack.js.org/plugins/image-minimizer-webpack-plugin/
    </Blog>
  );
}
