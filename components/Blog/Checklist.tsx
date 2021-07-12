export default function Checklist(props: any) {
  const listItems = props.items.map((item: any) => (
    <li className="flex items-baseline mb-2" key={item}>
      <span className="flex items-center justify-center min-w-4 w-4 min-h-4 h-4 mr-3 p-1 text-tiny bg-red-700 rounded-md">
        ✓
      </span>
      {item}
    </li>
  ));
  return <ul className="my-3">{listItems}</ul>;
}
