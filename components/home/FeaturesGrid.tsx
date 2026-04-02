"use client";
import { motion } from "framer-motion";
import { Camera, Mic, Paperclip, Shield, Calendar, Webhook } from "lucide-react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/shared/SectionTitle";

const featureIcons = [Camera, Mic, Paperclip, Shield, Calendar, Webhook];
const featureExclusive = [true, true, false, false, false, false];
const featureColors = ["#25D366", "#25D366", "#6366F1", "#6366F1", "#6366F1", "#6366F1"];

export default function FeaturesGrid() {
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{ title: string; subtitle: string; description: string }>;

  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
          {items.map((f, i) => {
            const Icon = featureIcons[i];
            const exclusive = featureExclusive[i];
            const color = featureColors[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-surface border border-surface-2 hover:border-wa/40 rounded-2xl p-6 transition-colors duration-300 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${color}10 0%, transparent 70%)`,
                  }}
                />

                {/* Exclusive badge */}
                {exclusive && (
                  <div className="absolute top-4 right-4 bg-wa/10 border border-wa/30 text-wa text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {t("exclusive")}
                  </div>
                )}

                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>

                <h3 className="font-bold text-white text-lg mb-0.5 relative" style={{ fontFamily: "Onest, sans-serif" }}>
                  {f.title}
                </h3>
                <p className="text-xs font-medium text-wa mb-3 relative">{f.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed relative">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
