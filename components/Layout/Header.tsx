import Link from "@components/Link";
import NextLink from "next/link";
import React, { useEffect, useState } from "react";

export default function Header() {
  /* Detect scroll for fixed header */
  const [isFixed, setIsFixed] = useState(true);
  const handleScroll = () => {
    window.pageYOffset > 60 ? setIsFixed(true) : setIsFixed(false);
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-1 px-3 fixed w-100 right-0 left-0 top-0 z-50 ${
        isFixed ? "fixed-header" : undefined
      }`}
      style={
        isFixed
          ? {
              borderBottom: "2px solid hsla(0, 0%, 100%, 0.05)",
              backdropFilter: "blur(4px)",
              zIndex: 9999,
            }
          : { zIndex: 9999 }
      }
    >
      <div className="flex flex-wrap flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:pl-4	flex flex-wrap items-center text-base justify-center">
          <Link className="p-2 md:p-3" text="Blog" link="/blog/" />
          <Link
            className="p-2 md:p-3"
            text="Discord"
            link="discord.com/invite/6w42YpF5hm"
            ext
          />
          <Link
            className="p-2 md:p-3"
            text="Github"
            link="https://github.com/justinschmitz97/avif.io/"
            ext
          />
        </nav>
        <NextLink href="/">
          <button className="inline-flex items-center bg-bg-200 border-0 py-1 px-2 focus:outline-none hover:bg-bg-300 rounded text-base md:mt-0">
            Convert images
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-3 h-3 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </NextLink>
      </div>
    </header>
  );
}
