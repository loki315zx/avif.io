import Breadcrumbs from "@components/Blog/Breadcrumbs";
import Checklist from "@components/Blog/Checklist";
import ContentTable from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import Image from "@components/Blog/Image";
import Posts from "@components/Blog/Posts";
import Questions from "@components/Blog/Questions";
import Sources from "@components/Blog/Sources";
import Tags from "@components/Blog/Tags";
import Syntax from "@components/Blog/Syntax";
import Layout from "@components/Layout";

import { useEffect, useRef, useState } from "react";

export default function Blog(props: { postdata: any; children: any; posts: any; className?: any }) {
  const articleRef = useRef<HTMLElement>(null);
  const [readingTime, setReadingTime] = useState(0);
  const randomNumber = Math.floor(Math.random() * 7 + 1);

  useEffect(() => {
    if (articleRef.current == null) return;
    const text = articleRef.current.textContent ?? "";
    const wordCount = text.split(/\s+/).length;
    const averageWordsPerMinute = 250;
    setReadingTime(Math.ceil(wordCount / averageWordsPerMinute));
  }, [articleRef]);

  return (
    <Layout meta={props.postdata}>
      <main className={`blog background${randomNumber} ${props.className}`}>
        <div className="blog__header overlay-after">
          <div className="blog__header__content">
            <Breadcrumbs postdata={props.postdata} />
            <h1>{props.postdata.title}</h1>
            <div className="blog__meta white">
              {props.postdata.dateModified} · {readingTime} min read
            </div>
          </div>
        </div>

        <div className="content__container">
          <article ref={articleRef} className="content">
            {props.children}
            <div className="content__details">
              {props.postdata.sources && (
                <>
                  <h5>Sources</h5>
                  <Sources sources={props.postdata.sources} />
                </>
              )}

              {props.postdata.tags && (
                <>
                  <h5>Topic clusters</h5>
                  <Tags tags={props.postdata.tags} />
                </>
              )}

              {props.postdata.questions && (
                <>
                  <h5>People also ask</h5>
                  <Questions questions={props.postdata.questions} />
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

export {
  Blog,
  Breadcrumbs,
  Checklist,
  ContentTable,
  H,
  Image,
  Posts,
  Questions,
  Sources,
  Tags,
  Syntax,
};
