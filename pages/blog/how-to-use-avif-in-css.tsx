import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import CTA from "@components/CTA";

import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

export default function SampleBlog() {
  return (
    <div className="blog">
      <Header />
      <h1 className="f3 white">How to use avif images in HTML today.</h1>

      <div className="content__container">
        <div className="content">
          <div>
            You've clicked this article because you'd like to find out how to use avif in HTML.
            Therefore I won't bother you with a stupid 10.000 words text passages about how awesome
            avif is just to increase my SEO. You can read plenty of articles about how amazing avif
            is right here on X or Y, as well as everywhere else in the web, just like my constant
            slightly annoying twitter updates about this site. So let's get riiiiight into the
            topic.
          </div>
          <div className="content__subtitle">Browser Support</div>
          <div>
            The most important thing you should remember when using avif is that it unfortunately
            isn't supported everywhere yet. It's a shame, right? It took webP (another awesome image
            format, but not as good as the latest ones like avif) ten years to be fully supported,
            due to Apple not implementing the format in Safari. And even now there's only a 90%
            support. By the time of writing, avif has a 25% support on Browsers. However, as avif is
            an invention by the non-profit industry consortium AOM and the largest browser-creating
            giants like Apple, Mozilla and Google are part of it, you can expect support quite
            quickly.
          </div>
          <div className="content__subtitle">The picture element</div>
          <div>
            In the meanwhile, you can still use the format in its almost-full glory with the native{" "}
            {`<picture>`} element in HTML. Why you may ask? Well, the {`<picture>`} element allows
            for progressive support. You can simply list all image sources in the order in which you
            want them to be loaded. The wanky browser of your visitors will only download the first
            image it supports. You only load one image at a time, there's no need for a script and
            everyone is happy.
            <div id="checkboxes">
              <ul>
                <li>
                  <input type="checkbox" checked /> Downloads only one image
                </li>
                <li>
                  <input type="checkbox" checked /> Native support for choosing the best image
                </li>
                <li>
                  <input type="checkbox" checked /> Has 96% support in browsers and provides
                  automatic fallback
                </li>
                <li>
                  <input type="checkbox" checked /> Easy to implement
                </li>
              </ul>
            </div>
            <div className="content__subtitle">Implementation</div>
            Browser support for the picture element is at 96%, but even if your grandma is visiting
            your website with her disguisting Internet Explorer 6, her browser will simply fallback
            to using the default image. Take a look at this example and copy it for your website:
          </div>
          <SyntaxHighlighter language="html" style={vs2015} showLineNumbers={true}>
            {`<picture>
<source srcset="image.avif" type="image/avif" loading="lazy">
<source srcset="image.webp" type="image/webp" loading="lazy">
<img src="image.jpg" alt="avif in html" loading="lazy">
</picture>`}
          </SyntaxHighlighter>
          <div className="note">
            PS: The lazy loading attribute is supported by 75% of all browsers, make use of it!
          </div>
          This setup suits all visitors. Make sure to put the avif image as first source tag, the
          browser will display the first media-type it can handle.
          <div className="content__subtitle">Responsiveness</div>
          Great, right? Well, yes, but actually no. Because we are still lacking support for
          different device types. Creating an optimal experience for Retina displays can be a little
          more demanding:
          <SyntaxHighlighter language="html" style={vs2015} showLineNumbers={true}>
            {`<picture>
<source srcset="image.avif 1x, image@2x.avif 2x" type="image/avif" loading="lazy">
<source srcset="image.webp 1x, image@2x.webp 2x" type="image/webp" loading="lazy">
<img src="image.jpg 1x, image@2x.jpg 2x" alt="avif in html" loading="lazy">
</picture>`}
          </SyntaxHighlighter>
          <div className="content__subtitle"></div>
          Okay, probably not as demanding as it sounded like. Still, creating different images for
          every viewport with every format can be exhausting. However if you don't have to deal with
          a lot of images on your website, it's a good way to setup for the future. Looking to use
          avif as background images? How about frameworks? Enjoy the articles featured below. :)
          <div className="content__subtitle">Sources</div>
          <div className="source">http://aomedia.org/about/</div>
          <div className="source">http://aomedia.org/av1-features/get-started/</div>
          <div className="source">https://caniuse.com/?search=picture</div>
          <div className="source">https://caniuse.com/avif</div>
          <div className="source">https://caniuse.com/loading-lazy-attr</div>
          <div className="source">https://caniuse.com/webp</div>
          <div className="source">https://css-tricks.com/avif-has-landed/</div>
          <div className="source">
            https://developer.apple.com/documentation/safari-release-notes/safari-14-release-notes
          </div>
          <div className="source">
            https://tollwerk.de/blog/schlanke-responsive-bilder-mit-picture-mozjpeg-webp-avif-sqip
          </div>
          <div className="source">
            https://www.mediaevent.de/bilddatenformate-jpg-avif-png-webp/
          </div>
        </div>
      </div>
      <section className="posts">
        <div className="posts__container">
          <div className="posts__item">
            <div className="posts__img">7 tips on how to efficiently use avif in CSS.</div>
            <div className="posts__data">
              <div className="posts__date">last update: November 12, 2020</div>
              <div className="posts__summary">
                AVIF, the file format based on the AV1 video codec, is the latest addition to the
                next-gen image formats. Early reports and comparisons show good results.
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </div>
  );
}
