import Checkbox from "@components/Checkbox";
import Blog from "@components/Blog";
import SmartLink from "@components/SmartLink";

import { march2021 as postdata } from "lib/meta";

import { releaseIndex as post1 } from "lib/meta";
import { january2021 as post2 } from "lib/meta";
import { february2021 as post3 } from "lib/meta";

export default function February2021() {
  return (
    <Blog className="release" postdata={postdata} posts={[post1, post2, post3]}>
      <h2>Accessibility</h2>
      One would think a website that heavily focuses on images wouldn't care about accessibility,
      right? Wrong! There are a lot of people with physical disabilities that affect how they
      perceive colors, images, and websites. We've been spending days and weeks learning how to
      design websites for a good accessibility, especially when using screenreaders or being unable
      to use a pointer like a mouse but only rely on the keyboard.
      <Checkbox
        advantages={[
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
      We realize these changes may not seem like a big deal, but they're just a huge step towards
      making our website accessible to everyone and we're happy to be able to offer everyone a
      chance to experience AVIF.
      <h2>API</h2>
      As part of our service, we would also like to provide a Web API. We are currently working on a
      REST API for avif.io and we're happy to announce that our version 0.0.1 is working
      beautifully! We are making sure things go smooth before we release it to the public. The
      server is written in Rust, heavily relying on the asynchronous features of the language and
      the Tokio runtime. It uses the actix_web actor framework for concurrent messaging and
      websocket support. We are planning to offer an automatic method for determining best image
      quality using an SSIM measure, as well as training an AI model on our data in the future. All
      of course, while keeping your privacy. Your images will not be analyzed, viewed or stored. We
      are super excited for all the upcoming steps.{" "}
      <SmartLink text="Join our Discord" link="https://discord.com/invite/6w42YpF5hm" /> for staying
      up to date on latest changes and being part of the development.
      <h2>Conversion issues</h2>
      These past few weeks, we've gotten a lot of correspondence from the Firefox developers,
      specifically Jon Bauman, the guy who is responsible for the AVIF implementation, especially
      the recent upcoming full public release, without AVIF support hidden behind a developer flag.
      Long story short, they (or well, a user){" "}
      <SmartLink
        aria="reported bug on mozilla bug forum"
        text="experienced a few bugs when it comes to our converter"
        link="https://bugzilla.mozilla.org/show_bug.cgi?id=1700723"
      />
      . It seems like our AVIF serialization{" "}
      <SmartLink
        aria="bugtracker for avif-serialize issues"
        text="is running with a third party dependency"
        link="https://github.com/mozilla/mp4parse-rust/issues/236"
      />{" "}
      that does not comply with the official AVIF spec. In order to work around this and also give
      us more flexibility in the future, we are currently looking into the
      <SmartLink
        aria="libheif github page"
        text="inclusion of libheif"
        link="https://github.com/strukturag/libheif"
      />
      in our conversion process.
    </Blog>
  );
}
