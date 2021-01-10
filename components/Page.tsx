import Header from "@components/Header";
import Footer from "@components/Footer";
import CTA from "@components/CTA";
import SocialShare from "@components/SocialShare";
import Meta from "@components/Meta";

export default function Blog(props: { postdata: any; children: any }) {
  return (
    <div className={`page`}>
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
      {props.children}
      <CTA />
      <Footer />
      <SocialShare />
    </div>
  );
}
