import Link from "@components/Link";
import React, { useEffect, useState } from "react";

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
        <Link text="Converter" link="/" />
        <Link text="Blog" link="/blog/" />
        <Link text="Discord" link="discord.com/invite/6w42YpF5hm" ext />
      </nav>
    </header>
  );
}
