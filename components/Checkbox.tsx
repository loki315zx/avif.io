export default function Checkbox(props: any) {
  const advantages = props.advantages;
  const listItems = advantages.map((advantage: any, index: any) => (
    <li key={index}>
      <span className="checklist">✓</span>
      {advantage}
    </li>
  ));
  return <ul className="checkbox-list">{listItems}</ul>;
}
