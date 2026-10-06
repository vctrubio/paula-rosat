import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { StoryJourney } from "@/components/story-journey";
import { AboutSection } from "@/components/sections/about-section";
import { MapSection } from "@/components/sections/map-section";
import { ElaborateSection } from "@/components/sections/elaborate-section";
import { SiteFooter } from "@/components/site-footer";
import { EcosystemSection } from "@/components/sections/ecosystem-section";

export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image", alt: `${siteConfig.name} — ${siteConfig.description}` }],
  },
};

export default function Home() {
  return (
    <div className="portfolio">
      <main id="main">
        <AboutSection />
        <StoryJourney>
          <MapSection />
          <ElaborateSection />
          <EcosystemSection />
        </StoryJourney>
      </main>
      {/* <div className="portfolio-footer"><SiteFooter /></div> */}
    </div>
  );
}
