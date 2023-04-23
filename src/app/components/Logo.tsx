import * as React from "react";
import { SVGProps } from "react";
const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-20 0 975 160"
    width={200}
    {...props}
  >
    <path
      stroke="#4169e1"
      strokeLinecap="round"
      strokeWidth={35}
      d="M30 30v100M80 70v50M130 30v100"
    />
    <text
      x={180}
      y={85}
      fill="#4169e1"
      dominantBaseline="central"
      fontSize={120}
      textAnchor="left"
      className="font-serif font-bold"
    >
      {"WobblyWork"}
    </text>
  </svg>
);
export default Logo;
