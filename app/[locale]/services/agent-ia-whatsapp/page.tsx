import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTAButton from "@/components/shared/CTAButton";
import SectionTitle from "@/components/shared/SectionTitle";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/services/agent-ia-whatsapp`;
  const ogLocale = locale === "de" ? "de_DE" : locale === "nl" ? "nl_NL" : locale === "en" ? "en_US" : "fr_FR";
  return {
    title: t("agentIa.metaTitle"),
    description: t("agentIa.heroSubtitle"),
    keywords: "agent IA WhatsApp, chatbot WhatsApp intelligent, automatisation WhatsApp LLM, vision photos WhatsApp, transcription vocale WhatsApp",
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: "https://agentic-whatsup.com/fr/services/agent-ia-whatsapp",
        en: "https://agentic-whatsup.com/en/services/agent-ia-whatsapp",
        de: "https://agentic-whatsup.com/de/services/agent-ia-whatsapp",
        nl: "https://agentic-whatsup.com/nl/services/agent-ia-whatsapp",
        "x-default": "https://agentic-whatsup.com/fr/services/agent-ia-whatsapp",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      title: t("agentIa.metaTitle"),
      description: t("agentIa.heroSubtitle"),
      url: canonicalUrl,
      siteName: "AgenticWhatsup",
      images: [{ url: "https://agentic-whatsup.com/og-image.jpg", width: 1200, height: 630, alt: t("agentIa.metaTitle") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("agentIa.metaTitle"),
      description: t("agentIa.heroSubtitle"),
      images: ["https://agentic-whatsup.com/og-image.jpg"],
    },
  };
}

export default async function ServiceAgentIAWhatsAppPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "41799394222";
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  const faqItems = t.raw("agentIa.faqItems") as Array<{ question: string; answer: string }>;
  const relatedServicesData = t.raw("agentIa.relatedServices") as Array<{ title: string; description: string }>;
  const relatedServiceHrefs = [
    `/${locale}/services/crm-automation`,
    `/${locale}/services/campagnes-whatsapp`,
    `/${locale}/services/prise-de-rdv`,
  ];
  const relatedServices = relatedServicesData.map((s, i) => ({ ...s, href: relatedServiceHrefs[i] }));

  const canonicalUrl = `https://agentic-whatsup.com/${locale}/services/agent-ia-whatsapp`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    "name": t("agentIa.metaTitle"),
    "description": t("agentIa.heroSubtitle"),
    "url": canonicalUrl,
    "provider": {
      "@type": "Organization",
      "@id": "https://agentic-whatsup.com/#organization",
      "name": "AgenticWhatsup",
      "url": "https://agentic-whatsup.com",
    },
    "serviceType": "WhatsApp AI Automation",
    "areaServed": ["FR", "BE", "CH", "LU", "GB", "DE", "NL"],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": canonicalUrl,
    },
  };

  const faqJsonLd = faqItems.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": { "@type": "Answer", "text": item.answer },
        })),
      }
    : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
      { "@type": "ListItem", "position": 2, "name": locale === "fr" ? "Services" : "Services", "item": `https://agentic-whatsup.com/${locale}/services` },
      { "@type": "ListItem", "position": 3, "name": t("agentIa.metaTitle"), "item": canonicalUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-surface/20 to-bg pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-wa/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-6">
              <MessageCircle size={14} />
              {t("common.service")} — {t("agentIa.heroLabel")}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              {t("agentIa.heroTitle")}{" "}
              <span className="text-gradient-wa">{t("agentIa.heroHighlight")}</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              {t("agentIa.heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                href={calLink}
                label={t("common.auditGratuit")}
                variant="wa"
                icon={Calendar}
                size="lg"
                external
              />
              <CTAButton
                href={`https://wa.me/${waNumber}`}
                label={t("common.ecrireWhatsapp")}
                variant="outline"
                icon={MessageCircle}
                size="lg"
                external
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesGrid />

      {/* How it works */}
      <HowItWorks />

      {/* Content body — SEO text block */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
          {t("agentIa.contentBodyTitle")}
        </h2>
        <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed space-y-4">
          {t("agentIa.contentBody").split("\n\n").map((para, i) => (
            <p key={i} className="text-slate-300 leading-relaxed">{para}</p>
          ))}
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-4 sm:px-6 bg-surface/20">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            eyebrow={t("agentIa.pricingEyebrow")}
            title={t("agentIa.pricingTitle")}
            subtitle={t("agentIa.pricingSubtitle")}
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={calLink} label={t("common.auditGratuit")} variant="wa" icon={Calendar} size="lg" external />
            <CTAButton href={`/${locale}/contact`} label={t("agentIa.pricingRequestQuote")} variant="outline" size="lg" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <SectionTitle
          eyebrow={t("agentIa.faqEyebrow")}
          title={t("agentIa.faqTitle")}
        />
        <FAQAccordion items={faqItems} emitSchema={false} />
      </section>

      {/* Related services */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-surface-2">
        <SectionTitle
          eyebrow={t("agentIa.relatedEyebrow")}
          title={t("agentIa.relatedTitle")}
          centered={false}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedServices.map((s) => (
            <Link key={s.title} href={s.href} className="bg-surface rounded-xl p-6 border border-surface-2 hover:border-wa/50 transition-all duration-300 group">
              <h3 className="font-semibold text-white mb-2 group-hover:text-wa transition-colors">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.description}</p>
              <span className="flex items-center gap-1 text-wa text-sm font-medium">{t("agentIa.relatedLearnMore")} <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wa/10 via-surface to-indigo-500/10 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {t("agentIa.finalCtaTitle")}
          </h2>
          <p className="text-slate-400 text-lg mb-8">{t("agentIa.finalCtaSubtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={calLink} label={t("common.auditGratuit")} variant="wa" icon={Calendar} size="lg" external />
            <CTAButton href={`https://wa.me/${waNumber}`} label={t("common.ecrireWhatsapp")} variant="outline" icon={MessageCircle} size="lg" external />
          </div>
        </div>
      </section>
    </>
  );
}
