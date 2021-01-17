import Header from "@components/Header";
import Footer from "@components/Footer";
import CTA from "@components/CTA";
import SocialShare from "@components/SocialShare";
import {
  BlogSources,
  BlogSubtitle,
  BlogPosts,
  BlogTags,
  BlogLink,
} from "@components/BlogComponents";
import Meta from "@components/Meta";

const randomNumber = Math.floor(Math.random() * 7 + 1);

export default function Blog(props: { postdata: any; children: any; posts: any }) {
  const urlSplit = props.postdata.url.split("/");

  return (
    <>
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
          <div className="blog__header__content">
            <div className="breadcrumbs">
              <div>
                <BlogLink className="white" link={`/${urlSplit[0]}/`} text={urlSplit[0]} />
                {urlSplit[2] ? (
                  <span className="white">
                    {" > "}
                    <BlogLink
                      className="white"
                      link={`/${urlSplit[0]}/${urlSplit[1]}/`}
                      text={urlSplit[1]}
                    />
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>

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
      </div>
      {props.posts[0] ? <BlogPosts posts={props.posts} /> : ""}
    </>
  );
}
