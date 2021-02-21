import { useEffect } from "react";
import Head from "next/head";
import "@styles/normalize.min.css";
import "@styles/globals.css";
import Cookies from "@components/Cookies";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SocialShare from "@components/SocialShare";
import CTA from "@components/CTA";

export default function AvifIo({ Component, pageProps }: any) {
  useEffect(arrayBufferPolyfill, []);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-language" content="en-us" />
        <meta name="msapplication-TileColor" content="#140635" />
        <meta name="theme-color" content="#140635" />
        <meta name="msapplication-config" content="none" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="twitter:card" content="summary"></meta>
        <meta property="twitter:creator" content="@jschmitz97" />
        <meta property="og:image" content="https://avif.io/json-logo.png" />
        <script src="/avif.js"></script>
        <script async={true} src="/hotjar.js"></script>
      </Head>
      <Header />
      <div className="page">
        <Component {...pageProps} />
      </div>
      <CTA />
      <Footer />
      <Cookies />
      <SocialShare />
      <script src="/__/firebase/8.2.8/firebase-app.js"></script>
      <script src="/__/firebase/8.2.8/firebase-analytics.js"></script>
      <script src="/__/firebase/8.2.8/firebase-database.js"></script>
      <script src="/__/firebase/8.2.8/firebase-storage.js"></script>
      <script src="/__/firebase/init.js"></script>
      <script src="console-hack.js"></script>
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
      let fr = new FileReader();
      fr.onload = () => {
        resolve(fr.result as ArrayBuffer);
      };
      fr.readAsArrayBuffer(this);
    });
  }
}
