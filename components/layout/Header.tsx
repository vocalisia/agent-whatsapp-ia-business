"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, ChevronDown, Bot, UserCheck, Megaphone, Settings, Calendar, Zap, BarChart3, Wand2 } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import MobileNav from "./MobileNav";

const serviceIcons: Record<string, React.ReactNode> = {
  "agent-ia-whatsapp": <Bot size={15} />,
  "qualification-leads": <UserCheck size={15} />,
  "campagnes-whatsapp": <Megaphone size={15} />,
  "crm-automation": <Settings size={15} />,
  "prise-de-rdv": <Calendar size={15} />,
  "automatisation": <Zap size={15} />,
  "marketing-hub": <BarChart3 size={15} />,
  "agent-sur-mesure": <Wand2 size={15} />,
};

const serviceLabels: Record<string, Record<string, string>> = {
  "agent-ia-whatsapp":     { fr: "Agent IA WhatsApp",       en: "WhatsApp AI Agent",       de: "WhatsApp KI-Agent",         nl: "WhatsApp AI-agent" },
  "qualification-leads":   { fr: "Qualification de leads",   en: "Lead qualification",       de: "Lead-Qualifizierung",        nl: "Leadkwalificatie" },
  "campagnes-whatsapp":    { fr: "Campagnes WhatsApp",       en: "WhatsApp campaigns",       de: "WhatsApp-Kampagnen",         nl: "WhatsApp-campagnes" },
  "crm-automation":        { fr: "CRM & Automation",         en: "CRM & Automation",         de: "CRM & Automatisierung",      nl: "CRM & Automatisering" },
  "prise-de-rdv":          { fr: "Prise de RDV",             en: "Appointment booking",      de: "Terminvereinbarung",         nl: "Afspraken boeken" },
  "automatisation":        { fr: "Automatisation",           en: "Automation",               de: "Automatisierung",            nl: "Automatisering" },
  "marketing-hub":         { fr: "Marketing Hub",            en: "Marketing Hub",            de: "Marketing Hub",              nl: "Marketing Hub" },
  "agent-sur-mesure":      { fr: "Agent sur-mesure",         en: "Custom agent",             de: "Maßgeschneiderter Agent",    nl: "Maatwerk agent" },
};

const serviceKeys = [
  "agent-ia-whatsapp",
  "qualification-leads",
  "campagnes-whatsapp",
  "crm-automation",
  "prise-de-rdv",
  "automatisation",
  "marketing-hub",
  "agent-sur-mesure",
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { href: `/${locale}/integrations`, label: t("integrations") },
    { href: `/${locale}/cas-clients`, label: t("casClients") },
    { href: `/${locale}/secteurs`, label: t("secteurs") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Link href={`/${locale}`} className="flex items-center gap-2 font-bold text-xl">
            <MessageCircle className="text-wa" size={24} />
            <span className="text-white">
              Agentic<span className="text-wa">Whatsup</span>
            </span>
          </Link>
          <a
            href="https://vocalis.pro"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 bg-surface border border-surface-2 hover:border-wa/40 rounded-full px-2.5 py-1 transition-colors group"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7" cy="7" r="6.5" stroke="#25D366" strokeWidth="1"/>
              <path d="M4 5L7 9.5L10 5" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors font-medium">
              by <span className="text-slate-300">vocalis.pro</span>
            </span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              {t("services")}
              <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-surface border border-surface-2 rounded-xl shadow-xl py-2 z-50">
                {serviceKeys.map((key) => (
                  <Link
                    key={key}
                    href={`/${locale}/services/${key}`}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-300 hover:text-wa hover:bg-wa/5 transition-colors"
                  >
                    <span className="text-wa/60">{serviceIcons[key]}</span>
                    {serviceLabels[key][locale] ?? serviceLabels[key].fr}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-1 bg-surface border border-surface-2 rounded-lg p-0.5">
            {([
              { code: "fr", flag: "🇫🇷" },
              { code: "en", flag: "🇬🇧" },
              { code: "de", flag: "🇩🇪" },
              { code: "nl", flag: "🇳🇱" },
            ] as const).map((l) => (
              <Link
                key={l.code}
                href={`/${l.code}`}
                className={`px-2 py-1 rounded-md text-xs font-medium transition-colors ${
                  locale === l.code
                    ? "bg-wa/20 text-wa"
                    : "text-slate-500 hover:text-white"
                }`}
              >
                {l.flag}
              </Link>
            ))}
          </div>
          <Link
            href={`/${locale}/contact`}
            className="flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
          >
            <MessageCircle size={16} />
            {t("audit")}
          </Link>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
