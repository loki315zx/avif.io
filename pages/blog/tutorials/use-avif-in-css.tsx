import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import Image from "@components/Blog/Image";
import Syntax from "@components/Blog/Syntax";
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
      postMeta={meta.tutCss}
      posts={[meta.tutFrameworks, meta.tutHtml, meta.tutWindows]}
    >
      <ContentTable contentTable={contentTable} />
      <H level={2} callback={callback} text="Introduction" />
      Using AVIF images via HTML is very easy as you can read
      <Link
        text="in this tutorial."
        link="/blog/tutorials/use-avif-in-html/"
      />{" "}
      Furthermore, it is easy because <b>HTML provides a media-type hint</b>{" "}
      that helps the browser deliver the best version of your image.
      Unfortunately, CSS does not have such an option. However, with a simple
      Javascript function, we can easily support WebP and AVIF. We have created
      a detection script that manipulates the HTML element of your page by
      writing classes.
      <H level={2} callback={callback} text="How CSS works" />
      We must remember that in CSS, the first rule does not win, but{" "}
      <b>the last rule wins</b>. We have created a script that checks AVIF and
      WebP support by loading an AVIF-encoded 1x1 pixel image. If the browser
      successfully loads the AVIF image, the HTML element receives an "avif"
      class.
      <br />
      If the browser does not load the AVIF image, the script will further check
      the browser's support for WebP using the method described above. If your
      browser successfully loads the image, the HTML element gets a "webp"
      class. Of course, this function is optional, and you can remove it
      according to your preferences.
      <br /> If it is very unlikely that your browser will not pass this test,
      the HTML element will not get any class at all.
      <Syntax language="html">{`<html></html> <!-- no class at all, you have to use jpg (oh god)-->
<html class="webp"></html> <!-- you can use webp-->
<html class="avif"></html> <!-- you can use avif (heck yeah!)-->`}</Syntax>
      <H callback={callback} level={2} text="AVIF support detection script" />
      To avoid visible image changes when adding the avif/webp class to your
      DOM, add the content as an inline script in your header above any CSS
      content. The minified version of this script is a tiny 600-byte-piece and
      takes 5ms to load, which is perfectly fine for the benefit it provides.
      <Syntax language="javascript">
        {`function AddClass(class) { document.documentElement.classList.add(class) };

var avif = new Image();
avif.src = "data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=";

avif.onload = function () { AddClass("avif") };

avif.onerror = function () {
  var webp = new Image();
  webp.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
  webp.onload = function () { AddClass("webp") }
}`}
      </Syntax>
      Minified version (600 Bytes):
      <Syntax language="javascript">
        {`function F(a){document.documentElement.classList.add(a)}var A=new Image;A.src="data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=",A.onload=function(){F("avif")},A.onerror=function(){var a=new Image;a.src="data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",a.onload=function(){F("webp")}};`}{" "}
      </Syntax>
      <H level={2} callback={callback} text="Code Snippet" />
      Once implemented, we can simply use the following CSS due to the
      high-level classes.
      <Syntax language="css">
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
      </Syntax>
      Using this script leads to the following screenshots. Back in the day,
      Firefox Quantum did not support WebP or AVIF, so there is no class. Chrome
      currently supports AVIF, so AVIF is displayed. Edge does not support AVIF
      and supports WebP, so our site has a webp class.
      <Image url="css-firefox" alt="firefox quantum without any class" />
      <Image url="css-chrome" alt="our website on chrome gets an avif class" />
      <Image
        url="css-edge"
        alt="microsoft edge with a webp class in the html element"
      />
      <H level={2} callback={callback} text="SCSS background mixin" />
      Earlier this week,
      <Link
        link="raoulkramer.de/avif-and-webp-images-as-css-background-images/"
        text="Raoul Kramer"
        ext
      />
      posted an absolutely amazing SCSS background mixin that can be used to
      support AVIF and WebP.
      <Syntax language="scss">
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
      </Syntax>
      <H level={2} callback={callback} text="Future implementation" />
      The World Wide Web Consortium (W3C) is developing the CSS Images Module
      Level 4, which allows us to define the image type. The image-set property
      allows us to specify different image formats.{" "}
      <b>
        The browser renders the first image format supported by the browser.
      </b>
      <br /> The following example shows how the type() can be used to deliver
      multiple images in high-quality formats and older formats that are more
      widely used. Note that the AVIF is shown first, as both images have the
      same resolution. JPEG, which comes second, is automatically deleted in
      user agents that support AVIF images. <br />
      Older user agents, however, ignore AVIF images because they know they do
      not support image / avif files, and instead select JPEG images.
      <Syntax language="css">
        {`background-image:
	image-set(
		"zebra.avif" type("image/avif"),
		"zebra.webp" type("image/webp"),
		"zebra.png" type("image/png")
	);`}
      </Syntax>{" "}
      Currently, 90% of browsers support image-set , but do not yet support type
      declaration. This is a brand-new feature for CSS4. Until browsers support
      this feature, we must use JavaScript to detect AVIF and WebP support.
      <H level={2} callback={callback} text="Generating AVIF images" />
      Creating AVIF files with <Link text="avif.io" link="/" /> is child's play.
      Simply drag the files into the converter and it will do the rest. You will
      get the best results in the shortest time.
    </Blog>
  );
}
