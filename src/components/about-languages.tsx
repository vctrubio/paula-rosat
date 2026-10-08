"use client";

import { useState } from "react";
import { languageNames, type Locale } from "@/i18n/config";

const languages = ["es", "en", "ca", "fr"] as const;

export function AboutLanguages() {
  const [selected, setSelected] = useState<Locale>("es");
  const [pointerAngle, setPointerAngle] = useState(-45);

  function selectLanguage(locale: Locale, index: number) {
    const target = index * 90 - 45;
    setPointerAngle((angle) => angle + ((target - angle + 540) % 360 + 360) % 360 - 180);
    setSelected(locale);
  }

  return (
    <div className="about-languages" role="group" aria-label="Idiomas">
      <svg className="language-still" viewBox="0 0 76 76" fill="none" aria-hidden="true">
        <path className="language-still-body" d="M35 35 C35 39 31 40 32 43 C32.5 45 35 45 34 47 C30 49 28 52 29 56 C30 61 46 61 47 56 C48 52 46 49 42 47 C41 45 43.5 45 44 43 C45 40 41 39 41 35 Z" />
        <path d="M33 46 Q38 47 43 46 M32 60 L30 63 M44 60 L46 63" />
        <g className="language-still-pointer" style={{ rotate: `${pointerAngle}deg` }}>
          <path d="M38 36 C37 32 40 29 38 24 C37.5 22 38 20 38 18" />
        </g>
      </svg>
      {languages.map((locale, index) => (
        <div className="about-language-position" key={locale} style={{ rotate: `${index * 90 - 45}deg` }}>
          <button type="button" lang={locale} aria-label={languageNames[locale]} title={languageNames[locale]} aria-pressed={selected === locale} onClick={() => selectLanguage(locale, index)}>
            <svg viewBox="0 0 44 28" aria-hidden="true">
              <defs>
                <path id={`language-arc-${locale}`} d="M 4 23 Q 22 3 40 23" />
              </defs>
              <text>
                <textPath href={`#language-arc-${locale}`} startOffset="50%" textAnchor="middle">
                  {locale.toUpperCase()}
                </textPath>
              </text>
            </svg>
          </button>
          <span aria-hidden="true">·</span>
        </div>
      ))}
    </div>
  );
}
