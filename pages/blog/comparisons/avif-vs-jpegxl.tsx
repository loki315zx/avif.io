import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import meta from "@lib/meta.json";
import Blog from "@components/Blog";
import { useState } from "react";
import Link from "@components/Link";
import Syntax from "@components/Blog/Syntax";
import Image from "@components/Blog/Image";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function callback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }

  return (
    <Blog
      postMeta={meta.avifVsJpegxl}
      posts={[meta.avifVsJpg, meta.avifVsPng, meta.avifVsGif]}
    >
      <ContentTable contentTable={contentTable} />
      <H level={2} callback={callback} text="Introduction" />
      The battle to replace the aging JPEG image standard is heating up, and two
      competitors are eying for the crown. AVIF and JPEG XL. In this article,
      we'll compare how the two formats stack up against each other and see
      which is likely to dethrone JPEG as the de-facto king of image web
      delivery.
      <br />
      Released in 2021 by the Joint Photographic Experts Group (the same
      organization that developed the original JPEG standard),
      <b>JPEG XL aims to be a long-term replacement for legacy JPEG</b>
      (Hence X'L' as in 'long-term'). As a royalty-free and open-source
      standard, JPEG XL's creators hope that the open nature of their format
      will invite web developers to adopt the standard. The JXL core bitstream
      was frozen in January 2021, the file format was finalized in April 2021.
      <br />
      <b>
        AVIF is another recent image format developed by the Alliance for Open
        Media (AOM) and released in 2019.
      </b>
      The format is based on the AV1 video codec and is derived from video
      frames. Here are the technical specs and limitations of both of these
      image formats compared. The AV1 bitstream was frozen in 2018, the AVIF
      container spec was finalized in February 2019.
      <br />
      <H level={2} callback={callback} text="Quality and Limits" />
      As an image format based on a video frame, the resolution limit makes
      perfect sense. Still, it can be limiting for non-web delivery applications
      like print.
      <b>
        AVIF has a maximum resolution of 8193 x 4320. This is roughly the size
        of an 8K video frame.
      </b>
      <br />
      It is possible to push past this limit through tiling. Independently
      encoded tiles can then be placed on a grid to create a theoretical maximum
      resolution of 2,147,483,647 x 2,147,483,647 pixels or 2500 megapixels.
      However, when using this method, you come out with artifacts at the edges
      of each encoded tile, making AVIF overall unsuitable for ultra-high
      resolution images.
      <br />
      <b>
        On the other hand, JPEG XL has a maximum dimension of 1,152,921,502,459
        megapixels or over 1 billion pixels on each side of an image.
      </b>
      It's safe to say you'll never be limited by the max dimensions of a JPEG
      XL image.
      <br />
      <b>
        AVIF has a max color depth of 12 bits with a max number of channels of
        three
      </b>
      . AVIF also supports a
      <b>high dynamic range (HDR) and includes support for wide color gamuts</b>
      .
      <br />
      <b>
        JPEG XL's max bit depth can push up to 24-bit integer or true color,
      </b>
      or 32-bit floats. Although, in reality, for image delivery, 12-bit color
      precision is usually good enough, and you're unlikely to make use of the
      very high bit depth support of JPEG XL.
      <br />
      <H level={2} callback={callback} text="Compression" />
      Unlike the original legacy JPEG standard,
      <b>
        JPEG XL supports lossless compression alongside the traditional lossy
        compression.
      </b>
      <b>AVIF also supports both lossy and lossless compression.</b>
      <br />
      AVIF performs excellently with low-fidelity lossy compression. A highly
      compressed AVIF image retains high-appeal, meaning it avoids annoying
      compression artifacts like color banding. Low-fidelity AVIF images look
      fantastic while also keeping the file size down.
      <br />
      JPEG XL doesn't perform well with its appeal, with low-fidelity images
      looking slightly worse, with more noticeable artifacts in heavily
      compressed images. JPEG XL pulls ahead with lossless compression,
      providing more efficient files for both non-photo and photo lossless
      images.
      <br /> JPEG XL is excellent for those who want to share lossless photos.
      It is also great for web delivery too. AVIF offers great-looking lossy
      photos as well, making them perfect for web delivery as they are much
      kinder on bandwidth. This statement however depends highly on the quality
      you are looking for.
      <br />
      "Most images on the web are (the equivalent of) libjpeg q60-90. AVIF beats
      JXL below the equivalent of q40. Above q50, JXL is better."
      <Link text="@Jon Sneyers" link="twitter.com/jonsneyers" ext />
      <br />
      <H level={2} callback={callback} text="Speed" />
      <b>AVIF had problems with its decoding and encoding speed.</b>
      Recent releases of decoders achieved various performance improvements.
      Encoding is however still a problem and quite slow.
      <b>It doesn't support progressive decoding</b>
      - a process of decoding where portions of an image are incrementally
      decoded from an incomplete image file. This can dramatically increase the
      viewing speed by allowing for a lower-quality preview image to be
      displayed while the rest of the image is decoded. Unlike some legacy
      formats like PNG, AVIF is parallelizable, allowing the encoder to take
      advantage of multi-threaded processors instead of leaving all the encoding
      and decoding to a single core.
      <br />
      <b>
        JPEG XL is faster across the board with single-core encode and decode
        speeds and is more parallelizable than AVIF.
      </b>
      Suppose you want a speedy codec, with fast decode times being crucial for
      web delivery. In that case, JPEG XL is a compelling option. Although, the
      slightly lower file sizes achieved by AVIF for low-fidelity photos could
      give a speed advantage in download times, especially on slow broadband.
      <br />
      <H level={2} callback={callback} text="Other Features" />
      <b>Both AVIF and JPEG XL support alpha transparency</b>, representing a
      considerable upgrade over legacy JPEG.
      <b>They both also support animation</b>, although the characteristics of
      sequenced AVIF files make it more suitable for animated images than JPEG
      XL's implementation of animation. Sequenced AVIFs are essentially videos
      in containers, offering higher quality animated images over JPEG XL.
      <br />
      <b>Both standards support overlays</b>, allowing images to have multiple
      layers. This is great to preserve the fidelity and crispness of text and
      graphic layers on top of a photo background. This vastly improves the
      perceived appeal of low-fidelity, highly compressed photos for web
      delivery. Furthermore, both AVIF and JPEG XL support depth maps, allowing
      for effects to be applied to the foreground and background of images.
      <br />
      <H level={2} callback={callback} text="Support" />
      AVIF and JPEG XL are both novel image formats that are not widely
      supported by browsers. While AVIF has been around for a long time and has
      67% browser support, JPEGXL does not have any support whatsoever. Thus, if
      you are looking for a format that is intended for your users right now,
      opt for AVIF.
      <br />
      <b>Any major browser does not fully support JPEG XL.</b> For Chrome,
      Firefox, and Edge Chromium, the image format can be enabled using a config
      flag. Although, this isn't going to help web delivery, as users are
      unlikely to want to dive into their browser's configs to view your
      webpage. There is no release mobile support for JPEG XL, with Samsung
      Internet, Safari for iOS, Chrome for Android, and the Android Browser all
      forgoing JPEG XL support. Time has not been kind to JPEG XL for browser
      support.
      <br />
      <b>Update 24.07.2021</b>
      Jon Sneyers clarified that JPEGXL has support both on mobile Chrome canary
      and Firefox nightly, so we can expect full support for release versions in
      the near future. Thanks, Jon!
      <Image alt="Twitter update from Jon Sneyers" url="jonsneyers" />
      <br />
      The situation does look brighter for AVIF.{" "}
      <b>Google Chrome has fully supported AVIF images</b> both still and
      animated since Chrome 85 back in Aug 2020. Opera 76 also fully supports
      AVIF. Users of Firefox can enable AVIF support from their browser config
      settings. However, Firefox has yet to include support for sequenced AVIF
      images.
      <br />
      <b>Mobile support for AVIF is good too.</b> Android Browser, Chrome for
      Android, and Samsung Internet all fully support the standard. Safari and
      Microsoft Edge do not provide any support for AVIF yet.
      <br />
      <H level={2} callback={callback} text="Summary for Nerds" />
      In practice, AVIF and JPEG XL have a lot in common. They are both eying to
      be a long-term replacement for the legacy JPEG standard, and it is up to
      market adoption to see who will win out on top.
      <br />
      <b>JPEG XL is the overall faster and more feature-rich image format</b>
      . For lossless compression, it is unmatched even by the old lossless king
      PNG. Although AVIF does support lossless encoding, it is nowhere near as
      efficient.
      <br />
      <b>AVIF edges out JPEG XL is low-fidelity high-appeal photos</b>
      , benefiting from a tremendous lossy compression method. This does give it
      an edge in web delivery.
      <br />
      The two standards have a similar set of niche features. Both support
      overlays, depth maths, both support 4:4:4 and high-bit rate images. As
      mentioned before, although JPEG XL can reach up to 24-bit true color, for
      photo delivery, 12-bit is precise enough for most people.
      <br />
      There is one major issue remaining when it comes to implementing these
      formats.
      <Syntax language="html">
        {`<picture>
<source src="image.avif" type="image/avif">
<source src="image.jxl" type="image/jxl">
<source src="image.webp" type="image/webp">
<source src="image.jpg" type="image/jpeg">
</picture>`}
      </Syntax>
      Due to the fact that every browser that supports image/jxl will also
      support image/avif, no browser will ever select the image.jxl source as
      written. The other way around, in order to actually benefit from JPEG XL,
      it must beat every other format, a problem compounded by the fact that
      source elements actually require srcset rather than src. In contrast, WebP
      only needs to surpass the original JPEG/PNG source in order to be useful.
      We recommend Josh's article on Blobfolio for a{" "}
      <Link
        text="live comparison of both formats"
        link="https://blobfolio.com/2021/jpeg-xl/"
        ext
      />{" "}
      or to experiment with the formats yourself, on sites like
      <Link text="squoosh.app from Google." link="squoosh.app/" />
      <br />
      <H level={2} callback={callback} text="Summary for Marketeers" />
      For most people,
      <b>
        images encoded in AVIF and images encoded in JPEG XL will be very
        similar.
      </b>
      Yes, JPEG XL is faster, but most users won't notice this difference. Both
      do incredibly well with maintaining appeal when highly compressed so that
      web pictures will look great, especially compared to the old legacy JPEG
      standard.
      <br />
      <b>
        The main difference between these two standards is their market adoption
      </b>
      . If you are looking for a format that is intended for your users right
      now, opt for AVIF.
      <br />
      <H level={2} callback={callback} text="Conclusion" />
      Full support from Chrome is a massive win for AVIF and suggested that the
      industry is moving towards this spirited son of a video codec as the next
      mainstream standard.
      <b>
        We think, although JPEG XL has a broader feature set, it is AVIF most
        people should look to as the following definite image format for the
        web.
      </b>
      <br />
    </Blog>
  );
}
