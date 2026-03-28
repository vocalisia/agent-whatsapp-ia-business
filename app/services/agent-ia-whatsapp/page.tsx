import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTAButton from "@/components/shared/CTAButton";
import SectionTitle from "@/components/shared/SectionTitle";

export const metadata: Metadata = {
  title: "Agent IA WhatsApp Business — Service complet",
  description: "Découvrez notre service d'agent IA WhatsApp : transcription vocale, analyse de photos, prise de RDV, intégrations CRM. Déploiement en 2–3 semaines.",
};

const faqItems = [
  {
    question: "Comment fonctionne la transcription vocale WhatsApp ?",
    answer: "L'agent transcrit chaque message vocal grâce à un modèle de reconnaissance vocale, selon la langue configurée. Le transcript est traité comme du texte normal, et l'IA répond de façon contextuelle.",
  },
  {
    question: "Quels types de photos l'agent peut-il analyser ?",
    answer: "Documents (CNI, justificatifs, contrats, factures), photos de biens immobiliers, captures d'écran, photos de produits, prescriptions médicales — tout type d'image.",
  },
  {
    question: "L'agent peut-il remplir des documents avec les photos reçues ?",
    answer: "Oui. Si un client envoie une photo de sa pièce d'identité ou d'un formulaire, l'agent extrait les informations et les enregistre dans votre CRM ou pré-remplit un dossier automatiquement.",
  },
  {
    question: "Faut-il un compte WhatsApp Business existant ?",
    answer: "Vous avez besoin d'un compte WhatsApp Business API via Meta. Nous vous accompagnons dans la création, la connexion et l'approbation des templates.",
  },
  {
    question: "Comment fonctionne la règle des 24h de Meta ?",
    answer: "Notre agent gère cette contrainte automatiquement : il utilise des templates pré-approuvés pour relancer les conversations inactives depuis plus de 24h.",
  },
  {
    question: "L'agent peut-il gérer plusieurs langues ?",
    answer: "Oui. L'agent détecte automatiquement la langue du client et répond dans la même langue (français, anglais, arabe, espagnol, etc.).",
  },
  {
    question: "Combien de conversations simultanées peut-il gérer ?",
    answer: "L'agent est scalable et peut gérer des centaines de conversations simultanées sans dégradation de qualité.",
  },
  {
    question: "Quelle est la conformité RGPD de la solution ?",
    answer: "Rétention des données configurable par type, nettoyage automatique planifié, hébergement possible sur serveurs EU via Cal.com v2.",
  },
];

const relatedServices = [
  { title: "Automatisation CRM", href: "/services/crm-automation", description: "Connectez votre agent WhatsApp à HubSpot, Salesforce ou Pipedrive." },
  { title: "Campagnes WhatsApp sortantes", href: "/services/campagnes-whatsapp", description: "Prospection et relance automatisée via templates Meta approuvés." },
  { title: "Intégration Cal.com", href: "/services/prise-de-rdv", description: "Prise de rendez-vous intelligente directement dans WhatsApp." },
];

export default function ServiceAgentIAWhatsAppPage() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "/contact";

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
              Service — Agent IA WhatsApp
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Votre agent IA WhatsApp Business,{" "}
              <span className="text-gradient-wa">clé en main</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              De l&apos;analyse des besoins à la mise en production — nous déployons votre agent IA WhatsApp en 2 à 3 semaines. Vision IA, transcription vocale, prise de RDV, intégrations CRM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                href={calLink}
                label="Réserver une démo gratuite"
                variant="wa"
                icon={Calendar}
                size="lg"
                external
              />
              <CTAButton
                href={`https://wa.me/${waNumber}`}
                label="Nous écrire sur WhatsApp"
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
            title="Un investissement adapté à votre activité"
            subtitle="Chaque projet est différent. Contactez-nous pour un devis personnalisé basé sur vos volumes et vos intégrations."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/tarifs" label="Voir les formules" variant="wa" size="lg" />
            <CTAButton href="/contact" label="Demander un devis" variant="outline" size="lg" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="FAQ"
          title="Questions fréquentes sur l'agent IA WhatsApp"
        />
        <FAQAccordion items={faqItems} />
      </section>

      {/* Related services */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-surface-2">
        <SectionTitle
          eyebrow="Services associés"
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
            Prêt à déployer votre agent IA WhatsApp ?
          </h2>
          <p className="text-slate-400 text-lg mb-8">30 minutes pour analyser vos besoins. Proposition sous 48h.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={calLink} label="Réserver un diagnostic gratuit" variant="wa" icon={Calendar} size="lg" external />
            <CTAButton href={`https://wa.me/${waNumber}`} label="Écrire sur WhatsApp" variant="outline" icon={MessageCircle} size="lg" external />
          </div>
        </div>
      </section>
    </>
  );
}
