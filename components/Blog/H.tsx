import { useRouter } from "next/router";
import { useEffect } from "react";
import { ContentTableEntry } from "./ContentTable";
import Ad from "@components/Blog/Ad";

export interface HProps {
  text: string;
  level: number;
  contentTableCallback?: (entry: ContentTableEntry) => void;
}

export default function H(props: HProps) {
  const CustomTag = `h${props.level}` as keyof JSX.IntrinsicElements;
  const trimmedText = props.text.replace(/\s/g, "").toLowerCase();
  const router = useRouter();

  useEffect(() => {
    props.contentTableCallback?.({ text: props.text, href: `#${trimmedText}` });
  }, []);

  function copyToClipboard(e: any) {
    navigator.clipboard.writeText(`https://avif.io${router.pathname}/#${trimmedText}`);
    e.target.focus();
  }

  return (
    <>
      {props.level == 2 && <Ad />}
      <CustomTag id={props.level === 2 || props.level === 3 ? trimmedText : undefined}>
        {props.text}
        {(props.level === 2 || props.level === 3) && (
          <span role="presentation" className="heading-anchor-wrapper tutorial">
            <a
              className="header-link"
              href={`${router.pathname}/#${trimmedText}`}
              onClick={copyToClipboard}
            >
              <span role="img" aria-label="copy" className="css-1i2mldy">
                <svg width="24" height="24">
                  <g fill="currentColor" fillRule="evenodd">
                    <path d="M12.9 5.5l-1 .9a1 1 0 000 1.4 1 1 0 001.5 0l1-1c1-.9 2.5-1 3.6-.2a2.5 2.5 0 01.2 3.8l-3 2.8a2.6 2.6 0 01-3.6 0l-1.1-1L9 13.5l1.1 1a4.8 4.8 0 006.6 0l3-2.8a4.6 4.6 0 00-.4-6.8 4.9 4.9 0 00-6.4.5" />
                    <path d="M11.1 19.5l1-.9a1 1 0 000-1.4 1 1 0 00-1.5 0l-1 1c-1 .9-2.5 1-3.6.2a2.5 2.5 0 01-.2-3.8l3-2.8a2.6 2.6 0 013.6 0l1.1 1 1.5-1.4-1.1-1a4.8 4.8 0 00-6.6 0l-3 2.8a4.6 4.6 0 00.4 6.8 4.9 4.9 0 006.4-.5" />
                  </g>
                </svg>
              </span>
            </a>
          </span>
        )}
      </CustomTag>
    </>
  );
}
