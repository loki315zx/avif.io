import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <Link href="/">
      <div className="cta__container">
        <div className="cta">
          <div className="cta__subtitle">
            Profit from a faster website, higher ranking and better conversions.
          </div>
          <div className="cta__title text-60">
            Convert your images to avif for free.
          </div>
          <div className="cta__blur"></div>
        </div>
      </div>
    </Link>
  );
}
