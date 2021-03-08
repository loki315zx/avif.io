import React, { ChangeEvent, useEffect, useState } from "react";
import PercentageSlider from "@components/PercentageSlider";
import { getCookieJson, setCookieJson } from "@utils/cookies";

export interface Settings {
  effort: number;
  quality: number;
  useYuv444: boolean;
  keepTransparency: boolean;
}

interface StoredSettings extends Settings {
  lossless: boolean;
}

export interface SettingsBoxProps {
  open: boolean;

  onSettingsUpdate(settings: Settings): void;
}

const settingsCookieKey = "settings";

export default function SettingsBox(props: SettingsBoxProps) {
  const [effort, setEffort] = useState(0);
  const [quality, setQuality] = useState(60);
  const [useYuv444, setUseYuv444] = useState(true);
  const [keepTransparency, setKeepTransparency] = useState(true);
  const [lossless, setLossless] = useState(false);

  function saveSettings() {
    setCookieJson(settingsCookieKey, { effort, quality, useYuv444, keepTransparency, lossless });
  }

  function loadSettings(): StoredSettings | undefined {
    return getCookieJson(settingsCookieKey);
  }

  useEffect(() => {
    const loadedSettings = loadSettings();
    if (loadedSettings !== undefined) {
      setEffort(loadedSettings.effort);
      setQuality(loadedSettings.quality);
      setUseYuv444(loadedSettings.useYuv444);
      setKeepTransparency(loadedSettings.keepTransparency);
      setLossless(loadedSettings.lossless);
    }
  }, []);

  useEffect(() => {
    saveSettings();
    props.onSettingsUpdate({ effort, quality, useYuv444, keepTransparency });
  }, [effort, quality, useYuv444, keepTransparency]);

  useEffect(() => {
    saveSettings();
    if (lossless) {
      props.onSettingsUpdate({
        useYuv444,
        quality: 100,
        effort,
        keepTransparency,
      });
    } else {
      props.onSettingsUpdate({ useYuv444, quality, effort, keepTransparency });
    }
  }, [lossless]);

  function onLosslessChanged(event: ChangeEvent<HTMLInputElement>) {
    setLossless(event.target.checked);
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
          id="effort"
        />

        <PercentageSlider
          className={"align-left " + (lossless ? "disabled" : "")}
          value={quality}
          name={"Quality"}
          onChange={setQuality}
          label="quality"
          id="quality"
        />

        <label className={"lossless-checkbox"}>
          <input id="lossless" type={"checkbox"} checked={lossless} onChange={onLosslessChanged} />
          Lossless
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
      <div className={"misc s2"}>
        <label>
          <input
            type={"checkbox"}
            checked={keepTransparency}
            onChange={onKeepTransparencyChanged}
          />
          Keep transparency
        </label>
      </div>
      <div className="f0">Settings don't change a running conversion.</div>
    </div>
  );
}
