import React from "react";
export default function ShareButtons() {
  return (
    <>
      {
        <div className="share-container">
          <a
            className="share"
            id="twitter"
            target="_blank"
            rel="noopener"
            aria-label="Share on Twitter"
            title="Share on Twitter"
            href="https://twitter.com/intent/tweet?source=https%3A%2F%2Favif.io%2F&text=https%3A%2F%2Favif.io"
          ></a>
          <a
            className="share"
            id="reddit"
            target="_blank"
            rel="noopener"
            aria-label="Share on Reddit"
            title="Share on Reddit"
            href="https://www.reddit.com/submit?url=https%3A%2F%2Favif.io"
          ></a>
          <a
            className="share"
            id="facebook"
            target="_blank"
            rel="noopener"
            aria-label="Share on Facebook"
            title="Share on Facebook"
            href="https://www.facebook.com/share.php?u=avif.io"
          ></a>
        </div>
      }
    </>
  );
}
