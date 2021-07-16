import Breadcrumbs from "@components/Blog/Breadcrumbs";
import Posts from "@components/Blog/Posts";
import Questions from "@components/Blog/Questions";
import Sources from "@components/Blog/Sources";
import Tags from "@components/Blog/Tags";
import Layout from "@components/Layout";
import { useEffect, useRef, useState } from "react";

export default function Blog(props: {
  postMeta: any;
  children: any;
  posts: any;
  className?: any;
}) {
  const articleRef = useRef<HTMLElement>(null);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    if (articleRef.current == null) return;
    const text = articleRef.current.textContent ?? "";
    const wordCount = text.split(/\s+/).length;
    const averageWordsPerMinute = 150;
    setReadingTime(Math.ceil(wordCount / averageWordsPerMinute));
  }, [articleRef]);

  return (
    <Layout meta={props.postMeta}>
      <main className={`blog ${props.className}`}>
        <div
          className="py-12 px-4 md:p-10 lg:p-12 bg-gradient animation-delay-2"
          transition-style="in:circle:center"
        >
          <div className="container max-w-screen-md">
            <Breadcrumbs postMeta={props.postMeta} />
            <h1
              className="md:text-4xl animation-delay-5"
              transition-style="in:wipe:right"
            >
              {props.postMeta.title}
            </h1>
            <div>
              <span
                transition-style="in:wipe:right"
                className="animation-delay-7"
              >
                {props.postMeta.dateModified}
              </span>{" "}
              <span
                transition-style="in:wipe:right"
                className="animation-delay-8"
              >
                · {readingTime} min read
              </span>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-screen-md">
          <article
            ref={articleRef}
            className="p-4 md:p-0"
            style={{ fontSize: "1.1em" }}
          >
            {props.children}
          </article>
          <div className="mt-12">
            {props.postMeta.sources && (
              <>
                <h5 className="mt-6">Sources</h5>
                <Sources sources={props.postMeta.sources} />
              </>
            )}

            {props.postMeta.tags && (
              <>
                <h5 className="mt-6">Topic clusters</h5>
                <Tags tags={props.postMeta.tags} />
              </>
            )}

            {props.postMeta.questions && (
              <>
                <h5 className="mt-6">Related search terms</h5>
                <Questions questions={props.postMeta.questions} />
              </>
            )}
          </div>
        </div>
      </main>
      <div className="mt-12">
        {props.posts[0] && <Posts posts={props.posts} />}
      </div>
    </Layout>
  );
}
