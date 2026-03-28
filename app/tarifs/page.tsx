import type { Metadata } from "next";
import Link from "next/link";
import { Check, MessageCircle, Calendar } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Tarifs — Agent IA WhatsApp",
  description: "Formules Starter, Pro et Enterprise pour votre agent IA WhatsApp Business. Devis personnalisé selon vos besoins et volumes.",
};

const plans = [
  {
    name: "Starter",
    price: "Sur devis",
    description: "Idéal pour les PME qui débutent l'automatisation WhatsApp.",
    features: [
      "1 agent WhatsApp Business",
      "1 scénario de conversation",
      "1 intégration externe (CRM ou agenda)",
      "Réponses texte automatiques",
      "Dashboard de monitoring basique",
      "Support email (72h)",
      "Formation incluse",
    ],
    cta: "Demander un devis",
    href: "/contact",
    featured: false,
  },
  {
    name: "Pro",
    price: "Sur devis",
    description: "La solution complète pour les équipes qui veulent tout automatiser.",
    features: [
      "Multi-scénarios de conversation",
      "Templates Meta pré-approuvés",
      "CRM + Agenda (Cal.com v2)",
      "Vision IA — analyse des photos",
      "Transcription vocale automatique",
      "Workflows & webhooks automatisés",
      "Conformité RGPD automatique",
      "Support 48h garanti",
      "Onboarding dédié",
    ],
    cta: "Demander un devis",
    href: "/contact",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    description: "Solution sur-mesure pour les grandes organisations.",
    features: [
      "Solution entièrement sur-mesure",
      "Multi-numéros WhatsApp",
      "Intégrations illimitées",
      "SLA garanti et prioritaire",
      "Hébergement EU dédié",
      "Équipe de support dédiée (24h)",
      "Audit et optimisation continus",
      "Formation équipes étendue",
    ],
    cta: "Nous contacter",
    href: "/contact",
    featured: false,
  },
];

const faqs = [
  {
    question: "Les tarifs incluent-ils la mise en place ?",
    answer: "Oui. Nos devis incluent le développement, la configuration WhatsApp Business, les tests et le déploiement. Pas de surprise.",
  },
  {
    question: "Y a-t-il des frais récurrents après la mise en place ?",
    answer: "Oui, un forfait mensuel couvre l'hébergement, les appels API (LLM) et la maintenance. Ce forfait est inclus dans notre proposition.",
  },
  {
    question: "Quel est le délai de mise en production ?",
    answer: "En général 2 à 3 semaines pour le plan Pro. Le plan Starter peut être déployé en 1 semaine. L'Enterprise dépend de la complexité.",
  },
];

export default function TarifsPage() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "/contact";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">Tarifs</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Des formules adaptées à votre activité
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          Chaque projet est unique. Tous nos tarifs sont sur devis, basés sur vos volumes de messages et vos intégrations.
        </p>
      </div>

      {/* Plans */}
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
              <h2 className="font-bold text-2xl text-white mb-1">{plan.name}</h2>
              <div className="text-3xl font-extrabold text-wa mb-3">{plan.price}</div>
              <p className="text-slate-400 text-sm">{plan.description}</p>
            </div>
            <ul className="space-y-3 flex-1 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check size={16} className="text-wa shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={plan.href}
              className={`text-center font-semibold py-3 px-6 rounded-lg transition-colors ${
                plan.featured
                  ? "bg-wa hover:bg-wa-hover text-white"
                  : "border border-wa text-wa hover:bg-wa hover:text-white"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Questions sur les tarifs</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-surface rounded-xl p-6 border border-surface-2">
              <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp contact CTA */}
      <div className="bg-surface/50 rounded-2xl p-10 border border-surface-2 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          Vous avez un projet ? Parlons-en.
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Réservez un diagnostic gratuit de 30 minutes. Nous analysons vos besoins et vous proposons une solution adaptée sous 48h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            href={calLink}
            label="Réserver un diagnostic gratuit"
            variant="wa"
            icon={Calendar}
            size="lg"
            external
          />
          <CTAButton
            href={`https://wa.me/${waNumber}`}
            label="Écrire sur WhatsApp"
            variant="outline"
            icon={MessageCircle}
            size="lg"
            external
          />
        </div>
      </div>
    </div>
  );
}
