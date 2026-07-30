import type { Metadata } from "next";
import { Calendar, Mic, Users, Eye, TrendingUp, Zap } from "lucide-react";
import StrategyLanding, { type LandingCopy } from "@/components/landing/StrategyLanding";
import { buildAlternates } from "@/lib/seo";

type Locale = "fr" | "en" | "de" | "nl";

const META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Session stratégique gratuite | Agent IA WhatsApp — AgenticWhatsup",
    description:
      "Réservez 30 minutes avec notre expert IA. Découvrez comment automatiser vos conversations WhatsApp et libérer 15h/semaine à vos équipes. PME ≥10 salariés.",
  },
  en: {
    title: "Free Strategy Call | WhatsApp AI Agent — AgenticWhatsup",
    description:
      "Book 30 minutes with our AI expert. Learn how to automate your WhatsApp conversations and free up 15h/week for your team. SMBs ≥10 employees only.",
  },
  de: {
    title: "Kostenloses Strategiegespräch | WhatsApp KI-Agent — AgenticWhatsup",
    description:
      "Buchen Sie 30 Minuten mit unserem KI-Experten. Automatisieren Sie Ihre WhatsApp-Gespräche und sparen Sie 15h/Woche. Nur KMU ≥10 Mitarbeiter.",
  },
  nl: {
    title: "Gratis strategiegesprek | WhatsApp AI-agent — AgenticWhatsup",
    description:
      "Boek 30 minuten met onze AI-expert. Ontdek hoe u uw WhatsApp-gesprekken automatiseert en 15u/week vrijmaakt. Alleen KMO's ≥10 medewerkers.",
  },
};

const COPY: Record<Locale, LandingCopy> = {
  fr: {
    hero: {
      badge: "Réservé aux PME ≥ 10 salariés",
      title1: "Libérez 15h/semaine",
      title2: "à vos commerciaux",
      subtitle:
        "Notre agent IA WhatsApp répond aux vocaux, analyse les photos, qualifie vos leads et prend vos RDV. 24h/24. Sans humain.",
      trust: ["Déployé en 14 jours", "RGPD compliant", "ROI garanti 90 jours"],
    },
    painTitle: "Vos équipes perdent du temps là où une IA ferait mieux",
    painItems: [
      {
        title: "Vocaux WhatsApp non traités",
        desc: "47% des clients envoient des vocaux. Personne n'a le temps de les écouter. Résultat : deals perdus.",
      },
      {
        title: "Leads non qualifiés qui saturent l'équipe",
        desc: "Vos commerciaux passent 60% de leur temps sur des leads qui ne closeront jamais.",
      },
      {
        title: "Prise de RDV manuelle, chaotique",
        desc: "Va-et-vient d'emails pour fixer un créneau. 30% des prospects abandonnent.",
      },
    ],
    valueTitle: "Ce que notre IA fait à votre place",
    valueItems: [
      {
        title: "Transcription vocaux + analyse photos",
        desc: "Seule IA WhatsApp capable de comprendre vocaux ET de traiter documents/images envoyés.",
      },
      {
        title: "Qualification BANT automatique",
        desc: "L'IA identifie budget, besoin, timing, décideur. Transfère à l'humain uniquement si lead chaud.",
      },
      {
        title: "Prise de RDV directe dans agenda",
        desc: "Calendly / Google Cal / Outlook synchronisés. Le prospect réserve en 20 secondes.",
      },
    ],
    bookingTitle: "Réservez votre session stratégique (30 min, gratuit)",
    bookingSubtitle:
      "Vous repartez avec un plan d'automatisation personnalisé, un ROI chiffré, et une démo live sur votre cas.",
    bookingLabel: "Choisissez votre créneau ci-dessous",
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "Comment ça se passe côté investissement ?",
        a: "Le tarif dépend de ton volume WhatsApp, intégrations CRM et options. On construit un devis personnalisé pendant ta session stratégique — gratuit, sans engagement. Tu repars avec un plan d'action chiffré.",
      },
      {
        q: "Est-ce compatible avec notre CRM actuel ?",
        a: "Oui. HubSpot, Pipedrive, Salesforce, Zoho, Monday. Intégration via webhook en 48h.",
      },
      {
        q: "Que se passe-t-il pendant les 30 minutes ?",
        a: "Audit de votre flow actuel, identification des goulots d'étranglement, simulation ROI, démo adaptée à votre secteur. Zéro argumentaire commercial agressif.",
      },
      {
        q: "Mes données sont-elles protégées ?",
        a: "Hébergement UE, conformité RGPD, chiffrement bout-en-bout, DPA signé. Aucun transfert hors UE.",
      },
    ],
    finalCtaTitle: "Dernière étape avant de reprendre le contrôle",
    finalCtaDesc:
      "Chaque jour sans automatisation = clients perdus, équipes saturées, revenus laissés sur la table.",
    finalCtaBtn: "Réserver ma session",
  },
  en: {
    hero: {
      badge: "For SMBs with ≥ 10 employees",
      title1: "Free up 15h/week",
      title2: "for your sales team",
      subtitle:
        "Our WhatsApp AI agent answers voice messages, analyzes photos, qualifies leads and books meetings. 24/7. Zero humans.",
      trust: ["Deployed in 14 days", "GDPR compliant", "ROI guaranteed in 90 days"],
    },
    painTitle: "Your team is wasting time where AI does it better",
    painItems: [
      {
        title: "Voice notes never listened to",
        desc: "47% of customers send voice messages. No one has time to listen. Deals lost.",
      },
      {
        title: "Unqualified leads drowning your team",
        desc: "Your reps spend 60% of their time on leads that will never close.",
      },
      {
        title: "Manual, chaotic meeting booking",
        desc: "Email ping-pong to pick a slot. 30% of prospects drop off.",
      },
    ],
    valueTitle: "What our AI does instead of you",
    valueItems: [
      {
        title: "Voice transcription + photo analysis",
        desc: "Only WhatsApp AI able to understand voice notes AND process images/documents.",
      },
      {
        title: "Automatic BANT qualification",
        desc: "AI detects budget, need, timing, decision-maker. Hands off to human only for hot leads.",
      },
      {
        title: "Direct calendar booking",
        desc: "Syncs with Calendly / Google Cal / Outlook. Prospect books in 20 seconds.",
      },
    ],
    bookingTitle: "Book your strategy call (30 min, free)",
    bookingSubtitle:
      "Leave with a personalized automation plan, a concrete ROI estimate, and a live demo on your use case.",
    bookingLabel: "Pick a slot below",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "What about pricing?",
        a: "Pricing depends on your WhatsApp volume, CRM integrations and options. We build a custom quote during your strategy call — free, no commitment. You leave with a quantified action plan.",
      },
      {
        q: "Does it work with our current CRM?",
        a: "Yes. HubSpot, Pipedrive, Salesforce, Zoho, Monday. Webhook integration in 48h.",
      },
      {
        q: "What happens during those 30 minutes?",
        a: "Audit of your current flow, bottleneck identification, ROI simulation, demo adapted to your industry. Zero pushy sales.",
      },
      {
        q: "Is my data safe?",
        a: "EU hosting, GDPR compliant, end-to-end encryption, signed DPA. No transfer outside EU.",
      },
    ],
    finalCtaTitle: "One last step to take back control",
    finalCtaDesc:
      "Every day without automation = lost customers, overloaded teams, revenue left on the table.",
    finalCtaBtn: "Book my session",
  },
  de: {
    hero: {
      badge: "Für KMU ab 10 Mitarbeitern",
      title1: "Sparen Sie 15 Std./Woche",
      title2: "für Ihr Vertriebsteam",
      subtitle:
        "Unser WhatsApp KI-Agent versteht Sprachnachrichten, analysiert Fotos, qualifiziert Leads und bucht Termine. 24/7. Ohne Menschen.",
      trust: ["In 14 Tagen einsatzbereit", "DSGVO-konform", "ROI garantiert in 90 Tagen"],
    },
    painTitle: "Ihr Team verschwendet Zeit, wo KI es besser macht",
    painItems: [
      {
        title: "Sprachnachrichten werden ignoriert",
        desc: "47% der Kunden senden Sprachnachrichten. Niemand hat Zeit zuzuhören. Deals verloren.",
      },
      {
        title: "Unqualifizierte Leads überfluten das Team",
        desc: "Ihre Mitarbeiter verbringen 60% ihrer Zeit mit Leads, die nie schließen werden.",
      },
      {
        title: "Manuelle, chaotische Terminbuchung",
        desc: "E-Mail-Pingpong für einen Termin. 30% der Interessenten springen ab.",
      },
    ],
    valueTitle: "Was unsere KI für Sie übernimmt",
    valueItems: [
      {
        title: "Transkription Sprachnachrichten + Bildanalyse",
        desc: "Einzige WhatsApp-KI, die Sprachnachrichten UND Bilder/Dokumente versteht.",
      },
      {
        title: "Automatische BANT-Qualifizierung",
        desc: "KI erkennt Budget, Bedarf, Timing, Entscheider. Übergibt nur heiße Leads an Menschen.",
      },
      {
        title: "Direkte Terminbuchung im Kalender",
        desc: "Calendly / Google Cal / Outlook synchronisiert. Interessent bucht in 20 Sekunden.",
      },
    ],
    bookingTitle: "Buchen Sie Ihr Strategiegespräch (30 Min., kostenlos)",
    bookingSubtitle:
      "Sie erhalten einen personalisierten Automatisierungsplan, eine konkrete ROI-Schätzung und eine Live-Demo.",
    bookingLabel: "Wählen Sie unten einen Termin",
    faqTitle: "Häufig gestellte Fragen",
    faq: [
      {
        q: "Wie läuft es preislich ab?",
        a: "Der Preis hängt von Ihrem WhatsApp-Volumen, CRM-Integrationen und Optionen ab. Wir erstellen ein individuelles Angebot während Ihres Strategiegesprächs — kostenlos und unverbindlich. Sie erhalten einen konkreten Aktionsplan.",
      },
      {
        q: "Funktioniert es mit unserem aktuellen CRM?",
        a: "Ja. HubSpot, Pipedrive, Salesforce, Zoho, Monday. Webhook-Integration in 48h.",
      },
      {
        q: "Was passiert in diesen 30 Minuten?",
        a: "Audit Ihres aktuellen Flows, Engpass-Identifikation, ROI-Simulation, branchenspezifische Demo. Kein aggressiver Verkauf.",
      },
      {
        q: "Sind meine Daten sicher?",
        a: "EU-Hosting, DSGVO-konform, Ende-zu-Ende-Verschlüsselung, signiertes DPA. Keine Übertragung außerhalb der EU.",
      },
    ],
    finalCtaTitle: "Letzter Schritt, um die Kontrolle zurückzuerlangen",
    finalCtaDesc:
      "Jeder Tag ohne Automatisierung = verlorene Kunden, überlastete Teams, liegengelassene Umsätze.",
    finalCtaBtn: "Meinen Termin buchen",
  },
  nl: {
    hero: {
      badge: "Voor KMO's vanaf 10 medewerkers",
      title1: "Maak 15u/week vrij",
      title2: "voor uw salesteam",
      subtitle:
        "Onze WhatsApp AI-agent begrijpt spraakberichten, analyseert foto's, kwalificeert leads en boekt afspraken. 24/7. Zonder mensen.",
      trust: ["Live in 14 dagen", "AVG-conform", "ROI gegarandeerd in 90 dagen"],
    },
    painTitle: "Uw team verspilt tijd waar AI het beter doet",
    painItems: [
      {
        title: "Spraakberichten nooit beluisterd",
        desc: "47% van de klanten stuurt spraakberichten. Niemand heeft tijd om te luisteren. Deals verloren.",
      },
      {
        title: "Niet-gekwalificeerde leads verzuipen uw team",
        desc: "Uw verkopers besteden 60% van hun tijd aan leads die nooit zullen sluiten.",
      },
      {
        title: "Handmatige, chaotische afspraakplanning",
        desc: "E-mail pingpong om een slot te kiezen. 30% van de prospects haakt af.",
      },
    ],
    valueTitle: "Wat onze AI in uw plaats doet",
    valueItems: [
      {
        title: "Transcriptie spraakberichten + fotoanalyse",
        desc: "Enige WhatsApp AI die spraakberichten EN afbeeldingen/documenten verwerkt.",
      },
      {
        title: "Automatische BANT-kwalificatie",
        desc: "AI detecteert budget, behoefte, timing, beslisser. Geeft alleen hete leads door aan mens.",
      },
      {
        title: "Directe agenda-boeking",
        desc: "Calendly / Google Cal / Outlook gesynchroniseerd. Prospect boekt in 20 seconden.",
      },
    ],
    bookingTitle: "Boek uw strategiegesprek (30 min, gratis)",
    bookingSubtitle:
      "U vertrekt met een gepersonaliseerd automatiseringsplan, een concrete ROI-schatting en een live demo.",
    bookingLabel: "Kies hieronder een slot",
    faqTitle: "Veelgestelde vragen",
    faq: [
      {
        q: "Hoe zit het met de prijs?",
        a: "De prijs hangt af van uw WhatsApp-volume, CRM-integraties en opties. We maken een persoonlijk voorstel tijdens uw strategiegesprek — gratis, vrijblijvend. U krijgt een concreet actieplan.",
      },
      {
        q: "Werkt het met onze huidige CRM?",
        a: "Ja. HubSpot, Pipedrive, Salesforce, Zoho, Monday. Webhook-integratie in 48u.",
      },
      {
        q: "Wat gebeurt er tijdens die 30 minuten?",
        a: "Audit van uw huidige flow, knelpuntidentificatie, ROI-simulatie, sectorgerichte demo. Nul opdringerige sales.",
      },
      {
        q: "Zijn mijn gegevens veilig?",
        a: "EU-hosting, AVG-conform, end-to-end versleuteling, ondertekend DPA. Geen overdracht buiten EU.",
      },
    ],
    finalCtaTitle: "Laatste stap om de controle terug te nemen",
    finalCtaDesc:
      "Elke dag zonder automatisering = verloren klanten, overbelaste teams, omzet die op tafel blijft liggen.",
    finalCtaBtn: "Mijn sessie boeken",
  },
};

function resolveLocale(locale: string): Locale {
  return (["fr", "en", "de", "nl"] as const).includes(locale as Locale)
    ? (locale as Locale)
    : "fr";
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
  const key = resolveLocale(locale);
  return {
    title: META[key].title,
    description: META[key].description,
    robots: { index: false, follow: false },
    alternates: buildAlternates(locale, "/strategy-call"),
    openGraph: {
      title: META[key].title,
      description: META[key].description,
      type: "website",
    },
  };
}

const PAIN_ICONS = [Mic, Users, Calendar] as const;
const VALUE_ICONS = [Eye, TrendingUp, Zap] as const;

export default async function StrategyCallPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const key = resolveLocale(locale);
  return (
    <StrategyLanding
      copy={COPY[key]}
      painIcons={PAIN_ICONS}
      valueIcons={VALUE_ICONS}
      accentTint="wa"
    />
  );
}
