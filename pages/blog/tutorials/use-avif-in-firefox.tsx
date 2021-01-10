import Blog from "@components/Blog";
import { BlogSubtitle, BlogNote, BlogImage } from "@components/BlogComponents";

import { useAvifInFirefox as postdata } from "lib/meta";
import { useAvifInEdge as post1 } from "lib/meta";
import { useAvifInHtml as post2 } from "lib/meta";
import { useAvifInWordpress as post3 } from "lib/meta";

export default function BlogAvif() {
  return (
    <Blog postdata={postdata} posts={[post1, post2, post3]}>
      Starting in version 77 (released in June 2020), Mozilla recently implemented experimental
      support for the AVIF image format in Firefox. The feature is not enabled by default in the web
      browser's production version. Still, users interested in adding support may do so at the time
      of writing. When enabled, Firefox will render AVIF image files just like any other image
      format supported by the web browser. AVIF was developed from the AV1 video format and uses
      HEIF as the container and AV1 frames. It is a new format. AV1 is already supported in most web
      browsers, and the work has begun to integrate AVIF too.
      <BlogSubtitle text="Check your version" />
      If you would like to find out your browser's version, open its settings and help menu and
      click 'about'. If you have version 77 or above, you will be able to use the tutorial below to
      enable the AVIF image format.
      <BlogImage url="firefox-help" alt="opening the menu in firefox" />
      <BlogImage url="firefox-help-about" alt="opening the about menu in firefox" />
      <BlogImage url="firefox-version" alt="firefox version" />
      <BlogSubtitle text="Enable AVIF support in Firefox" />
      Provided that you have installed a compatible version, you can easily add support for AVIF
      with the about:config configurations. Type ‘about:config’ (without the asterisks) inside the
      address bar and press Enter.{" "}
      <BlogImage url="firefox-about" alt="typing about:config inside the browser url" /> Most likely
      a warning message will appear, telling you to be careful. No worries, we will be handling
      everything gently. Click on 'Accept the risk and continue'.{" "}
      <BlogImage url="firefox-warning" alt="firefox warning" /> In the search bar at the top of the
      page, search for avif. The option ‘image.avif.enabled’ is the one you are looking for. If the
      second column's value is showing 'false', click the right switch button to set it to true. A
      'true' value means that Firefox supports AVIF, whereas a 'false' value means the browser's
      image format isn't supported.{" "}
      <BlogImage url="firefox-avifsearch" alt="firefox search for avif support" />
      <BlogNote text="Mozilla considers support to be experimental. However, most AVIF files should be rendered successfully, and full native support is expected to arrive in the early months of 2021." />
      Remember to restart Firefox. Then come back to this page to see this fantastic image:
      <img
        src="/images/comparison.avif"
        alt="your browser may show this AVIF img"
        decoding="async"
        loading="lazy"
        width="720px"
      />
      <BlogSubtitle text="Update January 2021" />
      There has been other industry adoption for AVIF images, such as Microsoft with Windows. Google
      added support for AVIF to Chrome earlier this year and shipped it with Chrome 85. Mozilla
      Firefox is also very soon expected to enable support for AVIF as an image format based on AV1
      video coding. Mozilla has announced that current AVIF image support is complete. Also, they
      claim previously encountered problems with the format have been resolved. There was a Mozilla
      bug ticket tracking the default support of AVIF. The patch enabling default support has
      initially been pushed but reverted as a result of broken tests. Those items have been reviewed
      and AVIF appears to be ready to land now. In any case, Firefox will support AVIF images with
      its next versions in early 2021. We can't wait for users to be able to directly use and view
      AVIF images. For those looking to convert their images to AVIF, try out our fastest converter.
      It works with Firefox already.
    </Blog>
  );
}
