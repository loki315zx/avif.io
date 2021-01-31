export default function BlogSources(props: any) {
  const sources = props.sources;
  for (let i = 0; i < sources.length; i++) {
    sources[i] = sources[i].replace("https://", "");
    sources[i] = sources[i].replace("http://", "");
    sources[i] = sources[i].replace("www.", "");
    if (sources[i].substring(sources[i].length - 1) == "/") {
      sources[i] = sources[i].substring(0, sources[i].length - 1);
    }
  }
  sources.sort();
  const listItems = sources.map((source: any, index: any) => (
    <li key={index} className="source">
      <a target="_blank" rel="noreferrer" href={`https://${source}`}>
        {source.toString().replace(/\//g, " · ")}
      </a>
    </li>
  ));
  return (
    <div id="sources">
      <ol>{listItems}</ol>
    </div>
  );
}
