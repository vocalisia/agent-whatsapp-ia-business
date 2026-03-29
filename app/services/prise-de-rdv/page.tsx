import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Calendar, Clock, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Prise de RDV automatisée WhatsApp — Cal.com",
  description: "Laissez vos clients prendre rendez-vous directement via WhatsApp. Intégration Cal.com v2, disponibilités en temps réel, confirmations automatiques.",
};

const features = [
  "Prise de RDV directement dans la conversation WhatsApp",
  "Intégration Cal.com v2 — disponibilités en temps réel",
  "Confirmations et rappels automatiques",
  "Annulation et reprogrammation en libre-service",
  "Synchronisation Google Calendar et Outlook",
  "Gestion multi-agendas et multi-intervenants",
  "Fuseau horaire détecté automatiquement",
  "Envoi de lien de visio (Zoom, Google Meet) automatique",
];

export default function PriseDeRdvPage() {
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
          Prise de RDV via WhatsApp
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          Vos clients réservent un créneau sans quitter WhatsApp.
          Fini les allers-retours pour trouver un horaire.
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

      {/* Steps */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          En 3 étapes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: MessageCircle,
              step: "1",
              title: "Le client demande un RDV",
              desc: "\"Je veux prendre un RDV\" — l'agent comprend la demande et propose les créneaux disponibles.",
            },
            {
              icon: Calendar,
              step: "2",
              title: "Le client choisit son créneau",
              desc: "L'agent affiche les disponibilités Cal.com en temps réel. Le client répond avec son choix.",
            },
            {
              icon: Clock,
              step: "3",
              title: "Confirmation automatique",
              desc: "RDV créé dans l'agenda, confirmation WhatsApp + email, rappel 24h avant.",
            },
          ].map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="bg-surface border border-surface-2 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-wa/10 border border-wa/30 flex items-center justify-center shrink-0">
                  <span className="text-wa text-xs font-bold">{step}</span>
                </div>
                <Icon size={16} className="text-wa" />
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
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
          Automatisez vos prises de RDV
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          Déploiement en moins d'une semaine. Réservez un audit gratuit
          et on configure tout ensemble.
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
