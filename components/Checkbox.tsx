export default function Checkbox(props: any) {
  const listItems = props.advantages.map((advantage: any) => (
    <li key={advantage}>
      <span className="checklist">✓</span>
      {advantage}
    </li>
  ));
  return <ul className="checkbox-list">{listItems}</ul>;
}
