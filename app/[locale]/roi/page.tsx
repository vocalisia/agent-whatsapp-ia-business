import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, DollarSign, Target, Euro, Zap, BarChart3 } from "lucide-react";
import StrategyLanding, { type LandingCopy } from "@/components/landing/StrategyLanding";

type Locale = "fr" | "en" | "de" | "nl";

const META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Calculateur ROI Agent IA WhatsApp | Rentabilité chiffrée par PME",
    description:
      "Calculez précisément combien vous rapporte un agent IA WhatsApp sur votre business. Gains moyens : 47K€/an. Audit gratuit + projection ROI 90 jours.",
  },
  en: {
    title: "WhatsApp AI Agent ROI Calculator | Quantified SMB returns",
    description:
      "Precisely calculate how much a WhatsApp AI agent can return on your business. Avg gains: €47K/year. Free audit + 90-day ROI projection.",
  },
  de: {
    title: "WhatsApp KI-Agent ROI-Rechner | Berechneter KMU-Gewinn",
    description:
      "Berechnen Sie präzise, was ein WhatsApp-KI-Agent für Ihr Business bringt. Durchschnitt: 47.000€/Jahr. Kostenloses Audit + 90-Tage-ROI-Prognose.",
  },
  nl: {
    title: "WhatsApp AI-agent ROI-calculator | Becijferde KMO-winst",
    description:
      "Bereken precies hoeveel een WhatsApp AI-agent oplevert op uw business. Gemiddeld: €47K/jaar. Gratis audit + 90-dagen ROI-projectie.",
  },
};

const COPY: Record<Locale, LandingCopy> = {
  fr: {
    hero: {
      badge: "Pour PME perdant ≥ 10 leads/semaine",
      title1: "Récupérez 47 000€/an",
      title2: "que votre équipe laisse filer sur WhatsApp",
      subtitle:
        "Chaque message sans réponse = 127€ de CA perdu. Notre IA répond à 100%, 24/7, qualifie vos leads et remplit votre agenda — pendant que vos concurrents dorment.",
      trust: ["ROI chiffré en 30 min", "Garantie 90 jours", "Déployé en 14 jours"],
    },
    painTitle: "Chiffrez ce que vous perdez vraiment chaque semaine",
    painItems: [
      {
        title: "127€ par message ignoré",
        desc: "Panier moyen × taux conversion moyen. Vos stats internes confirmeront. On le chiffre sur ton business.",
      },
      {
        title: "23h/semaine gaspillées",
        desc: "Votre équipe passe 60% du temps à qualifier des leads qui ne closeront jamais. L'équivalent d'un salaire commercial brûlé chaque mois.",
      },
      {
        title: "38% des vocaux jamais traités",
        desc: "Les clients envoient des vocaux WhatsApp. Personne n'écoute. Deals perdus en silence.",
      },
    ],
    valueTitle: "Le calcul simple qui change tout",
    valueItems: [
      {
        title: "+127€ × 12 messages/jour",
        desc: "Reprend les leads que votre équipe ignore. 1 524€/jour récupérés = 45 720€/an. Conservateur.",
      },
      {
        title: "−23h/semaine équipe",
        desc: "L'IA qualifie en BANT automatique. Votre équipe voit UNIQUEMENT les leads chauds, prêts à signer.",
      },
      {
        title: "Agenda rempli 24/7",
        desc: "Prospect boucle RDV en 20 sec. Zéro friction. Zéro email ping-pong. Conversion multipliée par 2.3x.",
      },
    ],
    bookingTitle: "Obtenez votre calcul ROI personnalisé (30 min, gratuit)",
    bookingSubtitle:
      "Audit de vos flux WhatsApp, identification des fuites de CA, projection chiffrée à 90 jours. Zéro argumentaire.",
    bookingLabel: "Calculer mon ROI",
    faqTitle: "Réponses aux questions qui reviennent",
    faq: [
      {
        q: "Le chiffre 47 000€/an, c'est réaliste ou du marketing ?",
        a: "Conservateur. Calcul basé sur 50 messages/jour × 47% non traités × 127€ panier moyen. Nos clients dépassent souvent 70K€ la 1ère année. Ton chiffre sera calculé live sur TON business.",
      },
      {
        q: "Comment ça se passe côté investissement ?",
        a: "Le tarif dépend de ton volume WhatsApp, intégrations CRM et options choisies. On construit un devis sur-mesure pendant ton RDV stratégique — gratuit, sans engagement. Tu repartiras avec une projection ROI chiffrée sur ton business.",
      },
      {
        q: "Compatible avec notre CRM actuel ?",
        a: "Oui. HubSpot, Pipedrive, Salesforce, Zoho, Monday, Sellsy. Webhook en 48h. Les leads arrivent directement dans ton pipeline.",
      },
      {
        q: "Combien de temps pour voir du cash ?",
        a: "Premiers RDV qualifiés dès J+14. ROI positif entre J+30 et J+60 selon volume. Dashboard temps réel pour suivre chaque euro.",
      },
    ],
    finalCtaTitle: "Chaque jour qui passe = 127€ × nombre de leads ignorés",
    finalCtaDesc:
      "La calculette ROI est live sur ton business dans 30 minutes. Zéro engagement, zéro commercial agressif. Juste des chiffres.",
    finalCtaBtn: "Réserver mon calcul ROI",
  },
  en: {
    hero: {
      badge: "For SMBs losing ≥ 10 leads/week",
      title1: "Recover €47,000/year",
      title2: "your team is losing on WhatsApp",
      subtitle:
        "Every unanswered message = €127 in lost revenue. Our AI answers 100%, 24/7, qualifies leads and fills your calendar — while your competitors sleep.",
      trust: ["ROI quantified in 30 min", "90-day guarantee", "Live in 14 days"],
    },
    painTitle: "Let's quantify what you actually lose each week",
    painItems: [
      {
        title: "€127 per ignored message",
        desc: "Average basket × average conversion rate. Your internals will confirm. We calculate it on your actual business.",
      },
      {
        title: "23h/week wasted",
        desc: "Your team spends 60% of its time qualifying leads that will never close. The equivalent of a sales salary burned every month.",
      },
      {
        title: "38% of voice notes never handled",
        desc: "Customers send voice messages. No one listens. Deals lost in silence.",
      },
    ],
    valueTitle: "The simple math that changes everything",
    valueItems: [
      {
        title: "+€127 × 12 msg/day",
        desc: "Recovers leads your team ignores. €1,524/day recaptured = €45,720/year. Conservative estimate.",
      },
      {
        title: "−23h/week team load",
        desc: "AI qualifies BANT automatically. Your team only sees hot, sales-ready leads.",
      },
      {
        title: "24/7 full calendar",
        desc: "Prospect books in 20s. Zero friction. Zero email ping-pong. Conversion up 2.3x.",
      },
    ],
    bookingTitle: "Get your personalized ROI breakdown (30 min, free)",
    bookingSubtitle:
      "Audit of your WhatsApp flow, revenue leak identification, 90-day projection. Zero sales pitch.",
    bookingLabel: "Calculate my ROI",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "€47K/year — real or marketing hype?",
        a: "Conservative. Based on 50 msg/day × 47% ignored × €127 avg basket. Our clients often exceed €70K in year one. Your number will be live-calculated on YOUR business.",
      },
      {
        q: "What about pricing?",
        a: "Pricing depends on your WhatsApp volume, CRM integrations and selected options. We build a custom quote during your free, no-commitment strategy call. You leave with a quantified ROI projection for your business.",
      },
      {
        q: "Works with our current CRM?",
        a: "Yes. HubSpot, Pipedrive, Salesforce, Zoho, Monday. Webhook in 48h. Leads drop straight into your pipeline.",
      },
      {
        q: "Time to see cash?",
        a: "First qualified bookings from day 14. Positive ROI between day 30 and 60 based on volume. Real-time dashboard tracks every euro.",
      },
    ],
    finalCtaTitle: "Every day that passes = €127 × ignored leads",
    finalCtaDesc:
      "Live ROI calculator on your business in 30 minutes. Zero commitment, zero pushy sales. Just numbers.",
    finalCtaBtn: "Book my ROI calculation",
  },
  de: {
    hero: {
      badge: "Für KMU mit ≥ 10 verlorenen Leads/Woche",
      title1: "Holen Sie 47.000€/Jahr zurück",
      title2: "die Ihr Team auf WhatsApp verliert",
      subtitle:
        "Jede unbeantwortete Nachricht = 127€ verlorener Umsatz. Unsere KI antwortet zu 100%, 24/7, qualifiziert Leads und füllt Ihren Kalender — während Ihre Konkurrenten schlafen.",
      trust: ["ROI in 30 Min. berechnet", "90-Tage-Garantie", "Live in 14 Tagen"],
    },
    painTitle: "Berechnen Sie, was Sie jede Woche wirklich verlieren",
    painItems: [
      {
        title: "127€ pro ignorierter Nachricht",
        desc: "Durchschnittswarenkorb × Conversion-Rate. Ihre internen Daten bestätigen es. Wir berechnen es live auf Ihr Business.",
      },
      {
        title: "23 Std./Woche verschwendet",
        desc: "Ihr Team qualifiziert zu 60% Leads, die niemals schließen. Entspricht einem Vertriebsgehalt, das jeden Monat verbrannt wird.",
      },
      {
        title: "38% der Sprachnachrichten unbeantwortet",
        desc: "Kunden senden Sprachnachrichten. Niemand hört zu. Deals lautlos verloren.",
      },
    ],
    valueTitle: "Die einfache Rechnung, die alles ändert",
    valueItems: [
      {
        title: "+127€ × 12 Nachrichten/Tag",
        desc: "Holt Leads zurück, die Ihr Team ignoriert. 1.524€/Tag = 45.720€/Jahr. Konservativ.",
      },
      {
        title: "−23 Std./Woche Teamlast",
        desc: "KI qualifiziert automatisch nach BANT. Ihr Team sieht nur heiße, abschlussreife Leads.",
      },
      {
        title: "24/7 voller Kalender",
        desc: "Interessent bucht in 20 Sek. Null Reibung. Konversion × 2,3.",
      },
    ],
    bookingTitle: "Holen Sie Ihre personalisierte ROI-Berechnung (30 Min., kostenlos)",
    bookingSubtitle:
      "Audit Ihres WhatsApp-Flows, Identifikation von Umsatzlöchern, 90-Tage-Prognose. Null Verkaufsgespräch.",
    bookingLabel: "Meinen ROI berechnen",
    faqTitle: "Häufige Fragen",
    faq: [
      {
        q: "Die 47.000€/Jahr — realistisch oder Marketing?",
        a: "Konservativ. Basis: 50 Nachrichten/Tag × 47% ignoriert × 127€ Warenkorb. Unsere Kunden überschreiten oft 70K€ im 1. Jahr. Ihre Zahl wird live auf IHR Business berechnet.",
      },
      {
        q: "Wie läuft es preislich ab?",
        a: "Der Preis hängt von Ihrem WhatsApp-Volumen, CRM-Integrationen und gewählten Optionen ab. Wir erstellen ein individuelles Angebot während Ihres kostenlosen, unverbindlichen Strategiegesprächs. Sie erhalten eine konkrete ROI-Prognose für Ihr Business.",
      },
      {
        q: "Kompatibel mit unserem CRM?",
        a: "Ja. HubSpot, Pipedrive, Salesforce, Zoho, Monday. Webhook in 48h. Leads landen direkt in Ihrer Pipeline.",
      },
      {
        q: "Wie lange bis zum Cash?",
        a: "Erste qualifizierte Termine ab Tag 14. Positiver ROI zwischen Tag 30 und 60. Echtzeit-Dashboard.",
      },
    ],
    finalCtaTitle: "Jeder Tag = 127€ × ignorierte Leads",
    finalCtaDesc:
      "Live-ROI-Kalkulation auf Ihr Business in 30 Min. Null Verpflichtung. Nur Zahlen.",
    finalCtaBtn: "ROI-Berechnung buchen",
  },
  nl: {
    hero: {
      badge: "Voor KMO's met ≥ 10 verloren leads/week",
      title1: "Recupereer €47.000/jaar",
      title2: "die uw team verliest op WhatsApp",
      subtitle:
        "Elk onbeantwoord bericht = €127 verloren omzet. Onze AI antwoordt 100%, 24/7, kwalificeert leads en vult uw agenda — terwijl uw concurrenten slapen.",
      trust: ["ROI becijferd in 30 min", "90-dagen garantie", "Live in 14 dagen"],
    },
    painTitle: "Becijfer wat u echt elke week verliest",
    painItems: [
      {
        title: "€127 per genegeerd bericht",
        desc: "Gemiddelde mand × conversieratio. Uw data bevestigt. We becijferen het op uw echte business.",
      },
      {
        title: "23u/week verspild",
        desc: "Uw team besteedt 60% van de tijd aan leads die nooit sluiten. Gelijk aan een verkoopsalaris dat elke maand verbrandt.",
      },
      {
        title: "38% spraakberichten nooit behandeld",
        desc: "Klanten sturen spraakberichten. Niemand luistert. Deals verloren in stilte.",
      },
    ],
    valueTitle: "De simpele berekening die alles verandert",
    valueItems: [
      {
        title: "+€127 × 12 berichten/dag",
        desc: "Haalt genegeerde leads terug. €1.524/dag = €45.720/jaar. Conservatief.",
      },
      {
        title: "−23u/week teamlast",
        desc: "AI kwalificeert BANT automatisch. Uw team ziet enkel hete, sales-klare leads.",
      },
      {
        title: "24/7 volle agenda",
        desc: "Prospect boekt in 20s. Nul frictie. Conversie × 2,3.",
      },
    ],
    bookingTitle: "Krijg uw gepersonaliseerde ROI-berekening (30 min, gratis)",
    bookingSubtitle:
      "Audit van uw WhatsApp-flow, identificatie omzetlekken, 90-dagen projectie. Nul verkooppraatje.",
    bookingLabel: "Mijn ROI berekenen",
    faqTitle: "Veelgestelde vragen",
    faq: [
      {
        q: "€47K/jaar — realistisch of marketing?",
        a: "Conservatief. Basis: 50 berichten/dag × 47% genegeerd × €127 mand. Onze klanten overschrijden vaak €70K in jaar 1. Uw cijfer wordt live berekend op UW business.",
      },
      {
        q: "Hoe zit het met de prijs?",
        a: "De prijs hangt af van uw WhatsApp-volume, CRM-integraties en gekozen opties. We maken een persoonlijk voorstel tijdens uw gratis, vrijblijvende strategiegesprek. U krijgt een concrete ROI-projectie voor uw business.",
      },
      {
        q: "Compatibel met ons CRM?",
        a: "Ja. HubSpot, Pipedrive, Salesforce, Zoho, Monday. Webhook in 48u.",
      },
      {
        q: "Hoelang tot cash?",
        a: "Eerste gekwalificeerde boekingen vanaf dag 14. Positieve ROI tussen dag 30 en 60. Real-time dashboard.",
      },
    ],
    finalCtaTitle: "Elke dag = €127 × genegeerde leads",
    finalCtaDesc: "Live ROI-calculator op uw business in 30 min. Nul engagement. Enkel cijfers.",
    finalCtaBtn: "ROI-berekening boeken",
  },
};

function pick<T extends Record<Locale, unknown>>(map: T, locale: string): T[Locale] {
  return map[(locale as Locale) in map ? (locale as Locale) : "fr"];
}

function buildFaqJsonLd(locale: string) {
  const copy = pick(COPY, locale);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": copy.faq.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };
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
      canonical: `/${locale}/roi`,
      languages: {
        fr: "/fr/roi",
        en: "/en/roi",
        de: "/de/roi",
        nl: "/nl/roi",
      },
    },
    openGraph: { title: meta.title, description: meta.description, type: "website" },
  };
}

export default async function RoiLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = pick(COPY, locale);
  const meta = pick(META, locale);
  const faqJsonLd = buildFaqJsonLd(locale);
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/roi`;

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <StrategyLanding
        copy={copy}
        painIcons={[DollarSign, Target, Euro] as const}
        valueIcons={[TrendingUp, Zap, BarChart3] as const}
        accentTint="amber"
      />
      <div className="text-center py-8 px-4">
        <p className="text-slate-400 text-sm">
          {locale === "fr"
            ? "Maximisez ce ROI avec notre"
            : "Maximize this ROI with our"}
          {" "}
          <Link
            href={`/${locale}/services/agent-ia-whatsapp`}
            className="text-wa hover:underline font-medium"
          >
            {locale === "fr"
              ? "agent IA WhatsApp Business"
              : "AI agent for WhatsApp Business"}
          </Link>.
        </p>
      </div>
    </>
  );
}
