import Blog from "@components/Blog";
import BlogLink from "@components/BlogLink";
import Code from "@components/Code";
import Image from "@components/Image";

import { useAvifInWordpress as postdata } from "lib/meta";
import { useAvifInHtml as post1 } from "lib/meta";
import { useAvifInCss as post2 } from "lib/meta";
import { useAvifInCloudflare as post3 } from "lib/meta";

export default function BlogAvifInWordpress() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      "Sorry, this file type is not permitted for security reasons" is the glorious response you get
      when you try to upload AVIF images to WordPress. There is no official support. Still,
      WordPress needs AVIF because of two reasons. First, technical professionals and end-users
      often struggle with web speed issues widespread with this CMS. Hence, AVIF can contribute to
      faster loading because of its incredibly low file size without causing any dent in quality.
      The second reason is that WordPress is the most dominant CMS globally, with over 455 million
      websites in 2020. This means that around 35% of the web is powered by WordPress. Further
      statistics from WordPress reveal that as of November 2020, over 409 million people view more
      than 20 billion pages each month.
      <Image url="wordpress-usage" alt="shows usage statistics of wordpress" />
      <h2>Official Wordpress Support</h2>
      The WordPress core has implemented a security check for file uploading since version 4.7. This
      means that WordPress checks your uploaded files' file extension (say that 10x as fast as
      possible) and rejects files that don't match their pattern. Most of you will know this due to
      the restriction to upload SVGs. The same story goes for modern image formats. To this day,
      WordPress still doesn't natively support viewing or uploading WebP images, AVIF images, or
      other modern formats. We could argue that AVIF is a new extension. However, considering that
      WebP is more than 10 years old, this really brings up the question if WordPress is ever going
      to add support to modern image formats. Luckily, there are several ways to bypass this
      security check. If you're looking for an easy way to automatically generate images and serve
      the best to the user, skip the next lines and check out the Plugin Section.
      <h2>Mime Types</h2>
      WordPress restricts files that don't match their list of Internet media types, also known as
      content-types or mime-types. The MIME Type is a two-part identifier for file formats and
      format contents transmitted on the Internet. Yes, we copied this explanation from Wikipedia.
      It's pretty easy to explain: A media type consists of a type and subtype that defines content
      and file extension. An HTML file has the mime type 'text/html', an jpg the mime type
      'image/jpeg'.
      <Image url="mimetype" alt="example showing mime types" />
      WordPress uses these mime types. They have a list of files they allow and a list of files they
      disallow. There are several methods to change this behavior and add mime types. See below.
      <h2>Functions.php</h2>
      The old mighty and glorious functions.php. When we used to 'mod' WordPress sites in our
      teenage age, we consistently fucked up the spelling in this file and ruined our theme. We will
      guide you through the process so this doesn't happen. So what is the functions.php? It's a
      file that appears on every theme in WordPress and contains basic functionality. You can open
      it by going to Appearance and choosing the Theme Editor. If a warning appears, feel free to
      ignore it. You know what you're doing. ;-) Choose your active theme in the right sidebar, and
      below you will find all theme files listed, including the functions.php.
      <Image url="functionsphp" alt="place where the functions.php is located" />
      Click to open and scroll down to the bottom. Don't delete anything. Create a new line after
      the end of the file, and add the following:
      <Code language="php">
        {`function allow_avif( $mime_types ) {
  $mime_types['avif'] = 'image/avif';
  return $mime_types
}
add_filter( 'upload_mimes', 'allow_avif', 1, 1 );`}
      </Code>
      This code will automatically allow you to upload AVIF files just like you upload any other
      image. If you wish to add more support for all the new image formats out there in the wild,
      copy the code below.
      <Code language="php">
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
      </Code>
      <h2>FTP Upload</h2>
      Another way to bypass the restriction is to upload your files via FTP. Simply connect to your
      server and drop your images in the upload folder, where most of your current photos should be
      saved. If you don't know how to access your files directly, please ask your web host. Most
      providers offer great tutorials.
      <h2>Plugins for mime type support</h2>
      There's a considerable disadvantage when modifying the functions.php. It's theme related. This
      means whenever you switch a theme or proceed to update your current one, most likely the
      shortcode snippet will be gone. Hold on, there's no need to pull out the lyrics of 'Time to
      say Goodbye'. Mhh mhh mhh, no no no. There is a solution that is working independently.
      Financially indepen.. sorry, the memes. Let me get back on track: Multiple plugin solutions
      exist. Take a look at these beauties:
      <BlogLink
        link="https://wordpress.org/plugins/wp-add-mime-types/"
        text="WP Add Mime Types"
        newLine
      />
      <BlogLink link="https://wordpress.org/plugins/blob-mimes/" text="Lord of the Files" newLine />
      To quote: WordPress relies mostly on name-based validation when deciding whether or not to
      allow a particular file, leaving the door open for various kinds of attacks. Lord of the Files
      (previously known as "blob mimes") adds to this content-based validation and sanitizing,
      ensuring that files are what they say they are and safe for inclusion on your site.
      <Image url="mimetype-plugin" alt="screenshot of the mime type plugin website" />
      <h2>There's one remaining problem: No automatic conversion</h2>
      Uploading images is a cool thing, but there's a colossal problem remaining. For every image
      you wish to serve to your users, you have to convert it manually. Well, there are some *cough*
      <BlogLink text=" exceptional bulk converters.. like avif.io.." link="/" /> probably you've
      heard of it already. However, the work of{" "}
      <BlogLink
        className="text"
        text="using the HTML picture tag"
        link="/blog/tutorials/use-avif-in-html"
      />{" "}
      still remains. A more simplistic idea would be to have an image plugin that automatically
      converts images to modern formats and serves the best solution based on your user's browser.
      We are currently working on creating an easy to use Plugin that handles all these requests
      without you having to configure anything. Until then, feel free to try other plugins.
      Unfortunately, none of these support avif yet, but WebP is an advantage too!
      <h2>Image Optimization Plugin Support</h2>
      As we already told you, all standard WordPress services and plugins for image optimization do
      not currently support AVIF.
      <h2>Summary</h2>
      WordPress doesn't support AVIF files. WordPress does not even support WebP. We are currently
      creating a fantastic plugin for you. In the meantime, you can still upload AVIF files by
      allowing the mime type or use an image plugin to at least make use of WebP. Just make sure to
      provide fallback images for older versions of Chrome. Or browsers that do not support avif
      yet, like Firefox.
    </Blog>
  );
}
