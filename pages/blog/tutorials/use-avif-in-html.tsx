import Blog from "@components/Blog";
import Checkbox from "@components/Checkbox";
import SmartLink from "@components/SmartLink";

import Code from "@components/Code";

import { useAvifInHtml as postdata } from "lib/meta";
import { useAvifInCss as post1 } from "lib/meta";
import { useAvifInFrameworks as post2 } from "lib/meta";
import { useAvifInFirefox as post3 } from "lib/meta";

export default function BlogAvifInHtml() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      I won't waste your time with 10.000 word text passages about how awesome AVIF is just to boost
      my SEO rankings. AVIF is a file format based off a video codec that support high bit depth
      while keeping a low file size. You can find plenty of articles about how fantastic AVIF is
      right here, as well as everywhere else on the web. Or you can just enjoy my countless,
      occasionally irritating <SmartLink text="tweets" link="https://twitter.com/jschmitz97" />{" "}
      about this site. You clicked this article because you would like to learn how to use AVIF in
      HTML, so let's get riiiiiight into the topic.
      <h2>Browser Support</h2>
      The most important thing you should be aware of when using AVIF is that it unfortunately isn't
      supported everywhere yet. This is a shame, right? It took ten years for webP (another
      excellent image format, but not good enough to match avif) to become fully supported due to
      Apple's unwillingness to implement the format in Safari. But still, there's only 90% support.
      By the time of writing, AVIF has 25% support on browsers. Google Chrome and Opera support it.
      Firefox supports it if you enable the AVIF image format in the settings. Safari has no AVIF
      support yet. However, AVIF is an invention by the non-profit industry consortium Alliance of
      Open Media (AOM). The largest browser-creating giants Apple, Mozilla and Google are all part
      of the project, so you can expect support quite quickly.
      <h2>The picture element</h2>
      For the time-being, you can still use the format in its almost-complete glory with the native{" "}
      {`<picture>`} element in HTML. Why, you may ask? Well, the {`<picture>`} element allows for
      progressive support. You can simply put all the image files in the order in which you want
      them to be loaded. The wanky browsers of your visitors will only load one image at the same
      time, thus reducing the load on the server. Also, there's no need for a script to handle
      multiple images. Everyone is happy.
      <Checkbox
        advantages={[
          "Does not download more than one image at a time",
          "Native support for selecting the most appropriate image",
          "96% browser support and automatic fallback",
          "Getting this implemented is easy and straightforward",
        ]}
        checked={true}
      />
      <h2>Implementation</h2>
      At the moment, 96% of browsers support the picture element. Still, even if your grandma is
      visiting your website with her disgusting Internet Explorer 6, her browser will simply fall
      back to using the default image format if you provide it. Take a look at the following example
      and copy it if you want it for your website:
      <Code language="html">
        {`<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img
  width="1280" height="720" decoding="async" loading="lazy"
  src="image.jpg" alt="an avif image" />
</picture>`}
      </Code>
      <h5>
        PS: The lazy loading attribute is supported by 75% of all browsers, make use of it! Also,
        don't forget to add width & height to avoid a Layout Shift. Providing width and height is
        more important than ever.
      </h5>
      This is a nice set up for all visitors. Just make sure the first source tag is an AVIF image
      for the browser to display the first media type it can handle.
      <h2>Responsiveness</h2>
      At this point, it seems to be great, right? Well, no, not yet. That is because our platform
      still lacks support for different types of devices. Creating an optimal experience for Retina
      displays is a little more challenging. Also, we would want to make sure that mobile devices do
      not download images that are way larger than their screen.
      <Code language="html">
        {`<picture>

<source
sizes="(max-width: 640px) 100vw, 640px"
srcSet="/image-1280.avif 1280w, /image-640.avif 640w, /image-320.avif 320w"
type="image/avif" />

<source
sizes="(max-width: 640px) 100vw, 640px"
srcSet="/image-1280.avif 1280w, /image-640.webp 640w, /image-320.webp 320w"
type="image/webp" />

<source
sizes="(max-width: 640px) 100vw, 640px"
srcSet="/image-1280.avif 1280w, /image-640.jpg 640w, /image-320.jpg 320w"
type="image/jpg" />

<img
width="1280" height="720" decoding="async" loading="lazy"
src="/image.jpg" alt="an avif image" />

</picture>`}
      </Code>
      Okay, this is probably not as challenging as we originally believed, but creating AVIF images
      for every viewport with every format can be exhausting. Nevertheless, if your website does not
      have many images, it's a good way to prepare for the future. Please remember to provide
      fallback images for older versions of browsers or experimental usage like in Firefox. Else
      your User Experience might be suffering as images won't get rendered. AVIF is good for
      backgrounds as well. Check out the{" "}
      <SmartLink text="CSS article" link="/blog/tutorials/use-avif-in-css" />. How about{" "}
      <SmartLink text="frameworks" link="/blog/tutorials/use-avif-in-frameworks" />? Enjoy this
      article featuring the different types of frameworks you can use. :)
    </Blog>
  );
}
