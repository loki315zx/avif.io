import Document, { Head, Html, Main, NextScript } from "next/document";

class Layout extends Document<Layout> {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-bg-700 text-base text-white w-full overflow-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Layout;
