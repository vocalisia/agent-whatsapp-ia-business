import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTAButton from "@/components/shared/CTAButton";
import SectionTitle from "@/components/shared/SectionTitle";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: "Agent IA WhatsApp Business",
    description: t("qualificationLeads.subtitle"),
  };
}

const faqItems = [
  {
    question: "Comment fonctionne la transcription vocale WhatsApp ?",
    answer: "L'agent transcrit chaque message vocal gr\u00e2ce \u00e0 un mod\u00e8le de reconnaissance vocale, selon la langue configur\u00e9e. Le transcript est trait\u00e9 comme du texte normal, et l'IA r\u00e9pond de fa\u00e7on contextuelle.",
  },
  {
    question: "Quels types de photos l'agent peut-il analyser ?",
    answer: "Documents (CNI, justificatifs, contrats, factures), photos de biens immobiliers, captures d'\u00e9cran, photos de produits, prescriptions m\u00e9dicales \u2014 tout type d'image.",
  },
  {
    question: "L'agent peut-il remplir des documents avec les photos re\u00e7ues ?",
    answer: "Oui. Si un client envoie une photo de sa pi\u00e8ce d'identit\u00e9 ou d'un formulaire, l'agent extrait les informations et les enregistre dans votre CRM ou pr\u00e9-remplit un dossier automatiquement.",
  },
  {
    question: "Faut-il un compte WhatsApp Business existant ?",
    answer: "Vous avez besoin d'un compte WhatsApp Business API via Meta. Nous vous accompagnons dans la cr\u00e9ation, la connexion et l'approbation des templates.",
  },
  {
    question: "Comment fonctionne la r\u00e8gle des 24h de Meta ?",
    answer: "Notre agent g\u00e8re cette contrainte automatiquement : il utilise des templates pr\u00e9-approuv\u00e9s pour relancer les conversations inactives depuis plus de 24h.",
  },
  {
    question: "L'agent peut-il g\u00e9rer plusieurs langues ?",
    answer: "Oui. L'agent d\u00e9tecte automatiquement la langue du client et r\u00e9pond dans la m\u00eame langue (fran\u00e7ais, anglais, arabe, espagnol, etc.).",
  },
  {
    question: "Combien de conversations simultan\u00e9es peut-il g\u00e9rer ?",
    answer: "L'agent est scalable et peut g\u00e9rer des centaines de conversations simultan\u00e9es sans d\u00e9gradation de qualit\u00e9.",
  },
  {
    question: "Quelle est la conformit\u00e9 RGPD de la solution ?",
    answer: "R\u00e9tention des donn\u00e9es configurable par type, nettoyage automatique planifi\u00e9, h\u00e9bergement possible sur serveurs EU via Cal.com v2.",
  },
];

export default async function ServiceAgentIAWhatsAppPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  const relatedServices = [
    { title: "Automatisation CRM", href: `/${locale}/services/crm-automation`, description: "Connectez votre agent WhatsApp \u00e0 HubSpot, Salesforce ou Pipedrive." },
    { title: "Campagnes WhatsApp sortantes", href: `/${locale}/services/campagnes-whatsapp`, description: "Prospection et relance automatis\u00e9e via templates Meta approuv\u00e9s." },
    { title: "Int\u00e9gration Cal.com", href: `/${locale}/services/prise-de-rdv`, description: "Prise de rendez-vous intelligente directement dans WhatsApp." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-surface/20 to-bg pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-wa/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-6">
              <MessageCircle size={14} />
              {t("common.service")} — Agent IA WhatsApp
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Votre agent IA WhatsApp Business,{" "}
              <span className="text-gradient-wa">cl&eacute; en main</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              De l&apos;analyse des besoins &agrave; la mise en production — nous d&eacute;ployons votre agent IA WhatsApp en 2 &agrave; 3 semaines. Vision IA, transcription vocale, prise de RDV, int&eacute;grations CRM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                href={calLink}
                label={t("common.auditGratuit")}
                variant="wa"
                icon={Calendar}
                size="lg"
                external
              />
              <CTAButton
                href={`https://wa.me/${waNumber}`}
                label={t("common.ecrireWhatsapp")}
                variant="outline"
                icon={MessageCircle}
                size="lg"
                external
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesGrid />

      {/* How it works */}
      <HowItWorks />

      {/* Pricing CTA */}
      <section className="py-20 px-4 sm:px-6 bg-surface/20">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            eyebrow="Tarifs"
            title="Un investissement adapt&eacute; &agrave; votre activit&eacute;"
            subtitle="Chaque projet est diff&eacute;rent. Contactez-nous pour un devis personnalis&eacute; bas&eacute; sur vos volumes et vos int&eacute;grations."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={`/${locale}/tarifs`} label="Voir les formules" variant="wa" size="lg" />
            <CTAButton href={`/${locale}/contact`} label="Demander un devis" variant="outline" size="lg" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions fr&eacute;quentes sur l'agent IA WhatsApp"
        />
        <FAQAccordion items={faqItems} />
      </section>

      {/* Related services */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-surface-2">
        <SectionTitle
          eyebrow="Services associ&eacute;s"
          title="Allez plus loin avec nos autres services"
          centered={false}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedServices.map((s) => (
            <Link key={s.title} href={s.href} className="bg-surface rounded-xl p-6 border border-surface-2 hover:border-wa/50 transition-all duration-300 group">
              <h3 className="font-semibold text-white mb-2 group-hover:text-wa transition-colors">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.description}</p>
              <span className="flex items-center gap-1 text-wa text-sm font-medium">En savoir plus <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wa/10 via-surface to-indigo-500/10 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Pr&ecirc;t &agrave; d&eacute;ployer votre agent IA WhatsApp ?
          </h2>
          <p className="text-slate-400 text-lg mb-8">30 minutes pour analyser vos besoins. Proposition sous 48h.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={calLink} label={t("common.auditGratuit")} variant="wa" icon={Calendar} size="lg" external />
            <CTAButton href={`https://wa.me/${waNumber}`} label={t("common.ecrireWhatsapp")} variant="outline" icon={MessageCircle} size="lg" external />
          </div>
        </div>
      </section>
    </>
  );
}
