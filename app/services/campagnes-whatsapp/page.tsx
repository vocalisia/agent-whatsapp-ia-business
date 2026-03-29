import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Send, Users, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Campagnes WhatsApp sortantes — Service IA",
  description: "Envoyez des campagnes WhatsApp ciblées et personnalisées grâce à l'IA. Templates Meta pré-approuvés, personnalisation dynamique, analytics en temps réel.",
};

const features = [
  "Templates Meta pré-approuvés pour vos envois",
  "Personnalisation dynamique (nom, entreprise, produit)",
  "Segmentation avancée de vos contacts",
  "Suivi des taux d'ouverture et de réponse",
  "Automatisation des séquences de relance",
  "Conformité RGPD et opt-out automatique",
  "Intégration CRM pour ciblage précis",
  "Rapports de performance détaillés",
];

const useCases = [
  {
    icon: Send,
    title: "Relance de prospects",
    desc: "Réactivez vos leads froids avec des messages personnalisés au bon moment.",
  },
  {
    icon: Users,
    title: "Onboarding clients",
    desc: "Accueillez chaque nouveau client avec une séquence automatisée bienvenue.",
  },
  {
    icon: BarChart3,
    title: "Promotions & offres",
    desc: "Diffusez vos offres ponctuelles à des segments précis de votre base.",
  },
  {
    icon: MessageCircle,
    title: "Notifications transactionnelles",
    desc: "Confirmations de commande, livraison, rappels de RDV — automatiquement.",
  },
];

export default function CampagnesWhatsAppPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">
          Service
        </span>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Campagnes WhatsApp sortantes
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          Touchez vos clients là où ils lisent vraiment. WhatsApp affiche
          98 % de taux d'ouverture — 5× plus que l'e-mail.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold transition-colors"
          >
            Audit gratuit
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/41799394222"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <MessageCircle size={16} />
            Écrire sur WhatsApp
          </a>
        </div>
      </div>

      {/* Use cases */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Cas d'usage
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-surface border border-surface-2 rounded-xl p-6 flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-wa/10 border border-wa/20 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-wa" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-16 bg-surface border border-surface-2 rounded-2xl p-8">
        <h2
          className="text-2xl font-bold text-white mb-6"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Ce qui est inclus
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
              <Check size={16} className="text-wa shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center bg-wa/5 border border-wa/20 rounded-2xl p-10">
        <h2
          className="text-2xl font-bold text-white mb-3"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Lancez votre première campagne WhatsApp
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          On s'occupe de tout : rédaction des templates, validation Meta,
          segmentation et envoi. Démarrage en 1 à 2 semaines.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-8 py-3 font-bold transition-colors"
        >
          Réserver mon audit gratuit
          <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}
