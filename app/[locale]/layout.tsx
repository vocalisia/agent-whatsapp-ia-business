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

const defaultMeta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Agent IA WhatsApp | Automatisez vos messages clients 24/7",
    description: "Le seul agent IA WhatsApp qui comprend les vocaux et analyse les photos. Automatisez vos réponses clients, qualifiez vos leads, prenez des RDV — 24h/24.",
  },
  en: {
    title: "WhatsApp AI Agent | Automate your customer messages 24/7",
    description: "The only WhatsApp AI agent that understands voice messages and analyzes photos. Automate responses, qualify leads, book appointments — 24/7.",
  },
  de: {
    title: "WhatsApp KI-Agent | Automatisieren Sie Ihre Kundennachrichten 24/7",
    description: "Der einzige WhatsApp KI-Agent, der Sprachnachrichten versteht und Fotos analysiert. Automatisieren Sie Antworten, qualifizieren Sie Leads, buchen Sie Termine — 24/7.",
  },
  nl: {
    title: "WhatsApp AI-agent | Automatiseer uw klantberichten 24/7",
    description: "De enige WhatsApp AI-agent die spraakberichten begrijpt en foto's analyseert. Automatiseer antwoorden, kwalificeer leads, boek afspraken — 24/7.",
  },
};

const ogLocaleMap: Record<string, string> = {
  fr: "fr_FR",
  en: "en_US",
  de: "de_DE",
  nl: "nl_NL",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = defaultMeta[locale] ?? defaultMeta.fr;

  return {
    title: {
      default: meta.title,
      template: "%s | AgenticWhatsup",
    },
    description: meta.description,
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
        nl: `${BASE_URL}/nl`,
        "x-default": `${BASE_URL}/fr`,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale] ?? "fr_FR",
      siteName: "AgenticWhatsup",
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}/${locale}`,
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "WhatsApp AI Agent | AgenticWhatsup",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${BASE_URL}/og-image.jpg`],
    },
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
      verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION },
    }),
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

  if (!routing.locales.includes(locale as "fr" | "en" | "de" | "nl")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {/* Consent Mode v2 + dynamic GA4 — raw inline script, FIRST in <head>, to avoid Next.js preloading GA URL. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;var m=document.cookie.match(/(^| )cookie_consent=([^;]+)/);var c=m?m[2]:null;gtag('consent','default',{analytics_storage:c==='rejected'?'denied':'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});gtag('js',new Date());gtag('config','G-1Q10Z6C916');var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-1Q10Z6C916';document.head.appendChild(s);})();`,
          }}
        />
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
