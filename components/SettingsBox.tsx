import React, { ChangeEvent, useEffect, useState } from "react";
import PercentageSlider from "@components/PercentageSlider";

export interface Settings {
  effort: number;
  quality: number;
  useYuv444: boolean;
  keepTransparency: boolean;
}

export interface SettingsBoxProps {
  open: boolean;

  onSettingsUpdate(settings: Settings): void;
}

export default function SettingsBox(props: SettingsBoxProps) {
  const [effort, setEffort] = useState(0);
  const [quality, setQuality] = useState(60);
  const [useYuv444, setUseYuv444] = useState(true);
  const [keepTransparency, setKeepTransparency] = useState(true);
  const [lossless, setLossless] = useState(false);

  useEffect(() => props.onSettingsUpdate({ effort, quality, useYuv444, keepTransparency }), [
    effort,
    quality,
    useYuv444,
    keepTransparency,
  ]);

  function onLosslessChanged(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setLossless(true);
      props.onSettingsUpdate({
        useYuv444,
        quality: 100,
        effort,
        keepTransparency,
      });
    } else {
      setLossless(false);
      props.onSettingsUpdate({ useYuv444, quality, effort, keepTransparency });
    }
  }

  function on420Changed(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.checked) return;

    setUseYuv444(false);
  }

  function on444Changed(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.checked) return;

    setUseYuv444(true);
  }

  function onKeepTransparencyChanged(event: ChangeEvent<HTMLInputElement>) {
    setKeepTransparency(event.target.checked);
  }

  return (
    <div className={"settings-box align-left secondary " + (props.open ? "open" : "closed")}>
      <div className={"align-left"}>
        <PercentageSlider
          className={"align-left"}
          value={effort}
          name={"Effort"}
          onChange={setEffort}
          label="effort"
        />
        <PercentageSlider
          className={"align-left " + (lossless ? "disabled" : "")}
          value={quality}
          name={"Quality"}
          onChange={setQuality}
          label="quality"
        />
        <label className={"lossless-checkbox"}>
          <input id="lossless" type={"checkbox"} checked={lossless} onChange={onLosslessChanged} />

          <p className={"checkbox-text"}>Lossless</p>
        </label>
      </div>
      {/*<div className={"subsampling"}>
        <p>Subsample Chroma (back soon)	</p>
        <div className={"subsampling-options disabled"}>
          <label>
            <input
              type={"checkbox"}
              checked={!useYuv444}
              onChange={on420Changed}
            />
            <p className={"checkbox-text"}>4:2:0</p>
          </label>
          <label>
            <input
              type={"checkbox"}
              checked={useYuv444}
              onChange={on444Changed}
            />
            <p className={"checkbox-text"}>4:4:4</p>
          </label>
        </div>
    </div>*/}
      <div className={"misc"}>
        <label>
          <input
            type={"checkbox"}
            checked={keepTransparency}
            onChange={onKeepTransparencyChanged}
          />
          <p className={"checkbox-text"}>Keep transparency</p>
        </label>
      </div>
    </div>
  );
}
