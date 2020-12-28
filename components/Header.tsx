import Link from "next/link";
import ConversionsCounter from "./ConversionsCounter";
import Head from "next/head";

const avifDetection = `!function(document){"use strict";var webpImage,avifImage="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAF0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAIAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAGVtZGF0EgAKBzgAPtAgIAkyUBAAAPWc41TP///4gHBX9H8XVK7gGeDllq8TYARA+8Tfsv7L+zPE24eIoIzE0WhHbrqcrTK9VEgEG/hwgB5rdCbvP8g3KYPdV88CvPJnptgQ",webpClass="webp",avifClass="avif";function alreadyTested(format){if(window.sessionStorage){var test=window.sessionStorage.getItem(format+"Support");if("false"===test||"true"===test)return"true"===test}return null}function testFormat(format,imageSrc,callback){var tested=alreadyTested(format);if(null===tested){var image=new Image;return image.onload=image.onerror=function(){callback(format,2===image.height)},void(image.src=imageSrc)}addClass(format,tested)}function addClass(format,support){if(support){var el=document.documentElement;el.classList?el.classList.add("webp"===format?"webp":"avif"):el.className+=" "+format=="webp"?"webp":"avif",window.sessionStorage.setItem(format+"Support",!0)}else window.sessionStorage.setItem(format+"Support",!1)}testFormat("webp","data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA",addClass),testFormat("avif",avifImage,addClass)}(document)`;

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
            <script>{avifDetection}</script>
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
