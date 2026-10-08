import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { homeMetadata, seoConfig } from "@/config/seo";
import { SiteFooter } from "@/components/site-footer";
import { StoryJourney } from "@/components/story-journey";
import { AboutSection } from "@/components/sections/about-section";
import { MapSection } from "@/components/sections/map-section";
import { ProcesoSection } from "@/components/sections/proceso-section";
import { ArtworkReveal } from "@/components/artwork-reveal";
import { artworkSources } from "@/content/artwork-assets";
// import { EcosystemSection } from "@/components/sections/ecosystem-section";

export async function generateMetadata(): Promise<Metadata> {
  const [t, locale] = await Promise.all([getTranslations("Metadata"), getLocale()]);
  return {
    ...homeMetadata,
    description: t("description"),
    openGraph: {
      ...homeMetadata.openGraph,
      description: t("description"),
      locale: { es: "es_ES", en: "en_GB", ca: "ca_ES", fr: "fr_FR" }[locale],
      images: [{ url: seoConfig.image.path, width: seoConfig.image.width, height: seoConfig.image.height, alt: t("imageAlt") }],
    },
    twitter: {
      ...homeMetadata.twitter,
      description: t("description"),
      images: [{ url: seoConfig.image.path, alt: t("imageAlt") }],
    },
  };
}

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
          <ProcesoSection />
          {/* <EcosystemSection /> */}
        </StoryJourney>
      </main>
      <SiteFooter />
    </div>
  );
}
