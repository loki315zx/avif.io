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

export default function Code(props: { language: string; children: any }) {
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
