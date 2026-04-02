"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

function setCookie(name: string, value: string, days: number): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value};expires=${expires};path=/;SameSite=Lax`;
}

export default function CookieBanner() {
  const t = useTranslations("cookies");
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    setCookie("cookie_consent", "accepted", 365);
    setVisible(false);
    // Dispatch event so GoogleAnalytics component can react
    window.dispatchEvent(new Event("cookie_consent_changed"));
  }

  function handleRefuse() {
    setCookie("cookie_consent", "refused", 365);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-16 sm:bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0a0f1a]/95 backdrop-blur-sm px-4 py-3">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-300">
          {t("message")}{" "}
          <Link
            href={`/${locale}/politique-confidentialite`}
            className="underline underline-offset-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            {t("link")}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={handleRefuse}
            className="rounded-md border border-white/10 px-4 py-1.5 text-sm text-slate-300 transition-colors hover:bg-white/5"
          >
            {t("refuse")}
          </button>
          <button
            onClick={handleAccept}
            className="rounded-md bg-emerald-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-emerald-500"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
