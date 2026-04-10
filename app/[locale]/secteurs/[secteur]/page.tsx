import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";
import { SECTEURS, getSecteur, getSecteurTranslation } from "@/lib/secteurs";

const backLabels: Record<string, string> = {
  fr: "← Tous les secteurs",
  en: "← All industries",
  de: "← Alle Branchen",
  nl: "← Alle sectoren",
};

const ctaLabels: Record<string, { primary: string; secondary: string; badge: string }> = {
  fr: { primary: "Audit gratuit — 30 min", secondary: "Écrire sur WhatsApp", badge: "Prêt en 2 semaines" },
  en: { primary: "Free audit — 30 min", secondary: "Write on WhatsApp", badge: "Ready in 2 weeks" },
  de: { primary: "Kostenloses Audit — 30 Min", secondary: "Auf WhatsApp schreiben", badge: "Bereit in 2 Wochen" },
  nl: { primary: "Gratis audit — 30 min", secondary: "Schrijf op WhatsApp", badge: "Klaar in 2 weken" },
};

const sectionLabels: Record<string, { useCases: string; painPoint: string; solution: string; stats: string }> = {
  fr: { useCases: "Cas d'usage", painPoint: "Le problème que vous connaissez", solution: "Comment l'agent IA résout ça", stats: "Résultats mesurés" },
  en: { useCases: "Use cases", painPoint: "The problem you know", solution: "How the AI agent solves it", stats: "Measured results" },
  de: { useCases: "Anwendungsfälle", painPoint: "Das Problem, das Sie kennen", solution: "Wie der KI-Agent das löst", stats: "Gemessene Ergebnisse" },
  nl: { useCases: "Gebruiksgevallen", painPoint: "Het probleem dat u kent", solution: "Hoe de AI-agent het oplost", stats: "Gemeten resultaten" },
};

export async function generateStaticParams() {
  const locales = ["fr", "en", "de", "nl"];
  return locales.flatMap((locale) =>
    SECTEURS.map((s) => ({ locale, secteur: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; secteur: string }>;
}): Promise<Metadata> {
  const { locale, secteur } = await params;
  const t = getSecteurTranslation(secteur, locale);
  if (!t) return {};

  const canonicalLocale = locale;
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      languages: {
        fr: `/fr/secteurs/${secteur}`,
        en: `/en/secteurs/${secteur}`,
        de: `/de/secteurs/${secteur}`,
        nl: `/nl/secteurs/${secteur}`,
      },
      canonical: `https://agentic-whatsup.com/${canonicalLocale}/secteurs/${secteur}`,
    },
  };
}

export default async function SecteurPage({
  params,
}: {
  params: Promise<{ locale: string; secteur: string }>;
}) {
  const { locale, secteur: secteurSlug } = await params;

  const secteurData = getSecteur(secteurSlug);
  const t = getSecteurTranslation(secteurSlug, locale);

  if (!secteurData || !t) notFound();

  const labels = sectionLabels[locale] ?? sectionLabels.fr;
  const cta = ctaLabels[locale] ?? ctaLabels.fr;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: t.metaTitle,
    description: t.metaDescription,
    url: `https://agentic-whatsup.com/${locale}/secteurs/${secteurSlug}`,
    publisher: {
      "@type": "Organization",
      name: "AgenticWhatsup",
      url: "https://agentic-whatsup.com",
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back link */}
      <Link
        href={`/${locale}/secteurs`}
        className="inline-flex items-center gap-2 text-slate-400 hover:text-wa transition-colors text-sm mb-10"
      >
        <ArrowLeft size={16} />
        {backLabels[locale] ?? backLabels.fr}
      </Link>

      {/* Hero */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-6xl">{secteurData.icon}</span>
        <div>
          <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-2">
            WhatsApp AI
          </span>
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            {t.title}
          </h1>
        </div>
      </div>

      <p className="text-slate-300 text-lg mb-12 leading-relaxed">{t.subtitle}</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {secteurData.stats.map((stat, i) => (
          <div
            key={i}
            className="bg-surface border border-surface-2 rounded-xl p-4 text-center"
          >
            <div className="text-wa font-extrabold text-2xl sm:text-3xl mb-1">{stat.value}</div>
            <div className="text-slate-400 text-xs">
              {stat.label[locale] ?? stat.label["fr"]}
            </div>
          </div>
        ))}
      </div>

      {/* Use cases */}
      <div className="mb-10">
        <h2
          className="text-white font-bold text-xl mb-4"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {labels.useCases}
        </h2>
        <ul className="space-y-3">
          {t.useCases.map((uc, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
              <CheckCircle size={18} className="text-wa mt-0.5 shrink-0" />
              <span>{uc}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pain point + Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
          <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider opacity-70">
            {labels.painPoint}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">{t.painPoint}</p>
        </div>
        <div className="bg-wa/5 border border-wa/20 rounded-2xl p-6">
          <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wider opacity-70">
            {labels.solution}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">{t.solution}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-wa/5 border border-wa/20 rounded-2xl p-8 text-center">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {cta.badge}
        </span>
        <h2
          className="text-white font-extrabold text-2xl mb-2"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t.ctaText}
        </h2>
        <p className="text-slate-400 text-sm mb-6">{t.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors"
          >
            {cta.primary}
          </Link>
          <a
            href="https://wa.me/41799394222"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors"
          >
            <MessageCircle size={16} className="text-wa" />
            {cta.secondary}
          </a>
        </div>
      </div>
    </div>
  );
}
