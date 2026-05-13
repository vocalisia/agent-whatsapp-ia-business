import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { buildAlternates } from "@/lib/seo";

const PERSON_URL = "https://agentic-whatsup.com/fr/auteur/laurent-duplat";

const meta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Laurent Duplat — Auteur & expert IA conversationnelle WhatsApp",
    description:
      "Laurent Duplat, directeur publication AgenticWhatsup. Expert agent IA WhatsApp depuis 2022, conformité RGPD, IA multimodale (Vision + Audio) appliquée au B2B et e-commerce.",
  },
  en: {
    title: "Laurent Duplat — Author & WhatsApp conversational AI expert",
    description:
      "Laurent Duplat, AgenticWhatsup publication director. WhatsApp AI agent expert since 2022, GDPR compliance, multimodal AI (Vision + Audio) applied to B2B and e-commerce.",
  },
  de: {
    title: "Laurent Duplat — Autor & Experte für WhatsApp Conversational AI",
    description:
      "Laurent Duplat, Publikationsdirektor von AgenticWhatsup. Experte für WhatsApp KI-Agenten seit 2022, DSGVO-Compliance, multimodale KI (Vision + Audio) für B2B und E-Commerce.",
  },
  nl: {
    title: "Laurent Duplat — Auteur & expert WhatsApp conversational AI",
    description:
      "Laurent Duplat, publicatiedirecteur van AgenticWhatsup. Expert WhatsApp AI-agent sinds 2022, AVG-conformiteit, multimodale AI (Vision + Audio) voor B2B en e-commerce.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.fr;
  return {
    title: m.title,
    description: m.description,
    alternates: buildAlternates(locale, "/auteur/laurent-duplat"),
    openGraph: {
      title: m.title,
      description: m.description,
      type: "profile",
      url: `https://agentic-whatsup.com/${locale}/auteur/laurent-duplat`,
    },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${PERSON_URL}#person`,
  name: "Laurent Duplat",
  alternateName: "L. Duplat",
  url: PERSON_URL,
  image: {
    "@type": "ImageObject",
    url: "https://agentic-whatsup.com/og-image.jpg",
    width: 1200,
    height: 630,
  },
  jobTitle: "Directeur publication, expert IA conversationnelle WhatsApp",
  description:
    "Auteur et expert en agents IA conversationnels appliqués à WhatsApp Business. Spécialiste IA multimodale (Vision + Audio), conformité RGPD et architectures LLM en environnement EU. Plus de 25 publications de référence en FR, EN, DE, NL.",
  email: "contact@agentic-whatsup.com",
  worksFor: {
    "@type": "Organization",
    "@id": "https://agentic-whatsup.com/#organization",
    name: "AgenticWhatsup",
    url: "https://agentic-whatsup.com",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Conversational AI Expert / Technical Author",
    occupationLocation: {
      "@type": "Country",
      name: "Switzerland",
    },
    skills: [
      "WhatsApp Business Cloud API",
      "Multimodal LLM architecture (GPT-4o, Claude 3.5, Gemini 2.0)",
      "Whisper / GPT-4o Audio transcription",
      "GPT-4o Vision / Claude Vision integration",
      "GDPR/RGPD compliance for AI systems",
      "CRM integration (HubSpot, Pipedrive, Salesforce, Make.com)",
    ],
  },
  knowsAbout: [
    "WhatsApp Business API",
    "WhatsApp Cloud API",
    "Conversational AI",
    "Large Language Models",
    "Multimodal AI",
    "GPT-4o Vision",
    "Claude 3.5 Sonnet Vision",
    "Whisper transcription",
    "GDPR / RGPD compliance",
    "AI Act (EU) compliance",
    "Lead qualification automation",
    "CRM integration",
    "WhatsApp marketing automation",
    "B2B sales automation",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "French", alternateName: "fr" },
    { "@type": "Language", name: "English", alternateName: "en" },
  ],
  alumniOf: {
    "@type": "Organization",
    name: "VAULT 369 LTD",
  },
  nationality: {
    "@type": "Country",
    name: "France",
  },
  sameAs: [
    "https://www.linkedin.com/in/richard-cohen-vault369/",
    "https://agentic-whatsup.com",
    "https://vocalis.pro",
  ],
};

const labels: Record<string, { back: string; about: string; expertise: string; topics: string; contact: string; auditCta: string; bioP1: string; bioP2: string; bioP3: string; topicsList: string[] }> = {
  fr: {
    back: "Retour au blog",
    about: "À propos",
    expertise: "Expertise",
    topics: "Sujets traités",
    contact: "Me contacter",
    auditCta: "Réservez un audit gratuit 30 min",
    bioP1:
      "Laurent Duplat est directeur publication d'AgenticWhatsup et auteur de plus de 25 articles consacrés à l'agent IA WhatsApp Business. Depuis 2022, il accompagne PME, e-commerçants et professions libérales dans le déploiement d'agents conversationnels IA capables de comprendre les messages vocaux et d'analyser les photos envoyées par les clients sur WhatsApp.",
    bioP2:
      "Son approche se concentre sur trois piliers : conformité RGPD native (hébergement Union Européenne, chiffrement AES-256, DPA fourni), architecture LLM multimodale (Vision IA + transcription audio), et intégration profonde avec les outils existants (HubSpot, Salesforce, Shopify, Cal.com, Stripe).",
    bioP3:
      "Auteur de référence sur le sujet en français, allemand et néerlandais, il publie chaque semaine des analyses techniques, comparatifs sectoriels et études de cas vérifiables.",
    topicsList: [
      "Architecture technique des agents IA WhatsApp Business",
      "WhatsApp Cloud API et Meta Business Manager",
      "Conformité RGPD et hébergement EU",
      "IA multimodale : Vision + Audio sur WhatsApp",
      "Qualification automatique de leads",
      "Intégration CRM bidirectionnelle",
      "Comparatifs sectoriels (immobilier, e-commerce, BTP, santé)",
      "Mesure du ROI agent IA WhatsApp",
    ],
  },
  en: {
    back: "Back to blog",
    about: "About",
    expertise: "Expertise",
    topics: "Topics covered",
    contact: "Contact me",
    auditCta: "Book a free 30-min audit",
    bioP1:
      "Laurent Duplat is publication director at AgenticWhatsup and author of 25+ articles dedicated to WhatsApp Business AI agents. Since 2022 he has been helping SMEs, e-commerce stores and professional services deploy conversational AI agents capable of understanding voice messages and analyzing photos sent by customers on WhatsApp.",
    bioP2:
      "His approach centers on three pillars: native GDPR compliance (EU hosting, AES-256 encryption, DPA provided), multimodal LLM architecture (Vision AI + audio transcription), and deep integration with existing tools (HubSpot, Salesforce, Shopify, Cal.com, Stripe).",
    bioP3:
      "Reference author on the topic in French, German and Dutch, he publishes weekly technical analyses, vertical comparisons and verifiable case studies.",
    topicsList: [
      "Technical architecture of WhatsApp Business AI agents",
      "WhatsApp Cloud API and Meta Business Manager",
      "GDPR compliance and EU hosting",
      "Multimodal AI: Vision + Audio on WhatsApp",
      "Automatic lead qualification",
      "Bidirectional CRM integration",
      "Vertical comparisons (real estate, e-commerce, construction, health)",
      "Measuring WhatsApp AI agent ROI",
    ],
  },
  de: {
    back: "Zurück zum Blog",
    about: "Über",
    expertise: "Expertise",
    topics: "Behandelte Themen",
    contact: "Kontakt aufnehmen",
    auditCta: "Kostenloses 30-Min-Audit buchen",
    bioP1:
      "Laurent Duplat ist Publikationsdirektor bei AgenticWhatsup und Autor von über 25 Artikeln zu WhatsApp Business KI-Agenten. Seit 2022 unterstützt er KMU, E-Commerce-Händler und freie Berufe bei der Implementierung von Conversational-AI-Agenten, die Sprachnachrichten verstehen und Fotos auf WhatsApp analysieren können.",
    bioP2:
      "Sein Ansatz basiert auf drei Säulen: native DSGVO-Konformität (EU-Hosting, AES-256-Verschlüsselung, AVV bereitgestellt), multimodale LLM-Architektur (Vision-KI + Audiotranskription) und tiefe Integration mit bestehenden Tools (HubSpot, Salesforce, Shopify, Cal.com, Stripe).",
    bioP3:
      "Referenz-Autor zum Thema auf Französisch, Deutsch und Niederländisch, veröffentlicht er wöchentlich technische Analysen, Branchenvergleiche und überprüfbare Fallstudien.",
    topicsList: [
      "Technische Architektur von WhatsApp Business KI-Agenten",
      "WhatsApp Cloud API und Meta Business Manager",
      "DSGVO-Konformität und EU-Hosting",
      "Multimodale KI: Vision + Audio auf WhatsApp",
      "Automatische Lead-Qualifizierung",
      "Bidirektionale CRM-Integration",
      "Branchenvergleiche (Immobilien, E-Commerce, Bau, Gesundheit)",
      "ROI-Messung für WhatsApp KI-Agenten",
    ],
  },
  nl: {
    back: "Terug naar blog",
    about: "Over",
    expertise: "Expertise",
    topics: "Behandelde onderwerpen",
    contact: "Contact opnemen",
    auditCta: "Boek een gratis 30-min audit",
    bioP1:
      "Laurent Duplat is publicatiedirecteur bij AgenticWhatsup en auteur van meer dan 25 artikelen over WhatsApp Business AI-agenten. Sinds 2022 helpt hij MKB, e-commerce shops en vrije beroepen bij het implementeren van conversational AI-agenten die spraakberichten kunnen begrijpen en foto's op WhatsApp kunnen analyseren.",
    bioP2:
      "Zijn aanpak rust op drie pijlers: native AVG-conformiteit (EU-hosting, AES-256-encryptie, verwerkersovereenkomst geleverd), multimodale LLM-architectuur (Vision AI + audiotranscriptie) en diepe integratie met bestaande tools (HubSpot, Salesforce, Shopify, Cal.com, Stripe).",
    bioP3:
      "Referentie-auteur over het onderwerp in het Frans, Duits en Nederlands, publiceert hij wekelijks technische analyses, sectorvergelijkingen en verifieerbare case studies.",
    topicsList: [
      "Technische architectuur van WhatsApp Business AI-agenten",
      "WhatsApp Cloud API en Meta Business Manager",
      "AVG-conformiteit en EU-hosting",
      "Multimodale AI: Vision + Audio op WhatsApp",
      "Automatische leadkwalificatie",
      "Bidirectionele CRM-integratie",
      "Sectorvergelijkingen (vastgoed, e-commerce, bouw, gezondheidszorg)",
      "ROI-meting WhatsApp AI-agent",
    ],
  },
};

export default async function AuthorLaurentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const L = labels[locale] ?? labels.fr;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-2 text-slate-400 hover:text-wa transition-colors text-sm mb-8"
      >
        <ArrowLeft size={16} />
        {L.back}
      </Link>

      {/* Header */}
      <div className="flex items-start gap-6 mb-10">
        <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-2xl bg-gradient-to-br from-wa to-indigo-500 flex items-center justify-center text-white text-3xl sm:text-4xl font-extrabold border-2 border-surface-2">
          LD
        </div>
        <div>
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            Laurent Duplat
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mb-3">
            {locale === "fr"
              ? "Directeur publication & expert IA conversationnelle WhatsApp"
              : locale === "en"
              ? "Publication director & WhatsApp conversational AI expert"
              : locale === "de"
              ? "Publikationsdirektor & Experte für WhatsApp Conversational AI"
              : "Publicatiedirecteur & expert WhatsApp conversational AI"}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/richard-cohen-vault369/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-wa transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:contact@agentic-whatsup.com"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-wa transition-colors"
            >
              <Mail size={16} />
              contact@agentic-whatsup.com
            </a>
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
          {L.about}
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>{L.bioP1}</p>
          <p>{L.bioP2}</p>
          <p>{L.bioP3}</p>
        </div>
      </section>

      {/* Topics */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
          {L.topics}
        </h2>
        <ul className="space-y-2">
          {L.topicsList.map((topic, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-300">
              <span className="text-wa mt-1">•</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <div className="bg-wa/5 border border-wa/20 rounded-2xl p-8 text-center">
        <p
          className="text-white font-bold text-lg mb-4"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {L.auditCta}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors"
        >
          {L.contact}
        </Link>
      </div>
    </div>
  );
}
