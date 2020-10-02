import React, { useEffect, useState } from "react";

export interface Settings {
  quality: number;
  useYuv444: boolean;
}

export interface SettingsBoxProps {
  onSettingsUpdate(settings: Settings): void;
}

export default function SettingsBox(props: SettingsBoxProps) {
  const [quality, setQuality] = useState(10);
  const [useYuv444, setUseYuv444] = useState(false);

  useEffect(() => props.onSettingsUpdate({ quality, useYuv444 }), []);

  function onQualityChanged(event: React.ChangeEvent<HTMLInputElement>) {
    setQuality(Number(event.target.value));
    props.onSettingsUpdate({ quality: Number(event.target.value), useYuv444 });
  }

  function onUseYuv444Changed(event: React.ChangeEvent<HTMLInputElement>) {
    setUseYuv444(event.target.checked);
    props.onSettingsUpdate({ quality, useYuv444: event.target.checked });
  }

  return (
    <div>
      {quality}%
      <input
        type={"range"}
        value={quality}
        onChange={onQualityChanged}
        min={0}
        max={100}
      />
      <input
        type={"checkbox"}
        checked={useYuv444}
        onChange={onUseYuv444Changed}
      />
    </div>
  );
}
