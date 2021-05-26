import { useRouter } from "next/router";

export default function Blog() {
  function share() {
    event!.preventDefault();
    navigator.share({ url: url });
  }

  const router = useRouter();
  const url = "https://avif.io" + router.pathname;
  return (
    <dialog className="share-container">
      <button
        onClick={() =>
          window.open(`https://twitter.com/intent/tweet?source=${url}&text=${url}`, "_blank")
        }
        onKeyPress={() =>
          window.open(`https://twitter.com/intent/tweet?source=${url}&text=${url}`, "_blank")
        }
        type="button"
        title="Share on Twitter"
        id="twitter"
        tabIndex={0}></button>

      <button
        onClick={() => window.open(`https://reddit.com/submit?url=${url}`, "_blank")}
        onKeyPress={() => window.open(`https://reddit.com/submit?url=${url}`, "_blank")}
        type="button"
        title="Share on Reddit"
        id="reddit"
        tabIndex={0}></button>

      <button
        onClick={() => window.open(`https://facebook.com/share.php?u=${url}`, "_blank")}
        onKeyPress={() => window.open(`https://facebook.com/share.php?u=${url}`, "_blank")}
        type="button"
        title="Share on Facebook"
        id="facebook"
        tabIndex={0}></button>
      <div>
        <button
          onClick={() => share()}
          onKeyPress={() => share()}
          aria-label="share"
          title="share on social media"
          id="share"></button>
      </div>
    </dialog>
  );
}
