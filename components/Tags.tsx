export default function BlogTags(props: any) {
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
      <h3>Topic cluster</h3>
      Topics referenced across search results organized in clusters, sorted by frequency across top
      search results. Followed by related questions asked on Google.
      {listTags} {listQuestions}
    </div>
  );
}
