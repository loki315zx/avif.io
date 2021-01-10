import { BlogLink } from "@components/BlogComponents";
import { useState } from "react";

export default function Cookies() {
  const [progress, setProgress] = useState(false);
  return (
    <div className={`cookie ${progress}`}>
      We use cookies to analyze traffic and improve performance, quality and safety. Don't use this
      site if you disagree with our <BlogLink text="Policy" link="/privacy-policy" />. Click this
      banner to close it.
      <div
        role="button"
        className="overlay flex-center"
        onKeyDown={() => setProgress(true)}
        tabIndex={0}
        onClick={() => setProgress(true)}>
        Close
      </div>
    </div>
  );
}
