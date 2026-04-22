"use client";
import { useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  Bot, ShoppingCart, GraduationCap, HeartPulse, Home, UtensilsCrossed,
  Stethoscope, Dumbbell, Car, Scale, Hotel, Play, ArrowRight,
} from "lucide-react";
import WhatsAppSimulatorPro from "@/components/demo/WhatsAppSimulatorPro";
import type { SimulatorConfig } from "@/components/demo/WhatsAppSimulator";

import { generalConfig } from "@/components/demo/configs/general";
import { ecommerceConfig } from "@/components/demo/configs/ecommerce";
import { coachConfig } from "@/components/demo/configs/coach";
import { assuranceConfig } from "@/components/demo/configs/assurance";
import { immobilierConfig } from "@/components/demo/configs/immobilier";
import { restaurantConfig } from "@/components/demo/configs/restaurant";
import { medicalConfig } from "@/components/demo/configs/medical";
import { fitnessConfig } from "@/components/demo/configs/fitness";
import { automobileConfig } from "@/components/demo/configs/automobile";
import { juridiqueConfig } from "@/components/demo/configs/juridique";
import { hotelConfig } from "@/components/demo/configs/hotel";

import { generalConfigEN } from "@/components/demo/configs/general-en";
import { ecommerceConfigEN } from "@/components/demo/configs/ecommerce-en";
import { coachConfigEN } from "@/components/demo/configs/coach-en";
import { assuranceConfigEN } from "@/components/demo/configs/assurance-en";
import { immobilierConfigEN } from "@/components/demo/configs/immobilier-en";
import { restaurantConfigEN } from "@/components/demo/configs/restaurant-en";
import { medicalConfigEN } from "@/components/demo/configs/medical-en";
import { fitnessConfigEN } from "@/components/demo/configs/fitness-en";
import { automobileConfigEN } from "@/components/demo/configs/automobile-en";
import { juridiqueConfigEN } from "@/components/demo/configs/juridique-en";
import { hotelConfigEN } from "@/components/demo/configs/hotel-en";

import { generalConfigDE } from "@/components/demo/configs/general-de";
import { ecommerceConfigDE } from "@/components/demo/configs/ecommerce-de";
import { coachConfigDE } from "@/components/demo/configs/coach-de";
import { assuranceConfigDE } from "@/components/demo/configs/assurance-de";
import { immobilierConfigDE } from "@/components/demo/configs/immobilier-de";
import { restaurantConfigDE } from "@/components/demo/configs/restaurant-de";
import { medicalConfigDE } from "@/components/demo/configs/medical-de";
import { fitnessConfigDE } from "@/components/demo/configs/fitness-de";
import { automobileConfigDE } from "@/components/demo/configs/automobile-de";
import { juridiqueConfigDE } from "@/components/demo/configs/juridique-de";
import { hotelConfigDE } from "@/components/demo/configs/hotel-de";

import { generalConfigNL } from "@/components/demo/configs/general-nl";
import { ecommerceConfigNL } from "@/components/demo/configs/ecommerce-nl";
import { coachConfigNL } from "@/components/demo/configs/coach-nl";
import { assuranceConfigNL } from "@/components/demo/configs/assurance-nl";
import { immobilierConfigNL } from "@/components/demo/configs/immobilier-nl";
import { restaurantConfigNL } from "@/components/demo/configs/restaurant-nl";
import { medicalConfigNL } from "@/components/demo/configs/medical-nl";
import { fitnessConfigNL } from "@/components/demo/configs/fitness-nl";
import { automobileConfigNL } from "@/components/demo/configs/automobile-nl";
import { juridiqueConfigNL } from "@/components/demo/configs/juridique-nl";
import { hotelConfigNL } from "@/components/demo/configs/hotel-nl";

type SectorMap = Record<string, SimulatorConfig>;

const SECTOR_CONFIGS: Record<string, SectorMap> = {
  fr: {
    general: generalConfig, ecommerce: ecommerceConfig, coach: coachConfig,
    assurance: assuranceConfig, immobilier: immobilierConfig, restaurant: restaurantConfig,
    medical: medicalConfig, fitness: fitnessConfig, automobile: automobileConfig,
    juridique: juridiqueConfig, hotel: hotelConfig,
  },
  en: {
    general: generalConfigEN, ecommerce: ecommerceConfigEN, coach: coachConfigEN,
    assurance: assuranceConfigEN, immobilier: immobilierConfigEN, restaurant: restaurantConfigEN,
    medical: medicalConfigEN, fitness: fitnessConfigEN, automobile: automobileConfigEN,
    juridique: juridiqueConfigEN, hotel: hotelConfigEN,
  },
  de: {
    general: generalConfigDE, ecommerce: ecommerceConfigDE, coach: coachConfigDE,
    assurance: assuranceConfigDE, immobilier: immobilierConfigDE, restaurant: restaurantConfigDE,
    medical: medicalConfigDE, fitness: fitnessConfigDE, automobile: automobileConfigDE,
    juridique: juridiqueConfigDE, hotel: hotelConfigDE,
  },
  nl: {
    general: generalConfigNL, ecommerce: ecommerceConfigNL, coach: coachConfigNL,
    assurance: assuranceConfigNL, immobilier: immobilierConfigNL, restaurant: restaurantConfigNL,
    medical: medicalConfigNL, fitness: fitnessConfigNL, automobile: automobileConfigNL,
    juridique: juridiqueConfigNL, hotel: hotelConfigNL,
  },
};

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

export default function HeroSimulator() {
  const locale = useLocale();
  const t = useTranslations("demo");
  const [activeSector, setActiveSector] = useState<string>("general");
  const configs = SECTOR_CONFIGS[locale] ?? SECTOR_CONFIGS.fr;
  const config = configs[activeSector] ?? configs.general;

  return (
    <div className="w-full" style={{ overflow: 'hidden' }}>
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
      <div className="lg:hidden mb-4" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <div style={{ display: 'flex', gap: '8px', paddingBottom: '8px', width: 'max-content' }}>
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
        <div className="relative w-full max-w-md" style={{ overflow: 'hidden' }}>
          <div className="absolute -inset-4 bg-wa/10 rounded-[3rem] blur-3xl pointer-events-none" />
          <div className="relative" style={{ maxWidth: '100%' }}>
            <WhatsAppSimulatorPro config={config} sectorKey={activeSector} />
          </div>
        </div>
      </div>
    </div>
  );
}
