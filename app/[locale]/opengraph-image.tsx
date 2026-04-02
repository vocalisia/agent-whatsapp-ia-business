import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AgenticWhatsup — Agent IA WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d1117",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,211,102,0.15) 0%, transparent 70%)",
            top: -100,
            left: -100,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
            bottom: -80,
            right: 80,
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(37,211,102,0.1)",
            border: "1px solid rgba(37,211,102,0.3)",
            borderRadius: 100,
            padding: "6px 18px",
            marginBottom: 24,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#25D366" }} />
          <span style={{ color: "#25D366", fontSize: 16, fontWeight: 600 }}>AgenticWhatsup</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Le seul agent IA WhatsApp qui voit, entend et comprend
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 22,
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Automatisez vos messages clients 24h/24 — vocaux, photos, documents
        </div>
      </div>
    ),
    { ...size }
  );
}
