import Posts from "@components/Blog/Posts";
import Layout from "@components/Layout";
/*

#NOTE

Whenever I create a new blog post, I import the meta data from lib/meta.
I add it inside an array of a constant, which then is being used inside the Posts component (see below).

I'd love to have an automatic way, like:

1. Load meta file
2. Check for existing categories in that file
3. Map through all blog posts
4. Create sections with title+posts accordingly.

*/
import {
  avifVsJpg as post2001,
  blog as meta,
  february2021 as post102,
  imageOptimizationIn2021 as post1001,
  january2021 as post101,
  march2021 as post103,
  tutorialCloudflare as post1,
  tutorialCss as post2,
  tutorialEdge as post3,
  tutorialFirefox as post4,
  tutorialFrameworks as post5,
  tutorialGimp as post6,
  tutorialHtml as post7,
  tutorialMagento as post12,
  tutorialNetlify as post11,
  tutorialNextjs as post8,
  tutorialSafari as post13,
  tutorialWindows as post9,
  tutorialWordpress as post10,
} from "lib/meta";

const comparisons = [post2001];
const releases = [post103, post102, post101];
const articles = [post1001];
const posts = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
  post10,
  post11,
  post12,
  post13,
];

export default function BlogAvif() {
  return (
    <Layout meta={meta}>
      <main className="archive blog">
        <div className="blog__header white center">
          <h1>{meta.title}</h1>
          <h2>{meta.description}</h2>
        </div>
        <Posts posts={articles} title="articles" />
        <Posts posts={posts} title="tutorials" />
        <Posts posts={comparisons} title="comparisons" />
        <Posts posts={releases} title="releases" />
      </main>
    </Layout>
  );
}
