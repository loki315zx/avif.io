import Posts from "@components/Posts";
import Tags from "@components/Tags";
import Meta from "@components/Meta";
import Breadcrumbs from "@components/Breadcrumbs";
import Sources from "@components/Sources";

const randomNumber = Math.floor(Math.random() * 7 + 1);

export default function Blog(props: { postdata: any; children: any; posts: any; className?: any }) {
  return (
    <>
      <main className={`blog background${randomNumber} ${props.className}`}>
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
          <article className="content">
            {props.children}
            <h3>Related topics, websites and sources</h3>
            Links that offer more information or have been used as sources for this article.
            <Sources sources={props.postdata.sources} />
            <Tags tags={props.postdata.tags} questions={props.postdata.questions} />
          </article>
        </div>
      </main>
      {props.posts[0] ? <Posts posts={props.posts} /> : ""}
    </>
  );
}
