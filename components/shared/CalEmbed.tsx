"use client";
import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.iclosed.io/assets/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="iclosed-widget w-full"
      data-url="https://app.iclosed.io/e/VOCALIS/session-strat-gique-votre-agent-ia-whatsapp"
      title="Session Stratégique : Votre Agent IA WhatsApp"
      style={{ minHeight: "620px" }}
    />
  );
}
