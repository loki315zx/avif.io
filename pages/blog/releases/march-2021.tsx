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
      postMeta={meta.march2021}
      posts={[meta.february2021, meta.january2021, meta.tutWordpress]}
    >
      <ContentTable contentTable={contentTable} />
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Accessibility"
      />
      One would think a website that heavily focuses on images wouldn't care
      about accessibility, right? Wrong! There are a lot of people with physical
      disabilities that affect how they perceive colors, images, and websites.
      We've been spending days and weeks learning how to design websites for a
      good accessibility, especially when using screenreaders or being unable to
      use a pointer like a mouse but only rely on the keyboard.
      <Checklist
        items={[
          "Navigation through the website is possible without the mouse",
          "More semantic HTML elements",
          "Improved markup for screenreaders",
          "Conversion settings now completely adjustable and explained for keyboard users",
          "Conversion can now be cancelled with the keyboard",
          "Download button won't appear before conversion finished for keyboard users",
          "You can easily skip through all blog posts now",
        ]}
        checked={true}
      />
      We realize these changes may not seem like a big deal, but they're just a
      huge step towards making our website accessible to everyone and we're
      happy to be able to offer everyone a chance to experience AVIF.
      <H level={2} contentTableCallback={contentTableCallback} text="API" />
      As part of our service, we would also like to provide a Web API. We are
      currently working on a REST API for avif.io and we're happy to announce
      that our version 0.0.1 is working beautifully! We are making sure things
      go smooth before we release it to the public. The server is written in
      Rust, heavily relying on the asynchronous features of the language and the
      Tokio runtime. It uses the actix_web actor framework for concurrent
      messaging and websocket support. We are planning to offer an automatic
      method for determining best image quality using an SSIM measure, as well
      as training an AI model on our data in the future. All of course, while
      keeping your privacy. Your images will not be analyzed, viewed or stored.
      We are super excited for all the upcoming steps.
      <Link
        text="Join our Discord"
        link="discord.com/invite/6w42YpF5hm"
        ext
      />{" "}
      for staying up to date on latest changes and being part of the
      development.
      <H
        level={2}
        contentTableCallback={contentTableCallback}
        text="Conversion issues"
      />
      These past few weeks, we've gotten a lot of correspondence from the
      Firefox developers, specifically Jon Bauman, the guy who is responsible
      for the AVIF implementation, especially the recent upcoming full public
      release, without AVIF support hidden behind a developer flag. Long story
      short, they (or well, a user)
      <Link
        aria="reported bug on mozilla bug forum"
        text="experienced a few bugs when it comes to our converter."
        link="bugzilla.mozilla.org/show_bug.cgi?id=1700723"
        ext
      />
      It seems like our AVIF serialization
      <Link
        aria="bugtracker for avif-serialize issues"
        text="is running with a third party dependency"
        link="github.com/mozilla/mp4parse-rust/issues/236"
        ext
      />
      that does not comply with the official AVIF spec. In order to work around
      this and also give us more flexibility in the future, we are currently
      looking into the
      <Link
        aria="libheif github page"
        text="inclusion of libheif"
        link="github.com/strukturag/libheif"
      />
      in our conversion process.
    </Blog>
  );
}
