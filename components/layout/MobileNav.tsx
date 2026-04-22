"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronDown, Play, TrendingUp, AlertTriangle, Users } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

type Locale = "fr" | "en" | "de" | "nl";

const serviceLabels: Record<string, Record<Locale, string>> = {
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

interface OfferEntry {
  slug: "roi" | "urgent" | "social";
  icon: React.ReactNode;
  labels: Record<Locale, string>;
}

const offerEntries: OfferEntry[] = [
  {
    slug: "roi",
    icon: <TrendingUp size={16} />,
    labels: { fr: "Calculateur ROI", en: "ROI Calculator", de: "ROI-Rechner", nl: "ROI-calculator" },
  },
  {
    slug: "urgent",
    icon: <AlertTriangle size={16} />,
    labels: { fr: "Réponse 8 sec 24/7", en: "8-sec 24/7 reply", de: "8-Sek. 24/7-Antwort", nl: "8-sec 24/7 antwoord" },
  },
  {
    slug: "social",
    icon: <Users size={16} />,
    labels: { fr: "Benchmark 340 PME", en: "340 SMBs Benchmark", de: "340 KMU Benchmark", nl: "340 KMO Benchmark" },
  },
];

const LABELS = {
  offersSection: { fr: "Offres spéciales", en: "Special offers", de: "Spezielle Angebote", nl: "Speciale aanbiedingen" },
  testAgent: { fr: "Tester l'Agent IA", en: "Try the AI Agent", de: "KI-Agent testen", nl: "Probeer AI-agent" },
  languages: { fr: "Langues", en: "Languages", de: "Sprachen", nl: "Talen" },
} satisfies Record<string, Record<Locale, string>>;

function getLocalized<T extends Record<Locale, string>>(obj: T, locale: string): string {
  return obj[(locale as Locale) in obj ? (locale as Locale) : "fr"];
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;

  const close = useCallback(() => {
    setOpen(false);
    setServicesOpen(false);
  }, []);

  // Close on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Body scroll lock + ESC close
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const links = [
    { href: `/${locale}/integrations`, label: t("integrations") },
    { href: `/${locale}/cas-clients`, label: t("casClients") },
    { href: `/${locale}/secteurs`, label: t("secteurs") },
    { href: `/${locale}/blog`, label: t("blog") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + "/");

  const flags = [
    { code: "fr" as const, label: "FR" },
    { code: "en" as const, label: "EN" },
    { code: "de" as const, label: "DE" },
    { code: "nl" as const, label: "NL" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="md:hidden -mr-2 p-2 text-slate-300 hover:text-white active:scale-95 transition-transform"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {open && (
        <div
          className="fixed inset-x-0 z-[9999] md:hidden flex flex-col"
          style={{ backgroundColor: "#050A14", top: "4rem", height: "calc(100dvh - 4rem)" }}
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex-1 overflow-y-auto overscroll-contain px-5 pt-4 pb-8">
            {/* Primary CTAs top */}
            <div className="flex flex-col gap-2.5 mb-5">
              <Link
                href={`/${locale}/demo`}
                onClick={close}
                className="flex items-center justify-center gap-2 bg-indigo-500 active:bg-indigo-600 text-white font-semibold px-5 py-3.5 rounded-xl text-[15px]"
              >
                <Play size={18} />
                {getLocalized(LABELS.testAgent, locale)}
              </Link>
              {waNumber && (
                <a
                  href={`https://wa.me/${waNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex items-center justify-center gap-2 bg-wa active:bg-wa-hover text-white font-semibold px-5 py-3.5 rounded-xl text-[15px]"
                >
                  <MessageCircle size={18} />
                  {t("whatsapp")}
                </a>
              )}
            </div>

            {/* Services accordion */}
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center justify-between w-full text-[17px] font-semibold text-white active:bg-surface/40 -mx-2 px-2 py-3 rounded-lg transition-colors"
              aria-expanded={servicesOpen}
            >
              <span>{t("services")}</span>
              <ChevronDown
                size={18}
                className={`text-slate-400 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="flex flex-col border-l-2 border-surface-2 ml-2 pl-3 mb-2">
                {serviceKeys.map((key) => {
                  const href = `/${locale}/services/${key}`;
                  return (
                    <Link
                      key={key}
                      href={href}
                      onClick={close}
                      className={`text-[14px] py-2.5 transition-colors ${
                        isActive(href) ? "text-wa" : "text-slate-300 active:text-wa"
                      }`}
                    >
                      {serviceLabels[key][locale as Locale] ?? serviceLabels[key].fr}
                    </Link>
                  );
                })}
                <div className="mt-3 pt-3 border-t border-surface/60">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                    {getLocalized(LABELS.offersSection, locale)}
                  </div>
                  {offerEntries.map((offer) => {
                    const href = `/${locale}/${offer.slug}`;
                    return (
                      <Link
                        key={offer.slug}
                        href={href}
                        onClick={close}
                        className={`flex items-center gap-2.5 text-[14px] py-2.5 transition-colors ${
                          isActive(href) ? "text-wa" : "text-slate-300 active:text-wa"
                        }`}
                      >
                        <span className="text-wa/70">{offer.icon}</span>
                        {offer.labels[locale as Locale] ?? offer.labels.fr}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Primary nav links */}
            <div className="flex flex-col divide-y divide-surface/60 border-t border-surface/60 mt-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={close}
                  className={`text-[17px] font-semibold -mx-2 px-2 py-3.5 rounded-lg transition-colors ${
                    isActive(l.href) ? "text-wa" : "text-white active:bg-surface/40"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Language switcher */}
            <div className="mt-6 pt-5 border-t border-surface/60">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2.5">
                {getLocalized(LABELS.languages, locale)}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {flags.map((l) => {
                  const active = locale === l.code;
                  return (
                    <Link
                      key={l.code}
                      href={`/${l.code}`}
                      onClick={close}
                      className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                        active
                          ? "bg-wa/20 text-wa border border-wa/40"
                          : "bg-surface border border-surface-2 text-slate-400 active:text-white"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      <svg width="18" height="12" viewBox="0 0 18 12" className="rounded-[2px] flex-shrink-0">
                        {l.code === "fr" && (
                          <>
                            <rect width="6" height="12" fill="#002395" />
                            <rect x="6" width="6" height="12" fill="#FFFFFF" />
                            <rect x="12" width="6" height="12" fill="#ED2939" />
                          </>
                        )}
                        {l.code === "en" && (
                          <>
                            <rect width="18" height="12" fill="#012169" />
                            <path d="M0,0 L18,12 M18,0 L0,12" stroke="#FFFFFF" strokeWidth="2" />
                            <path d="M0,0 L18,12 M18,0 L0,12" stroke="#C8102E" strokeWidth="1" />
                            <path d="M9,0 V12 M0,6 H18" stroke="#FFFFFF" strokeWidth="3" />
                            <path d="M9,0 V12 M0,6 H18" stroke="#C8102E" strokeWidth="1.5" />
                          </>
                        )}
                        {l.code === "de" && (
                          <>
                            <rect width="18" height="4" fill="#000000" />
                            <rect y="4" width="18" height="4" fill="#DD0000" />
                            <rect y="8" width="18" height="4" fill="#FFCE00" />
                          </>
                        )}
                        {l.code === "nl" && (
                          <>
                            <rect width="18" height="4" fill="#AE1C28" />
                            <rect y="4" width="18" height="4" fill="#FFFFFF" />
                            <rect y="8" width="18" height="4" fill="#21468B" />
                          </>
                        )}
                      </svg>
                      {l.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
