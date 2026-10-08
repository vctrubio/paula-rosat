"use client";

import { useTranslations } from "next-intl";

export function BackToTop() {
  const t = useTranslations("Common");
  function goUp() {
    window.history.replaceState(null, "", "/#about");
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    const about = document.getElementById("about");
    if (about) {
      about.tabIndex = -1;
      about.focus({ preventScroll: true });
    }
  }
  return <button type="button" onClick={goUp} className="closing-top" aria-label={t("backToTop")} title={t("backToTop")}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5m-6 6 6-6 6 6" /></svg>
  </button>;
}
