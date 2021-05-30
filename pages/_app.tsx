import { useEffect } from "react";
import Head from "next/head";
import "@styles/normalize.min.css";
import "@styles/globals.css";

export default function AvifIo({ Component, pageProps }: any) {
  useEffect(arrayBufferPolyfill, []);
  return (
    <>
      <Head>
        <script src="/avif.js"></script>
      </Head>
      <div className="page">
        <Component {...pageProps} />
      </div>
      <script src="/__/firebase/8.6.1/firebase-app.js"></script>
      <script src="/__/firebase/8.6.1/firebase-analytics.js"></script>
      <script src="/__/firebase/8.6.1/firebase-database.js"></script>
      <script src="/__/firebase/8.6.1/firebase-storage.js"></script>
      <script src="/__/firebase/init.js"></script>
      <script src="/console.js"></script>
      <script>firebase.analytics()</script>
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
