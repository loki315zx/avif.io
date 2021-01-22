import Blog from "@components/Blog";
import BlogLink from "@components/BlogLink";
import Img from "@components/Img";

import { useAvifInGimp as postdata } from "lib/meta";
import { useAvifInWindows as post1 } from "lib/meta";
import { useAvifInHtml as post2 } from "lib/meta";
import { useAvifInWordpress as post3 } from "lib/meta";

export default function BlogAvifInGIMP() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      The GNU Image Manipulation Program (GIMP) is a free and open-source raster graphics editor.
      While it was developed as a Linux Image editor, it has evolved into an effective alternative
      for Photoshop from Adobe, while remaining both free and open source.
      <h2>AVIF Support for new images</h2>
      As GIMP 3.0 development has been going on, on the 7th of October 2020, GIMP 2.10.22 was
      released. This release is titled a bug fix, however it had severe effects on GIMP's
      functionality. Since then, thanks to the encoder libheif, it is now capable of supporting the
      AVIF image format natively, which means that you can import and export AV1-based AVIF images
      as you would any other supported format.
      <Img url="gimp" alt="gimp can export as avif" />
      When exporting an image from the editor, choose the "HEIF/AVIF" file type or use the ".avif"
      extension. A prompt will then appear, in which you will have the chance to select among
      several possible options. First, you will have the chance to choose the degree to which you
      wish to preserve the image's quality. We recommend a value above 20 and will give you a more
      detailed comparison below this text. Furthermore, you can adjust the image's bit depth. You
      can choose between 8, 10 or 12 bits per channel. The higher the bit depth, the greater the
      amount of colors that will be saved to your image. For comparison, JPG has 8 bits. So if
      you're not a photographer and just want to use AVIF images for your website, we recommend that
      you stick with 8-bit.
      <Img url="gimp-bitdepth" alt="gimp export avif dialogue showing different bit depths" />
      <h2>AVIF Plugin</h2>
      There's also a plugin available called{" "}
      <BlogLink
        text="gimp-avif-plugin by novemesk"
        link="https://github.com/novomesk/gimp-avif-plugin"
      />
      . Despite the non-creative name, the user interface is fantastic. It allows for many options
      to choose from, such as the minimum and maximum Quantizer, pixel format, bit depth, encoder,
      encoder speed, alpha channel settings, EXIF data and XMP data handling, and the ICC color
      profile. If you do not understand most of these settings, don't worry; you will probably be
      fine with the default interface.
      <h2>AVIF Support for existing images</h2>
      If you look to have a lot of images converted, it's a lot easier to convert them all in one
      go. Make life easier for yourself by{" "}
      <BlogLink text="using our AVIF converter, which is free" link="/" />.
    </Blog>
  );
}
