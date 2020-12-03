import React from "react";
import ConversionsCounter from "./ConversionsCounter";

export default function Header() {
  return (
    <>
      {
        <div className="header">
          <div className="flex-center">
            <span className="logo">avif.io</span>
            <ConversionsCounter />
          </div>
          <div className="menu">
            <a id="support">Support</a>
            <a id="features">Features</a>
            <a id="blog">Blog</a>
            <a id="cta" className="button-primary">
              Convert
            </a>
          </div>
        </div>
      }
    </>
  );
}
