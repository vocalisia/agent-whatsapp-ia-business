"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Analyse des besoins",
    description: "On identifie vos scénarios WhatsApp, volumes de messages, intégrations nécessaires (CRM, agenda, base de connaissance).",
    color: "#25D366",
  },
  {
    number: "02",
    title: "Config WhatsApp Business",
    description: "Connexion de votre compte Meta, configuration du numéro, création et approbation des templates de messages.",
    color: "#34d399",
  },
  {
    number: "03",
    title: "Développement de l'agent",
    description: "Personnalité, base de connaissances métier, flux de conversation, intégrations CRM et Cal.com.",
    color: "#6366F1",
  },
  {
    number: "04",
    title: "Tests & déploiement",
    description: "Tests avec de vrais messages, ajustements, mise en production et formation de votre équipe. Livraison en 2–3 semaines.",
    color: "#818cf8",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            eyebrow="Comment ça marche"
            title="De zéro à votre agent IA en 2–3 semaines"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-wa/30 via-indigo-500/30 to-indigo-500/10" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center lg:text-left"
              >
                {/* Number bubble */}
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-5 text-2xl font-extrabold"
                  style={{
                    background: `${step.color}15`,
                    border: `2px solid ${step.color}30`,
                    color: step.color,
                    fontFamily: "Syne, sans-serif",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="font-bold text-white text-lg mb-2"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
