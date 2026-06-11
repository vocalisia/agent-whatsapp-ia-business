import type { Metadata } from "next";
import Link from "next/link";
import { SECTEURS, getSecteurTranslation } from "@/lib/secteurs";

const metaTitles: Record<string, string> = {
  fr: "Secteurs — agent IA WhatsApp par industrie",
  en: "Industries — WhatsApp AI agent by industry",
  de: "Branchen — WhatsApp KI-Agent nach Branche",
  nl: "Sectoren — WhatsApp AI-agent per sector",
};

const metaDescriptions: Record<string, string> = {
  fr: "Découvrez comment l'agent IA WhatsApp transforme chaque secteur : immobilier, e-commerce, santé, restaurant, assurance et plus. Cas d'usage concrets et ROI mesurable.",
  en: "Discover how the WhatsApp AI agent transforms every industry: real estate, e-commerce, healthcare, restaurant, insurance and more. Concrete use cases and measurable ROI.",
  de: "Entdecken Sie, wie der WhatsApp KI-Agent jede Branche transformiert: Immobilien, E-Commerce, Gesundheit, Restaurant, Versicherung und mehr.",
  nl: "Ontdek hoe de WhatsApp AI-agent elke sector transformeert: vastgoed, e-commerce, zorg, restaurant, verzekering en meer. Concrete toepassingen en meetbare ROI.",
};

const headings: Record<string, { title: string; subtitle: string }> = {
  fr: { title: "Agent IA WhatsApp par secteur", subtitle: "Chaque secteur a ses propres défis. Notre agent IA s'adapte à votre métier pour automatiser ce qui vous coûte le plus de temps et d'argent." },
  en: { title: "WhatsApp AI Agent by industry", subtitle: "Every industry has its own challenges. Our AI agent adapts to your business to automate what costs you the most time and money." },
  de: { title: "WhatsApp KI-Agent nach Branche", subtitle: "Jede Branche hat ihre eigenen Herausforderungen. Unser KI-Agent passt sich Ihrem Unternehmen an." },
  nl: { title: "WhatsApp AI-agent per sector", subtitle: "Elke sector heeft zijn eigen uitdagingen. Onze AI-agent past zich aan uw bedrijf aan om te automatiseren wat u de meeste tijd en geld kost." },
};

export async function generateStaticParams() {
  return ["fr", "en", "de", "nl"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: metaTitles[locale] ?? metaTitles.fr,
    description: metaDescriptions[locale] ?? metaDescriptions.fr,
    alternates: {
      canonical: `https://agentic-whatsup.com/${locale}/secteurs`,
      languages: {
        fr: "https://agentic-whatsup.com/fr/secteurs",
        en: "https://agentic-whatsup.com/en/secteurs",
        de: "https://agentic-whatsup.com/de/secteurs",
        nl: "https://agentic-whatsup.com/nl/secteurs",
        "x-default": "https://agentic-whatsup.com/fr/secteurs",
      },
    },
  };
}

export default async function SecteursPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const heading = headings[locale] ?? headings.fr;

  const canonicalUrl = `https://agentic-whatsup.com/${locale}/secteurs`;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "name": heading.title,
        "url": canonicalUrl,
        "inLanguage": locale,
        "isPartOf": { "@id": "https://agentic-whatsup.com/#website" },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
          { "@type": "ListItem", "position": 2, "name": heading.title, "item": canonicalUrl },
        ],
      }) }} />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-14">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {locale === "nl" ? "Sectoren" : locale === "de" ? "Branchen" : locale === "en" ? "Industries" : "Secteurs"}
        </span>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {heading.title}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{heading.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SECTEURS.map((secteur) => {
          const t = getSecteurTranslation(secteur.slug, locale);
          if (!t) return null;
          const primaryStat = secteur.stats[0];
          const statLabel = primaryStat?.label[locale] ?? primaryStat?.label["fr"] ?? "";
          return (
            <Link
              key={secteur.slug}
              href={`/${locale}/secteurs/${secteur.slug}`}
              className="group bg-surface border border-surface-2 hover:border-wa/40 rounded-2xl p-6 transition-all hover:shadow-lg hover:shadow-wa/5"
            >
              <div className="text-4xl mb-4">{secteur.icon}</div>
              <h2 className="text-white font-bold text-xl mb-2 group-hover:text-wa transition-colors">
                {t.name}
              </h2>
              <p className="text-slate-400 text-sm mb-4 line-clamp-2">{t.subtitle}</p>
              {primaryStat && (
                <div className="flex items-baseline gap-2">
                  <span className="text-wa font-extrabold text-2xl">{primaryStat.value}</span>
                  <span className="text-slate-500 text-xs">{statLabel}</span>
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
    </>
  );
}
