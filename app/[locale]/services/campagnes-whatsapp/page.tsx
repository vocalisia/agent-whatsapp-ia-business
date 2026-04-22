import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Send, Users, BarChart3 } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: t("campagnes.title"),
    description: t("campagnes.subtitle"),
    alternates: {
      canonical: `https://agentic-whatsup.com/${locale}/services/campagnes-whatsapp`,
      languages: {
        fr: "https://agentic-whatsup.com/fr/services/campagnes-whatsapp",
        en: "https://agentic-whatsup.com/en/services/campagnes-whatsapp",
        de: "https://agentic-whatsup.com/de/services/campagnes-whatsapp",
        nl: "https://agentic-whatsup.com/nl/services/campagnes-whatsapp",
        "x-default": "https://agentic-whatsup.com/fr/services/campagnes-whatsapp",
      },
    },
  };
}

const UC_ICONS = [Send, Users, BarChart3, MessageCircle];

export default async function CampagnesWhatsAppPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const features = t.raw("campagnes.features") as string[];
  const useCasesData = t.raw("campagnes.useCases") as Array<{ title: string; desc: string }>;
  const useCases = useCasesData.map((uc, i) => ({ ...uc, icon: UC_ICONS[i % UC_ICONS.length] }));

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
          {t("campagnes.title")}
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          {t("campagnes.subtitle")}
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

      {/* Use cases */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("campagnes.useCasesTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-surface border border-surface-2 rounded-xl p-6 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-wa/10 border border-wa/20 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-wa" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
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
          {t("campagnes.includedTitle")}
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
          {t("campagnes.ctaTitle")}
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          {t("campagnes.ctaSubtitle")}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-8 py-3 font-bold transition-colors"
        >
          {t("campagnes.ctaButton")}
          <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}
