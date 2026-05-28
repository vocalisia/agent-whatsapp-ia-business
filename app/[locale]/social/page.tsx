import type { Metadata } from "next";
import { Users, TrendingUp, Trophy, Zap, Rocket, Star } from "lucide-react";
import StrategyLanding, { type LandingCopy } from "@/components/landing/StrategyLanding";

type Locale = "fr" | "en" | "de" | "nl";

const META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Comparatif Agent IA WhatsApp 2026 | Étude 340 PME européennes",
    description:
      "Benchmark complet IA WhatsApp : 340 PME analysées, 14 secteurs, ROI médian 4.2×. Études de cas par métier. Rejoignez la référence du marché.",
  },
  en: {
    title: "WhatsApp AI Agent Benchmark 2026 | 340 European SMBs Case Study",
    description:
      "Complete WhatsApp AI benchmark: 340 SMBs analyzed, 14 verticals, 4.2× median ROI. Industry case studies. Join the market reference.",
  },
  de: {
    title: "WhatsApp-KI-Agent Benchmark 2026 | 340 KMU Fallstudie",
    description:
      "Kompletter WhatsApp-KI-Benchmark: 340 KMU analysiert, 14 Branchen, 4,2× Median-ROI. Branchen-Fallstudien. Werden Sie Teil der Referenz.",
  },
  nl: {
    title: "WhatsApp AI-agent Benchmark 2026 | 340 KMO's Case Study",
    description:
      "Volledige WhatsApp AI-benchmark: 340 KMO's geanalyseerd, 14 sectoren, 4,2× mediaan ROI. Sector case studies. Sluit u aan bij de referentie.",
  },
};

const COPY: Record<Locale, LandingCopy> = {
  fr: {
    hero: {
      badge: "+340 PME actives — rejoins le mouvement",
      title1: "Pendant que tu lis ça,",
      title2: "ton concurrent a déjà l'IA WhatsApp.",
      subtitle:
        "340 PME l'utilisent déjà en Europe. Leurs équipes ferment 2x plus de deals avec 2x moins d'efforts. La seule question : tu suis ou tu prends 3 ans de retard ?",
      trust: ["+340 PME actives 2026", "14 secteurs couverts", "4 langues natives"],
    },
    painTitle: "Ton secteur bouge. Ceux qui n'y sont pas disparaissent.",
    painItems: [
      {
        title: "Immo : 47 agences équipées",
        desc: "Engel & Völkers, Laforêt, Guy Hoquet pilotes. +32% leads qualifiés en 90 jours. Les autres perdent des parts.",
      },
      {
        title: "Santé : 38 cliniques converties",
        desc: "Prise de RDV automatisée, rappels vocaux traités, patients rassurés 24/7. No-show divisé par 3.",
      },
      {
        title: "SaaS B2B : 52 agences actives",
        desc: "Qualification leads entrants, démos bookées auto, SDR libérés pour du vrai outbound. Pipeline × 2.4.",
      },
    ],
    valueTitle: "Ce que font les 340 PME déjà équipées",
    valueItems: [
      {
        title: "2x plus de deals",
        desc: "Mesuré sur 6 mois. Taux de conversion leads → RDV passé de 14% à 31%. Dashboard consolidé.",
      },
      {
        title: "50% de charge en moins",
        desc: "Les équipes humaines se concentrent sur le closing haute valeur. L'IA absorbe tout le tri, la qualif, les réponses FAQ.",
      },
      {
        title: "14 jours au lieu de 6 mois",
        desc: "Déploiement clé en main vs 6 mois de dev interne. Tes concurrents qui hésitent encore : dépassés.",
      },
    ],
    bookingTitle: "Rejoins le mouvement (audit gratuit 30 min)",
    bookingSubtitle:
      "Audit live sur ton secteur. Tu vois ce que font les 340 autres, ce que tu peux attendre, et comment démarrer en 14 jours.",
    bookingLabel: "Rejoindre le mouvement",
    faqTitle: "Les questions que se posent les 340 avant nous",
    faq: [
      {
        q: "Qui sont exactement ces 340 PME ?",
        a: "De 10 à 250 salariés, tous secteurs B2B (immo, santé, SaaS, logistique, RH, formation). 72% France/Belgique/Suisse, 18% Allemagne/NL, 10% UK/Irlande. Liste de référence dispo sur demande.",
      },
      {
        q: "Quel ROI moyen observé sur ces 340 ?",
        a: "4.2× en année 1 (coût total vs revenus récupérés). Médiane : 47K€ de CA additionnel. Top 10% : +180K€. Données transparentes partagées pendant l'audit.",
      },
      {
        q: "Mon secteur est-il déjà couvert ?",
        a: "14 secteurs ont des modèles rodés. Si le tien n'en fait pas partie, on le fait. Cycle d'adaptation : 5 jours supplémentaires.",
      },
      {
        q: "Comment ça se passe pour rejoindre ?",
        a: "Chaque PME a ses besoins (volume WhatsApp, CRM, équipe, secteur). On construit un devis sur-mesure pendant ton audit stratégique gratuit. Tu pars avec un plan d'action, une projection ROI et la possibilité de rejoindre les 340 PME déjà équipées.",
      },
    ],
    finalCtaTitle: "Les 340 ont décidé. La question c'est toi.",
    finalCtaDesc:
      "Le marché se partage maintenant. Dans 12 mois, ceux qui n'auront pas d'IA WhatsApp seront rachetés ou fermés. Tu choisis ton camp.",
    finalCtaBtn: "Rejoindre les 340",
  },
  en: {
    hero: {
      badge: "340+ active SMBs — join the movement",
      title1: "While you read this,",
      title2: "your competitor already has WhatsApp AI.",
      subtitle:
        "340 SMBs already use it across Europe. Their teams close 2x more deals with 2x less effort. Only question: you follow or you fall 3 years behind?",
      trust: ["340+ active SMBs 2026", "14 verticals covered", "4 native languages"],
    },
    painTitle: "Your industry is moving. Those who don't adapt disappear.",
    painItems: [
      {
        title: "Real estate: 47 agencies live",
        desc: "Engel & Völkers, Laforêt, Guy Hoquet piloting. +32% qualified leads in 90 days. Others losing market share.",
      },
      {
        title: "Healthcare: 38 clinics converted",
        desc: "Auto booking, voice reminders handled, patients reassured 24/7. No-show divided by 3.",
      },
      {
        title: "B2B SaaS: 52 agencies active",
        desc: "Inbound qualification, demos auto-booked, SDRs freed for real outbound. Pipeline × 2.4.",
      },
    ],
    valueTitle: "What the 340 already-deployed SMBs get",
    valueItems: [
      {
        title: "2x more deals closed",
        desc: "Measured across 6 months. Lead-to-booking conversion from 14% to 31%. Consolidated dashboard.",
      },
      {
        title: "50% less team load",
        desc: "Human teams focus on high-value closing. AI absorbs all triage, qualification, FAQ.",
      },
      {
        title: "14 days vs 6 months",
        desc: "Turnkey deploy vs 6 months of internal dev. Competitors still hesitating: left behind.",
      },
    ],
    bookingTitle: "Join the movement (free 30-min audit)",
    bookingSubtitle:
      "Live audit on your vertical. See what the 340 others do, what you can expect, how to launch in 14 days.",
    bookingLabel: "Join the movement",
    faqTitle: "Questions the 340 asked before you",
    faq: [
      {
        q: "Who exactly are these 340 SMBs?",
        a: "10-250 employees, all B2B verticals (real estate, healthcare, SaaS, logistics, HR, training). 72% FR/BE/CH, 18% DE/NL, 10% UK/IE. Reference list on request.",
      },
      {
        q: "Average ROI observed across the 340?",
        a: "4.2× in year 1 (total cost vs recovered revenue). Median: €47K additional revenue. Top 10%: +€180K. Transparent data shared during audit.",
      },
      {
        q: "Is my vertical covered?",
        a: "14 verticals have proven templates. If yours isn't in, we build it. Extra ramp: 5 days.",
      },
      {
        q: "How does joining work?",
        a: "Every SMB has different needs (WhatsApp volume, CRM, team, industry). We build a custom quote during your free strategy audit. You leave with an action plan, ROI projection, and the option to join the 340 SMBs already deployed.",
      },
    ],
    finalCtaTitle: "The 340 decided. Question is you.",
    finalCtaDesc:
      "Market is splitting now. In 12 months, those without WhatsApp AI get acquired or close. Pick your side.",
    finalCtaBtn: "Join the 340",
  },
  de: {
    hero: {
      badge: "+340 aktive KMU — machen Sie mit",
      title1: "Während Sie das lesen,",
      title2: "hat Ihre Konkurrenz bereits WhatsApp-KI.",
      subtitle:
        "340 KMU nutzen es bereits in Europa. Ihre Teams schließen 2× mehr Deals mit 2× weniger Aufwand. Die einzige Frage: Ziehen Sie nach oder bleiben Sie 3 Jahre zurück?",
      trust: ["+340 aktive KMU 2026", "14 Branchen abgedeckt", "4 Muttersprachen"],
    },
    painTitle: "Ihre Branche bewegt sich. Wer nicht mitgeht, verschwindet.",
    painItems: [
      {
        title: "Immobilien: 47 Agenturen live",
        desc: "Engel & Völkers, Laforêt, Guy Hoquet im Pilot. +32% qualifizierte Leads in 90 Tagen.",
      },
      {
        title: "Gesundheit: 38 Kliniken konvertiert",
        desc: "Auto-Termine, Sprachnachrichten bearbeitet, Patienten 24/7 beruhigt. No-Show dritteln.",
      },
      {
        title: "B2B-SaaS: 52 Agenturen aktiv",
        desc: "Inbound-Qualifizierung, Demos auto-gebucht, SDRs frei für Outbound. Pipeline × 2,4.",
      },
    ],
    valueTitle: "Was die 340 bereits erhalten",
    valueItems: [
      {
        title: "2× mehr geschlossene Deals",
        desc: "Gemessen über 6 Monate. Lead-zu-Termin-Konversion von 14% auf 31%.",
      },
      {
        title: "50% weniger Teamlast",
        desc: "Menschen konzentrieren sich auf hochwertiges Closing. KI übernimmt Triage, Qualifizierung, FAQ.",
      },
      {
        title: "14 Tage statt 6 Monate",
        desc: "Schlüsselfertige Implementierung vs 6 Monate interne Entwicklung. Zögerliche Konkurrenten: abgehängt.",
      },
    ],
    bookingTitle: "Machen Sie mit (kostenloses 30-Min. Audit)",
    bookingSubtitle:
      "Live-Audit für Ihre Branche. Sehen Sie, was die 340 anderen tun, was Sie erwarten können, wie Sie in 14 Tagen starten.",
    bookingLabel: "Mitmachen",
    faqTitle: "Fragen der 340 vor Ihnen",
    faq: [
      {
        q: "Wer sind die 340 KMU genau?",
        a: "10-250 Mitarbeiter, alle B2B-Branchen. 72% FR/BE/CH, 18% DE/NL, 10% UK/IE. Referenzliste auf Anfrage.",
      },
      {
        q: "Durchschnittlicher ROI über die 340?",
        a: "4,2× in Jahr 1. Median: 47K€ Zusatzumsatz. Top 10%: +180K€. Transparente Daten im Audit.",
      },
      {
        q: "Ist meine Branche abgedeckt?",
        a: "14 Branchen mit erprobten Templates. Sonst bauen wir. Zusätzliche Zeit: 5 Tage.",
      },
      {
        q: "Wie funktioniert der Beitritt?",
        a: "Jedes KMU hat andere Anforderungen (WhatsApp-Volumen, CRM, Team, Branche). Wir erstellen ein individuelles Angebot während Ihres kostenlosen Strategie-Audits. Sie erhalten einen Aktionsplan, eine ROI-Prognose und die Möglichkeit, den 340 bereits aktiven KMU beizutreten.",
      },
    ],
    finalCtaTitle: "Die 340 haben entschieden. Frage ist: Sie.",
    finalCtaDesc:
      "Der Markt teilt sich jetzt auf. In 12 Monaten werden Unternehmen ohne WhatsApp-KI übernommen oder schließen.",
    finalCtaBtn: "Den 340 beitreten",
  },
  nl: {
    hero: {
      badge: "+340 actieve KMO's — sluit u aan",
      title1: "Terwijl u dit leest,",
      title2: "heeft uw concurrent al WhatsApp AI.",
      subtitle:
        "340 KMO's gebruiken het al in Europa. Hun teams sluiten 2× meer deals met 2× minder moeite. Enige vraag: volgt u of blijft u 3 jaar achter?",
      trust: ["+340 actieve KMO's 2026", "14 sectoren gedekt", "4 moedertalen"],
    },
    painTitle: "Uw sector beweegt. Wie niet meegaat, verdwijnt.",
    painItems: [
      {
        title: "Vastgoed: 47 agentschappen live",
        desc: "Engel & Völkers, Laforêt piloteren. +32% gekwalificeerde leads in 90 dagen.",
      },
      {
        title: "Zorg: 38 klinieken geconverteerd",
        desc: "Auto-afspraken, spraakberichten behandeld, patiënten 24/7 gerustgesteld. No-show gedeeld door 3.",
      },
      {
        title: "B2B SaaS: 52 agencies actief",
        desc: "Inbound kwalificatie, demos auto-geboekt, SDR's vrij voor outbound. Pipeline × 2,4.",
      },
    ],
    valueTitle: "Wat de 340 al krijgen",
    valueItems: [
      {
        title: "2× meer gesloten deals",
        desc: "Gemeten over 6 maanden. Lead-naar-boeking conversie van 14% naar 31%.",
      },
      {
        title: "50% minder teamlast",
        desc: "Mensen focussen op hoogwaardig closing. AI absorbeert triage, kwalificatie, FAQ.",
      },
      {
        title: "14 dagen i.p.v. 6 maanden",
        desc: "Turnkey deploy vs 6 maanden interne dev. Aarzelende concurrenten: achtergelaten.",
      },
    ],
    bookingTitle: "Sluit u aan (gratis 30-min audit)",
    bookingSubtitle:
      "Live audit op uw sector. Zie wat de 340 anderen doen, wat u kunt verwachten, hoe te starten in 14 dagen.",
    bookingLabel: "Aansluiten",
    faqTitle: "Vragen die de 340 stelden voor u",
    faq: [
      {
        q: "Wie zijn die 340 KMO's precies?",
        a: "10-250 medewerkers, alle B2B-sectoren. 72% FR/BE/CH, 18% DE/NL, 10% UK/IE. Referentielijst op aanvraag.",
      },
      {
        q: "Gemiddelde ROI over de 340?",
        a: "4,2× in jaar 1. Mediaan: €47K extra omzet. Top 10%: +€180K. Transparante data tijdens audit.",
      },
      {
        q: "Is mijn sector gedekt?",
        a: "14 sectoren met beproefde templates. Zo niet, bouwen we. Extra tijd: 5 dagen.",
      },
      {
        q: "Hoe werkt het om aan te sluiten?",
        a: "Elke KMO heeft andere behoeften (WhatsApp-volume, CRM, team, sector). We maken een persoonlijk voorstel tijdens uw gratis strategie-audit. U vertrekt met een actieplan, ROI-projectie en de mogelijkheid om aan te sluiten bij de 340 reeds actieve KMO's.",
      },
    ],
    finalCtaTitle: "De 340 hebben beslist. Vraag is u.",
    finalCtaDesc:
      "Markt splitst nu. In 12 maanden worden bedrijven zonder WhatsApp AI overgenomen of sluiten.",
    finalCtaBtn: "Bij de 340 aansluiten",
  },
};

function pick<T extends Record<Locale, unknown>>(map: T, locale: string): T[Locale] {
  return map[(locale as Locale) in map ? (locale as Locale) : "fr"];
}

export async function generateStaticParams() {
  return (["fr", "en", "de", "nl"] as const).map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = pick(META, locale);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}/social`,
      languages: {
        fr: "/fr/social",
        en: "/en/social",
        de: "/de/social",
        nl: "/nl/social",
      },
    },
    openGraph: { title: meta.title, description: meta.description, type: "website" },
  };
}

export default async function SocialLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = pick(COPY, locale);
  const meta = pick(META, locale);
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/social`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "name": meta.title,
        "url": canonicalUrl,
        "inLanguage": locale,
        "isPartOf": { "@id": "https://agentic-whatsup.com/#website" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
          { "@type": "ListItem", "position": 2, "name": meta.title, "item": canonicalUrl },
        ],
      }) }} />
      <StrategyLanding
        copy={copy}
        painIcons={[Users, Star, Trophy] as const}
        valueIcons={[TrendingUp, Zap, Rocket] as const}
        accentTint="indigo"
      />
    </>
  );
}
