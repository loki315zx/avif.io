import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function BlogSyntax(props: { children: any }) {
  return (
    <SyntaxHighlighter language="html" style={vs2015} showLineNumbers={true}>
      {props.children}
    </SyntaxHighlighter>
  );
}

export function BlogTitle(props: { text: string }) {
  return <h1 className="f3 white">{props.text}</h1>;
}

export function BlogSubtitle(props: { text: string }) {
  return <div className="content__subtitle">{props.text}</div>;
}

export function BlogSources(props: any) {
  const sources = props.sources;
  const listItems = sources.map((source: any, index: any) => (
    <li key={index} className="source">
      <a href={source}>{source}</a>
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
      <input type="checkbox" checked readOnly />
      {advantage}
    </li>
  ));
  return (
    <div id="checkboxes">
      <ul>{listItems}</ul>
    </div>
  );
}

export function BlogPosts(props: any) {
  const posts = props.posts;
  const listItems = posts.map((post: any, index: any) => (
    <div className="posts__item" key={index}>
      <div className="posts__img">{post.title}</div>
      <div className="posts__data">
        <div className="posts__date">{post.date}</div>
        <div className="posts__summary">{post.summary}</div>
      </div>
    </div>
  ));
  return (
    <section className="posts">
      <div className="posts__container">{listItems}</div>
    </section>
  );
}
