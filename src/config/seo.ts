import type { Metadata } from "next";
import spanish from "../../text/es/metadata.json";

// Edit search results, link previews, and the card copy here.
export const seoConfig = {
  // Production domain shared by metadata and all sharing actions.
  url: "https://paularosat.com",
  name: "Paula Rosat",
  title: "Paula Rosat",
  description: spanish.description,
  locale: "es_ES",
  icons: {
    icon: { url: "/icon.png", type: "image/png", sizes: "48x48" },
  },
  image: {
    path: "/og-image.png",
    width: 1200,
    height: 630,
    alt: spanish.imageAlt,
    name: "Paula Rosat",
    firstLine: spanish.cardFirstLine,
    conjunction: spanish.cardConjunction,
    secondLine: spanish.cardSecondLine,
    background: "#F7F4EB",
    ink: "#293327",
    botanical: "#626858",
  },
} as const;

// After changing image copy or colors, run npm run seo:images.
// Public image files are referenced explicitly here.
export const homeMetadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  alternates: { canonical: seoConfig.url },
  openGraph: {
    type: "website",
    url: seoConfig.url,
    siteName: seoConfig.name,
    title: seoConfig.name,
    description: seoConfig.description,
    locale: seoConfig.locale,
    images: [{
      url: seoConfig.image.path,
      width: seoConfig.image.width,
      height: seoConfig.image.height,
      alt: seoConfig.image.alt,
      type: "image/png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.name,
    description: seoConfig.description,
    images: [{ url: seoConfig.image.path, alt: seoConfig.image.alt }],
  },
};
