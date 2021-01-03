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
const postdata = {
  readingtime: "8",
  title: "Use AVIF in CSS",
  description: "Implement the new AVIF image format in the `background-images` of your CSS.",
  url: "https://avif.io/blog/tutorials/use-avif-in-css",
  image: "",
  keywords: ["avif", "css", "background image"],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [
    "drafts.csswg.org/css-images-4",
    "dev.to/nucliweb/detect-avif-image-support-to-use-in-your-css-4pen",
    "caniuse.com/css-image-set",
    "https://caniuse.com/avif ",
    "raoulkramer.de/avif-and-webp-images-as-css-background-images",
    "github.com/djpogo/avif-webp-css-support",
    "dev.to/nucliweb/detect-avif-image-support-to-use-in-your-css-4pen",
  ],
  tags: [
    "image format",
    "squoosh",
    "firefox",
    "javascript",
    "files",
    "avif format",
    "users",
    "original image",
    "decoders",
    "devices",
    "google",
    "bytes",
    "user experience",
    "css background",
    "github",
    "background images",
    "file size",
    "people",
    "file format",
  ],
  questions: [
    "What is AVIF image format",
    "Is AVIF lossless",
    "Which image format can be displayed by all Web browsers",
    "What is a Web image",
    "How do I use an AVIF file",
    "Which image format is highest quality",
    "Progressively delivering new image formats with CSS",
    "My Blog Just Got Faster: AVIF Support",
    "PostCSS plugin to use AVIF in CSS background",
    "avif and webp images as css background images",
    "Delivering New Image Formats",
    "css background-image usage of avif and webp",
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

const advantages = [""];

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={posts}>
      <BlogSubtitle text="" />
      Serving AVIF images through HTML is very easy, as you can read{" "}
      <BlogLink text="in this tutorial" link="/blog/tutorials/use-avif-in-html" />. Furthermore, it
      is straightforward because HTML offers a media-type hint, which helps the browser deliver the
      best version of your image. Unfortunately, CSS does not have an option like this. However,
      with a simple Javascript function, we can easily support WebP and AVIF. We have created a
      detection script that manipulates your page's HTML element by writing classes.
      <BlogSubtitle text="How it works" />
      We have to remember that in CSS, the first rule doesn't win. It's the last rule that wins. We
      created a script that checks for AVIF and WebP support by loading an AVIF-encoded 1x1 pixel
      image. If the browser loads the AVIF image successfully, the {`<html>`} element will get an
      'avif' class. If the browser fails to load the AVIF image, the script will further check the
      browser's support for WebP with the same method described above. If your browser successfully
      loads the image, the {`<html>`} gets a 'webp' class. Of course, this feature is optionally and
      you can remove it based on your preferences. If very unlikely, your browser also fails this
      test, the HTML element gets no class at all.
      <BlogSyntax language="html">{`<html> <!--no class at all, which means you have to use jpg (oh god)-->
<html class="webp"> <!--which means you can use webp-->
<html class="avif"> <!--which means you can use avif (heck yeah!)-->`}</BlogSyntax>
      <BlogSubtitle text="The Script" />
      To avoid visible image switching when the avif/webp class is added to your DOM, add the
      contents as an inline script in your {`<head>`} above any CSS content. From my experience,
      this script takes 2-3ms to load, which is completely fine for the benefit it provides.
      <BlogSyntax language="javascript">
        {`var aviftest = new Image();
aviftest.src =
  "data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=";
aviftest.onload = function () {
  document.documentElement.classList.add("avif");
};
aviftest.onerror = function () {
  var webptest = new Image();
  webptest.src =
    "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
  webptest.onload = document.documentElement.classList.add("webp");
};`}
      </BlogSyntax>
      Minified version:
      <BlogSyntax language="javascript">
        {`var a=new Image;a.src="data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=",a.onload=function(){document.documentElement.classList.add("avif")},a.onerror=function(){var A=new Image;A.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",A.onload=document.documentElement.classList.add("webp")};`}{" "}
      </BlogSyntax>
      <BlogSubtitle text="Usage" />
      Once implemented, we can simply use the following CSS due to the high level classes.
      <BlogSyntax language="css">
        {`/* Simple approach */
.img { background-image: url('avif-in-css.jpg') }
.webp .img { background-image: url('avif-in-css.webp') }
.avif .img { background-image: url('avif-in-css.avif') }


/* Add Support for high Pixel Ratio Devices (Retina) */
@media
    screen and (min-resolution: 2dppx),
    screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi) {
    .img { background-image: url('avif-in-css@2x.jpg') }
    .webp .img { background-image: url('avif-in-css@2x.webp') }
    .avif .img { background-image: url('avif-in-css@2x.avif') }
}`}
      </BlogSyntax>
      <BlogSubtitle text="SCSS background mixin" />
      <BlogLinkExternal
        link="https://raoulkramer.de/avif-and-webp-images-as-css-background-images/"
        text="Raoul Kramer"
      />{" "}
      posted a f*king amazing SCSS background mixin that you can use as well to support AVIF and
      WebP.
      <BlogSyntax language="scss">
        {`@mixin bg-url($url, $url2x: false, $webp1x: false, $webp2x: false, $avif1x: false, $avif2x: false) {
  background-image: url($url);
  @if $webp1x { .webp & { background-image: url($webp1x) }}
  @if $avif1x { .avif & { background-image: url($avif1x) }}
  @if $url2x {
    @media
    screen and (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
      background-image: url($url2x);
      @if $webp2x {.webp & {background-image: url($webp2x)}}
      @if $avif2x {.avif & {background-image: url($avif2x)}}
    }
  }
}`}
      </BlogSyntax>
      <BlogSubtitle text="Look into the future" />
      The World Wide Web Consortium (W3C) is developing CSS Images Module Level 4 that will enable
      us to define the image type. The image-set property allows us to specify different image
      formats. The browser renders the first image format that is supported by the browser. The
      example below shows how type() can be used to serve multiple images in high-quality formats
      and older formats that are more widely supported. Note that the AVIF is shown first, since
      both images have the same resolution. The JPEG image coming second is automatically dropped in
      UAs which support AVIF images. However, older UAs ignore AVIF images (because it knows it
      doesn't support "image/avif" files), and JPEG images will be selected instead.
      <BlogSyntax language="css">
        {`background-image:
	image-set(
		"zebra.avif" type("image/avif"),
		"zebra.webp" type("image/webp"),
		"zebra.png" type("image/png")
	);`}
      </BlogSyntax>{" "}
      Image-set is currently supported by 90% of browsers but does not support the type declaration
      yet. This is a brand new feature for CSS4. Until browsers support this feature, we have to use
      JavaScript to detect AVIF and WebP support.
      <BlogSubtitle text="Generating AVIF images" />
      Creating AVIF files with <BlogLink text="avif.io" link="/" /> is a nobrainer. Simply drag the
      files into the converter and it'll do the rest. You'll get the best results with the least
      time.
      <BlogSubtitle text="One last hacky way by Marble_Wraith" />
      The reddit user marble_wraith found a hacky way to check for AVIF support. He states that the
      content-visibility CSS property launched in the same version of Chrome (85) and Opera (71) in
      which AVIF support has been added. So instead of detecting AVIF support directly, this
      solution checks for the browser version. However, as soon as other browsers like Safari add
      AVIF support, this method may stop working. We wouldn't recommend this for a production
      website, but it's something you can experiment with.
      <BlogSyntax language="css">{`@supports (content-visibility:auto) {
    .img {background-image: url("image.avif")}
}`}</BlogSyntax>
    </Blog>
  );
}
