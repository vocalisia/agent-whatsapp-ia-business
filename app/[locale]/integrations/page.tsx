import type { Metadata } from "next";
import { Calendar, Zap } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "Intégrations — Connectez l'agent IA WhatsApp à vos outils | AgenticWhatsup", description: "Connectez l'agent IA WhatsApp à votre CRM, e-commerce, agenda et 50+ outils. HubSpot, Shopify, Zapier, Google Calendar — configuration en moins de 24h." },
  en: { title: "Integrations — Connect your WhatsApp AI Agent to your tools | AgenticWhatsup", description: "Connect the WhatsApp AI agent to your CRM, e-commerce, calendar and 50+ tools. HubSpot, Shopify, Zapier, Google Calendar — set up in under 24h." },
  de: { title: "Integrationen — WhatsApp KI-Agent mit Ihren Tools verbinden | AgenticWhatsup", description: "Verbinden Sie den WhatsApp KI-Agent mit Ihrem CRM, E-Commerce, Kalender und 50+ Tools. HubSpot, Shopify, Zapier — Einrichtung in unter 24h." },
  nl: { title: "Integraties — WhatsApp AI-agent verbinden met uw tools | AgenticWhatsup", description: "Verbind de WhatsApp AI-agent met uw CRM, e-commerce, agenda en 50+ tools. HubSpot, Shopify, Zapier, Google Calendar — configuratie in minder dan 24u." },
};

const t: Record<string, {
  badge: string; h1: string; subtitle: string;
  stats: Array<{ value: string; label: string }>;
  categories: Array<{ name: string; tools: string[] }>;
  howTitle: string; howSteps: Array<{ title: string; desc: string }>;
  ctaTitle: string; ctaSubtitle: string; ctaPrimary: string; ctaSecondary: string;
}> = {
  fr: {
    badge: "50+ intégrations natives",
    h1: "Connectez l'agent IA à tout votre écosystème",
    subtitle: "Aucun silo de données. L'agent WhatsApp se synchronise avec vos outils existants — CRM, e-commerce, agenda, paiement — sans friction.",
    stats: [
      { value: "50+", label: "outils connectables" },
      { value: "< 24h", label: "temps de configuration" },
      { value: "0", label: "ligne de code requise" },
    ],
    categories: [
      { name: "CRM & Ventes", tools: ["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Monday.com", "Notion"] },
      { name: "E-commerce", tools: ["Shopify", "WooCommerce", "PrestaShop", "Magento", "Wix Store"] },
      { name: "Agenda & RDV", tools: ["Google Calendar", "Calendly", "Cal.com", "Outlook Calendar", "Acuity"] },
      { name: "Paiement", tools: ["Stripe", "PayPal", "Mollie", "Sumup", "Twint"] },
      { name: "Automatisation", tools: ["Zapier", "Make (Integromat)", "n8n", "Airtable", "Google Sheets"] },
      { name: "Communication", tools: ["Gmail", "Slack", "Intercom", "Zendesk", "Freshdesk"] },
    ],
    howTitle: "Comment ça marche",
    howSteps: [
      { title: "Audit de votre stack", desc: "On identifie vos outils existants et les flux à automatiser." },
      { title: "Connexion API", desc: "L'agent se connecte à vos outils via API ou webhook en < 24h." },
      { title: "Test & validation", desc: "On teste chaque flux ensemble avant la mise en production." },
      { title: "Go live", desc: "L'agent synchronise les données en temps réel, 24h/24." },
    ],
    ctaTitle: "Votre stack est compatible",
    ctaSubtitle: "98% de nos clients utilisent déjà au moins un outil de notre catalogue.",
    ctaPrimary: "Audit gratuit — 30 min",
    ctaSecondary: "Écrire sur WhatsApp",
  },
  en: {
    badge: "50+ native integrations",
    h1: "Connect the AI agent to your entire ecosystem",
    subtitle: "No data silos. The WhatsApp agent syncs with your existing tools — CRM, e-commerce, calendar, payments — without friction.",
    stats: [
      { value: "50+", label: "connectable tools" },
      { value: "< 24h", label: "setup time" },
      { value: "0", label: "lines of code needed" },
    ],
    categories: [
      { name: "CRM & Sales", tools: ["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Monday.com", "Notion"] },
      { name: "E-commerce", tools: ["Shopify", "WooCommerce", "PrestaShop", "Magento", "Wix Store"] },
      { name: "Calendar & Booking", tools: ["Google Calendar", "Calendly", "Cal.com", "Outlook Calendar", "Acuity"] },
      { name: "Payments", tools: ["Stripe", "PayPal", "Mollie", "Sumup", "Twint"] },
      { name: "Automation", tools: ["Zapier", "Make (Integromat)", "n8n", "Airtable", "Google Sheets"] },
      { name: "Communication", tools: ["Gmail", "Slack", "Intercom", "Zendesk", "Freshdesk"] },
    ],
    howTitle: "How it works",
    howSteps: [
      { title: "Stack audit", desc: "We identify your existing tools and workflows to automate." },
      { title: "API connection", desc: "The agent connects to your tools via API or webhook in < 24h." },
      { title: "Test & validate", desc: "We test every flow together before going live." },
      { title: "Go live", desc: "The agent syncs data in real time, 24/7." },
    ],
    ctaTitle: "Your stack is compatible",
    ctaSubtitle: "98% of our clients already use at least one tool from our catalogue.",
    ctaPrimary: "Free audit — 30 min",
    ctaSecondary: "Write on WhatsApp",
  },
  de: {
    badge: "50+ native Integrationen",
    h1: "KI-Agent mit Ihrem gesamten Ökosystem verbinden",
    subtitle: "Keine Datensilos. Der WhatsApp-Agent synchronisiert sich mit Ihren bestehenden Tools — CRM, E-Commerce, Kalender, Zahlung — ohne Reibungsverluste.",
    stats: [
      { value: "50+", label: "verbindbare Tools" },
      { value: "< 24h", label: "Einrichtungszeit" },
      { value: "0", label: "Codezeilen erforderlich" },
    ],
    categories: [
      { name: "CRM & Vertrieb", tools: ["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Monday.com", "Notion"] },
      { name: "E-Commerce", tools: ["Shopify", "WooCommerce", "PrestaShop", "Magento", "Wix Store"] },
      { name: "Kalender & Termine", tools: ["Google Calendar", "Calendly", "Cal.com", "Outlook Calendar", "Acuity"] },
      { name: "Zahlung", tools: ["Stripe", "PayPal", "Mollie", "Sumup", "Twint"] },
      { name: "Automatisierung", tools: ["Zapier", "Make (Integromat)", "n8n", "Airtable", "Google Sheets"] },
      { name: "Kommunikation", tools: ["Gmail", "Slack", "Intercom", "Zendesk", "Freshdesk"] },
    ],
    howTitle: "So funktioniert es",
    howSteps: [
      { title: "Stack-Audit", desc: "Wir identifizieren Ihre vorhandenen Tools und zu automatisierenden Workflows." },
      { title: "API-Verbindung", desc: "Der Agent verbindet sich in < 24h über API oder Webhook mit Ihren Tools." },
      { title: "Test & Validierung", desc: "Wir testen jeden Workflow gemeinsam vor dem Live-Gang." },
      { title: "Live-Gang", desc: "Der Agent synchronisiert Daten in Echtzeit, 24/7." },
    ],
    ctaTitle: "Ihr Stack ist kompatibel",
    ctaSubtitle: "98% unserer Kunden nutzen bereits mindestens ein Tool aus unserem Katalog.",
    ctaPrimary: "Kostenloses Audit — 30 Min",
    ctaSecondary: "Auf WhatsApp schreiben",
  },
  nl: {
    badge: "50+ native integraties",
    h1: "Verbind de AI-agent met uw volledige ecosysteem",
    subtitle: "Geen datasilo's. De WhatsApp-agent synchroniseert met uw bestaande tools — CRM, e-commerce, agenda, betaling — zonder wrijving.",
    stats: [
      { value: "50+", label: "te verbinden tools" },
      { value: "< 24u", label: "configuratietijd" },
      { value: "0", label: "regels code nodig" },
    ],
    categories: [
      { name: "CRM & Verkoop", tools: ["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Monday.com", "Notion"] },
      { name: "E-commerce", tools: ["Shopify", "WooCommerce", "PrestaShop", "Magento", "Wix Store"] },
      { name: "Agenda & Afspraken", tools: ["Google Calendar", "Calendly", "Cal.com", "Outlook Calendar", "Acuity"] },
      { name: "Betaling", tools: ["Stripe", "PayPal", "Mollie", "Sumup", "Twint"] },
      { name: "Automatisering", tools: ["Zapier", "Make (Integromat)", "n8n", "Airtable", "Google Sheets"] },
      { name: "Communicatie", tools: ["Gmail", "Slack", "Intercom", "Zendesk", "Freshdesk"] },
    ],
    howTitle: "Hoe het werkt",
    howSteps: [
      { title: "Stack-audit", desc: "We identificeren uw bestaande tools en te automatiseren workflows." },
      { title: "API-verbinding", desc: "De agent verbindt in < 24u via API of webhook met uw tools." },
      { title: "Test & validatie", desc: "We testen elke workflow samen vóór de livegang." },
      { title: "Live gaan", desc: "De agent synchroniseert gegevens in realtime, 24/7." },
    ],
    ctaTitle: "Uw stack is compatibel",
    ctaSubtitle: "98% van onze klanten gebruikt al minstens één tool uit onze catalogus.",
    ctaPrimary: "Gratis audit — 30 min",
    ctaSecondary: "Schrijf op WhatsApp",
  },
};

export async function generateStaticParams() {
  return ["fr", "en", "de", "nl"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.fr;
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/integrations`;
  const ogLocale = locale === "de" ? "de_DE" : locale === "nl" ? "nl_NL" : locale === "en" ? "en_US" : "fr_FR";
  return {
    title: m.title,
    description: m.description,
    keywords: "intégrations agent WhatsApp IA, connecter HubSpot WhatsApp, Shopify WhatsApp automatisation, Zapier WhatsApp agent IA, agenticwhatsup intégrations",
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: "https://agentic-whatsup.com/fr/integrations",
        en: "https://agentic-whatsup.com/en/integrations",
        de: "https://agentic-whatsup.com/de/integrations",
        nl: "https://agentic-whatsup.com/nl/integrations",
        "x-default": "https://agentic-whatsup.com/fr/integrations",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      title: m.title,
      description: m.description,
      url: canonicalUrl,
      siteName: "AgenticWhatsup",
      images: [{ url: "https://agentic-whatsup.com/og-image.jpg", width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
      images: ["https://agentic-whatsup.com/og-image.jpg"],
    },
  };
}

const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "41799394222";

export default async function IntegrationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  const pageUrl = `https://agentic-whatsup.com/${locale}/integrations`;
  const m = meta[locale] ?? meta.fr;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: m.title,
    description: m.description,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      "@id": "https://agentic-whatsup.com/#organization",
      "name": "AgenticWhatsup",
      "url": "https://agentic-whatsup.com",
    },
  };

  const allTools = c.categories.flatMap((cat) => cat.tools);
  const softwareListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": c.h1,
    "itemListElement": allTools.map((tool, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": tool,
        "applicationCategory": "BusinessApplication",
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
      { "@type": "ListItem", "position": 2, "name": locale === "fr" ? "Intégrations" : locale === "de" ? "Integrationen" : locale === "nl" ? "Integraties" : "Integrations", "item": pageUrl },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {c.badge}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5" style={{ fontFamily: "Onest, sans-serif" }}>
          {c.h1}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">{c.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={calLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            <Calendar size={16} /> {c.ctaPrimary}
          </a>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            {c.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-16">
        {c.stats.map((s, i) => (
          <div key={i} className="bg-surface border border-surface-2 rounded-2xl p-6 text-center">
            <div className="text-wa font-extrabold text-3xl sm:text-4xl mb-1">{s.value}</div>
            <div className="text-slate-400 text-sm">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Integration categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {c.categories.map((cat) => (
          <div key={cat.name} className="bg-surface border border-surface-2 rounded-2xl p-6 hover:border-wa/30 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Zap size={18} className="text-wa" />
              <h2 className="text-white font-bold">{cat.name}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.tools.map((tool) => (
                <span key={tool} className="bg-surface-2 text-slate-300 text-xs px-2.5 py-1 rounded-lg">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="mb-16">
        <h2 className="text-white font-extrabold text-2xl mb-8 text-center" style={{ fontFamily: "Onest, sans-serif" }}>
          {c.howTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.howSteps.map((step, i) => (
            <div key={i} className="bg-surface border border-surface-2 rounded-2xl p-6 relative">
              <div className="w-8 h-8 rounded-full bg-wa/10 border border-wa/30 flex items-center justify-center text-wa font-bold text-sm mb-4">
                {i + 1}
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-wa/5 border border-wa/20 rounded-2xl p-10 text-center">
        <h2 className="text-white font-extrabold text-2xl mb-2" style={{ fontFamily: "Onest, sans-serif" }}>
          {c.ctaTitle}
        </h2>
        <p className="text-slate-400 text-sm mb-6">{c.ctaSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={calLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            <Calendar size={16} /> {c.ctaPrimary}
          </a>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            {c.ctaSecondary}
          </a>
        </div>
      </div>
    </div>
  );
}
