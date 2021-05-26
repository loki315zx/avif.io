import _ from "lodash";

export interface TagsProps {
  tags: string[];
}

export default function Tags(props: TagsProps) {
  let tags = props.tags.map((original) => {
    original = original.replace(/\s+/g, "+").toLowerCase();
    let short = original.replace(/\/$/, "");
    original = `https://google.com/search?q=${original}`;
    short = short.replace(/\+/g, " ");
    return { original, short };
  });
  tags = _.sortBy(tags, (s) => s.short);

  const listTags = tags.map((source: any) => (
    <li key={source.original} className="tag">
      <a target="_blank" rel="noreferrer" href={source.original}>
        {source.short}
      </a>
    </li>
  ));

  return (
    <div className="tags_container f0">
      <div className="tags_wrapper">{listTags}</div>
    </div>
  );
}
