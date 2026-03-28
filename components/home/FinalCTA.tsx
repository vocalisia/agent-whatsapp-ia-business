"use client";
import { motion } from "framer-motion";
import { MessageCircle, Zap, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || "33600000000";
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "/contact";

  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-wa/10 via-bg to-indigo-500/10" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(37,211,102,0.3) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-wa/10 border border-wa/20 rounded-full px-4 py-2 text-wa text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
            Prêt en 2–3 semaines
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Arrêtez de perdre
            <br />
            <span className="text-gradient-wa">des clients</span> à 3h du matin.
          </h2>

          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            30 minutes pour analyser vos besoins. Proposition sous 48h.
            Déploiement en 2–3 semaines.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-wa hover:bg-wa-hover text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 glow-wa text-lg"
            >
              <Zap size={22} />
              Réserver un diagnostic gratuit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-surface/80 backdrop-blur border border-surface-3 hover:border-wa/50 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 text-lg"
            >
              <MessageCircle size={22} className="text-wa" />
              Écrire maintenant
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-500">
            <span>✓ Réponse sous 24h</span>
            <span>✓ Devis gratuit</span>
            <span>✓ Sans engagement</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
