import type { Metadata } from 'next';
import DemoPageClient from '@/components/demo/DemoPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const base = 'https://agentic-whatsup.com';

  const titles: Record<string, string> = {
    fr: 'Demo Agent IA WhatsApp — Testez l\'agent en direct',
    en: 'WhatsApp AI Agent Demo — Test the agent live',
    de: 'WhatsApp-KI-Agent Demo — Testen Sie den Agenten live',
    nl: 'WhatsApp AI-Agent Demo — Test de agent live',
  };
  const descriptions: Record<string, string> = {
    fr: 'Testez en direct notre agent IA WhatsApp par secteur : immobilier, restaurant, e-commerce, médical et plus. Voyez le simulateur, le dashboard ROI et les capacités IA en action.',
    en: 'Test our WhatsApp AI agent live by sector: real estate, restaurant, e-commerce, medical and more. See the simulator, ROI dashboard and AI capabilities in action.',
    de: 'Testen Sie unseren WhatsApp-KI-Agenten live nach Branche: Immobilien, Restaurant, E-Commerce, Medizin und mehr. Sehen Sie den Simulator, ROI-Dashboard und KI-Fähigkeiten.',
    nl: 'Test onze WhatsApp AI-agent live per sector: vastgoed, restaurant, e-commerce, medisch en meer. Bekijk de simulator, ROI-dashboard en AI-mogelijkheden in actie.',
  };

  const title = titles[locale] ?? titles.fr;
  const description = descriptions[locale] ?? descriptions.fr;

  return {
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${base}/${locale}/demo`,
      languages: {
        fr: `${base}/fr/demo`,
        en: `${base}/en/demo`,
        de: `${base}/de/demo`,
        nl: `${base}/nl/demo`,
        'x-default': `${base}/fr/demo`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${base}/${locale}/demo`,
      siteName: 'AgenticWhatsup',
      locale,
      type: 'website',
    },
  };
}

export default function DemoPage() {
  return <DemoPageClient />;
}
