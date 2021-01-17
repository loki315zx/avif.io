import Head from "next/head";

import { BlogPosting } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";

export interface MetaProps {
  title: string;
  description: string;
  author: string;
  url: string;
  image?: string;
  date_published: string;
  date_modified: string;
  blog?: boolean;
}

export default function Meta(props: MetaProps) {
  return (
    <Head>
      <link rel="canonical" href={`https://avif.io/${props.url}`} />
      <title>avif.io | {props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="author" content={props.author} />
      <meta property="og:site_name" content="AVIF Converter | avif.io ✨" />
      <meta property="og:url" content={`https://avif.io/${props.url}`} />
      <meta property="og:title" content={"avif.io" + " | " + props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
      <meta property="og:type" content="article" />
      {props.blog ? (
        <script
          {...jsonLdScriptProps<BlogPosting>({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://avif.io/" + props.url,
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
          })}
        />
      ) : (
        ""
      )}
    </Head>
  );
}
