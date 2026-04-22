import type { Metadata } from "next";

const meta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Session confirmée — Préparez votre appel | AgenticWhatsup",
    description:
      "Votre session stratégique est confirmée. Découvrez les étapes suivantes, la checklist de préparation et les garanties offertes avant votre appel.",
  },
  en: {
    title: "Session confirmed — Prepare your call | AgenticWhatsup",
    description:
      "Your strategy session is confirmed. Find the next steps, preparation checklist and guarantees offered before your call.",
  },
  de: {
    title: "Termin bestätigt — Bereiten Sie Ihren Anruf vor | AgenticWhatsup",
    description:
      "Ihre Strategiesitzung ist bestätigt. Erfahren Sie die nächsten Schritte, die Vorbereitungs-Checkliste und die gebotenen Garantien vor Ihrem Anruf.",
  },
  nl: {
    title: "Sessie bevestigd — Bereid uw gesprek voor | AgenticWhatsup",
    description:
      "Uw strategiesessie is bevestigd. Ontdek de volgende stappen, de voorbereidingschecklist en de geboden garanties voor uw gesprek.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.fr;
  const url = `https://agentic-whatsup.com/${locale}/confirmation`;
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: url,
      languages: {
        fr: "https://agentic-whatsup.com/fr/confirmation",
        en: "https://agentic-whatsup.com/en/confirmation",
        de: "https://agentic-whatsup.com/de/confirmation",
        nl: "https://agentic-whatsup.com/nl/confirmation",
      },
    },
    // Page transactionnelle : exclue de l'index Google
    robots: { index: false, follow: true },
    openGraph: {
      title: m.title,
      description: m.description,
      url,
      type: "website",
      locale,
    },
  };
}

export default function ConfirmationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
