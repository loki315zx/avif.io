import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogAdvantages,
  BlogSyntax,
  BlogNote,
  BlogLink,
  BlogLinkExternal,
  BlogImage,
} from "@components/BlogComponents";

import { useAvifInWindows as postdata } from "lib/meta";
import { useAvifInHtml as post1 } from "lib/meta";
import { useAvifInCss as post2 } from "lib/meta";
import { useAvifInNextjs as post3 } from "lib/meta";

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
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
