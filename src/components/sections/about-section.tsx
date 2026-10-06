import { getTranslations } from "next-intl/server";
// import { LanguageSwitcher } from "@/components/language-switcher";
import { Portrait } from "@/components/portrait";
import { ShortBio } from "@/components/short-bio";

export async function AboutSection() {
  const t = await getTranslations("About");

  return (
    <section id="about" aria-labelledby="about-title" className="about-stage">
      <h1 id="about-title" className="sr-only">Paula Rosat</h1>
      <div className="about-portrait-column">
          <Portrait label={t("portrait")} />
          {/* <LanguageSwitcher /> */}
          <ShortBio />
      </div>
    </section>
  );
}
