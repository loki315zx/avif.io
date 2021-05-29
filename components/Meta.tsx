import Head from "next/head";

import { BlogPosting } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";

export interface MetaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  date_published: string;
  date_modified: string;
  blog?: boolean;
}

export default function Meta(props: MetaProps) {
  const publishedSplit = props.date_published.split(".");
  const publishedDate =
    "20" + publishedSplit[2] + "-" + publishedSplit[1] + "-" + publishedSplit[0];

  const modifiedSplit = props.date_modified.split(".");
  const modifiedDate = "20" + modifiedSplit[2] + "-" + modifiedSplit[1] + "-" + modifiedSplit[0];

  return (
    <Head>
      <link rel="canonical" href={`https://avif.io/${props.url}`} />
      <title>{props.title} | avif.io</title>
      <meta name="description" content={props.description} />
      <meta name="author" content="Justin Schmitz" />
      <meta property="og:site_name" content="AVIF Converter | avif.io ✨" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`https://avif.io/${props.url}`} />
      <meta property="og:title" content={"avif.io" + " | " + props.title} />
      <meta property="og:description" content={props.description} />

      {props.image && <meta property="og:image" content={`${props.image}`} />}
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
              "name": "Justin Schmitz",
            },
            "publisher": {
              "@type": "Organization",
              "name": "avif.io",
              "logo": {
                "@type": "ImageObject",
                "url": "https://avif.io/json-logo.png",
              },
            },
            "datePublished": publishedDate,
            "dateModified": modifiedDate,
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
