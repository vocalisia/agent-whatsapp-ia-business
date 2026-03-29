import Link from "next/link";
import { Check, Calendar } from "lucide-react";

const plans = [
  {
    name: "Starter",
    features: ["1 agent WhatsApp", "1 scénario", "1 intégration", "Support email"],
    featured: false,
  },
  {
    name: "Pro",
    features: ["Multi-scénarios", "Templates Meta", "CRM + Agenda", "Vision IA + Vocaux", "Workflows auto", "Support 48h"],
    featured: true,
  },
  {
    name: "Enterprise",
    features: ["Solution sur-mesure", "Multi-numéros", "Intégrations illimitées", "SLA prioritaire", "Support 24h"],
    featured: false,
  },
];

export default function PricingPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">Formules</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
          Une solution taillée pour vous
        </h2>
        <p className="text-slate-400 text-lg">Pas de prix affiché — chaque projet est unique. On discute.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl p-8 border flex flex-col ${
              plan.featured ? "bg-wa/10 border-wa/50 relative" : "bg-surface border-surface-2"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wa text-white text-xs font-bold px-4 py-1 rounded-full">
                RECOMMANDÉ
              </div>
            )}
            <h3 className="font-bold text-xl text-white mb-5" style={{ fontFamily: "Onest, sans-serif" }}>
              {plan.name}
            </h3>
            <ul className="space-y-3 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check size={16} className="text-wa shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Single CTA */}
      <div className="text-center">
        <Link
          href="/tarifs#rdv"
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-8 py-4 rounded-2xl transition-colors text-lg"
        >
          <Calendar size={20} />
          Réserver une démo gratuite
        </Link>
        <p className="text-slate-500 text-sm mt-3">30 minutes · Sans engagement · Proposition sous 48h</p>
      </div>
    </section>
  );
}
