"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Clock, Euro, TrendingUp, Users } from "lucide-react";

/* ─── Animated counter hook ─── */

function useAnimatedValue(target: number, duration = 700): number {
  const [current, setCurrent] = useState(target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const startValue = current;
    const startTime = performance.now();

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

/* ─── Slider component ─── */

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (v: number) => void;
}

function Slider({ label, value, min, max, step, unit = "", onChange }: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-white/70">{label}</span>
        <span className="text-lg font-bold text-wa tabular-nums">
          {value}
          {unit}
        </span>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-2 rounded-full bg-surface-3 overflow-hidden pointer-events-none">
          <div
            className="h-full rounded-full bg-gradient-to-r from-wa/60 to-wa transition-all duration-200"
            style={{ width: `${pct}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="relative z-10 w-full appearance-none bg-transparent cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-wa
            [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(37,211,102,0.5)]
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white/20
            [&::-webkit-slider-thumb]:transition-shadow
            [&::-webkit-slider-thumb]:duration-200
            [&::-webkit-slider-thumb]:hover:shadow-[0_0_20px_rgba(37,211,102,0.7)]
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-wa
            [&::-moz-range-thumb]:shadow-[0_0_12px_rgba(37,211,102,0.5)]
            [&::-moz-range-thumb]:border-2
            [&::-moz-range-thumb]:border-white/20
            [&::-moz-range-track]:bg-transparent
            [&::-webkit-slider-runnable-track]:bg-transparent
          "
        />
      </div>
      <div className="flex justify-between text-xs text-white/30">
        <span>{min}{unit}</span>
        <span>{max}{unit}</span>
      </div>
    </div>
  );
}

/* ─── Result card component ─── */

interface ResultCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  formatter: (v: number) => string;
  subtitle: string;
  highlight?: boolean;
}

function ResultCard({ icon, label, value, formatter, subtitle, highlight = false }: ResultCardProps) {
  const animated = useAnimatedValue(value);

  return (
    <div
      className={`
        relative rounded-2xl border p-5 transition-all duration-500
        ${highlight
          ? "border-wa/40 bg-wa/5 shadow-[0_0_30px_rgba(37,211,102,0.1)]"
          : "border-surface-3 bg-surface/80"
        }
      `}
    >
      {highlight && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-wa/5 to-transparent pointer-events-none" />
      )}
      <div className="relative space-y-3">
        <div className="flex items-center gap-2 text-white/50">
          {icon}
          <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
        </div>
        <div className="text-3xl font-bold text-white tabular-nums tracking-tight">
          {formatter(animated)}
        </div>
        <p className="text-sm text-white/40 leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}

/* ─── Constants ─── */

const BUSINESS_PLAN_PRICE = 247;
const WORKING_HOURS_PER_MONTH = 160;
// Realistic: team spends max 25% of their time on WhatsApp
const WHATSAPP_TIME_RATIO = 0.25;
// AI autonomously handles 70% of messages
const AI_AUTONOMY_RATE = 0.70;

/* ─── Main component ─── */

export default function ROICalculator() {
  const t = useTranslations("roi");
  const locale = useLocale();
  const [messagesPerDay, setMessagesPerDay] = useState(50);
  const [teamSize, setTeamSize] = useState(3);
  const [hourlyCost, setHourlyCost] = useState(25);
  const [avgResponseTime, setAvgResponseTime] = useState(5);

  const results = useMemo(() => {
    const totalMessagesMonth = messagesPerDay * 22; // working days

    // Raw human time if all messages handled manually
    const humanHoursRaw = (totalMessagesMonth * avgResponseTime) / 60;

    // Realistic cap: team can't spend more than 25% of capacity on WhatsApp
    const teamCapHours = teamSize * WORKING_HOURS_PER_MONTH * WHATSAPP_TIME_RATIO;
    const humanHours = Math.min(humanHoursRaw, teamCapHours);

    // AI handles 70% autonomously
    const hoursSaved = humanHours * AI_AUTONOMY_RATE;

    const monthlySavings = hoursSaved * hourlyCost;

    const roi = ((monthlySavings - BUSINESS_PLAN_PRICE) / BUSINESS_PLAN_PRICE) * 100;

    const paybackDays = monthlySavings > 0
      ? Math.ceil((BUSINESS_PLAN_PRICE / monthlySavings) * 30)
      : 999;

    const employeeEquivalent = hoursSaved / WORKING_HOURS_PER_MONTH;

    return {
      hoursSaved,
      humanHoursTotal: humanHours,
      monthlySavings,
      roi,
      paybackDays,
      employeeEquivalent,
    };
  }, [messagesPerDay, teamSize, hourlyCost, avgResponseTime]);

  const fireIndicator = results.roi > 500;

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-surface/50 to-bg pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-wa/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest text-wa border border-wa/20 rounded-full bg-wa/5">
            {t("title")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
            {t("subtitle")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            {t("desc")}
          </p>
        </div>

        {/* Grid: inputs + results */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Sliders */}
          <div className="space-y-1">
            <div className="rounded-2xl border border-surface-3 bg-surface/60 backdrop-blur-sm p-6 sm:p-8 space-y-8">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-wa animate-pulse" />
                {t("params")}
              </h3>

              <Slider
                label={t("messagesDay")}
                value={messagesPerDay}
                min={10}
                max={500}
                step={10}
                onChange={setMessagesPerDay}
              />

              <Slider
                label={t("teamSize")}
                value={teamSize}
                min={1}
                max={20}
                step={1}
                onChange={setTeamSize}
              />

              <Slider
                label={t("hourlyCost")}
                value={hourlyCost}
                min={15}
                max={80}
                step={5}
                unit="€"
                onChange={setHourlyCost}
              />

              <Slider
                label={t("avgResponse")}
                value={avgResponseTime}
                min={2}
                max={20}
                step={1}
                unit={` ${t("min")}`}
                onChange={setAvgResponseTime}
              />
            </div>

            {/* Plan reference */}
            <p className="text-xs text-white/25 text-center pt-2">
              {t("basedOn")}
            </p>
          </div>

          {/* Right: Results */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ResultCard
                icon={<Clock className="w-4 h-4" />}
                label={t("hoursSaved")}
                value={results.hoursSaved}
                formatter={(v) => `${Math.round(v)}h`}
                subtitle={t("vsManual", { hours: Math.round(results.humanHoursTotal) })}
              />

              <ResultCard
                icon={<Euro className="w-4 h-4" />}
                label={t("monthlySavings")}
                value={results.monthlySavings}
                formatter={(v) => `${Math.round(v).toLocaleString("fr-FR")}€`}
                subtitle={t("savingsCalc", { cost: hourlyCost, hours: Math.round(results.hoursSaved) })}
                highlight
              />

              <ResultCard
                icon={<TrendingUp className="w-4 h-4" />}
                label={`${t("roi")} ${fireIndicator ? "🔥" : ""}`}
                value={Math.max(results.roi, 0)}
                formatter={(v) => `${Math.round(v)}%`}
                subtitle={
                  results.roi > 0
                    ? t("payback")
                    : t("roi")
                }
                highlight={results.roi > 100}
              />

              <ResultCard
                icon={<Users className="w-4 h-4" />}
                label={t("equivalent")}
                value={results.employeeEquivalent}
                formatter={(v) => v.toFixed(1)}
                subtitle={t("perPerson")}
              />
            </div>

            {/* ROI bar visual */}
            {results.roi > 0 && (
              <div className="rounded-2xl border border-surface-3 bg-surface/60 p-5 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">{t("returnInvestment")}</span>
                  <span className="text-wa font-bold tabular-nums">
                    {Math.round(results.roi)}%
                    {fireIndicator && " 🔥"}
                  </span>
                </div>
                <div className="h-3 rounded-full bg-surface-3 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-wa/70 via-wa to-wa/70 transition-all duration-700 ease-out"
                    style={{ width: `${Math.min(results.roi / 10, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-white/25">
                  <span>0%</span>
                  <span>500%</span>
                  <span>1000%+</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col items-center gap-5 rounded-2xl border border-surface-3 bg-surface/60 backdrop-blur-sm px-8 py-8 sm:px-12">
            <p className="text-white/70 text-lg">
              {t("withMessages", { count: messagesPerDay, savings: Math.round(results.monthlySavings) })}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-wa text-black font-semibold text-lg
                glow-wa hover:bg-wa-hover transition-all duration-300 hover:scale-105 active:scale-[0.98]"
            >
              {t("bookAudit")}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
