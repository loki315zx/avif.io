import webpToRgba from "./webpToRgba";

export type InputFile =
  | {
      data: ArrayBuffer;
      name: string;
      isRawRgba?: false;
      rawWidth?: undefined;
      rawHeight?: undefined;
    }
  | {
      data: ArrayBuffer;
      name: string;
      isRawRgba: true;
      rawWidth: number;
      rawHeight: number;
    };

export async function loadInputFiles(files: File[]): Promise<InputFile[]> {
  return Promise.all(
    files.map((file) =>
      isWebp(file) ? loadWebpFile(file) : loadNonWebpFile(file)
    )
  );
}

function isWebp(file: File): boolean {
  return file.name.toLowerCase().endsWith(".webp");
}

async function loadWebpFile(file: File): Promise<InputFile> {
  const { data, width, height } = await webpToRgba(
    new Uint8Array(await file.arrayBuffer())
  );
  return {
    data,
    name: file.name,
    isRawRgba: true,
    rawWidth: width,
    rawHeight: height,
  };
}

async function loadNonWebpFile(file: File): Promise<InputFile> {
  return {
    data: await file.arrayBuffer(),
    name: file.name,
  };
}
