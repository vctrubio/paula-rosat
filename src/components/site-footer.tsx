import Image from "next/image";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer id="contacto" className="site-closing" lang="es" aria-labelledby="closing-title">
      <figure className="closing-artwork">
        <Image
          src="/illustrations/footer-ice-cream-boy.webp"
          width={1254}
          height={1254}
          sizes="(max-width: 540px) calc(100vw - 40px), 500px"
          alt="Un niño de pelo rizado saborea un cucurucho de helado, ilustrado como un grabado artesanal en tinta terracota."
          className="closing-artwork-image"
        />
      </figure>
      <h2 id="closing-title" className="font-display text-2xl leading-relaxed text-ink-muted">La naturaleza destilada en aromas<br className="closing-line-break" /> y saboreada en helados.</h2>
      <div className="closing-socials"><SocialLinks showShare /></div>
    </footer>
  );
}
