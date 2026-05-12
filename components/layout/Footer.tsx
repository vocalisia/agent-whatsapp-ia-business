"use client";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const contactLabel: Record<string, string> = { fr: "Contact", en: "Contact", de: "Kontakt", nl: "Contact" };
const integrationsLabel: Record<string, string> = { fr: "Intégrations", en: "Integrations", de: "Integrationen", nl: "Integraties" };
const casClientsLabel: Record<string, string> = { fr: "Cas clients", en: "Case studies", de: "Referenzen", nl: "Klantcases" };
const securiteLabel: Record<string, string> = { fr: "Sécurité & RGPD", en: "Security & GDPR", de: "Sicherheit & DSGVO", nl: "Beveiliging & AVG" };
const agentSurMesureLabel: Record<string, string> = { fr: "Agent sur-mesure", en: "Custom agent", de: "Maßgeschneiderter Agent", nl: "Maatwerk agent" };
const automatisationLabel: Record<string, string> = { fr: "Automatisation", en: "Automation", de: "Automatisierung", nl: "Automatisering" };
const marketingHubLabel: Record<string, string> = { fr: "Marketing Hub", en: "Marketing Hub", de: "Marketing Hub", nl: "Marketing Hub" };

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "41799394222";
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  return (
    <footer className="bg-surface border-t border-surface-2 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg mb-3">
            <MessageCircle className="text-wa" size={20} />
            <span>
              Agentic<span className="text-wa">Whatsup</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm mb-4">
            {t("tagline")}
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/agenticwhatsup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-surface-2 hover:bg-wa/20 hover:text-wa flex items-center justify-center text-slate-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="https://wa.me/41799394222"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-surface-2 hover:bg-wa/20 hover:text-wa flex items-center justify-center text-slate-400 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={15} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">{t("servicesTitle")}</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link
                href={`/${locale}/services/agent-ia-whatsapp`}
                className="hover:text-wa transition-colors"
              >
                {t("serviceAgent")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/services/qualification-leads`}
                className="hover:text-wa transition-colors"
              >
                {t("serviceLeads")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/services/campagnes-whatsapp`}
                className="hover:text-wa transition-colors"
              >
                {t("serviceCampaigns")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/services/automatisation`} className="hover:text-wa transition-colors">
                {automatisationLabel[locale] ?? "Automatisation"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/services/marketing-hub`} className="hover:text-wa transition-colors">
                {marketingHubLabel[locale] ?? "Marketing Hub"}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">{t("resourcesTitle")}</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href={`/${locale}/integrations`} className="hover:text-wa transition-colors">
                {integrationsLabel[locale] ?? "Intégrations"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/cas-clients`} className="hover:text-wa transition-colors">
                {casClientsLabel[locale] ?? "Cas clients"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/secteurs`} className="hover:text-wa transition-colors">
                {t("secteursTitle")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/services/agent-sur-mesure`} className="hover:text-wa transition-colors">
                {agentSurMesureLabel[locale] ?? "Agent sur-mesure"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/securite`} className="hover:text-wa transition-colors">
                {securiteLabel[locale] ?? "Sécurité & RGPD"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog`} className="hover:text-wa transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="hover:text-wa transition-colors">
                {contactLabel[locale] ?? "Contact"}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-3">{t("legalTitle")}</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link
                href={`/${locale}/mentions-legales`}
                className="hover:text-wa transition-colors"
              >
                {t("legalMentions")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/politique-confidentialite`}
                className="hover:text-wa transition-colors"
              >
                {t("legalPrivacy")}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/cookies`} className="hover:text-wa transition-colors">
                {locale === "nl" ? "Cookiebeleid" : locale === "de" ? "Cookie-Richtlinie" : locale === "en" ? "Cookie Policy" : "Cookies"}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/comparatif`} className="hover:text-wa transition-colors">
                {locale === "nl" ? "Vergelijkingen" : locale === "de" ? "Vergleiche" : locale === "en" ? "Comparisons" : "Comparatif"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-surface-2 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {t("copyright")}
      </div>
      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg border-t border-surface flex">
        <a
          href={`https://wa.me/${waNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-wa text-white font-semibold py-4 text-sm"
        >
          <MessageCircle size={18} />
          {t("mobileWhatsapp")}
        </a>
        <a
          href={calLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-indigo-500 text-white font-semibold py-4 text-sm"
        >
          {t("mobileBook")}
        </a>
      </div>
    </footer>
  );
}
