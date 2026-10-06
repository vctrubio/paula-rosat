# Paula Rosat

A personal portfolio for an alchemist and cook. First branding direction: a botanical field journal, with warm paper, deep olive, dried rose, and amber. Cormorant Garamond for display type; DM Sans for text.

## Local development

```sh
npm install
npm run dev
```

- `http://localhost:3000/` — three scroll slides: About, Map, Elaborate. Copy is provisional; Map and Elaborate are placeholders awaiting notes and references.
- `http://localhost:3000/dev` — brand notebook with colour swatches, typography, and project notes.

The notebook is gated on the server with `NODE_ENV === "development"`. Production builds, including Vercel preview deployments, return a 404 for `/dev`. The navigation link is also omitted. The page has noindex metadata as an additional precaution.

## Editing

- `src/app/page.tsx`: composition of the three sections.
- `src/components/sections/`: individual About, Map, and Elaborate components, plus the shared viewport-height slide wrapper. Slides can grow to fit their contents on smaller screens.
- `messages/{en,es,fr,ca}.json`: all public-facing copy, navigation labels, accessibility labels, metadata, and the 404 page.
- `src/i18n/`: next-intl request configuration, supported locales, and the language-switching server action.
- `src/app/globals.css`: Tailwind v4 theme and shared colour tokens.
- `src/app/layout.tsx`: fonts and site metadata.
- `src/components/dev/brand-notebook.tsx`: working notes and brand specimens. Update swatch labels alongside the CSS tokens when changing colours.
- `src/components/botanical-mark.tsx`: original decorative botanical line drawing.

Notes are stored in project files, not in a browser or database.

## Languages

Spanish, English, French, and Catalan are supported, and are also the languages Paula speaks. The header switches language through a server action and remembers the selection in a cookie for one year. English remains the initial default, configured in `src/i18n/config.ts`. URLs stay at `/` and `/dev` for this scaffold. The document language and metadata follow the selection. Internal brand notebook notes remain in English.

Scrolling uses native CSS proximity snapping, anchor navigation, and reduced-motion support. There is no scroll interception or map service yet.

## Validation paused

Do not run build or lint until the user explicitly asks. The three-section/i18n update has not been built, linted, or runtime-tested.

Commands available when requested:

```sh
npm run lint
npm run build
npm run start
```

Built with Next.js App Router, TypeScript, and Tailwind CSS. Fonts are bundled through `next/font` (a network connection is needed when first building).

## Hosting plan

Domain: `paularosat.com`, managed through GoDaddy. Hosting: Vercel. No deployment or DNS changes have been made. When ready, import the repository into Vercel and add the domain using the DNS records Vercel provides.

## Next inputs

Paula’s notes and references will guide planning next. Biography, project selection, photographs, and contact details are still to come. No contact address, map locations, or services have been assumed.
