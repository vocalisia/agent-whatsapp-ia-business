"use client";
import { motion } from "framer-motion";
import { Camera, Mic, Paperclip, Shield, Calendar, Webhook } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";

const features = [
  {
    icon: Camera,
    title: "Vision IA",
    subtitle: "Analyse les photos",
    description: "Le client envoie une photo (document, bien immobilier, problème technique). L'agent voit, comprend et répond via OpenAI Vision / Claude / Gemini.",
    exclusive: true,
    color: "#25D366",
  },
  {
    icon: Mic,
    title: "Audio IA",
    subtitle: "Transcrit les vocaux",
    description: "L'agent transcrit automatiquement les messages vocaux WhatsApp et répond de façon contextuelle, dans la langue du client.",
    exclusive: true,
    color: "#25D366",
  },
  {
    icon: Paperclip,
    title: "Tous les médias",
    subtitle: "Images, audio, vidéo, docs",
    description: "Tout est géré, stocké et accessible. Les opérateurs peuvent aussi envoyer des fichiers aux clients depuis l'interface.",
    exclusive: false,
    color: "#6366F1",
  },
  {
    icon: Shield,
    title: "RGPD Auto",
    subtitle: "Rétention configurable",
    description: "Nettoyage automatique planifié par type de données. Hébergement EU disponible. Conformité sans effort.",
    exclusive: false,
    color: "#6366F1",
  },
  {
    icon: Calendar,
    title: "Cal.com v2",
    subtitle: "RDV dans WhatsApp",
    description: "Serveurs EU, équipes, champs dynamiques. L'agent prend des RDV directement dans la conversation.",
    exclusive: false,
    color: "#6366F1",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    subtitle: "Automatisations infinies",
    description: "Transcript complet + évaluation IA à chaque fin de conversation. Connecte HubSpot, Salesforce, Notion.",
    exclusive: false,
    color: "#6366F1",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Fonctionnalités"
            title="Ce que personne d'autre ne fait"
            subtitle="Des capacités multimodales exclusives sur le marché WhatsApp Business."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-surface border border-surface-2 hover:border-wa/40 rounded-2xl p-6 transition-colors duration-300 overflow-hidden"
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${f.color}10 0%, transparent 70%)`,
                }}
              />

              {/* Exclusive badge */}
              {f.exclusive && (
                <div className="absolute top-4 right-4 bg-wa/10 border border-wa/30 text-wa text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Exclusif
                </div>
              )}

              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                style={{ background: `${f.color}15`, border: `1px solid ${f.color}30` }}
              >
                <f.icon size={22} style={{ color: f.color }} />
              </div>

              <h3 className="font-bold text-white text-lg mb-0.5 relative" style={{ fontFamily: "Onest, sans-serif" }}>
                {f.title}
              </h3>
              <p className="text-xs font-medium text-wa mb-3 relative">{f.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed relative">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
