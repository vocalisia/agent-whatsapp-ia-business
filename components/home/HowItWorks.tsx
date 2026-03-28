import SectionTitle from "@/components/shared/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Analyse des besoins",
    description: "On identifie vos scénarios WhatsApp, volumes de messages, intégrations nécessaires (CRM, agenda, base de connaissance).",
  },
  {
    number: "02",
    title: "Configuration WhatsApp Business",
    description: "Connexion de votre compte Meta, configuration du numéro, création et approbation des templates de messages.",
  },
  {
    number: "03",
    title: "Développement de l'agent",
    description: "Personnalité vocale, base de connaissances métier, flux de conversation, intégrations CRM et Cal.com.",
  },
  {
    number: "04",
    title: "Tests & déploiement",
    description: "Tests avec de vrais messages, ajustements, mise en production et formation de votre équipe. Livraison en 2–3 semaines.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionTitle
        eyebrow="Comment ça marche"
        title="De zéro à votre agent IA WhatsApp en 2–3 semaines"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="relative bg-surface rounded-xl p-6 border border-surface-2">
            <div className="text-4xl font-extrabold text-wa/20 mb-3">{step.number}</div>
            <h3 className="font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
