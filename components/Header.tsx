import { conversions } from "../lib/conversions";
import { BlogLink, BlogLinkExternal } from "./BlogComponents";

export default function Header() {
  return (
    <header className="header">
      <div className="flex-center">
        <BlogLink link="/" text="avif.io" className="logo" />
        <BlogLink
          className="conversionscounter"
          link="/"
          text={`over ${conversions} files converted`}
        />
      </div>
      <nav className="menu">
        <BlogLinkExternal text="Support" link="https://www.buymeacoffee.com/justinschmitz" />
        <BlogLink text="Blog" link="/blog/" />
        <BlogLink link="/" text="Convert" className="button-primary" />
      </nav>
    </header>
  );
}
