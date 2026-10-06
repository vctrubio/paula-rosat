# Paula Rosat

Personal portfolio for Paula Rosat, alchemist and cook. A botanical field journal with illustrated plants, roots, landscapes, and extraction processes.

## Instructions for future agents

- **Do not run the app, build, lint, or tests unless the user explicitly requests it.** Current visual changes have not been runtime-verified.
- Read `AGENTS.md` and the relevant installed Next.js documentation before changing framework code.
- Keep page files as component compositions. Each chapter has its own component.
- `/dev` is a separate brand notebook. Do not apply public-page changes to its specimens unless requested.
- Do not restore landing language controls, side illustrations, or the old top navbar. The language switcher is deliberately commented out.
- Spanish editorial content is provisional and will be translated later. Do not invent biography or services.

## Public page: four chapters

`src/app/page.tsx` composes this order:

1. **AboutSection** (`#about`): curved Paula Rosat name, oval illustrated portrait, and ShortBio. Warm paper `#F7F4EB`.
2. **MapSection** (`#map`): illustrated relationship map with links to elaboration steps. Parchment `#EAE4D4`.
3. **ElaborateSection** (`#elaborate`): vertical blackberry and juniper example. Warm paper `#F7F4EB`.
4. **EcosystemSection** (`#ecosystems`): “Lo visible” and “Lo invisible”, two columns on wider screens and stacked on mobile. Parchment `#EAE4D4`.

The footer follows the chapters with icon-only contacts in this order: Instagram, phone, email. Custom inline SVGs use Botanical ink (`#293327`) on hover and keyboard focus, with accessible labels and no outgoing arrows. Branding stays in the journey navbar. Work and Education placeholders sit below the contacts; their copy is translated in all four locale files.

### Layered scrolling and navigation

`src/components/story-journey.tsx` wraps the three chapters after About and owns the journey navigation. The navbar is fixed outside document flow, hidden during About, and slides down from the viewport top as soon as Mi mapa enters the screen. It hides again when scrolling back to About; it never appears as a strip between chapters. It and shows the droplet before **Paula Rosat → Mapa → Elaborar → Ecosistema**. The name links back to About. The current chapter is underlined and marked with `aria-current="location"`. On narrow screens the horizontal journey can scroll.

Each chapter scrolls over the previous chapter. Opaque alternating backgrounds and ascending stacking levels distinguish the sheets. A ResizeObserver measures each sheet and sets its sticky offset: tall chapters scroll fully before pinning at the bottom of the viewport. Do not replace this with `top: 0` for every sheet; Elaborar is taller than the viewport. Do not put overflow or transforms on scroll ancestors. Navigation uses flow offsets rather than pinned rectangles to return to chapter beginnings.

Short windows (620px high or less) and reduced-motion preferences use ordinary section flow. Reduced motion also disables smooth scrolling. There is no wheel/touch interception or forced scroll snapping. CSS lives in `src/app/globals.css`.

### Typography and branding

- The public portrait name uses **Fraunces 500**, a lighter retro replacement for the overly heavy Caprasimo, scoped in `src/components/portrait.tsx`. Its arc sits close to the portrait; no synthetic bold or italic.
- Cormorant Garamond remains the display/body-story serif; DM Sans is the utility/body sans.
- `/dev` retains all four font comparisons unchanged: Fraunces, Caprasimo, Bevan, and Archivo Black.
- The selected branding is the droplet with a leaf cutout: `src/components/brand-mark.tsx` and `src/app/icon.svg`. Metadata title is Paula Rosat.
- Fonts are bundled through `next/font`; an initial build needs network access to fetch fonts.

## Editing map

- `src/components/sections/`: the four chapter components.
- `src/components/portrait.tsx`: landing portrait and curved name.
- `src/components/short-bio.tsx`: provisional biography.
- `src/components/story-journey.tsx`: fixed reveal navigation, current chapter, sheet measurements.
- `src/components/landing/botanical-story.tsx`: reusable ecosystem story drawing and copy.
- `src/content/landing.es.ts`: Spanish ecosystem narrative (filename retained after relocation).
- `src/content/map.es.ts`: Spanish Map and Elaborate copy.
- `MAP.md`: Spanish concepts, visual references, and editorial documentation.
- `public/illustrations/`: reusable SVG drawings; `public/portraits/`: illustrated portraits.
- `src/config/site.ts`: brand name, phone, Instagram label and URL, and temporary email (`paula.rosat.roig@gmail.com`). Phone links are derived from the displayed number.
- `src/app/globals.css`: Tailwind v4 palette and layout styles.
- `src/app/layout.tsx`: shared fonts and metadata.
- `src/components/dev/`: development notebook, palette, font specimens, and notes.

## Languages

Spanish, English, French, and Catalan are configured with next-intl. `messages/{en,es,fr,ca}.json` contains translated controls, accessibility labels, metadata, and the 404 page. `src/i18n/` owns locale configuration and the language action. English remains the initial default; an existing locale cookie still applies. The landing language switcher is currently commented out. Map, Elaborate, Ecosystem, and journey labels are Spanish pending translation; Spanish sections/navigation declare `lang="es"`.

## Development notebook

`/dev` returns 404 unless `NODE_ENV === "development"`, including on Vercel preview deployments. It also has noindex metadata. Its old Paula/languages top navbar has been removed. Notes live in project files, not browser storage or a database.

## Local commands — only when requested

```sh
npm install
npm run dev
npm run lint
npm run build
npm run start
```

The default local address is `http://localhost:3000` (the running environment may use another port). Built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Hosting

Domain: `paularosat.com`, managed through GoDaddy. Intended hosting: Vercel. This task makes no deployment or DNS changes.

## Portrait scroll erasure and sharing card

As Map enters the viewport, `StoryJourney` sets `--portrait-erase` on About. A second SVG mask reverses the same pencil passes used for the entrance, sketching the portrait and oval back out. Scrolling up redraws them. There is no portrait-to-droplet transition or blur. Reduced motion and short windows retain the still portrait. The shared brand SVG path remains in `src/config/brand.ts` for the navbar and sharing card.

`src/app/opengraph-image.tsx` serves a 1200 × 630 PNG business card: warm paper, olive droplet, Paula Rosat, and **Destiladora de plantas medicinales**. Next.js supplies the OG image metadata through its file convention; homepage metadata adds canonical URL, Open Graph details, and a Twitter large-image card. The exact Spanish brand description and name are shared through `src/config/site.ts` and currently override the older translated Metadata strings. Do not translate this tagline automatically.

`/dev#seo` shows the real generated card, a sharing preview, and an illustrative search snippet. It remains development-only and noindex. Changes must be deployed before external sharing services can read them; previews here do not verify those services or invalidate their caches. No app, build, lint, or tests were run for this change.

### Portrait entrance

The landing portrait reveals on page load through an animated SVG mask of overlapping pencil-like passes (3.2 seconds), accompanied by a drawn oval outline. This reveals the existing vector artwork rather than animating its thousands of individual paths. The mask animation is separate from the scroll erasure and does not replay while scrolling. Reduced-motion preferences show the complete portrait immediately. `/dev` font specimens remain unchanged.

The sharing card places the droplet on the left and the name on the right, with a cursive Spanish subtitle underneath. Subtitle lettering is outlined Cormorant Garamond Italic in `src/assets/fonts/og-tagline.json` (generated from the already downloaded font); regenerate those outlines if the tagline changes. This keeps OG rendering independent of external font requests.

Sharing verification: checked the existing local server response for title, description, canonical, Open Graph and Twitter metadata; the OG endpoint returned a valid 1200 × 630 PNG. No production build or lint was run. External sharing requires deployment at the configured public domain. The footer component is currently commented out in the homepage composition.
