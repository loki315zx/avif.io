import React from "react";
import ConversionsCounter from "./ConversionsCounter";

export default function Footer() {
  return (
    <>
      {
        <div className="footer">
          <div id="footer-info">
            <div className="bold s2 f2">avif.io</div>
            <div className="s2 text-60">
              A tool by Justin Schmitz and Niksa Sporin that has already{" "}
              converted <ConversionsCounter /> files.
            </div>
            <div>© 2020 avif.io</div>
          </div>
          <div id="footer-about">
            <div className="bold s1">About</div>
            <a>Features</a> <a>Upcoming</a> <a>Changelog</a>{" "}
            <a>User Feedback</a>
          </div>
          <div id="footer-learn">
            <div className="bold s1">Learn</div>
            <a>What is avif?</a> <a>How do I use avif?</a> <a>FAQ</a>{" "}
            <a>Where is avif supported?</a>
          </div>
          <div id="footer-more">
            <div className="bold s1">More</div>
            <a>Blog</a>
            <a>Contact</a>
            <a>Donate</a>
            <a>Legal & Privacy</a>
          </div>
        </div>
      }
    </>
  );
}
