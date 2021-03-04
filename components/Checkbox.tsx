export default function Checkbox(props: any) {
  const advantages = props.advantages;
  const listItems = advantages.map((advantage: any, index: any) => (
    <li key={index}>
      <input
        type="checkbox"
        readOnly
        checked={props.checked ? true : false}
        name={props.advantage}
      />
      <label htmlFor={props.advantage}>{advantage}</label>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
