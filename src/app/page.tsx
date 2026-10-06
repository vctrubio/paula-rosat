import type { Metadata } from "next";
import { homeMetadata } from "@/config/seo";
import { SiteFooter } from "@/components/site-footer";
import { StoryJourney } from "@/components/story-journey";
import { AboutSection } from "@/components/sections/about-section";
import { MapSection } from "@/components/sections/map-section";
import { ElaborateSection } from "@/components/sections/elaborate-section";
import { ArtworkReveal } from "@/components/artwork-reveal";
import { artworkSources } from "@/content/artwork-assets";
// import { EcosystemSection } from "@/components/sections/ecosystem-section";

export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <div className="portfolio">
      {artworkSources.map((source, index) => (
        <link key={source} rel="preload" as="image" href={source} fetchPriority={index === 0 ? "high" : "low"} />
      ))}
      <ArtworkReveal />
      <noscript><style>{`.art-image { opacity: 1; }`}</style></noscript>
      <main id="main">
        <AboutSection />
        <StoryJourney>
          <MapSection />
          <ElaborateSection />
          {/* <EcosystemSection /> */}
        </StoryJourney>
      </main>
      <SiteFooter />
    </div>
  );
}
