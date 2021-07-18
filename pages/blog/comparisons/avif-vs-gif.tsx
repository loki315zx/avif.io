import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import meta from "@lib/meta.json";
import Blog from "@components/Blog";
import { useState } from "react";
import Checklist from "@components/Blog/Checklist";
import Syntax from "@components/Blog/Syntax";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function callback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }

  return (
    <Blog
      postMeta={meta.avifVsGif}
      posts={[meta.avifVsJpg, meta.avifVsPng, meta.imageOptimizationIn2021]}
    >
      <ContentTable contentTable={contentTable} />
      <H level={2} callback={callback} text="Introduction" />
      For years, the king of animated images has been the trusty GIF. Graphics
      Interchange Format as it is known to the nerds, GIF is a bitmap image
      format developed in 1987 by American computer scientist Steve Wilhite.
      Thirty years after its initial release, GIF is still the most widely used
      format for animated graphics despite its many limitations. Over the years,
      contenders have sought GIF’s crown, like aPNG and WEBP.
      <br />
      One of these contenders is AVIF. Unlike its predecessors, this image
      format seems likely to lay GIF to rest once and for all finally. AVIF is
      based on the AV1 video codec and was released in 2019. While it is
      relatively new on the block, some excellent specifications and features
      make AVIF an up-and-coming file format indeed. Here are the two contenders
      compared side by side.
      <br />
      <H level={2} callback={callback} text="Quality and Limits" />
      As an aging file format, quality is where GIF falls incredibly short in
      today’s modern web landscape. With a
      <b>color depth of 8 bits, GIF can only display 256 shades of color</b>
      , severely limiting the quality of images encoded in the format. If you’ve
      ever wondered why there’s lots of color banding when you see animated
      GIFs, this is a big reason why.
      <br />
      When you convert to GIF, the image encoder does its best to approximate
      the color. Still, with such a limited range of available shades, it isn’t
      easy to create a GIF and preserve the color reproduction.
      <br />
      <b>
        AVIF has a max color depth of 12 bit, providing a palette of 4096
        colors.
      </b>
      AVIF supports a high dynamic range (HDR) and includes support for wide
      color gamuts.
      <br />
      As an image format derived from a video codec,
      <b>
        AVIF has an image resolution limit of 8193 x 4320 – the size of an 8K
        video frame.
      </b>
      It is however possible to push past this limit through independently
      encoded tiles. But, the edges of each tile (at max 8K resolution for each)
      suffer from nasty artifacts, making AVIF unsuitable for large resolution
      images.
      <br />
      <b>
        GIF images can reach a theoretical max resolution of 2,147,483,647 x
        2,147,483,647
      </b>
      pixels or 2500 megapixels. However, as we will make clear in the next
      section, most users will find it hard to work with ‘HD’ images, let alone
      ones surpassing the 8K limit AVIF has.
      <br />
      <H level={2} callback={callback} text="Compression" />
      <b>GIF uses lossless compression</b>, and unlike the lossy compression we
      see in formats like JPEG, it doesn’t degrade the image as no data is lost
      through the compression process. While this is great for preserving image
      quality,
      <b>GIF suffers from large file sizes</b>. GIF uses the Lempel–Ziv–Welch
      algorithm for compression, first developed in 1985. Compression algorithms
      have improved significantly since the mid-80s, and AVIF’s compression
      capabilities prove this.
      <br />
      <b>
        AVIF offers both lossy and lossless compression, with its low-fidelity
        lossy compression showing off the format’s greatest strengths
      </b>
      . For example, a 347kb animated GIF can be converted through avif.io to be
      a whopping 91% smaller at 32kb just by encoding in AVIF. The traditional
      downside of lossy compression is low quality or “appeal”: simply how good
      the image looks. AVIF’s low-fidelity (and therefore small file size)
      images have high appeal and so don’t suffer from artifacts like color
      banding.
      <br />
      GIF’s poor compression is one of the driving forces behind why GIF images
      tend to look so bad. For an animated GIF to be encoded at high quality,
      the file size would be enormous. For a file format that is so favored for
      web delivery, its users have to use low resolution, low fidelity images to
      try and keep the file size to a web-safe amount. AVIF’s excellent lossy
      compression makes this worry a thing of the past.
      <br />
      <H level={2} callback={callback} text="Speed" />
      GIF as an animated image format is relatively slow to encode and decode.
      This is due to – in part - the inefficiency of its compression algorithm,
      LZW. This, compounded with the more significant data size inherent to{" "}
      <b>GIF, makes this image format very slow</b>.
      <br />
      AVIF supports parallelism. Instead of limiting the task of encoding or
      decode an image to one CPU core, parallelization allows multiple cores to
      work in parallel with each other to speed up encode and decode times. GIF
      is an entirely sequential codec and can only take advantage of one CPU
      core.
      <br />
      This wasn’t a problem in the 1990s, where most computers were
      single-threaded, but modern CPUs have multiple cores and multiple threads.
      With the computer market trending toward higher core counts, an image
      codec’s ability to take advantage of multi-core performance will become
      increasingly important.
      <br />
      As it can utilize multi-core processors,
      <b>AVIF is significantly faster to encode and decode than GIF.</b>
      <br />
      <H level={2} callback={callback} text="Other Features" />
      AVIF uses<b>sequencing to provide animation. Based</b>
      on a video codec, this image format works great to encode motion pictures.
      <br />
      While GIF was the first image format to support animation, it is left in
      the dust by AVIF in some key areas.
      <b>AVIF uses interframe compression</b>where only the differences between
      frames are encoded – a feature inherent in video codecs to avoid
      astronomical data sizes
      <b>. GIF uses intraframe compression</b>for its animated images. Each
      frame is encoded in total,
      <b>leading to much larger file size.</b>
      <br />
      <b>AVIF supports transparency, whereas GIF does not</b>. The overlay
      feature of AVIF allows images to have multiple layers. This is fantastic
      for animated images as a separate layer can be animated (for example text
      or a graphic), preserving crispness and improving file sizes.
      <br />
      <H level={2} callback={callback} text="Support" />
      Browser support is where AVIF falls a little short compared to GIF. With
      GIF’s age and almost universal use for animated images
      <b>, all browsers include support for GIF images</b>
      (and even many instant messaging apps have native support for GIF with the
      advent of GIF keyboards).
      <br />
      AVIF is a new format and therefore hasn’t been adopted fully. Google
      Chrome has supported AVIF since Chrome 85. At the same time, Opera and
      Samsung Internet have also implemented full support for still and
      sequenced images. Firefox doesn’t officially support AVIF, but still image
      support can be enabled in about:config. This, however, doesn’t include
      animated image support.
      <br />
      <H level={2} callback={callback} text="Summary for Nerds" />
      Despite its evident limitations,
      <b>
        GIF still holds a monopoly on the animated image world for web delivery
      </b>
      . Part of the reason for this is the lack of consensus around what format
      should replace it. Both aPNG and WEBP have attempted to de-throne GIF.
      Still, neither solves enough of these issues (like a lousy compression
      ratio) for industry-wide adoption.
      <br />
      AVIF changes that. This relatively new format’s significant low-fidelity
      compression, file sizes are significantly smaller with AVIF than GIFs of
      the same quality. This allows for animated images to finally have the
      fidelity and resolution of videos while remaining in an easy-to-deliver
      image format. With support for HDR images and 12-bit color, AVIF has
      better image quality and is much more capable than GIF. Parallelization
      offers some neat encoding and decode speed gains through multi-threading,
      especially as single-core (and even dual-core) processors have become a
      thing of the past. The most significant thing holding it back is the lack
      of browser support. However, with the big players in web browsing working
      on bringing sequenced AVIF support to users worldwide,
      <b>
        we expect AVIF to become the dominant image format for both still and
        animated images for the web.
      </b>
      <br />
      <H level={2} callback={callback} text="Summary for Marketeers" />
      Animated GIFs have had quite a resurgence in recent years. We expect the
      demand for animated images only to grow as the web becomes more
      interactive. However, the GIF format
      <b>is too limited to deliver high-quality animated images</b>
      , and that’s where AVIF steps in to solve this problem.
      <br />
      <b>
        Animated AVIF images have much smaller file sizes and can take advantage
        of multi-core processors
      </b>
      . These two features combined make AVIF animations much faster to load.
      The reduced file size alleviates the stress of bandwidth limits and data
      caps. This is because AVIF images can be compressed much more efficiently
      while still retaining the image quality. This allows image makers to
      upload better quality and higher resolution animated images without
      worrying about data size limitations.
      <br />
      The biggest downside currently to AVIF is its lack of support from some
      key web browsers. Google Chrome fully supports AVIF. However, Firefox and
      Safari have yet to support animated GIFs.
      <br />
      <H level={2} callback={callback} text="Video formats still win" />
      Since animated image files can be quite large, most platforms that host
      short videos do not use GIFs or other animated image files. For example,
      Twitter converts animated GIF files to video file formats such as MP4 in
      order to reduce the overall file size. In fact, even GIPHY, an online
      video search engine and directory specializing in short loops without
      audio, uses MP4 video files.
      <br />
      The good news is that this is another area where significant results can
      be achieved with relatively little effort. You can reduce your bandwidth
      requirements by converting large GIFs to videos. A video must be able to
      reproduce the following three characteristics of animated GIFs:
      <br />
      <Checklist
        items={[
          "Playing automatically",
          "Looping continuously",
          "Being silent",
        ]}
        checked={true}
      />
      Fortunately, these behaviors are easily replicated using the video
      element.
      <br />
      <Syntax language="html">
        {`<video autoplay loop muted playsinline></video>`}
      </Syntax>
      <br />
      <H level={2} callback={callback} text="Conclusion" />
      It’s been quite 35 years for GIF, but it’s now high time to replace the
      aging image format. AVIF has all the qualities to be a strong contender
      for its replacement for animated image delivery. Still, the web will most
      likely keep favoring real video formats due to their compression to
      quality ratio.
      <br />
    </Blog>
  );
}
