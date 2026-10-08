import { languageNames } from "@/i18n/config";

const languages = ["es", "en", "ca", "fr"] as const;

export function AboutLanguages() {
  return (
    <div className="about-languages" role="group" aria-label="Idiomas">
      {languages.map((locale, index) => (
        <div className="about-language-position" key={locale} style={{ rotate: `${index * 90 - 45}deg` }}>
          <button type="button" lang={locale} aria-label={languageNames[locale]} title={languageNames[locale]}>
            <svg viewBox="0 0 44 28" aria-hidden="true">
              <defs>
                <path id={`language-arc-${locale}`} d="M 4 23 Q 22 3 40 23" />
              </defs>
              <text>
                <textPath href={`#language-arc-${locale}`} startOffset="50%" textAnchor="middle">
                  {locale.toUpperCase()}
                </textPath>
              </text>
            </svg>
          </button>
          <span aria-hidden="true">·</span>
        </div>
      ))}
    </div>
  );
}
