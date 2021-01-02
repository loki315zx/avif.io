import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogAdvantages,
  BlogSyntax,
  BlogNote,
  BlogLink,
  BlogLinkExternal,
} from "@components/BlogComponents";
const postdata = {
  readingtime: "",
  title: "",
  description: "",
  url: "",
  image: "",
  keywords: [""],
  author: "Justin Schmitz",
  data_published: "22.10.20",
  date_modified: "22.12.20",
  sources: [""],
  tags: [""],
  questions: [""],
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
    "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
  webptest.onload = document.documentElement.classList.add("webp");
};`}
      </BlogSyntax>
      Minified version:
      <BlogSyntax language="javascript">
        {`var aviftest=new Image;aviftest.src="data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=",aviftest.onload=function(){document.documentElement.classList.add("avif")},aviftest.onerror=function(){var A=new Image;A.src="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",A.onload=document.documentElement.classList.add("webp")};`}
      </BlogSyntax>
      <BlogSubtitle text="Usage" />
      Once implemented, we can simply use the following CSS.
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
      <BlogSubtitle text="Another approach" />
      Personally, we use a modern-first approach. We changed our script so that if the browser loads
      the AVIF image successfully, the {`<html>`} element will remain unchanged. If the browser
      fails to load the AVIF image, it will add a WebP class to your HTML element and check the
      browser's support for WebP with the same method described above. If very unlikely, your
      browser also fails this test, the script removes the 'webp' class from the HTML element and
      adds a 'jpg' class. We are left with either:
      <BlogSyntax language="html">{`<html> <!--no class at all, which means you can use avif-->
<html class="webp"> <!--which means you can use webp-->
<html class="jpg"> <!--which means you have to use jpg (oh dear)-->`}</BlogSyntax>
      Personally, we find this to be cleaner. The script might be a little longer, but has a lower
      execution time if avif loads successfully. Also, it is more leaned towards modern features.
      Maybe this approach suits you as well. View the normal and minified version below.
      <BlogSyntax language="javascript">
        {`var aviftest = new Image();
aviftest.src =
  "data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=";
aviftest.onerror = function () {
  document.documentElement.classList.add("webp");
  var webptest = new Image();
  webptest.src =
    "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
  webptest.onerror = function () {
    document.documentElement.classList.remove("webp");
    document.documentElement.classList.add("jpg");
  }
}`}
      </BlogSyntax>
      <BlogSyntax language="javascript">
        {`var aviftest=new Image;aviftest.src="data:image/avif;base64,AAAAFGZ0eXBhdmlmAAAAAG1pZjEAAACgbWV0YQAAAAAAAAAOcGl0bQAAAAAAAQAAAB5pbG9jAAAAAEQAAAEAAQAAAAEAAAC8AAAAGwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGF2MDEAAAAARWlwcnAAAAAoaXBjbwAAABRpc3BlAAAAAAAAAAQAAAAEAAAADGF2MUOBAAAAAAAAFWlwbWEAAAAAAAAAAQABAgECAAAAI21kYXQSAAoIP8R8hAQ0BUAyDWeeUy0JG+QAACANEkA=",aviftest.onerror=function(){document.documentElement.classList.add("webp");var a=new Image;a.src="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",a.onerror=function(){document.documentElement.classList.remove("webp"),document.documentElement.classList.add("jpg")}};`}
      </BlogSyntax>
      <BlogSubtitle text="Look into the future" />
      W3C are working in the CSS Images Module Level 4, and the new module will have an interesting
      feature, image-set and we'll can define the image type. With image-set we'll can define
      different format and the browser render the first image format supported. An example would
      look like this:
      <BlogSyntax language="css">
        {`background-image:
	image-set(
		"zebra.avif" type("image/avif"),
		"zebra.webp" type("image/webp"),
		"zebra.png" type("image/png")
	);`}
      </BlogSyntax>{" "}
      Image-set is currently at 90% browser support, but doesn't support the type declaration yet.
      This is a complete new feature for CSS4 that you can look up here. Until we have this awesome
      feature in the browsers, we have to use JavaScript to detect the support. .
      https://drafts.csswg.org/css-images-4/
      https://dev.to/nucliweb/detect-avif-image-support-to-use-in-your-css-4pen
      https://caniuse.com/css-image-set
      <BlogSubtitle text="Generating AVIF images" />
      Creating AVIF files with avif.io is a nobrainer. Simply drag the files into the converter and
      it'll do the rest. You'll get the best results with the least time.
      <BlogSubtitle text="One last hacky way by Marble_Wraith" />
      Disclaimer: Haven't tested this myself. In theory a hacky way that would work right now:
      <BlogSyntax language="css">{`@supports (content-visibility:auto){
    .image-avif {}
}`}</BlogSyntax>
      Since the content-visibility CSS property launched in chrome 85 and opera 71, alongside AVIF
      support. It's not so much doing AVIF detection, as it is a janky way of doing browser version
      detection. Of course this would break as soon as firefox or safari starts with AVIF support
      unless they too launch content-visibility support at the same time... Well i did say it was
      hacky
    </Blog>
  );
}
