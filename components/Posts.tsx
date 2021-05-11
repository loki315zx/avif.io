import Link from "next/link";

export default function BlogPosts(props: any) {
  const posts = props.posts;
  const listItems = posts.map((post: any, index: any) => (
    <Link href={`/${post.url}`} key={index}>
      <a href={`/${post.url}`} tabIndex={0}>
        <div className="posts__item">
          <div className="posts__img">
            <div className="posts__tag">#{post.keyword}</div>{" "}
          </div>
          <div className="posts__data">
            <div className="posts__title">{post.title}</div>
            <div>{post.description}</div>
          </div>
        </div>
      </a>
    </Link>
  ));
  return (
    <section className="posts">
      <h2 id={props.title ? props.title : "related"}>
        {props.title ? props.title : "Related articles"}
      </h2>
      <div className="posts__container grid">{listItems}</div>
    </section>
  );
}
