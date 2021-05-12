export interface ContentTableEntry {
  text: string;
  href: string;
  level: number;
}

export interface ContentTableProps {
  contentTable: ContentTableEntry[];
}

export default function ContentTable(props: ContentTableProps) {
  return (
    <>
      {props.contentTable.map((entry) => (
        // Use entry.level (2 or 3) to style them nice
        <p key={entry.href}>
          <a href={entry.href}>
            {entry.level} {entry.text}
          </a>
        </p>
      ))}
    </>
  );
}
