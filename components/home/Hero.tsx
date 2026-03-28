import { MessageCircle, Zap, Shield } from "lucide-react";
import WhatsAppMockup from "@/components/home/WhatsAppMockup";

export default function Hero() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "33600000000";
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "/contact";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
            Technologie exclusive — Vision IA + Vocaux
          </div>

          <h1
            className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            L&apos;agent IA
            <br />
            <span className="text-gradient-wa">WhatsApp</span>
            <br />
            qui vous voit.
          </h1>

          <p className="text-xl text-slate-400 mb-4 leading-relaxed max-w-lg">
            Vocaux, photos, documents — votre agent répond à tout, 24h/24.
          </p>
          <p className="text-slate-500 mb-10 leading-relaxed max-w-lg">
            Le seul agent capable d&apos;analyser les images et de transcrire les
            messages vocaux de vos clients. En temps réel. Sans intervention humaine.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: "Vision IA", color: "wa", desc: "Analyse les photos" },
              { label: "Audio IA", color: "indigo", desc: "Transcrit les vocaux" },
              { label: "RGPD", color: "emerald", desc: "Conforme & sécurisé" },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2 bg-surface border border-surface-3 rounded-xl px-4 py-2.5 hover:border-wa/40 transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-wa rounded-full" />
                <span className="text-sm text-white font-medium">{f.label}</span>
                <span className="text-xs text-slate-500">{f.desc}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-wa hover:bg-wa-hover text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 glow-wa text-lg"
            >
              <Zap size={20} className="group-hover:scale-110 transition-transform" />
              Réserver une démo
            </a>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-surface border border-surface-3 hover:border-wa/50 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-lg"
            >
              <MessageCircle size={20} className="text-wa" />
              Écrire sur WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-6 mt-10 pt-8 border-t border-surface-2">
            {[
              { icon: Shield, label: "RGPD compliant" },
              { icon: Zap, label: "Déployé en 2 semaines" },
              { icon: MessageCircle, label: "Support dédié" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs text-slate-500">
                <Icon size={12} className="text-wa" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Animated WhatsApp Mockup */}
        <div className="flex justify-center lg:justify-end">
          <WhatsAppMockup />
        </div>
      </div>
    </section>
  );
}
