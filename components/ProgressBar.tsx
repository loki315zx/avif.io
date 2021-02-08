export interface ProgressBarProps {
  progress: number; // A floating point number in the range 0 to 1
}

export default function ProgressBar(props: ProgressBarProps) {
  const progressPercent = Math.round(props.progress * 100);

  const innerStyle = {
    width: `${progressPercent}%`,
  };

  return (
    <div className={"bar__container"}>
      <div className={"bar__inner"} style={innerStyle}>
        <div className="bar__dot" />
      </div>
    </div>
  );
}
