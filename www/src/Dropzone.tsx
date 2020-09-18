import React from "react";
import { useDropzone } from "react-dropzone";
import SvgComponent from "./assets/picture";

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
      onClick={onBrowseClick}
      className={`dropzone-container ${isDragActive ? "active" : ""}`}
    >
      <div className={"dropzone-root"} {...getRootProps()}>
        <input {...getInputProps()} />
        <>
          <div className={"picture s2"}>
            <SvgComponent />
          </div>
          <div className={"f2 s1 bold primary"}>
            Drop your images o
            <span>
              r <span className={"blue"}>browse</span>
            </span>
          </div>
          <div className={"gray"}>
            supports png · jpg · jpeg · webp · gif · bmp · ico · tiff and more
            <p>no uploading to the cloud</p>
          </div>
        </>
      </div>
    </a>
  );
}
