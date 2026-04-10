"use client";
import Link from "next/link";
import { MessageCircle, Home, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-extrabold text-wa/20 mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
          404
        </div>
        <h1
          className="text-3xl font-extrabold text-white mb-4"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("title")}
        </h1>
        <p className="text-slate-400 mb-8 leading-relaxed">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center justify-center gap-2 bg-surface border border-surface-2 hover:border-wa/40 text-white rounded-xl px-6 py-3 text-sm font-medium transition-colors"
          >
            <Home size={16} />
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 text-sm font-bold transition-colors"
          >
            <MessageCircle size={16} />
            {t("contact")}
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <Link href={`/${locale}/services/agent-ia-whatsapp`} className="hover:text-wa transition-colors">Agent IA WhatsApp</Link>
          <Link href={`/${locale}/tarifs`} className="hover:text-wa transition-colors">{tNav("tarifs")}</Link>
          <Link href={`/${locale}/blog`} className="hover:text-wa transition-colors">{tNav("blog")}</Link>
        </div>
      </div>
    </div>
  );
}
