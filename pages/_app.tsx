import "@styles/globals.css";
import "@styles/normalize.min.css";
import Head from "next/head";
import { useEffect } from "react";

export default function AvifIo({ Component, pageProps }: any) {
  useEffect(arrayBufferPolyfill, []);
  return (
    <>
      <Head>
        <script src="/avif.js" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      </Head>
      <div className="page">
        <Component {...pageProps} />
      </div>
      <script async defer data-domain="avif.io" src="https://plausible.io/js/plausible.js" />{" "}
      {/* Testing Plausible instead of GA.
      <script src="/__/firebase/8.6.5/firebase-analytics.js"/>
       <script>firebase.analytics()</script> */}
      <script src="/__/firebase/8.6.5/firebase-app.js" />
      <script src="/__/firebase/init.js" />
    </>
  );
}

// Poylfill mostly for Safari
function arrayBufferPolyfill() {
  File.prototype.arrayBuffer = File.prototype.arrayBuffer || myArrayBuffer;
  Blob.prototype.arrayBuffer = Blob.prototype.arrayBuffer || myArrayBuffer;

  function myArrayBuffer(this: File | Blob): Promise<ArrayBuffer> {
    return new Promise((resolve) => {
      const fr = new FileReader();
      fr.onload = () => {
        resolve(fr.result as ArrayBuffer);
      };
      fr.readAsArrayBuffer(this);
    });
  }
}
