"use client";
import { useEffect } from "react";

interface CalEmbedProps {
  calLink?: string;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: any;
  }
}

export default function CalEmbed({ calLink }: CalEmbedProps) {
  const link = calLink ?? process.env.NEXT_PUBLIC_CAL_LINK ?? "demo/30min";

  useEffect(() => {
    // Load Cal.com embed script once
    if (window.Cal) return;

    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      window.Cal?.("init", { origin: "https://app.cal.com" });
      window.Cal?.("inline", {
        elementOrSelector: "#cal-booking",
        calLink: link,
        layout: "month_view",
      });
      window.Cal?.("ui", {
        styles: { branding: { brandColor: "#25D366" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };
    document.head.appendChild(script);
  }, [link]);

  return (
    <div
      id="cal-booking"
      style={{ width: "100%", height: "700px", overflow: "scroll" }}
      className="rounded-xl border border-surface-2 bg-surface overflow-hidden"
    />
  );
}
