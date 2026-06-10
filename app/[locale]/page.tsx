import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/home/Hero";

// Below-fold sections: keep SSR for SEO/HTML, but split each into its own JS chunk
// so they don't block the critical Hero rendering path. This trims ~895KB unused JS
// from the initial bundle that PageSpeed flagged.
const StatsSection = dynamic(() => import("@/components/home/StatsSection"));
const BookingEmbedSection = dynamic(() => import("@/components/home/BookingEmbedSection"));
const ProblemSection = dynamic(() => import("@/components/home/ProblemSection"));
const FeaturesGrid = dynamic(() => import("@/components/home/FeaturesGrid"));
const HowItWorks = dynamic(() => import("@/components/home/HowItWorks"));
const FinalCTA = dynamic(() => import("@/components/home/FinalCTA"));

const pageMeta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Agent IA WhatsApp Business | AgenticWhatsup",
    description: "Agent IA WhatsApp Business : qualifiez vos leads, prenez des RDV et assurez un service client 24/7 via WhatsApp. Vision IA, transcription vocale, déployé en 2-3 semaines.",
  },
  en: {
    title: "AI Agent for WhatsApp Business | AgenticWhatsup",
    description: "AI agent for WhatsApp Business: qualify leads, book appointments, and deliver 24/7 customer service via WhatsApp. AI Vision, voice transcription, deployed in 2-3 weeks.",
  },
  de: {
    title: "WhatsApp KI-Agent | Automatisieren Kundennachrichten 24/7",
    description: "Der einzige WhatsApp KI-Agent, der Sprachnachrichten versteht und Fotos analysiert. Antworten automatisieren, Leads qualifizieren, Termine buchen — 24/7.",
  },
  nl: {
    title: "WhatsApp AI-agent | Automatiseer uw klantberichten 24/7",
    description: "De enige WhatsApp AI-agent die spraakberichten begrijpt en foto's van uw klanten analyseert. Automatiseer antwoorden, kwalificeer leads, boek afspraken.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = pageMeta[locale] ?? pageMeta.fr;
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://agentic-whatsup.com/${locale}`,
      languages: {
        fr: "https://agentic-whatsup.com/fr",
        en: "https://agentic-whatsup.com/en",
        de: "https://agentic-whatsup.com/de",
        nl: "https://agentic-whatsup.com/nl",
        "x-default": "https://agentic-whatsup.com/fr",
      },
    },
  };
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AgenticWhatsup",
  "url": "https://agentic-whatsup.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://agentic-whatsup.com/fr/blog?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@id": "https://agentic-whatsup.com/#organization",
  "@type": "Organization",
  "name": "AgenticWhatsup",
  "url": "https://agentic-whatsup.com",
  "email": "contact@agentic-whatsup.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://agentic-whatsup.com/icon.svg"
  },
  "description": "The only WhatsApp AI agent that understands voice messages and analyzes customer photos. Automate replies, qualify leads, book appointments 24/7.",
  "areaServed": ["FR", "BE", "CH", "LU", "GB", "DE", "NL"],
  "founder": {
    "@type": "Person",
    "@id": "https://agentic-whatsup.com/#founder",
    "name": "Richard Cohen",
    "sameAs": "https://www.linkedin.com/in/richard-cohen-vault369/"
  },
  "sameAs": [
    "https://www.linkedin.com/company/agentic-whatsup",
    "https://twitter.com/agenticwhatsup",
    "https://vocalis.pro",
    "https://seo-true.com",
    "https://trustly-ai.com",
    "https://master-seller.fr",
    "https://tesla-mag.ch"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@agentic-whatsup.com",
    "contactType": "customer support",
    "availableLanguage": ["French", "English", "German", "Dutch"]
  }
};

const softwareAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://agentic-whatsup.com/#app",
  "name": "Agentic WhatsApp",
  "url": "https://agentic-whatsup.com",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "CustomerServiceApplication",
  "operatingSystem": "Web",
  "description": "Agent IA pour WhatsApp Business — automatisation des réponses et qualification de leads",
  "inLanguage": ["fr", "en", "de", "nl"],
  "featureList": [
    "Voice message understanding",
    "Photo analysis",
    "Lead qualification",
    "Appointment booking",
    "24/7 automation",
    "Multilingual support (FR, EN, DE, NL)"
  ],
  "publisher": {
    "@id": "https://agentic-whatsup.com/#organization"
  }
};

const aggregateRatingJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "AgenticWhatsup",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  }
};

function buildBreadcrumb(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "AgenticWhatsup",
        "item": "https://agentic-whatsup.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": locale === "fr" ? "Accueil" : locale === "de" ? "Startseite" : locale === "nl" ? "Startpagina" : "Home",
        "item": `https://agentic-whatsup.com/${locale}`
      }
    ]
  };
}

function buildHomeFaq(locale: string) {
  const items = {
    fr: [
      {
        q: "Que fait un agent IA WhatsApp Business ?",
        a: "Il repond aux messages WhatsApp, qualifie les leads, prend des rendez-vous, comprend les vocaux, analyse les photos et transmet les cas complexes a votre equipe.",
      },
      {
        q: "AgenticWhatsup fonctionne-t-il avec mon CRM ?",
        a: "Oui. L'agent peut etre connecte a HubSpot, Salesforce, Pipedrive, Shopify, Google Calendar, Cal.com, Zapier, Make et d'autres outils via API ou webhook.",
      },
      {
        q: "Le deploiement est-il compatible RGPD ?",
        a: "Oui. Les projets sont concus avec hebergement UE, gestion des acces, conservation limitee des donnees et contrat de sous-traitance disponible.",
      },
    ],
    en: [
      {
        q: "What does a WhatsApp Business AI agent do?",
        a: "It answers WhatsApp messages, qualifies leads, books appointments, understands voice notes, analyzes photos and escalates complex cases to your team.",
      },
      {
        q: "Does AgenticWhatsup connect with my CRM?",
        a: "Yes. The agent can connect to HubSpot, Salesforce, Pipedrive, Shopify, Google Calendar, Cal.com, Zapier, Make and other tools through APIs or webhooks.",
      },
      {
        q: "Is deployment GDPR-compatible?",
        a: "Yes. Projects are designed with EU hosting, access control, limited data retention and a data processing agreement available.",
      },
    ],
    de: [
      {
        q: "Was macht ein WhatsApp Business KI-Agent?",
        a: "Er beantwortet WhatsApp-Nachrichten, qualifiziert Leads, bucht Termine, versteht Sprachnachrichten, analysiert Fotos und uebergibt komplexe Faelle an Ihr Team.",
      },
      {
        q: "Verbindet sich AgenticWhatsup mit meinem CRM?",
        a: "Ja. Der Agent kann ueber API oder Webhook mit HubSpot, Salesforce, Pipedrive, Shopify, Google Calendar, Cal.com, Zapier, Make und weiteren Tools verbunden werden.",
      },
      {
        q: "Ist die Bereitstellung DSGVO-kompatibel?",
        a: "Ja. Projekte werden mit EU-Hosting, Zugriffskontrolle, begrenzter Datenspeicherung und verfuegbarem Auftragsverarbeitungsvertrag konzipiert.",
      },
    ],
    nl: [
      {
        q: "Wat doet een WhatsApp Business AI-agent?",
        a: "Hij beantwoordt WhatsApp-berichten, kwalificeert leads, boekt afspraken, begrijpt spraakberichten, analyseert foto's en zet complexe cases door naar uw team.",
      },
      {
        q: "Koppelt AgenticWhatsup met mijn CRM?",
        a: "Ja. De agent kan via API of webhook koppelen met HubSpot, Salesforce, Pipedrive, Shopify, Google Calendar, Cal.com, Zapier, Make en andere tools.",
      },
      {
        q: "Is de implementatie AVG/GDPR-compatibel?",
        a: "Ja. Projecten zijn ontworpen met EU-hosting, toegangsbeheer, beperkte gegevensbewaring en een verwerkersovereenkomst op aanvraag.",
      },
    ],
  }[locale] ?? [];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://agentic-whatsup.com/${locale}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

function buildHomeHowTo(locale: string) {
  const ctaUrl = `https://agentic-whatsup.com/${locale}/contact`;
  const steps = {
    fr: [
      ["Audit WhatsApp", "Analysez vos conversations, vos volumes, vos questions frequentes et les cas a automatiser."],
      ["Connexion des outils", "Connectez WhatsApp Business, CRM, agenda, base de connaissances et workflows internes."],
      ["Tests metier", "Testez les reponses, les escalades humaines, la vision photo, la transcription vocale et la prise de rendez-vous."],
      ["Mise en ligne", "Activez l'agent sur WhatsApp et suivez les conversations, leads et rendez-vous depuis le dashboard."],
    ],
    en: [
      ["WhatsApp audit", "Analyze conversations, message volumes, frequent questions and use cases to automate."],
      ["Tool connection", "Connect WhatsApp Business, CRM, calendar, knowledge base and internal workflows."],
      ["Business testing", "Test replies, human escalation, photo vision, voice transcription and appointment booking."],
      ["Go live", "Activate the agent on WhatsApp and track conversations, leads and bookings from the dashboard."],
    ],
    de: [
      ["WhatsApp-Audit", "Analysieren Sie Konversationen, Volumen, haeufige Fragen und automatisierbare Faelle."],
      ["Tools verbinden", "Verbinden Sie WhatsApp Business, CRM, Kalender, Wissensbasis und interne Workflows."],
      ["Fachliche Tests", "Testen Sie Antworten, menschliche Eskalation, Fotoanalyse, Sprachtranskription und Terminbuchung."],
      ["Live gehen", "Aktivieren Sie den Agenten auf WhatsApp und verfolgen Sie Konversationen, Leads und Termine im Dashboard."],
    ],
    nl: [
      ["WhatsApp-audit", "Analyseer gesprekken, volumes, veelgestelde vragen en use cases om te automatiseren."],
      ["Tools koppelen", "Koppel WhatsApp Business, CRM, agenda, kennisbank en interne workflows."],
      ["Business tests", "Test antwoorden, menselijke escalatie, fotoanalyse, spraaktranscriptie en afspraakboeking."],
      ["Live gaan", "Activeer de agent op WhatsApp en volg gesprekken, leads en afspraken vanuit het dashboard."],
    ],
  }[locale] ?? [];

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `https://agentic-whatsup.com/${locale}#howto`,
    name: (pageMeta[locale] ?? pageMeta.fr).title,
    description: (pageMeta[locale] ?? pageMeta.fr).description,
    totalTime: "P14D",
    supply: [
      { "@type": "HowToSupply", name: "WhatsApp Business account" },
      { "@type": "HowToSupply", name: "CRM or calendar access" },
    ],
    step: steps.map(([name, text], index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name,
      text,
      url: ctaUrl,
    })),
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const breadcrumbJsonLd = buildBreadcrumb(locale);
  const faqJsonLd = buildHomeFaq(locale);
  const howToJsonLd = buildHomeHowTo(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <Hero />
      <StatsSection />
      <BookingEmbedSection />
      <ProblemSection />
      <FeaturesGrid />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
