import Link from "next/link";

export default function CTA() {
  return (
    <div className="cta__container">
      <Link href="/">
        <a href="/" tabIndex={0}>
          <div className="cta overlay-before">
            <div className="cta__subtitle">
              Profit from a faster website, higher ranking and better conversions.
            </div>
            <div className="cta__title text-60">Convert your images to AVIF for free.</div>
            <div className="cta__blur overlay"></div>
          </div>
        </a>
      </Link>
    </div>
  );
}
