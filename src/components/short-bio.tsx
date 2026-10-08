import type { CSSProperties } from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { BioReveal } from "@/components/bio-reveal";

export async function ShortBio() {
  const [t, locale] = await Promise.all([getTranslations("About"), getLocale()]);
  const description = t("bio");
  const sentences = description.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((sentence) => sentence.trim()) ?? [description];
  const lines = sentences.map((text, index) => ({
    text,
    offset: sentences.slice(0, index).join("").length,
  }));

  return (
    <BioReveal locale={locale}>
      <span className="sr-only">{description}</span>
      <span aria-hidden="true">
        {lines.map(({ text, offset }) => (
          <span key={text} className="block not-first:mt-1">
            {Array.from(text.replaceAll("-", "\u2011")).map((letter, index) => (
              <span key={index} className="bio-letter" style={{ "--letter-delay": `${(offset + index) * 0.022}s` } as CSSProperties}>{letter}</span>
            ))}
          </span>
        ))}
      </span>
    </BioReveal>
  );
}
