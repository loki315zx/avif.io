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
              A tool by Justin Schmitz and Niksa Sporin that has already converted{" "}
              <ConversionsCounter /> files.
            </div>
            <div>© 2020 avif.io</div>
          </div>
          <div id="footer-about">
            <div className="bold s1">About</div>
            <a title="title" href="#">
              Features
            </a>{" "}
            <a title="title" href="#">
              Upcoming
            </a>{" "}
            <a title="title" href="#">
              Changelog
            </a>{" "}
            <a title="title" href="#">
              User Feedback
            </a>
          </div>
          <div id="footer-learn">
            <div className="bold s1">Learn</div>
            <a title="title" href="#">
              What is avif?
            </a>{" "}
            <a title="title" href="#">
              How do I use avif?
            </a>{" "}
            <a title="title" href="#">
              FAQ
            </a>{" "}
            <a title="title" href="#">
              avif support
            </a>
          </div>
          <div id="footer-more">
            <div className="bold s1">More</div>
            <a title="title" href="#">
              Blog
            </a>
            <a title="title" href="#">
              Contact
            </a>
            <a title="title" href="#">
              Donate
            </a>
            <a title="title" href="#">
              Legal & Privacy
            </a>
          </div>
        </div>
      }
    </>
  );
}
