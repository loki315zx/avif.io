import Link from "next/link";

export default function CTA() {
  return (
    <div className="container my-8 mx-auto text-center">
      <Link href="/" passHref>
        <button className="container inline-block max-w-screen-lg text-left">
          <div className="overflow-hidden relative p-3 rounded-md cursor-pointer md:p-6">
            <div className="relative z-10 opacity-80">
              Profit from a faster website, higher ranking and better
              conversions.
            </div>
            <div className="relative z-10 text-2xl font-bold">
              Convert your images to AVIF for free.
            </div>
            <div
              className="absolute top-0 right-0 bottom-0 left-0 z-0 h-48 opacity-10 bg-gradient"
              transition-style="cta"
            ></div>
            <div className="absolute top-0 right-0 bottom-0 left-0 -z-1 bg-gradient"></div>
          </div>
        </button>
      </Link>
    </div>
  );
}
