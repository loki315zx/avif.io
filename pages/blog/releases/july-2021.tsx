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
      With every project comes responsibilities. As a team of two people being
      involved with our daily jobs and family, we couldn't make up the time to
      keep the development as steady as we wished we could. Realizing that this
      project is in a fast-living environment, we figured it would be the best
      idea to enable people the ability to create their own versions and work on
      their own features. We have been asked multiple times to release the
      source code. We have been asked many times how people can help us with the
      development. We're happy to announce that by today, we are an open-source
      project. Not only does this help the development, but also people can
      easily understand and get insights on how and what data we process. As
      file converters usually tend to save your images in a cloud, being
      open-source allows us to give people the confidence that their images are
      secure. In order to achieve a better cooperation, we have
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
