import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer id="contacto" className="site-closing" lang="es" aria-labelledby="closing-title">
      <div className="closing-placeholder" role="img" aria-label="Espacio reservado para una ilustración">
        <span>Ilustración</span>
      </div>
      <h2 id="closing-title">La naturaleza, destilada en aromas y saboreada de otra manera.</h2>
      <div className="closing-socials"><SocialLinks /></div>
    </footer>
  );
}
