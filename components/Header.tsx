import { conversions } from "../lib/conversions";
import SmartLink from "@components/SmartLink";

export default function Header() {
  return (
    <header>
      <div className="flex-center">
        <SmartLink link="/" text="avif.io" className="logo button-primary" />
        <SmartLink
          className="conversionscounter"
          link="/"
          text={`over ${conversions} files converted`}
        />
      </div>
      <nav className="menu">
        <SmartLink text="Releases" link="/blog/releases/" />
        <SmartLink text="Discord" link="https://discord.com/invite/6w42YpF5hm" external />
        <SmartLink text="Blog" link="/blog/" />
      </nav>
    </header>
  );
}
