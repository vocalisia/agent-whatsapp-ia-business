import type { Metadata } from "next";
import { Check } from "lucide-react";
import CalEmbed from "@/components/shared/CalEmbed";

export const metadata: Metadata = {
  title: "Tarifs — Agent IA WhatsApp",
  description: "Découvrez nos formules Starter, Pro et Enterprise pour votre agent IA WhatsApp. Pas de grille fixe — chaque projet est unique, devis sous 48h.",
};

const plans = [
  {
    name: "Starter",
    description: "PME qui débutent l'automatisation WhatsApp.",
    features: [
      "1 agent WhatsApp Business",
      "1 scénario de conversation",
      "1 intégration (CRM ou agenda)",
      "Réponses texte automatiques",
      "Dashboard de monitoring",
      "Support email",
      "Formation incluse",
    ],
    featured: false,
  },
  {
    name: "Pro",
    description: "La solution complète pour tout automatiser.",
    features: [
      "Multi-scénarios de conversation",
      "Templates Meta pré-approuvés",
      "CRM + Agenda (Cal.com)",
      "Vision IA — analyse des photos",
      "Transcription vocale automatique",
      "Workflows & webhooks",
      "Conformité RGPD",
      "Support 48h garanti",
      "Onboarding dédié",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    description: "Solution sur-mesure pour les grandes organisations.",
    features: [
      "Architecture entièrement sur-mesure",
      "Multi-numéros WhatsApp",
      "Intégrations illimitées",
      "SLA garanti et prioritaire",
      "Hébergement EU dédié",
      "Support dédié 24h/24",
      "Audit et optimisation continus",
      "Formation équipes étendue",
    ],
    featured: false,
  },
];

const faqs = [
  {
    question: "Les tarifs incluent-ils la mise en place ?",
    answer: "Oui. Chaque devis inclut le développement, la configuration WhatsApp Business, les tests et le déploiement complet. Pas de surprise.",
  },
  {
    question: "Y a-t-il des frais récurrents ?",
    answer: "Oui, un forfait mensuel couvre l'hébergement, les appels API (LLM) et la maintenance. Ce forfait est inclus dans notre proposition.",
  },
  {
    question: "Quel est le délai de mise en production ?",
    answer: "En général 2 à 3 semaines pour le plan Pro. Le plan Starter peut être déployé en 1 semaine. L'Enterprise dépend de la complexité.",
  },
];

export default function TarifsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">Formules</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
          Chaque projet est unique
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          Pas de grille tarifaire figée. On discute de vos besoins et on vous propose la solution exacte — ni plus, ni moins.
        </p>
      </div>

      {/* Plans — features only, no price */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl p-8 border flex flex-col ${
              plan.featured
                ? "bg-wa/10 border-wa/50 relative"
                : "bg-surface border-surface-2"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-wa text-white text-xs font-bold px-4 py-1.5 rounded-full">
                RECOMMANDÉ
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
        ))}
      </div>

      {/* Booking section */}
      <div id="rdv" className="mb-20">
        <div className="text-center mb-10">
          <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">Session stratégique</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3" style={{ fontFamily: "Onest, sans-serif" }}>
            Session Stratégique — Votre Agent IA WhatsApp
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            30 minutes pour analyser vos flux, identifier les automatisations possibles et définir votre stratégie. Diagnostic offert, sans engagement.
          </p>
        </div>
        <CalEmbed />
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8" style={{ fontFamily: "Onest, sans-serif" }}>
          Questions fréquentes
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
