import Head from "next/head";
import { BreadcrumbList } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";

import { BlogLink } from "@components/BlogComponents";

export default function Breadcrumbs(props: any) {
  const urlSplit = props.postdata.url.split("/");
  return (
    <>
      <Head>
        <script
          {...jsonLdScriptProps<BreadcrumbList>({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "blog",
                "item": "https://avif.io/blog/",
              },
              urlSplit[2]
                ? {
                    "@type": "ListItem",
                    "position": 2,
                    "name": urlSplit[1],
                    "item": "https://avif.io/blog/" + urlSplit[1] + "/",
                  }
                : "",
            ],
          })}
        />
        )
      </Head>
      <div className="breadcrumbs">
        <div>
          <BlogLink className="white" link={`/${urlSplit[0]}/`} text={urlSplit[0]} />
          {urlSplit[2] ? (
            <div className="white inline">
              {" > "}
              <BlogLink
                className="white"
                link={`/${urlSplit[0]}/${urlSplit[1]}/`}
                text={urlSplit[1]}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
