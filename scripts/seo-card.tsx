import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { dropletPath } from "../src/config/brand";
import { seoConfig } from "../src/config/seo";

const card = seoConfig.image;
export const alt = card.alt;
export const size = { width: card.width, height: card.height };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const font = await readFile(join(process.cwd(), "src/assets/fonts/CormorantGaramond.ttf"));
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: card.background, color: card.ink, padding: 64, fontFamily: "Cormorant" }}>
      <div style={{ width: "100%", height: "100%", display: "flex", gap: 32, alignItems: "center", justifyContent: "center" }}>
        <svg width="280" height="390" viewBox="40 12 122 173" fill={card.ink}>
          <path fillRule="evenodd" d={dropletPath} />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 640 }}>
          <div style={{ fontSize: 126, lineHeight: 1.1, letterSpacing: -2 }}>{card.name}</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 28, textAlign: "center" }}>
            <div style={{ fontSize: 48, lineHeight: 1.15 }}>{card.firstLine}</div>
            <div style={{ fontSize: 30, lineHeight: 1, marginTop: 7, marginBottom: 9, color: card.botanical }}>{card.conjunction}</div>
            <div style={{ fontSize: 48, lineHeight: 1.15 }}>{card.secondLine}</div>
          </div>
        </div>
      </div>
    </div>,
    { ...size, fonts: [{ name: "Cormorant", data: font, weight: 400, style: "normal" }] },
  );
}
