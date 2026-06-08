"use client";
import { MessageCircle, Zap, Shield } from "lucide-react";
import { useTranslations } from "next-intl";
import HeroSimulator from "@/components/home/HeroSimulator";

export default function Hero() {
  const t = useTranslations("hero");
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "41799394222";
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "/contact";

  return (
    <section className="relative min-h-screen flex items-center overflow-x-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-surface-2 opacity-90" />
        {/* Animated orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(37,211,102,0.15) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,211,102,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,211,102,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full min-w-0">
        {/* Left: Text */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
            {t("badge")}
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-5 tracking-tight text-balance"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            {t("title1")}
            <br />
            <span className="text-gradient-wa">{t("title2")}</span>
            <br />
            {t("title3")}
          </h1>

          <p className="text-base sm:text-lg text-slate-400 mb-3 leading-relaxed max-w-lg text-pretty">
            {t("subtitle")}
          </p>
          <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed max-w-lg text-pretty">
            {t("description")}
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
            {[
              { label: t("pillVision"), color: "wa", desc: t("pillVisionDesc") },
              { label: t("pillAudio"), color: "indigo", desc: t("pillAudioDesc") },
              { label: t("pillRgpd"), color: "emerald", desc: t("pillRgpdDesc") },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2 bg-surface border border-surface-3 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 hover:border-wa/40 transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-wa rounded-full" />
                <span className="text-sm text-white font-medium">{f.label}</span>
                <span className="hidden sm:inline text-xs text-slate-500">{f.desc}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
            <a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse group inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-5 py-3 rounded-2xl transition-all duration-300 glow-wa text-sm sm:text-base min-h-[48px] shrink-0"
            >
              <Zap size={18} className="group-hover:scale-110 transition-transform shrink-0" />
              {t("ctaAudit")}
            </a>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-3 hover:border-wa/50 text-white font-semibold px-5 py-3 rounded-2xl transition-all duration-300 text-sm sm:text-base min-h-[48px] shrink-0"
            >
              <MessageCircle size={18} className="text-wa shrink-0" />
              {t("ctaWhatsapp")}
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-surface-2">
            {[
              { icon: Shield, label: t("trustRgpd") },
              { icon: Zap, label: t("trustDeployed") },
              { icon: MessageCircle, label: t("trustSupport") },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs text-slate-500">
                <Icon size={12} className="text-wa" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Interactive WhatsApp Simulator */}
        <div style={{ overflow: 'hidden', width: '100%', minWidth: 0 }}>
          <HeroSimulator />
        </div>
      </div>
    </section>
  );
}
