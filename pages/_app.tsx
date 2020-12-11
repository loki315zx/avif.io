import { useEffect } from "react";
import "../styles/normalize.min.css";
import "../styles/render.css";

export default function AvifIo({ Component, pageProps }: any) {
  useEffect(arrayBufferPolyfill, []);

  return <Component {...pageProps} />;
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

import "../styles/globals.css";
