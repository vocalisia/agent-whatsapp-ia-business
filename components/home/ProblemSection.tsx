"use client";
import { motion } from "framer-motion";
import { PhoneMissed, Clock, ImageOff, TrendingDown } from "lucide-react";
import { useTranslations } from "next-intl";

const icons = [PhoneMissed, ImageOff, Clock, TrendingDown];
const statValues = ["73%", "4h", "70%", "40%"];

export default function ProblemSection() {
  const t = useTranslations("problem");
  const items = t.raw("items") as Array<{ title: string; description: string; statLabel: string }>;

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-red-400 text-sm font-semibold uppercase tracking-wider mb-3">{t("eyebrow")}</span>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance"
            style={{ fontFamily: "Onest, sans-serif" }}
          >
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((p, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface border border-surface-2 border-l-2 border-l-red-500/60 rounded-2xl p-5 sm:p-6 hover:border-l-red-500 transition-colors"
              >
                <div className="text-3xl font-extrabold text-red-400 mb-1" style={{ fontFamily: "Onest, sans-serif" }}>
                  {statValues[i]}
                </div>
                <div className="text-xs text-red-400/70 mb-4">{p.statLabel}</div>
                <Icon size={20} className="text-red-400/60 mb-3" />
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "Onest, sans-serif" }}>{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
