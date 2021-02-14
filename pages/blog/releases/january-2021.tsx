import { BlogAdvantages } from "@components/BlogComponents";
import Blog from "@components/Blog";

import { january2021 as postdata } from "lib/meta";

import { releaseIndex as post1 } from "lib/meta";
import { february2021 as post2 } from "lib/meta";
import { useAvifInWordpress as post3 } from "lib/meta";

export default function February2021() {
  return (
    <Blog className="release" postdata={postdata} posts={[post1, post2, post3]}>
      <h2>Performance</h2>
      Although improving the speed of the file conversion is our primary priority next to shipping
      new features, we constantly aim to improve the overall loading time of the website. Since the
      image conversion takes place client-side, we aim to minimize the overall clutter caused by the
      conversion to preserve your computer's resources. In this release, we were able to clean up a
      lot of code and remove some dependencies.
      <BlogAdvantages advantages={["Reduced overall page size by 25%"]} checked={true} />
      <h2>User Experience</h2>
      Constantly measuring the User Experience is like a drug to us. We once again ensured that
      everything ran smoothly after the big December release, or even better than before. Thanks to
      Hotjar and your feedback, we will make even more changes in this direction in the future.
      <BlogAdvantages
        advantages={[
          "Added a fixed header for easier navigation",
          "If you accept the Cookie Banner, it won't show again",
          "Optimized layout and readability on mobile sites",
          "Sources of Blog Posts are now ordered alphabetically",
          "The 'Download all' button is now more prominent",
          "Tags under blog posts don't look like they are clickable",
          "Our archives had empty sections, which are removed now",
          "Removed primary convert button on homepage",
          "Improved converting images on mobile devices, even though it isn't our focus",
        ]}
        checked={true}
      />
      <h2>Community</h2>
      We have a Discord now! We linked it in our header and footer, as you like to click our names a
      lot!
      <BlogAdvantages advantages={["Discord channel!"]} checked={true} />
      <h2>Accessibility</h2>
      We fixed several mistakes in terms of accessibility.
      <BlogAdvantages
        advantages={["More awesome website for visually impaired people!"]}
        checked={true}
      />
      <h2>Misc</h2>
      Yada yada. Just some misc stuff I thought I should write into this changelog, even though you
      most likely won't care.
      <BlogAdvantages
        advantages={[
          "Browser Console errors do not show up",
          "Fixed several links not working",
          "We've removed some techy tooltips as probably most people don't care about them",
          "Cleaned the privacy policy page and added a user-friendly description",
          "Added an explainer to the settings box that effects only take place for newly uploaded files",
          "A sitemap has been added for search engines",
          "If we talk about AVIF, we write it like this. If we talk about avif.io, we use lower case letters",
          "removed Google Adsense Tests",
        ]}
        checked={true}
      />
      <h2>Bugs smashed</h2>
      We smashed some of these good ol' bugs.
      <BlogAdvantages
        advantages={[
          "Several other linting and bug fixes",
          "Fixed our Tutorials overview",
          "Updated our Linting process for less errors",
        ]}
        checked={true}
      />
    </Blog>
  );
}
