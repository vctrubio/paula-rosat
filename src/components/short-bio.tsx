import type { CSSProperties } from "react";
import { seoConfig } from "@/config/seo";

const sentences = seoConfig.description.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((sentence) => sentence.trim()) ?? [seoConfig.description];
const lines = sentences.map((text, index) => ({
  text,
  offset: sentences.slice(0, index).join("").length,
}));

export function ShortBio() {
  return (
    <p lang="es" className="max-w-xl px-4 text-center font-display text-2xl leading-snug text-ink-muted ">
      <span className="sr-only">{seoConfig.description}</span>
      <span aria-hidden="true">
        {lines.map(({ text, offset }) => (
          <span key={text} className="block not-first:mt-1">
            {Array.from(text.replaceAll("-", "\u2011")).map((letter, index) => (
              <span key={index} className="bio-letter" style={{ "--letter-delay": `${(offset + index) * 0.022}s` } as CSSProperties}>{letter}</span>
            ))}
          </span>
        ))}
      </span>
    </p>
  );
}
