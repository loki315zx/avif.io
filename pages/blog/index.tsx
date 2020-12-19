import Link from "next/link";

export default function BlogList() {
  return (
    <h1>
      List your blogs here! For example: This is served on avif.io/blog.
      <Link href="/blog/use-avif-in-html">link</Link>
    </h1>
  );
}
