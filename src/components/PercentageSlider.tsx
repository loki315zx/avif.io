export interface PercentageSliderProps {
  className?: string;
  value: number;
  name: string;
  disabled?: boolean;

  onChange(value: number): void;
}

export default function PercentageSlider(props: PercentageSliderProps) {
  return (
    <div className={props.className + " " + "s1"}>
      <p className="s0 center">
        <span className="bold primary" style={{ marginRight: 5 }}>
          {props.value}%
        </span>{" "}
        {props.name}
      </p>
      <input
        type={"range"}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        min={0}
        max={100}
        disabled={props.disabled}
        step={5}
      />
    </div>
  );
}
