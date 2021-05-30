import React, { useState, useEffect } from "react";
import SmartLink from "@components/SmartLink";

export default function Header() {
  /* Detect scroll for fixed header */
  const [isFixed, setIsFixed] = useState(true);
  const handleScroll = () => {
    window.pageYOffset < 60 ? setIsFixed(true) : setIsFixed(false);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isFixed ? undefined : "fixed"}>
      <nav>
        <SmartLink link="/" text="avif.io" className="logo" />
        <SmartLink text="Blog" link="/blog/" />
        <SmartLink text="Tutorials" link="/blog/#tutorials" />
        <SmartLink text="Discord" link="discord.com/invite/6w42YpF5hm" ext />
      </nav>
    </header>
  );
}
