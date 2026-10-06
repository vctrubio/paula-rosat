import type { IllustrationId } from "@/content/map.es";
import { HighlightedTitle } from "./highlighted-title";

// The same vector artwork and editable SVG title are used in both sections.
export function BotanicalIllustration({ id, title, className = "" }: { id: IllustrationId; title: string; className?: string }) {
  return (
    <svg viewBox="0 0 320 282" className={`botanical-illustration ${className}`} aria-hidden="true">
      <HighlightedTitle title={title} x={160} y={26} width={Math.max(150, title.length * 13)} />
      <image href={`/illustrations/${id}.svg`} y="42" width="320" height="240" />
    </svg>
  );
}
