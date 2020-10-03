import React, { ChangeEvent, useEffect, useState } from "react";
import "./SettingsBox.css";

export interface Settings {
  quality: number;
  useYuv444: boolean;
}

export interface SettingsBoxProps {
  open: boolean;

  onSettingsUpdate(settings: Settings): void;
}

export default function SettingsBox(props: SettingsBoxProps) {
  const [quality, setQuality] = useState(10);
  const [useYuv444, setUseYuv444] = useState(false);
  const [lossless, setLossless] = useState(false);

  useEffect(() => props.onSettingsUpdate({ quality, useYuv444 }), [
    quality,
    useYuv444,
  ]);

  function onQualityChanged(event: React.ChangeEvent<HTMLInputElement>) {
    setQuality(Number(event.target.value));
  }

  function onUseYuv444Changed(event: React.ChangeEvent<HTMLInputElement>) {
    setUseYuv444(event.target.checked);
  }

  function onLosslessChanged(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setLossless(true);
      props.onSettingsUpdate({ useYuv444, quality: 100 });
    } else {
      setLossless(false);
      props.onSettingsUpdate({ useYuv444, quality });
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

  return (
    <div
      className={"settings-box align-left " + (props.open ? "open" : "closed")}
    >
      <div className={"quality align-left"}>
        <div className={"align-left " + (lossless ? "disabled" : "")}>
          <p>
            <b>{quality}%</b> Quality
          </p>
          <input
            type={"range"}
            value={quality}
            onChange={onQualityChanged}
            min={0}
            max={100}
            disabled={lossless}
          />
        </div>
        <label className={"lossless-checkbox"}>
          <input
            type={"checkbox"}
            checked={lossless}
            onChange={onLosslessChanged}
          />
          <p className={"checkbox-text"}>Lossless</p>
        </label>
      </div>
      <div className={"subsampling"}>
        <p>Subsample Chroma</p>
        <div className={"subsampling-options"}>
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
      </div>
    </div>
  );
}
