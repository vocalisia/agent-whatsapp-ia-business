import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const meta: Record<string, { title: string; description: string }> = {
  fr: { title: "Comparatif — AgenticWhatsup vs concurrents | Meilleur agent IA WhatsApp", description: "Comparez AgenticWhatsup avec Wati, ManyChat, WhatsApp Business natif et d'autres solutions. Découvrez pourquoi nous sommes la meilleure option pour automatiser vos messages clients." },
  en: { title: "Comparison — AgenticWhatsup vs competitors | Best WhatsApp AI Agent", description: "Compare AgenticWhatsup with Wati, ManyChat, native WhatsApp Business and other solutions. Discover why we are the best option to automate your customer messages." },
  de: { title: "Vergleich — AgenticWhatsup vs Konkurrenten | Bester WhatsApp KI-Agent", description: "Vergleichen Sie AgenticWhatsup mit Wati, ManyChat, nativem WhatsApp Business und anderen Lösungen. Entdecken Sie, warum wir die beste Option sind." },
  nl: { title: "Vergelijking — AgenticWhatsup vs concurrenten | Beste WhatsApp AI-agent", description: "Vergelijk AgenticWhatsup met Wati, ManyChat, native WhatsApp Business en andere oplossingen. Ontdek waarom wij de beste optie zijn." },
};

const headings: Record<string, { h1: string; subtitle: string; vs: string }> = {
  fr: { h1: "AgenticWhatsup vs les alternatives", subtitle: "Toutes les comparaisons pour vous aider à choisir la meilleure solution WhatsApp IA.", vs: "Comparer" },
  en: { h1: "AgenticWhatsup vs alternatives", subtitle: "All comparisons to help you choose the best WhatsApp AI solution.", vs: "Compare" },
  de: { h1: "AgenticWhatsup vs Alternativen", subtitle: "Alle Vergleiche, damit Sie die beste WhatsApp KI-Lösung wählen können.", vs: "Vergleichen" },
  nl: { h1: "AgenticWhatsup vs alternatieven", subtitle: "Alle vergelijkingen om u te helpen de beste WhatsApp AI-oplossing te kiezen.", vs: "Vergelijken" },
};

const competitors = [
  { slug: "vs-wati", name: "Wati", icon: "📦", tagline: { fr: "Wati : puissant mais rigide, sans vraie IA", en: "Wati: powerful but rigid, no real AI", de: "Wati: leistungsstark aber starr, keine echte KI", nl: "Wati: krachtig maar rigide, geen echte AI" } },
  { slug: "vs-manychat", name: "ManyChat", icon: "💬", tagline: { fr: "ManyChat : idéal pour Instagram, limité sur WhatsApp", en: "ManyChat: great for Instagram, limited on WhatsApp", de: "ManyChat: gut für Instagram, begrenzt auf WhatsApp", nl: "ManyChat: goed voor Instagram, beperkt op WhatsApp" } },
  { slug: "vs-whatsapp-business", name: "WhatsApp Business", icon: "📱", tagline: { fr: "WhatsApp Business natif : gratuit mais zéro IA", en: "Native WhatsApp Business: free but zero AI", de: "Natives WhatsApp Business: kostenlos aber keine KI", nl: "Native WhatsApp Business: gratis maar geen AI" } },
];

export async function generateStaticParams() {
  return ["fr", "en", "de", "nl"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.fr;
  return {
    title: m.title,
    description: m.description,
    alternates: { languages: { fr: "/fr/comparatif", en: "/en/comparatif", de: "/de/comparatif", nl: "/nl/comparatif" } },
  };
}

export default async function ComparatifPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const h = headings[locale] ?? headings.fr;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || `/${locale}/contact`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-14">
        <span className="inline-block bg-wa/10 text-wa text-xs font-semibold px-3 py-1 rounded-full mb-4">Comparatif</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: "Onest, sans-serif" }}>{h.h1}</h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-6">{h.subtitle}</p>
        <a href={calLink} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors">
          <Calendar size={16} /> {locale === "fr" ? "Audit gratuit — 30 min" : locale === "de" ? "Kostenloses Audit — 30 Min" : locale === "nl" ? "Gratis audit — 30 min" : "Free audit — 30 min"}
        </a>
      </div>
      <div className="space-y-4">
        {competitors.map((c) => (
          <Link key={c.slug} href={`/${locale}/comparatif/${c.slug}`}
            className="flex items-center gap-4 bg-surface border border-surface-2 hover:border-wa/40 rounded-2xl p-6 transition-all group">
            <span className="text-4xl">{c.icon}</span>
            <div className="flex-1">
              <h2 className="text-white font-bold text-lg group-hover:text-wa transition-colors">AgenticWhatsup vs {c.name}</h2>
              <p className="text-slate-400 text-sm">{c.tagline[locale as keyof typeof c.tagline] ?? c.tagline.fr}</p>
            </div>
            <ArrowRight size={18} className="text-slate-500 group-hover:text-wa transition-colors shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
