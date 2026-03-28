"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-surface rounded-xl border border-surface-2 overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-2 transition-colors"
          >
            <span className="font-medium text-white pr-4">{item.question}</span>
            <ChevronDown
              size={20}
              className={`text-slate-400 transition-transform shrink-0 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-surface-2 pt-4">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
