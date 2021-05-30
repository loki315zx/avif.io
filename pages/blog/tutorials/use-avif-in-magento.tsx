import Blog from "@components/Blog";
import H from "@components/Blog/H";
import SmartLink from "@components/SmartLink";

import { useAvifInMagento as postdata } from "lib/meta";
import { useAvifInCloudflare as post1 } from "lib/meta";
import { useAvifInNetlify as post2 } from "lib/meta";
import { useAvifInWordpress as post3 } from "lib/meta";

import { useState } from "react";
import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";

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
      Every online store shows a lot of images - product photos, brand images, etc. But with all
      these images come challenges and opportunities for optimization. Image optimization is a
      fascinating thing. You can do a lot to optimize them, for example, change the quality of the
      images, reduce the color depth and remove metadata. It is best to switch to a higher
      compressing image format. New image formats are always under scrutiny. But either they are not
      helpful or they are not yet adopted sufficiently. But AVIF was founded by all major technology
      and browser companies worldwide, including Google, Apple, and Mozilla.
      <H contentTableCallback={contentTableCallback} level={2} text="Native Magento solution" />
      Installing AVIF support on Magento CMS has been difficult for some time. Fortunately, some
      developers have been working hard on the problem and found solutions. Both solutions offer
      local and automatic conversion. Please note that this post is not sponsored. As there is no
      free demo of Magento, we could not test them individually on our computers. However, several
      sources confirm that both plugins work perfectly, so we would encourage you to try them out if
      you like. Also,
      <SmartLink
        ext
        link="github.com/magento/magento2/pull/32400"
        text="according to a Github pull request"
      />
      , Magento will add native support for AVIF headers shortly.
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="Ultimate Image Optimizer Extension"
      />
      <SmartLink
        ext
        link="jajuma.de/en/jajuma-develop/extensions/ultimate-image-optimizer-extension-for-magento-2"
        text="Ultimate Image Optimizer Extension for Magento 2"
      />
      was the first extension to support AVIF images for Magento 2 stores. In addition to local and
      automatic AVIF conversion, WebP images and original images are available as a fallback. In
      addition, developers have added lazy loading and retinal support options, giving Magento 2
      stores a complete image optimization solution. Their customers benefit from improved page
      loading times and high-quality images.
      <H contentTableCallback={contentTableCallback} level={2} text="magento2-next-gen-images" />
      Jisse Reitsma, the founder of Yireo, provides a Magento module that does exactly the same. He
      describes it as a module to add support for NextGen images. Those who love Magento and image
      optimization have probably seen Yireo's work before, as he maintains the Yireo_Webp2 module,
      which replaces JPG and PNG images with normally smaller WebP images. Interestingly, he is
      excited to support other next-generation image formats such as JPEG XL and WebP2 in the
      future. This enthusiasm has also led him to merge his existing WebP module with the
      theoretical AVIF module into the new Next-Gen image module. Soon, the extensions could include
      a CLI to generate these images in advance rather than generating them in no time at all. I
      suggest
      <SmartLink
        ext
        link="packagist.org/packages/yireo/magento2-next-gen-images"
        text="visiting his module page on Packagist"
      />
      or his
      <SmartLink
        ext
        link="yireo.com/blog/2020-12-29-magento2-webp-becomes-next-gen"
        text="blog post"
      />
      , where he gives more information about the current state of the plugin, as well as errors he
      sees when activating AVIF modules on the server, such as not optimizing the view.xml. Have you
      also created an AVIF module / extension? Let us know so we can add it to the list.
    </Blog>
  );
}
