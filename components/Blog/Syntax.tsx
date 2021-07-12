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
    <div className="code relative group">
      <SyntaxHighlighter
        language={props.language}
        style={vs2015}
        showLineNumbers={true}
      >
        {props.children}
      </SyntaxHighlighter>
      <button
        className="copycode absolute top-0 z-50 py-2 px-4 bg-bg-800 bg-bg-pink hover:bg-pink-700 text-pink-700 hover:text-white left-full rounded-r-xl rounded-l-none cursor-pointer opacity-0 group-hover:opacity-100 group"
        onClick={copyToClipboard}
      >
        <span>Copy</span>
        <span
          className="check absolute z-50 flex items-center justify-center w-5 h-5 p-2 bg-pink-700 rounded-full opacity-0 group-hover:opacity-100"
          style={{ top: "10%", right: "-40px" }}
        >
          ✓
        </span>
      </button>
    </div>
  );
}
