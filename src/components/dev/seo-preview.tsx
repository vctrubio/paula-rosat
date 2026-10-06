import Image from "next/image";
import { seoConfig } from "@/config/seo";

export function SeoPreview() {
  return (
    <section id="seo" aria-labelledby="seo-title" className="border-t border-line py-12" lang="es">
      <p className="eyebrow text-rose">SEO / Compartir</p>
      <h2 id="seo-title" className="mt-4 font-display text-5xl">Una tarjeta para presentar su mundo.</h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-muted">El nombre, la gota y dos oficios en una composición sencilla. Esta es la imagen real de Open Graph que acompaña al enlace; cada aplicación decide cómo recortarla y mostrarla.</p>
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="mb-4 text-sm font-medium">Vista previa al compartir</h3>
          <div className="overflow-hidden rounded-xl border border-line">
            <Image src={seoConfig.image.path} alt={seoConfig.image.alt} width={1200} height={630} unoptimized className="h-auto w-full" />
            <div className="border-t border-line bg-parchment/40 p-5">
              <p className="text-xs text-ink-muted">{new URL(seoConfig.url).hostname}</p>
              <p className="mt-2 text-lg">{seoConfig.name}</p>
              <p className="mt-1 text-sm text-ink-muted" lang="es">{seoConfig.description}</p>
            </div>
          </div>
          <a href={seoConfig.image.path} className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-olive">Abrir imagen OG · 1200 × 630</a>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-sm font-medium">Vista orientativa en buscadores</h3>
            <div className="border-l-2 border-line pl-5">
              <p className="text-xs text-ink-muted">{seoConfig.url}</p>
              <p className="mt-2 font-display text-3xl text-olive">{seoConfig.title}</p>
              <p className="mt-2 text-sm leading-6" lang="es">{seoConfig.description}</p>
            </div>
          </div>
          <dl className="space-y-4 text-sm leading-6">
            <div><dt className="font-medium">Título</dt><dd className="text-ink-muted">{seoConfig.title}</dd></div>
            <div><dt className="font-medium">Descripción</dt><dd className="text-ink-muted" lang="es">{seoConfig.description}</dd></div>
            <div><dt className="font-medium">URL canónica</dt><dd className="break-all text-ink-muted">{seoConfig.url}</dd></div>
            <div><dt className="font-medium">Tarjeta social</dt><dd className="text-ink-muted">PNG · Open Graph · Twitter summary_large_image</dd></div>
          </dl>
          <p className="text-xs leading-6 text-ink-muted">Editar los metadatos, los textos y los colores de la tarjeta en <code>src/config/seo.ts</code>; el diseño en <code>scripts/seo-card.tsx</code>. Regenerar los PNG con <code>npm run seo:images</code> después de editar la tarjeta. La descripción de marca permanece en español por ahora. Los buscadores pueden modificar el resumen y las aplicaciones pueden conservar imágenes anteriores en caché. La vista pública requiere desplegar los cambios; /dev sigue excluido de indexación.</p>
        </div>
      </div>
    </section>
  );
}
