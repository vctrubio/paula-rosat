"use client";

import { useEffect } from "react";
import { artworkSources } from "@/content/artwork-assets";

function reveal(source: string, replacement?: string) {
  document.querySelectorAll<SVGImageElement>("image[data-art-src]").forEach((image) => {
    if (image.dataset.artSrc !== source) return;
    if (replacement) image.setAttribute("href", replacement);
    image.dataset.artReady = "true";
  });
}

export function ArtworkReveal() {
  useEffect(() => {
    let active = true;

    for (const source of artworkSources) {
      const artwork = new Image();
      artwork.onload = async () => {
        try {
          await artwork.decode();
        } catch {
          // A completed load is still safe to display when decode is unavailable.
        }
        if (active) reveal(source);
      };
      artwork.onerror = () => {
        const fallback = source.endsWith(".webp")
          ? source.replace(/\.webp$/, source.startsWith("/portraits/") ? ".svg" : ".png")
          : source;
        const original = new Image();
        original.onload = () => { if (active) reveal(source, fallback); };
        original.onerror = () => { if (active) console.error(`Artwork failed to load: ${source}`); };
        original.src = fallback;
      };
      artwork.src = source;
    }

    return () => { active = false; };
  }, []);

  return null;
}
