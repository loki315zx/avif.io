import Header from "@components/Header";
import Footer from "@components/Footer";
import CTA from "@components/CTA";
import SocialShare from "@components/SocialShare";
import Meta from "@components/Meta";
import { BlogSubtitle, BlogTitle, BlogLink, BlogPosts } from "./BlogComponents";

export default function Archive(props: {
  posts: any;
  postdata: any;
  children: any;
  className?: string;
}) {
  return (
    <div className={`archive`}>
      <Meta
        title={props.postdata.title}
        description={props.postdata.description}
        author={props.postdata.author}
        url={props.postdata.url}
        image={props.postdata.image}
        date_published={props.postdata.date_published}
        date_modified={props.postdata.date_modified}
      />
      <Header />
      <div className="blog__header overlay-after white center">
        <BlogTitle text={props.postdata.title} />
        <BlogSubtitle text={props.postdata.description} />
      </div>
      <BlogPosts posts={props.posts} />

      {props.children ? (
        <div className="content__container">
          <div className="content">{props.children}</div>
        </div>
      ) : (
        ""
      )}

      <CTA />
      <Footer />
      <SocialShare />
    </div>
  );
}
