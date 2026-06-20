import type { Metadata } from "next";
import { Calendar, MessageCircle, CheckCircle, TrendingUp, Target } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "Marketing Hub WhatsApp — Campagnes, segments et ROI mesurable | AgenticWhatsup", description: "Centralisez toute votre stratégie marketing WhatsApp : segmentation client, campagnes ciblées, A/B tests, analytics temps réel. ROI moyen 3,2× supérieur aux landing pages." },
  en: { title: "WhatsApp Marketing Hub — Campaigns, segments and measurable ROI | AgenticWhatsup", description: "Centralise your entire WhatsApp marketing strategy: customer segmentation, targeted campaigns, A/B tests, real-time analytics. Average ROI 3.2× higher than landing pages." },
  de: { title: "WhatsApp Marketing Hub — Kampagnen, Segmente und messbarer ROI | AgenticWhatsup", description: "Zentralisieren Sie Ihre gesamte WhatsApp-Marketingstrategie: Kundensegmentierung, gezielte Kampagnen, A/B-Tests, Echtzeit-Analytics. Durchschnittlicher ROI 3,2× höher als Landing Pages." },
  nl: { title: "WhatsApp Marketing Hub — Campagnes, segmenten en meetbare ROI | AgenticWhatsup", description: "Centraliseer uw volledige WhatsApp-marketingstrategie: klantsegmentatie, gerichte campagnes, A/B-tests, realtime analytics. Gemiddelde ROI 3,2× hoger dan landingspagina's." },
};

const t: Record<string, {
  badge: string; h1: string; h1highlight: string; subtitle: string;
  stats: Array<{ value: string; label: string }>;
  pillarsTitle: string;
  pillars: Array<{ icon: string; title: string; desc: string; points: string[] }>;
  segmentTitle: string;
  segments: Array<{ label: string; desc: string }>;
  abTitle: string; abPoints: string[];
  analyticsTitle: string; analyticsItems: Array<{ metric: string; desc: string }>;
  resultsTitle: string;
  results: Array<{ value: string; label: string; context: string }>;
  ctaTitle: string; ctaSubtitle: string; ctaBadge: string; ctaPrimary: string; ctaSecondary: string;
  longIntro?: string[];
  deepDive?: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqTitle?: string;
  faq?: { q: string; a: string }[];
  relatedTitle?: string;
  related?: { href: string; label: string }[];
}> = {
  fr: {
    badge: "Marketing WhatsApp centralisé",
    h1: "Tous vos leviers marketing",
    h1highlight: "dans un seul agent",
    subtitle: "Segmentez, ciblez, envoyez et mesurez. L'agent IA transforme WhatsApp en votre canal marketing le plus rentable — 98% d'ouverture, 3,2× le taux de conversion des emails.",
    stats: [
      { value: "98%", label: "taux d'ouverture moyen" },
      { value: "3,2×", label: "conversion vs emails" },
      { value: "65%", label: "coût par lead moins élevé" },
    ],
    pillarsTitle: "Les 4 piliers du Marketing Hub",
    pillars: [
      {
        icon: "🎯",
        title: "Segmentation intelligente",
        desc: "Envoyez le bon message à la bonne personne au bon moment.",
        points: [
          "Segments basés sur l'historique d'achat",
          "Tags comportementaux (intéressé, indécis, VIP)",
          "Localisation géographique",
          "Statut dans le pipeline commercial",
          "Fréquence d'interaction avec l'agent",
        ],
      },
      {
        icon: "📢",
        title: "Campagnes broadcast",
        desc: "Lancez des campagnes ciblées en quelques clics sur toute votre base.",
        points: [
          "Envoi en masse WhatsApp (API officielle Meta)",
          "Personnalisation dynamique (prénom, produit, ville)",
          "Planification et envoi différé",
          "Messages riches : image, vidéo, boutons",
          "Respect automatique des opt-outs",
        ],
      },
      {
        icon: "🔬",
        title: "A/B Testing",
        desc: "Optimisez vos messages en testant plusieurs variantes simultanément.",
        points: [
          "Test d'objet / d'accroche",
          "Test de CTA (bouton vs lien)",
          "Test d'heure d'envoi",
          "Gagnant automatique après seuil défini",
          "Rapport comparatif détaillé",
        ],
      },
      {
        icon: "📊",
        title: "Analytics & ROI",
        desc: "Mesurez l'impact réel de chaque campagne sur votre chiffre d'affaires.",
        points: [
          "Taux d'ouverture, de clics, de réponse",
          "Conversions attribuées par campagne",
          "Revenus générés par segment",
          "Coût par lead acquis",
          "Comparaison campagnes dans le temps",
        ],
      },
    ],
    segmentTitle: "Exemples de segments prêts à l'emploi",
    segments: [
      { label: "🔥 Clients chauds", desc: "A interagi avec l'agent cette semaine sans acheter" },
      { label: "💎 VIP", desc: "Panier élevé, forte récurrence et 3 achats ou plus" },
      { label: "😴 Dormants", desc: "Aucun achat depuis 60 jours" },
      { label: "🆕 Nouveaux", desc: "Premier achat il y a moins de 7 jours" },
      { label: "🔄 Fidèles", desc: "5+ achats sur les 12 derniers mois" },
      { label: "🎂 Anniversaire", desc: "Date d'anniversaire dans les 7 prochains jours" },
    ],
    abTitle: "Le A/B testing WhatsApp qui change tout",
    abPoints: [
      "Testez 2 à 4 variantes de votre message simultanément",
      "L'agent envoie chaque variante à un échantillon de votre liste",
      "Après X heures (que vous définissez), le gagnant est envoyé au reste",
      "Résultat : toujours le message le plus performant — automatiquement",
    ],
    analyticsTitle: "Métriques disponibles en temps réel",
    analyticsItems: [
      { metric: "Taux d'ouverture", desc: "% de destinataires ayant lu le message" },
      { metric: "Taux de réponse", desc: "% ayant interagi avec l'agent après la campagne" },
      { metric: "Taux de conversion", desc: "% ayant effectué l'action souhaitée (achat, RDV...)" },
      { metric: "Revenu par message", desc: "CA généré / nombre de messages envoyés" },
      { metric: "Coût par conversion", desc: "Coût total campagne / nombre de conversions" },
    ],
    resultsTitle: "Résultats mesurés chez nos clients",
    results: [
      { value: "98%", label: "taux d'ouverture", context: "vs 22% pour les emails" },
      { value: "3,2×", label: "taux de conversion", context: "vs landing pages classiques" },
      { value: "65%", label: "coût par lead réduit", context: "vs Google Ads" },
      { value: "+31%", label: "panier moyen", context: "grâce aux messages personnalisés" },
    ],
    ctaBadge: "Première campagne en 24h",
    ctaTitle: "Votre base clients mérite mieux que des emails",
    ctaSubtitle: "On configure votre premier segment et votre première campagne ensemble — résultats visibles en 48h.",
    ctaPrimary: "Prendre RDV",
    ctaSecondary: "Écrire sur WhatsApp",
    longIntro: [
      "Le Marketing Hub WhatsApp d'AgenticWhatsup n'est pas un outil de plus. C'est ce qui remplace 4 stacks marketing distinctes — Mailchimp, Klaviyo, Hootsuite, et votre tableur Excel de segmentation — par une seule console qui exploite le canal le plus lu au monde. 98% d'ouverture en moins de 10 minutes contre 18 à 22% pour vos campagnes email les mieux optimisées : la différence ne se discute pas, elle se mesure dans votre P&L.",
      "Le Marketing Hub couvre quatre piliers techniques (segmentation, broadcast, A/B testing, analytics) et un pilier humain : un consultant AgenticWhatsup configure votre premier segment et votre première campagne en moins de 48h, sur la base de votre base clients existante (CSV export Stripe, Shopify, HubSpot, ou tout CRM standard).",
    ],
    deepDive: [
      {
        heading: "Comment fonctionne réellement le broadcast WhatsApp en 2026",
        paragraphs: [
          "Le broadcast WhatsApp est encadré par Meta via la WhatsApp Business API officielle (à ne pas confondre avec l'application WhatsApp Business). Trois règles déterminent ce que vous pouvez ou ne pouvez pas envoyer : tout message marketing exige un opt-in explicite tracé, chaque campagne utilise un template pré-validé par Meta, et le budget dépend du pays, du volume et du type de conversation.",
          "AgenticWhatsup gère intégralement cette mécanique : capture du consentement RGPD au premier message entrant, soumission automatique des templates à Meta, segmentation fine et suivi des performances. Le cadrage budgétaire se fait pendant l'audit, avec une estimation adaptée à votre base et à vos objectifs.",
        ],
      },
      {
        heading: "Segmentation comportementale : 12 segments prêts à l'emploi",
        paragraphs: [
          "Aller au-delà de la segmentation basique 'clients vs prospects' multiplie le ROI par 2,1 à 4,8 selon l'industrie (étude AgenticWhatsup sur 47 clients e-commerce, retail, et coaching, mai 2025). Les 12 segments les plus puissants combinent données transactionnelles, comportementales et déclaratives.",
        ],
        bullets: [
          "Hot leads : interaction agent <7 jours sans achat — taux de conversion campagne 18 à 24%",
          "VIP : forte valeur client, panier élevé et récurrence — meilleur segment pour offres premium et early access",
          "Dormants 30j : aucune interaction depuis 30 jours — taux de réactivation 11 à 17%",
          "Dormants 90j+ : à traiter par séquence de réveil 3 messages, sinon coût acquisition supérieur",
          "Fans : 5+ achats sur 12 mois, NPS >8 — meilleur segment pour parrainage et UGC",
          "Anniversaire : J-7 anniversaire — message + offre = +47% conversion vs offre froide",
          "Cart abandon 1h : panier abandonné <1h — récupération 26% sur ce segment",
          "Cart abandon 24h : second rappel avec preuve sociale — récupération additionnelle 9%",
          "Post-achat J+7 : cross-sell ciblé sur produit complémentaire — panier moyen +31%",
          "Post-achat J+30 : repurchase reminder pour produits consommables",
          "Géolocalisé : ouverture nouveau magasin, événement local, météo — message hyper-contextuel",
          "Comportemental site : visiteur catégorie produit X 3+ fois sans achat — segment chaud sous-exploité",
        ],
      },
      {
        heading: "Les 7 erreurs qui tuent un broadcast WhatsApp",
        paragraphs: [
          "La majorité des marques qui débutent sur WhatsApp brûlent leur base en 3 campagnes par méconnaissance des codes du canal. Les 7 erreurs ci-dessous sont éliminées d'office par les guard-rails configurés dans le Marketing Hub AgenticWhatsup.",
        ],
        bullets: [
          "Envoyer une campagne sans opt-in tracé — risque de bannissement Meta sous 48h",
          "Trop d'emojis et de gras — taux d'opt-out multiplié par 2,8 vs message sobre",
          "Templates pas validés par Meta — message bloqué, base non touchée, budget perdu",
          "Envoi à 9h le lundi — fenêtre saturée, taux de réponse 4× inférieur à 14h-16h",
          "Pas de bouton CTA — taux de clic divisé par 3,7 vs message avec quick reply",
          "Même message à toute la base — taux d'opt-out 5 à 12% sur première campagne",
          "Ignorer les opt-out — sanction CNIL et bannissement Meta, conformité non négociable",
        ],
      },
      {
        heading: "Métriques à suivre vraiment (pas le taux d'ouverture)",
        paragraphs: [
          "Le taux d'ouverture WhatsApp est toujours autour de 95-98% — c'est presque inutile comme KPI, sauf comme contrôle d'opt-out implicite. Les vraies métriques business sont (a) le taux de réponse (% des destinataires qui répliquent à l'agent), (b) le revenu par message (RPM), (c) le coût par conversion attribué (CPA), et (d) le taux d'opt-out post-campagne (alerte rouge >2%).",
          "Le Marketing Hub affiche ces 4 métriques en temps réel par segment et par campagne, avec attribution multi-touch sur 30 jours. Vous voyez non seulement combien la campagne du Black Friday a généré de ventes immédiates, mais aussi combien elle a contribué à des ventes complétées via Google Ads dans les 14 jours suivants.",
        ],
      },
    ],
    faqTitle: "Questions fréquentes sur le Marketing Hub WhatsApp",
    faq: [
      { q: "WhatsApp ne va-t-il pas me bannir si j'envoie en masse ?", a: "Non, à condition d'utiliser la WhatsApp Business API officielle (Meta) avec opt-in explicite tracé et templates pré-validés. AgenticWhatsup gère intégralement cette conformité — aucun de nos 200+ clients n'a été banni en 18 mois. La règle d'or : on ne contacte jamais quelqu'un qui n'a pas explicitement consenti, et chaque message respecte les guidelines Meta." },
      { q: "Comment cadrer le budget d'une campagne broadcast ?", a: "Le budget dépend du pays, du volume, du type de message, du niveau de segmentation et des outils à connecter. L'audit gratuit permet d'estimer le scénario utile sans afficher de grille publique ni promettre une fourchette générique." },
      { q: "Puis-je importer ma base existante depuis Mailchimp / Klaviyo / HubSpot ?", a: "Oui, par CSV en quelques minutes. Pour les imports >5 000 contacts, l'agent demande automatiquement à chaque contact de re-confirmer son opt-in WhatsApp via un premier message conformité — c'est obligatoire RGPD et Meta. Taux d'opt-in observé : 38 à 62% selon la qualité de votre base. Les non-opt-in restent dans votre Mailchimp." },
      { q: "Quel ROI mesuré sur le Marketing Hub WhatsApp ?", a: "ROI moyen 12× à 24× sur 12 mois pour les e-commerces (basé sur 47 déploiements 2024-2025). Pour les services BtoB, ROI 8× à 14× via segmentation pipe et campagnes nurture. Le payback se fait typiquement à 30-45 jours pour les bases >5 000 contacts. Audit gratuit de 30 min pour calculer le ROI sur votre cas précis." },
      { q: "L'A/B testing fonctionne vraiment sur WhatsApp ?", a: "Oui, et c'est l'un des leviers les plus sous-exploités. AgenticWhatsup envoie chaque variante à un échantillon (typiquement 10% de la base par variante), mesure le taux de clic et de réponse pendant la fenêtre que vous définissez (1-12h), puis envoie automatiquement la variante gagnante au reste. Gain mesuré sur les meilleures campagnes : taux de réponse +47% vs envoi sans test." },
      { q: "Comment intégrer le Marketing Hub à mon Shopify ou WooCommerce ?", a: "Connecteurs natifs Shopify, WooCommerce, Magento, Prestashop, BigCommerce. La synchronisation est automatique : nouvel achat → tag client mis à jour → segment recalculé. Triggers automatiques disponibles : panier abandonné, post-achat upsell, anniversaire achat, alerte stock retour, demande d'avis. Configuration en 1 à 3 jours selon votre stack." },
    ],
    relatedTitle: "Pour approfondir",
    related: [
      { href: "/fr/blog/whatsapp-marketing-ia-campagnes-automatisees", label: "Marketing IA WhatsApp : guide complet des campagnes automatisées" },
      { href: "/fr/blog/whatsapp-vs-email-marketing-2026", label: "WhatsApp vs Email marketing en 2026 : le verdict chiffré" },
      { href: "/fr/blog/automatisation-whatsapp-ecommerce", label: "Automatisation WhatsApp e-commerce : 8 scénarios qui rapportent" },
      { href: "/fr/contact", label: "Audit gratuit 30 min pour cadrer votre projet WhatsApp IA" },
      { href: "/fr/blog/rgpd-whatsapp-ia-guide", label: "RGPD et WhatsApp IA : ce que la CNIL exige réellement" },
      { href: "/fr/blog/agent-ia-whatsapp-vs-chatbot", label: "Agent IA vs chatbot WhatsApp : la différence qui change le ROI" },
    ],
  },
  en: {
    badge: "Centralised WhatsApp marketing",
    h1: "All your marketing levers",
    h1highlight: "in a single agent",
    subtitle: "Segment, target, send and measure. The AI agent turns WhatsApp into your most profitable marketing channel — 98% open rate, 3.2× the conversion rate of emails.",
    stats: [
      { value: "98%", label: "average open rate" },
      { value: "3.2×", label: "conversion vs emails" },
      { value: "65%", label: "lower cost per lead" },
    ],
    pillarsTitle: "The 4 pillars of the Marketing Hub",
    pillars: [
      {
        icon: "🎯",
        title: "Smart segmentation",
        desc: "Send the right message to the right person at the right time.",
        points: [
          "Segments based on purchase history",
          "Behavioural tags (interested, undecided, VIP)",
          "Geographic location",
          "Position in the sales pipeline",
          "Interaction frequency with the agent",
        ],
      },
      {
        icon: "📢",
        title: "Broadcast campaigns",
        desc: "Launch targeted campaigns to your entire base in a few clicks.",
        points: [
          "Bulk WhatsApp sending (official Meta API)",
          "Dynamic personalisation (first name, product, city)",
          "Scheduling and delayed sending",
          "Rich messages: image, video, buttons",
          "Automatic opt-out compliance",
        ],
      },
      {
        icon: "🔬",
        title: "A/B Testing",
        desc: "Optimise your messages by testing multiple variants simultaneously.",
        points: [
          "Subject / hook testing",
          "CTA testing (button vs link)",
          "Send time testing",
          "Automatic winner after defined threshold",
          "Detailed comparative report",
        ],
      },
      {
        icon: "📊",
        title: "Analytics & ROI",
        desc: "Measure the real impact of each campaign on your revenue.",
        points: [
          "Open, click and response rates",
          "Conversions attributed per campaign",
          "Revenue generated per segment",
          "Cost per acquired lead",
          "Campaign comparison over time",
        ],
      },
    ],
    segmentTitle: "Ready-to-use segment examples",
    segments: [
      { label: "🔥 Hot leads", desc: "Interacted with the agent this week without buying" },
      { label: "💎 VIP", desc: "High average basket, repeat behaviour and 3 or more purchases" },
      { label: "😴 Dormant", desc: "No purchase in 60 days" },
      { label: "🆕 New", desc: "First purchase less than 7 days ago" },
      { label: "🔄 Loyal", desc: "5+ purchases in the last 12 months" },
      { label: "🎂 Birthday", desc: "Birthday in the next 7 days" },
    ],
    abTitle: "The WhatsApp A/B testing that changes everything",
    abPoints: [
      "Test 2 to 4 variants of your message simultaneously",
      "The agent sends each variant to a sample of your list",
      "After X hours (you define), the winner is sent to the rest",
      "Result: always the best-performing message — automatically",
    ],
    analyticsTitle: "Metrics available in real time",
    analyticsItems: [
      { metric: "Open rate", desc: "% of recipients who read the message" },
      { metric: "Response rate", desc: "% who interacted with the agent after the campaign" },
      { metric: "Conversion rate", desc: "% who completed the desired action (purchase, booking...)" },
      { metric: "Revenue per message", desc: "Revenue generated / number of messages sent" },
      { metric: "Cost per conversion", desc: "Total campaign cost / number of conversions" },
    ],
    resultsTitle: "Measured results at our clients",
    results: [
      { value: "98%", label: "open rate", context: "vs 22% for emails" },
      { value: "3.2×", label: "conversion rate", context: "vs classic landing pages" },
      { value: "65%", label: "reduced cost per lead", context: "vs Google Ads" },
      { value: "+31%", label: "average basket", context: "thanks to personalised messages" },
    ],
    ctaBadge: "First campaign in 24h",
    ctaTitle: "Your customer base deserves better than emails",
    ctaSubtitle: "We set up your first segment and first campaign together — results visible in 48h.",
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
    longIntro: [
      "AgenticWhatsup's WhatsApp Marketing Hub isn't another tool. It replaces 4 separate marketing stacks — Mailchimp, Klaviyo, Hootsuite, and your segmentation spreadsheet — with one console that exploits the most-read channel in the world. 98% open rate within 10 minutes vs 18-22% for your best-optimised email campaigns: the difference isn't debatable, it shows up in your P&L.",
      "The Marketing Hub covers four technical pillars (segmentation, broadcast, A/B testing, analytics) plus a human one: an AgenticWhatsup consultant configures your first segment and your first campaign in under 48 hours, based on your existing customer base (CSV export from Stripe, Shopify, HubSpot, or any standard CRM).",
    ],
    deepDive: [
      {
        heading: "How WhatsApp broadcast actually works in 2026",
        paragraphs: [
          "WhatsApp broadcast is regulated by Meta via the official WhatsApp Business API. Three rules determine what you can and cannot send: every marketing message requires tracked explicit opt-in, every campaign uses a Meta-pre-approved template, and the operating budget depends on country, volume and conversation type.",
          "AgenticWhatsup handles this mechanic end-to-end: GDPR-compliant consent capture on first inbound message, automatic template submission to Meta, fine-grained segmentation and performance tracking. Budget framing happens during the audit, based on your customer base and business objective.",
        ],
      },
      {
        heading: "Behavioural segmentation: 12 ready-to-use segments",
        paragraphs: [
          "Going beyond basic 'customers vs prospects' segmentation multiplies ROI by 2.1 to 4.8 depending on industry (AgenticWhatsup study on 47 e-commerce, retail and coaching clients, May 2025). The 12 most powerful segments combine transactional, behavioural and declarative data.",
        ],
        bullets: [
          "Hot leads: agent interaction <7 days without purchase — campaign conversion rate 18-24%",
          "VIP: high customer value, high basket and repeat purchase behaviour — best segment for premium offers and early access",
          "30-day dormant: no interaction in 30 days — reactivation rate 11-17%",
          "90-day+ dormant: handle with a 3-message wake-up sequence, otherwise CAC exceeds value",
          "Fans: 5+ purchases in 12 months, NPS >8 — best segment for referrals and UGC",
          "Birthday: 7 days before birthday — message + offer = +47% conversion vs cold offer",
          "1h cart abandon: cart abandoned <1h — 26% recovery on this segment",
          "24h cart abandon: second reminder with social proof — 9% additional recovery",
          "Post-purchase D+7: targeted cross-sell on complementary product — basket +31%",
          "Post-purchase D+30: repurchase reminder for consumables",
          "Geo-targeted: new store opening, local event, weather — hyper-contextual message",
          "Site behaviour: visitor on category X 3+ times without purchase — under-exploited warm segment",
        ],
      },
      {
        heading: "The 7 mistakes that kill a WhatsApp broadcast",
        paragraphs: [
          "Most brands starting on WhatsApp burn their list within 3 campaigns through ignorance of the channel's codes. The 7 mistakes below are eliminated by default by the guard-rails configured in AgenticWhatsup's Marketing Hub.",
        ],
        bullets: [
          "Sending a campaign without tracked opt-in — risk of Meta ban within 48 hours",
          "Too many emojis and bold text — opt-out rate multiplied by 2.8 vs sober message",
          "Templates not validated by Meta — message blocked, base not reached, budget wasted",
          "Sending Monday 9am — saturated window, response rate 4× lower than 2-4pm",
          "No CTA button — click rate divided by 3.7 vs message with quick reply",
          "Same message to entire base — 5-12% opt-out rate on first campaign",
          "Ignoring opt-outs — ICO/GDPR sanction and Meta ban, compliance non-negotiable",
        ],
      },
      {
        heading: "Metrics to actually track (not open rate)",
        paragraphs: [
          "WhatsApp open rate is always around 95-98% — almost useless as a KPI, except as an implicit opt-out check. The real business metrics are (a) response rate (% of recipients who reply to the agent), (b) revenue per message (RPM), (c) attributed cost per conversion (CPA), and (d) post-campaign opt-out rate (red alert >2%).",
          "The Marketing Hub displays these 4 metrics in real time per segment and per campaign, with multi-touch attribution over 30 days. You see not only how much your Black Friday campaign generated in immediate sales, but also how much it contributed to sales completed via Google Ads in the following 14 days.",
        ],
      },
    ],
    faqTitle: "WhatsApp Marketing Hub frequently asked questions",
    faq: [
      { q: "Won't WhatsApp ban me if I send in bulk?", a: "No, provided you use the official WhatsApp Business API (Meta) with tracked explicit opt-in and pre-validated templates. AgenticWhatsup handles this compliance end-to-end — none of our 200+ clients have been banned in 18 months. Golden rule: never contact someone who hasn't explicitly consented, and every message respects Meta's guidelines." },
      { q: "How should I frame a broadcast campaign budget?", a: "Budget depends on country, volume, message type, segmentation depth and connected tools. The free audit estimates the useful scenario for your business without publishing generic public pricing." },
      { q: "Can I import my existing base from Mailchimp / Klaviyo / HubSpot?", a: "Yes, via CSV in minutes. For imports >5,000 contacts, the agent automatically asks each contact to re-confirm WhatsApp opt-in via a first compliance message — this is mandatory under GDPR and Meta. Observed opt-in rate: 38 to 62% depending on base quality. Non-opt-ins remain in your Mailchimp." },
      { q: "What ROI is measured on the WhatsApp Marketing Hub?", a: "Average ROI 12× to 24× over 12 months for e-commerce (based on 47 deployments 2024-2025). For B2B services, ROI 8× to 14× via pipeline segmentation and nurture campaigns. Payback typically at 30-45 days for bases >5,000 contacts. Free 30-min audit to calculate ROI on your specific case." },
      { q: "Does A/B testing actually work on WhatsApp?", a: "Yes, and it's one of the most under-exploited levers. AgenticWhatsup sends each variant to a sample (typically 10% of base per variant), measures click and response rate during the window you define (1-12h), then automatically sends the winning variant to the rest. Measured gain on best campaigns: response rate +47% vs no-test send." },
      { q: "How do I integrate the Marketing Hub with Shopify or WooCommerce?", a: "Native connectors for Shopify, WooCommerce, Magento, Prestashop, BigCommerce. Sync is automatic: new purchase → customer tag updated → segment recalculated. Available automatic triggers: cart abandonment, post-purchase upsell, purchase anniversary, back-in-stock alert, review request. Setup takes 1-3 days depending on stack." },
    ],
    relatedTitle: "Read more",
    related: [
      { href: "/en/blog/whatsapp-marketing-ai-automated-campaigns", label: "WhatsApp AI Marketing: complete guide to automated campaigns" },
      { href: "/en/blog/whatsapp-vs-email-marketing-2026", label: "WhatsApp vs Email marketing in 2026: the data-driven verdict" },
      { href: "/en/blog/whatsapp-automation-ecommerce", label: "WhatsApp e-commerce automation: 8 scenarios that pay" },
      { href: "/en/contact", label: "Book a free audit to frame your WhatsApp AI project" },
      { href: "/en/blog/gdpr-whatsapp-ai-guide", label: "GDPR and WhatsApp AI: what the ICO actually requires" },
      { href: "/en/blog/whatsapp-ai-agent-vs-chatbot", label: "WhatsApp AI agent vs chatbot: the difference that changes ROI" },
    ],
  },
  de: {
    badge: "Zentralisiertes WhatsApp-Marketing",
    h1: "Alle Ihre Marketing-Hebel",
    h1highlight: "in einem Agent",
    subtitle: "Segmentieren, zielen, senden und messen. Der KI-Agent verwandelt WhatsApp in Ihren profitabelsten Marketingkanal — 98% Öffnungsrate, 3,2× die Konversionsrate von E-Mails.",
    stats: [
      { value: "98%", label: "durchschnittliche Öffnungsrate" },
      { value: "3,2×", label: "Konversion vs E-Mails" },
      { value: "65%", label: "geringere Kosten pro Lead" },
    ],
    pillarsTitle: "Die 4 Säulen des Marketing Hubs",
    pillars: [
      {
        icon: "🎯",
        title: "Intelligente Segmentierung",
        desc: "Senden Sie die richtige Nachricht an die richtige Person zur richtigen Zeit.",
        points: [
          "Segmente basierend auf Kaufhistorie",
          "Verhaltens-Tags (interessiert, unentschlossen, VIP)",
          "Geografischer Standort",
          "Position in der Vertriebspipeline",
          "Interaktionshäufigkeit mit dem Agent",
        ],
      },
      {
        icon: "📢",
        title: "Broadcast-Kampagnen",
        desc: "Starten Sie gezielte Kampagnen an Ihre gesamte Basis mit wenigen Klicks.",
        points: [
          "Massen-WhatsApp-Versand (offizielle Meta API)",
          "Dynamische Personalisierung (Vorname, Produkt, Stadt)",
          "Planung und verzögerter Versand",
          "Rich Messages: Bild, Video, Schaltflächen",
          "Automatische Opt-out-Einhaltung",
        ],
      },
      {
        icon: "🔬",
        title: "A/B-Testing",
        desc: "Optimieren Sie Ihre Nachrichten durch gleichzeitiges Testen mehrerer Varianten.",
        points: [
          "Betreff-/Hook-Tests",
          "CTA-Tests (Schaltfläche vs Link)",
          "Versandzeit-Tests",
          "Automatischer Gewinner nach definiertem Schwellenwert",
          "Detaillierter Vergleichsbericht",
        ],
      },
      {
        icon: "📊",
        title: "Analytics & ROI",
        desc: "Messen Sie die echte Auswirkung jeder Kampagne auf Ihren Umsatz.",
        points: [
          "Öffnungs-, Klick- und Antwortraten",
          "Pro Kampagne zugeordnete Konversionen",
          "Pro Segment generierter Umsatz",
          "Kosten pro erworbenem Lead",
          "Kampagnenvergleich über die Zeit",
        ],
      },
    ],
    segmentTitle: "Gebrauchsfertige Segmentbeispiele",
    segments: [
      { label: "🔥 Heiße Leads", desc: "Diese Woche mit Agent interagiert, ohne zu kaufen" },
      { label: "💎 VIP", desc: "Hoher Warenkorb, Wiederkäufe und 3 oder mehr Käufe" },
      { label: "😴 Ruhend", desc: "Kein Kauf in 60 Tagen" },
      { label: "🆕 Neu", desc: "Erster Kauf vor weniger als 7 Tagen" },
      { label: "🔄 Treu", desc: "5+ Käufe in den letzten 12 Monaten" },
      { label: "🎂 Geburtstag", desc: "Geburtstag in den nächsten 7 Tagen" },
    ],
    abTitle: "Das WhatsApp-A/B-Testing, das alles verändert",
    abPoints: [
      "Testen Sie 2 bis 4 Varianten Ihrer Nachricht gleichzeitig",
      "Der Agent sendet jede Variante an eine Stichprobe Ihrer Liste",
      "Nach X Stunden (die Sie festlegen) wird der Gewinner an den Rest gesendet",
      "Ergebnis: immer die leistungsstärkste Nachricht — automatisch",
    ],
    analyticsTitle: "Metriken in Echtzeit verfügbar",
    analyticsItems: [
      { metric: "Öffnungsrate", desc: "% der Empfänger, die die Nachricht gelesen haben" },
      { metric: "Antwortrate", desc: "% die nach der Kampagne mit dem Agent interagiert haben" },
      { metric: "Konversionsrate", desc: "% die die gewünschte Aktion durchgeführt haben" },
      { metric: "Umsatz pro Nachricht", desc: "Generierter Umsatz / Anzahl gesendeter Nachrichten" },
      { metric: "Kosten pro Konversion", desc: "Gesamtkosten Kampagne / Anzahl Konversionen" },
    ],
    resultsTitle: "Gemessene Ergebnisse bei unseren Kunden",
    results: [
      { value: "98%", label: "Öffnungsrate", context: "vs 22% bei E-Mails" },
      { value: "3,2×", label: "Konversionsrate", context: "vs klassische Landing Pages" },
      { value: "65%", label: "reduzierte Kosten pro Lead", context: "vs Google Ads" },
      { value: "+31%", label: "durchschnittlicher Warenkorb", context: "dank personalisierter Nachrichten" },
    ],
    ctaBadge: "Erste Kampagne in 24h",
    ctaTitle: "Ihre Kundenbasis verdient mehr als E-Mails",
    ctaSubtitle: "Wir richten Ihr erstes Segment und Ihre erste Kampagne gemeinsam ein — Ergebnisse in 48h sichtbar.",
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
  },
  nl: {
    badge: "Gecentraliseerde WhatsApp-marketing",
    h1: "Al uw marketinghefbomen",
    h1highlight: "in één agent",
    subtitle: "Segmenteer, doelgericht, verzend en meet. De AI-agent maakt WhatsApp uw meest winstgevende marketingkanaal — 98% openingspercentage, 3,2× de conversie van e-mails.",
    stats: [
      { value: "98%", label: "gemiddeld openingspercentage" },
      { value: "3,2×", label: "conversie vs e-mails" },
      { value: "65%", label: "lagere kosten per lead" },
    ],
    pillarsTitle: "De 4 pijlers van de Marketing Hub",
    pillars: [
      {
        icon: "🎯",
        title: "Slimme segmentatie",
        desc: "Stuur het juiste bericht naar de juiste persoon op het juiste moment.",
        points: [
          "Segmenten op basis van aankoopgeschiedenis",
          "Gedragstags (geïnteresseerd, onbeslist, VIP)",
          "Geografische locatie",
          "Positie in de verkooppipeline",
          "Interactiefrequentie met de agent",
        ],
      },
      {
        icon: "📢",
        title: "Broadcast-campagnes",
        desc: "Start gerichte campagnes naar uw volledige basis met een paar klikken.",
        points: [
          "Bulk WhatsApp-verzending (officiële Meta API)",
          "Dynamische personalisatie (voornaam, product, stad)",
          "Planning en uitgestelde verzending",
          "Rijke berichten: afbeelding, video, knoppen",
          "Automatische naleving van opt-outs",
        ],
      },
      {
        icon: "🔬",
        title: "A/B-testing",
        desc: "Optimaliseer uw berichten door meerdere varianten tegelijk te testen.",
        points: [
          "Onderwerp-/haak-tests",
          "CTA-tests (knop vs link)",
          "Verzendtijdstests",
          "Automatische winnaar na gedefinieerde drempel",
          "Gedetailleerd vergelijkingsrapport",
        ],
      },
      {
        icon: "📊",
        title: "Analytics & ROI",
        desc: "Meet de echte impact van elke campagne op uw omzet.",
        points: [
          "Open-, klik- en responspercentages",
          "Conversies toegeschreven per campagne",
          "Omzet gegenereerd per segment",
          "Kosten per verworven lead",
          "Campagnevergelijking in de tijd",
        ],
      },
    ],
    segmentTitle: "Kant-en-klare segmentvoorbeelden",
    segments: [
      { label: "🔥 Warme leads", desc: "Deze week interactie met agent zonder te kopen" },
      { label: "💎 VIP", desc: "Hoge gemiddelde winkelwagen, herhaalaankopen en 3 of meer aankopen" },
      { label: "😴 Slapend", desc: "Geen aankoop in 60 dagen" },
      { label: "🆕 Nieuw", desc: "Eerste aankoop minder dan 7 dagen geleden" },
      { label: "🔄 Trouw", desc: "5+ aankopen in de afgelopen 12 maanden" },
      { label: "🎂 Verjaardag", desc: "Verjaardag in de komende 7 dagen" },
    ],
    abTitle: "De WhatsApp A/B-test die alles verandert",
    abPoints: [
      "Test 2 tot 4 varianten van uw bericht tegelijk",
      "De agent stuurt elke variant naar een steekproef van uw lijst",
      "Na X uur (door u bepaald) wordt de winnaar naar de rest gestuurd",
      "Resultaat: altijd het best presterende bericht — automatisch",
    ],
    analyticsTitle: "Statistieken beschikbaar in realtime",
    analyticsItems: [
      { metric: "Openingspercentage", desc: "% ontvangers die het bericht hebben gelezen" },
      { metric: "Responspercentage", desc: "% die na de campagne met de agent interacteerden" },
      { metric: "Conversiepercentage", desc: "% die de gewenste actie voltooiden" },
      { metric: "Omzet per bericht", desc: "Gegenereerde omzet / aantal verzonden berichten" },
      { metric: "Kosten per conversie", desc: "Totale campagnekosten / aantal conversies" },
    ],
    resultsTitle: "Gemeten resultaten bij onze klanten",
    results: [
      { value: "98%", label: "openingspercentage", context: "vs 22% voor e-mails" },
      { value: "3,2×", label: "conversiepercentage", context: "vs klassieke landingspagina's" },
      { value: "65%", label: "lagere kosten per lead", context: "vs Google Ads" },
      { value: "+31%", label: "gemiddeld winkelwagenbedrag", context: "dankzij gepersonaliseerde berichten" },
    ],
    ctaBadge: "Eerste campagne in 24u",
    ctaTitle: "Uw klantenbestand verdient meer dan e-mails",
    ctaSubtitle: "We richten uw eerste segment en eerste campagne samen in — resultaten zichtbaar in 48u.",
    ctaPrimary: "Afspraak maken — Gratis audit",
    ctaSecondary: "Schrijf op WhatsApp",
  },
};

export async function generateStaticParams() {
  return ["fr", "en", "de", "nl"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.fr;
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/services/marketing-hub`;
  const ogLocale = locale === "de" ? "de_DE" : locale === "nl" ? "nl_NL" : locale === "en" ? "en_US" : "fr_FR";
  return {
    title: m.title,
    description: m.description,
    keywords: "marketing hub WhatsApp IA, nurturing WhatsApp automatisé, upsell WhatsApp, fidélisation clients WhatsApp agent IA",
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: "https://agentic-whatsup.com/fr/services/marketing-hub",
        en: "https://agentic-whatsup.com/en/services/marketing-hub",
        de: "https://agentic-whatsup.com/de/services/marketing-hub",
        nl: "https://agentic-whatsup.com/nl/services/marketing-hub",
        "x-default": "https://agentic-whatsup.com/fr/services/marketing-hub",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      title: m.title,
      description: m.description,
      url: canonicalUrl,
      siteName: "AgenticWhatsup",
      images: [{ url: "https://agentic-whatsup.com/og-image.jpg", width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["https://agentic-whatsup.com/og-image.jpg"],
    },
  };
}

const waNumber = "41799394222";

export default async function MarketingHubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: (meta[locale] ?? meta.fr).title,
    description: (meta[locale] ?? meta.fr).description,
    url: `https://agentic-whatsup.com/${locale}/services/marketing-hub`,
    provider: { "@type": "Organization", name: "AgenticWhatsup", url: "https://agentic-whatsup.com" },
  };

  const faqJsonLd = c.faq && c.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: c.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      {/* Hero */}
      <div className="relative mb-20">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative text-center">
          <span className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-6">
            <TrendingUp size={14} /> {c.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight" style={{ fontFamily: "Onest, sans-serif" }}>
            {c.h1}<br /><span className="text-wa">{c.h1highlight}</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">{c.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={calLink} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
              <Calendar size={16} /> {c.ctaPrimary}
            </a>
            <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
              <MessageCircle size={16} className="text-wa" /> {c.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-20">
        {c.stats.map((s, i) => (
          <div key={i} className="bg-surface border border-surface-2 rounded-2xl p-6 text-center">
            <div className="text-wa font-extrabold text-3xl sm:text-4xl mb-1">{s.value}</div>
            <div className="text-slate-400 text-xs">{s.label}</div>
          </div>
        ))}
      </div>

      {/* 4 Pillars */}
      <div className="mb-20">
        <h2 className="text-white font-extrabold text-2xl mb-8 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.pillarsTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {c.pillars.map((p, i) => (
            <div key={i} className="bg-surface border border-surface-2 hover:border-wa/30 rounded-2xl p-6 transition-colors">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-white font-bold mb-1">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{p.desc}</p>
              <ul className="space-y-1.5">
                {p.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2 text-slate-300 text-xs">
                    <CheckCircle size={12} className="text-wa mt-0.5 shrink-0" /> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Segments */}
      <div className="mb-20">
        <h2 className="text-white font-extrabold text-2xl mb-6 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.segmentTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.segments.map((s, i) => (
            <div key={i} className="bg-surface border border-surface-2 rounded-xl p-4 flex items-start gap-3">
              <div>
                <div className="text-white font-semibold text-sm mb-0.5">{s.label}</div>
                <div className="text-slate-400 text-xs">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* A/B testing */}
      <div className="mb-20 bg-surface border border-surface-2 rounded-2xl p-8">
        <h2 className="text-white font-extrabold text-xl mb-5" style={{ fontFamily: "Onest, sans-serif" }}>{c.abTitle}</h2>
        <div className="space-y-3">
          {c.abPoints.map((pt, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-wa font-bold text-lg shrink-0">{i + 1}</span>
              <p className="text-slate-300 text-sm pt-0.5">{pt}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics */}
      <div className="mb-20">
        <h2 className="text-white font-extrabold text-2xl mb-6 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.analyticsTitle}</h2>
        <div className="space-y-3">
          {c.analyticsItems.map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-surface border border-surface-2 rounded-xl px-5 py-3.5">
              <div className="flex items-center gap-3">
                <Target size={14} className="text-wa" />
                <span className="text-white font-semibold text-sm">{item.metric}</span>
              </div>
              <span className="text-slate-400 text-xs text-right max-w-xs">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mb-20">
        <h2 className="text-white font-extrabold text-2xl mb-8 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.resultsTitle}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {c.results.map((r, i) => (
            <div key={i} className="bg-surface border border-surface-2 rounded-2xl p-5 text-center">
              <div className="text-wa font-extrabold text-2xl sm:text-3xl mb-1">{r.value}</div>
              <div className="text-white font-semibold text-sm mb-1">{r.label}</div>
              <div className="text-slate-500 text-xs">{r.context}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Long intro paragraphs */}
      {c.longIntro && c.longIntro.length > 0 && (
        <div className="mb-20 space-y-4 max-w-3xl mx-auto">
          {c.longIntro.map((p, i) => (
            <p key={i} className="text-slate-300 text-base leading-relaxed">{p}</p>
          ))}
        </div>
      )}

      {/* Deep dive sections */}
      {c.deepDive && c.deepDive.length > 0 && (
        <div className="mb-20 space-y-12">
          {c.deepDive.map((sec, i) => (
            <div key={i}>
              <h2 className="text-white font-extrabold text-2xl mb-5" style={{ fontFamily: "Onest, sans-serif" }}>
                {sec.heading}
              </h2>
              <div className="space-y-4 mb-5">
                {sec.paragraphs.map((p, j) => (
                  <p key={j} className="text-slate-300 text-base leading-relaxed">{p}</p>
                ))}
              </div>
              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="space-y-2">
                  {sec.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <CheckCircle size={16} className="text-wa mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* FAQ */}
      {c.faq && c.faq.length > 0 && (
        <div className="mb-20">
          <h2 className="text-white font-extrabold text-2xl mb-6 text-center" style={{ fontFamily: "Onest, sans-serif" }}>
            {c.faqTitle}
          </h2>
          <div className="space-y-3 max-w-3xl mx-auto">
            {c.faq.map((item, i) => (
              <details key={i} className="group bg-surface border border-surface-2 hover:border-wa/30 rounded-xl px-5 py-4 transition-colors">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <span className="text-white font-semibold text-sm sm:text-base">{item.q}</span>
                  <span className="text-wa text-xl leading-none shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-slate-300 text-sm leading-relaxed mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Related links */}
      {c.related && c.related.length > 0 && (
        <div className="mb-20 bg-surface border border-surface-2 rounded-2xl p-6 max-w-3xl mx-auto">
          <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
            {c.relatedTitle}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {c.related.map((link, i) => (
              <li key={i}>
                <a href={link.href} className="text-wa hover:text-wa/80 text-sm leading-relaxed underline underline-offset-2 decoration-wa/30 hover:decoration-wa/60">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="bg-wa/5 border border-wa/20 rounded-2xl p-10 text-center">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">{c.ctaBadge}</span>
        <h2 className="text-white font-extrabold text-2xl mb-2" style={{ fontFamily: "Onest, sans-serif" }}>{c.ctaTitle}</h2>
        <p className="text-slate-400 text-sm mb-6">{c.ctaSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={calLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            <Calendar size={16} /> {c.ctaPrimary}
          </a>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            <MessageCircle size={16} className="text-wa" /> {c.ctaSecondary}
          </a>
        </div>
      </div>
    </div>
  );
}
