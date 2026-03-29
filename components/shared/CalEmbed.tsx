"use client";
import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    // Load iClosed widget script
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="iclosed-widget rounded-2xl overflow-hidden border border-surface-2 shadow-xl w-full"
      data-url="https://app.iclosed.io/e/VOCALIS/session-strat-gique-votre-agent-ia-whatsapp"
      title="Session Stratégique : Votre Agent IA WhatsApp"
      style={{ width: "100%", height: "620px" }}
    />
  );
}
