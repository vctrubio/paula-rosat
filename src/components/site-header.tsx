import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/language-switcher";

export async function SiteHeader({ showSections = false }: { showSections?: boolean }) {
  const t = await getTranslations("Common");

  return (
    <header className="site-header sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1600px] flex-wrap items-center justify-between gap-x-2 gap-y-1 px-6 py-3 sm:gap-x-4 sm:px-12 lg:px-20">
        <Link href="/" aria-label={t("home")} className="shrink-0 font-display text-2xl font-medium tracking-[-0.04em] sm:text-4xl">
          paula rosat<span className="text-rose">.</span>
        </Link>
        {showSections ? (
          <nav aria-label={t("navigation")} className="order-3 flex w-full justify-center gap-7 text-xs sm:order-none sm:w-auto">
            <Link href="/#about" className="py-2 hover:text-rose">{t("about")}</Link>
            <Link href="/#mapa" className="py-2 hover:text-rose">{t("map")}</Link>
            <Link href="/#proceso" className="py-2 hover:text-rose">{t("elaborate")}</Link>
          </nav>
        ) : null}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
