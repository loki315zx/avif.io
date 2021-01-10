import Header from "@components/Header";
import Footer from "@components/Footer";
import CTA from "@components/CTA";
import SocialShare from "@components/SocialShare";
import {
  BlogSources,
  BlogSubtitle,
  BlogTitle,
  BlogPosts,
  BlogTags,
} from "@components/BlogComponents";
import Meta from "@components/Meta";

let randomNumber = Math.floor(Math.random() * 10 + 1);

export default function Blog(props: { postdata: any; children: any; posts: any }) {
  const url = props.postdata.url.substring(1);
  const urlSplit = url.split("/");

  return (
    <div className={`blog background${randomNumber}`}>
      <Meta
        title={props.postdata.title}
        description={props.postdata.description}
        author={props.postdata.author}
        url={props.postdata.url}
        image={props.postdata.image}
        date_published={props.postdata.date_published}
        date_modified={props.postdata.date_modified}
      />
      <div className="blog__header overlay-after">
        <Header />
        <BlogTitle text={props.postdata.title} />
        <div className="blog__meta white center">
          <div className="s3">
            {props.postdata.date_modified} · {props.postdata.readingtime} min read
          </div>
          <div className="breadcrumbs">
            <div>
              <a className="white" target="_blank" href={`/${urlSplit[0]}/`}>
                {urlSplit[0]}
              </a>
            </div>
            {urlSplit[2] ? (
              <div>
                <div>{"|"}</div>
                <a className="white" target="_blank" href={`/${urlSplit}/${urlSplit[1]}/`}>
                  {urlSplit[1]}
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div className="content__container">
        <div className="author"></div>
        <div className="content">
          {props.children}
          <BlogSubtitle text="Sources" />
          <BlogSources sources={props.postdata.sources} />
          <BlogSubtitle text="Tags, Related Questions and Headlines" />
          <BlogTags tags={props.postdata.tags} questions={props.postdata.questions} />
        </div>
      </div>
      {props.posts[0] ? <BlogPosts posts={props.posts} /> : ""}
      <CTA />
      <Footer />
      <SocialShare />
    </div>
  );
}
