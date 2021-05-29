import Posts from "@components/Posts";
import Tags from "@components/Tags";
import Questions from "@components/Questions";
import Meta from "@components/Meta";
import Sources from "@components/Sources";
import { useEffect, useRef, useState } from "react";
import Share from "@components/Share";
import Breadcrumbs from "@components/Breadcrumbs";

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
    <>
      <main className={`blog background${randomNumber} ${props.className}`}>
        <Meta
          title={props.postdata.title}
          description={props.postdata.description}
          url={props.postdata.url}
          image={props.postdata.image}
          date_published={props.postdata.date_published}
          date_modified={props.postdata.date_modified}
          blog
        />

        <div className="blog__header overlay-after">
          <div className="blog__header__content">
            <Breadcrumbs postdata={props.postdata} />
            <h1>{props.postdata.title}</h1>
            <div className="blog__meta white">
              {props.postdata.date_modified} · {readingTime} min read
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
      <Share />
    </>
  );
}
