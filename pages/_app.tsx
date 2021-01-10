import { useEffect } from "react";
import Head from "next/head";
import "@styles/normalize.min.css";
import "@styles/globals.css";
import Cookies from "@components/Cookies";

export default function AvifIo({ Component, pageProps }: any) {
  useEffect(arrayBufferPolyfill, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#29A2FF" />
        <meta name="msapplication-TileColor" content="#140635" />
        <meta name="theme-color" content="#140635" />
        <meta name="msapplication-config" content="none" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <script>{`function F(a){document.documentElement.classList.add(a)}var A=new Image;A.src="data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=",A.onload=function(){F("avif")},A.onerror=function(){var a=new Image;a.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",a.onload=function(){F("webp")}}`}</script>
        <script>{`(function(b,c,d,e,f,g){b.hj=b.hj||function(){(b.hj.q=b.hj.q||[]).push(arguments)},b._hjSettings={hjid:2186931,hjsv:6},f=c.getElementsByTagName("head")[0],g=c.createElement("script"),g.async=1,g.src=d+b._hjSettings.hjid+e+b._hjSettings.hjsv,f.appendChild(g)})(window,document,"https://static.hotjar.com/c/hotjar-",".js?sv=")`}</script>
      </Head>
      <Component {...pageProps} />
      <script defer src="/__/firebase/8.2.1/firebase-app.js"></script>
      <script defer src="/__/firebase/8.2.1/firebase-analytics.js"></script>
      <script defer src="/__/firebase/init.js"></script>
      <script defer>firebase.analytics();</script>
      <Cookies />
    </>
  );
}

// Poylfill mostly for Safari
function arrayBufferPolyfill() {
  File.prototype.arrayBuffer = File.prototype.arrayBuffer || myArrayBuffer;
  Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || myArrayBuffer;

  function myArrayBuffer(this: File | Blob): Promise<ArrayBuffer> {
    return new Promise((resolve) => {
      let fr = new FileReader();
      fr.onload = () => {
        resolve(fr.result as ArrayBuffer);
      };
      fr.readAsArrayBuffer(this);
    });
  }
}
