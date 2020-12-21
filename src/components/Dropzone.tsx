import { useDropzone } from "react-dropzone";

export interface DropzoneProps {
  onDrop(files: File[]): void;
}

export default function Dropzone(props: DropzoneProps) {
  const { isDragActive, getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: [
      ".png",
      ".jpg",
      ".jpeg",
      ".webp",
      ".gif",
      ".bmp",
      ".dib",
      ".ico",
      ".tiff",
      ".tif",
      ".pbm",
      ".pgm",
      ".ppm",
      ".pnm",
      ".dds",
      ".tga",
      ".icb",
      ".vda",
      ".vst",
      ".ff",
    ],
    onDropAccepted(files: File[]) {
      props.onDrop(files);
    },
  });

  function onBrowseClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    open();
  }

  return (
    <a
      role="button"
      onClick={onBrowseClick}
      className={`dropzone-container ${isDragActive ? "active" : ""}`}>
      <div className={"dropzone-root"} {...getRootProps()}>
        <input {...getInputProps()} />
        <>
          <div className={"upload-button"}>
            <div className="upload-blur"></div>
          </div>
          <div className={"s0 bold gray4"}>Drop your images or browse</div>
          <div id="explainformats" className={"black500 infobox"}>
            supports png · jpg · webp · gif and more
          </div>
        </>
      </div>
    </a>
  );
}
