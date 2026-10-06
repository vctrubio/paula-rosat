import { getTranslations } from "next-intl/server";
import { ScrollSlide } from "./scroll-slide";

export async function MapSection() {
  const [t, common] = await Promise.all([getTranslations("Map"), getTranslations("Common")]);

  return (
    <ScrollSlide id="map" number="02" label={common("map")} className="bg-parchment/50">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 id="map-title" className="font-display text-6xl tracking-tight sm:text-8xl">{common("map")}<span className="text-rose">.</span></h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-ink-muted">{t("description")}</p>
        </div>
        <div className="map-placeholder flex min-h-64 items-center justify-center border border-olive/20 p-8 sm:min-h-80">
          <p className="bg-paper px-6 py-3 font-display text-2xl italic text-ink-muted">{t("placeholder")}</p>
        </div>
      </div>
    </ScrollSlide>
  );
}
