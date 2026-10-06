type HighlightedTitleProps = {
  title: string;
  x: number;
  y: number;
  width?: number;
  className?: string;
};

export function HighlightedTitle({ title, x, y, width = 220, className = "illustration-title" }: HighlightedTitleProps) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d={`M ${-width / 2} -2 Q ${-width / 4} -7 0 -2 T ${width / 2} -4`}
        transform="rotate(-4)"
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="16"
        strokeLinecap="round"
        opacity="0.22"
      />
      <text textAnchor="middle" className={className}>{title}</text>
    </g>
  );
}
