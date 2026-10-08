"use client";

import { useState, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";

export function BioReveal({ locale, children }: { locale: Locale; children: ReactNode }) {
  const [entrance, setEntrance] = useState({ locale, animate: true });
  if (entrance.locale !== locale) {
    setEntrance({ locale, animate: false });
  }

  return (
    <p data-entrance={entrance.animate && entrance.locale === locale} className="short-bio mx-auto max-w-xl px-4 text-center font-display text-xl leading-relaxed sm:text-2xl">
      {children}
    </p>
  );
}
