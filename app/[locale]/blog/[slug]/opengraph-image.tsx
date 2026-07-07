import { ImageResponse } from "next/og";
import { BLOG_LOCALES, getPostBySlug, getLocalizedSlugs } from "@/lib/mdx";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return BLOG_LOCALES.flatMap((locale) =>
    getLocalizedSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export default async function OgImage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  let title = "AgenticWhatsup — Blog";
  let description = "Agent IA WhatsApp";
  try {
    const { meta } = getPostBySlug(slug, locale);
    title = meta.title;
    description = meta.description;
  } catch {
    // use defaults
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0d1117",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          padding: 60,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,211,102,0.12) 0%, transparent 70%)",
            top: -150,
            right: -100,
          }}
        />

        {/* Top badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#25D366" }} />
          <span style={{ color: "#25D366", fontSize: 16, fontWeight: 600 }}>AgenticWhatsup · Blog</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* Bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 18, color: "#64748b", maxWidth: 700 }}>{description}</div>
          <div
            style={{
              background: "rgba(37,211,102,0.1)",
              border: "1px solid rgba(37,211,102,0.3)",
              borderRadius: 8,
              padding: "8px 16px",
              color: "#25D366",
              fontSize: 15,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            agentic-whatsup.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
