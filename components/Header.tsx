import { conversions } from "../lib/conversions";
import BlogLink from "@components/BlogLink";

export default function Header() {
  return (
    <header>
      <div className="flex-center">
        <BlogLink link="/" text="avif.io" className="logo button-primary" />
        <BlogLink
          className="conversionscounter"
          link="/"
          text={`over ${conversions} files converted`}
        />
      </div>
      <nav className="menu">
        <BlogLink text="Releases" link="/blog/releases/" />
        <BlogLink text="Discord" link="https://discord.com/invite/6w42YpF5hm" external />
        <BlogLink text="Blog" link="/blog/" />
      </nav>
    </header>
  );
}
