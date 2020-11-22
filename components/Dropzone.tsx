import React from "react";
import { useDropzone } from "react-dropzone";
import SvgComponent from "../assets/images/picture";
import Conversion from "./Conversion";


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
            Drop your images or browse
          </div>
          <div id="explainformats" className={"gray infobox"}>
            supports png · jpg · webp · gif and more
          </div>
        </>
      </div>
    </a>
  );
}
