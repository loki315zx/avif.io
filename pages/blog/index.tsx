import Meta from "@components/Meta";
import Posts from "@components/Posts";

/*

#NOTE

I can bet there are thousands of more efficient ways to do this.
Whenever I create a new blog post, I import the meta data from lib/meta.
I add it inside an array of a constant, which then is being used inside the Posts component (see below).

I'd love to have an automatic way, like:

1. Load meta file
2. Check for existing categories in that file
3. Map through all blog posts
4. Create sections with title+posts accordingly.

*/

import { useAvifInCloudflare as post1 } from "lib/meta";
import { useAvifInCss as post2 } from "lib/meta";
import { useAvifInEdge as post3 } from "lib/meta";
import { useAvifInFirefox as post4 } from "lib/meta";
import { useAvifInFrameworks as post5 } from "lib/meta";
import { useAvifInGimp as post6 } from "lib/meta";
import { useAvifInHtml as post7 } from "lib/meta";
import { useAvifInNextjs as post8 } from "lib/meta";
import { useAvifInWindows as post9 } from "lib/meta";
import { useAvifInWordpress as post10 } from "lib/meta";
import { useAvifInNetlify as post11 } from "lib/meta";
import { useAvifInMagento as post12 } from "lib/meta";
import { useAvifInSafari as post13 } from "lib/meta";

import { january2021 as post101 } from "lib/meta";
import { february2021 as post102 } from "lib/meta";
import { march2021 as post103 } from "lib/meta";

import { imageOptimizationIn2021 as post1001 } from "lib/meta";

import { avifVsJpg as post2001 } from "lib/meta";

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

import { blog as postdata } from "lib/meta";

export default function BlogAvif() {
  return (
    <main className="archive blog">
      <Meta
        title={postdata.title}
        description={postdata.description}
        author={postdata.author}
        url={postdata.url}
        image={postdata.image}
        date_published={postdata.date_published}
        date_modified={postdata.date_modified}
      />

      <div className="blog__header white center">
        <h1>{postdata.title}</h1>
        <h2>{postdata.description}</h2>
      </div>

      <Posts posts={articles} title="articles" />
      <Posts posts={posts} title="tutorials" />
      <Posts posts={comparisons} title="comparisons" />
      <Posts posts={releases} title="releases" />
    </main>
  );
}
