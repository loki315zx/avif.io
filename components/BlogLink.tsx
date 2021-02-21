import Link from "next/link";

export default function BlogLink(props: {
  link: any;
  text?: string;
  newLine?: boolean;
  id?: string;
  className?: string;
  aria?: string;
  external?: boolean;
}) {
  return (
    <div {...(props.newLine ? null : { style: { display: "inline-block" } })}>
      <Link href={props.link}>
        <a
          title={props.aria ? props.aria : props.text}
          href={props.link}
          rel={props.external ? "noreferrer" : "prerender"}
          target={props.external ? "_blank" : "_self"}
          id={props.id}
          aria-label={props.aria}
          className={props.className}>
          {props.text}
        </a>
      </Link>
    </div>
  );
}
