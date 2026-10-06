export function PortraitPlaceholder({ label }: { label: string }) {
  return (
    <figure className="portrait-placeholder" aria-label={label} role="img">
      <svg viewBox="0 0 440 560" className="block h-auto w-full overflow-visible" aria-hidden="true">
        <defs>
          <path id="portrait-name-arc" d="M 30 295 A 190 240 0 0 1 410 295" />
        </defs>
        <ellipse cx="220" cy="305" rx="170" ry="220" fill="var(--color-parchment)" stroke="var(--color-line)" />
        <text fill="currentColor" className="font-display" fontSize="46" letterSpacing="3">
          <textPath href="#portrait-name-arc" startOffset="50%" textAnchor="middle">Paula Rosat</textPath>
        </text>
      </svg>
    </figure>
  );
}
