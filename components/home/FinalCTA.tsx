import { MessageCircle, Calendar } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";

export default function FinalCTA() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER;
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "/contact";

  return (
    <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-wa/10 via-surface to-indigo-500/10 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Prêt à ne plus jamais manquer un message client ?
        </h2>
        <p className="text-slate-400 text-lg mb-8">30 minutes pour analyser vos besoins. Proposition sous 48h.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href={calLink} label="Réserver un diagnostic gratuit" variant="wa" icon={Calendar} size="lg" external />
          <CTAButton href={`https://wa.me/${waNumber}`} label="Écrire sur WhatsApp" variant="outline" icon={MessageCircle} size="lg" external />
        </div>
      </div>
    </section>
  );
}
