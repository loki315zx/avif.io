import JSZip from "jszip";
import { saveFile } from "@utils/utils";
import { BlogLinkExternal } from "@components/BlogComponents";

export interface DownloadAllButtonProps {
  files: File[];
}

export default function DownloadAllButton(props: DownloadAllButtonProps) {
  async function onClick() {
    const zip = new JSZip();
    for (const file of props.files) zip.file(file.name, await file.arrayBuffer());
    const data = await zip.generateAsync({ type: "blob" });
    saveFile(new File([data], "images.zip"));
  }

  return (
    <>
      <div className={`downloadall-container ${props.files.length > 1 ? "show" : "hide"}`}>
        <button className="downloadall" onClick={onClick}>
          Download all
        </button>
        <p className="donation">
          Enjoy using avif.io? Keep the project alive.{" "}
          <a href="https://www.buymeacoffee.com/justinschmitz" title="Donate">
            Donate
          </a>{" "}
          to support upcoming features like a REST API, CLI and more.
        </p>
      </div>
    </>
  );
}
