import PercentageSlider from "@components/PercentageSlider";
import { getCookieJson, setCookieJson } from "@utils/cookies";
import React, { ChangeEvent, useEffect, useState } from "react";

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
  const [effort, setEffort] = useState(40);
  const [quality, setQuality] = useState(65);
  const [useYuv444, setUseYuv444] = useState(true);
  const [keepTransparency, setKeepTransparency] = useState(true);
  const [lossless, setLossless] = useState(false);

  function saveSettings() {
    setCookieJson(settingsCookieKey, {
      effort,
      quality,
      useYuv444,
      keepTransparency,
      lossless,
    });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lossless]);

  function onLosslessChanged(event: ChangeEvent<HTMLInputElement>) {
    setLossless(event.target.checked);
  }

  function onKeepTransparencyChanged(event: ChangeEvent<HTMLInputElement>) {
    setKeepTransparency(event.target.checked);
  }

  return (
    <div className={"text-left" + " " + (props.open ? "open" : "closed")}>
      <h2 className="mb-1">Conversion settings</h2>
      <div className="mb-4">Settings don't change a running conversion.</div>
      <div className="my-4">
        <PercentageSlider
          value={effort}
          name={"Effort"}
          onChange={setEffort}
          label="effort"
          id="effort"
          explanation="Set the processing power. More effort equals longer time of conversion, but better compression."
        />

        <PercentageSlider
          value={quality}
          name={"Quality"}
          onChange={setQuality}
          label="quality"
          id="quality"
          explanation="Set the output quality. 100% almost equals lossless conversion."
          disabled={lossless ? true : false}
        />
      </div>
      <div>
        <label>
          <input
            id="lossless"
            type={"checkbox"}
            checked={lossless}
            onChange={onLosslessChanged}
          />
          Lossless
        </label>
        <label>
          <input
            type={"checkbox"}
            checked={keepTransparency}
            onChange={onKeepTransparencyChanged}
          />
          Keep transparency
        </label>
      </div>
    </div>
  );
}
