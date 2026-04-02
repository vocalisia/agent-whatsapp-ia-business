"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;

  const links = [
    { href: `/${locale}/services/agent-ia-whatsapp`, label: t("services") },
    { href: `/${locale}/tarifs`, label: t("tarifs") },
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
        <div className="fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col gap-4 p-6">
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
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 bg-wa text-white font-semibold px-5 py-3 rounded-lg"
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
