export interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  const progressPercent = Math.round(props.progress * 100);

  const innerStyle = {
    width: `${progressPercent}%`,
  };

  return (
    <div
      style={{ width: "calc(100% - 3rem" }}
      className={
        "absolute bottom-2 z-50 h-1 m-0 bg-gray-200 rounded-lg origin-right transition-all ease-out duration-500"
      }
    >
      <div
        className={
          "rounded-lg z-50 flex items-center justify-end h-full mb-2 bg-gradient transition-all ease-out duration-300"
        }
        style={innerStyle}
      >
        <div
          className="relative w-2 h-2 bg-pink-700 rounded-full m"
          style={{ marginRight: "-4px", boxShadow: "0 0 3px 2px #fff" }}
        />
      </div>
    </div>
  );
}
