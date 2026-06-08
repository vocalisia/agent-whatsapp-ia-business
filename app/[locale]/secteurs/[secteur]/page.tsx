import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";
import { SECTEURS, getSecteur, getSecteurTranslation } from "@/lib/secteurs";
import { getSecteurRich } from "@/lib/secteurs-rich";

const backLabels: Record<string, string> = {
  fr: "← Tous les secteurs",
  en: "← All industries",
  de: "← Alle Branchen",
  nl: "← Alle sectoren",
};

const ctaLabels: Record<string, { primary: string; secondary: string; badge: string }> = {
  fr: { primary: "Prendre RDV", secondary: "Écrire sur WhatsApp", badge: "Prêt en 2 semaines" },
  en: { primary: "Free audit — 30 min", secondary: "Write on WhatsApp", badge: "Ready in 2 weeks" },
  de: { primary: "Kostenloses Audit — 30 Min", secondary: "Auf WhatsApp schreiben", badge: "Bereit in 2 Wochen" },
  nl: { primary: "Gratis audit — 30 min", secondary: "Schrijf op WhatsApp", badge: "Klaar in 2 weken" },
};

const sectionLabels: Record<string, { useCases: string; painPoint: string; solution: string; stats: string; comparator: string; before: string; after: string; faq: string; readMore: string }> = {
  fr: { useCases: "Cas d'usage", painPoint: "Le problème que vous connaissez", solution: "Comment l'agent IA résout ça", stats: "Résultats mesurés", comparator: "Avant vs avec l'agent IA", before: "Avant", after: "Avec agent IA", faq: "Questions fréquentes", readMore: "Pour approfondir" },
  en: { useCases: "Use cases", painPoint: "The problem you know", solution: "How the AI agent solves it", stats: "Measured results", comparator: "Before vs with the AI agent", before: "Before", after: "With AI agent", faq: "Frequently asked questions", readMore: "Read more" },
  de: { useCases: "Anwendungsfälle", painPoint: "Das Problem, das Sie kennen", solution: "Wie der KI-Agent das löst", stats: "Gemessene Ergebnisse", comparator: "Vorher vs mit KI-Agent", before: "Vorher", after: "Mit KI-Agent", faq: "Häufige Fragen", readMore: "Mehr lesen" },
  nl: { useCases: "Gebruiksgevallen", painPoint: "Het probleem dat u kent", solution: "Hoe de AI-agent het oplost", stats: "Gemeten resultaten", comparator: "Voor vs met AI-agent", before: "Voor", after: "Met AI-agent", faq: "Veelgestelde vragen", readMore: "Meer lezen" },
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

  const canonicalUrl = `https://agentic-whatsup.com/${locale}/secteurs/${secteur}`;
  const ogLocale = locale === "de" ? "de_DE" : locale === "nl" ? "nl_NL" : locale === "en" ? "en_US" : "fr_FR";
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    keywords: `agent IA WhatsApp ${t.name}, automatisation WhatsApp ${t.name}, chatbot WhatsApp ${t.name}, agentic whatsup`,
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: `https://agentic-whatsup.com/fr/secteurs/${secteur}`,
        en: `https://agentic-whatsup.com/en/secteurs/${secteur}`,
        de: `https://agentic-whatsup.com/de/secteurs/${secteur}`,
        nl: `https://agentic-whatsup.com/nl/secteurs/${secteur}`,
        "x-default": `https://agentic-whatsup.com/fr/secteurs/${secteur}`,
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      title: t.metaTitle,
      description: t.metaDescription,
      url: canonicalUrl,
      siteName: "AgenticWhatsup",
      images: [{ url: "https://agentic-whatsup.com/og-image.jpg", width: 1200, height: 630, alt: t.metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
      images: ["https://agentic-whatsup.com/og-image.jpg"],
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
  const rich = getSecteurRich(secteurSlug, locale);

  const pageUrl = `https://agentic-whatsup.com/${locale}/secteurs/${secteurSlug}`;

  const baseJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: t.metaTitle,
    description: t.metaDescription,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      "@id": "https://agentic-whatsup.com/#organization",
      name: "AgenticWhatsup",
      url: "https://agentic-whatsup.com",
    },
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    "name": t.title,
    "description": t.metaDescription,
    "url": pageUrl,
    "provider": {
      "@type": "Organization",
      "@id": "https://agentic-whatsup.com/#organization",
      "name": "AgenticWhatsup",
      "url": "https://agentic-whatsup.com",
    },
    "audience": {
      "@type": "Audience",
      "audienceType": t.name,
    },
    "serviceType": "WhatsApp AI Automation",
    "areaServed": ["FR", "BE", "CH", "LU", "GB", "DE", "NL"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
      { "@type": "ListItem", "position": 2, "name": locale === "fr" ? "Secteurs" : locale === "de" ? "Branchen" : locale === "nl" ? "Sectoren" : "Industries", "item": `https://agentic-whatsup.com/${locale}/secteurs` },
      { "@type": "ListItem", "position": 3, "name": t.name, "item": pageUrl },
    ],
  };

  const faqJsonLd = rich?.faq && rich.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: rich.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      }
    : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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

      {/* RICH CONTENT BLOCK (only for secteurs with rich data) */}
      {rich && (
        <>
          {/* Intro paragraphs */}
          <div className="mb-12 space-y-4">
            {rich.intro.map((p, i) => (
              <p key={i} className="text-slate-300 text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Sections */}
          {rich.sections.map((section, i) => (
            <div key={i} className="mb-12">
              <h2
                className="text-white font-extrabold text-2xl mb-5"
                style={{ fontFamily: "Onest, sans-serif" }}
              >
                {section.heading}
              </h2>
              <div className="space-y-4 mb-5">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-slate-300 text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-3">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <CheckCircle size={18} className="text-wa mt-1 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Comparator table */}
          {rich.comparator && (
            <div className="mb-12">
              <h2
                className="text-white font-extrabold text-xl mb-5"
                style={{ fontFamily: "Onest, sans-serif" }}
              >
                {rich.comparator.title}
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-surface-2">
                <table className="w-full text-sm">
                  <thead className="bg-surface">
                    <tr>
                      <th className="text-left px-5 py-3 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                        Métrique
                      </th>
                      <th className="text-left px-5 py-3 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                        {labels.before}
                      </th>
                      <th className="text-left px-5 py-3 text-wa font-semibold text-xs uppercase tracking-wider">
                        {labels.after}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rich.comparator.rows.map((row, i) => (
                      <tr key={i} className="border-t border-surface-2">
                        <td className="px-5 py-3 text-slate-200 font-medium">{row.label}</td>
                        <td className="px-5 py-3 text-slate-400">{row.before}</td>
                        <td className="px-5 py-3 text-white font-semibold">{row.after}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* FAQ */}
          {rich.faq && rich.faq.length > 0 && (
            <div className="mb-12">
              <h2
                className="text-white font-extrabold text-2xl mb-5"
                style={{ fontFamily: "Onest, sans-serif" }}
              >
                {labels.faq}
              </h2>
              <div className="space-y-3">
                {rich.faq.map((item, i) => (
                  <details
                    key={i}
                    className="group bg-surface border border-surface-2 hover:border-wa/30 rounded-xl px-5 py-4 transition-colors"
                  >
                    <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                      <span className="text-white font-semibold text-sm sm:text-base">
                        {item.q}
                      </span>
                      <span className="text-wa text-xl leading-none shrink-0 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="text-slate-300 text-sm leading-relaxed mt-3">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Related internal links */}
          {rich.relatedLinks && rich.relatedLinks.length > 0 && (
            <div className="mb-12 bg-surface border border-surface-2 rounded-2xl p-6">
              <h3
                className="text-white font-bold text-lg mb-4"
                style={{ fontFamily: "Onest, sans-serif" }}
              >
                {labels.readMore}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {rich.relatedLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-wa hover:text-wa/80 text-sm leading-relaxed underline underline-offset-2 decoration-wa/30 hover:decoration-wa/60"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

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
        <p className="text-slate-400 text-sm mb-6">
          {rich?.closingPitch ?? t.subtitle}
        </p>
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
