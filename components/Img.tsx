import Image from "next/image";

export default function Img(props: { alt: string; url: string }) {
  return <Image width={720} height={405} src={`/images/${props.url}.jpg`} alt={props.alt} />;
}
