import Link from "next/link";

export default function BlogPosts(props: any) {
  const posts = props.posts;
  const listItems = posts.map((post: any, index: any) => (
    <Link href={`/${post.url}`} key={index}>
      <a
        href={`/${post.url}`}
        tabIndex={0}
        className="p-2 cursor-pointer md:w-1/3 group"
      >
        <div className="overflow-hidden h-full rounded-md bg-bg-300">
          <div className="p-3 bg-bg-500 group-hover:bg-gradient">
            <div className="font-bold text-white">#{post.keyword}</div>
          </div>
          <div className="p-3 border-t-2 group-hover:text-white border-bg-700">
            <p>{post.description}</p>
          </div>
        </div>
      </a>
    </Link>
  ));
  return (
    <section className="container max-w-screen-lg bg-bg-700 body-font">
      <h3
        className="mt-8 mb-6 text-xl font-bold text-center capitalize"
        id={props.title ? props.title : "related"}
      >
        {props.title ? props.title : "Related articles"}
      </h3>
      <div className="container py-6 mx-auto">
        <div className="flex flex-wrap m-4">{listItems}</div>
      </div>
    </section>
  );
}
