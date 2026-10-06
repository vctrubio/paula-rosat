import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  const phoneHref = `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`;
  const contactClass = "flex h-12 w-12 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-parchment hover:text-ink focus-visible:bg-parchment focus-visible:text-ink";

  return (
    <footer className="border-t border-line px-6 py-12 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-5">
          <a href={siteConfig.instagram.url} aria-label={siteConfig.instagram.label} title={siteConfig.instagram.label} className={contactClass}>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href={phoneHref} aria-label={t("call", { phone: siteConfig.phone })} title={siteConfig.phone} className={contactClass}>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a15 15 0 0 1-7-7l2-2-2-5Z" />
            </svg>
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label={t("email", { email: siteConfig.email })} title={siteConfig.email} className={contactClass}>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
              <path d="m3 6 9 7 9-7" />
            </svg>
          </a>
        </div>
        <div className="mt-10 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 sm:gap-16">
          <section aria-labelledby="footer-work">
            <h2 id="footer-work" className="font-display text-3xl">{t("work")}</h2>
            <p className="mt-3 text-sm text-ink-muted">{t("workPlaceholder")}</p>
          </section>
          <section aria-labelledby="footer-education">
            <h2 id="footer-education" className="font-display text-3xl">{t("education")}</h2>
            <p className="mt-3 text-sm text-ink-muted">{t("educationPlaceholder")}</p>
          </section>
        </div>
      </div>
    </footer>
  );
}
