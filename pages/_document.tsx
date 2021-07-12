import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class Layout extends Document<Layout> {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {/*<Script
            data-domain="avif.io"
            src="https://plausible.io/js/plausible.js"
            strategy="lazyOnload"
          />*/}
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            strategy="lazyOnload"
          />
          <Script src="/avif.js" strategy="beforeInteractive" />
        </Head>
        <body className="bg-bg-700 text-base text-white">
          <Main />
          <NextScript />
        </body>
        <Script
          src="/__/firebase/8.6.5/firebase-app.js"
          strategy="afterInteractive"
        />
        <Script
          src="/__/firebase/8.6.5/firebase-database.js"
          strategy="lazyOnload"
        />
        <Script
          src="/__/firebase/8.6.5/firebase-storage.js"
          strategy="lazyOnload"
        />
        <Script
          src="/__/firebase/8.6.5/firebase-firestore.js"
          strategy="lazyOnload"
        />
        <Script
          src="/__/firebase/8.6.5/firebase-analytics.js"
          strategy="lazyOnload"
        />

        <Script strategy={"lazyOnload"} src="/hotjar.js"></Script>
        <Script>firebase.analytics()</Script>
        <Script src="/__/firebase/init.js" strategy="afterInteractive" />
      </Html>
    );
  }
}

export default Layout;
