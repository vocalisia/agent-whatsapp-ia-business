import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  try {
    const hostname = new URL(origin).hostname;
    const previewHostname = process.env.VERCEL_URL?.toLowerCase();
    return hostname === "agentic-whatsup.com"
      || hostname === "www.agentic-whatsup.com"
      || hostname === previewHostname
      || hostname === "localhost"
      || hostname === "127.0.0.1";
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: "Origine non autorisée." }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Demande invalide." }, { status: 400 });
  }

  const { email, firstName, consent, website } = body as Record<string, unknown>;
  if (typeof website === "string" && website.trim()) {
    return NextResponse.json({ success: true });
  }

  const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
  const normalizedFirstName = typeof firstName === "string" ? firstName.trim().slice(0, 80) : "";
  if (!EMAIL_PATTERN.test(normalizedEmail) || consent !== true) {
    return NextResponse.json({ error: "Indiquez un email valide et confirmez votre accord." }, { status: 400 });
  }

  const audienceId = process.env.RESEND_AUDIENCE_ID?.trim();
  if (!audienceId || !process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Les inscriptions ne sont pas encore configurées." }, { status: 503 });
  }

  try {
    const result = await getResend().contacts.create({
      audienceId,
      email: normalizedEmail,
      firstName: normalizedFirstName || undefined,
      unsubscribed: false,
      properties: {
        source: "claude_code_landing",
        consentedAt: new Date().toISOString(),
        consentVersion: "course-launch-v1",
      },
    });

    if (result.error) {
      const errorMessage = String(result.error.message ?? "").toLowerCase();
      if (errorMessage.includes("already") || errorMessage.includes("exists")) {
        return NextResponse.json({ success: true, existing: true });
      }
      return NextResponse.json({ error: "Impossible d'enregistrer l'inscription pour le moment." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Impossible d'enregistrer l'inscription pour le moment." }, { status: 502 });
  }
}
