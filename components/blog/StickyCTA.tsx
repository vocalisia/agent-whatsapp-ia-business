"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X, MessageCircle } from "lucide-react";

const labels: Record<string, { title: string; button: string; sub: string }> = {
  fr: { title: "Prêt à automatiser votre WhatsApp ?", button: "Audit gratuit 30 min", sub: "Réponse sous 24h — sans engagement" },
  en: { title: "Ready to automate your WhatsApp?", button: "Free 30-min audit", sub: "Reply within 24h — no commitment" },
  de: { title: "Bereit, Ihr WhatsApp zu automatisieren?", button: "Kostenloser 30-Min-Audit", sub: "Antwort innerhalb von 24h — unverbindlich" },
  nl: { title: "Klaar om uw WhatsApp te automatiseren?", button: "Gratis 30-min audit", sub: "Antwoord binnen 24u — vrijblijvend" },
};

export default function StickyCTA({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const l = labels[locale] ?? labels.fr;

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled > 0.35) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-[#111827] border-t border-wa/30 shadow-2xl px-4 py-3 sm:py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <MessageCircle size={22} className="text-wa shrink-0" />
            <div className="min-w-0">
              <p className="text-white font-semibold text-sm leading-tight truncate">{l.title}</p>
              <p className="text-slate-400 text-xs hidden sm:block">{l.sub}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/${locale}/contact`}
              className="bg-wa hover:bg-wa/90 text-white font-bold text-sm rounded-xl px-4 py-2 transition-colors whitespace-nowrap"
            >
              {l.button}
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="text-slate-500 hover:text-white transition-colors p-1"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
