import { conversions } from "../lib/conversions";
import SmartLink from "@components/SmartLink";

export default function Header() {
  return (
    <header>
      <div className="flex-center">
        <SmartLink link="/" text="avif.io" className="logo button-primary" />
        <SmartLink
          tabindex={-1}
          className="conversionscounter"
          link="/"
          text={`over ${conversions} files converted`}
        />
      </div>
      <nav>
        <SmartLink text="Discord" link="discord.com/invite/6w42YpF5hm" ext />
        <SmartLink text="News" link="/blog/#releases" />
        <SmartLink text="Blog" link="/blog/" />
      </nav>
    </header>
  );
}
