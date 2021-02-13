import Meta from "@components/Meta";
import { BlogPosts } from "./BlogComponents";

export default function Archive(props: {
  posts: any;
  postdata: any;
  children: any;
  className?: string;
}) {
  return (
    <main className={`archive ${props.className}`}>
      <Meta
        title={props.postdata.title}
        description={props.postdata.description}
        author={props.postdata.author}
        url={props.postdata.url}
        image={props.postdata.image}
        date_published={props.postdata.date_published}
        date_modified={props.postdata.date_modified}
      />

      <div className="blog__header white center">
        <h1>{props.postdata.title}</h1>
        <h2>{props.postdata.description}</h2>
      </div>

      <BlogPosts posts={props.posts} />

      {props.children ? (
        <div className="content__container">
          <div className="content">{props.children}</div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
