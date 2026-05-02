import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { Calendar, CheckCircle, XCircle, MessageCircle } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "AgenticWhatsup vs ManyChat — Comparatif 2025 | Meilleur agent IA WhatsApp", description: "AgenticWhatsup ou ManyChat ? ManyChat est conçu pour Instagram et Facebook. AgenticWhatsup est le spécialiste WhatsApp avec vraie IA conversationnelle, vocaux et vision par image." },
  en: { title: "AgenticWhatsup vs ManyChat — Comparison 2025 | Best WhatsApp AI Agent", description: "AgenticWhatsup or ManyChat? ManyChat is built for Instagram and Facebook. AgenticWhatsup is the WhatsApp specialist with real conversational AI, voice and image vision." },
  de: { title: "AgenticWhatsup vs ManyChat — Vergleich 2025 | Bester WhatsApp KI-Agent", description: "AgenticWhatsup oder ManyChat? ManyChat ist für Instagram und Facebook gebaut. AgenticWhatsup ist der WhatsApp-Spezialist mit echter konversationeller KI." },
  nl: { title: "AgenticWhatsup vs ManyChat — Vergelijking 2025 | Beste WhatsApp AI-agent", description: "AgenticWhatsup of ManyChat? ManyChat is gebouwd voor Instagram en Facebook. AgenticWhatsup is de WhatsApp-specialist met echte conversationele AI." },
};

const t: Record<string, {
  back: string; badge: string; h1: string; subtitle: string;
  verdict: string; verdictText: string;
  tableTitle: string;
  rows: Array<{ feature: string; us: string | boolean; them: string | boolean; usNote?: string; themNote?: string }>;
  whyTitle: string; why: string[];
  forWhoTitle: string; forWhoUs: string[]; forWhoThem: string[];
  ctaTitle: string; ctaSubtitle: string; ctaPrimary: string; ctaSecondary: string;
  faqTitle: string; faqs: Array<{ q: string; a: string }>;
}> = {
  fr: {
    back: "← Tous les comparatifs",
    badge: "Comparatif indépendant 2025",
    h1: "AgenticWhatsup vs ManyChat",
    subtitle: "ManyChat est le leader des chatbots pour Instagram et Facebook. Mais pour WhatsApp avec une vraie IA — ce n'est pas la même chose. Voici pourquoi.",
    verdict: "Notre verdict",
    verdictText: "ManyChat est excellent pour les campagnes sociales sur Meta (Instagram DMs, Facebook Messenger). Dès qu'on parle de WhatsApp Business avec IA conversationnelle, compréhension des vocaux et personnalisation avancée, AgenticWhatsup n'a pas de concurrent sérieux.",
    tableTitle: "Comparatif fonctionnel",
    rows: [
      { feature: "Spécialisé WhatsApp Business", us: true, them: false, themNote: "Instagram/Messenger en priorité" },
      { feature: "IA conversationnelle (LLM)", us: true, them: false, themNote: "Flows statiques uniquement" },
      { feature: "Compréhension des vocaux", us: true, them: false },
      { feature: "Analyse des images reçues", us: true, them: false },
      { feature: "Mémoire de conversation", us: true, them: false, themNote: "Variables limitées" },
      { feature: "Formation sur vos données", us: true, them: false },
      { feature: "Instagram / Facebook Messenger", us: false, them: true, usNote: "Non, WhatsApp uniquement" },
      { feature: "Campagnes WhatsApp broadcast", us: true, them: true },
      { feature: "Intégration Shopify / WooCommerce", us: true, them: true },
      { feature: "Personnalité de marque IA", us: true, them: false },
      { feature: "Support FR / DE / NL", us: true, them: false, themNote: "Anglais uniquement" },
      { feature: "Déploiement", us: "14 jours", them: "Quelques jours (mais flows limités)" },
      { feature: "ROI moyen client", us: "8× en 90j", them: "Variable selon usage" },
    ],
    whyTitle: "Pourquoi nos clients ont choisi AgenticWhatsup plutôt que ManyChat",
    why: [
      "ManyChat fonctionne avec des flows statiques — AgenticWhatsup s'adapte à chaque conversation en temps réel",
      "ManyChat ne comprend pas les vocaux WhatsApp — problème majeur pour nos marchés FR/CH/BE",
      "ManyChat ne peut pas analyser une image — AgenticWhatsup répond à partir d'une photo envoyée par le client",
      "ManyChat est centré Instagram — nos clients veulent du WhatsApp professionnel",
      "L'IA de ManyChat est basique — AgenticWhatsup utilise des LLM de pointe (GPT-4, Claude)",
      "ManyChat ne propose pas de support en français, allemand ou néerlandais",
    ],
    forWhoTitle: "Qui devrait choisir quoi ?",
    forWhoUs: [
      "Vous voulez automatiser vos conversations WhatsApp",
      "Vous recevez des vocaux et photos de clients",
      "Vous ciblez les marchés francophones, germanophones ou néerlandophones",
      "Vous voulez une IA qui comprend le contexte de chaque client",
    ],
    forWhoThem: [
      "Votre priorité est Instagram DMs ou Facebook Messenger",
      "Vous faites du e-commerce social (Instagram Shopping)",
      "Vous n'avez pas besoin de WhatsApp",
      "Vous êtes à l'aise avec des flows préconçus simples",
    ],
    ctaTitle: "WhatsApp est votre canal prioritaire ?",
    ctaSubtitle: "Audit gratuit de 30 min — on vous montre la différence concrète avec un agent IA dédié WhatsApp.",
    ctaPrimary: "Prendre RDV — Audit gratuit",
    ctaSecondary: "Écrire sur WhatsApp",
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "ManyChat fonctionne-t-il bien sur WhatsApp ?", a: "ManyChat est conçu principalement pour Instagram et Facebook Messenger. Sa version WhatsApp est plus limitée que sur ses canaux historiques." },
      { q: "ManyChat peut-il analyser des photos envoyées par WhatsApp ?", a: "Non. ManyChat n'intègre pas de Vision IA. AgenticWhatsup analyse photos et documents envoyés par vos clients en temps réel." },
      { q: "Quel est le délai de mise en production avec ManyChat vs AgenticWhatsup ?", a: "ManyChat est self-service (vous construisez les flows). AgenticWhatsup est clé en main : 14 jours avec formation sur vos données." },
      { q: "ManyChat est-il conforme RGPD ?", a: "ManyChat est une plateforme US. AgenticWhatsup est hébergé exclusivement en Europe avec DPA fourni dès le début." },
    ],
  },
  en: {
    back: "← All comparisons",
    badge: "Independent comparison 2025",
    h1: "AgenticWhatsup vs ManyChat",
    subtitle: "ManyChat is the leader in chatbots for Instagram and Facebook. But for WhatsApp with real AI — it's a different story. Here's why.",
    verdict: "Our verdict",
    verdictText: "ManyChat is excellent for social campaigns on Meta (Instagram DMs, Facebook Messenger). When it comes to WhatsApp Business with conversational AI, voice understanding and advanced personalisation, AgenticWhatsup has no serious competitor.",
    tableTitle: "Functional comparison",
    rows: [
      { feature: "WhatsApp Business specialist", us: true, them: false, themNote: "Instagram/Messenger first" },
      { feature: "Conversational AI (LLM)", us: true, them: false, themNote: "Static flows only" },
      { feature: "Voice message understanding", us: true, them: false },
      { feature: "Received image analysis", us: true, them: false },
      { feature: "Conversation memory", us: true, them: false, themNote: "Limited variables" },
      { feature: "Training on your data", us: true, them: false },
      { feature: "Instagram / Facebook Messenger", us: false, them: true, usNote: "No, WhatsApp only" },
      { feature: "WhatsApp broadcast campaigns", us: true, them: true },
      { feature: "Shopify / WooCommerce integration", us: true, them: true },
      { feature: "Brand personality AI", us: true, them: false },
      { feature: "FR / DE / NL support", us: true, them: false, themNote: "English only" },
      { feature: "Deployment", us: "14 days", them: "A few days (but limited flows)" },
      { feature: "Average client ROI", us: "8× in 90 days", them: "Variable by use case" },
    ],
    whyTitle: "Why our clients chose AgenticWhatsup over ManyChat",
    why: [
      "ManyChat uses static flows — AgenticWhatsup adapts to each conversation in real time",
      "ManyChat doesn't understand WhatsApp voice messages — a major issue for FR/CH/BE markets",
      "ManyChat cannot analyse an image — AgenticWhatsup responds based on a photo sent by the client",
      "ManyChat is Instagram-centred — our clients want professional WhatsApp",
      "ManyChat's AI is basic — AgenticWhatsup uses cutting-edge LLMs (GPT-4, Claude)",
      "ManyChat offers no support in French, German or Dutch",
    ],
    forWhoTitle: "Who should choose what?",
    forWhoUs: [
      "You want to automate your WhatsApp conversations",
      "You receive voice messages and photos from clients",
      "You target French, German or Dutch-speaking markets",
      "You want AI that understands each client's context",
    ],
    forWhoThem: [
      "Your priority is Instagram DMs or Facebook Messenger",
      "You do social e-commerce (Instagram Shopping)",
      "You don't need WhatsApp",
      "You're comfortable with simple pre-built flows",
    ],
    ctaTitle: "Is WhatsApp your priority channel?",
    ctaSubtitle: "Free 30-min audit — we show you the concrete difference with a dedicated WhatsApp AI agent.",
    faqTitle: "Häufig gestellte Fragen",
    faqs: [],
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
  },
  de: {
    back: "← Alle Vergleiche",
    badge: "Unabhängiger Vergleich 2025",
    h1: "AgenticWhatsup vs ManyChat",
    subtitle: "ManyChat führt bei Chatbots für Instagram und Facebook. Aber für WhatsApp mit echter KI — das ist eine andere Geschichte. Hier ist der Grund.",
    verdict: "Unser Urteil",
    verdictText: "ManyChat ist hervorragend für Social-Kampagnen auf Meta. Wenn es um WhatsApp Business mit konversationeller KI geht, hat AgenticWhatsup keinen ernsthaften Konkurrenten.",
    tableTitle: "Funktionsvergleich",
    rows: [
      { feature: "WhatsApp Business-Spezialist", us: true, them: false, themNote: "Instagram/Messenger zuerst" },
      { feature: "Konversations-KI (LLM)", us: true, them: false, themNote: "Nur statische Flows" },
      { feature: "Sprachnachrichtenverständnis", us: true, them: false },
      { feature: "Bildanalyse", us: true, them: false },
      { feature: "Gesprächsgedächtnis", us: true, them: false, themNote: "Begrenzte Variablen" },
      { feature: "Training auf Ihren Daten", us: true, them: false },
      { feature: "Instagram / Facebook Messenger", us: false, them: true },
      { feature: "WhatsApp-Broadcast-Kampagnen", us: true, them: true },
      { feature: "Shopify / WooCommerce Integration", us: true, them: true },
      { feature: "Marken-KI-Persönlichkeit", us: true, them: false },
      { feature: "FR / DE / NL Support", us: true, them: false, themNote: "Nur Englisch" },
      { feature: "Bereitstellung", us: "14 Tage", them: "Wenige Tage (begrenzte Flows)" },
      { feature: "Kunden-ROI", us: "8× in 90 Tagen", them: "Je nach Nutzung" },
    ],
    whyTitle: "Warum unsere Kunden AgenticWhatsup statt ManyChat wählten",
    why: [
      "ManyChat verwendet statische Flows — AgenticWhatsup passt sich jedem Gespräch in Echtzeit an",
      "ManyChat versteht keine WhatsApp-Sprachnachrichten — ein großes Problem für DACH-Märkte",
      "ManyChat kann kein Bild analysieren — AgenticWhatsup antwortet basierend auf einem Kundenfoto",
      "ManyChat ist Instagram-zentriert — unsere Kunden wollen professionelles WhatsApp",
      "ManyChats KI ist einfach — AgenticWhatsup verwendet modernste LLMs (GPT-4, Claude)",
      "ManyChat bietet keinen Support auf Deutsch oder Niederländisch",
    ],
    forWhoTitle: "Wer sollte was wählen?",
    forWhoUs: [
      "Sie möchten Ihre WhatsApp-Gespräche automatisieren",
      "Sie erhalten Sprachnachrichten und Fotos von Kunden",
      "Sie zielen auf deutschsprachige oder Benelux-Märkte",
      "Sie möchten KI, die den Kontext jedes Kunden versteht",
    ],
    forWhoThem: [
      "Ihre Priorität sind Instagram DMs oder Facebook Messenger",
      "Sie betreiben Social E-Commerce (Instagram Shopping)",
      "Sie benötigen kein WhatsApp",
      "Sie sind mit einfachen vorgefertigten Flows zufrieden",
    ],
    ctaTitle: "Ist WhatsApp Ihr Hauptkanal?",
    ctaSubtitle: "Kostenloses 30-Min-Audit — wir zeigen Ihnen den konkreten Unterschied mit einem dedizierten WhatsApp KI-Agent.",
    faqTitle: "Veelgestelde vragen",
    faqs: [],
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
  },
  nl: {
    back: "← Alle vergelijkingen",
    badge: "Onafhankelijke vergelijking 2025",
    h1: "AgenticWhatsup vs ManyChat",
    subtitle: "ManyChat leidt bij chatbots voor Instagram en Facebook. Maar voor WhatsApp met echte AI — dat is een ander verhaal. Hier is waarom.",
    verdict: "Ons oordeel",
    verdictText: "ManyChat is uitstekend voor sociale campagnes op Meta. Als het gaat om WhatsApp Business met conversationele AI, heeft AgenticWhatsup geen serieuze concurrent.",
    tableTitle: "Functionele vergelijking",
    rows: [
      { feature: "WhatsApp Business specialist", us: true, them: false, themNote: "Instagram/Messenger eerst" },
      { feature: "Conversationele AI (LLM)", us: true, them: false, themNote: "Alleen statische flows" },
      { feature: "Begrip van spraakberichten", us: true, them: false },
      { feature: "Afbeeldingsanalyse", us: true, them: false },
      { feature: "Gespreksgeheugen", us: true, them: false, themNote: "Beperkte variabelen" },
      { feature: "Training op uw gegevens", us: true, them: false },
      { feature: "Instagram / Facebook Messenger", us: false, them: true },
      { feature: "WhatsApp broadcast-campagnes", us: true, them: true },
      { feature: "Shopify / WooCommerce integratie", us: true, them: true },
      { feature: "Merk-AI-persoonlijkheid", us: true, them: false },
      { feature: "FR / DE / NL support", us: true, them: false, themNote: "Alleen Engels" },
      { feature: "Implementatie", us: "14 dagen", them: "Enkele dagen (beperkte flows)" },
      { feature: "Klant-ROI", us: "8× in 90 dagen", them: "Variabel per gebruik" },
    ],
    whyTitle: "Waarom onze klanten AgenticWhatsup kozen boven ManyChat",
    why: [
      "ManyChat gebruikt statische flows — AgenticWhatsup past zich aan elk gesprek aan in realtime",
      "ManyChat begrijpt geen WhatsApp-spraakberichten — een groot probleem voor Benelux-markten",
      "ManyChat kan geen afbeelding analyseren — AgenticWhatsup reageert op basis van een klantfoto",
      "ManyChat is Instagram-gericht — onze klanten willen professioneel WhatsApp",
      "ManyChat's AI is eenvoudig — AgenticWhatsup gebruikt geavanceerde LLMs (GPT-4, Claude)",
      "ManyChat biedt geen ondersteuning in Frans, Duits of Nederlands",
    ],
    forWhoTitle: "Wie moet wat kiezen?",
    forWhoUs: [
      "U wilt uw WhatsApp-gesprekken automatiseren",
      "U ontvangt spraakberichten en foto's van klanten",
      "U richt zich op Franstalige, Duitstalige of Nederlandstalige markten",
      "U wilt AI die de context van elke klant begrijpt",
    ],
    forWhoThem: [
      "Uw prioriteit zijn Instagram DMs of Facebook Messenger",
      "U doet aan social e-commerce (Instagram Shopping)",
      "U heeft WhatsApp niet nodig",
      "U bent tevreden met eenvoudige vooraf gebouwde flows",
    ],
    ctaTitle: "Is WhatsApp uw prioriteitskanaal?",
    ctaSubtitle: "Gratis audit van 30 min — we tonen u het concrete verschil met een dedicated WhatsApp AI-agent.",
    faqTitle: "Questions fréquentes",
    faqs: [],
    ctaPrimary: "Afspraak maken — Gratis audit",
    ctaSecondary: "Schrijf op WhatsApp",
  },
};

export async function generateStaticParams() {
  return ["fr", "en", "de", "nl"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.fr;
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/comparatif/vs-manychat`;
  const ogLocale = locale === "de" ? "de_DE" : locale === "nl" ? "nl_NL" : locale === "en" ? "en_US" : "fr_FR";
  return {
    title: m.title,
    description: m.description,
    keywords: "AgenticWhatsup vs ManyChat, comparatif ManyChat WhatsApp IA, ManyChat alternative WhatsApp, meilleur chatbot WhatsApp 2025",
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: "https://agentic-whatsup.com/fr/comparatif/vs-manychat",
        en: "https://agentic-whatsup.com/en/comparatif/vs-manychat",
        de: "https://agentic-whatsup.com/de/comparatif/vs-manychat",
        nl: "https://agentic-whatsup.com/nl/comparatif/vs-manychat",
        "x-default": "https://agentic-whatsup.com/fr/comparatif/vs-manychat",
      },
    },
    openGraph: {
      type: "article",
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

const waNumber = "41799394222";

export default async function VsManyChatPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;
  const m = meta[locale] ?? meta.fr;
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/comparatif/vs-manychat`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    "headline": m.title,
    "description": m.description,
    "url": canonicalUrl,
    "inLanguage": locale,
    "author": {
      "@type": "Organization",
      "@id": "https://agentic-whatsup.com/#organization",
      "name": "AgenticWhatsup",
      "url": "https://agentic-whatsup.com",
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://agentic-whatsup.com/#organization",
      "name": "AgenticWhatsup",
      "url": "https://agentic-whatsup.com",
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
    "about": [
      { "@type": "SoftwareApplication", "name": "AgenticWhatsup", "url": "https://agentic-whatsup.com" },
      { "@type": "SoftwareApplication", "name": "ManyChat", "url": "https://manychat.com" },
    ],
  };

  const comparisonItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": c.tableTitle,
    "itemListElement": c.rows.map((row, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": row.feature,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
      { "@type": "ListItem", "position": 2, "name": locale === "fr" ? "Comparatif" : "Comparison", "item": `https://agentic-whatsup.com/${locale}/comparatif` },
      { "@type": "ListItem", "position": 3, "name": "AgenticWhatsup vs ManyChat", "item": canonicalUrl },
    ],
  };


  const faqLd = c.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonItemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Link href={`/${locale}/comparatif`} className="inline-flex items-center gap-1 text-slate-400 hover:text-wa text-sm mb-10 transition-colors">
        ← {c.back.replace("← ", "")}
      </Link>

      <div className="text-center mb-14">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">{c.badge}</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>{c.h1}</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">{c.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={calLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            <Calendar size={16} /> {c.ctaPrimary}
          </a>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            <MessageCircle size={16} className="text-wa" /> {c.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="bg-wa/5 border border-wa/20 rounded-2xl p-6 mb-12">
        <h2 className="text-wa font-bold mb-2 text-sm uppercase tracking-wider">{c.verdict}</h2>
        <p className="text-slate-300 leading-relaxed">{c.verdictText}</p>
      </div>

      <div className="mb-12">
        <h2 className="text-white font-extrabold text-xl mb-6" style={{ fontFamily: "Onest, sans-serif" }}>{c.tableTitle}</h2>
        <div className="bg-surface border border-surface-2 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-surface-2 px-5 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <div>Fonctionnalité</div>
            <div className="text-center text-wa">AgenticWhatsup ✓</div>
            <div className="text-center">ManyChat</div>
          </div>
          {c.rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 px-5 py-3.5 text-sm border-t border-surface-2 ${i % 2 === 0 ? "" : "bg-surface-2/30"}`}>
              <div className="text-slate-300 flex items-center">{row.feature}</div>
              <div className="text-center flex flex-col items-center justify-center">
                {typeof row.us === "boolean" ? (row.us ? <CheckCircle size={18} className="text-wa" /> : <XCircle size={18} className="text-slate-600" />) : <span className="text-wa font-semibold text-xs">{row.us}</span>}
                {row.usNote && <span className="text-slate-500 text-xs mt-0.5">{row.usNote}</span>}
              </div>
              <div className="text-center flex flex-col items-center justify-center">
                {typeof row.them === "boolean" ? (row.them ? <CheckCircle size={18} className="text-slate-400" /> : <XCircle size={18} className="text-red-500/60" />) : <span className="text-slate-400 text-xs">{row.them}</span>}
                {row.themNote && <span className="text-slate-500 text-xs mt-0.5">{row.themNote}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-white font-extrabold text-xl mb-5" style={{ fontFamily: "Onest, sans-serif" }}>{c.whyTitle}</h2>
        <div className="space-y-3">
          {c.why.map((w, i) => (
            <div key={i} className="flex items-start gap-3 bg-surface border border-surface-2 rounded-xl p-4">
              <CheckCircle size={16} className="text-wa mt-0.5 shrink-0" />
              <p className="text-slate-300 text-sm">{w}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
        <div className="bg-wa/5 border border-wa/20 rounded-2xl p-6">
          <h3 className="text-wa font-bold mb-4 text-sm">✅ AgenticWhatsup si…</h3>
          <ul className="space-y-2">{c.forWhoUs.map((item, i) => (<li key={i} className="flex items-start gap-2 text-slate-300 text-sm"><CheckCircle size={14} className="text-wa mt-0.5 shrink-0" /> {item}</li>))}</ul>
        </div>
        <div className="bg-surface border border-surface-2 rounded-2xl p-6">
          <h3 className="text-slate-400 font-bold mb-4 text-sm">⚠️ ManyChat si…</h3>
          <ul className="space-y-2">{c.forWhoThem.map((item, i) => (<li key={i} className="flex items-start gap-2 text-slate-400 text-sm"><span className="shrink-0 mt-0.5">→</span> {item}</li>))}</ul>
        </div>
      </div>


      {c.faqs.length > 0 && (
        <div className="mb-14">
          <h2 className="text-white font-extrabold text-xl mb-5" style={{ fontFamily: "Onest, sans-serif" }}>{c.faqTitle}</h2>
          <FAQAccordion items={c.faqs.map((f) => ({ question: f.q, answer: f.a }))} emitSchema={false} />
        </div>
      )}

      <div className="bg-wa/5 border border-wa/20 rounded-2xl p-10 text-center">
        <h2 className="text-white font-extrabold text-2xl mb-2" style={{ fontFamily: "Onest, sans-serif" }}>{c.ctaTitle}</h2>
        <p className="text-slate-400 text-sm mb-6">{c.ctaSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href={calLink} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            <Calendar size={16} /> {c.ctaPrimary}
          </a>
          <a href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
            <MessageCircle size={16} className="text-wa" /> {c.ctaSecondary}
          </a>
        </div>
      </div>
    </div>
  );
}
