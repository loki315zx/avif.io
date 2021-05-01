import React from "react";
import SmartLink from "@components/SmartLink";

function useStickyState(defaultValue: any, key: any) {
  const [value, setValue] = React.useState(defaultValue);
  React.useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);
    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

const CookieBanner = () => {
  const [mode, setMode] = useStickyState("false", "true");
  return (
    <div className={`cookie ${mode}`}>
      We serve cookies on this site to analyze traffic, remember your preferences, and optimize your
      experience.
      <SmartLink text="More Details" link="/privacy-policy/" />.
      <div
        role="button"
        className="overlay flex-center"
        onKeyDown={() => setMode("true")}
        onClick={() => setMode("true")}
        tabIndex={0}>
        Close
      </div>
    </div>
  );
};

export default CookieBanner;
