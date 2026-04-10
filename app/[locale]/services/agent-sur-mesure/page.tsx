import type { Metadata } from "next";
import { Calendar, CheckCircle, MessageCircle, ArrowRight } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "Agent IA WhatsApp sur-mesure — Développé pour votre métier | AgenticWhatsup", description: "Un agent IA WhatsApp entièrement personnalisé pour votre entreprise : formation sur vos données, connexion à vos APIs, personnalité de marque. Déployé en 14 jours." },
  en: { title: "Custom WhatsApp AI Agent — Built for your business | AgenticWhatsup", description: "A fully custom WhatsApp AI agent for your business: trained on your data, connected to your APIs, with your brand voice. Deployed in 14 days." },
  de: { title: "Maßgeschneiderter WhatsApp KI-Agent — Für Ihr Unternehmen entwickelt | AgenticWhatsup", description: "Ein vollständig individueller WhatsApp KI-Agent für Ihr Unternehmen: auf Ihren Daten trainiert, mit Ihren APIs verbunden, in Ihrer Markensprache. In 14 Tagen bereit." },
  nl: { title: "Maatwerk WhatsApp AI-agent — Gebouwd voor uw bedrijf | AgenticWhatsup", description: "Een volledig op maat gemaakte WhatsApp AI-agent voor uw bedrijf: getraind op uw gegevens, verbonden met uw API's, in uw merkstem. In 14 dagen live." },
};

const t: Record<string, {
  badge: string; h1: string; highlight: string; subtitle: string;
  stats: Array<{ value: string; label: string }>;
  featuresTitle: string; features: Array<{ icon: string; title: string; desc: string }>;
  processTitle: string; process: Array<{ step: string; title: string; desc: string }>;
  forWhoTitle: string; forWho: string[];
  ctaTitle: string; ctaSubtitle: string; ctaBadge: string; ctaPrimary: string; ctaSecondary: string;
}> = {
  fr: {
    badge: "Solution entreprise",
    h1: "Agent IA WhatsApp",
    highlight: "entièrement sur-mesure",
    subtitle: "Pour les entreprises avec des processus complexes ou des volumes élevés. On construit un agent qui parle votre langage, connaît vos produits et s'intègre à vos systèmes.",
    stats: [
      { value: "14j", label: "délai de déploiement" },
      { value: "100%", label: "adapté à votre métier" },
      { value: "1", label: "interlocuteur dédié" },
    ],
    featuresTitle: "Ce qu'on construit pour vous",
    features: [
      { icon: "🧠", title: "Formé sur vos données", desc: "L'agent apprend de vos catalogues, FAQ, scripts de vente et historiques de conversations." },
      { icon: "🔗", title: "Connexions API propriétaires", desc: "Intégration à vos systèmes internes : ERP, backoffice, base clients, outils métier." },
      { icon: "🎨", title: "Personnalité de marque", desc: "Ton, style, vocabulaire et valeurs de votre marque. Vos clients ne se doutent de rien." },
      { icon: "🌍", title: "Multilingue avancé", desc: "Détection automatique de la langue du client et réponse dans sa langue maternelle." },
      { icon: "📊", title: "Dashboard propriétaire", desc: "Tableau de bord sur-mesure avec vos KPIs métier : taux de conversion, CSAT, volumes." },
      { icon: "🔄", title: "Évolution continue", desc: "L'agent s'améliore avec le temps grâce aux feedbacks et aux nouvelles données." },
    ],
    processTitle: "Notre processus sur-mesure",
    process: [
      { step: "01", title: "Discovery (2-3 jours)", desc: "On comprend vos processus, vos outils, vos cas d'usage prioritaires et vos contraintes techniques." },
      { step: "02", title: "Architecture (3-5 jours)", desc: "On conçoit l'agent : flux de conversation, intégrations, base de connaissance, règles métier." },
      { step: "03", title: "Build & formation (5-7 jours)", desc: "On développe et entraîne l'agent sur vos données. Tests internes approfondis." },
      { step: "04", title: "Pilote & ajustements", desc: "Lancement sur un segment restreint, mesure des performances, itérations rapides." },
      { step: "05", title: "Déploiement & suivi", desc: "Mise en production complète avec accompagnement et optimisation continue." },
    ],
    forWhoTitle: "Idéal pour",
    forWho: [
      "Entreprises traitant 500+ conversations/mois",
      "Secteurs avec catalogue produit complexe",
      "Besoins d'intégration à des systèmes internes",
      "Marques exigeantes sur la cohérence de ton",
      "Entreprises multi-langues ou multi-marchés",
      "Franchises et réseaux avec processus standardisés",
    ],
    ctaBadge: "Prêt en 14 jours",
    ctaTitle: "Parlons de votre projet",
    ctaSubtitle: "30 minutes pour comprendre vos besoins et vous proposer une architecture.",
    ctaPrimary: "Prendre RDV — Audit gratuit",
    ctaSecondary: "Écrire sur WhatsApp",
  },
  en: {
    badge: "Enterprise solution",
    h1: "WhatsApp AI Agent",
    highlight: "fully custom-built",
    subtitle: "For businesses with complex processes or high volumes. We build an agent that speaks your language, knows your products and integrates with your systems.",
    stats: [
      { value: "14d", label: "deployment timeline" },
      { value: "100%", label: "tailored to your business" },
      { value: "1", label: "dedicated contact" },
    ],
    featuresTitle: "What we build for you",
    features: [
      { icon: "🧠", title: "Trained on your data", desc: "The agent learns from your catalogues, FAQs, sales scripts and conversation history." },
      { icon: "🔗", title: "Proprietary API connections", desc: "Integration with your internal systems: ERP, back office, customer database, business tools." },
      { icon: "🎨", title: "Brand personality", desc: "Tone, style, vocabulary and values of your brand. Your customers won't notice the difference." },
      { icon: "🌍", title: "Advanced multilingual", desc: "Automatic language detection and response in the customer's native language." },
      { icon: "📊", title: "Custom dashboard", desc: "Bespoke dashboard with your business KPIs: conversion rate, CSAT, volumes." },
      { icon: "🔄", title: "Continuous improvement", desc: "The agent improves over time through feedback and new data." },
    ],
    processTitle: "Our custom process",
    process: [
      { step: "01", title: "Discovery (2-3 days)", desc: "We understand your processes, tools, priority use cases and technical constraints." },
      { step: "02", title: "Architecture (3-5 days)", desc: "We design the agent: conversation flows, integrations, knowledge base, business rules." },
      { step: "03", title: "Build & training (5-7 days)", desc: "We develop and train the agent on your data. In-depth internal testing." },
      { step: "04", title: "Pilot & adjustments", desc: "Launch on a small segment, performance measurement, rapid iterations." },
      { step: "05", title: "Deployment & monitoring", desc: "Full production launch with support and continuous optimisation." },
    ],
    forWhoTitle: "Ideal for",
    forWho: [
      "Companies handling 500+ conversations/month",
      "Sectors with complex product catalogues",
      "Integration needs with internal systems",
      "Brands demanding consistent tone of voice",
      "Multi-language or multi-market businesses",
      "Franchises and networks with standardised processes",
    ],
    ctaBadge: "Ready in 14 days",
    ctaTitle: "Let's talk about your project",
    ctaSubtitle: "30 minutes to understand your needs and propose an architecture.",
    ctaPrimary: "Book a call — Free audit",
    ctaSecondary: "Write on WhatsApp",
  },
  de: {
    badge: "Enterprise-Lösung",
    h1: "WhatsApp KI-Agent",
    highlight: "vollständig maßgeschneidert",
    subtitle: "Für Unternehmen mit komplexen Prozessen oder hohem Volumen. Wir bauen einen Agenten, der Ihre Sprache spricht, Ihre Produkte kennt und in Ihre Systeme integriert ist.",
    stats: [
      { value: "14T", label: "Bereitstellungszeit" },
      { value: "100%", label: "auf Ihr Unternehmen zugeschnitten" },
      { value: "1", label: "dedizierter Ansprechpartner" },
    ],
    featuresTitle: "Was wir für Sie bauen",
    features: [
      { icon: "🧠", title: "Auf Ihren Daten trainiert", desc: "Der Agent lernt aus Ihren Katalogen, FAQs, Verkaufsskripten und Gesprächsverläufen." },
      { icon: "🔗", title: "Proprietäre API-Verbindungen", desc: "Integration in Ihre internen Systeme: ERP, Backoffice, Kundendatenbank, Geschäftstools." },
      { icon: "🎨", title: "Markenpersönlichkeit", desc: "Ton, Stil, Vokabular und Werte Ihrer Marke. Ihre Kunden werden nichts bemerken." },
      { icon: "🌍", title: "Erweitertes Mehrsprachigkeit", desc: "Automatische Spracherkennung und Antwort in der Muttersprache des Kunden." },
      { icon: "📊", title: "Individuelles Dashboard", desc: "Maßgeschneidertes Dashboard mit Ihren Geschäfts-KPIs: Konversionsrate, CSAT, Volumen." },
      { icon: "🔄", title: "Kontinuierliche Verbesserung", desc: "Der Agent verbessert sich mit der Zeit durch Feedback und neue Daten." },
    ],
    processTitle: "Unser individueller Prozess",
    process: [
      { step: "01", title: "Discovery (2-3 Tage)", desc: "Wir verstehen Ihre Prozesse, Tools, Prioritätsanwendungsfälle und technischen Einschränkungen." },
      { step: "02", title: "Architektur (3-5 Tage)", desc: "Wir gestalten den Agenten: Gesprächsflüsse, Integrationen, Wissensbasis, Geschäftsregeln." },
      { step: "03", title: "Build & Training (5-7 Tage)", desc: "Wir entwickeln und trainieren den Agenten auf Ihren Daten. Gründliche interne Tests." },
      { step: "04", title: "Pilot & Anpassungen", desc: "Start mit einem kleinen Segment, Leistungsmessung, schnelle Iterationen." },
      { step: "05", title: "Deployment & Monitoring", desc: "Vollständiger Produktionsstart mit Begleitung und kontinuierlicher Optimierung." },
    ],
    forWhoTitle: "Ideal für",
    forWho: [
      "Unternehmen mit 500+ Gesprächen/Monat",
      "Branchen mit komplexem Produktkatalog",
      "Integrationsbedarf in interne Systeme",
      "Marken mit hohen Anforderungen an Tonkonsistenz",
      "Mehrsprachige oder Multi-Markt-Unternehmen",
      "Franchises und Netzwerke mit standardisierten Prozessen",
    ],
    ctaBadge: "In 14 Tagen bereit",
    ctaTitle: "Lassen Sie uns über Ihr Projekt sprechen",
    ctaSubtitle: "30 Minuten, um Ihre Anforderungen zu verstehen und eine Architektur vorzuschlagen.",
    ctaPrimary: "Termin vereinbaren — Kostenloses Audit",
    ctaSecondary: "Auf WhatsApp schreiben",
  },
  nl: {
    badge: "Enterprise-oplossing",
    h1: "WhatsApp AI-agent",
    highlight: "volledig op maat gemaakt",
    subtitle: "Voor bedrijven met complexe processen of hoge volumes. We bouwen een agent die uw taal spreekt, uw producten kent en integreert met uw systemen.",
    stats: [
      { value: "14d", label: "implementatietijd" },
      { value: "100%", label: "afgestemd op uw bedrijf" },
      { value: "1", label: "vaste contactpersoon" },
    ],
    featuresTitle: "Wat we voor u bouwen",
    features: [
      { icon: "🧠", title: "Getraind op uw gegevens", desc: "De agent leert van uw catalogi, FAQ's, verkoopscripts en gespreksgeschiedenis." },
      { icon: "🔗", title: "Eigen API-verbindingen", desc: "Integratie met uw interne systemen: ERP, backoffice, klantendatabase, zakelijke tools." },
      { icon: "🎨", title: "Merkpersoonlijkheid", desc: "Toon, stijl, vocabulaire en waarden van uw merk. Uw klanten zullen het verschil niet merken." },
      { icon: "🌍", title: "Geavanceerd meertalig", desc: "Automatische taaldetectie en antwoord in de moedertaal van de klant." },
      { icon: "📊", title: "Eigen dashboard", desc: "Maatwerk dashboard met uw zakelijke KPI's: conversiepercentage, CSAT, volumes." },
      { icon: "🔄", title: "Continue verbetering", desc: "De agent verbetert in de loop van de tijd door feedback en nieuwe gegevens." },
    ],
    processTitle: "Ons maatwerk proces",
    process: [
      { step: "01", title: "Discovery (2-3 dagen)", desc: "We begrijpen uw processen, tools, prioritaire gebruiksscenario's en technische beperkingen." },
      { step: "02", title: "Architectuur (3-5 dagen)", desc: "We ontwerpen de agent: gespreksstromen, integraties, kennisbasis, bedrijfsregels." },
      { step: "03", title: "Bouwen & training (5-7 dagen)", desc: "We ontwikkelen en trainen de agent op uw gegevens. Grondige interne tests." },
      { step: "04", title: "Pilot & aanpassingen", desc: "Start met een klein segment, prestatiemeting, snelle iteraties." },
      { step: "05", title: "Implementatie & monitoring", desc: "Volledige productielancering met begeleiding en continue optimalisatie." },
    ],
    forWhoTitle: "Ideaal voor",
    forWho: [
      "Bedrijven met 500+ gesprekken/maand",
      "Sectoren met complexe productcatalogi",
      "Behoefte aan integratie met interne systemen",
      "Merken met hoge eisen aan toonconsis tentie",
      "Meertalige of multi-markt bedrijven",
      "Franchises en netwerken met gestandaardiseerde processen",
    ],
    ctaBadge: "Klaar in 14 dagen",
    ctaTitle: "Laten we over uw project praten",
    ctaSubtitle: "30 minuten om uw behoeften te begrijpen en een architectuur voor te stellen.",
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
  return {
    title: m.title,
    description: m.description,
    alternates: {
      languages: { fr: "/fr/services/agent-sur-mesure", en: "/en/services/agent-sur-mesure", de: "/de/services/agent-sur-mesure", nl: "/nl/services/agent-sur-mesure" },
      canonical: `https://agentic-whatsup.com/${locale}/services/agent-sur-mesure`,
    },
  };
}

const waNumber = "41799394222";

export default async function AgentSurMesurePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = t[locale] ?? t.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: (meta[locale] ?? meta.fr).title,
    description: (meta[locale] ?? meta.fr).description,
    url: `https://agentic-whatsup.com/${locale}/services/agent-sur-mesure`,
    provider: { "@type": "Organization", name: "AgenticWhatsup", url: "https://agentic-whatsup.com" },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-block bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full mb-4">{c.badge}</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: "Onest, sans-serif" }}>
          {c.h1} <span className="text-wa">{c.highlight}</span>
        </h1>
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

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-16">
        {c.stats.map((s, i) => (
          <div key={i} className="bg-surface border border-surface-2 rounded-2xl p-6 text-center">
            <div className="text-wa font-extrabold text-3xl mb-1">{s.value}</div>
            <div className="text-slate-400 text-xs">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-white font-extrabold text-2xl mb-8 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.featuresTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.features.map((f, i) => (
            <div key={i} className="bg-surface border border-surface-2 hover:border-wa/30 rounded-2xl p-6 transition-colors">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="mb-16">
        <h2 className="text-white font-extrabold text-2xl mb-8 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.processTitle}</h2>
        <div className="space-y-4">
          {c.process.map((p, i) => (
            <div key={i} className="flex gap-5 bg-surface border border-surface-2 rounded-2xl p-5 hover:border-wa/30 transition-colors">
              <div className="text-wa font-extrabold text-xl font-mono shrink-0 w-10">{p.step}</div>
              <div>
                <h3 className="text-white font-bold mb-1">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* For who */}
      <div className="mb-16">
        <h2 className="text-white font-extrabold text-2xl mb-6 text-center" style={{ fontFamily: "Onest, sans-serif" }}>{c.forWhoTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {c.forWho.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-surface border border-surface-2 rounded-xl p-4">
              <CheckCircle size={18} className="text-wa shrink-0" />
              <span className="text-slate-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-wa/5 border border-wa/20 rounded-2xl p-10 text-center">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">{c.ctaBadge}</span>
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
