"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/shared/SectionTitle";

// ── Flow diagram: how the agent processes a WhatsApp message ──

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

function Arrow({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex justify-center py-1">
        <svg width="2" height="28" viewBox="0 0 2 28">
          <line x1="1" y1="0" x2="1" y2="22" stroke="#25D366" strokeWidth="1.5" strokeDasharray="4 2" />
          <polygon points="1,28 -3,20 5,20" fill="#25D366" />
        </svg>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center px-1">
      <svg width="28" height="2" viewBox="0 0 28 2">
        <line x1="0" y1="1" x2="22" y2="1" stroke="#25D366" strokeWidth="1.5" strokeDasharray="4 2" />
        <polygon points="28,1 20,-3 20,5" fill="#25D366" />
      </svg>
    </div>
  );
}

function Box({
  label,
  sub,
  color = "wa",
  icon,
}: {
  label: string;
  sub?: string;
  color?: "wa" | "indigo" | "blue" | "slate";
  icon: string;
}) {
  const palette = {
    wa:     { border: "border-wa/30",     bg: "bg-wa/8",      text: "text-wa",       glow: "shadow-[0_0_16px_rgba(37,211,102,0.12)]" },
    indigo: { border: "border-indigo-500/30", bg: "bg-indigo-500/8", text: "text-indigo-400", glow: "shadow-[0_0_16px_rgba(99,102,241,0.12)]" },
    blue:   { border: "border-sky-400/30",   bg: "bg-sky-400/8",    text: "text-sky-400",    glow: "" },
    slate:  { border: "border-slate-600/50", bg: "bg-surface-2",    text: "text-slate-300",  glow: "" },
  }[color];

  return (
    <div className={`border ${palette.border} ${palette.bg} ${palette.glow} rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[70px] sm:min-w-[90px]`}>
      <span className="text-xl leading-none">{icon}</span>
      <span className={`text-xs font-bold ${palette.text} text-center`} style={{ fontFamily: "Onest, sans-serif" }}>{label}</span>
      {sub && <span className="text-[10px] text-slate-500 text-center">{sub}</span>}
    </div>
  );
}

function SplitArrows() {
  // Three arrows spreading out from center
  return (
    <div className="flex items-start justify-center gap-6 py-1">
      {/* left */}
      <svg width="60" height="32" viewBox="0 0 60 32" className="-mr-4">
        <path d="M 30 0 L 30 8 Q 30 14 8 14 L 8 32" fill="none" stroke="#25D366" strokeWidth="1.5" strokeDasharray="4 2" />
        <polygon points="8,32 4,24 12,24" fill="#25D366" />
      </svg>
      {/* center */}
      <svg width="2" height="32" viewBox="0 0 2 32">
        <line x1="1" y1="0" x2="1" y2="26" stroke="#25D366" strokeWidth="1.5" strokeDasharray="4 2" />
        <polygon points="1,32 -3,24 5,24" fill="#25D366" />
      </svg>
      {/* right */}
      <svg width="60" height="32" viewBox="0 0 60 32" className="-ml-4">
        <path d="M 30 0 L 30 8 Q 30 14 52 14 L 52 32" fill="none" stroke="#25D366" strokeWidth="1.5" strokeDasharray="4 2" />
        <polygon points="52,32 48,24 56,24" fill="#25D366" />
      </svg>
    </div>
  );
}

function MergeArrows() {
  return (
    <div className="flex items-start justify-center gap-6 py-1">
      <svg width="60" height="32" viewBox="0 0 60 32" className="-mr-4">
        <path d="M 8 0 L 8 18 Q 8 24 30 24 L 30 32" fill="none" stroke="#25D366" strokeWidth="1.5" strokeDasharray="4 2" />
      </svg>
      <svg width="2" height="32" viewBox="0 0 2 32">
        <line x1="1" y1="0" x2="1" y2="26" stroke="#25D366" strokeWidth="1.5" strokeDasharray="4 2" />
        <polygon points="1,32 -3,24 5,24" fill="#25D366" />
      </svg>
      <svg width="60" height="32" viewBox="0 0 60 32" className="-ml-4">
        <path d="M 52 0 L 52 18 Q 52 24 30 24 L 30 32" fill="none" stroke="#25D366" strokeWidth="1.5" strokeDasharray="4 2" />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp()}>
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
          />
        </motion.div>

        {/* Flowchart */}
        <motion.div
          {...fadeUp(0.15)}
          className="mt-12 flex flex-col items-center"
        >
          {/* 1 — Incoming message */}
          <Box icon="💬" label={t("messageLabel")} sub={t("messageSub")} color="wa" />
          <Arrow vertical />

          {/* 2 — Type detection */}
          <div className="border border-slate-600/40 bg-surface-2 rounded-xl px-5 py-2.5 text-xs text-slate-300 font-semibold" style={{ fontFamily: "Onest, sans-serif" }}>
            🔍 {t("typeDetected")}
          </div>
          <SplitArrows />

          {/* 3 — Three branches */}
          <div className="flex items-start gap-3 sm:gap-6">
            <Box icon="📸" label={t("photoLabel")} sub={t("photoSub")} color="indigo" />
            <Box icon="🎙️" label={t("audioLabel")} sub={t("audioSub")} color="blue" />
            <Box icon="✍️" label={t("textLabel")} sub={t("textSub")} color="slate" />
          </div>
          <MergeArrows />

          {/* 4 — AI processing */}
          <Box icon="🤖" label={t("agentLabel")} sub={t("agentSub")} color="wa" />
          <Arrow vertical />

          {/* 5 — Response sent */}
          <Box icon="✅" label={t("responseLabel")} sub={t("responseSub")} color="wa" />
          <Arrow vertical />

          {/* 6 — Parallel actions */}
          <div className="border border-slate-600/40 bg-surface-2 rounded-xl px-5 py-2.5 text-xs text-slate-300 font-semibold" style={{ fontFamily: "Onest, sans-serif" }}>
            ⚡ {t("actionsTriggered")}
          </div>
          <SplitArrows />

          <div className="flex items-start gap-3 sm:gap-6">
            <Box icon="📋" label={t("crmLabel")} sub={t("crmSub")} color="indigo" />
            <Box icon="📅" label={t("calLabel")} sub={t("calSub")} color="indigo" />
            <Box icon="🔔" label={t("notifLabel")} sub={t("notifSub")} color="indigo" />
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div {...fadeUp(0.3)} className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { color: "bg-wa", label: t("legendMain") },
            { color: "bg-indigo-500", label: t("legendAi") },
            { color: "bg-slate-500", label: t("legendNlp") },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`} />
              <span className="text-xs text-slate-400">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
