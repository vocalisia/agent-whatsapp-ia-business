"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  /**
   * When true, emits a JSON-LD FAQPage schema block alongside the accordion.
   * Defaults to true for GEO/AI Overviews citation eligibility.
   */
  emitSchema?: boolean;
}

export default function FAQAccordion({ items, emitSchema = true }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {emitSchema && items.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="bg-surface rounded-xl border border-surface-2 overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-2 transition-colors"
              aria-expanded={open === i}
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
    </>
  );
}
