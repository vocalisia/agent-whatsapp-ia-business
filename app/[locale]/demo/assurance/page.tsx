import type { Metadata } from "next";
import WhatsAppSimulator from "@/components/demo/WhatsAppSimulator";
import assuranceConfig from "@/components/demo/configs/assurance";
import {
  FileText,
  Camera,
  Search,
  Calculator,
  Car,
  Phone,
  Zap,
  MessageCircle,
  Shield,
} from "lucide-react";

const pageMeta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Agent IA WhatsApp pour Assurances | Demo Interactive AssurPlus",
    description:
      "Testez notre agent IA WhatsApp specialise assurance : declaration sinistre, analyse photo degats, suivi dossier, devis instantane, attestations et assistance 24/7.",
  },
  en: {
    title: "WhatsApp AI Agent for Insurance | Interactive Demo AssurPlus",
    description:
      "Try our insurance-specialized WhatsApp AI agent: claim filing, damage photo analysis, case tracking, instant quotes, certificates and 24/7 assistance.",
  },
  de: {
    title: "WhatsApp KI-Agent fur Versicherungen | Interaktive Demo AssurPlus",
    description:
      "Testen Sie unseren versicherungsspezialisierten WhatsApp KI-Agenten: Schadenmeldung, Fotoanalyse, Fallverfolgung, Sofortangebote und 24/7-Assistance.",
  },
  nl: {
    title: "WhatsApp AI-agent voor Verzekeringen | Interactieve Demo AssurPlus",
    description:
      "Probeer onze verzekeringsspecifieke WhatsApp AI-agent: schademelding, fotoanalyse, dossierbeheer, directe offertes en 24/7 hulpverlening.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = pageMeta[locale] ?? pageMeta.fr;
  return { title: meta.title, description: meta.description };
}

const capabilities = [
  {
    icon: FileText,
    title: "Declaration sinistre",
    desc: "Guidage etape par etape pour declarer tout type de sinistre en quelques minutes",
  },
  {
    icon: Camera,
    title: "Analyse photo degats",
    desc: "IA vision qui detecte le type de degat, estime la gravite et le cout de reparation",
  },
  {
    icon: Search,
    title: "Suivi dossier",
    desc: "Etat en temps reel de vos dossiers sinistres, RDV experts et remboursements",
  },
  {
    icon: Calculator,
    title: "Devis instantane",
    desc: "Tarif personnalise auto, habitation, sante ou pro calcule en 2 minutes",
  },
  {
    icon: Car,
    title: "Attestations auto",
    desc: "Carte verte, attestation vehicule et documents generes et envoyes automatiquement",
  },
  {
    icon: Phone,
    title: "Assistance 24/7",
    desc: "Depannage, remorquage, urgence habitation et rapatriement a toute heure",
  },
];

const suggestedPhrases = [
  "Je veux declarer un sinistre",
  "Envoyez une photo de degats",
  "Ou en est mon dossier ?",
  "Je veux un devis auto",
  "Envoyez-moi ma carte verte",
  "C'est quoi ma franchise ?",
  "Je veux resilier mon contrat",
  "J'ai besoin d'une assistance urgente",
];

export default function AssuranceDemoPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg to-surface-2 opacity-90" />
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(37,211,102,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37,211,102,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37,211,102,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-20">
          {/* Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium">
              <Shield size={14} />
              Assurance
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "Onest, sans-serif" }}
            >
              Agent IA pour{" "}
              <span className="text-gradient-wa">compagnies d&apos;assurance</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Declaration sinistre, analyse photo, suivi dossier, devis
              instantane — votre assistant assurance disponible 24/7 sur
              WhatsApp.
            </p>
          </div>

          {/* Two columns: simulator + info */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Simulator */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
              <WhatsAppSimulator config={assuranceConfig} />
            </div>

            {/* Right: Info */}
            <div className="order-2 lg:order-2 flex flex-col gap-8">
              {/* Try these */}
              <div className="bg-surface/60 border border-surface-3 rounded-2xl p-6">
                <h3
                  className="text-lg font-bold text-white mb-4 flex items-center gap-2"
                  style={{ fontFamily: "Onest, sans-serif" }}
                >
                  <MessageCircle size={20} className="text-wa" />
                  Essayez ces phrases
                </h3>
                <div className="space-y-2">
                  {suggestedPhrases.map((phrase) => (
                    <div
                      key={phrase}
                      className="text-sm text-slate-300 bg-surface-2/50 rounded-lg px-3 py-2 border border-surface-3"
                    >
                      &ldquo;{phrase}&rdquo;
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-wa/10 to-indigo-500/10 border border-wa/20 rounded-2xl p-6 text-center">
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "Onest, sans-serif" }}
                >
                  Automatisez votre service client assurance
                </h3>
                <p className="text-sm text-slate-400 mb-5">
                  Reservez un audit gratuit de 30 min et decouvrez comment
                  l&apos;agent gere sinistres, devis et attestations pour VOTRE
                  compagnie.
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_CAL_LINK || "/fr/contact"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 glow-wa"
                >
                  <Zap size={18} />
                  Audit gratuit — 30 min
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">
            Fonctionnalites assurance
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            Tout ce qu&apos;un agent IA peut faire{" "}
            <span className="text-gradient-wa">pour l&apos;assurance</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            De la declaration de sinistre a l&apos;assistance d&apos;urgence, votre
            agent WhatsApp gere les demandes les plus courantes en autonomie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-surface border border-surface-3 rounded-2xl p-6 hover:border-wa/30 transition-colors group"
            >
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
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(37,211,102,0.3) 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "Onest, sans-serif" }}
            >
              Pret a transformer votre service client assurance ?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Setup en 48h. Formation incluse. Conforme RGPD et reglementations
              assurance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={process.env.NEXT_PUBLIC_CAL_LINK || "/fr/contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 glow-wa text-lg"
              >
                <Zap size={20} />
                Reserver mon audit gratuit
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || "33600000000"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-surface-2 border border-surface-3 hover:border-wa/50 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-lg"
              >
                <MessageCircle size={20} className="text-wa" />
                Nous ecrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
