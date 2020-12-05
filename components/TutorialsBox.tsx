import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export interface TutorialsBoxProps {
  cssclass: string;
  title: string;
}

export default function TutorialsBox(props: TutorialsBoxProps) {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <motion.div
      className={"tutorials_box"}
      id={props.cssclass}
      whileHover={{ scale: 1.03, rotate: 3 }}
    >
      <motion.div className={"tutorial_overflow"}>
        <motion.span className="tutorial_title">{props.title}</motion.span>
      </motion.div>
      <div className="tutorial_shadow"></div>
    </motion.div>
  );
}
