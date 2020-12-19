import Head from "next/head";

import { BlogPosting } from "schema-dts";
import { JsonLd } from "react-schemaorg";

export interface MetaProps {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  image?: string;
  date_published: string;
  date_modified: string;
  type: string;
}

export default function Meta(props: MetaProps) {
  return (
    <Head>
      {/*Basic Meta*/}
      <title>avif.io | {props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords.join(",")} />
      <meta name="author" content={props.author} />
      <link rel="canonical" href={"avif.io" + props.url} />
      {/*Json Ld*/}
      <JsonLd<BlogPosting>
        item={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": props.url,
          },
          "headline": props.title,
          "description": props.description,
          "image": props.image,
          "author": {
            "@type": "Person",
            "name": props.author,
          },
          "publisher": {
            "@type": "Organization",
            "name": "avif.io",
            "logo": {
              "@type": "ImageObject",
              "url": "https://avif.io/json-logo.png",
            },
          },
          "datePublished": props.date_published,
          "dateModified": props.date_modified,
          "isFamilyFriendly": true,
          "inLanguage": "en-US",
          "genre": [props.keywords.join(",")],
        }}
      />
    </Head>
  );
}
