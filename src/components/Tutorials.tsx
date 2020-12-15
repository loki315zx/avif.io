import React from "react";

export interface TutorialsBoxProps {
  cssclass: string;
  title: string;
}

function TutorialsBox(props: TutorialsBoxProps) {
  return (
    <div className={"tutorials__box"} id={props.cssclass}>
      <div className={"tutorial__overflow"}>
        <span className="tutorial__title">{props.title}</span>
      </div>
      <div className="tutorial__shadow"></div>
    </div>
  );
}

export default function Tutorials() {
  return (
    <section className="section__tutorials">
      <div className="text-60 white f3">How to use avif in a productive environment.</div>
      <div className="text-40 white s5">
        avif is developed and used by the most influential tech companies. Netflix has already
        considered .avif superior to the JPEG, PNG, and even the newer WebP image formats for its
        image quality to compressed file size ratio. Leaders and technology innovators from all
        prominent companies contributed to the creation of AV1, and license their patents essential
        to the codec on a royalty-free basis to create an enduring ecosystem. No other codec looks
        as promising as avif. With its huge support, its modern feature rate, the license free usage
        and the best compression rate ever achieved, we are just a step away from innovating the
        modern web.
      </div>
      <div className="tutorials__container">
        <TutorialsBox cssclass="css" title="CSS" />
        <TutorialsBox cssclass="html" title="HTML" />
        <TutorialsBox cssclass="js" title="JS" />
        <TutorialsBox cssclass="svelte" title="Svelte" />
        <TutorialsBox cssclass="react" title="React" />
        <TutorialsBox cssclass="angular" title="Angular" />
        <TutorialsBox cssclass="vue" title="Vue" />
        <TutorialsBox cssclass="firefox" title="Firefox" />
        <TutorialsBox cssclass="gimp" title="GIMP" />
        <TutorialsBox cssclass="windows" title="Windows" />
        <TutorialsBox cssclass="netlify" title="Netlify" />
        <TutorialsBox cssclass="wordpress" title="WordPress" />
      </div>
    </section>
  );
}
