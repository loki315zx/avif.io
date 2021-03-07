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
      tabIndex={0}
      aria-label="This is the dropzone. Choose your images here to convert them to AVIF"
      onClick={onBrowseClick}
      className={`dropzone-container ${isDragActive ? "active" : ""}`}>
      <div className={"dropzone-root"} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={"upload-button overlay-before overlay-after"}>
          <div className="upload-blur overlay"></div>
        </div>
        <b>Drop your images or browse</b>
        <div className="black500">supports png · jpg · webp · gif and more</div>
      </div>
    </a>
  );
}
