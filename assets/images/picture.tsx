import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="192" height="126">
      <defs>
        <linearGradient
          id="a"
          x1=".5"
          y1="1.27"
          x2=".5"
          y2="2.52"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#54bfff" />
          <stop offset="1" stopColor="#29a2ff" />
        </linearGradient>
      </defs>
      <g transform="translate(-344 -519)">
        <rect
          width="192"
          height="126"
          rx="6"
          transform="translate(344 519)"
          fill="#bde2ff"
        />
        <path
          d="M129.88 180.53c9.32 0 16.9-6.62 16.9-14.76S139.2 151 129.88 151 113 157.62 113 165.77s7.58 14.76 16.9 14.76zm15.25 28.09a6.22 6.22 0 00-7.97 0l-18.54 16.2-41.11-44.92a6.18 6.18 0 00-8.38-.4L0 239.6v4.92c0 2.75 2.48 4.92 5.63 4.92l180.92-.08a5.83 5.83 0 004.03-2.08z"
          transform="translate(344 395.56)"
          fill="url(#a)"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
