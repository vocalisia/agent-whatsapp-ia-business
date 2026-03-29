"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CheckCircle, Calendar, Clock, MessageCircle,
  ChevronRight, Star, AlertCircle, Zap, Shield, Users
} from "lucide-react";
import VSLPlayer from "@/components/shared/VSLPlayer";

const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER ?? "33600000000";

// ── Countdown to call ──────────────────────────────────────────────────────
function CountdownBar() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    // Pulse animation only — real countdown would need the booking time
    const i = setInterval(() => setSeconds((s) => (s + 1) % 60), 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="flex items-center gap-2 text-sm text-slate-400">
      <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
      Session confirmée · en attente de votre RDV
    </div>
  );
}

// ── Step card ──────────────────────────────────────────────────────────────
function StepCard({
  num, title, desc, icon: Icon, color = "wa",
}: {
  num: string; title: string; desc: string;
  icon: React.ElementType; color?: "wa" | "indigo" | "sky";
}) {
  const c = {
    wa:     { bg: "bg-wa/10",     border: "border-wa/30",     text: "text-wa" },
    indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-400" },
    sky:    { bg: "bg-sky-400/10",   border: "border-sky-400/30",   text: "text-sky-400" },
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

// ── Testimonial ────────────────────────────────────────────────────────────
function Testimonial({ name, role, text }: { name: string; role: string; text: string }) {
  return (
    <div className="bg-surface border border-surface-2 rounded-2xl p-6">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-wa fill-wa" />)}
      </div>
      <p className="text-slate-300 text-sm leading-relaxed mb-4">"{text}"</p>
      <div>
        <div className="font-semibold text-white text-sm">{name}</div>
        <div className="text-xs text-slate-500">{role}</div>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────
export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero confirmation banner */}
      <div className="relative overflow-hidden border-b border-surface-2">
        <div className="absolute inset-0 bg-gradient-to-br from-wa/5 via-bg to-indigo-500/5" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(37,211,102,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,211,102,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          {/* Check icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-wa/15 border-2 border-wa/40 rounded-full mb-6 glow-wa-sm">
            <CheckCircle size={40} className="text-wa" />
          </div>

          <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-5">
            <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
            Session confirmée
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            Votre session stratégique<br />
            <span className="text-gradient-wa">est réservée. 🚀</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-xl mx-auto mb-6 leading-relaxed">
            Un email de confirmation avec tous les détails et le lien Google Meet vous a été envoyé.
          </p>

          <CountdownBar />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-16">

        {/* VSL animée */}
        <div>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              Regardez avant votre session
            </h2>
            <p className="text-slate-400 text-sm">
              2 minutes pour comprendre exactement ce qu'on va faire ensemble
            </p>
          </div>
          <VSLPlayer />
        </div>

        {/* Ce qui va se passer */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-wa/15 border border-wa/30 rounded-lg flex items-center justify-center">
              <Calendar size={16} className="text-wa" />
            </div>
            <h2 className="text-xl font-bold text-white">Ce qui va se passer pendant la session</h2>
          </div>
          <div className="space-y-3">
            <StepCard
              num="Minute 0–10"
              title="Diagnostic métier"
              desc="On analyse vos flux de messages WhatsApp, vos points de friction et les tâches répétitives qui vous font perdre du temps."
              icon={Users}
              color="wa"
            />
            <StepCard
              num="Minute 10–20"
              title="Évaluation technique"
              desc="Étude de faisabilité selon vos outils actuels (CRM, agenda, base de données). On vous dit exactement ce qui est automatisable."
              icon={Zap}
              color="indigo"
            />
            <StepCard
              num="Minute 20–30"
              title="Stratégie & proposition"
              desc="On définit ensemble votre plan d'action. Vous repartez avec une proposition concrète et chiffrée sous 48h dans votre boîte mail."
              icon={ChevronRight}
              color="sky"
            />
          </div>
        </div>

        {/* Checklist préparation */}
        <div className="bg-surface border border-surface-2 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-5">
            <AlertCircle size={20} className="text-amber-400" />
            <h2 className="text-lg font-bold text-white">Pour maximiser votre session — préparez :</h2>
          </div>
          <ul className="space-y-3">
            {[
              "Votre volume de messages WhatsApp mensuel (approximatif)",
              "Les 3 questions les plus fréquentes de vos clients",
              "Les outils que vous utilisez : CRM, agenda, logiciel de facturation",
              "Vos horaires de disponibilité pour les réponses automatiques",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-5 h-5 bg-wa/15 border border-wa/30 rounded flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle size={12} className="text-wa" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Résultats attendus */}
        <div>
          <h2 className="text-xl font-bold text-white mb-5 text-center">Ce que nos clients obtiennent</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { stat: "−78%", label: "de messages sans réponse" },
              { stat: "3×", label: "plus de leads qualifiés" },
              { stat: "2 sem.", label: "pour être en production" },
            ].map((item) => (
              <div key={item.label} className="bg-surface border border-surface-2 rounded-xl p-5 text-center">
                <div className="text-3xl font-extrabold text-wa mb-1">{item.stat}</div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Témoignages */}
        <div>
          <h2 className="text-xl font-bold text-white mb-5 text-center">Ils l'ont fait avant vous</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Testimonial
              name="Sophie M."
              role="Directrice agence immobilière, Lyon"
              text="En 2 semaines, l'agent répond aux photos de biens envoyées par WhatsApp. Mes agents passent 0 minute sur les questions basiques. ROI immédiat."
            />
            <Testimonial
              name="Karim B."
              role="Fondateur e-commerce, Paris"
              text="Notre SAV WhatsApp tourne 24/7 sans intervention humaine. Le taux de satisfaction client est passé de 67% à 91% en un mois."
            />
          </div>
        </div>

        {/* Garanties */}
        <div className="bg-surface border border-surface-2 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield size={18} className="text-wa" />
            <h3 className="font-bold text-white">Nos garanties</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🔒", title: "Confidentiel", desc: "NDA disponible sur demande" },
              { icon: "🎯", title: "Sans engagement", desc: "Aucune obligation d'achat" },
              { icon: "⚡", title: "Proposition 48h", desc: "Chiffrée et détaillée" },
            ].map((g) => (
              <div key={g.title} className="text-center p-3">
                <div className="text-2xl mb-1">{g.icon}</div>
                <div className="font-semibold text-white text-sm mb-0.5">{g.title}</div>
                <div className="text-xs text-slate-500">{g.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA WhatsApp */}
        <div className="text-center space-y-4">
          <p className="text-slate-400 text-sm">Une question avant la session ?</p>
          <a
            href={`https://wa.me/${waNumber}?text=Bonjour,%20j%27ai%20r%C3%A9serv%C3%A9%20une%20session%20strat%C3%A9gique%20et%20j%27ai%20une%20question.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-wa hover:bg-wa-hover text-white font-semibold px-8 py-4 rounded-2xl transition-colors glow-wa text-lg"
          >
            <MessageCircle size={20} />
            Écrire sur WhatsApp
          </a>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-600 pt-2">
            <Clock size={12} />
            Réponse en moins de 2h en journée
          </div>
        </div>

        {/* Footer nav */}
        <div className="border-t border-surface-2 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <Link href="/" className="hover:text-wa transition-colors">← Retour à l'accueil</Link>
          <Link href="/blog" className="hover:text-wa transition-colors">Lire notre blog →</Link>
        </div>
      </div>
    </div>
  );
}
