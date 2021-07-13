import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import Image from "@components/Blog/Image";
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
      postMeta={meta.tutFirefox}
      posts={[meta.tutEdge, meta.tutHtml, meta.tutWordpress]}
    >
      <ContentTable contentTable={contentTable} />
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Update March 2021"
      />
      Several open bugs and issues have lead to support still not being the
      default. This has mainly to do with the current AVIF spec from AOM.{" "}
      <b>
        We can expect Firefox 89 to have a full, compliant AVIF support that is
        enabled by default.
      </b>{" "}
      Version 89 will be released at the 1st of July.
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Update January 2021"
      />
      YES! Finally. Firefox Nightly users needed to enable the feature manually
      to get it supported in the Firefox browser at the time. Starting with
      version 86, which will be available on the 23th of February, 2021, Firefox
      is going to support AVIF by default.
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Update December 2020"
      />
      There has been other industry adoption for AVIF images, such as Microsoft
      with Windows. Google added support for AVIF to Chrome earlier this year
      and shipped it with Chrome 85. Mozilla Firefox is also very soon expected
      to enable support for AVIF as an image format based on AV1 video coding.
      Mozilla has announced that current AVIF image support is complete.
      <br /> Also, they claim previously encountered problems with the format
      have been resolved. There was a Mozilla bug ticket tracking the default
      support of AVIF. The patch enabling default support has initially been
      pushed but reverted as a result of broken tests. Those items have been
      reviewed and AVIF appears to be ready to land now. In any case, Firefox
      will support AVIF images with its next versions in early 2021. We can't
      wait for users to be able to directly use and view AVIF images. For those
      looking to convert their images to AVIF, try out our fastest converter. It
      works with Firefox already.
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Original Post"
      />
      Starting in version 77 (released in June 2020),{" "}
      <b>
        Mozilla recently implemented experimental support for the AVIF image
        format in Firefox
      </b>
      . The feature is not enabled by default in the web browser's production
      version. Still, users interested in adding support may do so at the time
      of writing. When enabled,{" "}
      <b>
        Firefox will render AVIF image files just like any other image format
      </b>{" "}
      supported by the web browser. AVIF was developed from the AV1 video format
      and uses HEIF as the container and AV1 frames. It is a new format. AV1 is
      already supported in most web browsers, and the work has begun to
      integrate AVIF too.
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Check your version"
      />
      If you would like to find out your browser's version, open the Firefox
      settings located the top right, head to the help menu and click 'about'.{" "}
      <b>If you have version 77 or above</b>, you will be able to use the
      tutorial below to enable the AVIF image format.
      <Image url="firefox-help" alt="opening the menu in firefox" />
      <Image url="firefox-help-about" alt="opening the about menu in firefox" />
      <Image url="firefox-version" alt="firefox version" />
      <H
        contentTableCallback={contentTableCallback}
        level={2}
        text="Enable AVIF support in Firefox"
      />
      Provided that you have installed a compatible version, you can easily add
      support for AVIF with the about:config configurations. Type{" "}
      <b>about:config</b> inside the address bar and press Enter.
      <Image
        url="firefox-about"
        alt="typing about:config inside the browser url"
      />{" "}
      Most likely a warning message will appear, telling you to be careful. No
      worries, we will be handling everything gently. Click on 'Accept the risk
      and continue'.
      <Image url="firefox-warning" alt="firefox warning" /> In the search bar at
      the top of the page, search for avif. The option <b>image.avif.enabled</b>{" "}
      is the one you are looking for. If the second column's value is showing
      'false', click the right switch button to set it to true. A 'true' value
      means that Firefox supports AVIF, whereas a 'false' value means the
      browser's image format isn't supported.
      <Image url="firefox-avifsearch" alt="firefox search for avif support" />
      <H
        level={5}
        text="
        Mozilla considers support to be experimental. However, most AVIF files should be rendered
        successfully, and full native support is expected to arrive in the early months of 2021.
      "
      />
      Remember to restart Firefox. Then come back to this page to see this
      fantastic image:
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src="/img/firefox-test.avif"
        alt="your browser may show this AVIF img"
        decoding="async"
        loading="lazy"
        width="800px"
      />
    </Blog>
  );
}
