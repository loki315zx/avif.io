import "@styles/global.css";
import { useEffect } from "react";
import Script from "next/script";

export default function AvifIo({ Component, pageProps }: any) {
  useEffect(arrayBufferPolyfill, []);
  return (
    <>
      <Script strategy="beforeInteractive" src="/avif.js" />
      <Script src="/hotjar.js" />
      <Script
        strategy="beforeInteractive"
        src="/__/firebase/8.7.1/firebase-app.js"
      />
      <Script strategy="beforeInteractive" src="/__/firebase/init.js" />
      <Script
        strategy="beforeInteractive"
        src="/__/firebase/8.7.1/firebase-analytics.js"
      />
      <Script>firebase.analytics()</Script>
      <Script
        strategy="lazyOnload"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />

      <div className="overflow-x-hidden page">
        <Component {...pageProps} />
      </div>
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
