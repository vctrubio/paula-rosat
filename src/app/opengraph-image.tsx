import lettering from "@/assets/fonts/og-tagline.json";
import { ImageResponse } from "next/og";
import { dropletPath } from "@/config/brand";
import { siteConfig } from "@/config/site";

export const alt = "Paula Rosat — Destiladora de plantas medicinales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#F7F4EB", color: "#293327", padding: 44 }}>
      <div style={{ width: "100%", height: "100%", border: "1px solid #D8D7C8", display: "flex", flexDirection: "row", gap: 42, alignItems: "center", justifyContent: "center" }}>
        <svg width="150" height="150" viewBox="12 12 176 176" fill="#394735">
          <path fillRule="evenodd" d={dropletPath} />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ fontSize: 76, fontWeight: 400, letterSpacing: -2 }}>{siteConfig.name}</div>
          <svg width="620" height="76" viewBox={`0 0 ${lettering.width} ${lettering.height}`} style={{ marginTop: 12 }}>
            {lettering.paths.map((path, index) => <path key={index} d={path.d} fill="#626858" transform={`translate(${path.x} ${lettering.ascent - path.y}) scale(1 -1)`} />)}
          </svg>
        </div>
      </div>
    </div>,
    size,
  );
}
