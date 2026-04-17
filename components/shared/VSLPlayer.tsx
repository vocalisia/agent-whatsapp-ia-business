"use client";
import { useState, useEffect, useRef } from "react";

// ── VSL Script — slides displayed one by one ───────────────────────────────
const SLIDES = [
  {
    type: "hook",
    duration: 4500,
    content: {
      eyebrow: "Une question directe",
      headline: "Combien de messages WhatsApp restent sans réponse dans votre business chaque jour ?",
      sub: "",
    },
  },
  {
    type: "problem",
    duration: 4500,
    content: {
      eyebrow: "La réalité",
      headline: "Chaque message sans réponse = un client perdu.",
      sub: "Et vous ne pouvez pas être disponible 24h/24 — personne ne peut.",
    },
  },
  {
    type: "agitate",
    duration: 5000,
    content: {
      eyebrow: "Ce que ça coûte",
      headline: "",
      stats: [
        { value: "67%", label: "des clients n'achètent pas si la réponse dépasse 1h" },
        { value: "3×", label: "plus de ventes avec un suivi automatique immédiat" },
        { value: "0€", label: "de coût humain une fois l'agent déployé" },
      ],
    },
  },
  {
    type: "solution",
    duration: 5000,
    content: {
      eyebrow: "La solution",
      headline: "Un agent IA WhatsApp qui répond à votre place — en moins de 3 secondes.",
      sub: "Textes, vocaux, photos, documents. À toute heure. Sans intervention humaine.",
    },
  },
  {
    type: "features",
    duration: 5500,
    content: {
      eyebrow: "Ce qu'il fait concrètement",
      headline: "",
      points: [
        { icon: "📸", text: "Analyse les photos et documents envoyés par vos clients" },
        { icon: "🎙️", text: "Transcrit et répond aux messages vocaux WhatsApp" },
        { icon: "📅", text: "Prend des rendez-vous directement dans votre agenda" },
        { icon: "🔗", text: "Synchronise les leads dans votre CRM automatiquement" },
      ],
    },
  },
  {
    type: "proof",
    duration: 5000,
    content: {
      eyebrow: "Résultats clients",
      headline: "",
      testimonial: {
        text: "\"En 3 semaines, l'agent gère 100% des demandes de premier contact. Mon équipe se concentre sur les vrais projets.\"",
        name: "Sophie M. — Agence immobilière, Lyon",
      },
      stats: [
        { value: "−78%", label: "de messages sans réponse" },
        { value: "+340%", label: "de leads qualifiés" },
        { value: "2 sem.", label: "pour être live" },
      ],
    },
  },
  {
    type: "cta",
    duration: 99999,
    content: {
      eyebrow: "Vous venez de réserver votre session",
      headline: "Dans 48h, vous aurez une proposition concrète.",
      sub: "On va analyser vos scénarios, identifier les automatisations possibles, et vous dire exactement ce qu'on peut faire pour vous.",
      cta: "C'est exactement pour ça que vous avez réservé. ✅",
    },
  },
];

// ── Progress bar ───────────────────────────────────────────────────────────
function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full h-0.5 bg-surface-3 rounded-full overflow-hidden">
      <div
        className="h-full bg-wa rounded-full transition-all ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Slide renderers ────────────────────────────────────────────────────────
function SlideContent({ slide, visible }: { slide: typeof SLIDES[0]; visible: boolean }) {
  const base = `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`;

  if (slide.type === "agitate") {
    const c = slide.content as { eyebrow: string; stats: { value: string; label: string }[] };
    return (
      <div className={base}>
        <div className="text-xs font-bold text-wa uppercase tracking-widest mb-6">{c.eyebrow}</div>
        <div className="grid grid-cols-3 gap-4">
          {c.stats.map((s, i) => (
            <div key={i} className="bg-surface border border-surface-2 rounded-xl p-4 text-center">
              <div className="text-3xl font-extrabold text-wa mb-1" style={{ fontFamily: "Onest, sans-serif" }}>{s.value}</div>
              <div className="text-xs text-slate-400 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "features") {
    const c = slide.content as { eyebrow: string; points: { icon: string; text: string }[] };
    return (
      <div className={base}>
        <div className="text-xs font-bold text-wa uppercase tracking-widest mb-6">{c.eyebrow}</div>
        <div className="space-y-3">
          {c.points.map((p, i) => (
            <div key={i} className="flex items-center gap-4 bg-surface border border-surface-2 rounded-xl px-5 py-3">
              <span className="text-2xl">{p.icon}</span>
              <span className="text-white text-sm font-medium">{p.text}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "proof") {
    const c = slide.content as { eyebrow: string; testimonial: { text: string; name: string }; stats: { value: string; label: string }[] };
    return (
      <div className={base}>
        <div className="text-xs font-bold text-wa uppercase tracking-widest mb-5">{c.eyebrow}</div>
        <div className="bg-surface border border-surface-2 rounded-2xl p-5 mb-5">
          <p className="text-slate-300 text-sm italic leading-relaxed mb-3">{c.testimonial.text}</p>
          <p className="text-xs text-slate-500">{c.testimonial.name}</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {c.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-extrabold text-wa" style={{ fontFamily: "Onest, sans-serif" }}>{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slide.type === "cta") {
    const c = slide.content as { eyebrow: string; headline: string; sub: string; cta: string };
    return (
      <div className={base}>
        <div className="text-xs font-bold text-wa uppercase tracking-widest mb-4">{c.eyebrow}</div>
        <h2 className="text-2xl font-extrabold text-white mb-3 leading-tight" style={{ fontFamily: "Onest, sans-serif" }}>{c.headline}</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{c.sub}</p>
        <div className="bg-wa/10 border border-wa/30 rounded-xl px-5 py-4 text-wa font-semibold text-sm">{c.cta}</div>
      </div>
    );
  }

  // Default: hook / problem / solution
  const c = slide.content as { eyebrow: string; headline: string; sub: string };
  return (
    <div className={base}>
      <div className="text-xs font-bold text-wa uppercase tracking-widest mb-4">{c.eyebrow}</div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "Onest, sans-serif" }}>
        {c.headline}
      </h2>
      {c.sub && <p className="text-slate-400 text-sm leading-relaxed">{c.sub}</p>}
    </div>
  );
}

// ── VSL Player ─────────────────────────────────────────────────────────────
export default function VSLPlayer() {
  const [started, setStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef(0);
  const slideRef = useRef(0);

  function startVSL() {
    setStarted(true);
    setCurrentSlide(0);
    setProgress(0);
    slideRef.current = 0;
    progressRef.current = 0;
  }

  useEffect(() => {
    if (!started) return;

    const slide = SLIDES[slideRef.current];
    const tickMs = 50;
    const totalTicks = slide.duration / tickMs;

    intervalRef.current = setInterval(() => {
      progressRef.current += 100 / totalTicks;
      setProgress(Math.min(progressRef.current, 100));

      if (progressRef.current >= 100) {
        clearInterval(intervalRef.current!);
        const next = slideRef.current + 1;
        if (next < SLIDES.length) {
          setVisible(false);
          setTimeout(() => {
            slideRef.current = next;
            setCurrentSlide(next);
            progressRef.current = 0;
            setProgress(0);
            setVisible(true);
          }, 400);
        }
      }
    }, tickMs);

    return () => clearInterval(intervalRef.current!);
  }, [started, currentSlide]);

  return (
    <div className="rounded-2xl border border-surface-2 bg-surface overflow-hidden shadow-xl">
      {/* Top bar */}
      <div className="px-5 pt-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-amber-400/60" />
            <div className="w-3 h-3 rounded-full bg-wa/60" />
          </div>
          {started && (
            <span className="text-xs text-slate-500">
              {currentSlide + 1} / {SLIDES.length}
            </span>
          )}
        </div>
        {started && <ProgressBar progress={progress} />}
      </div>

      {/* Content area */}
      <div className="px-6 py-8 min-h-[260px] flex flex-col justify-center">
        {!started ? (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">▶️</div>
            <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Onest, sans-serif" }}>
              Regardez avant votre session
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              2 minutes pour comprendre exactement ce qu&apos;on va faire ensemble
            </p>
            <button
              onClick={startVSL}
              className="inline-flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-bold px-8 py-3 rounded-xl transition-colors glow-wa-sm"
            >
              ▶ Lancer la vidéo
            </button>
          </div>
        ) : (
          <SlideContent slide={SLIDES[currentSlide]} visible={visible} />
        )}
      </div>

      {/* Slide dots */}
      {started && (
        <div className="flex justify-center gap-1.5 pb-4">
          {SLIDES.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all ${
                i === currentSlide ? "w-4 h-1.5 bg-wa" : i < currentSlide ? "w-1.5 h-1.5 bg-wa/40" : "w-1.5 h-1.5 bg-surface-3"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
