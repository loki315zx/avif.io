import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import meta from "@lib/meta.json";
import Blog from "@components/Blog";
import { useState } from "react";

export default function BlogPost() {
  const [contentTable, setContentTable] = useState<ContentTableEntry[]>([]);

  function contentTableCallback(entry: ContentTableEntry) {
    contentTable.push(entry);
    setContentTable([...contentTable]);
  }

  return (
    <Blog postMeta={meta.avifVsPng} posts={[meta.tutCss, meta.tutHtml, meta.avifVsJpg]}>
      <ContentTable contentTable={contentTable} />
      <H contentTableCallback={contentTableCallback} level={2} text="Introduction" />
      For years, the go-to image codec for users looking to save their work in a high-quality,
      raster file format with transparency has been PNG or Portable Network Graphics. Designed in
      1996, PNG is a lossless format that supports alpha channels – making it loved by those working
      with bitmap graphics. <br />
      AVIF is an image format that is derived from the frames of AV1 video. It’s a reasonably novel
      file format, having been initially released in 2019. Let’s see how this brand-new file format
      stacks up against PNG:
      <H contentTableCallback={contentTableCallback} level={2} text="Quality and Limits" />
      Let’s first look at the limitations of both file formats. AVIF has a maximum image resolution
      of 8193 x 4320. As a file format derived from a video codec, this limitation makes sense as
      it’s an 8K video frame size. It is possible to break this limit using AVIF using independently
      encoded tiles. Still, there tend to be artifacts at the tile boundaries. In practice, you’ll
      want to limit any AVIF image to an 8K video frame.
      <br />
      PNG has a theoretical resolution limit of 2,147,483,647 x 2,147,483,647 pixels or 2500
      megapixels. I think it’s safe to say no one is going to reach that in their day-to-day work.
      <br />
      AVIF offers 10-bit precision, while PNG offers a 16-bit max bit depth. In reality, 10-bit
      precision is enough for image delivery, and most image designers aren’t going to make use of
      the extra bits. Both PNG and AVIF offer support for HDR and wide color gamuts.
      <H contentTableCallback={contentTableCallback} level={2} text="Compression" />
      As a lossless compression file format, PNG images are notorious for their large file sizes.
      AVIF supports both lossy and lossless compression. It is this versatility that gives AVIF an
      edge when it comes to file sizes. <br />
      For lossless compression, Reddit user Balance found that PNG is significantly more efficient
      in file size when comparing an input PNG and an output AVIF file. For example, one 21,265kb
      input PNG was converted to an AVIF file of 42,503kb. If you’re looking for a lossless file
      format, PNG is much more size efficient. <br />
      Where AVIF pulls ahead, though, is with its lossy compression. AVIF performs excellently with
      low-fidelity photos – common for web images – with file sizes beating JPEG. Highly compressed
      AVIF images have great “appeal,” meaning they don’t include many compression artifacts like
      color banding. AVIF is excellent if you want to convert a PNG for sharing on the Internet
      without any noticeable drop in image quality.
      <H contentTableCallback={contentTableCallback} level={2} text="Speed" />
      Decoding a PNG is almost instant, thanks to the lack of complexity in the format. In fact,
      with the large file size, any perceived slowness in accessing a PNG shared on the Internet is
      more likely going to be a problem with Internet speed rather than the computation power needed
      to decode the image.
      <br />
      Newer file formats like AVIF tend to be more complex. Therefore slower systems may struggle a
      bit more to decode the image. Single-core decode speed for AVIFs can be significantly slower
      than PNG. AVIF, however, struggles with encode speed on single-threaded machines. However,
      AVIF is very parallelizable, allowing multiple cores and multiple threads to ‘pitch-in’ to
      help encode and decode. PNG is a sequential codec and therefore can’t take advantage of
      multicore machines. As computer processors tend towards more cores and threads, AVIF looks
      much more future-proof with proper multicore performance.
      <H contentTableCallback={contentTableCallback} level={2} text="Other Features" />
      PNG is traditionally a still image format, with GIF traditionally being used non-video
      animated images. A newer addition to the mix is the animated PNG (aPNG) format now supported
      by most browsers. Compared to GIF, aPNG allows for transparency and smaller file sizes for
      comparable image quality.
      <br />
      As AVIF is based on a video codec AV1, AVIF is well-positioned for animation. Storing image
      sequences with AVIF is therefore efficient and easy. <br />
      AVIF doesn’t support progressive decoding, a process of decoding an image where portions of an
      image are incrementally decoded from an incomplete image file. This allows for lower-quality
      preview images to be shown before the image has been fully decoded. This improves the user
      experience when viewing images from the Internet, as a browser does not need to wait for the
      whole image to download before decoding can begin. PNG does offer progressive decoding,
      potentially making it better for viewing lossless compressed images on the Internet.
      <br />
      Both PNG and AVIF support alpha transparency. However, AVIF also supports depth maps allowing
      for effects to be applied and overlays. Overlays allow for images to have multiple layers.
      This is great if you have a non-image element on top of a background image. This can be
      included on a separate layer to ensure crispness.
      <H contentTableCallback={contentTableCallback} level={2} text="Support" />
      As a widely used format since the late 1990s, all major browsers support PNG. It is the
      de-facto choice for lossless compression and alpha transparency. There are no browser support
      issues with PNG – although any web designer using PNG images on their webpages should consider
      download times for users with slow or metered connections. It usually isn’t wise to use
      lossless compression for web delivery.
      <br />
      As a relatively new image format, AVIF struggles when it comes to browser support. Google
      Chrome has supported AVIF since Chrome 85. At the same time, Opera and Samsung Internet have
      also implemented full support for still and sequenced images. Firefox doesn’t officially
      support AVIF, but it can be enabled in about:config and doesn’t include sequenced (animated)
      image support. In reality, users aren’t going to want to change their browser configurations
      to view your site. AVIF isn’t currently supported by Microsoft Edge, Internet Explorer or
      Safari. For browser support, PNG clearly wins out.
      <H contentTableCallback={contentTableCallback} level={2} text="Summary for Nerds" />
      AVIF is an emerging format and offers some significant benefits in low-fidelity, high-appeal
      image delivery. Compared to JPEG with a similar compression ratio, AVIF images have a lot
      fewer artifacts like color banding, making it ideal if you’ve got a PNG you want to convert
      for web delivery.
      <br />
      AVIF does offer some significant advantages like overlay support and high dynamic range
      support. Colorists will love its wide color gamut support, including NCLX support: sRGB,
      linear sRGB, linear Rec2020, etc. PNG has a higher max bit depth; however, this isn’t usually
      a problem for photo delivery. Sequencing for animation is easier with AVIF than with PNG,
      beating out the somewhat clunky aPNG format.
      <br />
      PNG’s lack of lossy compression makes it difficult to use on the web. AVIF’s lower file sizes
      and retained image quality with lossy compression makes it a great alternative to use –
      forgoing JPEG’s horrible compression. The biggest drawback of AVIF its low current uptake.
      However, with the features to become a dominant file format in the future, we expect this to
      change and be widely supported.
      <H contentTableCallback={contentTableCallback} level={2} text="Summary for Marketeers" />
      AVIF offers similar quality of images as PNG at reduced file size. As computers focus on more
      cores and threads, we can also expect for AVIFs to begin to have faster decoding times,
      improving how quickly your image downloads.
      <br />
      AVIF images also support transparency, making it a great alternative to PNG if you need to
      download or share a picture with a transparent background. Its ability to have multiple layers
      makes it easy to export text as an overlay to maximize performance. Effects can also be added
      to AVIF images.
      <br />
      The AVIF format is feature-rich, and we expect it to become viral in the years to come. As
      browser support improves over time, we expect AVIF to become the dominant image format for use
      on the web.
      <H contentTableCallback={contentTableCallback} level={2} text="Conclusion" />
      Currently, PNG still holds its crown for lossless compression with reduced file sizes and
      greater browser support. AVIF is an excellent alternative for web delivery if you’re willing
      to turn to lossy compression to reduce the file size. AVIF compresses very well, and the high
      quality of images that undergo lossy compression makes this file format perfect for taking the
      web by storm. Browser support is currently limited, but over time as uptake increases, we
      expect support to improve and for AVIF to become the dominant format for web delivery.
    </Blog>
  );
}
