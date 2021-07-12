import Checklist from "@components/Blog/Checklist";
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
    <Blog
      className="release"
      postMeta={meta.february2021}
      posts={[meta.january2021, meta.march2021, meta.tutWordpress]}
    >
      <ContentTable contentTable={contentTable} />
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Conversion speed"
      />
      As you know, the conversion speed for AVIF is a little bit painful.
      Indeed, other than the lack of progressive loading, it's the only thing we
      have a problem with when it comes to embedding AVIF images onto our web
      projects. This makes it even better that Xiph keeps improving its AVIF
      encoder, rav1e. The Xiph Foundation claims rav1e is the safest and fastest
      AVIF encoder online. The company always updates its code which proves its
      ability to speed up the conversion process every time. We are glad to
      announce, that we successfully implemented the latest version 0.4.0
      successfully. It provides solid speed improvements on both x86_64 and
      aarch64. The overall speedup is solid across the speed levels, both for
      8bit and 10bit encoding. With some drastic improvement for aarch64 on
      speed 10. Inluded, but not limited to:
      <Checklist
        items={[
          "Improved 4:2:2 support (37% reduction in encoding time, 0.8% to 5% improvement to coding efficiency)",
          "Thread CDEF loop filter with tiles (1.2% reduction in encoding time with 4 tiles)",
          "Enable open partitions on frame boundaries (2% improvement to coding efficiency)",
          "Substantially rework initial motion estimation (9% reduction in encoding time)",
          "Optimize chroma quantizer offsets for 4:4:4 sampling",
          "Reduce memory allocation count in various areas",
          "Allow frame sizes <16x16 in still picture mode",
        ]}
        checked={true}
      />
      If this doesn't say much to you, here's a tldr: Your conversion process is
      ~15% faster now. And yes, we are keeping a close eye to the already
      released 0.5 Alpha version.
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Website performance"
      />
      We discovered that our website had become unaccessible a few days ago.
      Great! A chromium/Chrome update has changed some ways web workers did
      their job. Ours just couldn't handle the change and users on Chrome and
      Opera were unable to convert any images. We also had some severe issues
      with Safari. However, all of these issues are now fixed. If you still
      experience anything unusual, feel free to write us at support@avif.io.
      Besides these fixes, we have made some changes to the code splitting
      behavior so that the overall website performance increased.
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Usability"
      />
      Based on an analysis of 500 Hotjar recordings and reading more in depth
      about several topics, we've made several changes for the common user, to
      improve accessibility and SEO.
      <Checklist
        items={[
          "higher use of semantic elements and aria attributes",
          "added JSON data for better search engine results",
          "linked Sitemap in footer",
          "Created a tooltip for the settings panel so people notice it more",
          "Added a new progress indicator to support visually impaired people",
          "Cancelled conversions will disappear after a short period so they don't take up space.",
          "If the conversion fails, you will be asked if we can use your image for further testing",
          "Moved image slider upwards on our homepage",
        ]}
        checked={true}
      />
    </Blog>
  );
}
