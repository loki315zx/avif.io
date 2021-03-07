import SmartLink from "@components/SmartLink";
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
      <SmartLink
        link={`https://twitter.com/intent/tweet?source=${url}&text=${url}`}
        aria="Share on Twitter"
        id="twitter"
        tabindex={0}
      />
      <SmartLink
        link={`https://www.reddit.com/submit?url=${url}`}
        aria="Share on Reddit"
        id="reddit"
        tabindex={0}
      />
      <SmartLink
        link={`https://www.facebook.com/share.php?u=${url}`}
        aria="Share on Facebook"
        id="facebook"
        tabindex={0}
      />
      <div>
        <a
          role="button"
          onClick={() => share()}
          onKeyPress={() => share()}
          aria-label="share"
          title="share on social media"
          id="share"></a>
      </div>
    </address>
  );
}
