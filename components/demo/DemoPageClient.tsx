'use client';

import { useState, useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import WhatsAppSimulatorPro from '@/components/demo/WhatsAppSimulatorPro';
import type { SimulatorEvent } from '@/components/demo/WhatsAppSimulatorPro';
import LiveDashboard from '@/components/demo/LiveDashboard';
import ROICalculator from '@/components/demo/ROICalculator';
import {
  Zap,
  MessageCircle,
  ShoppingCart,
  GraduationCap,
  Home,
  HeartPulse,
  UtensilsCrossed,
  Stethoscope,
  Dumbbell,
  Car,
  Scale,
  Hotel,
  Phone,
  Workflow,
  Volume2,
  Eye,
  Mic,
  Bot,
  Calendar,
  Shield,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

/* ─── Sector configs — FR ─── */
import { generalConfig } from '@/components/demo/configs/general';
import { ecommerceConfig } from '@/components/demo/configs/ecommerce';
import { coachConfig } from '@/components/demo/configs/coach';
import { assuranceConfig } from '@/components/demo/configs/assurance';
import { immobilierConfig } from '@/components/demo/configs/immobilier';
import { restaurantConfig } from '@/components/demo/configs/restaurant';
import { medicalConfig } from '@/components/demo/configs/medical';
import { fitnessConfig } from '@/components/demo/configs/fitness';
import { automobileConfig } from '@/components/demo/configs/automobile';
import { juridiqueConfig } from '@/components/demo/configs/juridique';
import { hotelConfig } from '@/components/demo/configs/hotel';
/* ─── Sector configs — EN ─── */
import { generalConfigEN } from '@/components/demo/configs/general-en';
import { ecommerceConfigEN } from '@/components/demo/configs/ecommerce-en';
import { coachConfigEN } from '@/components/demo/configs/coach-en';
import { assuranceConfigEN } from '@/components/demo/configs/assurance-en';
import { immobilierConfigEN } from '@/components/demo/configs/immobilier-en';
import { restaurantConfigEN } from '@/components/demo/configs/restaurant-en';
import { medicalConfigEN } from '@/components/demo/configs/medical-en';
import { fitnessConfigEN } from '@/components/demo/configs/fitness-en';
import { automobileConfigEN } from '@/components/demo/configs/automobile-en';
import { juridiqueConfigEN } from '@/components/demo/configs/juridique-en';
import { hotelConfigEN } from '@/components/demo/configs/hotel-en';
/* ─── Sector configs — DE ─── */
import { generalConfigDE } from '@/components/demo/configs/general-de';
import { ecommerceConfigDE } from '@/components/demo/configs/ecommerce-de';
import { coachConfigDE } from '@/components/demo/configs/coach-de';
import { assuranceConfigDE } from '@/components/demo/configs/assurance-de';
import { immobilierConfigDE } from '@/components/demo/configs/immobilier-de';
import { restaurantConfigDE } from '@/components/demo/configs/restaurant-de';
import { medicalConfigDE } from '@/components/demo/configs/medical-de';
import { fitnessConfigDE } from '@/components/demo/configs/fitness-de';
import { automobileConfigDE } from '@/components/demo/configs/automobile-de';
import { juridiqueConfigDE } from '@/components/demo/configs/juridique-de';
import { hotelConfigDE } from '@/components/demo/configs/hotel-de';
/* ─── Sector configs — NL ─── */
import { generalConfigNL } from '@/components/demo/configs/general-nl';
import { ecommerceConfigNL } from '@/components/demo/configs/ecommerce-nl';
import { coachConfigNL } from '@/components/demo/configs/coach-nl';
import { assuranceConfigNL } from '@/components/demo/configs/assurance-nl';
import { immobilierConfigNL } from '@/components/demo/configs/immobilier-nl';
import { restaurantConfigNL } from '@/components/demo/configs/restaurant-nl';
import { medicalConfigNL } from '@/components/demo/configs/medical-nl';
import { fitnessConfigNL } from '@/components/demo/configs/fitness-nl';
import { automobileConfigNL } from '@/components/demo/configs/automobile-nl';
import { juridiqueConfigNL } from '@/components/demo/configs/juridique-nl';
import { hotelConfigNL } from '@/components/demo/configs/hotel-nl';

import type { SimulatorConfig } from '@/components/demo/WhatsAppSimulator';

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

function getSectors(locale: string) {
  const cfgs = SECTOR_CONFIGS[locale] ?? SECTOR_CONFIGS.fr;
  return [
    { key: 'general', labelKey: 'sectorGeneral', icon: Bot, config: cfgs.general },
    { key: 'ecommerce', labelKey: 'sectorEcommerce', icon: ShoppingCart, config: cfgs.ecommerce },
    { key: 'coach', labelKey: 'sectorCoach', icon: GraduationCap, config: cfgs.coach },
    { key: 'assurance', labelKey: 'sectorAssurance', icon: HeartPulse, config: cfgs.assurance },
    { key: 'immobilier', labelKey: 'sectorImmobilier', icon: Home, config: cfgs.immobilier },
    { key: 'restaurant', labelKey: 'sectorRestaurant', icon: UtensilsCrossed, config: cfgs.restaurant },
    { key: 'medical', labelKey: 'sectorMedical', icon: Stethoscope, config: cfgs.medical },
    { key: 'fitness', labelKey: 'sectorFitness', icon: Dumbbell, config: cfgs.fitness },
    { key: 'automobile', labelKey: 'sectorAuto', icon: Car, config: cfgs.automobile },
    { key: 'juridique', labelKey: 'sectorJuridique', icon: Scale, config: cfgs.juridique },
    { key: 'hotel', labelKey: 'sectorHotel', icon: Hotel, config: cfgs.hotel },
  ];
}

const capabilities = [
  { icon: Eye, title: 'Vision IA', desc: 'Analyse photos, documents, factures en temps reel' },
  { icon: Volume2, title: 'Voix IA & Clonage', desc: '3 modes vocaux, clonage voix, ElevenLabs & Cartesia' },
  { icon: Phone, title: 'Telephonie IA', desc: 'Appels entrants/sortants 24/7, SIP, transfert humain' },
  { icon: Workflow, title: 'Flow Builder', desc: 'Logique conversation visuelle, zero code, multi-canal' },
  { icon: Bot, title: 'Scoring Predictif', desc: '15+ criteres, scoring 0-100, routing automatique' },
  { icon: Calendar, title: 'Calendrier Integre', desc: 'Cal.com, Calendly, GoHighLevel, Google Calendar' },
  { icon: Mic, title: 'WhatsApp Business', desc: 'Templates Meta, nurturing, recovery panier, upselling' },
  { icon: Sparkles, title: '10+ Langues', desc: 'Code-switching auto, accents regionaux, 98% precision' },
  { icon: Shield, title: 'RGPD & Securite', desc: 'Hebergement EU, chiffrement AES-256, Bloctel' },
];

export default function DemoPageClient() {
  const locale = useLocale();
  const t = useTranslations('demo');
  const [activeSector, setActiveSector] = useState('general');
  const [dashState, setDashState] = useState({
    messageCount: 1,
    lastResponseTime: 0,
    leadScore: 10,
    conversationCost: 0.02,
    sentiment: 'neutral' as 'positive' | 'neutral' | 'negative',
    languageDetected: locale.toUpperCase(),
    isTyping: false,
  });

  const SECTORS = getSectors(locale);
  const activeConfig = SECTORS.find((s) => s.key === activeSector)?.config ?? generalConfig;

  const handleEvent = useCallback((event: SimulatorEvent) => {
    setDashState((prev) => {
      const next = { ...prev };
      if (event.type === 'typing_start') next.isTyping = true;
      if (event.type === 'typing_end') next.isTyping = false;
      if (event.messageCount !== undefined) {
        next.messageCount = event.messageCount;
        next.conversationCost = event.messageCount * 0.02;
      }
      if (event.responseTimeMs !== undefined) next.lastResponseTime = event.responseTimeMs;
      if (event.leadScore !== undefined) next.leadScore = event.leadScore;
      if (event.sentiment !== undefined) next.sentiment = event.sentiment;
      if (event.language !== undefined) next.languageDetected = event.language;
      return next;
    });
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-surface-2 opacity-90" />
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(37,211,102,0.15) 0%, transparent 70%)' }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(37,211,102,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,211,102,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 pt-8 pb-16">
          {/* Badge + Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
              {t('badge')}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: 'Onest, sans-serif' }}>
              {t('title')} <span className="text-gradient-wa">{t('titleHighlight')}</span> {t('titleEnd')}
            </h1>
            <p className="text-base text-slate-400 max-w-xl mx-auto">
              {t('subtitle')}
            </p>
            {locale !== 'fr' && activeSector !== 'general' && (
              <div className="mt-6 inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg px-4 py-2 text-xs text-indigo-300 max-w-lg mx-auto">
                <Sparkles size={14} className="text-indigo-400 flex-shrink-0" />
                <span>{t('demoLangNotice')}</span>
              </div>
            )}
          </div>

          {/* Sector selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {SECTORS.map(({ key, labelKey, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveSector(key)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  activeSector === key
                    ? 'bg-wa text-white shadow-lg shadow-wa/20'
                    : 'bg-surface border border-surface-3 text-slate-400 hover:border-wa/30 hover:text-white'
                }`}
              >
                <Icon size={14} />
                {t(labelKey)}
              </button>
            ))}
          </div>

          {/* Three columns: Dashboard | Simulator | Info */}
          <div className="grid lg:grid-cols-[280px_1fr_280px] gap-6 items-start">
            {/* Left: Dashboard */}
            <div className="hidden lg:block sticky top-20">
              <LiveDashboard {...dashState} />
            </div>

            {/* Center: Simulator */}
            <div className="flex justify-center">
              <WhatsAppSimulatorPro
                config={activeConfig}
                onEvent={handleEvent}
                selectedSector={t(SECTORS.find((s) => s.key === activeSector)?.labelKey ?? 'sectorGeneral')}
                sectorKey={activeSector}
              />
            </div>

            {/* Right: Suggestions + CTA */}
            <div className="hidden lg:flex flex-col gap-5 sticky top-20">
              <div className="bg-surface/60 border border-surface-3 rounded-2xl p-4">
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2" style={{ fontFamily: 'Onest, sans-serif' }}>
                  <MessageCircle size={16} className="text-wa" />
                  {t('trySuggestions')}
                </h3>
                <div className="space-y-1.5">
                  {[
                    t('suggestHello'),
                    t('suggestHow'),
                    t('suggestClone'),
                    t('suggestWhatsapp'),
                    t('suggestTelephony'),
                    t('suggestPricing'),
                    t('suggestBooking'),
                  ].map((p) => (
                    <div key={p} className="text-xs text-slate-300 bg-surface-2/50 rounded-lg px-2.5 py-1.5 border border-surface-3">
                      &ldquo;{p}&rdquo;
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-wa/10 to-indigo-500/10 border border-wa/20 rounded-2xl p-4 text-center">
                <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'Onest, sans-serif' }}>
                  {t('convinced')}
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  {t('convincedDesc')}
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_CAL_LINK || '/fr/contact'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 glow-wa text-sm"
                >
                  <Zap size={16} />
                  {t('freeAudit')}
                </a>
              </div>

              <div className="bg-surface/60 border border-surface-3 rounded-2xl p-4">
                <h3 className="text-sm font-bold text-white mb-3" style={{ fontFamily: 'Onest, sans-serif' }}>
                  {t('detailedDemos')}
                </h3>
                <div className="space-y-1">
                  {SECTORS.filter((s) => s.key !== 'general').map(({ key, labelKey, icon: Icon }) => (
                    <Link
                      key={key}
                      href={`/${locale}/demo/${key}`}
                      className="flex items-center gap-2 text-xs text-slate-400 hover:text-wa py-1 transition-colors group"
                    >
                      <Icon size={12} />
                      {t(labelKey)}
                      <ArrowRight size={10} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile dashboard */}
          <div className="lg:hidden mt-8">
            <LiveDashboard {...dashState} />
          </div>

          {/* Mobile suggestions */}
          <div className="lg:hidden mt-6">
            <div className="bg-surface/60 border border-surface-3 rounded-2xl p-4">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2" style={{ fontFamily: 'Onest, sans-serif' }}>
                <MessageCircle size={16} className="text-wa" />
                {t('trySuggestions')}
              </h3>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {[
                  t('suggestHello'),
                  t('suggestHow'),
                  t('suggestClone'),
                  t('suggestWhatsapp'),
                  t('suggestTelephony'),
                  t('suggestPricing'),
                  t('suggestBooking'),
                ].map((p) => (
                  <div key={p} className="text-xs text-slate-300 bg-surface-2/50 rounded-lg px-2.5 py-1.5 border border-surface-3 whitespace-nowrap flex-shrink-0">
                    &ldquo;{p}&rdquo;
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">
            {t('roiBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Onest, sans-serif' }}>
            {t('roiTitle')} <span className="text-gradient-wa">{t('roiHighlight')}</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('roiSubtitle')}
          </p>
        </div>
        <ROICalculator />
      </section>

      {/* Capabilities */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">
            {t('platformBadge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Onest, sans-serif' }}>
            {t('platformTitle')} <span className="text-gradient-wa">{t('platformHighlight')}</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-surface border border-surface-3 rounded-2xl p-6 hover:border-wa/30 transition-colors group">
              <div className="w-10 h-10 bg-wa/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-wa/20 transition-colors">
                <Icon size={20} className="text-wa" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-sm text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-gradient-to-br from-surface via-surface to-surface-2 border border-surface-3 rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(37,211,102,0.3) 0%, transparent 60%)' }} />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Onest, sans-serif' }}>
              {t('ctaTitle')}
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              {t('ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={process.env.NEXT_PUBLIC_CAL_LINK || '/fr/contact'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 glow-wa text-lg"
              >
                <Zap size={20} />
                {t('ctaBook')}
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '33600000000'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-surface-2 border border-surface-3 hover:border-wa/50 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-lg"
              >
                <MessageCircle size={20} className="text-wa" />
                {t('ctaWhatsapp')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
