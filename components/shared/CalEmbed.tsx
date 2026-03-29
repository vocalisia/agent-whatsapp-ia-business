"use client";

const ICLOSED_URL = "https://app.iclosed.io/e/VOCALIS/agent-ai-whatsapp";

export default function CalEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden border border-surface-2 shadow-xl w-full" style={{ height: "700px" }}>
      <iframe
        src={ICLOSED_URL}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Audit gratuit — Agent IA WhatsApp"
        allow="camera; microphone"
      />
    </div>
  );
}
