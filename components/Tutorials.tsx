import React from "react";
import TutorialsBox from "./TutorialsBox";

export default function Tutorials() {
  return (
    <div className="tutorial_container">
      <div className="text-40 f3 white">
        How to use avif in a productive environment.
      </div>
      <div className="text-40 white s4">
        AV1 (.avif) is the solution. It is developed by the Alliance for Open
        Media in collaboration with Google, Mozilla, Intel and other tech
        giants.{" "}
      </div>
      <div className="tutorials_container">
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
    </div>
  );
}
