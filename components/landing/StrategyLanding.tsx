import type { ComponentType } from "react";
import {
  CheckCircle,
  Clock,
  Calendar,
  Shield,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import CalEmbed from "@/components/shared/CalEmbed";

export interface LandingCopy {
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    trust: [string, string, string];
  };
  painTitle: string;
  painItems: Array<{ title: string; desc: string }>;
  valueTitle: string;
  valueItems: Array<{ title: string; desc: string }>;
  bookingTitle: string;
  bookingSubtitle: string;
  bookingLabel: string;
  faqTitle: string;
  faq: Array<{ q: string; a: string }>;
  finalCtaTitle: string;
  finalCtaDesc: string;
  finalCtaBtn: string;
}

interface StrategyLandingProps {
  copy: LandingCopy;
  painIcons: readonly [ComponentType<{ size?: number; className?: string }>, ComponentType<{ size?: number; className?: string }>, ComponentType<{ size?: number; className?: string }>];
  valueIcons: readonly [ComponentType<{ size?: number; className?: string }>, ComponentType<{ size?: number; className?: string }>, ComponentType<{ size?: number; className?: string }>];
  accentTint?: "wa" | "amber" | "red" | "indigo";
}

const ACCENT_MAP = {
  wa: { heroGradient: "from-wa/5 via-bg to-indigo-500/5", finalGradient: "from-wa/10 via-bg to-indigo-500/10" },
  amber: { heroGradient: "from-amber-500/10 via-bg to-red-500/5", finalGradient: "from-amber-500/15 via-bg to-red-500/10" },
  red: { heroGradient: "from-red-500/10 via-bg to-amber-500/5", finalGradient: "from-red-500/15 via-bg to-amber-500/10" },
  indigo: { heroGradient: "from-indigo-500/10 via-bg to-wa/5", finalGradient: "from-indigo-500/15 via-bg to-wa/10" },
} as const;

export default function StrategyLanding({
  copy,
  painIcons,
  valueIcons,
  accentTint = "wa",
}: StrategyLandingProps) {
  const accent = ACCENT_MAP[accentTint];

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-surface-2">
        <div className={`absolute inset-0 bg-gradient-to-br ${accent.heroGradient}`} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,211,102,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,211,102,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-2 text-wa text-sm font-medium mb-5 sm:mb-6">
            <Shield size={14} className="shrink-0" />
            <span className="text-balance">{copy.hero.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight text-balance">
            {copy.hero.title1}
            <br />
            <span className="text-gradient-wa">{copy.hero.title2}</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed text-pretty">
            {copy.hero.subtitle}
          </p>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 sm:gap-3 bg-wa hover:bg-wa-hover text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-colors glow-wa text-base sm:text-lg mb-8 sm:mb-10 w-full sm:w-auto justify-center"
          >
            <Calendar size={20} />
            <span className="text-balance">{copy.bookingLabel}</span>
            <ArrowRight size={18} />
          </a>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm text-slate-300">
            {copy.hero.trust.map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-wa shrink-0" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12 leading-tight text-balance">
          {copy.painTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {copy.painItems.map((item, idx) => {
            const Icon = painIcons[idx];
            return (
              <div
                key={item.title}
                className="bg-surface border border-surface-2 rounded-2xl p-5 sm:p-6 hover:border-wa/30 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <Icon size={20} className="text-red-400" />
                </div>
                <h3 className="font-bold text-white mb-1.5 sm:mb-2 text-[15px] sm:text-base">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Value */}
      <section className="border-y border-surface-2 bg-surface/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12 leading-tight text-balance">
            {copy.valueTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {copy.valueItems.map((item, idx) => {
              const Icon = valueIcons[idx];
              return (
                <div
                  key={item.title}
                  className="bg-bg border border-wa/20 rounded-2xl p-5 sm:p-6 glow-wa-sm"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-wa/15 border border-wa/30 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <Icon size={20} className="text-wa" />
                  </div>
                  <h3 className="font-bold text-white mb-1.5 sm:mb-2 text-[15px] sm:text-base">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking iClosed */}
      <section id="booking" className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 scroll-mt-20">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight text-balance">
            {copy.bookingTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto text-pretty">{copy.bookingSubtitle}</p>
        </div>
        <div className="bg-surface border border-surface-2 rounded-2xl p-3 sm:p-6">
          <CalEmbed />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-10 text-balance">{copy.faqTitle}</h2>
        <div className="space-y-4">
          {copy.faq.map((item) => (
            <details key={item.q} className="bg-surface border border-surface-2 rounded-xl p-4 sm:p-5 group">
              <summary className="font-semibold text-white cursor-pointer flex items-center justify-between gap-3 sm:gap-4 text-[15px] sm:text-base list-none [&::-webkit-details-marker]:hidden">
                <span className="flex-1">{item.q}</span>
                <ArrowRight size={16} className="text-wa shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <p className="text-sm text-slate-400 mt-3 sm:mt-4 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className={`border-t border-surface-2 bg-gradient-to-br ${accent.finalGradient}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
          <Clock size={40} className="text-wa mx-auto mb-5 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight text-balance">
            {copy.finalCtaTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8 text-pretty">{copy.finalCtaDesc}</p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 sm:gap-3 bg-wa hover:bg-wa-hover text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-colors glow-wa text-base sm:text-lg w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            <span className="text-balance">{copy.finalCtaBtn}</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
