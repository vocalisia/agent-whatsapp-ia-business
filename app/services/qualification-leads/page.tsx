import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Target, Zap, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Qualification de leads WhatsApp — Service IA",
  description: "Qualifiez automatiquement vos leads via WhatsApp grâce à l'IA. Filtrez, scorez et transmettez uniquement les prospects chauds à vos équipes commerciales.",
};

const features = [
  "Questionnaire de qualification automatique",
  "Scoring IA en temps réel selon vos critères",
  "Transmission automatique au CRM (HubSpot, Salesforce, Notion)",
  "Relances automatiques des prospects inactifs",
  "Gestion des vocaux et photos pour qualifier",
  "Rapports hebdomadaires de performance",
];

const steps = [
  {
    icon: MessageCircle,
    title: "Le prospect envoie un message",
    desc: "Via votre numéro WhatsApp Business — texte, vocal ou photo.",
  },
  {
    icon: Filter,
    title: "L'IA pose les bonnes questions",
    desc: "Budget, besoin, délai, autorité — adapté à votre secteur.",
  },
  {
    icon: Target,
    title: "Score de qualification calculé",
    desc: "Chaque prospect reçoit un score selon vos critères métier.",
  },
  {
    icon: Zap,
    title: "Transmission au commercial",
    desc: "Seuls les prospects qualifiés arrivent dans votre CRM ou Slack.",
  },
];

export default function QualificationLeadsPage() {
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
          Qualification de leads WhatsApp
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          Filtrez vos prospects automatiquement. Votre équipe commerciale ne parle
          qu'aux leads vraiment intéressés.
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

      {/* How it works */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Comment ça fonctionne
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="bg-surface border border-surface-2 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-wa/10 border border-wa/30 flex items-center justify-center shrink-0">
                  <span className="text-wa text-xs font-bold">{i + 1}</span>
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
          Prêt à qualifier vos leads automatiquement ?
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          Réservez un audit gratuit de 30 minutes — on analyse vos flux et on vous
          propose une solution sur-mesure sous 48h.
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
