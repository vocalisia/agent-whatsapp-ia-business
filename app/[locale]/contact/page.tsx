import { CheckCircle, Clock, Shield, Zap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import CalEmbed from "@/components/shared/CalEmbed";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const bullets = t.raw("bullets") as string[];

  const guarantees = [
    { icon: Clock,   label: t("guaranteeTime"),         sub: t("guaranteeTimeSub") },
    { icon: Shield,  label: t("guaranteeConfidential"),  sub: t("guaranteeConfidentialSub") },
    { icon: Zap,     label: t("guaranteeResponse"),      sub: t("guaranteeResponseSub") },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-surface-2">
        <div className="absolute inset-0 bg-gradient-to-br from-wa/5 via-bg to-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-5">
            <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
            {t("badge")}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
            {t("title")}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left — context */}
          <div className="lg:col-span-2 space-y-8">
            {/* What happens */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
                {t("whatTitle")}
              </h2>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle size={16} className="text-wa shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-3 gap-3">
              {guarantees.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-surface border border-surface-2 rounded-xl p-3 text-center">
                  <Icon size={18} className="text-wa mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-white">{label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{sub}</div>
                </div>
              ))}
            </div>

            {/* Contact direct */}
            <div className="bg-surface border border-surface-2 rounded-xl p-5 flex flex-col gap-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t("directContact")}</p>
              <a
                href="mailto:contact@vocalis.pro"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-wa transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-wa/10 flex items-center justify-center text-wa text-xs font-bold shrink-0">@</span>
                contact@vocalis.pro
              </a>
              <a
                href="https://wa.me/41799394222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-wa transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-wa/10 flex items-center justify-center text-wa shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L0 24l6.335-1.508A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.814 9.814 0 01-5.012-1.37l-.36-.214-3.727.977.995-3.636-.235-.374A9.812 9.812 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/></svg>
                </span>
                +41 799 394 222
              </a>
            </div>

            {/* Testimonial */}
            <div className="bg-surface border border-surface-2 rounded-2xl p-5">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#25D366">
                    <polygon points="6,1 7.5,4.5 11,4.5 8.5,7 9.5,11 6,8.5 2.5,11 3.5,7 1,4.5 4.5,4.5" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 text-sm italic leading-relaxed mb-3">
                &quot;{t("testimonial")}&quot;
              </p>
              <div className="text-xs text-slate-500">{t("testimonialAuthor")}</div>
            </div>
          </div>

          {/* Right — iClosed widget */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden border border-wa/20 shadow-[0_0_40px_rgba(37,211,102,0.08)]">
              <div className="bg-surface px-5 py-3 border-b border-surface-2 flex items-center gap-3">
                <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">{t("calTitle")}</span>
                <span className="ml-auto text-xs text-slate-500">{t("calPowered")}</span>
              </div>
              <CalEmbed />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
