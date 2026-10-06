import type { IllustrationId } from "@/content/map.es";
import { HighlightedTitle } from "./highlighted-title";
import { illustrationSource } from "./illustration-source";

// The same artwork and editable SVG title are used in both sections.
export function BotanicalIllustration({ id, title, className = "", showTitle = true }: { id: IllustrationId; title: string; className?: string; showTitle?: boolean }) {
  return (
    <svg viewBox={showTitle ? "0 0 320 282" : "0 0 320 240"} className={`botanical-illustration ${className}`} aria-hidden="true">
      {showTitle && <HighlightedTitle title={title} x={160} y={26} width={Math.max(150, title.length * 13)} />}
      <image href={illustrationSource(id)} y={showTitle ? 42 : 0} width="320" height="240" />
    </svg>
  );
}
