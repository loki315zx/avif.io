import { Blog, ContentTable, H, Image, Syntax } from "@components/Blog/";
import { ContentTableEntry } from "@components/Blog/ContentTable";
import SmartLink from "@components/SmartLink";
import {
  useAvifInCloudflare as post3,
  useAvifInCss as post2,
  useAvifInHtml as post1,
  useAvifInWordpress as postdata,
} from "lib/meta";
import { useState } from "react";

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
      "Sorry, this file type is not permitted for security reasons".{" "}
      <b>There is no official AVIF support. </b>
      However, WordPress needs AVIF for two reasons: First, technicians and end users often have to
      deal with web speed problems that are widespread with this CMS. Thus, due to its incredibly
      small file size, AVIF can contribute to faster loading without causing any quality loss.
      <br />
      Second, WordPress <b>is the world's most dominant CMS</b> with over 455 million websites in
      2020. This means that about 35% of the web is powered by WordPress. Further statistics of
      WordPress show that in November 2020 over 409 million people view more than 20 billion pages
      every month.
      <Image url="wordpress-usage" alt="shows usage statistics of wordpress" />
      <H contentTableCallback={contentTableCallback} level={2} text="Official Support" />
      The WordPress core has implemented a security check for uploading files since version 4.7.
      This means that{" "}
      <b>
        WordPress checks the file extension of your uploaded files and rejects files that do not
        match their pattern
      </b>
      . Some will know this due to the restriction on uploading SVGs. The same applies to modern
      image formats. To date,{" "}
      <b>
        {" "}
        WordPress does not support viewing or uploading WebP images, AVIF images or other modern
        formats natively
      </b>
      . <br />
      We could argue that AVIF is a new extension. Considering that WebP is more than 10 years old,
      the question really arises whether WordPress will ever add support for modern image formats.
      Fortunately, there are several ways around this security check. If you are looking for an easy
      way to automatically generate images and offer the user the best, skip the next paragraphs and
      take a look at the plugin section.
      <H contentTableCallback={contentTableCallback} level={2} text="Mime Types" />
      WordPress restricts files that do not match its list of Internet media types, also known as
      <b>content types</b> or <b>mime-types</b>. The MIME type is a two-part identifier for file
      formats and format content that is transferred on the Internet. It is quite simple to explain:
      A media file consists of a type and a subtype that defines content and file extension. An HTML
      file has the mime type text/html, an jpg the mime type image/jpeg.
      <Image url="mimetype" alt="example showing mime types" />
      WordPress uses these mime types.{" "}
      <b>They have a list of files they allow and a list of files they do not allow. </b>There are
      several methods to change this behavior and add mime types. We recommend Solution 3.
      <H level={3} text="Solution 1: Functions.php" />
      Functions.php is a file that appears on every theme in WordPress and contains basic
      functionalities. You can open it by <b>going to Appearance and choosing the Theme Editor</b>.
      If a warning appears, confirm you know what you are doing. Select your active theme in the
      right sidebar, and below you will find all theme files listed, including functions.php.
      <Image url="functionsphp" alt="place where the functions.php is located" />
      Click to open the file and scroll down to the bottom. Create a new line after the end of the
      file, and add the following. This code will <b>allow you to upload AVIF files</b> just like
      you upload any other image. If you wish to add more support for all the new image formats out
      there in the wild, copy the code below.
      <Syntax language="php">
        {`function allow_modern_images( $mime_types ) {
  $mime_types['webp'] = 'image/webp';
  $mime_types['heic'] = 'image/heic';
  $mime_types['heif'] = 'image/heif';
  $mime_types['heics'] = 'image/heic-sequence';
  $mime_types['heifs'] = 'image/heif-sequence';
  $mime_types['avif'] = 'image/avif';
  $mime_types['avis'] = 'image/avif-sequence';
  return $mime_types
}
add_filter( 'upload_mimes', 'allow_modern_images', 1, 1 );`}
      </Syntax>
      <H level={3} text="Solution 2: FTP Upload" />
      Another way to bypass the restriction is to upload your files via FTP.{" "}
      <b>Connect to your server and drop your images in the upload folder</b>, where most of your
      current photos should be saved. If you don't know how to access your files directly, please
      ask your web host. Most providers offer great tutorials.
      <H level={3} text="Solution 3: Plugins" />
      There's a <b>considerable disadvantage when modifying the functions.php</b>. It's theme
      related. This means whenever you switch a theme or proceed to update your current one, the
      shortcode snippet will be gone. Multiple plugin solutions exist for this issue:
      <SmartLink
        link="wordpress.org/plugins/wp-add-mime-types/"
        text="WP Add Mime Types"
        newLine
        ext
      />
      <SmartLink link="wordpress.org/plugins/blob-mimes/" text="Lord of the Files" newLine ext />
      To quote: WordPress relies mostly on name-based validation when deciding whether or not to
      allow a particular file, leaving the door open for various kinds of attacks. Lord of the Files
      (previously known as "blob mimes") adds to this content-based validation and sanitizing,
      ensuring that files are what they say they are and safe for inclusion on your site.
      <Image url="mimetype-plugin" alt="screenshot of the mime type plugin website" />
      <H contentTableCallback={contentTableCallback} level={2} text="No automatic conversion" />
      Uploading images is a cool thing, but a colossal problem remains. For every image you want to
      serve to your users, <b>you need to convert it manually</b>.
      <SmartLink text="Bulk converters like avif.io" link="/" /> offer a solution to convert
      multiple files. However,
      <SmartLink text="using the HTML picture tag" link="/blog/tutorials/use-avif-in-html/" />
      remains.
      <br /> A simpler idea would be an image plugin that automatically converts images to modern
      formats and offers the best solution based on your user's browser.
      <b> We are currently working on creating an easy-to-use plugin</b> that will handle all these
      requests without you having to configure anything. Until then, do not hesitate to try other
      plugins. Unfortunately, none of these plugins supports avif yet, but WebP is also an
      advantage!
      <H contentTableCallback={contentTableCallback} level={2} text="Plugin Support and Summary" />
      As we said earlier, all major WordPress services and plugins for image optimization currently
      do not support AVIF. WordPress does not support AVIF files. WordPress does not even support
      WebP. <br />
      <b>We are currently creating a fantastic plugin for you.</b> In the meantime, you can still
      upload AVIF files by allowing the mime type or using an image plugin to at least use WebP.
      Just make sure you provide fallback images for older versions of Chrome. Or browsers that do
      not support avif yet, such as Firefox.
    </Blog>
  );
}
