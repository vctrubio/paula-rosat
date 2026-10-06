import { mapContent } from "@/content/map.es";
import { RelationshipMap } from "@/components/map/relationship-map";
import { IllustratedHeading } from "@/components/map/illustrated-heading";

export function MapSection() {
  return (
    <section id="map" lang="es" aria-labelledby="map-title" className="scroll-slide map-section flex-col px-4 py-16 sm:px-10 sm:py-24">
      <header className="mx-auto max-w-2xl text-center">
        <IllustratedHeading id="map-title">{mapContent.title}</IllustratedHeading>
        <p className="mx-auto mt-5 max-w-xl font-display text-xl leading-relaxed sm:text-2xl">{mapContent.introduction}</p>
      </header>
      <RelationshipMap />
    </section>
  );
}
