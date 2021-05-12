import Posts from "@components/Posts";
import Tags from "@components/Tags";
import Questions from "@components/Questions";
import Meta from "@components/Meta";
import Breadcrumbs from "@components/Breadcrumbs";
import Sources from "@components/Sources";
import { useEffect, useRef, useState } from "react";

const randomNumber = Math.floor(Math.random() * 7 + 1);

export default function Blog(props: { postdata: any; children: any; posts: any; className?: any }) {
  const articleRef = useRef<HTMLElement>(null);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    if (articleRef.current == null) return;
    const text = articleRef.current.textContent ?? "";
    const wordCount = text.split(/\s+/).length;
    const averageWordsPerMinute = 250; // XXX Tweak this if you want
    setReadingTime(Math.ceil(wordCount / averageWordsPerMinute));
  }, [articleRef]);

  return (
    <>
      <main className={`blog background${randomNumber} ${props.className}`}>
        <Meta
          title={props.postdata.title}
          description={props.postdata.description}
          author={props.postdata.author}
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
            <h3>Related topics, websites and sources</h3>
            <h5>
              Links that offer more information or have been used as sources for this article.
            </h5>
            <Sources sources={props.postdata.sources} />
            <h3>Topic cluster and Questions</h3>
            Topics referenced across search results organized in clusters. Followed by related
            questions and titles mentioned on Google, Reddit and Stackoverflow.
            <Tags tags={props.postdata.tags} />
            <Questions questions={props.postdata.questions} />
          </article>
        </div>
      </main>
      {props.posts[0] ? <Posts posts={props.posts} /> : ""}
    </>
  );
}
