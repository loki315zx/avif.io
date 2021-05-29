import Blog from "@components/Blog";
import H from "@components/H";
import SmartLink from "@components/SmartLink";
import Syntax from "@components/Syntax";
import Image from "@components/Image";

import { useAvifInWordpress as postdata } from "lib/meta";
import { useAvifInHtml as post1 } from "lib/meta";
import { useAvifInCss as post2 } from "lib/meta";
import { useAvifInCloudflare as post3 } from "lib/meta";

import { useState } from "react";
import ContentTable, { ContentTableEntry } from "@components/ContentTable";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function contentTableCallback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <ContentTable contentTable={contentTable} />
      <H contentTableCallback={contentTableCallback} level={2} text="Introduction" />
      "Sorry, this file type is not permitted for security reasons," is the wonderful answer you get
      when trying to upload AVIF images to WordPress. There is no official support. However,
      WordPress needs AVIF for two reasons: First, technicians and end users often have to deal with
      web speed problems that are widespread with this CMS. Thus, due to its incredibly small file
      size, AVIF can contribute to faster loading without causing any quality loss. Second,
      WordPress is the world's most dominant CMS with over 455 million websites in 2020. This means
      that about 35% of the web is powered by WordPress. Further statistics of WordPress show that
      in November 2020 over 409 million people view more than 20 billion pages every month.
      <Image url="wordpress-usage" alt="shows usage statistics of wordpress" />
      <H contentTableCallback={contentTableCallback} level={2} text="Official Support" />
      The WordPress core has implemented a security check for uploading files since version 4.7.
      This means that WordPress checks the file extension of your uploaded files and rejects files
      that do not match their pattern. Most of you will know this due to the restriction on
      uploading SVGs. The same applies to modern image formats. To date, WordPress does not support
      viewing or uploading WebP images, AVIF images or other modern formats natively. We could argue
      that AVIF is a new extension. Considering that WebP is more than 10 years old, the question
      really arises whether WordPress will ever add support for modern image formats. Fortunately,
      there are several ways around this security check. If you are looking for an easy way to
      automatically generate images and offer the user the best, skip the next lines and take a look
      at the plugin section.
      <H contentTableCallback={contentTableCallback} level={2} text="Mime Types" />
      WordPress restricts files that do not match its list of Internet media types, also known as
      content types or mime-types. The MIME type is a two-part identifier for file formats and
      format content that is transferred on the Internet. Yes, we copied this explanation from
      Wikipedia. It is quite simple to explain: A media type consists of a type and a subtype that
      defines content and file extension. An HTML file has the mime type 'text/html', an jpg the
      mime type 'image/jpeg'.
      <Image url="mimetype" alt="example showing mime types" />
      WordPress uses these mime types. They have a list of files they allow and a list of files they
      do not allow. There are several methods to change this behavior and add mime types. See below.
      <H level={3} text="Functions.php" />
      The old powerful and glorious functions.php. It is a file that appears on every theme in
      WordPress and contains basic functionalities. You can open it by going to Appearance and
      choosing the Theme Editor. If a warning appears, do not hesitate to ignore it. You know what
      you are doing. Select your active theme in the right sidebar, and below you will find all
      theme files listed, including the functions.php.
      <Image url="functionsphp" alt="place where the functions.php is located" />
      Click to open and scroll down to the bottom. Don't delete anything. Create a new line after
      the end of the file, and add the following:
      <Syntax language="php">
        {`function allow_avif( $mime_types ) {
  $mime_types['avif'] = 'image/avif';
  return $mime_types
}
add_filter( 'upload_mimes', 'allow_avif', 1, 1 );`}
      </Syntax>
      This code will automatically allow you to upload AVIF files just like you upload any other
      image. If you wish to add more support for all the new image formats out there in the wild,
      copy the code below.
      <Syntax language="php">
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
      </Syntax>
      <H level={3} text="FTP Upload" />
      Another way to bypass the restriction is to upload your files via FTP. Simply connect to your
      server and drop your images in the upload folder, where most of your current photos should be
      saved. If you don't know how to access your files directly, please ask your web host. Most
      providers offer great tutorials.
      <H level={3} text="Plugins for mime type support" />
      There's a considerable disadvantage when modifying the functions.php. It's theme related. This
      means whenever you switch a theme or proceed to update your current one, most likely the
      shortcode snippet will be gone. Multiple plugin solutions exist for this issue:
      <SmartLink link="wordpress.org/plugins/wp-add-mime-types/" text="WP Add Mime Types" newLine />
      <SmartLink link="wordpress.org/plugins/blob-mimes/" text="Lord of the Files" newLine />
      To quote: WordPress relies mostly on name-based validation when deciding whether or not to
      allow a particular file, leaving the door open for various kinds of attacks. Lord of the Files
      (previously known as "blob mimes") adds to this content-based validation and sanitizing,
      ensuring that files are what they say they are and safe for inclusion on your site.
      <Image url="mimetype-plugin" alt="screenshot of the mime type plugin website" />
      <H contentTableCallback={contentTableCallback} level={2} text="No automatic conversion" />
      Uploading images is a cool thing, but a colossal problem remains. For every image you want to
      serve to your users, you need to convert it manually. There are some
      <SmartLink text=" exceptional bulk converters like avif.io." link="/" /> You've probably heard
      of it. However,
      <SmartLink text="using the HTML picture tag" link="/blog/tutorials/use-avif-in-html/" />
      remains. A simpler idea would be an image plugin that automatically converts images to modern
      formats and offers the best solution based on your user's browser. We are currently working on
      creating an easy-to-use plugin that will handle all these requests without you having to
      configure anything. Until then, do not hesitate to try other plugins. Unfortunately, none of
      these plugins supports avif yet, but WebP is also an advantage!
      <H contentTableCallback={contentTableCallback} level={2} text="Plugin Support and Summary" />
      As we said earlier, all major WordPress services and plugins for image optimization currently
      do not support AVIF. WordPress does not support AVIF files. WordPress does not even support
      WebP. We are currently creating a fantastic plugin for you. In the meantime, you can still
      upload AVIF files by allowing the mime type or using an image plugin to at least use WebP.
      Just make sure you provide fallback images for older versions of Chrome. Or browsers that do
      not support avif yet, such as Firefox.
    </Blog>
  );
}
