import BlogLink from "@components/BlogLink";
import { useRouter } from "next/router";

export default function Blog() {
  function share() {
    event!.preventDefault();
    navigator.share({ url: url });
  }

  const router = useRouter();
  const url = "https://avif.io" + router.pathname;
  return (
    <address className="share-container">
      <BlogLink
        link={`https://twitter.com/intent/tweet?source=${url}&text=${url}`}
        aria="Share on Twitter"
        id="twitter"
      />
      <BlogLink
        link={`https://www.reddit.com/submit?url=${url}`}
        aria="Share on Reddit"
        id="reddit"
      />
      <BlogLink
        link={`https://www.facebook.com/share.php?u=${url}`}
        aria="Share on Facebook"
        id="facebook"
      />
      <div>
        <a
          role="button"
          onClick={() => share()}
          onKeyPress={() => share()}
          aria-label="share"
          tabIndex={99}
          id="share"></a>
      </div>
    </address>
  );
}
