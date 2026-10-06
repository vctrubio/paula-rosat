import { Fraunces } from "next/font/google";

const titleFont = Fraunces({ subsets: ["latin", "latin-ext"], weight: "500", display: "swap" });

// Alternating passes reveal the existing artwork like a pencil shading the page.
const sketchPasses = Array.from({ length: 39 }, (_, index) => {
  const y = 111 + index * 12;
  return index % 2 === 0 ? `L 442 ${y + 8}` : `L 78 ${y}`;
}).join(" ");

export function Portrait({ label }: { label: string }) {
  return (
    <figure className="portrait" aria-label={label} role="img">
      <svg viewBox="0 0 520 580" className="block h-auto w-full overflow-visible" aria-hidden="true">
        <defs>
          <path id="portrait-name-arc" d="M 15 350 A 245 258 0 0 1 505 350" />
          <mask id="portrait-sketch-reveal" maskUnits="userSpaceOnUse" x="70" y="100" width="380" height="470">
            <path className="portrait-sketch-pass" d={`M 78 103 ${sketchPasses}`} pathLength="1" fill="none" stroke="white" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
          </mask>
          <mask id="portrait-sketch-scroll" maskUnits="userSpaceOnUse" x="70" y="100" width="380" height="470">
            <path className="portrait-sketch-scroll" d={`M 78 103 ${sketchPasses}`} pathLength="1" fill="none" stroke="white" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" />
          </mask>
          <clipPath id="portrait-oval">
            <ellipse cx="260" cy="335" rx="170" ry="220" />
          </clipPath>
        </defs>
        <g mask="url(#portrait-sketch-scroll)">
        <g mask="url(#portrait-sketch-reveal)">
        <image
          href="/portraits/paula-sketch-v2.svg"
          x="90"
          y="115"
          width="340"
          height="440"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#portrait-oval)"
        />
        </g>
        <ellipse className="portrait-sketch-outline" pathLength="1" cx="260" cy="335" rx="170" ry="220" fill="none" stroke="var(--color-line)" />
        </g>
        <text className="portrait-name" fontSize="54" style={titleFont.style}>
          <textPath href="#portrait-name-arc" startOffset="50%" textAnchor="middle">Paula Rosat</textPath>
        </text>
      </svg>
    </figure>
  );
}
