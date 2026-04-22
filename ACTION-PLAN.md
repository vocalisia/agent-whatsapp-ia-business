# Plan d'Action Outbound — 4 étapes

## ✅ Étape 1 — SEO / Google Search Console (10 min)

### Action toi
1. Va sur https://search.google.com/search-console
2. "Ajouter une propriété" → choisis **Domain property** (pas URL prefix)
3. Saisis : `agentic-whatsup.com`
4. Google te donne un code de vérification TXT → copie-le
5. Ajoute ce TXT chez ton registrar DNS (OVH, Namecheap, etc.)
6. Attends 5 min, clique "Vérifier"

### Puis envoie-moi
- Le code GSC (ressemble à `google-site-verification=XXXXXXXXX`)
- Je le mets en env var `NEXT_PUBLIC_GSC_VERIFICATION` sur Vercel
- Je redéploie → balise meta visible par Google

### Après vérification, dans GSC
- **Sitemaps** → colle `https://agentic-whatsup.com/sitemap.xml` → Soumettre
- Google commence à indexer les 248 URLs dans 24-72h

---

## ✅ Étape 2 — Google Tag Manager (5 min)

### Action toi
1. Va sur https://tagmanager.google.com
2. "Créer un compte" → Nom : **AgenticWhatsup**
3. "Créer un conteneur" → Plateforme : **Web** → Nom : `agentic-whatsup.com`
4. Tu obtiens un `GTM-XXXXXXX`

### Puis envoie-moi
- Le `GTM-XXXXXXX`
- Je le set comme env var `NEXT_PUBLIC_GTM_ID` sur Vercel
- Le composant `GoogleTagManager.tsx` déjà branché s'activera automatiquement

### Dans GTM ensuite
- Tags recommandés :
  - GA4 Configuration (migration du GA4 inline vers GTM — optionnel)
  - Meta Pixel (quand tu seras prêt, tu me donnes le Pixel ID)
  - LinkedIn Insight Tag (B2B — utile pour retargeting)
- Triggers recommandés :
  - `page_view` all pages
  - `click` sur CTAs iClosed (sélecteur : `a[href*="#booking"]`)
  - `scroll_depth` 50% / 75%

---

## ✅ Étape 3 — Cold Email Outbound (2 semaines warmup + exécution)

### Infrastructure (fait une fois)

**A. Achète domaine dédié** (ne PAS utiliser agentic-whatsup.com pour cold email)
Suggestion : `outbound-agenticwhatsup.com` ou `laurent-agenticwhatsup.com`
Coût : ~10€/an OVH/Namecheap.

**B. Configure Resend**
1. Signup https://resend.com (1K emails/mois gratuits, 20€/mois pour 50K)
2. Ajoute le domaine outbound dans Resend → copie les DNS records
3. Ajoute SPF, DKIM, DMARC chez ton registrar
4. Attends propagation (1-4h)
5. API key → `re_xxxxxxxx`

**C. Warmup 14 jours**
- Abonne-toi à https://warmupinbox.com (30€/mois) ou https://mailreach.co
- Laisse tourner 14 jours minimum
- Après, ta réputation domaine est propre

**D. Obtenir clé Apollo**
1. Signup https://apollo.io (free tier 50 contacts/mois, 49$/mois pour 10K)
2. Settings → API → Generate key
3. API key → `xxxxxxxxxxxx`

### Lancement (quand warmup fini)

**Installe ts-node dans le projet :**
```bash
cd C:\Users\cohen.000\whatsapp-agent-ia
npm i -D ts-node tsx
```

**Scrape 500 leads (une fois) :**
```bash
APOLLO_API_KEY=xxx npx tsx scripts/outbound/scrape-apollo.ts
```

**Dry run (teste sans envoyer) :**
```bash
DRY_RUN=1 npx tsx scripts/outbound/send-sequence.ts
```

**Envoi réel (30/jour) :**
```bash
RESEND_API_KEY=re_xxx \
FROM_EMAIL=laurent@outbound-agenticwhatsup.com \
DAILY_LIMIT=30 \
npx tsx scripts/outbound/send-sequence.ts
```

**Daily cron** (Windows Task Scheduler ou GitHub Actions) :
- Ce même script tous les jours à 9h
- Il auto-détecte qui doit recevoir email #2 (J+3) et #3 (J+7)

### Ce qui est déjà prêt dans le code

- ✅ 3 séquences (ROI / URGENT / SOCIAL) × 2 langues (FR/EN) = 18 emails
- ✅ Subject lines A/B testées (3 variantes par email, rotation random)
- ✅ Interpolation `{{firstName}} {{company}}`
- ✅ UTM tracking par variant (pour GA4/GTM)
- ✅ List-Unsubscribe headers (conformité RGPD)
- ✅ Rate limit 2s entre envois (pas de spam)
- ✅ Resume safe (state persisté dans `leads.json`)
- ✅ Dry run mode pour debug

---

## ✅ Étape 4 — Monitoring & Iteration

### Metrics à tracker (dans GA4 via GTM)
- `landing_page_view` — split par variant (ROI vs URGENT vs SOCIAL)
- `iclosed_widget_interaction` — clics sur widget booking
- `booking_completed` — RDV confirmé
- `cta_click` — tous boutons primary

### Metrics email (Resend dashboard)
- Open rate (seuil sain : 40%+)
- Click rate (seuil sain : 5%+)
- Reply rate (seuil sain : 3%+)
- Bounce rate (alarme : >5%)
- Spam complaints (alarme : >0.3%)

### Optimisation continue
- **Semaine 2** : bascule budget vers la meilleure variant (A/B/C sur 500 leads)
- **Semaine 3** : scale 30→50/jour si metrics saines
- **Semaine 4** : ajoute 2e domaine outbound pour 100+/jour

---

## 🎯 Ce que je peux faire QUAND TU ME DONNES LES 3 CLÉS

Dis-moi juste (une seule ligne) :
```
GSC: google-site-verification=XXX
GTM: GTM-XXXXXXX
APOLLO: xxxxxx
RESEND: re_xxxxxx
FROM: laurent@ton-domaine-outbound.com
```

Je fais alors :
1. Set env vars sur Vercel (via `vercel env add`)
2. Redeploy
3. Lance `scrape-apollo.ts` → produit `leads.json`
4. Lance dry run → te montre les premiers emails à envoyer
5. Toi tu valides → je lance le vrai envoi 30/jour
