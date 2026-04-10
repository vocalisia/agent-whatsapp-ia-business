import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Target, Zap, Filter } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: t("qualificationLeads.title"),
    description: t("qualificationLeads.subtitle"),
  };
}

const STEPS_ICONS = [MessageCircle, Filter, Target, Zap];

export default async function QualificationLeadsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const features = t.raw("qualificationLeads.features") as string[];
  const steps = (t.raw("qualificationLeads.steps") as Array<{ title: string; desc: string }>).map((s, i) => ({ ...s, icon: STEPS_ICONS[i] }));

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
          {t("qualificationLeads.title")}
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          {t("qualificationLeads.subtitle")}
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

      {/* How it works */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("qualificationLeads.howTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="bg-surface border border-surface-2 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-wa/10 border border-wa/30 flex items-center justify-center shrink-0">
                  <span className="text-wa text-xs font-bold">{i + 1}</span>
                </div>
                <Icon size={16} className="text-wa" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
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
          {t("qualificationLeads.includedTitle")}
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
          {t("qualificationLeads.ctaTitle")}
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          {t("qualificationLeads.ctaSubtitle")}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-8 py-3 font-bold transition-colors"
        >
          {t("qualificationLeads.ctaButton")}
          <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}
