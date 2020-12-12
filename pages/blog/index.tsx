import Link from "next/link";

export default function BlogList() {
  return (
    <h1>
      List your blogs here! For example:{" "}
      <Link href="/blog/how-to-use-avif-in-css">link</Link> This is served on
      avif.io/blog.
    </h1>
  );
}
