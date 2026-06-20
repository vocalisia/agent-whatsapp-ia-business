"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  Bot, ShoppingCart, GraduationCap, HeartPulse, Home, UtensilsCrossed,
  Stethoscope, Dumbbell, Car, Scale, Hotel, Play, ArrowRight,
} from "lucide-react";
import type { SimulatorConfig } from "@/components/demo/WhatsAppSimulator";

// Defer the heavy Pro simulator to client-only render (it ships ~30KB minified + chat state)
const WhatsAppSimulatorPro = dynamic(
  () => import("@/components/demo/WhatsAppSimulatorPro"),
  {
    ssr: false,
    loading: () => (
      <div
        className="rounded-3xl bg-surface border border-surface-3 animate-pulse"
        style={{ aspectRatio: "9 / 16", maxWidth: 380, width: "100%" }}
        aria-hidden="true"
      />
    ),
  }
);

const SECTORS = [
  { key: "general", labelKey: "sectorGeneral", icon: Bot },
  { key: "ecommerce", labelKey: "sectorEcommerce", icon: ShoppingCart },
  { key: "coach", labelKey: "sectorCoach", icon: GraduationCap },
  { key: "assurance", labelKey: "sectorAssurance", icon: HeartPulse },
  { key: "immobilier", labelKey: "sectorImmobilier", icon: Home },
  { key: "restaurant", labelKey: "sectorRestaurant", icon: UtensilsCrossed },
  { key: "medical", labelKey: "sectorMedical", icon: Stethoscope },
  { key: "fitness", labelKey: "sectorFitness", icon: Dumbbell },
  { key: "automobile", labelKey: "sectorAuto", icon: Car },
  { key: "juridique", labelKey: "sectorJuridique", icon: Scale },
  { key: "hotel", labelKey: "sectorHotel", icon: Hotel },
] as const;

type SectorKey = (typeof SECTORS)[number]["key"];

// Lazy loader: resolves the per-locale, per-sector config on demand.
// This replaces 44 static top-level imports (~12K LOC, ~895KB unused JS in the main bundle).
async function loadSectorConfig(locale: string, sector: SectorKey): Promise<SimulatorConfig> {
  const suffix = locale === "fr" ? "" : `-${locale}`;
  const exportSuffix = locale === "fr" ? "" : locale.toUpperCase();

  switch (sector) {
    case "general":
      return (await import(`@/components/demo/configs/general${suffix}`))[`generalConfig${exportSuffix}`];
    case "ecommerce":
      return (await import(`@/components/demo/configs/ecommerce${suffix}`))[`ecommerceConfig${exportSuffix}`];
    case "coach":
      return (await import(`@/components/demo/configs/coach${suffix}`))[`coachConfig${exportSuffix}`];
    case "assurance":
      return (await import(`@/components/demo/configs/assurance${suffix}`))[`assuranceConfig${exportSuffix}`];
    case "immobilier":
      return (await import(`@/components/demo/configs/immobilier${suffix}`))[`immobilierConfig${exportSuffix}`];
    case "restaurant":
      return (await import(`@/components/demo/configs/restaurant${suffix}`))[`restaurantConfig${exportSuffix}`];
    case "medical":
      return (await import(`@/components/demo/configs/medical${suffix}`))[`medicalConfig${exportSuffix}`];
    case "fitness":
      return (await import(`@/components/demo/configs/fitness${suffix}`))[`fitnessConfig${exportSuffix}`];
    case "automobile":
      return (await import(`@/components/demo/configs/automobile${suffix}`))[`automobileConfig${exportSuffix}`];
    case "juridique":
      return (await import(`@/components/demo/configs/juridique${suffix}`))[`juridiqueConfig${exportSuffix}`];
    case "hotel":
      return (await import(`@/components/demo/configs/hotel${suffix}`))[`hotelConfig${exportSuffix}`];
  }
}

export default function HeroSimulator() {
  const locale = useLocale();
  const t = useTranslations("demo");
  const [activeSector, setActiveSector] = useState<SectorKey>("general");
  const [config, setConfig] = useState<SimulatorConfig | null>(null);

  // Load config when sector or locale changes. Initial load is deferred to the client
  // so it never blocks the LCP h1 in the hero text column.
  useEffect(() => {
    let cancelled = false;
    loadSectorConfig(locale, activeSector)
      .then((cfg) => {
        if (!cancelled) setConfig(cfg);
      })
      .catch(() => {
        // Fallback: try French general so the simulator is never permanently empty
        if (!cancelled && (locale !== "fr" || activeSector !== "general")) {
          loadSectorConfig("fr", "general").then((cfg) => {
            if (!cancelled) setConfig(cfg);
          });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [locale, activeSector]);

  return (
    <div className="w-full" style={{ overflow: "hidden" }}>
      {/* Top CTA above phone */}
      <div className="flex justify-center mb-4">
        <Link
          href={`/${locale}/demo`}
          className="group inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all min-h-[44px]"
        >
          <Play size={16} className="shrink-0" />
          {t("tryAgent")}
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
        </Link>
      </div>

      {/* Mobile: horizontal scroll sectors */}
      <div className="lg:hidden mb-4" style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
        <div style={{ display: "flex", gap: "8px", paddingBottom: "8px", width: "max-content" }}>
          {SECTORS.map(({ key, labelKey, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveSector(key)}
              className={`inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all min-h-[44px] whitespace-nowrap ${
                activeSector === key
                  ? "bg-wa text-white shadow-lg shadow-wa/20"
                  : "bg-surface border border-surface-3 text-slate-400 active:border-wa/30"
              }`}
            >
              <Icon size={14} />
              {t(labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: sectors on side + phone */}
      <div className="flex items-start gap-4 justify-center">
        {/* Left side vertical sectors (desktop only) */}
        <div className="hidden lg:flex flex-col gap-1 w-[180px] shrink-0 pt-2">
          {SECTORS.map(({ key, labelKey, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveSector(key)}
              className={`inline-flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all min-h-[44px] text-left ${
                activeSector === key
                  ? "bg-wa text-white shadow-lg shadow-wa/20"
                  : "text-slate-400 hover:bg-surface hover:text-white"
              }`}
            >
              <Icon size={16} className="flex-shrink-0" />
              <span className="truncate">{t(labelKey)}</span>
            </button>
          ))}
        </div>

        {/* Phone simulator */}
        <div className="relative w-full max-w-md" style={{ overflow: "hidden" }}>
          <div className="absolute -inset-4 bg-wa/10 rounded-[3rem] blur-3xl pointer-events-none" />
          <div className="relative" style={{ maxWidth: "100%" }}>
            {config ? (
              <WhatsAppSimulatorPro key={`${locale}-${activeSector}`} config={config} sectorKey={activeSector} />
            ) : (
              <div
                className="rounded-3xl bg-surface border border-surface-3 animate-pulse"
                style={{ aspectRatio: "9 / 16", maxWidth: 380, width: "100%" }}
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
