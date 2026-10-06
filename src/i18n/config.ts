export const locales = ["es", "en", "fr", "ca"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookie = "paula-locale";

export const languageNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  ca: "Català",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && locales.some((locale) => locale === value);
}
