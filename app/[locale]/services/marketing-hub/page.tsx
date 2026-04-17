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
      { label: "💎 VIP", desc: "Panier moyen > 200€ + 3 achats ou plus" },
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
    ctaPrimary: "Prendre RDV — Audit gratuit",
    ctaSecondary: "Écrire sur WhatsApp",
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
      { label: "💎 VIP", desc: "Average basket > €200 + 3 or more purchases" },
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
      { label: "💎 VIP", desc: "Durchschnittlicher Warenkorb > 200€ + 3 oder mehr Käufe" },
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
      { label: "💎 VIP", desc: "Gemiddeld winkelwagenbedrag > €200 + 3 of meer aankopen" },
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
  return {
    title: m.title,
    description: m.description,
    alternates: {
      languages: { fr: "/fr/services/marketing-hub", en: "/en/services/marketing-hub", de: "/de/services/marketing-hub", nl: "/nl/services/marketing-hub" },
      canonical: `https://agentic-whatsup.com/${locale}/services/marketing-hub`,
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

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
