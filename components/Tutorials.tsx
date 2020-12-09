import React from "react";
import { motion } from "framer-motion";

export interface TutorialsBoxProps {
  cssclass: string;
  title: string;
}

function TutorialsBox(props: TutorialsBoxProps) {
  return (
    <motion.div
      className={"tutorials__box"}
      id={props.cssclass}
      whileHover={{ scale: 1.03, rotate: 3 }}
    >
      <motion.div className={"tutorial__overflow"}>
        <motion.span className="tutorial__title">{props.title}</motion.span>
      </motion.div>
      <div className="tutorial__shadow"></div>
    </motion.div>
  );
}

export default function Tutorials() {
  return (
    <section className="section__tutorials">
      <div className="text-60 white f3">
        How to use avif in a productive environment.
      </div>
      <div className="text-40 white s5">
        AV1 (.avif) is the solution. It is developed by the Alliance for Open
        Media in collaboration with Google, Mozilla, Intel and other tech
        giants.
      </div>
      <div className="tutorials__container s5">
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
