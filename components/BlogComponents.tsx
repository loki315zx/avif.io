import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function BlogSyntax(props: { language: string; children: any }) {
  return (
    <SyntaxHighlighter language={props.language} style={vs2015} showLineNumbers={true}>
      {props.children}
    </SyntaxHighlighter>
  );
}

export function BlogTitle(props: { text: string }) {
  return <h1 className="f3 white">{props.text}</h1>;
}

export function BlogSubtitle(props: { text: string; id?: string }) {
  return (
    <div id={props.id} className="content__subtitle">
      {props.text}
    </div>
  );
}

export function BlogNote(props: { text: string }) {
  return <div className="note">{props.text}</div>;
}

export function BlogSources(props: any) {
  const sources = props.sources;
  const listItems = sources.map((source: any, index: any) => (
    <li key={index} className="source">
      <a href={`https://${source}`}>{source.toString().replace(/\//g, " · ")}</a>
    </li>
  ));
  return (
    <div id="sources">
      <ol>{listItems}</ol>
    </div>
  );
}

export function BlogAdvantages(props: any) {
  const advantages = props.advantages;

  const listItems = advantages.map((advantage: any, index: any) => (
    <li key={index}>
      <input type="checkbox" readOnly checked={props.checked} />
      {advantage}
    </li>
  ));
  return (
    <div id="checkboxes">
      <ul>{listItems}</ul>
    </div>
  );
}

/* Todo: Add dynamic post image */

export function BlogPosts(props: any) {
  const posts = props.posts;
  const listItems = posts.map((post: any, index: any) => (
    <Link href={post.url} key={index}>
      <div className="posts__item">
        <div className="posts__img" /*style={{ backgroundImage: `url(${post.image})` }}*/>
          {post.title}
        </div>
        <div className="posts__data">
          <div className="posts__date">{post.date_modified}</div>
          <div className="posts__summary">{post.description}</div>
        </div>
      </div>
    </Link>
  ));
  return (
    <section className="posts">
      <div className="posts__container">{listItems}</div>
    </section>
  );
}

export function BlogTags(props: any) {
  const tags = props.tags;
  const questions = props.questions;

  const listTags = tags.map((tag: any, index: any) => (
    <div key={index} className="tag">
      {tag}
    </div>
  ));
  const listQuestions = questions.map((question: any, index: any) => (
    <div key={index} className="question">
      {question}
    </div>
  ));
  return (
    <section className="tags_container f0">
      {listTags} {listQuestions}
    </section>
  );
}
