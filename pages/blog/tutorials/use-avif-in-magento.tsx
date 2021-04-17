import Blog from "@components/Blog";
import SmartLink from "@components/SmartLink";

import { useAvifInMagento as postdata } from "lib/meta";
import { useAvifInCloudflare as post1 } from "lib/meta";
import { useAvifInNetlify as post2 } from "lib/meta";
import { useAvifInWordpress as post3 } from "lib/meta";

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      <h2>Introduction</h2>Every online store shows a lot of images — product shots, brand images,
      etc. But with all these images come challenges and chances for optimization. Image
      optimization is a fascinating thing to explore. There's a whole lot you can do to tweak it,
      for example, changing the quality of your images, reducing the color depth and removing
      metadata. The best approach is to switch to a higher compressing image format. New image
      formats are always at the test. But either they aren't helpful, or they aren't adopted enough
      yet. But AVIF was created from all the most crucial tech and browser businesses worldwide,
      including Google, Apple, and Mozilla.
      <h2>Native Magento solution</h2>
      Installing AVIF support on your Magento CMS has been difficult for a while now. Luckily
      enough, some developers looked deeply into the issue and found solutions. Both solutions offer
      local and automatic conversion. Please note that this post is not sponsored. Since there's no
      free demo of Magento, we could not test them individually on our computers. However, several
      sources state that both plugins work fine, so we would encourage you to try them if you want.
      Also,{" "}
      <SmartLink
        external
        link="https://github.com/magento/magento2/pull/32400"
        text="according to a Github pull request"
      />
      , Magento will add native support shortly.
      <h2>Ultimate Image Optimizer Extension for Magento 2 by JaJuMa</h2>
      <SmartLink
        external
        link="https://www.jajuma.de/en/jajuma-develop/extensions/ultimate-image-optimizer-extension-for-magento-2"
        text="Ultimate Image Optimizer Extension for Magento 2"
      />{" "}
      was the first extension to support AVIF images for Magento 2 stores. Besides local and
      automatic AVIF conversion, WebP images and original images are available as a fallback. On top
      of that, developers added options for lazy loading and retina support. As a result, Magento 2
      store owners get an all-in-one image optimization solution. Their customers benefit from
      improved page load times and high-quality images.
      <h2>magento2-next-gen-images by Yireo</h2>
      Jisse Reitsma alias Yireo provides a Magento module that does exactly the same thing. He
      describes it as a module to add support for NextGen images. Those who have been fans of
      Magento and image optimization have probably seen Yireo's work before since he maintains the
      Yireo_Webp2 module, which replaces JPG and PNG images with usually smaller WebP images.
      Interestingly, he has enthusiasm for adding support for other next-generation image formats
      like JPEG XL and WebP2 in the future. This enthusiasm has also lead him to merge his existing
      WebP module with the theoretical AVIF module into the new next-gen image module. Soon, the
      extensions might include a CLI to generate those images beforehand instead of on the fly. I
      suggest you{" "}
      <SmartLink
        external
        link="https://packagist.org/packages/yireo/magento2-next-gen-images"
        text="visit his module page on packagist"
      />{" "}
      or his{" "}
      <SmartLink
        external
        link="https://www.yireo.com/blog/2020-12-29-magento2-webp-becomes-next-gen"
        text="blog post"
      />{" "}
      where he gives more information about the current state of the plugin, as well as flaws he
      sees when enabling AVIF modules on the server (like not optimizing view.xml).
      <h2> </h2>
      Did you create an AVIF module/extension as well? Let us know so we can add it to the list.{" "}
    </Blog>
  );
}
