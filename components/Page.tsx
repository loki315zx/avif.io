import Header from "@components/Header";
import Footer from "@components/Footer";
import CTA from "@components/CTA";
import SocialShare from "@components/SocialShare";
import Meta from "@components/Meta";
import BlogLink from "@components/BlogLink";

export default function Blog(props: { postdata: any; children: any; className?: string }) {
  const urlSplit = props.postdata.url.split("/");
  return (
    <>
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
        <h1>{props.postdata.title}</h1>
      </div>
      <div className="content__container">
        <div className="content">{props.children}</div>
      </div>
    </>
  );
}
