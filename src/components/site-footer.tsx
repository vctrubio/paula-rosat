import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { SocialLinks } from "@/components/social-links";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  return (
    <footer id="contacto" className="site-closing" aria-labelledby="closing-title">
      <figure className="closing-artwork">
        <Image
          src="/illustrations/footer-ice-cream-boy.webp"
          width={1254}
          height={1254}
          sizes="(max-width: 540px) calc(100vw - 40px), 500px"
          alt={t("imageAlt")}
          className="closing-artwork-image"
        />
      </figure>
      <h2 id="closing-title" className="font-display text-2xl leading-relaxed text-ink-muted">{t("firstLine")}<br className="closing-line-break" /> {t("secondLine")}</h2>
      <div className="closing-socials"><SocialLinks showShare /></div>
    </footer>
  );
}
