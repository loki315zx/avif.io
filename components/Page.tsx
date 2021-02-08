import Meta from "@components/Meta";

export default function Page(props: { postdata: any; children: any; className?: string }) {
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
      <main className="blog">
        <div className="content__container">
          <div className="content">{props.children}</div>
        </div>
      </main>
    </>
  );
}
