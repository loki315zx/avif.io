export interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  const progressPercent = Math.round(props.progress * 100);

  const innerStyle = {
    width: `${progressPercent}%`,
  };

  return (
    <div className={"bar__container"}>
      <div className={"bar__inner will-change"} style={innerStyle}>
        <div className="bar__dot" />
      </div>
    </div>
  );
}
