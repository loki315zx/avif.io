import Link from "next/link";

export function BlogAdvantages(props: any) {
  const advantages = props.advantages;

  const listItems = advantages.map((advantage: any, index: any) => (
    <li key={index}>
      <input type="checkbox" readOnly checked={props.checked} name={props.advantage} />
      <label htmlFor={props.advantage}>{advantage}</label>
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export function BlogPosts(props: any) {
  const posts = props.posts;
  const listItems = posts.map((post: any, index: any) => (
    <Link href={`/${post.url}`} key={index}>
      <div className="posts__item">
        <div className="posts__img">
          <div className="posts__tag">#{post.keyword}</div>{" "}
          <div className="posts__title">{post.title}</div>
        </div>
        <div className="posts__data">
          <div>{post.description}</div>
        </div>
      </div>
    </Link>
  ));
  return (
    <section className="posts">
      <h2>Related articles</h2>
      <div className="posts__container grid">{listItems}</div>
    </section>
  );
}

export function BlogTags(props: any) {
  const tags = props.tags;
  const questions = props.questions;

  const listTags = tags.map((tag: any, index: any) => (
    <div key={index} className="tag">
      ({tag})
    </div>
  ));
  const listQuestions = questions.map((question: any, index: any) => (
    <div key={index} className="question">
      ({question})
    </div>
  ));
  return (
    <div className="tags_container f0">
      <h3>Related Questions, tags and headlines</h3>
      {listTags} {listQuestions}
    </div>
  );
}
