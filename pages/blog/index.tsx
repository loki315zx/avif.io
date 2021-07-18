import Posts from "@components/Blog/Posts";
import Layout from "@components/Layout";
import meta from "@lib/meta.json";

const comparisons = [
  meta.avifVsJpg,
  meta.avifVsPng,
  meta.avifVsGif,
  meta.avifVsJpegxl,
];
const releases = [
  meta.january2021,
  meta.february2021,
  meta.march2021,
  meta.july2021,
];
const articles = [meta.imageOptimizationIn2021];
const posts = [
  meta.tutCloudflare,
  meta.tutCss,
  meta.tutEdge,
  meta.tutFirefox,
  meta.tutFrameworks,
  meta.tutGimp,
  meta.tutHtml,
  meta.tutMagento,
  meta.tutNetlify,
  meta.tutNextjs,
  meta.tutSafari,
  meta.tutWindows,
  meta.tutWordpress,
];

export default function BlogAvif() {
  return (
    <Layout meta={meta.blog}>
      <main className="p-4 archive blog">
        <div className="mt-12 text-center">
          <h1>{meta.blog.title}</h1>
          <h2 className="text-base">{meta.blog.description}</h2>
        </div>
        <Posts posts={articles} title="articles" />
        <Posts posts={posts} title="tutorials" />
        <Posts posts={comparisons} title="comparisons" />
        <Posts posts={releases} title="releases" />
      </main>
    </Layout>
  );
}
