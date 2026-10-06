export function IllustratedHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2 id={id} className="section-title whitespace-nowrap text-[clamp(1.4rem,4vw,3.5rem)] leading-[1.15] italic">
      {children}
    </h2>
  );
}
