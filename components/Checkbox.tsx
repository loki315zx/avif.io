export default function Checkbox(props: any) {
  const advantages = props.advantages;
  const listItems = advantages.map((advantage: any, index: any) => (
    <div role="list" key={index}>
      <div role="listitem">
        <span className="checklist">✓</span>
        {advantage}
      </div>
    </div>
  ));
  return <ul>{listItems}</ul>;
}
