import Link from "next/link";

export default function BlogPosts(props: any) {
  const posts = props.posts;
  const listItems = posts.map((post: any, index: any) => (
    <Link href={`/${post.url}`} key={index}>
      <div className="posts__item">
        <div className="posts__img">
          <div className="posts__tag">#{post.keyword}</div>{" "}
        </div>
        <div className="posts__data">
          <div className="posts__title">{post.title}</div>
          <div>{post.description}</div>
        </div>
      </div>
    </Link>
  ));
  return (
    <section className="posts">
      <div
        id={props.title ? props.title : "related"}
        style={{ opacity: 0, height: 100 }}
        aria-label="anchor point"></div>
      <h2 id={props.title == undefined ? "related" : undefined}>
        {props.title ? props.title : "Related articles"}
      </h2>
      <div className="posts__container grid">{listItems}</div>
    </section>
  );
}
