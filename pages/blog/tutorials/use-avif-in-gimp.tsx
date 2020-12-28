import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax, BlogNote } from "@components/BlogComponents";
const postdata = {
  title: "Use AVIF in GIMP",
  description:
    "GIMP 2.10.22 now includes HEIC support and AVIF support, learn how to take advantage of these new features.",
  url: "https://avif.io/blog/tutorials/use-avif-in-gimp/",
  image: "",
  keywords: ["gimp", "avif", "tutorial", "use avif in gimp"],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [
    "gimp.org/news/2020/10/07/gimp-2-10-22-released",
    "github.com/novomesk/gimp-avif-plugin",
    "gitlab.gnome.org/GNOME/gimp/-/issues/2668",
    "linuxreviews.org/GIMP_2.10.22_Is_Released_With_AVIF_Support_And_Improved_Support_For_Many_Other_File_Formats",
    "phoronix.com/scan.php?page=news_item&px=GIMP-2.10.22-Released",
  ],
  tags: [
    "linux",
    "avif support",
    "file format",
    "feature",
    "plug in",
    "developer",
    "firefox",
    "image editor",
    "image file format",
    "image format",
    "color profiles",
    "avif files",
    "macos",
    "flatpak",
    "flathub",
    "bug fixes",
    "avif images",
    "paint shop pro",
    "image bounds",
    "16 bit integer",
  ],
  questions: [
    "GIMP 2.10.22 Is Released With AVIF Support And Improved Support For Many Other File Formats",
    "Download Now: GIMP 2.10.22 Released with Major File Format Improvements",
    "GIMP 2.10.22 Released with Major File Format Improvements",
    "Add .avif (AV1 Image File Format) support",
    "GIMP 2.10.22 Released with AVIF Support, Improved PSP and TIFF Support",
    "What is AVIF? How to Use AV1 Image Format Images on Your Website",
    "Do you lose any features you know from earlier releases?",
    "Are there any benefits for plugin developers?",
    "How to Start Using AVIF Images",
    "Insert AVIF files in WordPress pages or posts",
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

export default function BlogAvifInGIMP() {
  return (
    <Blog postdata={postdata} posts={posts}>
      <BlogSubtitle text="" />
      The GNU Image Manipulation Program (GIMP) is a free and open-source raster graphics editor.
      While it was developed as a Linux Image editor, it has evolved into an effective alternative
      for Photoshop from Adobe, while remaining both free and open source.
      <BlogSubtitle text="AVIF Support for new images" />
      As GIMP 3.0 development has been going on, on the 7th of October 2020, the GIMP 2.10.22 was
      released. This release is titled a bug fix, however it had severe effects on GIMP's
      functionality. Since then, thanks to the encoder libheif, it is now capable of supporting the
      AVIF image format natively, which means that you can import and export AV1-based AVIF images
      as you would any other supported format. When exporting an image from the editor, choose the
      "HEIF/AVIF" file type or use the ".avif" extension. A prompt will then appear, in which you
      will have the chance to select among several possible options. First, you will have the chance
      to choose the degree to which you wish to preserve the image's quality. We recommend a value
      above 20 and will give you a more detailed comparison below this text. Furthermore, you can
      adjust the image's bit depth. You can choose between 8, 10 or 12 bits per channel. The higher
      the bit depth, the greater the amount of colors that will be saved to your image. For
      comparison, JPG has 8 bits. So if you're not a photographer and just want to use AVIF images
      for your website, we recommend that you stick with 8-bit.
      <BlogSubtitle text="AVIF Plugin" />
      There's also a plugin available called 'gimp-avif-plugin' by novemesk. Despite the
      non-creative name, the user interface is fantastic. It allows for many options to choose from,
      such as the minimum and maximum Quantizer, pixel format, bit depth, encoder, encoder speed,
      alpha channel settings, EXIF data and XMP data handling, and the ICC color profile. If you do
      not understand most of these settings, don't worry; you will probably be fine with the default
      interface.
      <BlogSubtitle text="AVIF Support for existing images" />
      If you look to have a lot of images converted, it's a lot easier to convert them all in one
      go. Make life easier for yourself by using our converter, which is free.
    </Blog>
  );
}
