import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, MessageCircle, Calendar, Clock, RefreshCw } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: t("rdv.title"),
    description: t("rdv.subtitle"),
  };
}

const features = [
  "Prise de RDV directement dans la conversation WhatsApp",
  "Int\u00e9gration Cal.com v2 \u2014 disponibilit\u00e9s en temps r\u00e9el",
  "Confirmations et rappels automatiques",
  "Annulation et reprogrammation en libre-service",
  "Synchronisation Google Calendar et Outlook",
  "Gestion multi-agendas et multi-intervenants",
  "Fuseau horaire d\u00e9tect\u00e9 automatiquement",
  "Envoi de lien de visio (Zoom, Google Meet) automatique",
];

export default async function PriseDeRdvPage({ params }: { params: Promise<{ locale: string }> }) {
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
          {t("rdv.title")}
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto">
          {t("rdv.subtitle")}
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

      {/* Steps */}
      <div className="mb-16">
        <h2
          className="text-2xl font-bold text-white text-center mb-8"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("rdv.stepsTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              icon: MessageCircle,
              step: "1",
              title: "Le client demande un RDV",
              desc: "\"Je veux prendre un RDV\" \u2014 l'agent comprend la demande et propose les cr\u00e9neaux disponibles.",
            },
            {
              icon: Calendar,
              step: "2",
              title: "Le client choisit son cr\u00e9neau",
              desc: "L'agent affiche les disponibilit\u00e9s Cal.com en temps r\u00e9el. Le client r\u00e9pond avec son choix.",
            },
            {
              icon: Clock,
              step: "3",
              title: "Confirmation automatique",
              desc: "RDV cr\u00e9\u00e9 dans l'agenda, confirmation WhatsApp + email, rappel 24h avant.",
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
          {t("rdv.includedTitle")}
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
          {t("rdv.ctaTitle")}
        </h2>
        <p className="text-slate-400 mb-6 max-w-xl mx-auto">
          {t("rdv.ctaSubtitle")}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-8 py-3 font-bold transition-colors"
        >
          {t("rdv.ctaButton")}
          <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}
