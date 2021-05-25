import JSZip from "jszip";
import { saveFile } from "@utils/utils";
import SmartLink from "@components/SmartLink";

export interface DownloadButtonProps {
  files: File[];
}

export default function DownloadButton(props: DownloadButtonProps) {
  async function onClick() {
    const zip = new JSZip();
    for (const file of props.files) zip.file(file.name, await file.arrayBuffer());
    const data = await zip.generateAsync({ type: "blob" });
    saveFile(new File([data], "images.zip"));
  }

  return (
    <div className={`downloadall-container ${props.files.length > 1 ? "show" : "hide"}`}>
      <button onClick={onClick}> Download all images </button>
      Enjoying avif.io?
      <SmartLink
        className="color300"
        text="Join our Discord!"
        link="https://discord.com/invite/6w42YpF5hm"
        external
      />
    </div>
  );
}
