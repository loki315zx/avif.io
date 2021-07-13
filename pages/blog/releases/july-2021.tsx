import Checklist from "@components/Blog/Checklist";
import ContentTable, { ContentTableEntry } from "@components/Blog/ContentTable";
import H from "@components/Blog/H";
import Link from "@components/Link";
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
      postMeta={meta.july2021}
      posts={[meta.february2021, meta.january2021, meta.march2021]}
    >
      <ContentTable contentTable={contentTable} />
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="We are open source"
      />
      Each project comes with a set of responsibilities. As a two-person team
      involved in our day-to-day jobs and family, we could not dedicate the time
      necessary to keep the development as steady as we would have liked. Due to
      the fast-paced nature of the project, we thought it would be best to
      provide people with the ability to create their own versions and work on
      their own features. Multiple requests have been made for the source code
      to be released. Many people have asked how they can assist us with the
      development. <br />
      We are pleased to announce that we are now an open-source project. Besides
      making the development process easier, the general public is also able to
      gain insight into how and what data we process. Due to the fact that file
      converters typically save your images in the cloud, being open-source
      provides people with the confidence that their images are secure. As a
      means of achieving a better cooperative relationship, we have
      <Checklist
        items={[
          "upgraded all dependencies to their latest version",
          "gone through a war with ESlint to fix issues",
          "switch our CSS to using Tailwind for easier comprehension",
          "revamped lots of UI parts for better visuals",
          "transformed our Trello cards to Github issues",
          "made sure to publish every part of the website, even the converter with its whole logic",
        ]}
        checked={true}
      />
      We realize these changes may not seem like a big deal, but they're just a
      huge step towards making our website accessible to everyone. We are super
      excited for all the upcoming steps.
      <Link
        text="Join our Discord"
        link="discord.com/invite/6w42YpF5hm"
        ext
      />{" "}
      for staying up to date on latest changes and being part of the
      development.
      <br />
      Stay safe ~ Justin and Niksa
    </Blog>
  );
}
