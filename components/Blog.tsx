import { BlogSources, BlogPosts, BlogTags, BlogLink } from "@components/BlogComponents";
import Meta from "@components/Meta";
import Breadcrumbs from "@components/Breadcrumbs";

const randomNumber = Math.floor(Math.random() * 7 + 1);

export default function Blog(props: { postdata: any; children: any; posts: any }) {
  const urlSplit = props.postdata.url.split("/");

  return (
    <>
      <main className={`blog background${randomNumber}`}>
        <Meta
          title={props.postdata.title}
          description={props.postdata.description}
          author={props.postdata.author}
          url={props.postdata.url}
          image={props.postdata.image}
          date_published={props.postdata.date_published}
          date_modified={props.postdata.date_modified}
          blog
        />

        <div className="blog__header overlay-after">
          <div className="blog__header__content">
            <Breadcrumbs postdata={props.postdata} />
            <h1>{props.postdata.title}</h1>
            <div className="blog__meta white">
              {props.postdata.date_modified} · {props.postdata.readingtime} min read
            </div>
          </div>
        </div>

        <div className="content__container">
          <div className="content">
            {props.children}
            <h3>Sources</h3>
            <BlogSources sources={props.postdata.sources} />
            <BlogTags tags={props.postdata.tags} questions={props.postdata.questions} />
          </div>
        </div>
      </main>
      {props.posts[0] ? <BlogPosts posts={props.posts} /> : ""}
    </>
  );
}
