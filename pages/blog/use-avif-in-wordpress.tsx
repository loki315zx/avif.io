import Blog from "@components/Blog";
import { BlogSubtitle, BlogAdvantages, BlogSyntax, BlogNote } from "@components/BlogComponents";

const postdata = {
  title: "Use AVIF in Wordpress",
  description:
    "Wordpress disallows uploading avif files. Find out how to still use AVIF images on your website today.",
  url: "https://avif.io/blog/use-avif-in-wordpress",
  image: "",
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
    "wpbeginner.com/glossary/functions-php",
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
      when you try to upload avif images to Wordpress. There is no official support. Still,
      WordPress needs AVIF because of two reasons. First, technical professionals and end-users
      often struggle with web speed issues that are very common with this CMS. Hence, AVIF can
      contribute to faster loading because of its incredibly low-size images without causing any
      dent in quality. The second reason is that WordPress is the most dominant CMS in the world
      with over 455 million websites in 2020. This means that around 35% of the web is powered by
      WordPress. Further statistics from WordPress reveal that as of November 2020, over 409 million
      people view more than 20 billion pages each month.
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
      image. If you wish to add more support for all the new image formats out there in the wild,
      feel free to copy the code below.
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
      Another way to bypass the restriction is to upload your files via FTP. Simply connect to your
      server and drop your images in the upload folder, where most of your current images should be
      saved. If you don't know how to access your files directly, feel free to ask your web host.
      Most providers offer great tutorials.
      <BlogSubtitle text="Plugins for mime type support" />
      There's a huge disadvantage when modifying the functions.php. It's theme related. This means
      whenever you switch a theme or proceed to update your current one, most likely the short code
      snippet will be gone. Hold on, there's no need to pull out the lyrics of 'Time to say
      Goodbye'. Mhh mhh mhh, no no no. There is a solution that is working independently.
      Financially indepen.. sorry, the memes. Let me get back on track: Multiple plugin solutions
      exist. Take a look at these beauties:
      <p>https://wordpress.org/plugins/wp-add-mime-types/</p>
      <p>https://wordpress.org/plugins/blob-mimes/</p>
      To quote: WordPress relies mostly on name-based validation when deciding whether or not to
      allow a particular file, leaving the door open for various kinds of attacks. Lord of the Files
      (previously known as "blob mimes") adds to this content-based validation and sanitizing,
      making sure that files are what they say they are and safe for inclusion on your site.
      <BlogSubtitle text="There's one remaining problem: No automatic conversion" />
      Uploading images is a cool thing, but there's a huge problem remaining: For every image you
      wish to serve to your users, you have to convert them manually with some awesome converter
      like avif.io, but the work of using the html picture tag still remains. A more simplistic idea
      would be to have an image plugin that automatically converts images to modern formats and
      serve the best solution based on the browser of your user. We are currently working on
      creating an easy to use plugin that handles all these requests without you having to configure
      anything. Until then, feel free to try other plugins. Unfortunately we don't know any that
      support avif, but webp is an advantage too!
      <BlogSubtitle text="Image Optimization Plugin Support" />
      As we already told you, all common WordPress services and plugins for image optimization do
      not currently support AVIF. However, the following plugins might be support them in the near
      future:
      <p>WebP Converter for Media</p>
      <p>Imagify</p>
      <p>Smush from WPMUDev</p>
      <p>ShortPixel</p>
      <p>Optimole</p>
      <p>ImageEngine</p>
      <BlogSubtitle text="Summary" />
      Wordpress doesn't support avif files. Wordpress does not even support WebP. We are currently
      creating an awesome plugin for you. In the meantime, you can still upload avif files by
      allowing the mime type or use an image plugin to at least make use of WebP.
    </Blog>
  );
}
