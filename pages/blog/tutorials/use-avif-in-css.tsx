import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogSyntax,
  BlogLink,
  BlogLinkExternal,
  BlogImage,
} from "@components/BlogComponents";

import { useAvifInCss as postdata } from "lib/meta";
import { useAvifInHtml as post1 } from "lib/meta";
import { useAvifInFrameworks as post2 } from "lib/meta";
import { useAvifInWindows as post3 } from "lib/meta";

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
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
      contents as an inline script in your {`<head>`} above any CSS content. The minified version of
      this script is a tiny 600 bytes piece and takes 5ms to load, which is completely fine for the
      benefit it provides.
      <BlogSyntax language="javascript">
        {`function AddClass(class) { document.documentElement.classList.add(class) };

var avif = new Image();
avif.src = "data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=";

avif.onload = function () { AddClass("avif") };

avif.onerror = function () {
  var webp = new Image();
  webp.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
  webp.onload = function () { AddClass("webp") }
}`}
      </BlogSyntax>
      Minified version (600 Bytes):
      <BlogSyntax language="javascript">
        {`function F(a){document.documentElement.classList.add(a)}var A=new Image;A.src="data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=",A.onload=function(){F("avif")},A.onerror=function(){var a=new Image;a.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",a.onload=function(){F("webp")}};`}{" "}
      </BlogSyntax>
      Minified version without WebP detection (400 Bytes):
      <BlogSyntax language="javascript">
        {`var A=new Image;A.src="data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=",A.onload=function(){document.documentElement.classList.add("avif")};`}{" "}
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
      <BlogSubtitle text="The outcome (05.01.21)" />
      Using this script leads to the following screenshots. Back in the day, Firefox Quantum didn't
      support WebP or AVIF, so there is no class. Chrome currently supports AVIF, so AVIF is
      displayed. Edge does not support AVIF and supports WebP, so our site has a webp class.
      <BlogImage url="css-firefox" alt="firefox quantum without any class" />
      <BlogImage url="css-chrome" alt="our website on chrome gets an avif class" />
      <BlogImage url="css-edge" alt="microsoft edge with a webp class in the html element" />
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
      <BlogSubtitle text="Further optimization" />
      There are several more ways to optimize your images. Take a look at the referenced articles
      below.
    </Blog>
  );
}
