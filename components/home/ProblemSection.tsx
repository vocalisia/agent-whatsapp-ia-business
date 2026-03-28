"use client";
import { motion } from "framer-motion";
import { PhoneMissed, Clock, ImageOff, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "Vocaux ignorés",
    description: "Vos clients envoient des messages vocaux WhatsApp. Personne n'a le temps de les écouter.",
    stat: "73%",
    statLabel: "des vocaux non écoutés",
  },
  {
    icon: ImageOff,
    title: "Photos non traitées",
    description: "Le client envoie une photo de son document. Le traitement manuel prend des heures.",
    stat: "4h",
    statLabel: "de traitement moyen",
  },
  {
    icon: Clock,
    title: "Leads perdus la nuit",
    description: "70% des messages arrivent hors horaires. Sans réponse rapide : adieu le prospect.",
    stat: "70%",
    statLabel: "des messages hors horaires",
  },
  {
    icon: TrendingDown,
    title: "Équipe débordée",
    description: "Vos équipes gèrent des messages répétitifs au lieu de se concentrer sur la valeur.",
    stat: "40%",
    statLabel: "du temps perdu",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-red-400 text-sm font-semibold uppercase tracking-wider mb-3">Le problème</span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            Chaque message sans réponse = un client perdu
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-surface-2 border-l-2 border-l-red-500/60 rounded-2xl p-6 hover:border-l-red-500 transition-colors"
            >
              <div className="text-3xl font-extrabold text-red-400 mb-1" style={{ fontFamily: "Onest, sans-serif" }}>
                {p.stat}
              </div>
              <div className="text-xs text-red-400/70 mb-4">{p.statLabel}</div>
              <p.icon size={20} className="text-red-400/60 mb-3" />
              <h3 className="font-bold text-white mb-2" style={{ fontFamily: "Onest, sans-serif" }}>{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
