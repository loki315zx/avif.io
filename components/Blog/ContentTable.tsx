export interface ContentTableEntry {
  text: string;
  href: string;
}

export interface ContentTableProps {
  contentTable: ContentTableEntry[];
}

export default function ContentTable(props: ContentTableProps) {
  const contentItem = props.contentTable.map((entry) => (
    <li key={entry.href}>
      <a href={entry.href}>{entry.text}</a>
    </li>
  ));

  return (
    <nav style={{ textAlign: "left" }} aria-label="Chapters" className="tableofcontent">
      <h4>Table of Content</h4>
      <ol>{contentItem}</ol>
    </nav>
  );
}
