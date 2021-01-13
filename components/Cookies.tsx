import React from "react";
import { BlogLink } from "@components/BlogComponents";

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

const Cookies = () => {
  const [mode, setMode] = useStickyState("false", "true");
  return (
    <div className={`cookie ${mode}`}>
      We use cookies to analyze improve traffic, performance, quality and safety. By using our
      website you agree with the <BlogLink text="Policy" link="/privacy-policy" />. Click this
      banner to close.
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

export default Cookies;
