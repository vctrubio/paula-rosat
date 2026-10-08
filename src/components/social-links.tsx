import { useTranslations } from "next-intl";
import { ShareButton } from "@/components/share-button";
import { siteConfig } from "@/config/site";

const links = [
  { label: "instagram", href: siteConfig.instagram.url, path: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17.5 6.5h.01" },
  { label: "email", href: `mailto:${siteConfig.email}`, path: "M3 5h18v14H3ZM3 5l9 8 9-8" },
  { label: "phone", href: `tel:${siteConfig.phone.replaceAll(" ", "")}`, path: "M8 3H4c-1 0-1 2-1 3 0 8 7 15 15 15 1 0 3 0 3-1v-4l-5-2-2 3c-3-1-6-4-7-7l3-2Z" },
] as const;

export function SocialLinks({ showShare = false, instagramOnly = false }: { showShare?: boolean; instagramOnly?: boolean }) {
  const t = useTranslations("Common");
  const visibleLinks = instagramOnly ? links.filter(({ label }) => label === "instagram") : links;

  return <div className="social-links">{showShare && <ShareButton />}{visibleLinks.map(({ label, href, path }) => (
    <a key={label} href={href} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noopener noreferrer" : undefined} aria-label={t(label)} title={t(label)}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path} /></svg>
    </a>
  ))}</div>;
}
