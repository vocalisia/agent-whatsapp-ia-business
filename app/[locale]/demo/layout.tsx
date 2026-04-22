import type { Metadata } from "next";

const meta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Demo Agent IA WhatsApp interactive | 11 secteurs en temps reel",
    description:
      "Testez l'agent IA WhatsApp en direct sur 11 secteurs (e-commerce, coach, assurance, immobilier, restaurant, medical, fitness, auto, juridique, hotel). Dashboard KPI temps reel + calculateur ROI.",
  },
  en: {
    title: "Interactive WhatsApp AI Agent Demo | 11 sectors in real time",
    description:
      "Try the WhatsApp AI agent live across 11 sectors (e-commerce, coaching, insurance, real estate, restaurant, medical, fitness, auto, legal, hotel). Real-time KPI dashboard + ROI calculator.",
  },
  de: {
    title: "Interaktive WhatsApp KI-Agent Demo | 11 Branchen in Echtzeit",
    description:
      "Testen Sie den WhatsApp KI-Agenten live in 11 Branchen (E-Commerce, Coaching, Versicherung, Immobilien, Restaurant, Medizin, Fitness, Auto, Recht, Hotel). Echtzeit-KPI-Dashboard + ROI-Rechner.",
  },
  nl: {
    title: "Interactieve WhatsApp AI-agent demo | 11 sectoren in real-time",
    description:
      "Test de WhatsApp AI-agent live in 11 sectoren (e-commerce, coaching, verzekering, vastgoed, restaurant, medisch, fitness, auto, juridisch, hotel). Real-time KPI-dashboard + ROI-calculator.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.fr;
  const url = `https://agentic-whatsup.com/${locale}/demo`;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        fr: "https://agentic-whatsup.com/fr/demo",
        en: "https://agentic-whatsup.com/en/demo",
        de: "https://agentic-whatsup.com/de/demo",
        nl: "https://agentic-whatsup.com/nl/demo",
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url,
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
  };
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
