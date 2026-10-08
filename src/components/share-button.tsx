"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { seoConfig } from "@/config/seo";


export function ShareButton() {
  const t = useTranslations("Common");
  const metadata = useTranslations("Metadata");
  const shareText = `${seoConfig.name}\n${metadata("description")}`;
  const shareMessage = `${shareText}\n${seoConfig.url}`;
  const [status, setStatus] = useState("");
  const [showLink, setShowLink] = useState(false);

  async function share() {
    setStatus("");
    setShowLink(false);
    if (navigator.share) {
      try {
        await navigator.share({ title: seoConfig.name, text: shareText, url: seoConfig.url });
        return;
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(shareMessage);
      setStatus(t("copied"));
    } catch {
      setShowLink(true);
      setStatus(t("copyToShare"));
    }
  }

  return (
    <span className="share-control">
      <button type="button" onClick={share} aria-label={t("share")} title={t("share")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 15V3m-4 4 4-4 4 4M7 11H4v10h16V11h-3" /></svg>
      </button>
      <span role="status" className="share-status">{status}</span>
      {showLink && <textarea className="share-url" rows={5} aria-label={t("shareMessage")} readOnly value={shareMessage} onFocus={(event) => event.currentTarget.select()} />}
    </span>
  );
}
