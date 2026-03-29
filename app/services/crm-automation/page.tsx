import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Database, RefreshCw, Webhook } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation CRM WhatsApp — Intégration IA",
  description: "Connectez votre agent IA WhatsApp à HubSpot, Salesforce, Notion et plus. Mise à jour automatique des contacts, deals et activités depuis WhatsApp.",
};

const features = [
  "Synchronisation bidirectionnelle avec HubSpot",
  "Création automatique de contacts et deals Salesforce",
  "Mise à jour des propriétés CRM depuis les conversations",
  "Intégration Notion pour les équipes no-code",
  "Webhooks entrants et sortants personnalisables",
  "Logs d'activité WhatsApp dans le CRM",
  "Alertes commerciales en temps réel (Slack, email)",
  "Mapping champs personnalisé selon votre CRM",
];

const integrations = [
  { name: "HubSpot", desc: "Contacts, deals, activités, séquences" },
  { name: "Salesforce", desc: "Leads, opportunities, tasks, notes" },
  { name: "Notion", desc: "Bases de données, pages, propriétés" },
  { name: "Airtable", desc: "Tables, records, vues filtrées" },
  { name: "Make / Zapier", desc: "Automatisations via webhooks" },
  { name: "Cal.com", desc: "Prise de RDV directement dans WhatsApp" },
];

export default function CrmAutomationPage() {
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
          Automatisation CRM
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          Votre agent WhatsApp met à jour votre CRM en temps réel.
          Fini la saisie manuelle — chaque conversation enrichit votre base.
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

      {/* How */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Comment ça fonctionne
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: MessageCircle, step: "1", title: "Conversation WhatsApp", desc: "Le client répond à votre agent IA — questions, informations, demandes." },
            { icon: Webhook, step: "2", title: "Traitement IA", desc: "L'agent extrait les données clés : nom, budget, besoin, qualification." },
            { icon: Database, step: "3", title: "Mise à jour CRM", desc: "Les données sont poussées dans votre CRM instantanément via webhook." },
          ].map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="bg-surface border border-surface-2 rounded-xl p-5 text-center">
              <div className="w-10 h-10 rounded-full bg-wa/10 border border-wa/30 flex items-center justify-center mx-auto mb-3">
                <span className="text-wa text-sm font-bold">{step}</span>
              </div>
              <Icon size={18} className="text-wa mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1 text-sm">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Intégrations disponibles
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {integrations.map(({ name, desc }) => (
            <div key={name} className="bg-surface border border-surface-2 hover:border-wa/30 rounded-xl p-4 transition-colors">
              <div className="font-semibold text-white text-sm mb-1">{name}</div>
              <div className="text-slate-400 text-xs">{desc}</div>
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
          Connectez WhatsApp à votre CRM
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          Dites-nous quel CRM vous utilisez et on vous montre exactement
          comment l'automatiser — audit gratuit de 30 minutes.
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
