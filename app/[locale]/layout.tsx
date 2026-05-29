import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Onest, Outfit } from "next/font/google";
import { routing } from "@/lib/i18n/routing";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleTagManager, { GoogleTagManagerNoScript } from "@/components/shared/GoogleTagManager";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Cookie banner is purely client UI shown only on first visit — split into its own
// chunk so it doesn't sit in the main bundle blocking LCP.
const CookieBanner = dynamic(() => import("@/components/shared/CookieBanner"));

const BASE_URL = "https://agentic-whatsup.com";

const fontOnest = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-onest",
});

const fontOutfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

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
    title: "WhatsApp KI-Agent | Automatisieren Kundennachrichten 24/7",
    description: "Der einzige WhatsApp KI-Agent, der Sprachnachrichten versteht und Fotos analysiert. Antworten automatisieren, Leads qualifizieren, Termine buchen — 24/7.",
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
    // NOTE: do not set `alternates.canonical` / `languages` here.
    // This layout applies to EVERY page under /[locale], so a static canonical
    // would incorrectly map /fr/blog, /fr/contact, etc. back to /fr.
    // Each page sets its own canonical + hreflangs via its own generateMetadata.
    openGraph: {
      type: "website",
      locale: ogLocaleMap[locale] ?? "fr_FR",
      siteName: "AgenticWhatsup",
      title: meta.title,
      description: meta.description,
      url: `${BASE_URL}/${locale}`,
      images: [
        {
          url: `${BASE_URL}/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "WhatsApp AI Agent | AgenticWhatsup",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${BASE_URL}/${locale}/opengraph-image`],
    },
    robots: { index: true, follow: true },
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
    <html lang={locale} className={`${fontOnest.variable} ${fontOutfit.variable}`}>
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
              "@type": "Organization",
              "@id": "https://agentic-whatsup.com/#organization",
              "name": "AgenticWhatsup",
              "alternateName": "Agentic Whatsup",
              "url": "https://agentic-whatsup.com",
              "description": "Le seul agent IA WhatsApp qui comprend les vocaux et analyse les photos de vos clients.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://agentic-whatsup.com/icon.svg",
                "width": 512,
                "height": 512,
              },
              "image": {
                "@type": "ImageObject",
                "url": "https://agentic-whatsup.com/og-image.jpg",
                "width": 1200,
                "height": 630,
              },
              "email": "contact@agentic-whatsup.com",
              "telephone": "+41799394222",
              "foundingDate": "2025-08-15",
              "founder": {
                "@type": "Person",
                "@id": "https://agentic-whatsup.com/#person-laurent-duplat",
                "name": "Laurent Duplat",
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CH",
                "addressLocality": "Genève",
                "addressRegion": "Genève",
              },
              "areaServed": [
                { "@type": "Country", "name": "France" },
                { "@type": "Country", "name": "Switzerland" },
                { "@type": "Country", "name": "Belgium" },
                { "@type": "Country", "name": "Germany" },
                { "@type": "Country", "name": "Netherlands" },
                { "@type": "Country", "name": "Luxembourg" },
              ],
              "knowsAbout": [
                "WhatsApp Business automatisation",
                "Agents IA conversationnels WhatsApp",
                "Vision IA pour analyse photos",
                "Transcription vocale Whisper",
                "Qualification leads B2B 24/7",
                "Integration CRM (HubSpot, Pipedrive)",
                "Make.com et automatisation",
                "Conformite RGPD WhatsApp",
                "Chatbots multilingues",
                "Marketing conversationnel",
              ],
              "publishingPrinciples": "https://agentic-whatsup.com/fr/charte-editoriale",
              "ethicsPolicy": "https://agentic-whatsup.com/fr/ethique",
              "correctionsPolicy": "https://agentic-whatsup.com/fr/corrections",
              "diversityPolicy": "https://agentic-whatsup.com/fr/diversite",
              "sameAs": [
                "https://www.linkedin.com/company/agenticwhatsup",
                "https://www.linkedin.com/in/laurent-duplat",
                "https://x.com/laurentduplat",
                "https://vocalis.pro",
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer support",
                  "telephone": "+41799394222",
                  "email": "contact@agentic-whatsup.com",
                  "availableLanguage": ["French", "English", "German", "Dutch"],
                  "areaServed": ["FR", "CH", "BE", "DE", "NL", "LU"],
                },
                {
                  "@type": "ContactPoint",
                  "contactType": "sales",
                  "email": "contact@agentic-whatsup.com",
                  "availableLanguage": ["French", "English"],
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://agentic-whatsup.com/#person-laurent-duplat",
              "name": "Laurent Duplat",
              "url": `https://agentic-whatsup.com/${locale}/auteur/laurent-duplat`,
              "jobTitle": "Fondateur & Directeur de la publication",
              "description": "Fondateur et directeur de la publication AgenticWhatsup. Specialiste agents IA conversationnels et automatisation WhatsApp Business pour PME francophones.",
              "image": {
                "@type": "ImageObject",
                "url": "https://agentic-whatsup.com/images/authors/laurent-duplat.jpg",
                "width": 400,
                "height": 400,
              },
              "nationality": { "@type": "Country", "name": "Switzerland" },
              "worksFor": { "@id": "https://agentic-whatsup.com/#organization" },
              "knowsAbout": [
                "WhatsApp Business API",
                "Agents IA conversationnels",
                "Automatisation marketing PME",
                "Vision IA et NLP",
                "Integration CRM B2B",
                "Conformite RGPD",
                "Strategie digitale francophone",
                "Voice AI et transcription",
              ],
              "knowsLanguage": ["fr", "en", "de", "nl"],
              "sameAs": [
                "https://www.linkedin.com/in/laurent-duplat",
                "https://x.com/laurentduplat",
                "https://vocalis.pro",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "@id": "https://agentic-whatsup.com/#app",
              "name": "Agent IA WhatsApp",
              "applicationCategory": "BusinessApplication",
              "applicationSubCategory": "CustomerServiceApplication",
              "operatingSystem": "WhatsApp Business",
              "description": "Agent conversationnel IA pour WhatsApp Business avec vision IA et transcription vocale.",
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "url": "https://agentic-whatsup.com/fr/contact",
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "47",
                "reviewCount": "12",
              },
              "featureList": [
                "Vision IA pour analyse photos clients",
                "Transcription vocale temps réel (Whisper / GPT-4o Audio)",
                "Qualification automatique des leads 24/7",
                "Intégration CRM (HubSpot, Pipedrive, Make.com)",
                "Conformité RGPD by design",
                "Multilingue (FR, EN, DE, NL)",
              ],
              "publisher": { "@id": "https://agentic-whatsup.com/#organization" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://agentic-whatsup.com/#website",
              "url": "https://agentic-whatsup.com",
              "name": "AgenticWhatsup",
              "publisher": { "@id": "https://agentic-whatsup.com/#organization" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": { "@type": "EntryPoint", "urlTemplate": "https://agentic-whatsup.com/fr/blog?q={search_term_string}" },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleTagManagerNoScript />
        <GoogleTagManager />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <CookieBanner />
          {/* Vocalis WhatsApp Agent IA Widget — defer to not block TTI */}
          <script
            src="https://app.vocalis.pro/embed.js"
            data-assistant-id="1c784259-40d5-4274-ae00-aee0ef02054c"
            defer
          />
          <a
            href="https://wa.me/41799394222"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter via WhatsApp"
            className="wa-float-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="36" height="36" fill="white">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.506L4 29l7.695-1.812A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 0 1-5.07-1.383l-.36-.217-4.57 1.076 1.1-4.45-.234-.373A9.94 9.94 0 0 1 6 15c0-5.523 4.477-10 10-10zm-3.16 4.5c-.2 0-.52.075-.794.375-.274.3-1.045 1.02-1.045 2.488s1.07 2.887 1.22 3.087c.15.2 2.09 3.188 5.07 4.35 2.98 1.163 2.98.775 3.52.725s1.74-.7 1.987-1.375.247-1.25.173-1.375c-.075-.125-.274-.2-.574-.35-.3-.15-1.74-.862-2.012-.962-.274-.1-.473-.15-.673.15-.2.3-.773.962-.948 1.162-.175.2-.35.225-.648.075-.3-.15-1.265-.466-2.41-1.487-.89-.795-1.492-1.775-1.667-2.075-.175-.3-.019-.462.132-.61.135-.132.3-.35.45-.524.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.673-1.62-.923-2.212-.243-.578-.49-.5-.673-.51-.175-.008-.374-.01-.574-.01z"/>
            </svg>
          </a>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
