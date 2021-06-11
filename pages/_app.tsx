import "@styles/normalize.min.css";
import "@styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";

export default function AvifIo({ Component, pageProps }: any) {
  useEffect(arrayBufferPolyfill, []);
  return (
    <>
      <Head>
        <script src="/avif.js" />
      </Head>
      <div className="page">
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
