import Link from "next/link";
import { useState } from "react";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import vs2015 from "react-syntax-highlighter/dist/cjs/styles/hljs/vs2015";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import html from "react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars";
import css from "react-syntax-highlighter/dist/cjs/languages/hljs/css";
import scss from "react-syntax-highlighter/dist/cjs/languages/hljs/scss";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("scss", scss);

export function BlogSyntax(props: { language: string; children: any }) {
  const [copySuccess, setCopySuccess] = useState("Copy");
  function copyToClipboard(e: any) {
    navigator.clipboard.writeText(props.children);
    e.target.focus();
    setCopySuccess("Copied!");
  }
  return (
    <div className="blog__syntax">
      <SyntaxHighlighter language={props.language} style={vs2015} showLineNumbers={true}>
        {props.children}
      </SyntaxHighlighter>
      <button className="blog__syntax__copy" onClick={copyToClipboard}>
        <span>{copySuccess}</span>
      </button>
    </div>
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
      <a target="_blank" href={`https://${source}`}>
        {source.toString().replace(/\//g, " · ")}
      </a>
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

export function BlogLink(props: { link: string; text: string; newLine?: boolean }) {
  return (
    <div style={{ display: props.newLine ? "block" : "inline-block" }}>
      <Link href={props.link}>
        <a title={props.text}>{props.text}</a>
      </Link>
    </div>
  );
}

export function BlogLinkExternal(props: { link: string; text: string; newLine?: boolean }) {
  return (
    <div style={{ display: props.newLine ? "block" : "inline-block" }}>
      <a target="_blank" title={props.text} href={props.link}>
        {props.text}
      </a>
    </div>
  );
}

export function BlogImage(props: { alt: string; url: string }) {
  return (
    <>
      <picture>
        <source
          sizes="(max-width: 608px) 100vw, 608px"
          srcSet={`${props.url}.avif 1920w, ${props.url}.avif 1280w, ${props.url}.avif 640w, ${props.url}.avif 320w,`}
          type="image/avif"
        />
        <source
          sizes="(max-width: 608px) 100vw, 608px"
          srcSet={`${props.url}.webp 1920w, ${props.url}.webp 1280w, ${props.url}.webp 640w, ${props.url}.webp 320w,`}
          type="image/webp"
        />
        <source
          sizes="(max-width: 608px) 100vw, 608px"
          srcSet={`${props.url}.jpg 1920w, ${props.url}.jpg 1280w, ${props.url}.jpg 640w, ${props.url}.jpg 320w,`}
          type="image/jpeg"
        />
        <img decoding="async" loading="lazy" src={`${props.url}.jpg`} alt={props.alt} />
      </picture>
    </>
  );
}
