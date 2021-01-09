import { BlogLink, BlogLinkExternal } from "./BlogComponents";
import ConversionsCounter from "./ConversionsCounter";

export default function Footer() {
  return (
    <>
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
            avif.io Features
          </a>{" "}
          <a title="title" href="#">
            Upcoming Features
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
            What is AVIF?
          </a>{" "}
          <a title="title" href="#">
            AVIF Advantages
          </a>{" "}
          <a title="title" href="#">
            AVIF Support
          </a>{" "}
          <a title="title" href="#">
            AVIF In-Depth
          </a>
        </div>
        <div id="footer-more">
          <div className="bold s1">More</div>
          <BlogLink text="Blog" link="/blog" newLine />
          <BlogLinkExternal text="Contact" link="mailto:support@avif.io" newLine />
          <BlogLinkExternal
            text="Donate"
            link="https://www.buymeacoffee.com/justinschmitz"
            newLine
          />
          <BlogLink text="Legal & Privacy" link="/privacy-policy" newLine />
        </div>
      </div>
    </>
  );
}
