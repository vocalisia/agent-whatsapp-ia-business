"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

export default function StatsSection() {
  const t = useTranslations("stats");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 60, prefix: "-", suffix: "%", label: t("costLabel") },
    { value: 40, prefix: "+", suffix: "%", label: t("productivityLabel") },
    { value: 30, prefix: "+", suffix: "%", label: t("responseLabel") },
    { value: 0, prefix: "", suffix: "24/7", label: t("availabilityLabel"), isText: true },
  ];

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-wa/5 via-transparent to-indigo-500/5" />
      <div className="absolute inset-0 border-y border-surface-2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="text-4xl lg:text-5xl font-extrabold text-wa mb-2"
                style={{ fontFamily: "Onest, sans-serif" }}
              >
                {s.isText ? (
                  "24/7"
                ) : (
                  <>
                    {s.prefix}
                    <CountUpValue target={s.value} started={started} />
                    {s.suffix}
                  </>
                )}
              </div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpValue({ target, started }: { target: number; started: boolean }) {
  const count = useCountUp(target, 2000, started);
  return <>{count}</>;
}
