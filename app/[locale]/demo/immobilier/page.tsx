import type { Metadata } from "next";
import WhatsAppSimulator from "@/components/demo/WhatsAppSimulator";
import immobilierConfig from "@/components/demo/configs/immobilier";
import {
  Home,
  Camera,
  TrendingUp,
  Calendar,
  Calculator,
  FileSearch,
  Zap,
  MessageCircle,
} from "lucide-react";

const pageMeta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Agent IA WhatsApp Immobilier | Demo interactive ImmoPrestige",
    description:
      "Testez notre agent IA WhatsApp pour agences immobilières. Recherche de biens, estimation IA, prise de visite automatique, simulation crédit, suivi transaction.",
  },
  en: {
    title: "Real Estate WhatsApp AI Agent | Interactive Demo",
    description:
      "Try our WhatsApp AI agent for real estate agencies. Property search, AI valuation, automatic visit booking, mortgage simulation, transaction tracking.",
  },
  de: {
    title: "Immobilien WhatsApp KI-Agent | Interaktive Demo",
    description:
      "Testen Sie unseren WhatsApp KI-Agenten fur Immobilienagenturen. Immobiliensuche, KI-Bewertung, automatische Besichtigung, Kreditrechner, Transaktionsverfolgung.",
  },
  nl: {
    title: "Vastgoed WhatsApp AI-agent | Interactieve demo",
    description:
      "Test onze WhatsApp AI-agent voor makelaars. Woningzoeker, AI-taxatie, automatische bezichtiging, hypotheeksimulatie, transactiebeheer.",
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
    icon: Home,
    title: "Recherche intelligente",
    desc: "Trouve le bien idéal selon budget, surface, localisation et critères personnalisés",
  },
  {
    icon: Camera,
    title: "Analyse photo biens",
    desc: "Vision IA : estime surface, état, matériaux et potentiel d'un bien en photo",
  },
  {
    icon: TrendingUp,
    title: "Estimation IA",
    desc: "Prix au m² en temps réel, transactions comparables, tendances du marché local",
  },
  {
    icon: Calendar,
    title: "Prise de visite auto",
    desc: "Planifie les visites, envoie confirmations et rappels automatiques",
  },
  {
    icon: Calculator,
    title: "Simulation crédit",
    desc: "Calcul de mensualités, taux, apport et mise en relation avec banques partenaires",
  },
  {
    icon: FileSearch,
    title: "Suivi transaction",
    desc: "Suivi en temps réel du dossier : offre, compromis, prêt, acte authentique",
  },
];

const suggestedPhrases = [
  "Je cherche un appartement 3 pièces à Paris",
  "Combien vaut mon bien ?",
  "Quels biens sont disponibles ?",
  "Je veux planifier une visite",
  "Simuler un crédit de estimation personnalisee",
  "Quels documents pour acheter ?",
  "Quel est le DPE du bien ?",
  "Quels sont les frais de notaire ?",
];

export default function ImmobilierDemoPage() {
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
              <Home size={14} />
              Immobilier
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "Onest, sans-serif" }}
            >
              Agent IA pour{" "}
              <span className="text-gradient-wa">agences immobilières</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Automatisez la qualification, les visites et le suivi client.
              Votre assistant immobilier IA disponible 24h/24 sur WhatsApp.
            </p>
          </div>

          {/* Two columns: simulator + info */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Simulator */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
              <WhatsAppSimulator config={immobilierConfig} />
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
                  {suggestedPhrases.map((phrase) => (
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
                  Votre agence mérite mieux
                </h3>
                <p className="text-sm text-slate-400 mb-5">
                  Réservez un audit gratuit de 30 min. On vous montre l&apos;agent
                  configuré avec VOS biens et VOTRE marque.
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_CAL_LINK || "/fr/contact"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 glow-wa"
                >
                  <Zap size={18} />
                  Prendre RDV
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
            Fonctionnalités sectorielles
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            Tout ce dont une agence a besoin...{" "}
            <span className="text-gradient-wa">automatisé</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            De la recherche de biens au suivi de transaction, l&apos;agent gère
            chaque étape du parcours client immobilier.
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
              Prêt à transformer votre agence ?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Setup en 48h. Vos biens importés automatiquement.
              Formation équipe incluse.
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
                Nous écrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
