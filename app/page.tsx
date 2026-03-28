import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import StatsSection from "@/components/home/StatsSection";
import PricingPreview from "@/components/home/PricingPreview";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Agent IA WhatsApp | Automatisez vos messages clients 24/7",
  description: "Le seul agent IA WhatsApp qui comprend les vocaux et analyse les photos de vos clients. Automatisez vos réponses, qualifiez vos leads, prenez des RDV.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProblemSection />
      <FeaturesGrid />
      <HowItWorks />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
