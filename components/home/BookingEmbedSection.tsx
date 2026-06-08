"use client";
import { motion } from "framer-motion";
import CalEmbed from "@/components/shared/CalEmbed";

export default function BookingEmbedSection() {
  return (
    <section className="px-4 sm:px-6 pt-10 sm:pt-14 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-wa/20 shadow-[0_0_40px_rgba(37,211,102,0.08)]"
      >
        <div className="bg-surface px-5 py-3 border-b border-surface-2 flex items-center gap-3">
          <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white">Choisissez votre créneau</span>
          <span className="ml-auto text-xs text-slate-500">Powered by iClosed</span>
        </div>
        <CalEmbed />
      </motion.div>
    </section>
  );
}
