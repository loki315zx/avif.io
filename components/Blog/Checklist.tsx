export default function Checklist(props: any) {
  const listItems = props.items.map((item: any) => (
    <li key={item}>
      <span className="checklist">✓</span>
      {item}
    </li>
  ));
  return <ul className="checkbox-list">{listItems}</ul>;
}
