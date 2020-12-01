import React from "react";
import ConversionsCounter from "./ConversionsCounter";

export default function Header() {

  return (
    <>
      {(

<div className="header">
  <div className="flex-center"><span className="logo">avif.io</span>
  <ConversionsCounter/></div>
  <div className="menu">
    <a>Support</a>
    <a>Features</a>
    <a>Blog</a>
    <a className="button-primary">Convert</a>
  </div>
</div>
      )}
    </>
  );
}
