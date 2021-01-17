export interface PercentageSliderProps {
  className?: string;
  value: number;
  name: string;
  disabled?: boolean;
  label?: string;
  id?: string;

  onChange(value: number): void;
}

export default function PercentageSlider(props: PercentageSliderProps) {
  return (
    <div className={props.className + " " + "s1"} id={props.id}>
      <p className="s0 center">
        <span className="primary" style={{ marginRight: 5 }}>
          <b>{props.value}%</b>
        </span>{" "}
        {props.name}
      </p>
      <label>
        {props.label}
        <input
          type={"range"}
          value={props.value}
          onChange={(e) => props.onChange(Number(e.target.value))}
          min={0}
          max={100}
          disabled={props.disabled}
          step={5}
        />
      </label>
    </div>
  );
}
