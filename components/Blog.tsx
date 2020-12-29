import Header from "@components/Header";
import Footer from "@components/Footer";
import CTA from "@components/CTA";
import {
  BlogSources,
  BlogSubtitle,
  BlogTitle,
  BlogPosts,
  BlogTags,
} from "@components/BlogComponents";
import Meta from "@components/Meta";

export default function Blog(props: { postdata: any; children: any; posts: any }) {
  return (
    <div className="blog">
      <Meta
        title={props.postdata.title}
        description={props.postdata.description}
        keywords={props.postdata.keywords}
        author={props.postdata.author}
        url={props.postdata.url}
        image={props.postdata.image}
        date_published={props.postdata.date_published}
        date_modified={props.postdata.date_modified}
      />
      <Header />
      <BlogTitle text={props.postdata.title} />
      <div className="content__container">
        <div className="content">
          {props.children}
          <BlogSubtitle text="Sources" />
          <BlogSources sources={props.postdata.sources} />
          <BlogSubtitle text="Tags, Related Questions and Headlines" />
          <BlogTags tags={props.postdata.tags} questions={props.postdata.questions} />
        </div>
      </div>
      <BlogPosts posts={props.posts} />
      <CTA />
      <Footer />
    </div>
  );
}