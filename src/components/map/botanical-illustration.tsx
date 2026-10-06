import type { IllustrationId } from "@/content/map.es";

// The same vector artwork and editable SVG title are used in both sections.
export function BotanicalIllustration({ id, title, className = "" }: { id: IllustrationId; title: string; className?: string }) {
  return (
    <svg viewBox="0 0 320 282" className={`botanical-illustration ${className}`} aria-hidden="true">
      <image href={`/illustrations/${id}.svg`} width="320" height="240" />
      <text x="160" y="269" textAnchor="middle" className="illustration-title">{title}</text>
    </svg>
  );
}
