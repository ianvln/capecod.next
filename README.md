# Cape Cod

Website for Cape Cod, traiteur & fine foods in Nieuwpoort. Built with Next.js (pages router).

```bash
npm run dev     # http://localhost:3000 (Dutch) and http://localhost:3000/fr (French)
npm run build && npm start
```

## Editing content

| What | Where |
| --- | --- |
| Texts (NL / FR) | `i18n/nl.ts`, `i18n/fr.ts` — TypeScript fails the build if a French key is missing |
| Weekly opening hours | `api/openinghours.ts` (`OPENING_HOURS`); the site shows "open now" in Brussels time |
| Address, phone, e-mail | `api/contact.ts` |
| Seasonal suggestions | `types/Menu.ts` (`MENUS.nl` / `MENUS.fr`); set `SHOW_MENU = true` to show the section and nav item |

Search engines get address, phone and opening hours as schema.org data (`components/seo/StructuredData.tsx`).
Set `NEXT_PUBLIC_SITE_URL` if the site is not served from `https://www.capecod.be`.
