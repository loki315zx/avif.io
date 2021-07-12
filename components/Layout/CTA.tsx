import Link from "next/link";

export default function CTA() {
  return (
    <div className="container mx-auto my-8 text-center">
      <Link href="/">
        <button className="text-left max-w-screen-lg container inline-block">
          <div className="relative p-6 overflow-hidden rounded-md cursor-pointer">
            <div className="relative z-10 opacity-80">
              Profit from a faster website, higher ranking and better
              conversions.
            </div>
            <div className="relative z-10 text-2xl font-bold">
              Convert your images to AVIF for free.
            </div>
            <div className="z-0 bg-gradient animate-cta absolute right-0 left-0 top-0 bottom-0 h-48 opacity-10"></div>
            <div className="-z-1 bg-gradient absolute right-0 left-0 top-0 bottom-0"></div>
          </div>
        </button>
      </Link>
    </div>
  );
}
