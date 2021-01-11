import Link from "next/link";
import ConversionsCounter from "./ConversionsCounter";

export default function Header() {
  return (
    <>
      {
        <div className="header">
          <div className="flex-center">
            <Link href="/">
              <a className="logo">avif.io</a>
            </Link>
            <div className="conversionscounter overlay-">
              <Link href="/">
                <div className="overlay"></div>
              </Link>
              over <ConversionsCounter />
              files converted
            </div>
          </div>
          <div className="menu">
            <Link href="https://www.buymeacoffee.com/justinschmitz">Support</Link>
            <Link href="/blog/">Blog</Link>
            <Link href="/">
              <a className="button-primary">Convert</a>
            </Link>
          </div>
        </div>
      }
    </>
  );
}
