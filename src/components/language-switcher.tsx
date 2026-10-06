import { getLocale, getTranslations } from "next-intl/server";
import { changeLocale } from "@/i18n/actions";
import { languageNames, locales } from "@/i18n/config";

export async function LanguageSwitcher() {
  const [currentLocale, t] = await Promise.all([getLocale(), getTranslations("Common")]);

  return (
    <form action={changeLocale} aria-label={t("language")} className="glass-languages flex flex-wrap items-center justify-center gap-1 rounded-full p-1.5">
      {locales.map((locale) => (
        <button
          key={locale}
          type="submit"
          name="locale"
          value={locale}
          lang={locale}
          aria-label={languageNames[locale]}
          aria-pressed={currentLocale === locale}
          title={languageNames[locale]}
          className="glass-language min-h-11 cursor-pointer rounded-full px-3 text-xs transition-colors sm:px-4"
        >
          {languageNames[locale]}
        </button>
      ))}
    </form>
  );
}
