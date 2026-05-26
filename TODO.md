# agentic-whatsup.com — TODO

> Audit 2026-05-26 | Stack: Next.js 16, next-intl FR/EN/DE/NL | Deploy: manual vercel --prod (NOT git-connected)

## Critical
- [x] **RGPD consent bug FIXED** — CookieBanner wrote `"refused"`, layout checked `"rejected"` → opt-out never worked. Fixed to `"rejected"`. MUST deploy `vercel --prod`
- [ ] **No gtag consent update on click** — `CookieBanner.tsx:47-56` dispatches custom event but no `gtag('consent','update',...)` fired. Add explicit update call on accept/refuse
- [ ] **Pricing on /roi page** — `app/[locale]/roi/page.tsx` has 47000€/an, 127€/message, 1524€/jour (HARD RULE violation). Convert to qualitative + CTA audit
- [ ] **`/tarifs` page exists but redirected** — `app/[locale]/tarifs/page.tsx` built but `next.config.ts:14-18` 301s to /contact. Delete dead page

## High
- [ ] **AggregateRating fake** — `layout.tsx:204-209` `4.9 / 47 ratingCount / 12 reviewCount` hardcoded. Add real Review[] schema or remove
- [ ] **VAULT 369 in messages/fr.json** — 7 occurrences lines 551, 563, 572-576, 591, 740. Verify if legal pages are exception
- [ ] **Canonical missing on service/* pages** — verify all `secteurs/*`, `services/*`, `comparatif/*` have `generateMetadata` with explicit canonical
- [ ] **Sitemap dates static 2025** — `app/sitemap.ts:8-41` dates like `2025-08-15`. Update to real last-modified dates
- [ ] **Debug/test scripts at root** — `debug-menu.js`, `mobile-test.js`, `test-*.js`, `ux-audit.js` → move to /scripts

## Medium
- [ ] **`STATIC_DATES` sitemap** — all internal pages show 2025 dates → Google sees stale content
- [ ] **x-default hreflang → /fr/tarifs** — page is 301 redirected, x-default broken
- [ ] **Vocalis widget LCP impact** — `layout.tsx:248` loads embed.js on every page. Check LCP impact
- [ ] **OG image caching headers** — `opengraph-image.tsx` dynamic route. Add `Cache-Control` in vercel.json

## Low
- [ ] **Apostrophes courbes** in FR/EN descriptions — consistency check across all locales
- [ ] **`.env.vercel` at root** — verify in .gitignore (potential Vercel secrets leak)

## Deploy
```
# NOT git-connected → manual required
vercel --prod
```
