import { MessageCircle, Camera, Mic, Calendar } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";

export default function Hero() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "/contact";

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bg via-surface/30 to-bg pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-wa/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-1.5 text-wa text-sm font-medium mb-6">
            <MessageCircle size={14} />
            Agent IA WhatsApp Business
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Le seul agent IA WhatsApp qui{" "}
            <span className="text-gradient-wa">voit, entend</span> et comprend
            vos clients.
          </h1>

          <p className="text-xl text-slate-400 mb-8 leading-relaxed">
            Vocaux, photos, documents — votre agent IA répond à tout, 24h/24,
            7j/7. Sans intervention humaine.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { icon: Camera, label: "Analyse les photos" },
              { icon: Mic, label: "Comprend les vocaux" },
              { icon: Calendar, label: "Prend les RDV" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-surface border border-surface-2 rounded-full px-4 py-2 text-sm text-slate-300"
              >
                <Icon size={14} className="text-wa" />
                {label}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton
              href={calLink}
              label="Réserver une démo gratuite"
              variant="wa"
              size="lg"
              external
            />
            <CTAButton
              href={`https://wa.me/${waNumber}`}
              label="Nous écrire sur WhatsApp"
              variant="outline"
              icon={MessageCircle}
              size="lg"
              external
            />
          </div>
        </div>
      </div>
    </section>
  );
}
