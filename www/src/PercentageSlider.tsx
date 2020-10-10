import React from "react";

export interface PercentageSliderProps {
  className?: string;
  value: number;
  name: string;
  disabled?: boolean;

  onChange(value: number): void;
}

export default function PercentageSlider(props: PercentageSliderProps) {
  return (
    <div className={props.className}>
      <p>
        <b>{props.value}%</b> {props.name}
      </p>
      <input
        type={"range"}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        min={0}
        max={100}
        disabled={props.disabled}
      />
    </div>
  );
}
