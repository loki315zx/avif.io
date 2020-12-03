import React from "react";

export interface TutorialsBoxProps {
  cssclass: string;
  title: string;
}

export default function TutorialsBox(props: TutorialsBoxProps) {
  return (
    <div className={"tutorials_box"} id={props.cssclass}>
      <div className={"tutorial_overflow"}>
        <span className="tutorial_title">{props.title}</span>
      </div>
      <div className="tutorial_shadow"></div>
    </div>
  );
}
