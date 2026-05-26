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
    const id = window.setTimeout(() => {
      const consent = getCookie("cookie_consent");
      if (!consent) setVisible(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  // Hide vocalis widget while banner is visible so nothing overlaps accept/refuse.
  useEffect(() => {
    if (!visible) return;
    const style = document.createElement("style");
    style.setAttribute("data-cookie-banner", "true");
    style.textContent = `
      iframe[src*="vocalis.pro"],
      iframe[id*="vocalis"],
      [class*="vocalis"] { display: none !important; visibility: hidden !important; }
    `;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, [visible]);

  function handleAccept() {
    setCookie("cookie_consent", "accepted", 365);
    setVisible(false);
    window.dispatchEvent(new Event("cookie_consent_changed"));
  }

  function handleRefuse() {
    setCookie("cookie_consent", "rejected", 365);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop to dim the rest of the page + prevent clicks through */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-[9990] bg-black/40 backdrop-blur-[2px] md:hidden"
        style={{ pointerEvents: "auto" }}
      />
      <div
        className="fixed left-0 right-0 z-[9991] border-t border-white/10 px-4 py-4 sm:py-3"
        style={{
          bottom: 0,
          backgroundColor: "#0a0f1a",
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)",
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-msg"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p
            id="cookie-banner-msg"
            className="text-[13px] sm:text-sm leading-relaxed text-slate-300"
          >
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
              className="flex-1 sm:flex-none rounded-lg border border-white/15 px-5 py-3 sm:py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 active:bg-white/10"
            >
              {t("refuse")}
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none rounded-lg bg-emerald-600 px-5 py-3 sm:py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-500 active:bg-emerald-700"
            >
              {t("accept")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
