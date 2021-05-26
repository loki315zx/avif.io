import _ from "lodash";

export interface QuestionsProps {
  questions: string[];
}

export default function Questions(props: QuestionsProps) {
  let questions = props.questions.map((original) => {
    original = original.replace(/\s+/g, "+").toLowerCase();
    let short = original.replace(/\/$/, "");
    original = `https://google.com/search?q=site%3Aavif.io+${original}`;
    short = short.replace(/\+/g, " ");
    return { original, short };
  });
  questions = _.sortBy(questions, (s) => s.short);

  const listQuestions = questions.map((source: any) => (
    <li key={source.original} className="question">
      <a target="_blank" rel="noreferrer" href={source.original}>
        {source.short}
      </a>
    </li>
  ));

  return (
    <div className="questions_container f0">
      <div className="questions_wrapper">{listQuestions}</div>
    </div>
  );
}
