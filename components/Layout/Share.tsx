import { useRouter } from "next/router";
import tw from "@assets/twitter.svg";
import rd from "@assets/reddit.svg";
import fb from "@assets/facebook.svg";
import sh from "@assets/share.svg";

const ShareButton = (props: any) => {
  return (
    <button
      className="w-5 h-5 m-1 p-1 bg-no-repeat bg-center bg-contain hidden md:block"
      style={{ backgroundImage: `url(${props.image})` }}
      onClick={() => window.open(`${props.url}`, "_blank")}
      onKeyPress={() => window.open(`${props.url}`, "_blank")}
      type="button"
      title={`Share on ${props.name}`}
      id={props.name}
      tabIndex={0}
    ></button>
  );
};

export default function Blog() {
  function share() {
    event!.preventDefault();
    navigator.share({ url: url });
  }

  const router = useRouter();
  const url = "https://avif.io" + router.pathname;
  return (
    <div className="fixed right-4 bottom-4 flex content-center justify-items-center bg-bg-500 p-2 rounded-lg">
      <ShareButton
        url={`https://twitter.com/intent/tweet?text=${url}`}
        name="Twitter"
        image={tw}
      />
      <ShareButton
        url={`https://reddit.com/submit?url=${url}`}
        name="Reddit"
        image={rd}
      />
      <ShareButton
        url={`https://facebook.com/share.php?u=${url}`}
        name="Facebook"
        image={fb}
      />
      <button
        className="w-5 h-5 m-1 p-1 bg-no-repeat bg-center bg-contain block md:hidden"
        style={{ backgroundImage: `url(${sh})` }}
        onClick={() => share()}
        onKeyPress={() => share()}
        aria-label="share"
        title="share on social media"
        id="share"
      ></button>
    </div>
  );
}
