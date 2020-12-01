import React from "react";

export interface ProgressBarProps {
  progress: number; // A floating point number in the range 0 to 1
}

export default function ProgressBar(props: ProgressBarProps) {
  const progressPercent = Math.round(props.progress * 100);

  const innerStyle = {
    width: `${progressPercent}%`,
  };

  return (
    <>
      <div className={"bar-inner"} style={innerStyle} />
      <div className={"bar-inner-small"} style={innerStyle} />
    </>
  );
}
