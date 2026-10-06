import { BotanicalStory } from "@/components/landing/botanical-story";

export function EcosystemSection() {
  return (
    <section id="ecosystems" lang="es" aria-labelledby="ecosystems-title" className="scroll-slide flex-col justify-center border-t border-line px-6 py-16 sm:px-12 sm:py-24">
      <h2 id="ecosystems-title" className="sr-only">Lo visible y lo invisible</h2>
      <div className="ecosystem-stories">
        <BotanicalStory kind="plants" />
        <BotanicalStory kind="underground" />
      </div>
    </section>
  );
}
