import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/lib/i18n/routing";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/shared/CookieBanner";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics";

const BASE_URL = "https://agentic-whatsup.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: {
      default: "Agent IA WhatsApp | Automatisez vos messages clients 24/7",
      template: "%s | AgenticWhatsup",
    },
    description:
      "Le seul agent IA WhatsApp qui comprend les vocaux et analyse les photos. Automatisez vos réponses clients, qualifiez vos leads, prenez des RDV — 24h/24.",
    metadataBase: new URL(BASE_URL),
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: "/icon.svg",
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
        de: `${BASE_URL}/de`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : locale === "de" ? "de_DE" : "en_US",
      siteName: "AgenticWhatsup",
      title: "Agent IA WhatsApp | Automatisez vos messages clients 24/7",
      description:
        "Le seul agent IA WhatsApp qui comprend les vocaux et analyse les photos. Automatisez vos réponses clients, qualifiez vos leads, prenez des RDV — 24h/24.",
      url: `${BASE_URL}/${locale}`,
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "en" | "de")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "WhatsApp Agent IA",
                  url: "https://agentic-whatsup.com",
                  description: "Le seul agent IA WhatsApp qui comprend les vocaux et analyse les photos de vos clients.",
                },
                {
                  "@type": "Service",
                  name: "Agent IA WhatsApp",
                  provider: { "@type": "Organization", name: "WhatsApp Agent IA" },
                  description: "Agent conversationnel IA pour WhatsApp Business avec vision IA et transcription vocale.",
                  areaServed: ["FR", "CH", "BE", "CA"],
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    { "@type": "Question", name: "Qu'est-ce qu'un agent IA WhatsApp ?", acceptedAnswer: { "@type": "Answer", text: "Un agent IA WhatsApp est un assistant virtuel intelligent qui répond automatiquement aux messages de vos clients sur WhatsApp Business, 24h/24 et 7j/7." } },
                    { "@type": "Question", name: "Quelles sont les fonctionnalités exclusives ?", acceptedAnswer: { "@type": "Answer", text: "Notre agent est le seul à proposer la vision IA (analyse des photos envoyées) et la transcription vocale (compréhension des messages audio WhatsApp)." } },
                    { "@type": "Question", name: "Combien de temps pour la mise en place ?", acceptedAnswer: { "@type": "Answer", text: "L'intégration se fait en moins de 48h. Notre équipe configure l'agent selon vos besoins métier et le connecte à votre numéro WhatsApp Business." } },
                    { "@type": "Question", name: "Est-ce conforme au RGPD ?", acceptedAnswer: { "@type": "Answer", text: "Oui, notre solution est 100% conforme au RGPD. Les données sont hébergées en Europe et nous ne conservons aucune donnée personnelle sans consentement." } },
                    { "@type": "Question", name: "Quel est le ROI attendu ?", acceptedAnswer: { "@type": "Answer", text: "Nos clients constatent en moyenne une réduction de 60% des coûts de gestion client et une augmentation de 40% de la productivité des équipes." } },
                  ],
                },
              ],
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics />
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
