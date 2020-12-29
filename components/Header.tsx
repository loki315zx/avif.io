import Link from "next/link";
import ConversionsCounter from "./ConversionsCounter";
import Head from "next/head";

export default function Header() {
  return (
    <>
      {
        <div className="header">
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#29A2FF" />
            <meta name="msapplication-TileColor" content="#140635" />
            <meta name="theme-color" content="#140635" />
            <meta name="msapplication-config" content="none" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <script src="avifDetection.js"></script>
          </Head>
          <div className="flex-center">
            <Link href="/">
              <a className="logo">avif.io</a>
            </Link>
            <div className="conversionscounter">
              over <ConversionsCounter />
              files converted
            </div>
          </div>
          <div className="menu">
            <Link href="https://www.buymeacoffee.com/justinschmitz">Support</Link>
            <Link href="https://www.buymeacoffee.com/justinschmitz">Blog</Link>
            <Link href="/">
              <a className="button-primary">Convert</a>
            </Link>
          </div>
        </div>
      }
    </>
  );
}
