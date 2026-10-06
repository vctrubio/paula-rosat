import { Archivo_Black, Bevan, Caprasimo, Fraunces } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin", "latin-ext"], weight: "900", display: "swap" });
const caprasimo = Caprasimo({ subsets: ["latin", "latin-ext"], weight: "400", display: "swap" });
const bevan = Bevan({ subsets: ["latin", "latin-ext"], weight: "400", display: "swap" });
const archivo = Archivo_Black({ subsets: ["latin", "latin-ext"], weight: "400", display: "swap" });

const specimens = [
  { id: "fraunces", name: "Fraunces", font: fraunces, note: "Mi primera opción: curvas orgánicas, peso generoso y un aire de etiqueta botánica impresa.", tone: "Orgánica · expresiva", url: "https://fonts.google.com/specimen/Fraunces" },
  { id: "caprasimo", name: "Caprasimo", font: caprasimo, note: "Redonda y exuberante. Una dirección cálida, juguetona y cercana al cartel artesanal.", tone: "Suave · retro", url: "https://fonts.google.com/specimen/Caprasimo" },
  { id: "bevan", name: "Bevan", font: bevan, note: "Remates contundentes y una mancha de tinta fuerte. Para una firma con presencia de sello y taller.", tone: "Robusta · de oficio", url: "https://fonts.google.com/specimen/Bevan" },
  { id: "archivo", name: "Archivo Black", font: archivo, note: "Un gesto directo y compacto, sin remates. La opción más gráfica para titulares de cartel.", tone: "Gráfica · rotunda", url: "https://fonts.google.com/specimen/Archivo+Black" },
];

export function FontSpecimens() {
  return (
    <section id="fonts" lang="es" aria-labelledby="fonts-title" className="border-t border-line py-12">
      <p className="eyebrow text-rose">Cuatro direcciones / Serigrafía</p>
      <h2 id="fonts-title" className="mt-4 font-display text-5xl">Letras con cuerpo y carácter.</h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-muted">La serigrafía es una técnica de impresión. Aquí buscamos su carácter en las letras: formas claras, tinta generosa y una firma que funcione a un solo color. Las cuatro muestras usan el mismo texto para comparar.</p>
      <div className="mt-10 grid gap-x-12 gap-y-16 lg:grid-cols-2">
        {specimens.map((specimen, index) => (
          <article key={specimen.id} aria-labelledby={`font-${specimen.id}`} className="min-w-0">
            <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
              <h3 id={`font-${specimen.id}`} className="text-base font-medium"><span className="mr-3 font-display text-2xl italic text-rose">0{index + 1}</span>{specimen.name}</h3>
              <a href={specimen.url} className="py-2 text-xs text-ink-muted underline underline-offset-4 hover:text-rose">Ver fuente ↗</a>
            </div>
            <div className="my-5 bg-parchment/40 px-3 pb-8 pt-2 text-olive sm:px-6" style={specimen.font.style}>
              <svg viewBox="0 0 640 230" className="block w-full overflow-visible" role="img" aria-label={`Paula Rosat en ${specimen.name}`}>
                <defs><path id={`font-arc-${specimen.id}`} d="M35 208Q320 -5 605 208" /></defs>
                <text fill="currentColor" fontSize="60" letterSpacing="1">
                  <textPath href={`#font-arc-${specimen.id}`} startOffset="50%" textAnchor="middle">Paula Rosat</textPath>
                </text>
              </svg>
              <p className="text-center text-[clamp(1.65rem,3.5vw,2.8rem)] leading-tight">Percibir<br />relaciones</p>
              <p className="mt-7 text-center text-base leading-relaxed sm:text-lg">De la planta a la esencia.</p>
              <p className="mt-5 break-words text-center text-xs leading-6 opacity-70">Á É Í Ó Ú · à è ò · ç ñ · l·l · 0123456789</p>
            </div>
            <p className="text-xs uppercase tracking-widest text-rose">{specimen.tone}</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-ink-muted">{specimen.note}</p>
          </article>
        ))}
      </div>
      <p className="mt-10 text-sm text-ink-muted">Propuestas para elegir. La tipografía de la portada se cambiará después de confirmar una dirección.</p>
    </section>
  );
}
