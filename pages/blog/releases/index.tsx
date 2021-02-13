import Archive from "@components/Archive";
import { BlogAdvantages } from "@components/BlogComponents";

const notes110121 = [
  "Added a fixed header for easier navigation.",
  "Browser Console errors do not show up.",
  "If you accept the Cookie Banner, it won't show again",
  "Fixed several links not working",
  "Optimized layout of mobile sites",
  "Sources of Blog Posts are now ordered alphabetically",
  "A sitemap has been added for search engines",
  "Fixed several mistakes in terms of accessibility",
  "Several other linting and bug fixes",
];

const notes150121 = [
  "The 'Download all' button is now more prominent",
  "Tags under blog posts don't look like they are clickable",
  "Our archives had empty sections, which are removed now",
  "We've linked our Discord in the footer, as you like to click our names a lot",
  "We've removed some techy tooltips as probably most people don't care about them",
  "Added a Discord channel :)",
];

const notes190121 = [
  "Fixed our Tutorials overview",
  "removed Google Adsense Tests",
  "Reduced overall page size",
  "Removed primary convert button on homepage",
  "Increased readability on mobile devices",
  "Cleaned the privacy policy page",
  "People love to play with our image slider, we are thinking of integrating it into the conversion progress",
  "Updated our Linting process for less errors",
  "Added an explainer to the settings box that effects only take place for newly uploaded files",
  "Improved uploading on mobile devices, even though it isn't our focus",
  "Consistency: If we talk about AVIF, we write it like this. If we talk about avif.io, we use lower case letters.",
  "Added Hotjar Feedback widget to make friends with people that suffer from failed conversions",
];

const notes210121 = [
  "Made website more accessible by using semantic elements and aria attributes",
  "Added JSON data for better search engine results",
  "Linked Sitemap in footer",
];

const notes130221 = [
  "Moved image slider upwards on our homepage",
  "Created a tooltip for the settings panel so people notice it more",
  "If the conversion fails, you will be asked if we can use your image for further testing",
  "improved overall website performance",
  "Added a new progress indicator to support visually impaired people",
  "Cancelled conversions will disappear after a short period so they don't take up scape.",
  "We were aware that conversion wasn't working on the latest Chrome, Opera & Safari versions. It should be doing well now.",
  "We updated to the latest rav1e version, which speeds of the conversion process.",
];

{
  /*
const notes150221 = [
  "added detailed explanations for our avif advantages on click"
];
*/
}

const posts = [""];

import { releaseIndex as postdata } from "lib/meta";

export default function BlogAvif() {
  return (
    <Archive className="archive" postdata={postdata} posts={posts}>
      <h2>13.02.2021 - Usability Changes</h2>
      <BlogAdvantages advantages={notes130221} checked />
      <h2>21.01.2021 - Misc Changes</h2>
      <BlogAdvantages advantages={notes210121} checked />
      <h2>19.01.2021 - Misc Changes</h2>
      <BlogAdvantages advantages={notes190121} checked />
      <h2>15.01.2021 - Misc Changes</h2>
      <BlogAdvantages advantages={notes150121} checked />
      <h2>11.01.2021 - Misc Changes</h2>
      <BlogAdvantages advantages={notes110121} checked />
    </Archive>
  );
}
