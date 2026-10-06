export function IllustratedHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="mx-auto w-full max-w-lg">
      <span className="sr-only">{children}</span>
      <svg viewBox="0 0 600 110" className="block w-full" aria-hidden="true">
        <text x="300" y="83" textAnchor="middle" fill="currentColor" className="font-display" fontSize="88" fontStyle="italic">{children}</text>
      </svg>
    </h2>
  );
}
