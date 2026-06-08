import type { Metadata } from "next";
import WhatsAppSimulator from "@/components/demo/WhatsAppSimulator";
import restaurantConfig from "@/components/demo/configs/restaurant";
import {
  UtensilsCrossed,
  Calendar,
  BookOpen,
  AlertTriangle,
  ShoppingBag,
  PartyPopper,
  Star,
  Zap,
  MessageCircle,
} from "lucide-react";

const pageMeta: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Agent IA WhatsApp Restaurant | Demo interactive Le Gourmet IA",
    description:
      "Testez notre agent IA WhatsApp pour restaurants et traiteurs. Réservation automatique, menu du jour, commande à emporter, allergènes, carte des vins, événements privés.",
  },
  en: {
    title: "Restaurant WhatsApp AI Agent | Interactive Demo",
    description:
      "Try our WhatsApp AI agent for restaurants. Automatic booking, daily menu, takeaway orders, allergen info, wine list, private events.",
  },
  de: {
    title: "Restaurant WhatsApp KI-Agent | Interaktive Demo",
    description:
      "Testen Sie unseren WhatsApp KI-Agenten fur Restaurants. Automatische Reservierung, Tagesmenu, Bestellung, Allergene, Weinkarte, private Events.",
  },
  nl: {
    title: "Restaurant WhatsApp AI-agent | Interactieve demo",
    description:
      "Test onze WhatsApp AI-agent voor restaurants. Automatische reservering, dagmenu, afhaalbestelling, allergenen, wijnkaart, prive-evenementen.",
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
    icon: Calendar,
    title: "Réservation automatique",
    desc: "Gestion des tables en temps réel, confirmations et rappels WhatsApp automatiques",
  },
  {
    icon: BookOpen,
    title: "Menu du jour",
    desc: "Carte mise à jour quotidiennement, suggestions du chef et formules du moment",
  },
  {
    icon: AlertTriangle,
    title: "Allergènes & régimes",
    desc: "14 allergènes identifiés, options sans gluten, vegan et adaptations sur demande",
  },
  {
    icon: ShoppingBag,
    title: "Commande à emporter",
    desc: "Click & collect, livraison directe ou via Uber Eats, Deliveroo, Just Eat",
  },
  {
    icon: PartyPopper,
    title: "Événements privés",
    desc: "Salons privatisés, menu sur mesure par le Chef, devis automatique en 24h",
  },
  {
    icon: Star,
    title: "Avis clients",
    desc: "Collecte automatique d'avis Google, programme fidélité et suivi satisfaction",
  },
];

const suggestedPhrases = [
  "Je voudrais réserver pour samedi soir",
  "Quel est le menu du jour ?",
  "Avez-vous des options sans gluten ?",
  "Je veux commander à emporter",
  "Organisez-vous des événements privés ?",
  "Montrez-moi la carte des vins",
  "Quels sont vos horaires ?",
  "Comment fonctionne le programme fidélité ?",
];

export default function RestaurantDemoPage() {
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
              <UtensilsCrossed size={14} />
              Restaurant
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              style={{ fontFamily: "Onest, sans-serif" }}
            >
              Agent IA pour{" "}
              <span className="text-gradient-wa">restaurants et traiteurs</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Automatisez les réservations, la carte et les commandes.
              Votre maître d&apos;hôtel IA disponible 24h/24 sur WhatsApp.
            </p>
          </div>

          {/* Two columns: simulator + info */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Simulator */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-1">
              <WhatsAppSimulator config={restaurantConfig} />
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
                  Votre restaurant mérite mieux
                </h3>
                <p className="text-sm text-slate-400 mb-5">
                  Réservez un audit gratuit de 30 min. On vous montre l&apos;agent
                  configuré avec VOTRE carte et VOTRE marque.
                </p>
                <a
                  href={process.env.NEXT_PUBLIC_CAL_LINK || "/fr/contact"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 glow-wa"
                >
                  <Zap size={18} />
                  Prendre RDV
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
            Fonctionnalités sectorielles
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            Tout ce dont un restaurant a besoin...{" "}
            <span className="text-gradient-wa">automatisé</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            De la réservation à la fidélisation, l&apos;agent gère chaque
            interaction client de votre restaurant.
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
              Prêt à transformer votre restaurant ?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Setup en 48h. Votre carte importée automatiquement.
              Formation équipe incluse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={process.env.NEXT_PUBLIC_CAL_LINK || "/fr/contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-wa hover:bg-wa-hover text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 glow-wa text-lg"
              >
                <Zap size={20} />
                Prendre RDV
              </a>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || "41799394222"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-surface-2 border border-surface-3 hover:border-wa/50 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-lg"
              >
                <MessageCircle size={20} className="text-wa" />
                Nous écrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
