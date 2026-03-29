"use client";
import { useEffect } from "react";

export default function IClosedConfirm() {
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
    <div className="rounded-2xl overflow-hidden border border-wa/20 shadow-[0_0_30px_rgba(37,211,102,0.08)]">
      <div className="bg-surface px-5 py-3 border-b border-surface-2 flex items-center gap-2">
        <div className="w-2 h-2 bg-wa rounded-full animate-pulse" />
        <span className="text-sm font-medium text-white">Détails de votre session</span>
      </div>
      <div
        className="call-details-widget bg-surface"
        data-url="https://app.iclosed.io/embed"
        style={{ width: "100%", height: "340px" }}
      />
    </div>
  );
}
