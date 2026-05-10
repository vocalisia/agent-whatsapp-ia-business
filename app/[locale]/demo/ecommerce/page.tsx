import type { Metadata } from "next";
import WhatsAppSimulator from "@/components/demo/WhatsAppSimulator";
import ecommerceConfig from "@/components/demo/configs/ecommerce";
import {
  Package,
  RotateCcw,
  Ruler,
  ShoppingCart,
  Headphones,
  Camera,
  Zap,
  MessageCircle,
} from "lucide-react";

const pageMeta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Demo E-Commerce | Agent IA WhatsApp pour boutique en ligne",
    description:
      "Testez notre agent IA WhatsApp specialise e-commerce. Suivi commande, retours automatises, guide tailles, recuperation panier abandonne et SAV 24/7.",
  },
  en: {
    title: "E-Commerce Demo | WhatsApp AI Agent for online stores",
    description:
      "Try our e-commerce WhatsApp AI agent. Order tracking, automated returns, size guide, abandoned cart recovery and 24/7 customer support.",
  },
  de: {
    title: "E-Commerce Demo | WhatsApp KI-Agent fur Online-Shops",
    description:
      "Testen Sie unseren E-Commerce WhatsApp KI-Agenten. Bestellverfolgung, automatisierte Retouren, Grossenberatung, Warenkorbrettung und 24/7 Kundenservice.",
  },
  nl: {
    title: "E-Commerce Demo | WhatsApp AI-agent voor webshops",
    description:
      "Test onze e-commerce WhatsApp AI-agent. Ordertracering, geautomatiseerde retouren, maatgids, verlaten winkelwagen herstel en 24/7 klantenservice.",
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
    icon: Package,
    title: "Suivi commande",
    desc: "Tracking en temps reel, notifications automatiques et mises a jour proactives",
  },
  {
    icon: RotateCcw,
    title: "Retours automatises",
    desc: "Generation d'etiquettes retour, suivi remboursement et echanges en 1 clic",
  },
  {
    icon: Ruler,
    title: "Guide des tailles",
    desc: "Recommandation IA basee sur vos mensurations, zero erreur de taille",
  },
  {
    icon: ShoppingCart,
    title: "Recuperation panier",
    desc: "Relance intelligente des paniers abandonnes avec offres personnalisees",
  },
  {
    icon: Headphones,
    title: "SAV 24/7",
    desc: "Service client automatise jour et nuit, escalade humaine si necessaire",
  },
  {
    icon: Camera,
    title: "Analyse photos produits",
    desc: "Detection IA des defauts, identification d'articles et traitement accelere",
  },
];

export default function EcommerceDemoPage() {
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
              <ShoppingCart size={14} />
              E-Commerce
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "Onest, sans-serif" }}
            >
              Agent IA pour votre{" "}
              <span className="text-gradient-wa">boutique en ligne</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Automatisez votre service client e-commerce sur WhatsApp. Suivi
              commande, retours, tailles, promos — tout est gere par l&apos;IA.
            </p>
          </div>

          {/* Two columns: simulator + info */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Simulator */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
              <WhatsAppSimulator config={ecommerceConfig} />
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
                  {[
                    "Ou en est ma commande ?",
                    "Je veux retourner un article",
                    "Quelle taille choisir pour une robe ?",
                    "Avez-vous un code promo ?",
                    "Le blazer est encore en stock ?",
                    "J'ai recu un article abime",
                    "J'ai oublie mon panier",
                    "Je veux parler a quelqu'un",
                  ].map((phrase) => (
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
                  Boostez vos ventes en ligne
                </h3>
                <p className="text-sm text-slate-400 mb-5">
                  Recuperez 15% de paniers abandonnes et reduisez 80% des
                  tickets SAV avec notre agent IA e-commerce.
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_CAL_LINK || "/fr/contact"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 glow-wa"
                >
                  <Zap size={18} />
                  Audit e-commerce gratuit — 30 min
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
            Fonctionnalites e-commerce
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            Tout ce dont votre boutique a besoin...{" "}
            <span className="text-gradient-wa">automatise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            L&apos;agent s&apos;integre a votre CMS, votre logistique et votre
            CRM pour offrir une experience client fluide et personnalisee.
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
              Transformez votre SAV e-commerce
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Integration en 48h avec Shopify, WooCommerce, PrestaShop.
              Formation incluse. Sans engagement.
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
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || "41799394222"}`}
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
