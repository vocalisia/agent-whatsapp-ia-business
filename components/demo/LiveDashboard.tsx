"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageSquare,
  Zap,
  Target,
  Coins,
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
      ? "Chaud"
      : score >= 30
        ? "Tiede"
        : "Froid";

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
        transition-all duration-300
        ${highlight ? "ring-1 ring-wa/30 shadow-[0_0_12px_rgba(37,211,102,0.1)]" : ""}
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
            text-lg transition-all duration-300
            ${
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

/* ─── Language flag mapping ─── */

function getLanguageFlag(code: string): string {
  const flags: Record<string, string> = {
    FR: "\uD83C\uDDEB\uD83C\uDDF7",
    EN: "\uD83C\uDDEC\uD83C\uDDE7",
    ES: "\uD83C\uDDEA\uD83C\uDDF8",
    DE: "\uD83C\uDDE9\uD83C\uDDEA",
    IT: "\uD83C\uDDEE\uD83C\uDDF9",
    PT: "\uD83C\uDDF5\uD83C\uDDF9",
    AR: "\uD83C\uDDF8\uD83C\uDDE6",
    ZH: "\uD83C\uDDE8\uD83C\uDDF3",
    JA: "\uD83C\uDDEF\uD83C\uDDF5",
    NL: "\uD83C\uDDF3\uD83C\uDDF1",
  };
  return flags[code.toUpperCase()] ?? "\uD83C\uDF10";
}

/* ─── Comparison section ─── */

function ComparisonSection({
  messageCount,
  lastResponseTime,
  leadScore,
  conversationCost,
}: {
  messageCount: number;
  lastResponseTime: number;
  leadScore: number;
  conversationCost: number;
}) {
  const responseFormatted =
    lastResponseTime > 0 ? `${(lastResponseTime / 1000).toFixed(1)}s` : "---";
  const responseRate = Math.min(100, Math.round(60 + messageCount * 5));
  const leadsQualified = leadScore > 70 ? 1 : 0;

  return (
    <div className="rounded-xl border border-surface-3 bg-surface/80 backdrop-blur-sm p-3">
      <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium text-center mb-3">
        Sans IA vs Avec IA
      </p>
      <div className="grid grid-cols-2 gap-3">
        {/* Sans IA */}
        <div className="space-y-2">
          <div className="text-center mb-2">
            <span className="text-[10px] font-semibold text-red-400/80 uppercase tracking-wider">
              Sans IA
            </span>
          </div>
          {[
            "45 min reponse",
            "40% taux reponse",
            "0 leads qualifies",
            "12\u20AC/conversation",
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
              Avec IA
            </span>
          </div>
          {[
            { value: responseFormatted, label: "reponse" },
            { value: `${responseRate}%`, label: "taux reponse" },
            { value: `${leadsQualified} leads qualifies`, label: "" },
            {
              value: `${conversationCost.toFixed(2)}\u20AC/conv`,
              label: "",
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
  conversationCost,
  sentiment,
  languageDetected,
  isTyping,
}: DashboardProps) {
  const animatedCount = useAnimatedValue(messageCount);
  const animatedCost = useAnimatedValue(conversationCost);
  const prevCountRef = useRef(messageCount);
  const [recentUpdate, setRecentUpdate] = useState(false);

  useEffect(() => {
    if (messageCount !== prevCountRef.current) {
      prevCountRef.current = messageCount;
      setRecentUpdate(true);
      const timer = setTimeout(() => setRecentUpdate(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [messageCount]);

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
          Dashboard temps reel
        </h3>
      </div>

      {/* Messages */}
      <KpiCard
        icon={<MessageSquare size={16} className="text-wa" />}
        label="Messages traites"
        highlight={recentUpdate}
      >
        <span className="text-lg font-bold text-white tabular-nums">
          {Math.round(animatedCount)}
        </span>
      </KpiCard>

      {/* Response time */}
      <KpiCard
        icon={<Zap size={16} className="text-amber-400" />}
        label="Temps de reponse"
        highlight={recentUpdate}
      >
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-white tabular-nums">
            {lastResponseTime > 0
              ? `${(lastResponseTime / 1000).toFixed(1)}s`
              : "---"}
          </span>
          <span className="text-[10px] text-red-400/60 line-through">
            Humain moyen : 45 min
          </span>
        </div>
      </KpiCard>

      {/* Lead score */}
      <KpiCard
        icon={<Target size={16} className="text-wa" />}
        label="Score Lead"
      >
        <LeadScoreRing score={leadScore} />
      </KpiCard>

      {/* Cost */}
      <KpiCard
        icon={<Coins size={16} className="text-amber-400" />}
        label="Cout conversation"
        highlight={recentUpdate}
      >
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-white tabular-nums">
            {animatedCost.toFixed(2)}&euro;
          </span>
          <span className="text-[10px] text-red-400/60 line-through">
            vs 12&euro; humain
          </span>
        </div>
      </KpiCard>

      {/* Sentiment */}
      <KpiCard
        icon={<Heart size={16} className="text-pink-400" />}
        label="Sentiment"
      >
        <SentimentDisplay sentiment={sentiment} />
      </KpiCard>

      {/* Language */}
      <KpiCard
        icon={<Globe size={16} className="text-sky-400" />}
        label="Langue detectee"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{getLanguageFlag(languageDetected)}</span>
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
        conversationCost={conversationCost}
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
