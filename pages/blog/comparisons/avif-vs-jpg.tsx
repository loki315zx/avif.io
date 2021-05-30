import Blog from "@components/Blog";

/* #NOTE: I declare the header component "H" on every blog article. Is there a way to automatically include it with the Blog component? */

import H from "@components/Blog/H";
import Checklist from "@components/Blog/Checklist";

import { avifVsJpg as postdata } from "lib/meta";

/* The 3 following lines import metadata from similar posts.
See below comments on why this is an issue*/
import { useAvifInHtml as post1 } from "lib/meta";
import { useAvifInCss as post2 } from "lib/meta";
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
    /*
    Posts = posts1,post2, .. serves as a way to show 3 related blog posts under each article.
    I’d love to get rid of that completely and offer an automatic way to display 3 blog posts of the same category.
    I currently only categorize blog posts through the folder structure and index blog file, not in the lib/meta, which might be the better idea.
    */
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      {/*
      The content table is used with every blog post, but is repeatingly declared in every single blog posts.
      Is there a way to integrate it into the Blog component?
      */}
      <ContentTable contentTable={contentTable} />
      {/*
      contentTableCallback={contentTableCallback} has to be declared in order for the Table of Content to know which elements should be included inside it.
      Is there a way to automatically include level=2 and level=3 headings, without having to write the contentTableCallback attribute all the time?
      */}
      <H contentTableCallback={contentTableCallback} level={2} text="Introduction" />
      Today, we have many image codecs to work with. Images come in all shapes and sizes but also
      formats. However, many do not realize how important it is to have more than one image codec to
      choose from. Today, <b>JPEG is among the most popular image codecs used worldwide</b>. JPEG /
      JPG is an image file format and an abbreviation for Joint Photographic Expert Group. Invented
      in 1992, it is one of the oldest and most common image file formats on the Web. It is widely
      used on the Internet and beyond and offers excellent image compression.
      <br />
      For over two decades, JPG has been the default choice - but now,{" "}
      <b>
        various alternatives and rivals are appearing that can compete with JPG as the default image
        codec
      </b>
      . Interestingly, the latest next-generation image codec receiving a lot of positive attention
      is known as AVIF.
      <br />
      AVIF (AV1 Still Image File Format) is an image file format derived from the AV1 video format
      developed by the Alliance for Open Media and used primarily in browsers such as Google Chrome
      and Mozilla Firefox. It is based on the AV1 video codec and is widely used by media giants
      such as Netflix.{" "}
      <b>
        AVIF provides crisp, impressively detailed images while reducing the payload in the
        background.
      </b>
      <br />
      Although JPEG was once the default choice for almost all types of images, it has several
      limitations that can minimize its usefulness. For example,{" "}
      <b>JPG lacks alpha transparency support</b>
      - a big problem for a large number of users. In addition, the 8-bit limit means that it may
      have difficulty creating HDR-friendly images with high dynamic range while at the same time
      limiting the quality of compression.
      <H contentTableCallback={contentTableCallback} level={2} text="Quality comparison" />
      If you focus on the discussion about which image codec is the best, there will always be one
      opinion or another. However, there is no denying that{" "}
      <b>JPEG suffers in terms of compression quality today</b>. Indeed, even the slightly more
      modern JPEG 2000 can offer better overall compression.
      <br />
      However, if you want better results,{" "}
      <b>many codecs offer a more satisfactory, crisper result</b>. For example, lossless
      compression and lossy photo compression are much more efficient when using AVIF.{" "}
      <b>AVIF tends to provide some of the best results we can achieve</b> with lossy,
      non-photographic images.
      <br />
      For those who are dealing with an image with low fidelity,
      <b> AVIF is currently the first choice</b>. Crucially, AVIF can also offer a substantial
      reduction of an image. File reduction is essential for faster loading times. As AVIF can
      perform reductions of 40% to 90%, one can see a huge difference. It comes to JPEG imagery and
      then around 20% savings when compared to WebP. It’s easy to see why AVIF wins the prize
      regarding image size to image quality.
      <br />
      There are also limitations when comparing AVIF with JPEG. For example, JPEG is limited to
      using an 8-bit color precision system, which means that in the era of HDR, JPEG cannot achieve
      the same color quality of color. HDR today expects higher accuracy, with at least 10-bit
      precision. <b>AVIF can guarantee this 10-bit accuracy</b> and can also process HDR / Wide
      Gamut images. It also has a maximum number of five channels higher than the four channels
      allowed by JPEG.
      <br />
      Another critical aspect of the JPEG-vs-AVIF discussion is about artifacts. Today, many image
      types use a kind of tile boundary to try to split an image to make sure it fits into the
      maximum size provided. Dimensions per tile can typically leave traces that blur parts of the
      image or show clear connection lines. Since{" "}
      <b>AVIFs can capture an image/video image the size of an 8K video</b>, its use in modern
      photos is apparent.
      <br />
      <H contentTableCallback={contentTableCallback} level={2} text="Speed comparison" />
      Another crucial aspect, is speed. JPEG was written before the invention of multicore CPU
      chips. So it is designed to work only with a sequential process where the number of cores does
      not matter; it is the clock speed. Today, CPU development is primarily focused on multiple
      cores, so <b>JPEG cannot benefit from multicore processing</b>. AVIF can do what makes it a
      more suitable form of image compression for the future.
      <br />
      Tit should be noted that <b>AVIF currently has extremely slow encoding times</b>. This should
      change over time; AVIF is still relatively new, so hardware support is still arriving.{" "}
      <b>Expect an improvement in encoding times.</b>
      <br />
      Furthermore, <b>AVIF does not support progressive rendering</b>, so files must be downloaded
      entirely before they can be displayed. Often, this has little impact on the real-world user
      experience, as AVIF files are much smaller than the corresponding JPEG or PNG files, and
      therefore can be downloaded and displayed much faster. For larger file sizes, the impact can
      be significant, and you should consider using a format that supports progressive rendering.
      <H contentTableCallback={contentTableCallback} level={2} text="Animation capacity" />
      As you may know, JPEG is an image format. This means that it is typically designed to show
      only still images.{" "}
      <b>AVIF is based on an actual video codec and provides animation capacity.</b> This means that
      it can support animations and movements in a way that JPEG simply can not.
      <H contentTableCallback={contentTableCallback} level={2} text="Main differences for Nerds" />
      There are some crucial differences when it comes to looking at the differences in the JPEG vs.
      AVIF debate. For example, you will find that AVIF supports features such as:
      <Checklist
        advantages={[
          "Any color space including wide color gamut, ISO/IEC-CICP, and ICC",
          "NCLX support: sRGB, linear sRGB, linear Rec2020, etc.",
          "4: 2: 0, 4: 2: 2, 4: 4: 4 chroma subsampling",
          "8, 10, 12-bit color depth",
          "High dynamic range",
          "Lossless compression and lossy compression",
          "Excellent lossy compression compared to JPG",
          "No progressive decoding, one of the few advantages of JPEG",
          "Monochrome support",
          "Tiling support",
          "Film grain support",
          "Supports animations that JPEG cannot do",
          "Provides the ability to use alpha transparency",
          "Can use overlays, another feature that JPEG cannot handle",
        ]}
        checked={true}
      />
      Comparing these critical features with JPEG, it is easy to see why there is such a movement
      towards a long-term shift to AVIF. It provides enough detail and additional features to ensure
      that someone can deal with a better, more detailed form of the image without increasing the
      image size at all. This is necessary to ensure that we can obtain crystal clear images that
      use all modern systems while avoiding unnecessarily large image sizes.
      <br />
      The ability to use overlays is a significant advantage of AVIF over JPEG. You can use
      functions such as additional layers, color channels, and masking without any problems. JPEG,
      on the other hand, can only be saved with an intact layer.
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="Main differences for Marketeers"
      />
      Simply put, AVIF has a better chance of being supported in the long term. It also has a higher
      degree of compression efficiency and can work with a broader range of functions as described
      above. Typically, the main differences between AVIF and JPEG could then be broken down as
      follows, with AVIF providing:
      <Checklist
        advantages={[
          "higher image quality.",
          "lower image size.",
          "slower processing time, expected to improve over the years.",
          "less, but still relatively high browser support.",
        ]}
        checked={true}
      />
      At the moment, many still see the use of JPEG as an ideal way to move forward in the short
      term. As more and more images fall within the overlay standards mentioned above, it should be
      assumed that <b>JPEG will show its age within the next 3-5 years</b>. AVIF will be used more
      frequently, as it simply offers the speed of loading, if not processing, and the quality of
      the image. Also, in terms of the number of image options, and this is a no-brainer:{" "}
      <b>
        AVIF has more or less everything that JPEG lacks, apart from the broad uptake on the market.
      </b>{" "}
      In time that will change.
      <H contentTableCallback={contentTableCallback} level={2} text="Conclusion" />
      Most image codecs will be a significant improvement over what we have used in JPEG so far.
      Although the improved JPEG 2000 also offers substantial improvements over its predecessor, it
      still cannot compete with AVIF in many ways.{" "}
      <b>
        AVIF has become the ideal choice for those who need to manage encoding in a low bandwidth
        setting.
      </b>
      <br />
      So while JPEG might have the advantage of progressive rendering – it would be fair to say that
      AVIF has all the features that JPEG lacks and frankly needs. AVIF is a superior image file
      format over JPEG / JPG. However,{" "}
      <b>hardware and software support is still evolving at the time of writing</b>. Fallbacks in
      the code can allow you to use AVIF alongside image formats such as JPEG, WebP, PNG, etc.
      <br />
      There is still much to consider regarding both image types. At the moment, AVIF has the best
      chance of still being available in a decade compared to JPEG. Although JPEG may be the old
      pioneer of image codecs, it may finally replace it.
    </Blog>
  );
}
