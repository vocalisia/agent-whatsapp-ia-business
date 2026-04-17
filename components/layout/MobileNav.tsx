"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle, ChevronDown, Play } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const serviceLabels: Record<string, Record<string, string>> = {
  "agent-ia-whatsapp":   { fr: "Agent IA WhatsApp",     en: "WhatsApp AI Agent",     de: "WhatsApp KI-Agent",       nl: "WhatsApp AI-agent" },
  "qualification-leads": { fr: "Qualification de leads", en: "Lead qualification",    de: "Lead-Qualifizierung",     nl: "Leadkwalificatie" },
  "campagnes-whatsapp":  { fr: "Campagnes WhatsApp",     en: "WhatsApp campaigns",    de: "WhatsApp-Kampagnen",      nl: "WhatsApp-campagnes" },
  "crm-automation":      { fr: "CRM & Automation",       en: "CRM & Automation",      de: "CRM & Automatisierung",   nl: "CRM & Automatisering" },
  "prise-de-rdv":        { fr: "Prise de RDV",           en: "Appointment booking",   de: "Terminvereinbarung",      nl: "Afspraken boeken" },
  "automatisation":      { fr: "Automatisation",         en: "Automation",            de: "Automatisierung",         nl: "Automatisering" },
  "marketing-hub":       { fr: "Marketing Hub",          en: "Marketing Hub",         de: "Marketing Hub",           nl: "Marketing Hub" },
  "agent-sur-mesure":    { fr: "Agent sur-mesure",       en: "Custom agent",          de: "Maßgeschneiderter Agent", nl: "Maatwerk agent" },
};

const serviceKeys = [
  "agent-ia-whatsapp", "qualification-leads", "campagnes-whatsapp",
  "crm-automation", "prise-de-rdv", "automatisation", "marketing-hub", "agent-sur-mesure",
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;

  const links = [
    { href: `/${locale}/integrations`, label: t("integrations") },
    { href: `/${locale}/cas-clients`, label: t("casClients") },
    { href: `/${locale}/secteurs`, label: t("secteurs") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 text-slate-300 hover:text-white"
        aria-label="Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-sm md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-1 p-6">
            {/* Services accordion */}
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center justify-between w-full text-lg font-medium text-slate-200 hover:text-wa transition-colors py-2 border-b border-surface"
            >
              {t("services")}
              <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-1 py-2">
                {serviceKeys.map((key) => (
                  <Link
                    key={key}
                    href={`/${locale}/services/${key}`}
                    onClick={() => setOpen(false)}
                    className="text-sm text-slate-400 hover:text-wa transition-colors py-1.5"
                  >
                    {serviceLabels[key][locale] ?? serviceLabels[key].fr}
                  </Link>
                ))}
              </div>
            )}
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-wa transition-colors py-2 border-b border-surface"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={`/${locale}/demo`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors"
            >
              <Play size={18} />
              Tester l&apos;Agent IA
            </Link>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-2 bg-wa text-white font-semibold px-5 py-3 rounded-lg"
            >
              <MessageCircle size={18} />
              {t("whatsapp")}
            </a>
            {/* Language switcher */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-surface">
              {([
                { code: "fr", flag: "🇫🇷", label: "FR" },
                { code: "en", flag: "🇬🇧", label: "EN" },
                { code: "de", flag: "🇩🇪", label: "DE" },
                { code: "nl", flag: "🇳🇱", label: "NL" },
              ] as const).map((l) => (
                <Link
                  key={l.code}
                  href={`/${l.code}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    locale === l.code
                      ? "bg-wa/20 text-wa border border-wa/30"
                      : "bg-surface border border-surface-2 text-slate-400 hover:text-white"
                  }`}
                >
                  {l.flag} {l.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
