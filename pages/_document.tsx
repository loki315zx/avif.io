import Document, { Head, Html, Main, NextScript } from "next/document";

class Layout extends Document<Layout> {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <script async defer data-domain="avif.io" src="https://plausible.io/js/plausible.js" />{" "}
          {/* Testing Plausible instead of GA.
      <script src="/__/firebase/8.6.5/firebase-analytics.js"/>
       <script>firebase.analytics()</script> */}
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <script src="/__/firebase/8.6.5/firebase-app.js" />
          <script src="/__/firebase/8.6.5/firebase-database.js" />
          <script src="/__/firebase/8.6.5/firebase-storage.js" />
          <script src="/__/firebase/8.6.5/firebase-firestore.js" />
          <script src="/__/firebase/init.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Layout;
