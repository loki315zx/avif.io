/* eslint-disable react/jsx-no-target-blank */
import NextLink from "next/link";

export default function Link(props: {
  link: any;
  text?: string;
  id?: string;
  className?: string;
  aria?: string;
  ext?: boolean;
  tabindex?: number;
}) {
  return (
    <>
      {" "}
      <NextLink href={props.ext ? `https://` + props.link : props.link}>
        <a
          title={props.aria ? props.aria : undefined}
          tabIndex={props.tabindex ? props.tabindex : undefined}
          href={props.ext ? `https://` + props.link : props.link}
          rel={props.ext ? "noreferrer" : "prerender"}
          target={props.ext ? "_blank" : "_self"}
          id={props.id}
          aria-label={props.aria}
          className={props.className}
        >
          {props.text}
        </a>
      </NextLink>{" "}
    </>
  );
}
