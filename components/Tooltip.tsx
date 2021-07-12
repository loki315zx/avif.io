export default function Tooltip(props: { text: string; explanation: string }) {
  return (
    <>
      <div
        tabIndex={0}
        role="button"
        className="min-w-4 text-center text-white tooltip relative mx-2 p-1 bg-bg-300 rounded-md group text-tiny inline-block"
      >
        {props.text}
        <div
          className="text-white absolute z-50 w-12 p-2 text-left bg-bg-500 border-2 border-bg-300 rounded-lg hidden group-hover:block"
          style={{ top: "-20px", left: "120%" }}
        >
          {props.explanation}
        </div>
      </div>
    </>
  );
}
