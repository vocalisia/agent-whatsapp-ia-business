"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  MessageSquare,
  Zap,
  Target,
  Heart,
  Globe,
} from "lucide-react";

/* ─── Types ─── */

interface DashboardProps {
  messageCount: number;
  lastResponseTime: number;
  leadScore: number;
  conversationCost: number;
  sentiment: "positive" | "neutral" | "negative";
  languageDetected: string;
  isTyping: boolean;
}

/* ─── Animated counter hook ─── */

function useAnimatedValue(target: number, duration = 600): number {
  const [current, setCurrent] = useState(target);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef({ value: target, time: 0 });

  useEffect(() => {
    const startValue = current;
    const startTime = performance.now();
    startRef.current = { value: startValue, time: startTime };

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = startValue + (target - startValue) * eased;
      setCurrent(next);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return current;
}

/* ─── Lead score ring ─── */

function LeadScoreRing({
  score,
  size = 72,
  strokeWidth = 5,
}: {
  score: number;
  size?: number;
  strokeWidth?: number;
}) {
  const t = useTranslations("dashboard");
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const animatedScore = useAnimatedValue(score);
  const offset = circumference - (animatedScore / 100) * circumference;

  const color =
    score > 70
      ? "#22c55e"
      : score >= 30
        ? "#f59e0b"
        : "#ef4444";

  const label =
    score > 70
      ? t("hot")
      : score >= 30
        ? t("warm")
        : t("cold");

  return (
    <div className="flex flex-col items-center gap-1">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
        style={{ filter: `drop-shadow(0 0 6px ${color}40)` }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1E2E47"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
          style={{
            animation: score > 0 ? "pulse-ring 2s ease-in-out infinite" : "none",
          }}
        />
        <text
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize="16"
          fontWeight="700"
          className="transform rotate-90 origin-center"
        >
          {Math.round(animatedScore)}
        </text>
      </svg>
      <span
        className="text-[10px] font-semibold tracking-wide uppercase"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

/* ─── KPI card wrapper ─── */

function KpiCard({
  icon,
  label,
  children,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`
        rounded-xl border border-surface-3 bg-surface/80 backdrop-blur-sm
        px-3 py-2.5 flex items-center gap-3
        transition-all duration-300 ${highlight ? "ring-1 ring-wa/30 shadow-[0_0_12px_rgba(37,211,102,0.1)]" : ""}
      `}
    >
      <div className="w-8 h-8 rounded-lg bg-wa/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
          {label}
        </p>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  );
}

/* ─── Sentiment display ─── */

function SentimentDisplay({
  sentiment,
}: {
  sentiment: "positive" | "neutral" | "negative";
}) {
  const items: Array<{
    key: "negative" | "neutral" | "positive";
    emoji: string;
  }> = [
    { key: "negative", emoji: "\uD83D\uDE24" },
    { key: "neutral", emoji: "\uD83D\uDE10" },
    { key: "positive", emoji: "\uD83D\uDE0A" },
  ];

  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <span
          key={item.key}
          className={`
            text-lg transition-all duration-300 ${
              sentiment === item.key
                ? "scale-125 opacity-100"
                : "scale-90 opacity-30 grayscale"
            }
          `}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}

/* ─── Language flag SVG ─── */

function LanguageFlag({ code }: { code: string }) {
  const c = code.toUpperCase();
  return (
    <svg width="22" height="15" viewBox="0 0 18 12" className="rounded-[2px] flex-shrink-0">
      {c === "FR" && (<><rect width="6" height="12" fill="#002395" /><rect x="6" width="6" height="12" fill="#FFF" /><rect x="12" width="6" height="12" fill="#ED2939" /></>)}
      {c === "EN" && (<><rect width="18" height="12" fill="#012169" /><path d="M0,0 L18,12 M18,0 L0,12" stroke="#FFF" strokeWidth="2" /><path d="M0,0 L18,12 M18,0 L0,12" stroke="#C8102E" strokeWidth="1" /><path d="M9,0 V12 M0,6 H18" stroke="#FFF" strokeWidth="3" /><path d="M9,0 V12 M0,6 H18" stroke="#C8102E" strokeWidth="1.5" /></>)}
      {c === "DE" && (<><rect width="18" height="4" fill="#000" /><rect y="4" width="18" height="4" fill="#DD0000" /><rect y="8" width="18" height="4" fill="#FFCE00" /></>)}
      {c === "NL" && (<><rect width="18" height="4" fill="#AE1C28" /><rect y="4" width="18" height="4" fill="#FFF" /><rect y="8" width="18" height="4" fill="#21468B" /></>)}
      {c === "ES" && (<><rect width="18" height="3" fill="#AA151B" /><rect y="3" width="18" height="6" fill="#F1BF00" /><rect y="9" width="18" height="3" fill="#AA151B" /></>)}
      {c === "IT" && (<><rect width="6" height="12" fill="#009246" /><rect x="6" width="6" height="12" fill="#FFF" /><rect x="12" width="6" height="12" fill="#CE2B37" /></>)}
      {c === "PT" && (<><rect width="7.2" height="12" fill="#046A38" /><rect x="7.2" width="10.8" height="12" fill="#DA291C" /></>)}
      {!["FR","EN","DE","NL","ES","IT","PT"].includes(c) && (<rect width="18" height="12" fill="#6B7280" />)}
    </svg>
  );
}

/* ─── Comparison section ─── */

function ComparisonSection({
  messageCount,
  lastResponseTime,
  leadScore,
}: {
  messageCount: number;
  lastResponseTime: number;
  leadScore: number;
}) {
  const t = useTranslations("dashboard");
  const responseFormatted =
    lastResponseTime > 0 ? `${(lastResponseTime / 1000).toFixed(1)}s` : "---";
  const responseRate = Math.min(100, Math.round(60 + messageCount * 5));
  const leadsQualified = leadScore > 70 ? 1 : 0;

  return (
    <div className="rounded-xl border border-surface-3 bg-surface/80 backdrop-blur-sm p-3">
      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium text-center mb-3">
        {t("withoutAI").toUpperCase()} VS {t("withAI").toUpperCase()}
      </p>
      <div className="grid grid-cols-2 gap-3">
        {/* Sans IA */}
        <div className="space-y-2">
          <div className="text-center mb-2">
            <span className="text-[10px] font-semibold text-red-400/80 uppercase tracking-wider">
              {t("withoutAI").toUpperCase()}
            </span>
          </div>
          {[
            t("response45"),
            t("rate40"),
            t("leads0"),
            t("cost12"),
          ].map((text) => (
            <div
              key={text}
              className="text-[11px] text-red-400/60 bg-red-500/5 border border-red-500/10 rounded-lg px-2 py-1.5 text-center"
            >
              {text}
            </div>
          ))}
        </div>

        {/* Avec IA */}
        <div className="space-y-2">
          <div className="text-center mb-2">
            <span className="text-[10px] font-semibold text-wa uppercase tracking-wider">
              {t("withAI").toUpperCase()}
            </span>
          </div>
          {[
            { value: responseFormatted, label: t("responseTime").toLowerCase() },
            { value: `${responseRate}%`, label: t("responseRate") },
            { value: `${leadsQualified} ${t("qualifiedLeads")}`, label: "" },
            {
              value: `${Math.min(100, responseRate + Math.round(leadScore / 5))}%`,
              label: t("conv"),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="text-[11px] text-wa bg-wa/5 border border-wa/15 rounded-lg px-2 py-1.5 text-center transition-all duration-500"
              style={{
                animation: "glow-pulse 2s ease-in-out infinite",
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {item.label
                ? `${item.value} ${item.label}`
                : item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─── */

export default function LiveDashboard({
  messageCount,
  lastResponseTime,
  leadScore,
  sentiment,
  languageDetected,
  isTyping,
}: DashboardProps) {
  const t = useTranslations("dashboard");
  const animatedCount = useAnimatedValue(messageCount);
  const animatedImpact = useAnimatedValue(Math.min(100, leadScore + messageCount * 3));
  const recentUpdate = messageCount > 1;

  return (
    <div className="w-full max-w-xs space-y-2.5">
      {/* Title */}
      <div className="flex items-center gap-2 px-1">
        <div
          className={`w-2 h-2 rounded-full ${isTyping ? "bg-amber-400 animate-pulse" : "bg-wa animate-pulse"}`}
        />
        <h3
          className="text-xs font-semibold text-slate-400 uppercase tracking-widest"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          {t("title").toUpperCase()}
        </h3>
      </div>

      {/* Messages */}
      <KpiCard
        icon={<MessageSquare size={16} className="text-wa" />}
        label={t("messages").toUpperCase()}
        highlight={recentUpdate}
      >
        <span className="text-lg font-bold text-white tabular-nums">
          {Math.round(animatedCount)}
        </span>
      </KpiCard>

      {/* Response time */}
      <KpiCard
        icon={<Zap size={16} className="text-amber-400" />}
        label={t("responseTime").toUpperCase()}
        highlight={recentUpdate}
      >
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-white tabular-nums">
            {lastResponseTime > 0
              ? `${(lastResponseTime / 1000).toFixed(1)}s`
              : "---"}
          </span>
          <span className="text-[10px] text-red-400/60 line-through">
            {t("humanAvg")}
          </span>
        </div>
      </KpiCard>

      {/* Lead score */}
      <KpiCard
        icon={<Target size={16} className="text-wa" />}
        label={t("leadScore").toUpperCase()}
      >
        <LeadScoreRing score={leadScore} />
      </KpiCard>

      {/* Conversation impact */}
      <KpiCard
        icon={<Zap size={16} className="text-amber-400" />}
        label={t("cost").toUpperCase()}
        highlight={recentUpdate}
      >
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-white tabular-nums">
            {Math.round(animatedImpact)}%
          </span>
          <span className="text-[10px] text-red-400/60 line-through">
            {t("vsHuman")}
          </span>
        </div>
      </KpiCard>

      {/* Sentiment */}
      <KpiCard
        icon={<Heart size={16} className="text-pink-400" />}
        label={t("sentiment").toUpperCase()}
      >
        <SentimentDisplay sentiment={sentiment} />
      </KpiCard>

      {/* Language */}
      <KpiCard
        icon={<Globe size={16} className="text-sky-400" />}
        label={t("language").toUpperCase()}
      >
        <div className="flex items-center gap-2">
          <LanguageFlag code={languageDetected} />
          <span className="text-sm font-semibold text-white">
            {languageDetected}
          </span>
        </div>
      </KpiCard>

      {/* Comparison */}
      <ComparisonSection
        messageCount={messageCount}
        lastResponseTime={lastResponseTime}
        leadScore={leadScore}
      />

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes pulse-ring {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(37, 211, 102, 0);
          }
          50% {
            box-shadow: 0 0 8px rgba(37, 211, 102, 0.15);
          }
        }
      `}</style>
    </div>
  );
}
