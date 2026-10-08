import { SeoPreview } from "./seo-preview";
import { FontSpecimens } from "./font-specimens";

const palette = [
  { name: "Warm paper", token: "paper", hex: "#F7F4EB", use: "The canvas. Quiet, warm, tactile." },
  { name: "Parchment", token: "parchment", hex: "#EAE4D4", use: "Soft surfaces and specimen backgrounds." },
  { name: "Deep olive", token: "olive", hex: "#394735", use: "Botanical marks and grounded accents." },
  { name: "Dried rose", token: "rose", hex: "#8B4E50", use: "A human touch. Emphasis and small details." },
  { name: "Amber", token: "amber", hex: "#B8873F", use: "A drop of warmth. Decorative use." },
  { name: "Botanical ink", token: "ink", hex: "#293327", use: "Readable text across the paper palette." },
];

const notes = [
  {
    title: "Current portfolio",
    items: [
      "Paula Rosat: creative ice cream maker and plant distiller, co-creating with nature through the senses.",
      "About → relationship map → blackberry and juniper sorbet process → contact footer. Ecosystem stories are retained for future use.",
      "Four languages in the selector: ES → CA → FR → EN. Spanish is the default; the chosen language is remembered across reloads.",
      "Public copy is organized by language and section in text/. English and Spanish are reviewed and taken care of.",
      "Production domain: paularosat.com. GoDaddy manages the domain; Vercel hosts the site.",
    ],
  },
  {
    title: "Established visual direction",
    items: [
      "A botanical field journal: illustrated ingredients, organic lines, generous space and warm paper tones.",
      "Cormorant Garamond for the curved name and display text; DM Sans for utility text. The leaf-cutout droplet is the brand mark.",
      "Story panels and footer share a centered 1280px cap, rounded corners and soft depth. The full-width navbar aligns its content to the same edges.",
      "The small language circle uses curved labels and an ink-filled still. Its spout points towards the selected language, whose label becomes bold.",
      "The portrait erases as the map enters; the language circle fades alongside it. Bio entrance animation runs on initial load, with immediate text updates when switching languages.",
    ],
  },
  {
    title: "Next review",
    items: [
      "French and Catalan are implemented; their editorial review is next.",
      "Review longer translated diagram labels, intentional line breaks and mobile spacing in the browser.",
      "The human handles visual browser review. Build, TypeScript, lint and translation-catalog checks passed during the i18n work.",
      "The shared image card remains Spanish; its wording comes from text/es/metadata.json.",
      "Keep translations in text/, artwork geometry in code and review status in text/README.md.",
    ],
  },
];

function Palette() {
  return (
    <section aria-labelledby="palette-title" className="border-t border-line py-10">
      <p className="eyebrow text-rose">01 / Colour</p>
      <h2 id="palette-title" className="mt-3 font-display text-4xl">From the garden, onto paper.</h2>
      <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
        {palette.map((color) => (
          <div key={color.token}>
            <div className="mb-4 h-32 rounded-t-full border border-ink/10" style={{ backgroundColor: `var(--color-${color.token})` }} />
            <h3 className="text-sm font-medium">{color.name}</h3>
            <p className="mt-1 font-mono text-xs text-ink-muted">{color.hex}</p>
            <p className="mt-3 text-xs leading-5 text-ink-muted">{color.use}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkingNotes() {
  return (
    <section aria-labelledby="notes-title" className="border-t border-line py-10">
      <p className="eyebrow text-rose">03 / Working notes</p>
      <h2 id="notes-title" className="mt-3 font-display text-4xl">A place for things to take root.</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {notes.map((note) => (
          <article key={note.title}>
            <h3 className="mb-4 text-sm font-medium">{note.title}</h3>
            <ul className="space-y-3 text-sm leading-6 text-ink-muted">
              {note.items.map((item) => <li key={item} className="border-l border-line pl-4">{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-10 break-words text-xs leading-6 text-ink-muted">Project notes are kept in <code>src/components/dev/brand-notebook.tsx</code>. Shared colour tokens live in <code>src/app/globals.css</code>.</p>
    </section>
  );
}

export function BrandNotebook() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-12">
      <main id="main">
        <div className="py-12 sm:py-16">
          <p className="eyebrow text-rose">Development only · Direction 01 · Work in progress</p>
          <h1 className="mt-5 font-display text-6xl tracking-tight sm:text-8xl">The brand notebook.</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-ink-muted">A living reference for Paula’s world: the colours, the letters, and the ideas we’re gathering. This page is only available while running the local development server.</p>
        </div>
        <FontSpecimens />
        <Palette />
        <SeoPreview />
        <WorkingNotes />
      </main>
    </div>
  );
}
