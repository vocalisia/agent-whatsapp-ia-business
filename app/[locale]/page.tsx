import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import StatsSection from "@/components/home/StatsSection";
import FinalCTA from "@/components/home/FinalCTA";

const pageMeta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Agent IA WhatsApp Business — Guide Complet 2026 | AgenticWhatsup",
    description: "Agent IA WhatsApp Business : qualifiez vos leads, prenez des RDV et assurez un service client 24/7 via WhatsApp. Vision IA, transcription vocale, déployé en 2-3 semaines.",
  },
  en: {
    title: "AI Agent for WhatsApp Business — Complete Guide 2026 | AgenticWhatsup",
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

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const breadcrumbJsonLd = buildBreadcrumb(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }} />
      <Hero />
      <StatsSection />
      <ProblemSection />
      <FeaturesGrid />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
