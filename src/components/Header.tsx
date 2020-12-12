import React from "react";
import Link from "next/link";
import ConversionsCounter from "./ConversionsCounter";

export default function Header() {
  return (
    <>
      {
        <div className="header">
          <div className="flex-center">
            <a className="logo">
              <Link href="/">avif.io</Link>
            </a>
            <div className="conversionscounter">
              over <ConversionsCounter />
              files converted
            </div>
          </div>
          <div className="menu">
            <a id="support">
              {" "}
              <Link href="https://www.buymeacoffee.com/justinschmitz">
                Support
              </Link>
            </a>
            <a id="blog">Blog (soon)</a>
            <a id="cta" className="button-primary">
              <Link href="/">Convert</Link>
            </a>
          </div>
        </div>
      }
    </>
  );
}
