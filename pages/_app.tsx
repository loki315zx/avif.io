import { useEffect } from "react";
import Head from "next/head";
import "@styles/normalize.min.css";
import "@styles/globals.css";
import Cookies from "@components/Cookies";

export default function AvifIo({ Component, pageProps }: any) {
  useEffect(arrayBufferPolyfill, []);
  console.log = function () {};

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
        <script src="/avif.js"></script>
        <script src="/hotjar.js"></script>
      </Head>
      <Component {...pageProps} />
      <script src="/__/firebase/8.2.2/firebase-app.js"></script>
      <script src="/__/firebase/8.2.2/firebase-analytics.js"></script>
      <script src="/__/firebase/8.2.2/firebase-performance.js"></script>
      <script src="/__/firebase/init.js"></script>
      <script>firebase.analytics();</script>
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
