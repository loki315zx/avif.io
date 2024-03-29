import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import Link from "@components/Link";
import meta from "@lib/meta.json";
import Blog from "@components/Blog";
import { useState } from "react";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function callback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }
  return (
    <Blog
      postMeta={meta.tutWindows}
      posts={[meta.tutGimp, meta.tutEdge, meta.tutWordpress]}
    >
      <ContentTable contentTable={contentTable} />
      <H level={2} callback={callback} text="Microsoft supports AVIF" />
      AVIF got a significant boost when Microsoft{" "}
      <b> decided to add support for it in the Windows 10 May 2019 Update</b>.
      Windows 10 does not support the AVIF image format natively, but the
      software giant has incorporated this functionality into some of its core
      programs, notably the File Explorer and Paint program.
      <br /> As long as you have the correct AV1 video codec from the Microsoft
      Store installed on your computer,{" "}
      <b>
        you can view AVIF images natively within Windows 10 apps like Paint and
        File Explorer
      </b>
      .
      <H level={2} callback={callback} text="With an extension" />
      Without proper configuration, tools like Microsoft Paint throw a bug that
      says that the AVIF file is not a valid format and is not supported by the
      application. If you are looking for AVIF support for Windows 10, you can
      either wait until Microsoft implements it by default, or take a look
      <Link
        link="
      microsoft.com/de-de/p/av1-video-extension/9mvzqvxjbq9v"
        text="at the extension."
        ext
      />
      <br />
      AV1 extension has been around since Windows 10 version 1809, when support
      for the AV1 video format first appeared.{" "}
      <b>
        Since version 1903, the extension is also able to process AVIF files.
      </b>
      <H level={2} callback={callback} text="Results" />
      After installing the extension, File Explorer generates a thumbnail image
      for the AVIF image format. Additionally, MSPaint allows editing and saving
      these images. You may want to use a more advanced image editor than Paint
      to work on image files such as AVIF. For more details, see our
      <Link
        text="article about GIMP."
        link="/blog/tutorials/use-avif-in-gimp/"
      />
    </Blog>
  );
}
