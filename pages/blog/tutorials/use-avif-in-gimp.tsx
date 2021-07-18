import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import Image from "@components/Blog/Image";
import Link from "@components/Link";
import meta from "@lib/meta.json";
import Blog from "@components/Blog";
import { useState } from "react";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function callback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }
  return (
    <Blog
      postMeta={meta.tutGimp}
      posts={[meta.tutHtml, meta.tutWindows, meta.tutWordpress]}
    >
      <ContentTable contentTable={contentTable} />
      <H level={2} callback={callback} text="Introduction" />
      GNU Image Manipulation Program (GIMP) is a free and open-source graphics
      editor. Although it was developed as a Linux image editor, it has become
      an effective alternative for Adobe Photoshop, while remaining both free
      and open source.
      <H level={2} callback={callback} text="Exporting as AVIF" />
      As GIMP 3.0 development has been going on, on the 7th of October 2020,
      GIMP 2.10.22 was released. This release is titled a bug fix, however it
      had <b>severe effects on GIMP's functionality</b>. Since then, thanks to
      the encoder libheif, it is now capable of supporting the AVIF image format
      natively, which means that you can import and export AV1-based AVIF images
      as you would any other supported format.
      <Image url="gimp" alt="gimp can export as avif" />
      When you export an image from the editor, select the file type "HEIF /
      AVIF" or use the extension ".avif." A prompt will appear in which you will
      be able to choose between several possible options.
      <br /> First, you will have the option to select the degree to which you
      want to preserve the quality of the image. We recommend a value above 20
      and give you a more detailed comparison below this text. In addition, you
      can adjust the bit depth of the image. You can choose between 8, 10 or 12
      bits per channel. The higher the bit depth, the greater the number of
      colors stored in your image. By way of comparison, JPG has 8 bits. So if
      you are not a photographer and only want to use AVIF images for your
      website, we recommend sticking to 8 bits.
      <Image
        url="gimp-bitdepth"
        alt="gimp export avif dialogue showing different bit depths"
      />
      <H level={2} callback={callback} text="AVIF Plugin" />
      There is also a plugin called
      <Link
        text="gimp-avif-plugin by novemesk"
        link="github.com/novomesk/gimp-avif-plugin"
        ext
      />
      . Despite the non-creative name, the user interface is fantastic. It
      allows you to choose from many options, such as minimum and maximum
      quantizer, pixel format, bit depth, encoder, encoder speed, alpha channel
      settings, EXIF data and XMP data processing, as well as the ICC color
      profile. If you do not understand most of these settings, don't worry, you
      will probably get along well with the default interface.
      <H level={2} callback={callback} text="Converting existing images" />
      If you look to have a lot of images converted, it's a lot easier to
      convert them all in one go. Make life easier for yourself by
      <Link text="using our AVIF converter, which is free." link="/" />
    </Blog>
  );
}
