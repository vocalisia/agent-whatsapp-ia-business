"use client";
import { motion } from "framer-motion";
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
    <div className={`border ${palette.border} ${palette.bg} ${palette.glow} rounded-xl px-4 py-3 flex flex-col items-center gap-1 min-w-[90px]`}>
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
  return (
    <section className="py-24 px-4 sm:px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp()}>
          <SectionTitle
            eyebrow="Architecture IA"
            title="Comment l'agent traite chaque message"
          />
        </motion.div>

        {/* Flowchart */}
        <motion.div
          {...fadeUp(0.15)}
          className="mt-12 flex flex-col items-center"
        >
          {/* 1 — Incoming message */}
          <Box icon="💬" label="Message WhatsApp" sub="client → agent" color="wa" />
          <Arrow vertical />

          {/* 2 — Type detection */}
          <div className="border border-slate-600/40 bg-surface-2 rounded-xl px-5 py-2.5 text-xs text-slate-300 font-semibold" style={{ fontFamily: "Onest, sans-serif" }}>
            🔍 Type de message détecté ?
          </div>
          <SplitArrows />

          {/* 3 — Three branches */}
          <div className="flex items-start gap-6">
            <Box icon="📸" label="Photo / Doc" sub="Vision IA" color="indigo" />
            <Box icon="🎙️" label="Message vocal" sub="Audio IA" color="blue" />
            <Box icon="✍️" label="Texte" sub="NLP Agent" color="slate" />
          </div>
          <MergeArrows />

          {/* 4 — AI processing */}
          <Box icon="🤖" label="Agent IA" sub="Analyse & génère la réponse" color="wa" />
          <Arrow vertical />

          {/* 5 — Response sent */}
          <Box icon="✅" label="Réponse envoyée" sub="< 3 secondes" color="wa" />
          <Arrow vertical />

          {/* 6 — Parallel actions */}
          <div className="border border-slate-600/40 bg-surface-2 rounded-xl px-5 py-2.5 text-xs text-slate-300 font-semibold" style={{ fontFamily: "Onest, sans-serif" }}>
            ⚡ Actions automatiques déclenchées
          </div>
          <SplitArrows />

          <div className="flex items-start gap-6">
            <Box icon="📋" label="CRM" sub="Lead créé" color="indigo" />
            <Box icon="📅" label="RDV Cal.com" sub="Agenda mis à jour" color="indigo" />
            <Box icon="🔔" label="Notification" sub="Équipe alertée" color="indigo" />
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div {...fadeUp(0.3)} className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { color: "bg-wa", label: "Flux principal" },
            { color: "bg-indigo-500", label: "Modules IA" },
            { color: "bg-slate-500", label: "Traitement NLP" },
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
