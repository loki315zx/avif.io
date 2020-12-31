import Blog from "@components/Blog";
import {
  BlogSubtitle,
  BlogAdvantages,
  BlogSyntax,
  BlogNote,
  BlogLink,
} from "@components/BlogComponents";
const postdata = {
  title: "",
  description: "",
  url: "",
  image: "",
  keywords: [""],
  author: "Justin Schmitz",
  data_published: "16.12.20",
  date_modified: "22.12.20",
  sources: [""],
  tags: [""],
  questions: [""],
};

const posts = [
  {
    url: "#",
    title: "#",
    date_modified: "#",
    description: "#",
  },
  {
    url: "#",
    title: "#",
    date_modified: "#",
    description: "#",
  },
  {
    url: "#",
    title: "#",
    date_modified: "#",
    description: "#",
  },
];

const advantages = [
  "fixes WebP biggest flaws",
  "uses the next generation VP10 video codec",
  "is not limited to 8-bit color depth and support 12-bit color",
  "support high dynamic range",
  "uses chrome-from-luma compression technique for smaller file size",
  "is already seeing faster adoption than previous royalty-free codecs",
  "is a feature-rich format with lots of possibilities",
  "already has multiple independent implementations like rav1e (we use this for avif.io!)",
];

export default function BlogAvifInCloudflare() {
  return (
    <Blog postdata={postdata} posts={posts}>
      <BlogSubtitle id="introduction" text="Overall Introduction" />
      AV1 Image File Format (AVIF) is a powerful new, open source, royalty-free file format that
      encodes AV1 bitstreams in the High Efficiency Image File Format (HEIF) container. Note: AVIF
      has potential to become the "next big thing" for sharing images in web content. It offers
      state-of-the-art features and performance, without the encumbrance of complicated licensing
      and patent royalties that have hampered comparable alternatives. // AOMedia Video 1 (AV1) is
      an open, royalty-free video coding format initially designed for video transmissions over the
      Internet. It was developed as a successor to VP9 by the Alliance for Open Media (AOMedia),[2]
      a consortium founded in 2015 that includes semiconductor firms, video on demand providers,
      video content producers, software development companies and web browser vendors. The AV1
      bitstream specification includes a reference video codec.[1] In 2018 Facebook conducted
      testing that approximates real world conditions, the AV1 reference encoder achieved 34%, 46.2%
      and 50.3% higher data compression than libvpx-vp9, x264 high profile, and x264 main profile
      respectively. Like VP9, but unlike H.264/AVC and HEVC, AV1 has a royalty-free licensing model
      that does not hinder adoption in open-source projects.[3][4][5][6][2][7] AV1 Image File Format
      (AVIF) is an image file format that uses AV1 compression algorithms. // Page speed is a big
      thing. From a search engine optimization perspective, and user perspective. And it’s not me
      who’s saying this, it’s Google, and Moz, and SEMrush and every major SEO site out there. Now
      when we talk about page speed, the biggest challenge for developers is always images. They are
      the bane of their existence and are usually the primary blame point when we talk about slow
      page load. That is one of the reasons why every developer is always looking for an image
      format that can improve their image compression. And AVIF has arrived to do just that. AVIF
      Image Format can address images compressed with AV1 (AOMedia Video 1) algorithm. As compared
      to other compression codecs like JPEG, PNG, WebP, etc., it produces high quality compressed
      images without compromising much on quality. Developed by the Alliance for Open Media, it is a
      successor to VP9 and promises to be a game-changer in image compression. With major companies
      supporting this format, the AVIF image format’s future is looking very bright. Jake Archibald,
      developer advocate for Google Chrome wrote a great post on why AVIF is great and you can check
      out a live demo on his site on why AVIF is so awesome. // AVIF is a combination of the HEIF
      ISO standard, and a royalty-free AV1 codec by Mozilla, Xiph, Google, Cisco, and many others.
      Currently JPEG is the most popular image format on the Web. It's doing remarkably well for its
      age, and it will likely remain popular for years to come thanks to its excellent
      compatibility. There have been many previous attempts at replacing JPEG, such as JPEG 2000,
      JPEG XR and WebP. However, these formats offered only modest compression improvements, and
      didn't always beat JPEG on image quality. Compression and image quality in AVIF is better than
      in all of them, and by a wide margin. // The major application for high quality compression of
      photos is Internet speed. While bandwidth does continue to increase each year, so does the
      quality and size of most Internet media. What that means is that even though data can be
      transferred more quickly, the need for compressing media into smaller files without losing
      visual quality has not gone away. In fact, the need for an effective compressing tool may have
      even grown. With that said, many people assume that there are multiple resources available for
      compressing photos. Options such as JPEG 2000, WebP, and HEIF are all available and have
      experienced success in one form or another. The most promising compression tool right now was
      developed by the Alliance for Open Media on its AV1 format and is called AVIF. Being worked on
      by companies like Netflix and Microsoft, AVIF is showing some impressive signs of being the
      next step in the compression market. // The AV1 Image format, or AVIF, is the latest image
      codec on earth. AVIF is an optimized image format which was created to make our images smaller
      while keeping the same quality (lossless). The file extension for AVIF is .avif. // AVIF is an
      image file format developed by Alliance for Open Media which is supposed to make our images
      smaller while keeping the same image quality. Experts believe that it is the next step in
      media compression. AOMedia’s goal is to develop open, royalty-free technology for multimedia
      delivery, which means that nobody will have to pay anybody to use the new AVIF format (as
      opposed to JPG, for example). Behind AOMedia we find big companies like Netflix, Google,
      Facebook, Apple or Microsoft. We could say that, currently, the most popular image file
      formats for web are JPG and PNG. A few years ago, WebP came on the scene, developed by Google,
      delivering images 30% smaller than JPG, keeping the same image quality. Now, AVIF promises
      images 50% smaller than JPG, and still keeping the same image quality.
      <BlogSubtitle id="otherformats" text="Compression" />
      First of all, why use better compression, doesn’t network bandwidth increase every year? Why
      media industry continues to push requirements for codec standards with even higher compression
      ratio? There are three major reasons for that: Network coverage. While you’re achieving 20
      Gbps near the 5G cell, there are many places in town where speed isn’t that great at all.
      Traffic cost. Even if you download fast, most telcos charge you for every byte of data. Higher
      resolution and quality. Need at least 8K for 12.9” tablet for human-eye resolution, ideally
      lossless. We are not there yet. For example I browse web in underground a lot and inside
      tunnel fantastic LTE Advanced transforms into ridiculous 100 Kbit/s. On the forum that I host
      and regularly visit users upload photos mostly without any preprocessing, so usual picture
      takes 1–4 MBs, quite a lot if you open bunch of them every now and then. And it would be
      strange to prefer 800×1200 to 2000×3000 (typical resolutions of exported photos) because the
      latter looks much nicer on high DPI display. So higher compression is essential, but don’t we
      already have tons of solutions for that? What about WebP based on VP8 format that is meant to
      be replacement of JPEG and just recently gained support in most browsers? Also there are many
      other candidates, e.g. JPEG 2000, JPEG XR, and finally HEIF based on HEVC video codec
      standard. Another thing worth to be noted, 800×1200 photos taking 4 MB are clearly not
      optimized, even with normal JPEG we may compress them down to ~500 KB without losing visual
      quality much. And even more with state of the art JPEG encoders such as mozjpeg and guetzli.
      MSU Codec Comparison (April 4, 2019) Well, it seems that coding tools of AV1, the new video
      coding format developed by Alliance for Open Media, are the most promising at the moment to
      get highest compression possible, especially at low bit-rates. See e.g. this and this
      benchmarks. Since we would need to re-compress images anyway to get benefits of new format,
      why not choose the best? If you’re interested in leveraging AV1 for video compression, take a
      look at my previous article dedicated to this subject. Another advantage of AV1 is that it’s a
      royalty-free format which means you don’t have to pay to patent-holders. For what it’s worth
      software patents is unfortunately still a thing. Formats like JPEG XR didn’t achieve great
      adoption mostly because of patents involved. So AV1-based solutions are attractive from both
      technical and legal points of view.
      <BlogSubtitle id="otherformats" text="Introduction to other formats" />
      <BlogSubtitle id="aom" text="Alliance of Open Media" />
      <BlogSubtitle id="aom" text="Introduction to video formats" />
      A video codec is a software or a tool that executes specific compression algorithms on the
      data (such as a video) and produces similar content but smaller in size (similar content does
      not mean similar quality). A similar situation can be correlated while analyzing time and
      space in computer science. Like a time-space tradeoff, a simple quality-data tradeoff is a
      popular villain in deducing and inventing the compression algorithm. If you are raising your
      bar for quality, the content will have to sacrifice the data limit. But as for computer
      scientists and most people, compression is applied only to decrease the size. So definitely,
      we cannot compromise on that parameter. The only way to achieve it is to compromise on the
      quality. We call it a lossy compression, while the one in which we are producing no loss
      during compression and decompression is called lossless compression. All the previous
      compression algorithms did the same when the word “compression” was relatively new, and all
      that the scientist wanted to do was adjust a video into a compact disk more than its size. The
      journey of video codecs begins with H.261, a technique which most of you might not have heard
      because of its low efficiency and a laying stone in the compression world. You might know all
      the algorithms that followed the footsteps of H.261. In 1992, Joint Photographic Experts Group
      (JPEG) became a standard for compressing the images and sending them over to the wires just
      like any other thing in those days. Scientists could squeeze a video size using the same
      algorithm, considering them as “moving pictures,” giving rise to a newer algorithm for
      compressing the videos called Moving Pictures Expert Group or MPEG. These algorithms are well
      known as extensions of their files, and JPEG was such a hit that it is still a part of most
      images. Although we will not cover every codec in this article, the gist of what we tried to
      convey here is that firstly, codecs have been with us for a long time and are improving every
      day. Secondly, codecs play an essential part in our daily life, from surfing to capturing a
      photo on our mobiles. The image you see at the top of this page is compressed and then shown
      by the transmission channels with the browser support. Browser compatibility is another thing
      we need to look on, as different browsers can display a particular image differently. Thirdly,
      video codecs, and image codecs rely on almost similar algorithms with slight variations. Since
      the base procedure remains the same, they are often named identical to each other. With this,
      we will explore more codecs in this article. However, to understand the algorithm’s
      significant parameters, you can go through a good research paper for reference.
      <BlogSubtitle id="codec" text="Introduction of the AV1 Codec" /> AV1 is a coding format that
      was originally designed for video transmission over the Internet. The format benefits from the
      signficant advances in video encoding in recent years, and may potentially benefit from the
      associated support for hardware rendering. However it also has disadvantages for some cases,
      as video and image encoding have some different requirements. // AV1 is the most recent video
      codec developed by Alliance for Open Media and hence the name AOMedia Video 1 codec (AV1
      codec). The development of the AV1 video codec resulted from the collaboration between Google,
      Xiph, and Cisco, who decided to combine their in-house video codecs into one single open,
      royalty-free video codec to benefit everyone. Being royalty-free has been the highlighted
      feature for AV1 since every other codec had a portion of royalties (except WebP). Therefore,
      unlike JPEG, which was neither open nor royalty-free, AV1 has seen much faster progress and a
      wider adoption among the top tech companies, including Google. The idea behind designing AV1
      was to transmit the video over the internet. With a greater compression reach for the video
      and reducing the number of overall bits, AV1 codec provides multiple coding techniques that
      enable the encoders to use various inputs for their missions. If you wonder why we brought
      this concept of video compression technique into an image compression post, video, and image
      codec share similarities between them because of the same nature of the data. AV1 codec has
      proved very advantageous for the internet by saving the bandwidth, which MPEG could not do,
      although JPEG XR was still in the race but not as effective as AV1. When tech companies such
      as Facebook and other video streaming websites started using AV1, the company decided to bring
      an image format with the same efficiency and based on the same codec. AV1 codec is the
      foundation of the AVIF image format that is taking the internet by storm.
      <BlogSubtitle id="purpose" text="History" />
      The Alliance's motivations for creating AV1 included the high cost and uncertainty involved
      with the patent licensing of HEVC, the MPEG-designed codec expected to succeed AVC.[8][6]
      Additionally, the Alliance's seven founding members – Amazon, Cisco, Google, Intel, Microsoft,
      Mozilla and Netflix – announced that the initial focus of the video format would be delivery
      of high-quality web video.[9] The official announcement of AV1 came with the press release on
      the formation of the Alliance for Open Media on 1 September 2015. Only 42 days before, on 21
      July 2015, HEVC Advance's initial licensing offer was announced to be an increase over the
      royalty fees of its predecessor, AVC.[10] In addition to the increased cost, the complexity of
      the licensing process increased with HEVC. Unlike previous MPEG standards where the technology
      in the standard could be licensed from a single entity, MPEG-LA, when the HEVC standard was
      finished, two patent pools had been formed with a third pool was on the horizon. In addition,
      various patent holders were refusing to license patents via either pool, increasing
      uncertainty about HEVC's licensing. According to Microsoft's Ian LeGrow, an open-source,
      royalty-free technology was seen as the easiest way to eliminate this uncertainty around
      licensing.[8] The negative effect of patent licensing on free and open-source software has
      also been cited as a reason for the creation of AV1.[6] For example, building an H.264
      implementation into Firefox would prevent it from being distributed free of charge since
      licensing fees would have to be paid to MPEG-LA.[11] Free Software Foundation Europe has
      argued that FRAND patent licensing practices make the free software implementation of
      standards impossible due to various incompatibilities with free software licenses.[7] Many of
      the components of the AV1 project were sourced from previous research efforts by Alliance
      members. Individual contributors started experimental technology platforms years before:
      Xiph's/Mozilla's Daala already published code in 2010, Google's experimental VP9 evolution
      project VP10 was announced on 12 September 2014,[12] and Cisco's Thor was published on 11
      August 2015. Building on the code base of VP9, AV1 incorporates additional techniques, several
      of which were developed in these experimental formats.[13] The first version 0.1.0 of the AV1
      reference codec was published on 7 April 2016. Although a soft feature freeze came into effect
      at the end of October 2017, development continued on several significant features. One of
      these in-progress features, the bitstream format, was projected to be frozen in January 2018
      but was delayed due to unresolved critical bugs as well as further changes to transformations,
      syntax, the prediction of motion vectors, and the completion of legal analysis.[citation
      needed] The Alliance announced the release of the AV1 bitstream specification on 28 March
      2018, along with a reference, software-based encoder and decoder.[14] On 25 June 2018, a
      validated version 1.0.0 of the specification was released.[15] On 8 January 2019 a validated
      version 1.0.0 with Errata 1 of the specification was released. Martin Smole from AOM member
      Bitmovin said that the computational efficiency of the reference encoder was the greatest
      remaining challenge after the bitstream format freeze had been completed.[16] While still
      working on the format, the encoder was not targeted for production use and speed optimizations
      were not prioritized. Consequently, the early version of AV1 was orders of magnitude slower
      than existing HEVC encoders. Much of the development effort was consequently shifted towards
      maturing the reference encoder. In March 2019, it was reported that the speed of the reference
      encoder had improved greatly and within the same order of magnitude as encoders for other
      common formats.[17]
      <BlogSubtitle id="purpose" text="Purpose" />
      AV1 aims to be a video format for the web that is both state of the art and royalty free.[2]
      The mission of the Alliance for Open Media is the same as that of the WebM project. A
      recurring concern in standards development, not least of royalty-free multimedia formats, is
      the danger of accidentally infringing on patents that their creators and users didn't know
      about. The concern has been raised regarding AV1,[18] and previously VP8,[19] VP9,[20]
      Theora[21] and IVC.[22] The problem is not unique to royalty-free formats, but it uniquely
      threatens their status as royalty-free. To fulfill the goal of being royalty free, the
      development process requires that no feature can be adopted before it has been confirmed
      independently by two separate parties to not infringe on patents of competing companies. In
      cases where an alternative to a patent-protected technique is not available, owners of
      relevant patents have been invited to join the Alliance (even if they were already members of
      another patent pool). For example, Alliance members Apple, Cisco, Google, and Microsoft are
      also licensors in MPEG-LA's patent pool for H.264.[18] As an additional protection for the
      royalty-free status of AV1, the Alliance has a legal defense fund to aid smaller Alliance
      members or AV1 licensees in the event they are sued for alleged patent
      infringement.[18][5][23] Under patent rules adopted from the World Wide Web Consortium (W3C),
      technology contributors license their AV1-connected patents to anyone, anywhere, anytime based
      on reciprocity (i.e. as long as the user does not engage in patent litigation).[24] As a
      defensive condition, anyone engaging in patent litigation loses the right to the patents of
      all patent holders.[citation needed][25] This treatment of intellectual property rights (IPR),
      and its absolute priority during development, is contrary to extant MPEG formats like AVC and
      HEVC. These were developed under an IPR uninvolvement policy by their standardization
      organisations, as stipulated in the ITU-T's definition of an open standard. However, MPEG's
      chairman has argued this practice has to change,[26] which it is:[citation needed] EVC is also
      set to have a royalty-free subset,[27][28] and will have switchable features in its bitstream
      to defend against future IPR threats.[citation needed] The creation of royalty-free web
      standards has been a long-stated pursuit for the industry. In 2007, the proposal for HTML5
      video specified Theora as mandatory to implement. The reason was that public content should be
      encoded in freely implementable formats, if only as a "baseline format", and that changing
      such a baseline format later would be hard because of network effects.[29] The Alliance for
      Open Media is a continuation of Google's efforts with the WebM project, which renewed the
      royalty-free competition after Theora had been surpassed by AVC. For companies such as Mozilla
      that distribute free software, AVC can be difficult to support as a per-copy royalty easily is
      unsustainable given the lack of revenue stream to support these payments in free software (see
      FRAND § Excluding costless distribution).[3] Similarly, HEVC has not successfully convinced
      all licensors to allow an exception for freely distributed software (see HEVC § Provision for
      costless software). The performance goals include "a step up from VP9 and HEVC" in efficiency
      for a low increase in complexity. NETVC's efficiency goal is 25% improvement over HEVC.[30]
      The primary complexity concern is for software decoding, since hardware support will take time
      to reach users. However, for WebRTC, live encoding performance is also relevant, which is
      Cisco's agenda: Cisco is a manufacturer of videoconferencing equipment, and their Thor
      contributions aim at "reasonable compression at only moderate complexity".[31] Feature wise,
      AV1 is specifically designed for real-time applications (especially WebRTC) and higher
      resolutions (wider color gamuts, higher frame rates, UHD) than typical usage scenarios of the
      current generation (H.264) of video formats, where it is expected to achieve its biggest
      efficiency gains. It is therefore planned to support the color space from ITU-R Recommendation
      BT.2020 and up to 12 bits of precision per color component.[32] AV1 is primarily intended for
      lossy encoding, although lossless compression is supported as well.[33]
      <BlogSubtitle id="purpose" text="Technology" />
      AV1 is a traditional block-based frequency transform format featuring new techniques. Based on
      Google's VP9,[34] AV1 incorporates additional techniques that mainly give encoders more coding
      options to enable better adaptation to different types of input. The Alliance published a
      reference implementation written in C and assembly language (aomenc, aomdec) as free software
      under the terms of the BSD 2-Clause License.[36] Development happens in public and is open for
      contributions, regardless of AOM membership. The development process was such that coding
      tools were added to the reference code base as experiments, controlled by flags that enable or
      disable them at build time, for review by other group members as well as specialized teams
      that helped with and ensured hardware friendliness and compliance with intellectual property
      rights (TAPAS). When the feature gained some support in the community, the experiment was
      enabled by default, and ultimately had its flag removed when all of the reviews were
      passed.[37] Experiment names were lowercased in the configure script and uppercased in
      conditional compilation flags.[citation needed] To better and more reliably support HDR and
      color spaces, corresponding metadata can now be integrated into the video bitstream instead of
      being signaled in the container.
      <BlogSubtitle id="purpose" text="Partitioning" />
      Frame content is separated into adjacent same-sized blocks referred to as superblocks. Similar
      to the concept of a macroblock, superblocks are square-shaped and can either be of size
      128×128 or 64×64 pixels. Superblocks can be divided in smaller blocks according to different
      partitioning patterns. The four-way split pattern is the only pattern whose partitions can be
      recursively subdivided. This allows superblocks to be divided into partitions as small as 4×4
      pixels. Diagram of the AV1 superblock partitioning. It shows how 128×128 superblocks can be
      split all the way down to 4×4 blocks. As special cases, 128×128 and 8×8 blocks can't use 1:4
      and 4:1 splits, and 8×8 blocks can't use "T"-shaped splits. "T-shaped" partitioning patterns
      are introduced, a feature developed for VP10, as well as horizontal or vertical splits into
      four stripes of 4:1 and 1:4 aspect ratio. The available partitioning patterns vary according
      to the block size, both 128×128 and 8×8 blocks can't use 4:1 and 1:4 splits. Moreover, 8×8
      blocks can't use "T" shaped splits. Two separate predictions can now be used on spatially
      different parts of a block using a smooth, oblique transition line (wedge-partitioned
      prediction).[citation needed] This enables more accurate separation of objects without the
      traditional staircase lines along the boundaries of square blocks. More encoder parallelism is
      possible thanks to configurable prediction dependency between tile rows (ext_tile).[38]
      <BlogSubtitle id="purpose" text="Prediction" />
      AV1 performs internal processing in higher precision (10 or 12 bits per sample), which leads
      to compression improvement due to smaller rounding errors in reference imagery. Predictions
      can be combined in more advanced ways (than a uniform average) in a block (compound
      prediction), including smooth and sharp transition gradients in different directions
      (wedge-partitioned prediction) as well as implicit masks that are based on the difference
      between the two predictors. This allows combination of either two inter predictions or an
      inter and an intra prediction to be used in the same block.[39][citation needed] A frame can
      reference 6 instead of 3 of the 8 available frame buffers for temporal (inter) prediction
      while providing more flexibility on bi-prediction[40] (ext_refs[citation needed]).
      File:Bergensbanen 1280x720.ogvPlay media Warped motion as seen from the front of a train. The
      Warped Motion (warped_motion)[38] and Global Motion (global_motion[citation needed]) tools in
      AV1 aim to reduce redundant information in motion vectors by recognizing patterns arising from
      camera motion.[38] They implement ideas that were tried to be exploited in preceding formats
      like e.g. MPEG-4 ASP, albeit with a novel approach that works in three dimensions. There can
      be a set of warping parameters for a whole frame offered in the bitstream, or blocks can use a
      set of implicit local parameters that get computed based on surrounding blocks. Switch frames
      (S-frame) are a new inter-frame type that can be predicted using already decoded reference
      frames from a higher-resolution version of the same video to allow switching to a lower
      resolution without the need for a full keyframe at the beginning of a video segment in the
      adaptive bitrate streaming use case.[41]
      <BlogSubtitle id="purpose" text="Intra Prediction" />
      Intra prediction consists of predicting the pixels of a given blocks only using information
      available in the current frame. Most often, intra predictions are built from the neighboring
      pixels above and to the left of the predicted block. The DC predictor builds a prediction by
      averaging the pixels above and to the left of block. Directional predictors extrapolate these
      neighboring pixels according to a specified angle. In AV1, 8 main directional modes can be
      chosen. These modes start at an angle of 45 degrees and increase by a step size of 22.5
      degrees up until 203 degrees. Furthermore, for each directional mode, six offsets of 3 degree
      can be signaled for bigger blocks, three above the main angle and three below it, resulting in
      a total of 56 angles (ext_intra). The "TrueMotion" predictor got replaced with a Paeth
      predictor which looks at the difference from the known pixel in the above left corner to the
      pixel directly above and directly left of the new one and then chooses the one that lies in
      direction of the smaller gradient as predictor. A palette predictor is available for blocks
      with very few (up to 8, dominant) colors like in some computer screen content. Correlations
      between the luminosity and the color information can now be exploited with a predictor for
      chroma blocks that is based on samples from the luma plane (cfl).[38] In order to reduce
      visible boundaries along borders of inter-predicted blocks, a technique called overlapped
      block motion compensation (OBMC) can be used. This involves extending a block's size so that
      it overlaps with neighboring blocks by 2 to 32 pixels, and blending the overlapping parts
      together.[42]
      <BlogSubtitle id="purpose" text="Filters" />
      For the in-loop filtering step, the integration of Thor's constrained low-pass filter and
      Daala's directional deringing filter has been fruitful: The combined Constrained Directional
      Enhancement Filter (cdef[citation needed]) exceeds the results of using the original filters
      separately or together.[citation needed] It is an edge-directed conditional replacement filter
      that smooths blocks with configurable (signaled) strength roughly along the direction of the
      dominant edge to eliminate ringing artifacts. There is also the loop restoration filter
      (loop_restoration) based on the Wiener filter and self-guided restoration filters to remove
      blur artifacts due to block processing.[38] Film grain synthesis (film_grain) improves coding
      of noisy signals using a parametric video coding approach. Due to the randomness inherent to
      film grain noise, this signal component is traditionally either very expensive to code or
      prone to get damaged or lost, possibly leaving serious coding artifacts as residue. This tool
      circumvents these problems using analysis and synthesis, replacing parts of the signal with a
      visually similar synthetic texture, based solely on subjective visual impression instead of
      objective similarity. It removes the grain component from the signal, analyzes its non-random
      characteristics, and instead transmits only descriptive parameters to the decoder, which adds
      back a synthetic, pseudorandom noise signal that's shaped after the original component. It is
      the visual equivalent of the Perceptual Noise Substitution technique used in AC3, AAC, Vorbis,
      and Opus audio codecs.
      <BlogSubtitle id="purpose" text="Quality and efficiency of AV1" />
      A first comparison from the beginning of June 2016[46] found AV1 roughly on par with HEVC, as
      did one using code from late January 2017.[47] In April 2017, using the 8 enabled experimental
      features at the time (of 77 total), Bitmovin was able to demonstrate favorable objective
      metrics, as well as visual results, compared to HEVC on the Sintel and Tears of Steel short
      films.[48] A follow-up comparison by Jan Ozer of Streaming Media Magazine confirmed this, and
      concluded that "AV1 is at least as good as HEVC now".[49] Ozer noted that his and Bitmovin's
      results contradicted a comparison by Fraunhofer Institute for Telecommunications from late
      2016[50] that had found AV1 65.7% less efficient than HEVC, underperforming even H.264/AVC
      which they concluded as being 10.5% more efficient, and justified this discrepancy by having
      used encoding parameters endorsed by each encoder vendor, as well as having more features in
      the newer AV1 encoder.[50] Decoding performance was at about half the speed of VP9 according
      to internal measurements from 2017.[41] Tests from Netflix in 2017, based on measurements with
      PSNR and VMAF at 720p, showed that AV1 was about 25% more efficient than VP9 (libvpx).[51]
      Tests from Facebook conducted in 2018, based on PSNR, showed that the AV1 reference encoder
      was able to achieve 34%, 46.2% and 50.3% higher data compression than libvpx-vp9, x264 high
      profile, and x264 main profile respectively.[52][53] Tests from Moscow State University in
      2017 found that VP9 required 31% and HEVC 22% more bitrate than AV1 in order to achieve
      similar levels of quality.[54] The AV1 encoder was operating at a speed "2500–3500 times lower
      than competitors" due to the lack of optimization (which was not available at that time).[55]
      Tests from University of Waterloo in 2020 found that when using a mean opinion score (MOS) for
      2160p (4K) video AV1 had bitrate saving of 9.5% compared to HEVC and 16.4% compared to VP9.
      They also however concluded that at the time of the study at 2160p the AV1 video encodes on
      average took 590.74× longer compared to encoding with AVC, HEVC took on average 4.2810× longer
      and VP9 took on average 5.2856× longer than AVC respectively.[56][57] The latest encoder
      comparison by Streaming Media Magazine as of September 2020, which used moderate encoding
      speeds, VMAF, and a diverse set of short clips, indicated that the open-source libaom and
      SVT-AV1 encoders took about twice as long time to encode as x265 in its "veryslow" preset
      while using 15-20% less bitrate, or about 45% less bitrate than x264 veryslow. The
      best-in-test AV1 encoder, Visionular's Aurora1, in its "slower" preset, was as fast as x265
      veryslow while saving 50% bitrate over x264 veryslow.[58]
      <BlogSubtitle id="browsers" text="Current Operating System Support" />
      Microsoft Windows: - Support introduced in Windows 10 October 2018 Update (1809) with AV1
      Video Extension add-on.[94] - Supported on Universal Windows Platform apps like Microsoft Edge
      and Films & TV. macos: No supported as of MacOS Catalina. BSD / Linux: Supported. Chrome OS:
      Supported from Chrome OS 70 onward. Android OS. Supported since Android 10. iOS: Unsupported
      as of ios13.
      <BlogSubtitle id="browsers" text="Current Software Support" />
      Firefox (since version 67.0, May 2019; enabled by default on all desktop platforms - Windows,
      macOS and Linux for both 32-bit and 64-bit systems)[90] Google Chrome (since version 70,
      October 2018)[91] Opera (since version 57, 28 November 2018)[92][93] Microsoft Edge (since
      Windows 10 October 2018 Update (1809) with AV1 Video Extension add-on)[94] VLC media player
      (since version 3.0)[95] GStreamer (since version 1.14)[96] FFmpeg (since version 4.0, 20 April
      2018)[97] mpv (since version 0.29.0)[98] Xine-lib (since 1.2.10) MKVToolNix (adoption of final
      av1-in-mkv spec since version 28) MediaInfo (since version 18.03)[99] Bitmovin Encoding (since
      version 1.50.0, 4 July 2018)[100] Elecard StreamEye Studio (tools for video quality analysis)
      K-Lite Codec Pack (since version 14.4.5, 13 September 2018)[101] HandBrake (since version
      1.3.0, 9 November 2019; decoding support)[102] PotPlayer (since version 1.7.14804, 16 October
      2018)[103] Google Duo (since April 2020)[104]
      <BlogSubtitle id="browsers" text="Current Hardware Support" />
      Several Alliance members demonstrated AV1 enabled products at IBC 2018,[129][130] including
      Socionext's hardware accelerated encoder. According to Socionext, the encoding accelerator is
      FPGA based and can run on an Amazon EC2 F1 cloud instance, where it runs 10 times faster than
      existing software encoders. According to Mukund Srinivasan, chief business officer of AOM
      member Ittiam, early hardware support will be dominated by software running on non-CPU
      hardware (such as GPGPU, DSP or shader programs, as is the case with some VP9 hardware
      implementations), as fixed-function hardware will take 12–18 months after bitstream freeze
      until chips are available, plus 6 months for products based on those chips to hit the
      market.[37] The bitstream was finally frozen on 28 March 2018, meaning chips could be
      available sometime between March and August 2019.[18] According to the above forecast,
      products based on chips could then be on the market at the end of 2019 or the beginning of
      2020. On 7 January 2019, NGCodec announced AV1 support for NGCodec accelerated with Xilinx
      FPGAs.[86] On 18 April 2019, Allegro DVT announced its AL-E210 multi-format video encoder
      hardware IP, the first publicly announced hardware AV1 encoder.[131][109] The AL-E210
      supports, aside from VP9, H.265/HEVC, H.264/AVC and JPEG, the AV1 Main profile, with which it
      can encode 4:2:0 Chroma subsampling with 8 and 10 bit color depth. A single core can encode 4K
      with 30 fps, with multiple cores that should even be higher. On 23 April 2019, Rockchip
      announced their RK3588 SoC which features AV1 hardware decoding up to 4K 60fps at 10-bit color
      depth. [128] On 9 May 2019, Amphion announced a video decoder with AV1 support up to 4K
      60fps[132] On 28 May 2019, Realtek announced the RTD2893, its first integrated circuit with
      AV1 decoding, up to 8K.[126][127] On 17 June 2019, Realtek announced the RTD1311 SoC for
      set-top boxes with an integrated AV1 decoder.[125] On 20 October 2019, a roadmap from Amlogic
      was shown which includes 3 set-top box SoCs that are able to decode AV1 content, the S805X2,
      S905X4 and S908X.[133] The S905X4 was used in the SDMC DV8919 by December.[134] On 21 October
      2019, Chips&Media announced the WAVE510A VPU supporting decoding AV1 at up to 4Kp120.[135] On
      26 November 2019, MediaTek announced world's first smartphone SoC with an integrated AV1
      decoder.[122] The Dimensity 1000 is able to decode AV1 content up to 4K 60fps. On 3 January
      2020, LG Electronics announced that its 2020 8K TVs, which are based on the α9 Gen 3
      processor, support AV1.[136][137] At CES 2020, Samsung announced that its 2020 8K QLED TVs,
      featuring Samsung's "Quantum Processor 8K SoC," are capable of decoding AV1. [138] On 13
      August 2020, Intel announced that their Intel Xe-LP GPU in Tiger Lake will be their first
      product to include AV1 fixed-function hardware decoding.[121][120] On 1 September 2020, Nvidia
      announced that their Nvidia GeForce RTX 30 Series GPUs will support AV1 fixed-function
      hardware decoding.[123] On 2 September 2020, Intel officially launched Tiger Lake 11th Gen
      CPUs with AV1 fixed-function hardware decoding.[139] On 15 September 2020, AMD merged patches
      into the amdgpu drivers for Linux which adds support for AV1 decoding support on RDNA2
      GPUs.[111][140][141] On 28 September 2020, Roku refreshed the Roku Ultra including AV1
      support.[142] On 30 September 2020, Intel released version 20.3.0 for the Intel Media Driver
      which added support for AV1 decoding on Linux.[118][119][143] On 10 October 2020, Microsoft
      confirmed support for AV1 hardware decoding on Xe-LP(Gen12), Ampere and RDNA2 with a blog
      post.[112]
      <BlogSubtitle id="av1" text="Introduction to the AV Image Format" />
      AVIF (AV1 Still Image File Format) is a new still image format based on AV1. Specification was
      released and approved as 1.0.0 just recently, meaning it’s ready to be used in production.
      AVIF file is basically an AV1 key frame packed inside ISOBMFF container, almost identical to
      the HEIF structure, except AV1 video format instead of HEVC is used. In theory it looks great
      but what about practice? Well, tooling support is currently not that good as it could be,
      given novel aspects of the format. For example latest versions of Chrome and Firefox support
      AV1 video decoding, but still can’t display AVIF images, it usually takes some time before new
      format will be added. See e.g. Firefox issue. Same for encoding. Most existing software isn’t
      even aware of such format. So I had to implement both encoding and decoding libraries by
      myself. See next sections for the details. // AVIF or AV Image Format is an open and
      royalty-free image format based on the AV1 codec, and similar to AV1 — AVIF provides a very
      high compression rate. Being royalty-free makes it one of the best among its peers. Leveraging
      the powerful genes of AV1 proves beneficial in both processing time and handling hardware
      issues. Also before we move further into the advantages of AVIF, be advised that AVIF saves
      the picture in the AVIF image format, which is relatively new and still not a popular file
      format, and this is a reasonably new algorithm. So there may be a possibility that it’s not
      best for all use cases right now. Developers have been working on developing a better image
      compression algorithm for some time now. For example, before AVIF, HEIF was invented which was
      arguably a better technique in its time. You would be knowing about the HEIF images if you are
      an iPhone user. HEIF uses HEVC codec, and as you may notice in the image below (Model: Samsung
      Galaxy S10), it will save storage space but it was not popular with some sharing sites.
      Arguably, HEIF is said to save 50% of the storage, which is excellent in today’s data-driven
      world. HEIF and AV1 are both based on the same standard, i.e., ISO-23000–12, which was driven
      by the Moving Pictures Experts Group (MPEG). Both formats’ pedigree alone marks their
      reliability and makes them trustworthy with a promising future. Apart from bringing the file
      size to a minimum, the codecs using this standard can also also be used for animated images or
      GIFs as popularly known. Now If you are wondering that if HEIF was more or less the same, then
      why are we moving towards AV1 — it is mainly because of the royalty-fees and slightly better
      performance of AV1 compared to HEIF. Before we dig deep into the AVIF image format and compare
      it with other compression codecs, let’s understand more about the AV1 codec. // The
      abbreviation "AVIF" stands for "AV1 Image File Format" and is essentially the specification
      for storing still and animated images compressed with AV1 in the HEIF file format. AV1 is the
      royalty-free video coding format that has most tech experts believing it is the next step in
      media compression. From a legal standpoint and a technical standpoint, AVIF cannot be matched.
      JPEG XR, for example, had many technical advantages and seemed to be the next step in high
      quality compression. However, software patents and the need to pay those patent-holders made
      adoption of the technology almost impossible. The AV1 format is just as technically advanced
      as the JPEG XR was, but because it is a royalty-free product, adoption will be cheaper and
      improvements will be accomplished much more quickly. AVIF version 1.0.0 was released and
      approved in February of 2019 and is therefore ready to be used in production. This new version
      supports features like "high dynamic range" and "wide color gamut" to make it the most
      technically advanced form of high quality picture compression. High Dynamic Range is also
      known as HDR and wide color gamut is akin to what people now call "Ultra High Definition"
      photos and videos.
      <BlogSubtitle id="advantages" text="Advantages of AVIF and technical features" />
      The format offers: Excellent lossy compression compared to JPG and PNG for visually similar
      compression levels (e.g. lossy AVIF images are around 50% smaller than JPEG images). Generally
      AVIF has better compression than WebP — median 50% vs 30% compression for the same JPG set
      (source: AVIF WebP Comparision (CTRL Blog)). Lossless compression. Animation/multi-image
      storage (similar to animated GIFs, but with much better compression) Alpha channel support
      (i.e. for transparency). High Dynamic Range (HDR): support for storing images that can
      represent bigger contrasts between the lightest and darkest parts of the image. Wide Color
      Gamut: Support for images that can contain a larger range of colours. // The main application
      of AVIF has to do with producing high quality compressed photos that lose as little quality as
      possible during the compression process. A compressed photo will take less time to download
      from the Internet than a full-size photo but should maintain the same quality level. This
      speeds up page loading times, increases website storage capabilities, and allows web pages to
      be accessed even in low speed areas. While the AV1 file format software shows potential, there
      is a major problem in the application of that potential. Most web browsers do not currently
      support this type of image format. While AV1 can be used in video decoding, its image file
      format cannot be downloaded by Chrome, Firefox, or Explorer. It is still a new technology and
      it is being worked on and improved by Microsoft, Netflix, Google, and a host of other
      top-notch companies, but the current application of this format is limited because most
      browsers are not ready for it yet. // Some of the features that make AVIF potentially better
      than the competitors are as follows: AVIF supports High Dynamic Range (HDR), which provides
      better and brighter images. AVIF supports both lossless as well as lossy decomposition. AVIF
      includes an alpha channel (refer to chroma subsampling), providing a richer touch to the
      images. AVIF provides 8, 10, and 12-bit color depth. AVIF supports 4:2:0, 4:2:2 and 4:4:4
      chroma subsampling, and many more AVIF provides the highest compression in royalty-free
      format. With these advantages, there lies a single disadvantage, which is its availability in
      the market. AVIF is a fairly new image format; though it’s gaining a lot of praise worldwide,
      AVIF still lacks browser support. Browsers are a primary medium for most images that we see in
      everyday life. Hence browser compatibility is crucial. //
      <BlogSubtitle id="filesize" text="Reduced File Size" />
      <BlogSubtitle id="chroma" text="4:2:0, 4:2:2, 4:4:4 chroma subsampling" />
      Chroma subsampling, often popularly referred to as color subsampling, is the heart of the
      invention of compression. All the compression algorithms for the video codes and images still
      today focus majorly on chroma subsampling. Chroma subsampling derives from the fact that the
      human eye is more sensitive to image luminosity than color differences. The slighter
      differences in the color are not differentiable to humans. If we lower the resolution of an
      image that would ultimately reduce the color shade a bit and the color quality, the difference
      will go unnoticed. This is a prevalent phenomenon used in both video compression and image
      compression codecs. Therefore, whenever we design or talk about a compression codec, the first
      question is, what are the subsampling ratios it supports? The most popular file type you must
      have heard, JPEG uses chroma subsampling to transfer the images by optimizing bandwidth to
      carefully save the luminosity information rather than the exact color information. Diving into
      more details of its preservation will deviate us from the topic. Still, it won’t hurt to lay
      down basic facts to understand chroma subsampling as we will be differentiating these in the
      next section. Chroma subsampling is represented in digits in the form X:Y:Z (excluding the
      alpha channel). X: horizontal sampling reference (width of the conceptual region). Usually, 4.
      Y: number of chrominance samples (Cr, Cb) in the first row of X pixels. Z: number of changes
      of chrominance samples (Cr, Cb) between the first and second row of X pixels. Note: Z has to
      be either zero or equal to Y (except in rare irregular cases like 4:4:1 and 4:2:1, which do
      not follow this convention). We found the following image on Pinterest, which denotes the
      chroma subsampling of the images in the same form as we discussed above: Image for post To
      leverage this information, it is reasonably evident that if we transfer a 4:4:4 sampled image
      as a 4:2:0 sampled image, we can dodge the human observational powers and, at the same time,
      save a lot of bandwidth considering millions of pixels get transferred in a single image. Can
      you spot the difference between the 4:4:4 image and the 4:2:0 (yes, you can refer to them
      without the colon) images in the following collage? Image for post We are confident you must
      have spotted the real differences in the images, but it is just because we have shown you the
      original image and the compressed one to point out the differences. Although if someone sends
      you this image over WhatsApp and asks you the color of the image, you both will settle on the
      same answer and most probably on the same shade as well. And yes, WhatsApp uses the same JPEG
      compression technique we have been using for so long. Now that we are familiar with the
      compression technique let’s spot the difference in images of 4:4:4 and 4:2:0 that we usually
      prefer while compressing. The color transition is not as smooth as it is on the original
      image. The color is not so “smooth,” and the grainy texture is visible on the 4:2:0 images.
      4:2:0 is a lower down version of the resolution, and the jaggedness is screaming this out of
      the image. But as we mentioned, human eyes cannot detect the differences; we do not have a
      problem. With time, the network waves have transformed into compression algorithms as the
      colors used in a device has increased, so has its size. With millions of colors used in a
      single image, even if we compress the image through JPEG, it is still considerably large these
      days until we provide repeated compression and bring out an image with blurred pixels visible.
      This brings us to the latest codec available today, which is like a super-infant and growing
      day by day, showing off its power of compression to more and more companies. // In addition to
      above quality calculations, we have the following observation which reveals an encouraging
      trend among modern codecs. After performing an encode with 420 subsampling, let’s assume we
      decode the image, up-convert it to 444 subsampling and then compute various metrics by
      comparing against the original source in 444 format. We call this configuration “444u” to
      distinguish from above cases where “encode-subsampling” and “quality-computation-subsampling”
      match. Among the chosen metrics, PSNR_AVG is one which takes all 3 channels (1 luma and 2
      chroma) into account. With an older codec like JPEG, the bit-budget is spread thin over more
      samples while encoding 444 subsampling compared to encoding 420 subsampling. This shows as
      poorer PSNR_AVG for encoding JPEG with 444 subsampling compared to 420 subsampling, as shown
      below. However, given a rate target, with modern codecs like HEVC and AVIF, it is simply
      better to encode 444 subsampling over a wide range of bitrates. We see that with modern codecs
      we yield a higher PSNR_AVG when encoding 444 subsampling than 420 subsampling over the entire
      region of “practical” rates, even for the other, more practical, datasets such as boxshots-1.
      Interestingly, with JPEG, we see a crossover; i.e., after crossing a certain rate, it starts
      being more efficient to encode 444 subsampling. Such crossovers are analogous to rate-quality
      curves crossing over when encoding over multiple spatial resolutions. Shown below are
      rate-quality curves for two different source images from the boxshots-1 dataset, comparing
      JPEG and AVIF in both 444u and 444 configurations.
      <BlogSubtitle id="chroma" text="film grain" />
      <BlogSubtitle id="chroma" text="Lossless compression and lossy compression" />
      <BlogSubtitle id="development" text="Actively developed" />
      <BlogSubtitle id="royalty" text="Royalty-free" />
      <BlogSubtitle id="encoder" text="already has different encoders" />
      Libaom is the reference implementation. It includes an encoder (aomenc) and a decoder
      (aomdec). As the former research codec, it has the advantage of being made to justifiably
      demonstrate efficient use of every feature, but at the general cost of encoding speed. At
      feature freeze, the encoder had become problematically slow, but speed optimizations with
      negligible efficiency impact have continued to be made also after that.[74][17] rav1e is an
      encoder written in Rust and assembly.[66] rav1e takes the opposite developmental approach to
      Aomenc: start out as the simplest (therefore fastest) conforming encoder, and then improve
      efficiency over time while remaining fast.[74] SVT-AV1 includes an open-source encoder and
      decoder first released by Intel in February 2019 that is designed especially for usage on data
      center servers based on Intel Xeon processors. Netflix collaborates with Intel on
      SVT-AV1.[75][76] dav1d is a decoder written in C99 and assembly focused on speed and
      portability.[77] The first official version (0.1) was released in December 2018.[78] Version
      0.2 was released in March 2019, with users able to "safely use the decoder on all platforms,
      with excellent performance", according to the developers.[79] Version 0.3 was announced in May
      2019 with further optimizations demonstrating performance 2 to 5 times faster than
      aomdec.[80]; version 0.5 was released in October 2019.[81] Firefox 67 switched from Libaom to
      dav1d as a default decoder in May 2019.[82] Cisco AV1 is a proprietary live encoder that Cisco
      developed for its Webex teleconference products. The encoder is optimized for latency[83] and
      the constraint of having a "usable CPU footprint", as with a "commodity laptop".[84] Cisco
      stressed that at their operating point – high speed, low latency – the large toolset of AV1
      does not preclude a low encoding complexity.[83] Rather, the availability of tools for screen
      content and scalability in all profiles enabled them to find good compression-to-speed
      tradeoffs, better even than with HEVC.[84] Compared to their previously deployed H.264
      encoder, a particular area of improvement was in high resolution screen sharing.[83] libgav1
      is a decoder written in C++11 released by Google. Several other parties have announced to be
      working on encoders, including EVE for AV1 (in beta testing),[85] NGCodec,[86] Socionext,[87]
      Aurora[88] and MilliCast.[89] // As said earlier AVIF file is nothing more than AV1 intra
      frame in ISOBMFF container. So we may use any available AV1 encoder to produce the actual
      picture. Which one to choose among libaom, rav1e and SVT-AV1, the three currently available
      open-source AV1 encoders? Comparison of intra coding efficiency This graphic produced by
      av1-bench promotes libaom as a clear winner: it has best score on VMAF metric and its slowest
      encoding preset is actually faster than competitors’, at least on my pre-AVX2 CPU. (libjpeg
      results are provided for the reference.) That could be explained by speed-over-quality
      trade-offs chosen in SVT-AV1 and rav1e. It’s not bad, though still images are represented as
      single frame videos and it’s not that long to encode one frame even with slowest compression
      settings. So libaom should be a good choice. Not like we can’t make it faster with speed
      controls if needed. I’ve also compared libaom and SVT-AV1 encodes with my eyes because
      objective metrics are not the single source of truth. From my subjective perspective it pretty
      much correlated with VMAF results, though sometimes it was hard to choose the best of two. So
      AV1 encoder is chosen, what’s next? Forum back-end where I’m going to use AVIF is written in
      Go, so I needed a library for that language. After some search I’ve found libavif C library
      mentioned in official AVIF wiki. It probably works fine and should allow to write Go bindings,
      but I decided to write my own for better understanding of the format. Since we won’t implement
      encoder from scratch, the entire library boils down to libaom cgo wrapper and pure Go ISOBMFF
      muxer. libaom provides typical encoder library C API. We need to prepare frame i.e. wrap pixel
      data into library’s structures, run encode function on it and get results back. Most encoders
      operate with Y’CbCr color model, and 4:2:0 subsampling is the most common. I’m using image
      package from standard Go library to get RGB pixel values from the image provided by the user.
      It supports decoding most popular JPEG and PNG formats out of the box. Pixels in .png are
      already stored as RGB and for .jpg Go will convert them to RGB automatically. We just need to
      convert RGB to Y’CbCr BT.709 4:2:0 limited range and can pass it to encoder. If it sounds
      scary, don’t worry. This operation boils down to multiplying R, G and B components of every
      pixel with some coefficient and few additions. Now we need to pass that data to libaom, I’m
      using small C wrapper av1.c for easier interoperability between C and Go. libaom’s API is
      pretty straightforward, but there are few things worth to note: We utilize 2-pass encoding
      even though it’s a single picture. libaom (and libvpx) are known to produce better results
      that way. CRF (Q mode in libaom’s terminology) maps pretty well to quality slider we’re used
      to with JPEG converters. It’s just a bit different scale from 0 to 63 where 0 means lossless
      and 63 is worst quality. Well, codecs might be strange 😉 We can control encoding speed in
      range from 0 to 8, 4 being the default which seems reasonable. Multithreading is enabled by
      default, otherwise it would be too slow. row-mt parallelism and 4 tiles give pretty good
      results. Go part is available in avif.go. Encoder part is done, now it’s muxer part. Specs for
      container are freely available here. Here is HEIF extension and here is AVIF extension. I
      won’t go into details, you can check final implementation in mp4.go, the code should be
      self-explanatory. Looks tedious to implement all that dozen of ISOBMFF boxes, but in fact it
      was a real fun.
      <BlogSubtitle id="supported" text="highly supported for a new format" />
      <BlogSubtitle id="transparency" text="supports transparency" />
      <BlogSubtitle id="animated" text="supports animated frames" />
      <BlogSubtitle id="hdr" text="High Dynamic range" />
      <BlogSubtitle id="hdr" text="supports any color-space including wide color gamut" />
      <BlogSubtitle id="vp10" text="based on the future-proof VP10 codec technology" />
      <BlogSubtitle id="smartphone" text="is feature-rich" />
      <BlogSubtitle id="others" text="AVIF vs other formats" />
      <BlogSubtitle id="others" text="Acceptable quality" />
      For the majority of images on the web, my rules are: If a user looks at the image in the
      context of the page, and it strikes them as ugly due to compression, then that level of
      compression is not acceptable. But, one tiny notch above that boundary is fine. It's ok for
      the image to lose noticeable detail compared to the original, unless that detail is
      significant to the context of the image. Context is key here. Image compression should be
      judged at the size it'll be presented to the user, and in a similar surrounding. If you're
      presenting a picture as a piece of art to be examined, quality and detail preservation become
      more important, but that's an edge case. Most images I see on the web are a much higher
      quality than they need to be, which results in a slower experience for users. I'm generally
      impressed by The Guardian's use of images. Take this article. If I open the image at the top
      of the article and zoom in, I can see the distinctive WebP artefacts. The street has been
      smoothed. There's some ringing around the graffiti. But we shouldn't optimise the user
      experience for people who might zoom in looking for flaws. When I look at the image within the
      article, in the size and context it's presented, I just see someone cycling past a closed pub,
      which is the intent of the image. The compression used there produces a small resource size,
      which means I saw the image quickly. In this article, I'm optimising images as if they were
      appearing in an article, where their CSS width is around 50% of their pixel width, meaning
      they're optimised for high-density displays.
      <BlogSubtitle id="size" text="Image size at similiar quality" />
      <BlogSubtitle id="quality" text="Visual quality at the same size" />
      I couldn't even get the JPEG and WebP down to 18 kB, even at lowest settings, so this isn't a
      totally fair test. The JPEG suffers from awful banding, which started to appear as soon as I
      went below 74 kB. The WebP is much better, but there's still noticeable blockiness compared to
      the AVIF. I guess that's what a decade or two of progress looks like.
      <BlogSubtitle id="progressive" text="Loading isn't progressive" />
      <BlogSubtitle id="webp" text="AVIF vs WebP" />
      WebP is one of the most popular image compression formats that is used widely in browsers
      today. WebP compression was developed by Google taking VP8 video format as the container
      support. WebP is considered one of the most successful image formats being transferred today
      (only for the compatible browsers). When the PNG format dominated the image market, WebP
      provided a 45% reduction in the file size when compressed from PNG. This was a huge success
      and instantly adopted by Firefox, Opera, GNOME, and many other browsers started incorporating
      the technique with Apple being the latest guest, which will add support to WebP in Safari from
      iOS14 onwards. Now you must be thinking if WebP is so widely accepted and provides both
      lossless and lossy compression, what’s the need for AVIF to be made native to these browsers?
      Well, the following differences would clear that out: AVIF provides a smaller sized image
      compared to WebP. WebP works on only 8-bit depth, whereas AVIF supports 8, 10, and 12-bit,
      which will accept a broader range of images to be compressed. WebP supports only 4:2:0
      channel, whereas AVIF supports 4:2:0, 4:2:2, and 4:4:4 channels. The image quality produced by
      WebP is lower than AVIF and even JPEG. AVIF supports HDR, which produces high luminosity
      images. // One of the big things AVIF does is it fixes WebP's biggest flaws. WebP is over 10
      years old, and AVIF is a major upgrade over the WebP format. These two formats are technically
      related: they're both based on a video codec from the VPx family. WebP uses the old VP8
      version, while AVIF is based on AV1, which is the next generation after VP10. WebP is limited
      to 8-bit color depth, and in its best-compressing mode of operation, it can only store color
      at half of the image's resolution (known as chroma subsampling). This causes edges of
      saturated colors to be smudged or pixelated in WebP. AVIF supports 10- and 12-bit color at
      full resolution, and high dynamic range (HDR). AV1 also uses a new compression technique:
      chroma-from-luma. Most image formats store brightness separately from color hue. AVIF uses the
      brightness channel to guess what the color channel may look like. They are usually correlated,
      so a good guess gives smaller file sizes and sharper edges.
      <BlogSubtitle id="jpg" text="AVIF vs JPG" />
      JPEG or Joint Photographic Experts Group has been ruling the media industry for quite some
      time. With advancements in digital technology, JPEG has provided better color resolution and
      24-bit pixel quality. It can further bring down the RGB picture in a single luminance.
      However, the challenge with JPEG is that it blurs the sharpness of artifacts during
      compression. The need to consider the AVIF Image format above JPEG was because of its high
      quality compressed image without losing much data and its acceptance by tech giants like
      Google, Youtube, Amazon, etc. The following points will make it clear why you should pick AVIF
      over JPEG: JPEG does not have support for animation and transparency JPEG support only 8-bit
      whereas AVIF supports 8, 10, and 12-bit AVIF has superior image quality AVIF encoding is
      better with less blocked artifacts
      <BlogSubtitle id="svg" text="AVIF vs SVG" />
      find it incredible that this image was created with SVG. However, it comes at a cost. The
      number of shapes and filters involved means it takes a lot of CPU for the browser to render
      it. It's one of those edge cases where it's better to avoid the original SVG, even if the
      alternative is larger. PNG struggles here due to the smooth gradients. I reduced the colours
      to 256, but I had to dither them to avoid visible banding, which also hurt compression. WebP
      performs significantly better by mixing lossy compression with an alpha channel. However, the
      alpha channel is always encoded losslessly in WebP (except for a bit of palette reduction), so
      it suffers in a similar way to PNG when it comes to the transparent gradient beneath the car.
      AVIF aces it again at a significantly smaller size, even compared to the SVG. Part of AVIF's
      advantage here is it supports a lossy alpha channel.
      <BlogSubtitle id="nextgen" text="Why is AVIF better than other next-gen formats?" />
      <BlogSubtitle id="jpegxl" text="AVIF vs JPEG-XL" />
      One of the reasons we built Squoosh is so developers could bypass the claims made about
      particular codecs, and instead just try it for themselves. JPEG-XL isn't quite ready yet, but
      we'll get it into Squoosh as soon as possible. In the meantime, I'm trying to take JPEG-XL's
      claims of superiority with a pinch of salt. However, there's a lot to get excited about.
      JPEG-XL is an image format, rather than an off-cut of a video format. It supports lossless and
      lossy compressions, and progressive multi-pass rendering. It looks like the lossless
      compression will be better than WebP's, which is great. However, the lossy compression is
      tuned for high quality rather than 'acceptable quality', so it might not be a great fit for
      most web images. But, the benefit of multi-pass rendering might mean it's worth taking a hit
      when it comes to file size. I guess we'll wait and see! There aren't many details around
      WebPv2 yet, so again it's best to wait and see until we can test it with our own images.
      <BlogSubtitle id="webpv2" text="AVIF vs WebPv2" />
      <BlogSubtitle id="create" text="How to create AVIF files?" />
      <BlogSubtitle id="avifio" text="avif.io" />
      <BlogSubtitle id="squoosh" text="squoosh" />
      <BlogSubtitle id="support" text="Current and upcoming support" />
      Although AVIF provides superior compression efficiency, it is still at an early deployment
      stage. Various tools exist to produce and consume AVIF images. The Alliance for Open Media is
      notably developing an open-source library, called libavif, that can encode and decode AVIF
      images. The goal of this library is to ease the integration in software from the image
      community. Such integration has already started, for example, in various browsers, such as
      Google Chrome, and we expect to see broad support for AVIF images in the near future. Major
      efforts are also ongoing, in particular from the dav1d team, to make AVIF image decoding as
      fast as possible, including for 10-bit images. It is conceivable that we will soon test AVIF
      images on Android following on the heels of our recently announced AV1 video adoption efforts
      on Android. The datasets used above have standard dynamic range (SDR) 8-bit imagery. At
      Netflix, we are also working on HDR images for the UI and are planning to use AVIF for
      encoding these HDR image assets. This is a continuation of our previous efforts where we
      experimented with JPEG 2000 as the compression format for HDR images and we are looking
      forward to the superior compression gains afforded by AVIF. // VP8 and WebP suffered from
      reluctant industry adoption. Safari only added WebP support very recently, 10 years after
      Chrome. Chrome 85 supports AVIF already. It’s a work in progress in other Chromium-based
      browsers, and Firefox. Apple hasn't announced whether Safari will support AVIF. However, this
      time Apple is one of the companies in the Alliance for Open Media, creators of AVIF. The AV1
      codec is already seeing faster adoption than the previous royalty-free codecs. Latest GPUs
      from Nvidia, AMD, and Intel already have hardware decoding support for AV1. AVIF uses the same
      HEIF container as the HEIC format used in iOS’s camera. AVIF and HEIC offer similar
      compression performance. The difference is that HEIC is based on a commercial,
      patent-encumbered H.265 format. In countries that allow software patents, H.265 is illegal to
      use without obtaining patent licenses. It's covered by thousands of patents, owned by hundreds
      of companies, which have fragmented into two competing licensing organizations. Costs and
      complexity of patent licensing used to be acceptable when videos were published by big
      studios, and the cost could be passed on to the customer in the price of physical discs and
      hardware players. Nowadays, when video is mostly consumed via free browsers and apps, the old
      licensing model has become unsustainable. This has created a huge incentive for Web giants
      like Google, Netflix, and Amazon to get behind the royalty-free alternative. AV1 is free to
      use by anyone, and the alliance of tech giants behind it will defend it from patent troll's
      lawsuits. Non-standard image formats usually can only be created using their vendor's own
      implementation. AVIF and AV1 are already ahead with multiple independent implementations:
      libaom, Intel SVT-AV1, libgav1, dav1d, and rav1e. This is a sign of a healthy adoption and a
      prerequisite to be a Web standard. Our Image Resizing is implemented in Rust, so we've chosen
      the rav1e encoder to create a pure-Rust implementation of AVIF.
      <BlogSubtitle id="browsers" text="Current Operating System Support" />
      <BlogSubtitle id="browsers" text="Current Software Support" />
      <BlogSubtitle id="browsers" text="Current AVIF Browser Support" />
      Even with Windows adopting AVIF to save space in their systems and giving a push to increase
      the importance of this format, content providers still have to rely on JavaScript if they want
      to use this image format. In addition, although AVIF has been recently adopted and rolled out
      in Google Chrome as well, it still doesn’t enjoy complete universal cross browser availability
      as Firefox and Safari still have to give support for it. In the image below, we have shown the
      acceptance of AVIF in the browsers today: However, the future of AVIF image format looks very
      promising with companies like Netflix, Google, Microsoft, Paint.net, VLC, and many other big
      players already using it. JPEG is still the leading image format used in browsers, but the
      content providers are happy to start adopting new file format as well.
      <BlogSubtitle id="software" text="Current AVIF Software Support" />
      <BlogSubtitle id="hardware" text="Current AVIF Hardware Support" />
      <BlogSubtitle id="aom" text="Current companies and content providers supporting avif" />
      YouTube has begun rolling out AV1, starting with its AV1 Beta Launch Playlist. According to
      the description, the videos are (to begin with) encoded at high bitrate to test decoding
      performance, and YouTube has "ambitious goals" for rolling out AV1. YouTube for Android TV
      supports playback of videos encoded in AV1 on capable platforms as of version 2.10.13,
      released in early 2020.[68] Vimeo's videos in the "Staff picks" channel are available in
      AV1.[69] Vimeo is using and contributing to Mozilla's Rav1e encoder, and expects, with further
      encoder improvements, to eventually provide AV1 support for all videos uploaded to Vimeo as
      well as the company's "Live" offering.[69] In October 2016, Netflix stated they expected to be
      an early adopter of AV1.[70] On 5 February 2020, Netflix began using AV1 to stream select
      titles on Android, providing 20% improved compression efficiency over their VP9 streams.[71]
      Following their own very positive test results, Facebook said they would gradually roll out
      AV1 as soon as browser support emerges, starting with their most popular videos.[52] Twitch
      plans to roll out AV1 for its most popular content in 2022 or 2023, with universal support
      projected to arrive in 2024 or 2025.[72] On 30 April 2020 iQIYI announced support for AV1 for
      users on PC web browsers and Android devices, becoming "the first and the only Chinese video
      streaming site to adopt the AV1 format to date."[73]
      <BlogSubtitle id="others" text="Drawbacks" />
      <BlogSubtitle id="encoding" text="Encoding Time" />
      Encoding AVIF takes a long time in general, but it's especially bad in Squoosh because we're
      using WebAssembly, which doesn't let us use SIMD or multiple threads. Those features are
      starting to arrive to standards and browsers, so hopefully we'll be able to improve things
      soon. At an 'effort' of 2, it takes a good few seconds to encode. 'Effort' 3 is significantly
      better, but that can take a couple of minutes. 'Effort' 10 (which I used for images in this
      article) can take over 10 minutes to encode a single image. AVIF supports tiling images, which
      chops the image into smaller blocks that can be encoded and decoded separately. This is
      interesting for encoding, because it means the blocks can be encoded in parallel, making full
      use of CPU cores, although Squoosh doesn't take advantage of this yet. The command line tools
      are orders of magnitude faster. You can either compile libavif yourself, or on OSX, install it
      via Homebrew: brew install joedrago/repo/avifenc There's also a Rust implementation, cavif. My
      current workflow is to use Squoosh to figure out decent settings at 'effort' 2, then use
      libavif to try the same settings at 'effort' 10. Hopefully we can speed up the Squoosh version
      soon!
      <BlogSubtitle id="decoding" text="Decoding Time" />
      There's also a question of CPU usage vs other formats when it comes to decoding, but I haven't
      dug into that yet. Although AV1 is starting to get hardware support, I'm told that dedicated
      hardware will be tuned for video, and not so great at decoding a page full of images. //
      Decoding AVIF images for display takes relatively more CPU power than other codecs, but it
      should be fast enough in practice. Even low-end Android devices can play AV1 videos in full HD
      without help of hardware acceleration, and AVIF images are just a single frame of an AV1
      video. However, encoding of AVIF images is much slower. It may take even a few seconds to
      create a single image. AVIF supports tiling, which accelerates encoding on multi-core CPUs. We
      have lots of CPU cores, so we take advantage of this to make encoding faster. Image Resizing
      doesn’t use the maximum compression level possible in AVIF to further increase compression
      speed. Resized images are cached, so the encoding speed is noticeable only on a cache miss.
      <BlogSubtitle id="progressive" text="Progressive rendering" />
      AVIF does not support progressive rendering, so files must be fully downloaded before they can
      be displayed. This often has little impact on real-world user experience because AVIF files
      are much smaller than the equivalent JPEG or PNG files, and hence can be downloaded and
      displayed much faster. For larger file size the impact can become significant, and you should
      consider using a format that supports progressive rendering. // Because AVIF is an off-cut of
      a video format, it's missing some useful image features and optimisations that aren't relevant
      to video. The above shows a high-resolution (2000x1178), high-quality image loading at 2g
      speeds. To get roughly the same quality, the JPEG is 249 kB, the WebP is 153 kB, and the AVIF
      is 96 kB. Although they're all loading at the same rate, the much-larger JPEG feels faster
      because of how it renders in multiple passes. WebP renders from top to bottom, which isn't as
      good, but at least you see the progress. Unfortunately, with AVIF it's all-or-nothing. Video
      doesn't need to render a partial frame, so it isn't something the format is set up to do. It's
      possible to have a top-to-bottom render like WebP, but the implementation would be
      complicated, so we're unlikely to see it in browsers in the foreseeable future. Because of
      this, AVIF feels better suited to smaller quicker-loading images. But that still covers most
      images on the web. Maybe this could be solved if the format could provide a way to embed a
      'preview' version of the image at the start of the file. The browser would render this if it
      doesn't have the rest of the file. Because it's a different image, the developer would get to
      choose the quality, resolution, and even apply filters like blurring. // AVIF images don't
      show anything on screen until they're fully downloaded. In contrast, a progressive JPEG can
      display a lower-quality approximation of the image very quickly, while it's still loading.
      When progressive JPEGs are delivered well, they make websites appear to load much faster.
      Progressive JPEG can look loaded at half of its file size. AVIF can fully load at half of
      JPEG's size, so it somewhat overcomes the lack of progressive rendering with the sheer
      compression advantage. In this case only WebP is left behind, which has neither progressive
      rendering nor strong compression.
      <BlogSubtitle id="future" text="Next steps" />
      In this post, we have covered all the benefits of the brand-new image compression format AVIF.
      But the whole discussion comes to a halt by observing its acceptance and support in the market
      today. Although AVIF has the backing of big top tech companies and some of them like Netflix,
      Google and Microsoft have already implemented this format. Currently, AVIF looks like a future
      car packed with extraordinary features, but people are still skeptical about involving it in
      their lives. AVIF is to-date the best and most effective image compression format that has
      arrived for data transmission, the last of which we saw was JPEG. With being royalty-free
      along with being open-sourced, the AVIF format is still in the deployment phase. Apart from
      providing a lower sized image, AVIF proves to be the best among its peers for providing good
      original-like quality images. This has been made possible by the color depth and chroma
      subsampling support AVIF has. The future of AVIF is very bright. Many kinds of research are
      still ongoing, and many companies are working towards adopting the AVIF image format into
      their systems. AVIF Image Format Support for browsers like Chrome and Firefox would be an
      exciting thing to look for. Once the browsers are ready to enroll the features with support to
      AVIF, we will see a new revolution in image compressions. Firefox has already announced
      support for AVIF, just like AV1. However, Mozilla is testing it on Firefox Nighty before going
      live officially. Chrome is also expected to go live with the feature this year. With Firefox
      and Chrome going live with the feature, we will subsequently see its support on chromium-based
      browsers like Edge and Opera by the end of this year. It has been too long since we have been
      using older compression formats. In the times to come, maybe early 2021, AVIF will see a
      broader user base. Thank you for reading, and now we would like to hear from you: what do you
      think is the future of AVIF? Or maybe you have a question. Either way, go ahead and leave a
      comment below. // Better compression is great, but how do we know that quality of the original
      image is preserved when we re-encode? There are various objective metrics such as PSNR, SSIM
      or modern VMAF exist, but they simply don’t define the “visual identity” score we should
      target. And even if they would, how should we map encoder’s QP to that score? I’m going to
      collect some statistics about AVIF usage on my site and maybe share them in the next article.
      Let’s hope Chrome, Firefox, Edge or even Safari will add native support for AVIF soon. avif.js
      should still be useful for supporting elder versions though. AVIF tooling might be much
      better. Right now we’re limited to this small list of AVIF-aware software. Would be great to
      have support in popular image viewers and converters too. AV1 decoder polyfill (dav1d.js)
      might be tinier and faster, it’s not tuned to the max yet. But since polyfill is only needed
      for old browsers, it’s not that important.
      <BlogSubtitle id="future" text="Conclusion" />
      AVIF sounds and looks very promising and even though it’s still taking its first steps, it is
      set to be the next most popular image format on the internet. Having PNG and JPG rooted in the
      past, and WebP and HEIF behind patents that slows them down from being adopted as a standard,
      you’ll sooner than later see AVIF images when you visit your favorite site. // I was initially
      sceptical of AVIF – I don't like the idea that the web has to pick up the scraps left by video
      formats. But wow, I'm seriously impressed with the results above. That said, it isn't perfect.
      Unless it's automated, offering up 3 versions of the same image is a bit of a pain, but the
      savings here are pretty significant, so it seems worth it, especially given the number of
      users that can already benefit from AVIF.
    </Blog>
  );
}
