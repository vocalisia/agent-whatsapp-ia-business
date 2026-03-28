import { PhoneMissed, Clock, ImageOff, TrendingDown } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const problems = [
  {
    icon: PhoneMissed,
    title: "Vocaux ignorés",
    description: "Vos clients envoient des messages vocaux WhatsApp. Personne dans votre équipe n'a le temps de les écouter et y répondre.",
  },
  {
    icon: ImageOff,
    title: "Photos sans traitement",
    description: "Le client envoie une photo de son document, son bien, son problème. Le traitement manuel prend des heures.",
  },
  {
    icon: Clock,
    title: "Leads perdus hors horaires",
    description: "70% des messages arrivent en dehors des heures ouvrées. Sans réponse rapide, le prospect passe chez un concurrent.",
  },
  {
    icon: TrendingDown,
    title: "Équipe débordée",
    description: "Votre équipe gère des centaines de messages répétitifs au lieu de se concentrer sur les dossiers à forte valeur.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <SectionTitle
        eyebrow="Le problème"
        title="Vos clients n'attendent pas. Votre équipe, elle, est débordée."
        subtitle="Chaque message sans réponse rapide est un lead perdu. Chaque photo non traitée est un client frustré."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p) => (
          <div key={p.title} className="bg-surface/50 rounded-xl p-6 border border-surface-2 border-l-4 border-l-red-500/50">
            <p.icon className="text-red-400 mb-3" size={24} />
            <h3 className="font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
