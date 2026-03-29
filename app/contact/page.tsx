import type { Metadata } from "next";
import CalEmbed from "@/components/shared/CalEmbed";

export const metadata: Metadata = {
  title: "Réserver votre session stratégique — AgenticWhatsup",
  description: "30 minutes pour analyser vos besoins WhatsApp. Diagnostic offert, proposition personnalisée sous 48h.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-12">
        <span className="inline-block text-wa text-sm font-semibold uppercase tracking-wider mb-3">
          Session stratégique
        </span>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
          style={{ fontFamily: "Onest, sans-serif" }}
        >
          Parlons de votre projet
        </h1>
        <p className="text-slate-400 text-xl max-w-xl mx-auto">
          30 minutes pour analyser vos besoins. Proposition personnalisée sous 48h.
        </p>
      </div>

      <CalEmbed />

      <p className="text-center text-slate-600 text-xs mt-6">
        Sans engagement · Confidentiel · Réponse sous 48h
      </p>
    </div>
  );
}
