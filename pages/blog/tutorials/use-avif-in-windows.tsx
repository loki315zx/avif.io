import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogAdvantages,
  BlogSyntax,
  BlogNote,
  BlogLink,
  BlogLinkExternal,
} from "@components/BlogComponents";
const postdata = {
  readingtime: "6",
  title: "Use AVIF in Windows",
  description:
    "Learn how to make AVIF images load on native Windows 10 applications such as Paint and File Explorer with the AV1 video codec.",
  url: "https://avif.io/blog/tutorials/use-avif-in-windows/",
  image: "",
  keywords: ["windows", "avif support", "file explorer", "thumbnail", "av1 codec extension"],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [
    "zdnet.com/article/chrome-and-firefox-are-getting-support-for-the-new-avif-image-format",
    "techzdudes.com/new-avif-image-format-support-is-coming-soon-to-chrome-and-firefox",
    "windowslatest.com/2018/12/27/file-explorer-and-paint-to-get-support-for-avif-images-in-windows-10",
    "takesontech.com/newest-windows-10-insider-build-adds-av1-avif-format-support",
    "winaero.com/avif-format-support-comes-to-windows-10-version-1903",
    "ghacks.net/2018/12/28/windows-10-1903-to-support-avif-format",
    "mspoweruser.com/windows-file-explorer-and-microsoft-paint-will-soon-support-avif-images",
    "fossbytes.com/windows-10-file-explorer-and-paint-support-avif-image-format",
    "meterpreter.org/windows-10-will-support-avif-images-format",
    "minitool.com/news/file-explorer-microsoft-paint-support-avif-images",
    "winbuzzer.com/2018/12/27/microsoft-brings-avif-support-to-windows-10-through-file-explorer-and-paint-xcxwbn",
    "howto-connect.com/windows-10-1903-version-support-avif-file-type",
    "techdows.com/2020/08/chrome-85-to-support-avif-image-format",
    "onmsft.com/news/latest-windows-insider-build-adds-avif-image-format-support",
    "bleepingcomputer.com/news/microsoft/microsoft-is-adding-avif-image-support-to-windows-10",
  ],
  tags: [
    "windows 10",
    "file explorer",
    "explorer",
    "paint",
    "av1 video",
    "avif images",
    "image format",
    "video extension",
    "av1 video extension",
    "avif thumbnails",
    "file format",
    "windows file explorer",
    "image file format",
    "alliance for open media",
    "image file",
    "windows insider",
    "mspaint exe",
    "display exif metadata",
    "preview release",
    "insider program",
  ],
  questions: [
    "How do I play av1 videos",
    "Is av1 better",
    "Is av1 better than Hevc",
    "Does YouTube use av1",
    "Can VLC play av1",
    "Who uses av1 codec",
    "Is av1 royalty free",
    "Microsoft Brings AVIF Support to Windows 10 Through File Explorer and Paint",
    "Windows 10 File Explorer And Paint Will Now Support AVIF Image Format",
    "File Explorer and Paint to get support for AVIF images in Windows 10",
    "Windows File Explorer and Microsoft Paint will soon support AVIF images",
    "Windows 10 1903 Version Support for AVIF File Type (Format)",
    "Compare File Explorer & Paint to the Older Version",
    "Windows File Explorer and MS Paint",
    "Windows 10 1903 Version Support for AVIF File Type",
    "Windows 10 will support AVIF images format",
    "Display the AVIF Images in Windows 10",
    "Windows 10 AVIF Support Gone?",
  ],
};

const posts = [
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
  {
    url: "",
    title: "",
    date_modified: "",
    description: "",
  },
];

const advantages = ["", ""];

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={posts}>
      <BlogSubtitle text="Microsoft supports avif.." />
      AVIF got a significant boost when Microsoft decided to add support for it in the Windows 10
      May 2019 Update. Windows 10 does not natively support the AVIF image format. However, the
      software giant incorporated this functionality into some of its core programs, specifically
      the File Explorer and the Paint program. As long as you have the proper AV1 video codec
      installed from the Microsoft Store on your computer, you will be able to view AVIF images
      natively within Windows 10 apps such as Paint and File Explorer.
      <BlogSubtitle text="..with an extension" />
      Without the proper configuration, tools like Microsoft Paint throw an error that says that the
      AVIF file is not a valid format and is not supported by the application. If you are looking
      for AVIF support for Windows 10, you could either wait for Microsoft to implement it by
      default, or take a look{" "}
      <BlogLinkExternal
        link="
      https://www.microsoft.com/de-de/p/av1-video-extension/9mvzqvxjbq9v"
        text="at the extension"
      />
      . The AV1 extension has been around since Windows 10's version 1809, which is where support
      for the AV1 video format first appeared. Since version 1903, the extension is also capable of
      handling AVIF files.
      <BlogSubtitle text="Results" />
      As you can see from the screenshot below, the File Explorer will generate a thumbnail for the
      AVIF image format after the extension is installed. Additionally, MSPaint will allow you to
      edit and save these images. You might want to use a more advanced image editor than Paint in
      order to work on image files like AVIF. You can look into our{" "}
      <BlogLink text="article on GIMP" link="/blog/tutorials/use-avif-in-gimp" /> for more details
      on that.
    </Blog>
  );
}
