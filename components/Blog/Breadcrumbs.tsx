import SmartLink from "@components/SmartLink";
import Head from "next/head";
import { jsonLdScriptProps } from "react-schemaorg";
import { BreadcrumbList } from "schema-dts";

export default function Breadcrumbs(props: any) {
  const urlSplit = props.postMeta.url.split("/");
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
                    "item": "https://avif.io/blog/#" + urlSplit[1],
                  }
                : "",
            ],
          })}
        />
        )
      </Head>
      <div className="breadcrumbs">
        <div>
          <SmartLink className="white" link={`/${urlSplit[0]}/`} text={`#${urlSplit[0]}`} />
          {urlSplit[2] ? (
            <div className="white inline">
              <SmartLink
                className="white"
                link={`/${urlSplit[0]}#${urlSplit[1]}`}
                text={`#${urlSplit[1]}`}
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
