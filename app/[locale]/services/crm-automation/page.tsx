import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Database, Webhook } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const canonicalUrl = `https://agentic-whatsup.com/${locale}/services/crm-automation`;
  const ogLocale = locale === "de" ? "de_DE" : locale === "nl" ? "nl_NL" : locale === "en" ? "en_US" : "fr_FR";
  return {
    title: t("crm.title"),
    description: t("crm.subtitle"),
    keywords: "CRM automation WhatsApp, synchroniser HubSpot WhatsApp IA, intégration CRM WhatsApp agent, Salesforce WhatsApp automatisation",
    robots: { index: true, follow: true },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        fr: "https://agentic-whatsup.com/fr/services/crm-automation",
        en: "https://agentic-whatsup.com/en/services/crm-automation",
        de: "https://agentic-whatsup.com/de/services/crm-automation",
        nl: "https://agentic-whatsup.com/nl/services/crm-automation",
        "x-default": "https://agentic-whatsup.com/fr/services/crm-automation",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale,
      title: t("crm.title"),
      description: t("crm.subtitle"),
      url: canonicalUrl,
      siteName: "AgenticWhatsup",
      images: [{ url: "https://agentic-whatsup.com/og-image.jpg", width: 1200, height: 630, alt: t("crm.title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("crm.title"),
      description: t("crm.subtitle"),
      images: ["https://agentic-whatsup.com/og-image.jpg"],
    },
  };
}

const CRM_STEP_ICONS = [MessageCircle, Webhook, Database];

export default async function CrmAutomationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const features = t.raw("crm.features") as string[];
  const integrations = t.raw("crm.integrations") as Array<{ name: string; desc: string }>;
  const steps = (t.raw("crm.steps") as Array<{ title: string; desc: string }>).map((s, i) => ({ ...s, icon: CRM_STEP_ICONS[i] }));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">
          {t("common.service")}
        </span>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("crm.title")}
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          {t("crm.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold transition-colors"
          >
            {t("common.auditGratuit")}
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/41799394222"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <MessageCircle size={16} />
            {t("common.ecrireWhatsapp")}
          </a>
        </div>
      </div>

      {/* How */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("crm.howTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="bg-surface border border-surface-2 rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-wa/10 border border-wa/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-wa text-sm font-bold">{i + 1}</span>
              </div>
              <Icon size={18} className="text-wa mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1 text-sm">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("crm.integrationsTitle")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {integrations.map(({ name, desc }) => (
            <div key={name} className="bg-surface border border-surface-2 hover:border-wa/30 rounded-xl p-4 transition-colors">
              <div className="font-semibold text-white text-sm mb-1">{name}</div>
              <div className="text-slate-400 text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-16 bg-surface border border-surface-2 rounded-2xl p-8">
        <h2
          className="text-2xl font-bold text-white mb-6"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("crm.includedTitle")}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
              <Check size={16} className="text-wa shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center bg-wa/5 border border-wa/20 rounded-2xl p-10">
        <h2
          className="text-2xl font-bold text-white mb-3"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("crm.ctaTitle")}
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          {t("crm.ctaSubtitle")}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-8 py-3 font-bold transition-colors"
        >
          {t("crm.ctaButton")}
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Internal link — agent IA WhatsApp Business */}
      <div className="mt-10 text-center">
        <p className="text-slate-400 text-sm mb-3">
          {locale === "fr"
            ? "L'automatisation CRM s'intègre nativement dans notre"
            : "CRM automation integrates natively into our"}
          {" "}
          <Link
            href={`/${locale}/services/agent-ia-whatsapp`}
            className="text-wa hover:underline font-medium"
          >
            {locale === "fr"
              ? "agent IA WhatsApp Business"
              : "AI agent for WhatsApp Business"}
          </Link>.
        </p>
      </div>

    </div>
  );
}
