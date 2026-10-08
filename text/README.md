# Public text

Each locale (`es`, `en`, `ca`, `fr`) has the same eight section files:

| File | Content |
| --- | --- |
| `common.json` | Navigation, controls, contact labels, accessibility and sharing feedback |
| `about.json` | Animated bio and portrait description |
| `map.json` | Diagram heading, center, node labels, captions and descriptions |
| `process.json` | Sorbet example and the seven process steps |
| `footer.json` | Closing phrase and illustration description |
| `metadata.json` | Search/social descriptions and sharing-card wording |
| `not-found.json` | Missing-page introduction and return link |
| `ecosystems.json` | Retained ecosystem stories, currently not displayed |

Spanish is the editorial source and default. Keep keys, array ordering and stable IDs identical across all four languages; translate values only. IDs such as `territorio` are stable anchor/artwork identifiers and must not be translated. Illustration coordinates and asset URLs belong in code, not these text files.

## Editorial review status

English and Spanish are reviewed and taken care of. French and Catalan translations are implemented; their editorial review is next.

Diagram captions are arrays with intentional line breaks. Check longer translations visually when changing them. The two-line footer phrase is also intentionally split.

`src/i18n/request.ts` loads these files as next-intl namespaces. Public server components load their section; the client provider receives only common controls and metadata. `src/i18n/types.d.ts` uses Spanish catalogs for typed keys.

The generated sharing image uses Spanish `cardFirstLine`, `cardConjunction`, and `cardSecondLine`; regenerate the image after changing them. Run `npm run text:check` to verify complete, matching catalogs and valid diagram/process references.
