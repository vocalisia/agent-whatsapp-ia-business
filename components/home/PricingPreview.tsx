"use client";
import Link from "next/link";
import { Check, Calendar } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function PricingPreview() {
  const t = useTranslations("pricing");
  const locale = useLocale();
  const plans = t.raw("plans") as Array<{ name: string; features: string[] }>;

  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">{t("eyebrow")}</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
          {t("title")}
        </h2>
        <p className="text-slate-400 text-lg">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {plans.map((plan, i) => {
          const featured = i === 1;
          return (
            <div
              key={plan.name}
              className={`rounded-xl p-8 border flex flex-col ${
                featured ? "bg-wa/10 border-wa/50 relative" : "bg-surface border-surface-2"
              }`}
            >
              {featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wa text-white text-xs font-bold px-4 py-1 rounded-full">
                  {t("recommended")}
                </div>
              )}
              <h3 className="font-bold text-xl text-white mb-5" style={{ fontFamily: "Onest, sans-serif" }}>
                {plan.name}
              </h3>
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check size={16} className="text-wa shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Single CTA */}
      <div className="text-center">
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-8 py-4 rounded-2xl transition-colors text-lg"
        >
          <Calendar size={20} />
          {t("ctaAudit")}
        </Link>
        <p className="text-slate-500 text-sm mt-3">{t("ctaSubtitle")}</p>
      </div>
    </section>
  );
}
