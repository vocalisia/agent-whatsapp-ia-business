'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle, Calendar, Clock, MessageCircle,
  ChevronRight, Star, AlertCircle, Zap, Shield, Users,
} from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import VSLPlayer from '@/components/shared/VSLPlayer';
import IClosedConfirm from '@/components/shared/IClosedConfirm';

const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER ?? '41799394222';
const STEP_COLORS = ['wa', 'indigo', 'sky'] as const;
const STEP_ICONS = [Users, Zap, ChevronRight];

function CountdownBar({ label }: { label: string }) {
  const [, setSeconds] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setSeconds((s) => (s + 1) % 60), 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="flex items-center gap-2 text-sm text-slate-400">
      <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
      {label}
    </div>
  );
}

function StepCard({
  num, title, desc, icon: Icon, color = 'wa',
}: {
  num: string; title: string; desc: string;
  icon: React.ElementType; color?: 'wa' | 'indigo' | 'sky';
}) {
  const c = {
    wa:     { bg: 'bg-wa/10',     border: 'border-wa/30',     text: 'text-wa' },
    indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/30', text: 'text-indigo-400' },
    sky:    { bg: 'bg-sky-400/10',   border: 'border-sky-400/30',   text: 'text-sky-400' },
  }[color];

  return (
    <div className={`${c.bg} border ${c.border} rounded-2xl p-5 flex gap-4 items-start`}>
      <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
        <Icon size={18} className={c.text} />
      </div>
      <div>
        <div className={`text-xs font-bold ${c.text} uppercase tracking-wider mb-1`}>{num}</div>
        <div className="font-semibold text-white mb-1">{title}</div>
        <div className="text-sm text-slate-400 leading-relaxed">{desc}</div>
      </div>
    </div>
  );
}

function Testimonial({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <div className="bg-surface border border-surface-2 rounded-2xl p-6">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-wa fill-wa" />)}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-4">
        <span className="text-slate-500">&ldquo;</span>
        {text}
        <span className="text-slate-500">&rdquo;</span>
      </p>
      <div>
        <div className="font-semibold text-white text-sm">{name}</div>
        <div className="text-xs text-slate-500">{role}</div>
      </div>
    </div>
  );
}

export default function ConfirmationPageClient() {
  const t = useTranslations('confirmation');
  const locale = useLocale();

  const steps = (t.raw('steps') as Array<{ num: string; title: string; desc: string }>).map((s, i) => ({
    ...s,
    icon: STEP_ICONS[i],
    color: STEP_COLORS[i],
  }));
  const checklistItems = t.raw('checklistItems') as string[];
  const stats = t.raw('stats') as Array<{ stat: string; label: string }>;
  const testimonials = t.raw('testimonials') as Array<{ name: string; role: string; text: string }>;
  const guarantees = t.raw('guarantees') as Array<{ icon: string; title: string; desc: string }>;

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero confirmation banner */}
      <div className="relative overflow-hidden border-b border-surface-2">
        <div className="absolute inset-0 bg-gradient-to-br from-wa/5 via-bg to-indigo-500/5" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(37,211,102,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,211,102,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-wa/15 border-2 border-wa/40 rounded-full mb-6 glow-wa-sm">
            <CheckCircle size={40} className="text-wa" />
          </div>

          <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-5">
            <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
            {t('sessionConfirmed')}
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            {t('heroTitle')}<br />
            <span className="text-gradient-wa">{t('heroHighlight')}</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-xl mx-auto mb-6 leading-relaxed">
            {t('heroSubtitle')}
          </p>

          <CountdownBar label={t('sessionConfirmedStatus')} />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        <IClosedConfirm />

        <div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">{t('vslTitle')}</h2>
            <p className="text-slate-400 text-sm">{t('vslSubtitle')}</p>
          </div>
          <VSLPlayer />
        </div>

        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-wa/15 border border-wa/30 rounded-lg flex items-center justify-center">
              <Calendar size={16} className="text-wa" />
            </div>
            <h2 className="text-xl font-bold text-white">{t('stepsTitle')}</h2>
          </div>
          <div className="space-y-3">
            {steps.map((s) => (
              <StepCard key={s.num} num={s.num} title={s.title} desc={s.desc} icon={s.icon} color={s.color} />
            ))}
          </div>
        </div>

        <div className="bg-surface border border-surface-2 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <AlertCircle size={20} className="text-amber-400" />
            <h2 className="text-lg font-bold text-white">{t('checklistTitle')}</h2>
          </div>
          <ul className="space-y-3">
            {checklistItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-5 h-5 bg-wa/15 border border-wa/30 rounded flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={12} className="text-wa" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-5 text-center">{t('statsTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {stats.map((item) => (
              <div key={item.label} className="bg-surface border border-surface-2 rounded-xl p-5 text-center">
                <div className="text-3xl font-extrabold text-wa mb-1">{item.stat}</div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-5 text-center">{t('testimonialsTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonials.map((tm) => (
              <Testimonial key={tm.name} name={tm.name} role={tm.role} text={tm.text} />
            ))}
          </div>
        </div>

        <div className="bg-surface border border-surface-2 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={18} className="text-wa" />
            <h3 className="font-bold text-white">{t('guaranteesTitle')}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {guarantees.map((g) => (
              <div key={g.title} className="text-center p-3">
                <div className="text-2xl mb-1">{g.icon}</div>
                <div className="font-semibold text-white text-sm mb-0.5">{g.title}</div>
                <div className="text-xs text-slate-500">{g.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-slate-400 text-sm">{t('ctaQuestion')}</p>
          <a
            href={`https://wa.me/${waNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wa hover:bg-wa-hover text-white font-semibold px-8 py-4 rounded-2xl transition-colors glow-wa text-lg"
          >
            <MessageCircle size={20} />
            {t('ctaWhatsapp')}
          </a>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-600 pt-2">
            <Clock size={12} />
            {t('ctaResponse')}
          </div>
        </div>

        <div className="border-t border-surface-2 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <Link href={`/${locale}`} className="hover:text-wa transition-colors">{t('footerHome')}</Link>
          <Link href={`/${locale}/blog`} className="hover:text-wa transition-colors">{t('footerBlog')}</Link>
        </div>
      </div>
    </div>
  );
}
