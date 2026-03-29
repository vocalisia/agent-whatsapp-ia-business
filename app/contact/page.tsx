import type { Metadata } from "next";
import { CheckCircle, Clock, Shield, Zap } from "lucide-react";
import CalEmbed from "@/components/shared/CalEmbed";

export const metadata: Metadata = {
  title: "Session Stratégique Gratuite — AgenticWhatsup",
  description: "Réservez votre session stratégique gratuite de 30 minutes. Diagnostic de vos besoins WhatsApp, proposition personnalisée sous 48h.",
};

const bullets = [
  "Diagnostic de vos flux de messages WhatsApp",
  "Identification des automatisations possibles",
  "Étude de faisabilité selon vos outils (CRM, agenda)",
  "Proposition concrète et chiffrée sous 48h",
  "Sans engagement — 100% offert",
];

const guarantees = [
  { icon: Clock,   label: "30 minutes",       sub: "chrono respecté" },
  { icon: Shield,  label: "Confidentiel",      sub: "NDA sur demande" },
  { icon: Zap,     label: "Réponse sous 48h",  sub: "devis détaillé" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-surface-2">
        <div className="absolute inset-0 bg-gradient-to-br from-wa/5 via-bg to-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-5">
            <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
            Session stratégique — 100% gratuite
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
            Réservez votre audit WhatsApp
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            30 minutes pour analyser votre situation et définir exactement ce qu'un agent IA peut faire pour vous.
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
                Ce qu'on va faire ensemble
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
                "En 30 minutes ils ont identifié 3 automatisations que je n'avais pas vues. La proposition était précise et réaliste."
              </p>
              <div className="text-xs text-slate-500">Karim B. — E-commerce, Paris</div>
            </div>
          </div>

          {/* Right — iClosed widget */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden border border-wa/20 shadow-[0_0_40px_rgba(37,211,102,0.08)]">
              <div className="bg-surface px-5 py-3 border-b border-surface-2 flex items-center gap-3">
                <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">Choisissez votre créneau</span>
                <span className="ml-auto text-xs text-slate-500">Powered by iClosed</span>
              </div>
              <CalEmbed />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
