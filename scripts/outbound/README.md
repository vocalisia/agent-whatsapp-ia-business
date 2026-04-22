# Cold Email Outbound System

Pipeline complet : scrape Apollo → leads.json → sequences (3 emails × 3 variants × 2 langues) → Resend.

## Prerequisites (CRITIQUES — ne pas skip)

### 1. Domaine dédié cold outbound
**JAMAIS envoyer depuis `@agentic-whatsup.com`** → risque de brûler la réputation du domaine principal.

Achète (OVH, Namecheap) :
- `outbound-agenticwhatsup.com` ou
- `go-agenticwhatsup.com` ou
- `laurent-agenticwhatsup.com`

Configure :
```
SPF : v=spf1 include:resend.net ~all
DKIM : (fourni par Resend au setup)
DMARC : v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com
```

### 2. Warmup du domaine (2 semaines obligatoire)
Utilise **Warmup Inbox** ou **Mailreach** : 14 jours avant envoi volume.

### 3. API keys (`.env.local` dans whatsapp-agent-ia)
```bash
APOLLO_API_KEY=xxx          # apollo.io/settings/api
RESEND_API_KEY=re_xxx       # resend.com/api-keys
FROM_EMAIL=laurent@outbound-agenticwhatsup.com
REPLY_TO_EMAIL=cohenrichard07@gmail.com
```

### 4. Légal (RGPD + LPM Suisse + CAN-SPAM)
- List-Unsubscribe headers auto-injectés ✓
- Réponse humaine <24h aux unsubscribe obligatoire
- Base légale : intérêt légitime + opt-out facile
- Pas d'envoi aux particuliers (@gmail.com, etc.) — filtrer

## Run

### Install ts-node (1 fois)
```bash
cd whatsapp-agent-ia
npm i -D ts-node tsx
```

### Step 1 : Scrape 500 leads
```bash
APOLLO_API_KEY=xxx npx tsx scripts/outbound/scrape-apollo.ts
```
Output : `scripts/outbound/leads.json` avec 500 leads répartis :
- 167 ROI / 167 URGENT / 166 SOCIAL
- FR/EN selon pays

### Step 2 : Dry run (vérifier)
```bash
DRY_RUN=1 npx tsx scripts/outbound/send-sequence.ts
```
Affiche ce qui serait envoyé sans rien envoyer.

### Step 3 : Envoi production (30/jour max au début)
```bash
RESEND_API_KEY=re_xxx \
FROM_EMAIL=laurent@outbound-agenticwhatsup.com \
DAILY_LIMIT=30 \
npx tsx scripts/outbound/send-sequence.ts
```

Rerun tous les jours (cron recommandé) :
- Jour 1 : 30 emails 1er contact
- Jour 4 : 30 emails bump (delay 3j)
- Jour 8 : 30 emails break-up (delay 7j)

## Monitor

### État des leads
```bash
jq '[.[] | .status] | group_by(.) | map({status:.[0], count: length})' scripts/outbound/leads.json
```

### Dernière run
```bash
cat scripts/outbound/state.json
```

## Key metrics à surveiller

| Métrique | Seuil sain | Alarme |
|----------|-----------|--------|
| Open rate | ≥40% | <25% → subject lines |
| Reply rate | ≥3% | <1% → body/targeting |
| Bounce rate | <3% | >5% → liste/validation |
| Unsub rate | <2% | >5% → message trop agressif |
| Spam complaints | <0.1% | >0.3% → STOP immédiat |

## Si Spam complaints > 0.3%
1. Stop envois immédiatement
2. Pause 48h
3. Rescope ciblage (lookalike des répondeurs)
4. Adoucir messages
5. Rewarm domaine 7 jours

## Scaling

Semaine 1 : 30/jour
Semaine 2 : 50/jour si bounces < 3%
Semaine 3+ : 100/jour si open ≥ 35%
Plafond sain : 200/jour/domaine

Multi-domaine pour 500+/jour : 2-3 outbound domains en rotation.
