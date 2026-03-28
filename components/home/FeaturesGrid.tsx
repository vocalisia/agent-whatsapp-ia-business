import { Camera, Mic, Paperclip, Shield, Calendar, Webhook } from "lucide-react";
import FeatureCard from "@/components/shared/FeatureCard";
import SectionTitle from "@/components/shared/SectionTitle";

const features = [
  {
    icon: Camera,
    title: "Vision IA — Analyse les photos",
    description: "Le client envoie une photo (document, bien immobilier, problème technique, produit). L'agent voit, comprend et répond via OpenAI Vision / Claude / Gemini.",
    exclusive: true,
  },
  {
    icon: Mic,
    title: "Comprend les messages vocaux",
    description: "Fini les vocaux ignorés. L'agent transcrit automatiquement les messages audio WhatsApp et répond de façon contextuelle, dans la langue du client.",
    exclusive: true,
  },
  {
    icon: Paperclip,
    title: "Tous les médias WhatsApp",
    description: "Images, audio, vidéo, documents — tout est géré, stocké et accessible. Les opérateurs peuvent également envoyer des fichiers aux clients depuis l'interface.",
    exclusive: false,
  },
  {
    icon: Shield,
    title: "RGPD automatique",
    description: "Rétention des données configurable (conversations, leads, SMS). Nettoyage automatique planifié — conformité RGPD sans effort ni intervention manuelle.",
    exclusive: false,
  },
  {
    icon: Calendar,
    title: "Cal.com v2 — Prise de RDV",
    description: "Serveurs EU, types d'événements équipe, champs dynamiques. L'agent prend les rendez-vous directement dans la conversation WhatsApp, en temps réel.",
    exclusive: false,
  },
  {
    icon: Webhook,
    title: "Webhooks & Automatisations",
    description: "Déclencheurs sur fin de conversation avec transcript complet, variables extraites et évaluation IA. Connecte HubSpot, Salesforce, Notion et tout outil externe.",
    exclusive: false,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Fonctionnalités"
          title="Ce que votre agent IA WhatsApp sait faire"
          subtitle="Des capacités uniques sur le marché, construites pour les entreprises qui veulent automatiser sans sacrifier la qualité."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
