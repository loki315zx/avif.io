import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import css from "react-syntax-highlighter/dist/cjs/languages/hljs/css";
import html from "react-syntax-highlighter/dist/cjs/languages/hljs/htmlbars";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import scss from "react-syntax-highlighter/dist/cjs/languages/hljs/scss";
import xml from "react-syntax-highlighter/dist/cjs/languages/hljs/xml";
import vs2015 from "react-syntax-highlighter/dist/cjs/styles/hljs/vs2015";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("xml", xml);

export default function Syntax(props: { language: string; children: any }) {
  function copyToClipboard(e: any) {
    navigator.clipboard.writeText(props.children);
    e.target.focus();
  }
  return (
    <div className="blog__syntax">
      <SyntaxHighlighter language={props.language} style={vs2015} showLineNumbers={true}>
        {props.children}
      </SyntaxHighlighter>
      <button className="blog__syntax__copy" onClick={copyToClipboard}>
        <span>Copy</span>
      </button>
    </div>
  );
}
