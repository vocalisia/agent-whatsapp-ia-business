import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import CalEmbed from "@/components/shared/CalEmbed";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tarifs" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function TarifsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "tarifs" });
  const plans = t.raw("plans") as Array<{ name: string; description: string; features: string[] }>;
  const faqs = t.raw("faqs") as Array<{ question: string; answer: string }>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">{t("eyebrow")}</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
          {t("title")}
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      {/* Plans — features only, no price */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {plans.map((plan, i) => {
          const featured = i === 1;
          return (
            <div
              key={plan.name}
              className={`rounded-xl p-8 border flex flex-col ${
                featured
                  ? "bg-wa/10 border-wa/50 relative"
                  : "bg-surface border-surface-2"
              }`}
            >
              {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-wa text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  {t("recommended")}
                </div>
              )}
              <div className="mb-6">
                <h2 className="font-bold text-2xl text-white mb-2" style={{ fontFamily: "Onest, sans-serif" }}>
                  {plan.name}
                </h2>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>
              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check size={16} className="text-wa shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Booking section */}
      <div id="rdv" className="mb-20">
        <div className="text-center mb-10">
          <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">{t("sessionEyebrow")}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3" style={{ fontFamily: "Onest, sans-serif" }}>
            {t("sessionTitle")}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t("sessionSubtitle")}
          </p>
        </div>
        <CalEmbed />
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8" style={{ fontFamily: "Onest, sans-serif" }}>
          {t("faqTitle")}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-surface rounded-xl p-6 border border-surface-2">
              <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
