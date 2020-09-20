import React from "react";
import JSZip from "jszip";
import { saveFile } from "./utils";

export interface DownloadAllButtonProps {
  files: File[];
}

export default function DownloadAllButton(props: DownloadAllButtonProps) {
  async function onClick() {
    const zip = new JSZip();
    for (const file of props.files)
      zip.file(file.name, await file.arrayBuffer());
    const data = await zip.generateAsync({ type: "blob" });
    saveFile(new File([data], "images.zip"));
  }

  return (
    <>
      {props.files.length > 1 && (
        <div className="downloadall-container">
          <button className="downloadall s2" onClick={onClick}>
            Download all
          </button>
          <p className="gray">
            Do you enjoy using avif.io? Consider
            <a href="https://www.patreon.com/avifio" className="blue">
              donating
            </a>
            to keep the server alive and to support
            <a href="https://www.patreon.com/avifio" className="blue">
              upcoming features.
            </a>
          </p>
        </div>
      )}
    </>
  );
}
