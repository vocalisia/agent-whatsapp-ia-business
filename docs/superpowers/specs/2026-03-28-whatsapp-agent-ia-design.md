# Design Spec — Site Agence Agent IA WhatsApp

**Date :** 2026-03-28
**Projet :** whatsapp-agent-ia
**Déploiement :** Vercel
**Domaine :** À définir (temporairement sur `whatsapp-agent-ia.vercel.app`)

---

## 1. Contexte & Objectif

Création d'un nouveau site vitrine d'agence pour la vente de services d'**agents IA WhatsApp**. Le site est indépendant de vocalis.pro. Il présente les offres, génère des leads qualifiés (demandes de démo, formulaires, prises de RDV) et positionne le service comme leader sur l'IA WhatsApp.

**Différenciateurs clés (USP exclusifs) :**
- Seul agent IA WhatsApp qui **comprend et transcrit les messages vocaux**
- Seul agent IA WhatsApp qui **analyse les photos** envoyées par les clients (vision IA via OpenAI / Claude / Gemini)
- Support de tous les médias WhatsApp (images, audio, vidéo, documents)
- Conforme RGPD avec rétention automatique
- Intégration Cal.com v2 (serveurs EU, équipes, champs dynamiques)

---

## 2. Stack Technique

| Composant | Technologie |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Blog | MDX (fichiers `.mdx` dans `/content/blog/`) |
| Formulaires | React Hook Form + Resend (emails) |
| RDV | Cal.com embed (v2, serveurs EU) |
| Déploiement | Vercel |
| Icônes | Lucide React |
| Animations | Tailwind + Framer Motion (léger) |
| SEO | next/metadata, sitemap dynamique, JSON-LD, OG tags |

---

## 3. Design System

```
Fond principal :   #0F172A  (Slate 900)
Surface cards :    #1E293B  (Slate 800)
Accent WhatsApp :  #25D366  (Vert WhatsApp)
Accent secondaire: #6366F1  (Indigo)
CTA principal :    #25D366 → hover #1DAE52
Texte principal :  #F8FAFC  (Slate 50)
Texte secondaire : #94A3B8  (Slate 400)
Typographie :      Inter (Google Fonts, subsetté)
Mode :             Dark mode par défaut
```

**Éléments visuels :**
- Icône WhatsApp verte dans le branding
- Badge "EXCLUSIF" sur les 2 USP principaux
- Micro-animations hover sur les cards
- Scroll reveal sur les sections

---

## 4. Arborescence des Pages

```
/                                    → Accueil
/services/agent-ia-whatsapp          → Page service principale (SEO prioritaire)
/services/qualification-leads        → Qualification de leads WhatsApp
/services/campagnes-whatsapp         → Campagnes & templates WhatsApp
/cas-usage/immobilier                → Cas d'usage immobilier
/cas-usage/ecommerce                 → Cas d'usage e-commerce
/cas-usage/sante                     → Cas d'usage santé/médical
/tarifs                              → Grille tarifaire
/blog                                → Liste des articles MDX
/blog/[slug]                         → Article individuel
/contact                             → Formulaire + Cal.com + WhatsApp
/mentions-legales                    → Mentions légales
/politique-confidentialite           → Politique RGPD
```

---

## 5. Page Accueil (`/`)

### Hero
```
H1 : "Le seul agent IA WhatsApp qui voit, entend et comprend vos clients."
Sous-titre : "Vocaux, photos, documents — votre agent IA répond à tout,
              24h/24, 7j/7. Sans intervention humaine."
CTA 1 : "Réserver une démo gratuite"  → Cal.com embed
CTA 2 : "Nous écrire sur WhatsApp"    → wa.me/[numéro]
```

### Section Problème
- Vos clients envoient des vocaux → personne ne répond
- Ils envoient des photos de documents → traitement manuel lent
- Hors horaires → leads perdus
- Équipe débordée → temps de réponse dégradé

### Section Solution
L'agent IA WhatsApp qui comprend le langage naturel, transcrit les vocaux, analyse les photos, remplit les dossiers, prend les RDV — et transfère à un humain seulement quand nécessaire.

### 6 Cards Fonctionnalités

| # | Titre | Description |
|---|-------|-------------|
| 1 | Vision IA — Analyse les photos | ⭐ EXCLUSIF — Le client envoie une photo (document, bien immobilier, problème technique). L'agent voit, comprend et répond via OpenAI / Claude / Gemini. |
| 2 | Comprend les messages vocaux | ⭐ EXCLUSIF — Fini les vocaux ignorés. L'agent transcrit automatiquement les messages audio WhatsApp et répond selon la langue configurée. |
| 3 | Tous les médias WhatsApp | Images, audio, vidéo, documents — tout est géré, stocké, accessible. Les opérateurs peuvent aussi envoyer des fichiers depuis l'interface. |
| 4 | RGPD automatique | Rétention des données configurable (conversations, leads, SMS). Nettoyage automatique planifié — conformité RGPD sans effort. |
| 5 | Cal.com v2 — Prise de RDV | Serveurs EU, types d'événements équipe, champs dynamiques. L'agent prend les RDV directement dans WhatsApp. |
| 6 | Webhooks & Automatisations | Déclencheurs "conversation terminée" avec transcript complet et évaluation IA. Connecte n'importe quel CRM ou outil externe. |

### Chiffres Clés
- -60% coûts de gestion client
- +40% productivité des équipes
- +30% taux de réponse
- 100% disponible 24/7

### Section "Comment ça marche" (4 étapes)
1. **Analyse des besoins** — On identifie vos scénarios WhatsApp, volumes, intégrations
2. **Configuration WhatsApp Business** — Connexion compte Meta, numéro, templates approuvés
3. **Développement de l'agent** — Personnalité, base de connaissances, flux, intégrations CRM
4. **Tests & déploiement** — Tests réels, ajustements, mise en production, formation équipe

### Aperçu Tarifs
3 formules (Starter / Pro / Enterprise) avec CTA vers `/tarifs`

### Témoignages
Placeholders à remplacer par vrais témoignages clients.

### CTA Final
> "Prêt à ne plus jamais manquer un message client ?"
> CTA : "Réserver un diagnostic gratuit"

---

## 6. Page Service Principale (`/services/agent-ia-whatsapp`)

Structure complète :
1. **Hero** — Titre SEO + sous-titre + CTA Cal.com + CTA WhatsApp
2. **Le problème** — Vocaux non lus, photos ignorées, leads perdus hors horaires
3. **La solution** — Agent IA multimodal (texte + voix + vision)
4. **6 fonctionnalités** (identiques accueil, développées)
5. **4 étapes** (identiques accueil)
6. **Tarification** — Aperçu + CTA devis
7. **FAQ** (8 questions)
8. **Services connexes** — Qualification leads / Campagnes WhatsApp
9. **CTA final**

### FAQ (8 questions)
1. Comment fonctionne la transcription vocale WhatsApp ?
2. Quels types de photos l'agent peut-il analyser ?
3. L'agent peut-il remplir des documents avec les photos reçues ?
4. Faut-il un compte WhatsApp Business existant ?
5. Comment fonctionne la règle des 24h de Meta ?
6. L'agent peut-il gérer plusieurs langues ?
7. Combien de conversations simultanées peut-il gérer ?
8. Quelle est la conformité RGPD de la solution ?

---

## 7. Page Tarifs (`/tarifs`)

```
STARTER           PRO                 ENTERPRISE
─────────────     ─────────────────   ──────────────────
1 agent WA        Multi-scénarios     Sur-mesure
1 scénario        Templates Meta      Multi-numéros
1 intégration     CRM + Agenda        Intégrations ∞
                  Vocaux + Vision     SLA prioritaire
                  Workflows auto      Onboarding dédié
                  Support 48h         Support 24h

X €               X €                 Sur devis
+ XX €/mois       + XX €/mois

[Choisir]         [Choisir]           [Nous contacter]
```

*Prix à définir par le client avant mise en ligne.*

---

## 8. Blog (`/blog`)

5 articles MDX de départ (SEO) :
1. "Comment fonctionne un agent IA WhatsApp ?"
2. "Agent IA WhatsApp vs chatbot classique : quelle différence ?"
3. "Comment analyser les photos clients avec l'IA WhatsApp ?"
4. "5 cas d'usage d'un agent IA WhatsApp en entreprise"
5. "Combien coûte un agent IA WhatsApp en 2026 ?"

Structure MDX : frontmatter (title, date, description, slug) + contenu markdown.

---

## 9. Page Contact (`/contact`)

- Formulaire React Hook Form → Resend (envoi email)
- Bouton WhatsApp direct : `wa.me/[numéro]`
- Cal.com embed pour prise de RDV

---

## 10. CTAs & Conversion

| Emplacement | CTA | Destination |
|-------------|-----|-------------|
| Hero | "Réserver une démo gratuite" | Cal.com embed |
| Hero | "Nous écrire sur WhatsApp" | wa.me |
| Tarifs | "Demander un devis" | Formulaire Resend |
| Toutes pages | Sticky mobile "WhatsApp" | wa.me |
| Footer | "Prendre RDV" | Cal.com |

---

## 11. SEO

**Pages cibles prioritaires :**

| Page | Mot-clé principal |
|------|-------------------|
| / | "agent ia whatsapp" |
| /services/agent-ia-whatsapp | "agent ia whatsapp entreprise" |
| /tarifs | "prix agent ia whatsapp" |
| /blog/... | Longue traîne |

**Éléments SEO :**
- `next/metadata` avec title + description unique par page
- Hiérarchie H1 > H2 > H3 respectée
- JSON-LD : Organization, Service, FAQ, BreadcrumbList
- Sitemap XML dynamique (`/sitemap.xml`)
- `robots.txt`
- Open Graph + Twitter Cards
- URLs propres et descriptives

---

## 12. Performance

- Lighthouse > 90 sur toutes métriques
- Images : WebP/AVIF + lazy loading via `next/image`
- Fonts : Inter subsettée + `preload`
- LCP < 2s

---

## 13. Structure des Fichiers (Next.js App Router)

```
whatsapp-agent-ia/
├── app/
│   ├── layout.tsx              # Layout global, metadata de base
│   ├── page.tsx                # Accueil
│   ├── services/
│   │   └── agent-ia-whatsapp/
│   │       └── page.tsx
│   ├── tarifs/page.tsx
│   ├── blog/
│   │   ├── page.tsx            # Liste articles
│   │   └── [slug]/page.tsx     # Article individuel
│   ├── contact/page.tsx
│   └── sitemap.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── FeaturesGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── PricingPreview.tsx
│   │   ├── StatsSection.tsx
│   │   └── FinalCTA.tsx
│   ├── shared/
│   │   ├── CTAButton.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── FAQAccordion.tsx
│   │   └── CalEmbed.tsx
│   └── blog/
│       ├── BlogCard.tsx
│       └── MDXContent.tsx
├── content/
│   └── blog/
│       ├── comment-fonctionne-agent-ia-whatsapp.mdx
│       └── [4 autres articles].mdx
├── lib/
│   ├── mdx.ts                  # Utilitaires lecture MDX
│   └── resend.ts               # Config envoi email
├── public/
│   ├── robots.txt
│   └── [images, icons]
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## 14. Phases d'Implémentation

| Phase | Contenu | Durée estimée |
|-------|---------|---------------|
| 1 | Init projet + design system + layout (Header/Footer) | Jour 1 |
| 2 | Page Accueil complète | Jour 2 |
| 3 | Page service /services/agent-ia-whatsapp | Jour 3 |
| 4 | Tarifs + Contact + Formulaire Resend | Jour 4 |
| 5 | Blog MDX (liste + article) + 5 articles | Jour 5 |
| 6 | SEO (metadata, JSON-LD, sitemap) + perf | Jour 6 |
| 7 | Déploiement Vercel + tests finaux | Jour 7 |

---

## 15. Ce qui reste à définir (avant mise en ligne)

- [ ] Nom de domaine final
- [ ] Numéro WhatsApp Business
- [ ] Lien Cal.com (compte + event type)
- [ ] Email Resend (destinataire des formulaires)
- [ ] Grille tarifaire exacte (prix Starter / Pro)
- [ ] Témoignages clients réels
- [ ] Logos clients (si disponibles)
