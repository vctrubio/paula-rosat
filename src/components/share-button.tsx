"use client";

import { useState } from "react";
import { seoConfig } from "@/config/seo";

const shareText = `${seoConfig.name}\n${seoConfig.description}`;
const shareMessage = `${shareText}\n${seoConfig.url}`;

export function ShareButton() {
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
      setStatus("Mensaje copiado");
    } catch {
      setShowLink(true);
      setStatus("Copia este mensaje para compartir");
    }
  }

  return (
    <span className="share-control">
      <button type="button" onClick={share} aria-label="Compartir" title="Compartir">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 15V3m-4 4 4-4 4 4M7 11H4v10h16V11h-3" /></svg>
      </button>
      <span role="status" className="share-status">{status}</span>
      {showLink && <textarea className="share-url" rows={5} aria-label="Mensaje para compartir" readOnly value={shareMessage} onFocus={(event) => event.currentTarget.select()} />}
    </span>
  );
}
