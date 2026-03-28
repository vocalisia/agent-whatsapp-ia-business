import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Sur devis",
    features: ["1 agent WhatsApp", "1 scénario", "1 intégration", "Support email"],
    cta: "Demander un devis",
    featured: false,
  },
  {
    name: "Pro",
    price: "Sur devis",
    features: ["Multi-scénarios", "Templates Meta", "CRM + Agenda", "Vision IA + Vocaux", "Workflows auto", "Support 48h"],
    cta: "Demander un devis",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Sur devis",
    features: ["Solution sur-mesure", "Multi-numéros", "Intégrations illimitées", "SLA prioritaire", "Onboarding dédié", "Support 24h"],
    cta: "Nous contacter",
    featured: false,
  },
];

export default function PricingPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">Tarifs</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Des formules adaptées à votre activité</h2>
        <p className="text-slate-400 text-lg">Chaque projet est unique. Contactez-nous pour un devis personnalisé.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className={`rounded-xl p-8 border flex flex-col ${plan.featured ? "bg-wa/10 border-wa/50 relative" : "bg-surface border-surface-2"}`}>
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wa text-white text-xs font-bold px-4 py-1 rounded-full">RECOMMANDÉ</div>
            )}
            <h3 className="font-bold text-xl text-white mb-1">{plan.name}</h3>
            <div className="text-2xl font-extrabold text-wa mb-6">{plan.price}</div>
            <ul className="space-y-3 flex-1 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                  <Check size={16} className="text-wa shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/contact" className={`text-center font-semibold py-3 px-6 rounded-lg transition-colors ${plan.featured ? "bg-wa hover:bg-wa-hover text-white" : "border border-wa text-wa hover:bg-wa hover:text-white"}`}>
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/tarifs" className="text-wa hover:underline text-sm font-medium">Voir tous les détails des tarifs →</Link>
      </div>
    </section>
  );
}
