import _ from "lodash";

export function splitNameAndExtension(fileName: string): [string, string] {
  const pieces = fileName.split(".");
  // TODO Handle the case of no extension properly
  const name = pieces.slice(0, pieces.length - 1).join(".");
  const ext = pieces[pieces.length - 1];
  return [name, ext];
}

let maxId = 0;

export function uniqueId() {
  ++maxId;
  return maxId;
}

export interface FileWithId {
  name: string;
  data: ArrayBuffer;
  id: number;
}

export function saveFile(file: File) {
  const a = document.createElement("a");
  a.download = file.name;
  a.href = URL.createObjectURL(file);
  a.click();
}

export function minutesAndSeconds(ms: number): [number, number] {
  let seconds = ms / 1000;
  const minutes = Math.floor(seconds / 60);
  seconds = Math.floor(seconds) % 60;
  return [minutes, seconds];
}

export function randomRange(start: number, end: number) {
  console.assert(end > start);
  return start + Math.random() * (end - start);
}

export function formatNumberWithDecimalCommas(n: number) {
  const s = n.toString();
  const parts = [
    s.slice(0, s.length % 3),
    ..._.chunk(s.slice(s.length % 3), 3).map((chunk) => chunk.join("")),
  ].filter((part) => part !== "");
  return parts.join(",");
}
