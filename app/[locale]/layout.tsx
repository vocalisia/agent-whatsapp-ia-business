import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/lib/i18n/routing";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/shared/CookieBanner";

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
        "x-default": `${BASE_URL}/fr`,
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
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Agent IA WhatsApp | AgenticWhatsup",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${BASE_URL}/og-image.jpg`],
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
                    { "@type": "Question", name: "Qu'est-ce qu'un agent WhatsApp IA ?", acceptedAnswer: { "@type": "Answer", text: "Un agent WhatsApp IA est un assistant virtuel intelligent qui répond automatiquement aux messages de vos clients sur WhatsApp Business, comprend les vocaux et analyse les photos, 24h/24 et 7j/7 sans intervention humaine." } },
                    { "@type": "Question", name: "Comment fonctionne l'automatisation WhatsApp avec l'IA ?", acceptedAnswer: { "@type": "Answer", text: "L'agent IA se connecte à votre numéro WhatsApp Business, analyse chaque message entrant grâce à l'intelligence artificielle, et répond de manière personnalisée selon votre catalogue, vos FAQ et vos processus métier." } },
                    { "@type": "Question", name: "Est-ce que le service est compatible avec WhatsApp Business ?", acceptedAnswer: { "@type": "Answer", text: "Oui, notre agent est 100% compatible avec WhatsApp Business API. Il s'intègre directement à votre compte WhatsApp Business existant sans changer de numéro." } },
                    { "@type": "Question", name: "Combien coûte un agent WhatsApp automatisé ?", acceptedAnswer: { "@type": "Answer", text: "Nos offres démarrent à partir de 97€/mois pour un agent WhatsApp IA entièrement configuré. L'installation et la formation sont incluses. Contactez-nous pour un devis personnalisé." } },
                    { "@type": "Question", name: "Comment intégrer un agent IA à mon WhatsApp Business ?", acceptedAnswer: { "@type": "Answer", text: "L'intégration se fait en moins de 48h. Notre équipe prend en charge la configuration complète : connexion à votre WhatsApp Business, paramétrage de l'IA selon vos produits/services, et tests avant mise en ligne." } },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
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
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
