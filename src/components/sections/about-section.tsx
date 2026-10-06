import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/language-switcher";
import { PortraitPlaceholder } from "@/components/portrait-placeholder";

export async function AboutSection() {
  const t = await getTranslations("About");

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-slide flex-col items-center justify-center gap-4 px-4 py-8">
      <h1 id="about-title" className="sr-only">Paula Rosat</h1>
      <PortraitPlaceholder label={t("portraitPlaceholder")} />
      <LanguageSwitcher />
    </section>
  );
}
