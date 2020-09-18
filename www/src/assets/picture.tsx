import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={192} height={128} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={0.5}
          y1={1}
          x2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#bde2ff" />
          <stop offset={1} stopColor="#d3ecff" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#29c6ff" />
          <stop offset={1} stopColor="#29a2ff" />
        </linearGradient>
      </defs>
      <path
        d="M186.375 61H5.625C2.475 61 0 63.166 0 65.923v113.231l73.5-44.308 45 49.231 22.5-19.692 49.425 23.237a5.287 5.287 0 001.575-3.545V65.923c0-2.757-2.475-4.923-5.625-4.923z"
        transform="translate(0 -61)"
        fill="url(#prefix__a)"
      />
      <path
        d="M129.884 180.531c9.315 0 16.892-6.624 16.892-14.766S139.2 151 129.884 151s-16.892 6.624-16.892 14.766 7.577 14.765 16.892 14.765zm15.243 28.089a6.219 6.219 0 00-7.963 0l-18.542 16.207L77.506 179.9a6.183 6.183 0 00-8.379-.406L0 239.594v4.922c0 2.756 2.477 4.922 5.631 4.922h180.937a7.024 7.024 0 004.054-1.378z"
        transform="translate(0 -121.437)"
        fill="url(#prefix__b)"
      />
    </svg>
  );
}

export default SvgComponent;
