import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax, BlogNote } from "@components/BlogComponents";

const postdata = {
  title: "How to use avif in Wordpress",
  description: "Enjoy this short, but still in depth guide on how to use AVIF in HTML.",
  url: "https://avif.io/blog/use-avif-in-wordpress",
  image: "https://avif.io/images/bg-orange.svg",
  keywords: ["avif", "wordpress", "wp", "image optimization", "mime type"],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [
    "blog.shortpixel.com/what-is-avif-and-why-is-it-good",
    "chrisyee.ca/blog/uploading-avif-images-in-wordpress",
    "dev.to/iamrajeev/why-avif-support-in-wordpress-is-important-3g5e",
    "en.wikipedia.org/wiki/Media_type",
    "github.com/wp-media/imagify-plugin/issues/504",
    "libre-software.net/avif-test",
    "premium.wpmudev.org/forums/topic/smush-pro-avif-next-gen-image-format-support",
    "publishing-project.rivendellweb.net/supporting-aadditional-content-types-in-wordpress",
    "wordpress.org/support/topic/consider-adding-avif-support-in-the-future",
    "wordpress.org/support/topic/generating-images-in-avif-format-3",
    "wordpress.org/support/topic/generating-images-in-avif-format-5",
    "wordpress.org/support/topic/will-the-avif-image-format-be-support-in-the-future",
    "wordpress.stackexchange.com/questions/379114/workaround-to-upload-avif-files",
    "wpbeginner.com/glossary/functions-php/",
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

export default function BlogAvifInWordpress() {
  return (
    <Blog postdata={postdata} posts={posts}>
      "Sorry, this file type is not permitted for security reasons" is the glorious response you get
      when you try to upload avif images to Wordpress. There is no official support.
      <BlogSubtitle text="Official Wordpress Support" />
      The Wordpress core has implemented a security check for file uploading since its version 4.7.
      This means that Wordpress checks the file extension of your uploaded files and rejects files
      that don't match their pattern. Most of you will know this due to the restriction to upload
      SVGs. The same story goes for modern image formats. To this day, Wordpress still doesn't
      natively support viewing or uploading WebP images, AVIF images or other modern formats. While
      we can argue that avif is a new extension, considering that WebP is more than 10 years old,
      this really brings up the question if Wordpress is ever going to add support to modern image
      formats. Luckily, there are several way to bypass this security check. If you're looking for
      an easy way to automatically generate images and serve the best to the user, skip the next
      lines and check out the Plugin Section.
      <BlogSubtitle text="Mime Types" />
      Wordpress restricts files that don't match their list of Internet media types, also known as
      content-types or mime-types. The MIME Type is a two-part identifier for file formats and
      format contents transmitted on the Internet. Yes, I copied this explanation from Wikipedia.
      It's pretty easy to explain: A media type consists of a type and subtype that defines content
      and file extension. An HTML file has the mime type 'text/html', an jpg the mime type
      'image/jpeg'. Wordpress uses these mime types. They have a list of files they allow and a list
      of files they disallow. There are several methods to change this behavior and add mime types,
      see below.
      <BlogSubtitle text="Functions.php" />
      The old mighty and glorious functions.php. When we used to 'mod' WordPress sites in our
      teenage age, we consistenly fucked up a spelling in this file and ruined our theme. I will
      make to guide you through the process, so this doesn't happen. So what is the functions.php?
      It's a file that appears on every theme in Wordpress and contains basic functionality. You can
      open it by going to Appearance and choosing the Theme Editor. If a warning appears, feel free
      to ignore it. You know what you're doing. ;-) Choose your active theme in the right sidebar
      and below you will find all theme files listed, including the functions.php. Click to open and
      scroll down to the bottom. Don't delete anything. Create a new line after the end of the file,
      and add the following:
      <BlogSyntax language="php">
        {`function allow_avif( $mime_types ) {
  $mime_types['avif'] = 'image/avif';
  return $mime_types
}
add_filter( 'upload_mimes', 'allow_avif', 1, 1 );`}
      </BlogSyntax>
      This code will automatically allow you to upload avif files just like you upload any other
      image.
      <BlogSyntax language="php">
        {`function support_modern_images( $mime_types ) {
  $mime_types['webp'] = 'image/webp';
  $mime_types['heic'] = 'image/heic';
  $mime_types['heif'] = 'image/heif';
  $mime_types['heics'] = 'image/heic-sequence';
  $mime_types['heifs'] = 'image/heif-sequence';
  $mime_types['avif'] = 'image/avif';
  $mime_types['avis'] = 'image/avif-sequence';
  return $mime_types;
}
add_filter( 'upload_mimes', 'support_modern_images', 1, 1 );`}
      </BlogSyntax>
      <BlogSubtitle text="FTP Upload" />
      <BlogSubtitle text="Plugins for mime type support" />
      The plugin additionally allows the mime types and file extensions to WordPress. In other
      words, your WordPress site can upload various file extensions.
      <span>https://wordpress.org/plugins/wp-add-mime-types/</span>
      <span>https://wordpress.org/plugins/blob-mimes/</span>
      <BlogSubtitle text="Problem: No automatic conversion" />
      Upload avif is nice, but no automatic best choice for your users. better use plugins.
      <BlogSubtitle text="Image Optimization Plugin Support" />
      <span>Support maybe in future: WebP Converter for Media</span>
      <span>Support maybe in future: Imagify</span>
      <span>Support maybe in future: Smush from WPMUDev</span>
      <span>Supports: Shortpixel: Looks like it is already supported in ShortPixel.</span>
      <span>Support maybe in future: Optimole</span>
      <BlogSubtitle text="Automatic conversion" />
      <span>Supports: ImageEngine</span>
    </Blog>
  );
}
