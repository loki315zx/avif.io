export interface PercentageSliderProps {
  className?: string;
  value: number;
  name: string;
  disabled?: boolean;
  label?: string;
  id?: string;
  description: string;

  onChange(value: number): void;
}

export default function PercentageSlider(props: PercentageSliderProps) {
  return (
    <div className={props.className + " " + "s2"} id={props.id}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p className="center bold">{props.name}</p>
        <span className="tutorial">?</span>
      </div>
      <div style={{ display: "flex" }}>
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
        <b style={{ marginLeft: 10 }}>{props.value}%</b>
      </div>
    </div>
  );
}
