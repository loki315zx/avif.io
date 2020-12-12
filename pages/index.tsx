import Head from "next/head";
import App from "@components/App";
import Header from "@components/Header";

const ldJson = `
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How to convert JPG to AVIF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "1. Open up https://avif.io
2. Drag and drop your jpg images or use the browsing function
3. The conversion will happen automatically
4. Download the avif files by pressing the Download or Download All button"
    }
  },{
    "@type": "Question",
    "name": "How to convert WEBP to AVIF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "1. Open up https://avif.io
2. Drag and drop your webp images or use the browsing function
3. The conversion will happen automatically
4. Download the avif files by pressing the Download or Download All button"
    }
  },{
    "@type": "Question",
    "name": "How to convert PNG to AVIF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "1. Open up https://avif.io
2. Drag and drop your png images or use the browsing function
3. The conversion will happen automatically
4. Download the avif files by pressing the Download or Download All button"
    }
  },{
    "@type": "Question",
    "name": "How to convert GIF to AVIF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "1. Open up https://avif.io
2. Drag and drop your gif images or use the browsing function
3. The conversion will happen automatically
4. Download the avif files by pressing the Download or Download All button"
    }
  },{
    "@type": "Question",
    "name": "How to convert BMP to AVIF?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "1. Open up https://avif.io
2. Drag and drop your bmp images or use the browsing function
3. The conversion will happen automatically
4. Download the avif files by pressing the Download or Download All button"
    }
  }]
}
`;

export default function Index() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#29A2FF" />
        <title>AVIF Converter | avif.io ✨</title>
        <meta
          name="description"
          content="Convert all image types to avif for free.🚀 Supports bulk converting. Blazing fast. Privacy protected. Compress your images now!⏱"
        />
        <meta
          property="og:description"
          content="Convert all image types to avif for free.🚀 Supports bulk converting. Blazing fast. Privacy protected. Compress your images now!⏱"
        />
        <meta property="og:determiner" content="the" />
        <meta property="og:url" content="https://avif.io" />
        <meta property="og:site_name" content="AVIF Converter | avif.io ✨" />
        <meta name="msapplication-TileColor" content="#140635" />
        <meta name="theme-color" content="#140635" />
        <meta name="msapplication-config" content="none" />
        <script type="application/ld+json">{ldJson}</script>
      </Head>

      <App />
      <Header />
      <script src="/__/firebase/8.2.0/firebase-app.js"></script>
      <script src="/__/firebase/8.2.0/firebase-analytics.js"></script>
      <script src="/__/firebase/init.js"></script>
      <script>firebase.analytics();</script>
    </div>
  );
}
