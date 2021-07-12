export interface ContentTableEntry {
  text: string;
  href: string;
}

export interface ContentTableProps {
  contentTable: ContentTableEntry[];
}

export default function ContentTable(props: ContentTableProps) {
  const contentItem = props.contentTable.map((entry) => (
    <li
      className="list-item py-1"
      style={{ counterIncrement: "step-counter" }}
      key={entry.href}
    >
      <a className="text-red-700 no-underline" href={entry.href}>
        {entry.text}
      </a>
    </li>
  ));

  return (
    <nav
      aria-label="chapters"
      className="p-2 md:p-5 md:pt-2 mt-8 rounded-lg bg-bg-400"
    >
      <h4 className="bold mb-4">Table of Content</h4>
      <ol className="list-none">{contentItem}</ol>
    </nav>
  );
}
