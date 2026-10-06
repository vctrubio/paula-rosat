import { getTranslations } from "next-intl/server";
import { ScrollSlide } from "./scroll-slide";

export async function ElaborateSection() {
  const [t, common] = await Promise.all([getTranslations("Elaborate"), getTranslations("Common")]);

  return (
    <ScrollSlide id="elaborate" number="03" label={common("elaborate")}>
      <div className="max-w-4xl">
        <h2 id="elaborate-title" className="font-display text-[clamp(3.5rem,8vw,8rem)] tracking-tight">{common("elaborate")}<span className="text-rose">.</span></h2>
        <p className="mt-6 max-w-lg text-base leading-7 text-ink-muted">{t("description")}</p>
        <div className="mt-10 border-l border-rose/40 py-4 pl-6">
          <p className="font-display text-3xl italic text-rose">{t("placeholder")}</p>
        </div>
      </div>
    </ScrollSlide>
  );
}
