import type { Metadata } from 'next';
import ConfirmationPageClient from '@/components/shared/ConfirmationPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const base = 'https://agentic-whatsup.com';

  const titles: Record<string, string> = {
    fr: 'Confirmation de votre session stratégique WhatsApp IA',
    en: 'Confirmation of your WhatsApp AI strategy session',
    de: 'Bestätigung Ihrer WhatsApp-KI-Strategiesitzung',
    nl: 'Bevestiging van uw WhatsApp AI-strategiesessie',
  };
  const descriptions: Record<string, string> = {
    fr: 'Votre session stratégique est confirmée. Découvrez les prochaines étapes pour déployer votre agent IA WhatsApp et automatiser votre business.',
    en: 'Your strategy session is confirmed. Discover the next steps to deploy your WhatsApp AI agent and automate your business.',
    de: 'Ihre Strategiesitzung ist bestätigt. Entdecken Sie die nächsten Schritte zur Bereitstellung Ihres WhatsApp-KI-Agenten.',
    nl: 'Uw strategiesessie is bevestigd. Ontdek de volgende stappen om uw WhatsApp AI-agent te implementeren.',
  };

  const title = titles[locale] ?? titles.fr;
  const description = descriptions[locale] ?? descriptions.fr;

  return {
    title,
    description,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `${base}/${locale}/confirmation`,
      languages: {
        fr: `${base}/fr/confirmation`,
        en: `${base}/en/confirmation`,
        de: `${base}/de/confirmation`,
        nl: `${base}/nl/confirmation`,
        'x-default': `${base}/fr/confirmation`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${base}/${locale}/confirmation`,
      siteName: 'AgenticWhatsup',
      locale,
      type: 'website',
    },
  };
}

export default function ConfirmationPage() {
  return <ConfirmationPageClient />;
}
