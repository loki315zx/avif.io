import Breadcrumbs from "@components/Blog/Breadcrumbs";
import Posts from "@components/Blog/Posts";
import Questions from "@components/Blog/Questions";
import Sources from "@components/Blog/Sources";
import Tags from "@components/Blog/Tags";
import Layout from "@components/Layout";
import { useEffect, useRef, useState } from "react";

export default function Blog(props: { postMeta: any; children: any; posts: any; className?: any }) {
  const articleRef = useRef<HTMLElement>(null);
  const [readingTime, setReadingTime] = useState(0);
  const randomNumber = Math.floor(Math.random() * 7 + 1);

  useEffect(() => {
    if (articleRef.current == null) return;
    const text = articleRef.current.textContent ?? "";
    const wordCount = text.split(/\s+/).length;
    const averageWordsPerMinute = 150;
    setReadingTime(Math.ceil(wordCount / averageWordsPerMinute));
  }, [articleRef]);

  return (
    <Layout meta={props.postMeta}>
      <main className={`blog background${randomNumber} ${props.className}`}>
        <div className="blog__header overlay-after">
          <div className="blog__header__content">
            <Breadcrumbs postMeta={props.postMeta} />
            <h1>{props.postMeta.title}</h1>
            <div className="blog__meta white">
              {props.postMeta.dateModified} · {readingTime} min read
            </div>
          </div>
        </div>

        <div className="content__container">
          <article ref={articleRef} className="content">
            {props.children}
            <div className="content__details">
              {props.postMeta.sources && (
                <>
                  <h5>Sources</h5>
                  <Sources sources={props.postMeta.sources} />
                </>
              )}

              {props.postMeta.tags && (
                <>
                  <h5>Topic clusters</h5>
                  <Tags tags={props.postMeta.tags} />
                </>
              )}

              {props.postMeta.questions && (
                <>
                  <h5>Related search terms</h5>
                  <Questions questions={props.postMeta.questions} />
                </>
              )}
            </div>
          </article>
        </div>
      </main>
      {props.posts[0] && <Posts posts={props.posts} />}
    </Layout>
  );
}
