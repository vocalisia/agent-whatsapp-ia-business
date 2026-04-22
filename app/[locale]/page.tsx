import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import StatsSection from "@/components/home/StatsSection";
import FinalCTA from "@/components/home/FinalCTA";

const pageMeta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Agent IA WhatsApp | Automatisez vos messages clients 24/7",
    description: "Le seul agent IA WhatsApp qui comprend les vocaux et analyse les photos de vos clients. Automatisez vos réponses, qualifiez vos leads, prenez des RDV.",
  },
  en: {
    title: "WhatsApp AI Agent | Automate your customer messages 24/7",
    description: "The only WhatsApp AI agent that understands voice messages and analyzes your clients' photos. Automate responses, qualify leads, book appointments.",
  },
  de: {
    title: "WhatsApp KI-Agent | Automatisieren Sie Ihre Kundennachrichten 24/7",
    description: "Der einzige WhatsApp KI-Agent, der Sprachnachrichten versteht und Fotos Ihrer Kunden analysiert. Automatisieren Sie Antworten, qualifizieren Sie Leads, buchen Sie Termine.",
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

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProblemSection />
      <FeaturesGrid />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
