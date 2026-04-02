import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Send, Users, BarChart3 } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: t("campagnes.title"),
    description: t("campagnes.subtitle"),
  };
}

const features = [
  "Templates Meta pr\u00e9-approuv\u00e9s pour vos envois",
  "Personnalisation dynamique (nom, entreprise, produit)",
  "Segmentation avanc\u00e9e de vos contacts",
  "Suivi des taux d'ouverture et de r\u00e9ponse",
  "Automatisation des s\u00e9quences de relance",
  "Conformit\u00e9 RGPD et opt-out automatique",
  "Int\u00e9gration CRM pour ciblage pr\u00e9cis",
  "Rapports de performance d\u00e9taill\u00e9s",
];

const useCases = [
  {
    icon: Send,
    title: "Relance de prospects",
    desc: "R\u00e9activez vos leads froids avec des messages personnalis\u00e9s au bon moment.",
  },
  {
    icon: Users,
    title: "Onboarding clients",
    desc: "Accueillez chaque nouveau client avec une s\u00e9quence automatis\u00e9e bienvenue.",
  },
  {
    icon: BarChart3,
    title: "Promotions & offres",
    desc: "Diffusez vos offres ponctuelles \u00e0 des segments pr\u00e9cis de votre base.",
  },
  {
    icon: MessageCircle,
    title: "Notifications transactionnelles",
    desc: "Confirmations de commande, livraison, rappels de RDV \u2014 automatiquement.",
  },
];

export default async function CampagnesWhatsAppPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">
          {t("common.service")}
        </span>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("campagnes.title")}
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          {t("campagnes.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold transition-colors"
          >
            {t("common.auditGratuit")}
            <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/41799394222"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 font-medium transition-colors"
          >
            <MessageCircle size={16} />
            {t("common.ecrireWhatsapp")}
          </a>
        </div>
      </div>

      {/* Use cases */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("campagnes.useCasesTitle")}
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
          {t("campagnes.includedTitle")}
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
          {t("campagnes.ctaTitle")}
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          {t("campagnes.ctaSubtitle")}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-8 py-3 font-bold transition-colors"
        >
          {t("campagnes.ctaButton")}
          <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}
