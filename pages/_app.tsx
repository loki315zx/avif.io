import "@styles/globals.css";
import "@styles/normalize.min.css";
import Head from "next/head";
import { useEffect } from "react";

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
      <script async defer data-domain="avif.io" src="https://plausible.io/js/plausible.js"></script>{" "}
      {/* Testing Plausible instead of GA. */}
      <script src="/__/firebase/8.6.5/firebase-app.js"></script>
      {/* <script src="/__/firebase/8.6.5/firebase-analytics.js"></script>*/}
      <script src="/__/firebase/8.6.5/firebase-database.js"></script>
      <script src="/__/firebase/8.6.5/firebase-storage.js"></script>
      <script src="/__/firebase/8.6.5/firebase-firestore.js"></script>
      <script src="/__/firebase/init.js"></script>
      <script src="/console.js"></script>
      {/*<script>firebase.analytics()</script>*/}
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
