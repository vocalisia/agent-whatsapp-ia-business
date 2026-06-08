import type { Metadata } from "next";
import WhatsAppSimulator from "@/components/demo/WhatsAppSimulator";
import fitnessConfig from "@/components/demo/configs/fitness";
import {
  Dumbbell,
  Calendar,
  User,
  TrendingUp,
  Apple,
  Users,
  Zap,
  MessageCircle,
} from "lucide-react";

const pageMeta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Demo Fitness | Agent IA WhatsApp pour salles de sport",
    description:
      "Testez notre agent IA WhatsApp specialise fitness. Inscription automatique, planning cours, coaching personnel, suivi progression IA et nutrition.",
  },
  en: {
    title: "Fitness Demo | WhatsApp AI Agent for gyms & fitness centers",
    description:
      "Try our fitness WhatsApp AI agent. Auto sign-up, class scheduling, personal coaching, AI progress tracking and nutrition plans.",
  },
  de: {
    title: "Fitness Demo | WhatsApp KI-Agent fur Fitnessstudios",
    description:
      "Testen Sie unseren Fitness WhatsApp KI-Agenten. Automatische Anmeldung, Kursplanung, Personal Coaching, KI-Fortschrittsverfolgung und Ernahrung.",
  },
  nl: {
    title: "Fitness Demo | WhatsApp AI-agent voor sportscholen",
    description:
      "Test onze fitness WhatsApp AI-agent. Automatische inschrijving, lesrooster, personal coaching, AI voortgangsanalyse en voedingsplannen.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = pageMeta[locale] ?? pageMeta.fr;
  return { title: meta.title, description: meta.description };
}

const capabilities = [
  {
    icon: Dumbbell,
    title: "Inscription auto",
    desc: "Inscription en ligne en 2 minutes, choix de formule et paiement securise via WhatsApp",
  },
  {
    icon: Calendar,
    title: "Planning cours",
    desc: "Consultation du planning, reservation et annulation de cours collectifs en temps reel",
  },
  {
    icon: User,
    title: "Coach personnel",
    desc: "Reservation de seances avec nos coachs certifies, bilan et suivi personnalise",
  },
  {
    icon: TrendingUp,
    title: "Suivi progression",
    desc: "Analyse IA de vos photos progression, evolution corporelle et recommandations adaptees",
  },
  {
    icon: Apple,
    title: "Nutrition IA",
    desc: "Plan nutritionnel personnalise genere par IA selon vos objectifs et votre metabolisme",
  },
  {
    icon: Users,
    title: "Parrainage",
    desc: "Programme de parrainage automatise : 1 mois offert par filleul inscrit, cumul illimite",
  },
];

export default function FitnessDemoPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-surface-2 opacity-90" />
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(37,211,102,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37,211,102,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,211,102,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium">
              <Dumbbell size={14} />
              Fitness
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "Onest, sans-serif" }}
            >
              Agent IA pour{" "}
              <span className="text-gradient-wa">salles de sport</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Automatisez la gestion de votre salle de sport sur WhatsApp.
              Inscriptions, cours, coaching, nutrition — tout est gere par
              l&apos;IA.
            </p>
          </div>

          {/* Two columns: simulator + info */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Simulator */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
              <WhatsAppSimulator config={fitnessConfig} />
            </div>

            {/* Right: Info */}
            <div className="order-2 lg:order-2 flex flex-col gap-8">
              {/* Try these */}
              <div className="bg-surface/60 border border-surface-3 rounded-2xl p-6">
                <h3
                  className="text-lg font-bold text-white mb-4 flex items-center gap-2"
                  style={{ fontFamily: "Onest, sans-serif" }}
                >
                  <MessageCircle size={20} className="text-wa" />
                  Essayez ces phrases
                </h3>
                <div className="space-y-2">
                  {[
                    "Quels sont vos abonnements ?",
                    "Je veux un essai gratuit",
                    "Planning des cours cette semaine",
                    "Je cherche un coach personnel",
                    "Mon plan nutrition personnalise",
                    "Analysez ma photo progression",
                    "Comment parrainer un ami ?",
                    "Horaires du week-end",
                  ].map((phrase) => (
                    <div
                      key={phrase}
                      className="text-sm text-slate-300 bg-surface-2/50 rounded-lg px-3 py-2 border border-surface-3"
                    >
                      &ldquo;{phrase}&rdquo;
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-wa/10 to-indigo-500/10 border border-wa/20 rounded-2xl p-6 text-center">
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "Onest, sans-serif" }}
                >
                  Boostez votre salle de sport
                </h3>
                <p className="text-sm text-slate-400 mb-5">
                  Reduisez 70% des appels entrants et augmentez vos
                  inscriptions de 40% avec notre agent IA fitness.
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_CAL_LINK || "/fr/contact"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 glow-wa"
                >
                  <Zap size={18} />
                  Audit fitness gratuit — 30 min
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">
            Fonctionnalites fitness
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            Tout ce dont votre salle a besoin...{" "}
            <span className="text-gradient-wa">automatise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            L&apos;agent gere inscriptions, planning, coaching et nutrition
            pour offrir une experience membre fluide et personnalisee.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-surface border border-surface-3 rounded-2xl p-6 hover:border-wa/30 transition-colors group"
            >
              <div className="w-10 h-10 bg-wa/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-wa/20 transition-colors">
                <Icon size={20} className="text-wa" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-sm text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-gradient-to-br from-surface via-surface to-surface-2 border border-surface-3 rounded-3xl p-10 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(37,211,102,0.3) 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Onest, sans-serif" }}
            >
              Transformez la gestion de votre salle
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Integration en 48h avec votre logiciel de gestion. Formation
              incluse. Sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={process.env.NEXT_PUBLIC_CAL_LINK || "/fr/contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 glow-wa text-lg"
              >
                <Zap size={20} />
                Prendre RDV
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || "41799394222"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-surface-2 border border-surface-3 hover:border-wa/50 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-lg"
              >
                <MessageCircle size={20} className="text-wa" />
                Nous ecrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
