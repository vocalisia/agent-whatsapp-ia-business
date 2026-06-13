import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

// iClosed sends booking data as JSON webhook
// We forward a beautiful VSL email to the client

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // iClosed field names (adapt if needed)
  const clientEmail = (body.email ?? body.inviteeEmail ?? body.guest_email ?? "") as string;
  const clientName  = (body.name  ?? body.inviteeName  ?? body.guest_name  ?? "vous") as string;
  const eventDate   = (body.startTime ?? body.event_start ?? body.date ?? "") as string;

  if (!clientEmail) {
    return NextResponse.json({ error: "No client email in payload" }, { status: 400 });
  }

  const formattedDate = eventDate
    ? new Date(eventDate).toLocaleString("fr-FR", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
        hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris",
      })
    : "prochainement";

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Votre session est confirmée</title>
</head>
<body style="margin:0;padding:0;background:#050A14;font-family:'Outfit',Arial,sans-serif;color:#f0f4ff;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#050A14;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="text-align:center;padding-bottom:32px;">
          <div style="display:inline-flex;align-items:center;gap:8px;">
            <span style="font-size:22px;font-weight:800;color:#ffffff;">Agentic<span style="color:#25D366;">Whatsup</span></span>
          </div>
        </td></tr>

        <!-- Hero card -->
        <tr><td style="background:#0D1929;border:1px solid #162238;border-radius:16px;padding:40px 32px;text-align:center;">
          <div style="width:64px;height:64px;background:rgba(37,211,102,0.15);border:2px solid rgba(37,211,102,0.4);border-radius:50%;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;">
            <span style="font-size:28px;">✅</span>
          </div>
          <h1 style="color:#ffffff;font-size:26px;font-weight:800;margin:0 0 8px;line-height:1.2;">
            Session confirmée, ${clientName} ! 🚀
          </h1>
          <p style="color:#94a3b8;font-size:15px;margin:0 0 24px;">
            Votre audit WhatsApp IA est réservé pour le<br>
            <strong style="color:#25D366;">${formattedDate}</strong>
          </p>
          <div style="background:rgba(37,211,102,0.08);border:1px solid rgba(37,211,102,0.2);border-radius:10px;padding:12px 20px;display:inline-block;margin-bottom:8px;">
            <span style="color:#25D366;font-size:13px;font-weight:600;">📅 Vérifiez votre boîte mail pour le lien Google Meet</span>
          </div>
        </td></tr>

        <!-- VSL section -->
        <tr><td style="padding-top:24px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D1929;border:1px solid #162238;border-radius:16px;overflow:hidden;">
            <tr><td style="padding:28px 32px;">
              <p style="color:#64748b;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px;">AVANT VOTRE SESSION</p>
              <h2 style="color:#ffffff;font-size:20px;font-weight:800;margin:0 0 10px;">Regardez cette vidéo — 2 minutes</h2>
              <p style="color:#94a3b8;font-size:14px;margin:0 0 24px;line-height:1.6;">
                Découvrez exactement ce qu'on va faire ensemble et comment préparer votre session pour en tirer le maximum.
              </p>
              <a href="https://agentic-whatsup.com/confirmation" style="display:inline-block;background:#25D366;color:#ffffff;font-weight:700;font-size:15px;padding:14px 32px;border-radius:10px;text-decoration:none;">
                ▶&nbsp; Regarder la vidéo
              </a>
            </td></tr>
            <!-- VSL preview thumbnail -->
            <tr><td style="background:#0a1520;padding:20px 32px;border-top:1px solid #162238;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#162238;border-radius:10px;overflow:hidden;">
                <tr><td style="padding:24px;text-align:center;">
                  <div style="width:56px;height:56px;background:#25D366;border-radius:50%;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;">
                    <span style="color:white;font-size:20px;">▶</span>
                  </div>
                  <p style="color:#ffffff;font-size:13px;font-weight:600;margin:0 0 4px;">Agent IA WhatsApp — Pourquoi ça change tout</p>
                  <p style="color:#64748b;font-size:12px;margin:0;">2 minutes · Session interactive</p>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </td></tr>

        <!-- Checklist -->
        <tr><td style="padding-top:24px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0D1929;border:1px solid #1E2E47;border-radius:16px;padding:28px 32px;">
            <tr><td>
              <p style="color:#64748b;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin:0 0 14px;">PRÉPAREZ VOTRE SESSION</p>
              ${["Votre volume de messages WhatsApp mensuel (approximatif)", "Les 3 questions récurrentes de vos clients", "Vos outils actuels : CRM, agenda, logiciel de gestion", "Vos horaires de disponibilité pour l'agent"].map(item =>
                `<p style="color:#cbd5e1;font-size:14px;margin:0 0 10px;display:flex;align-items:flex-start;gap:8px;">
                  <span style="color:#25D366;font-weight:700;margin-right:8px;">✓</span>${item}
                </p>`
              ).join("")}
            </td></tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding-top:32px;text-align:center;">
          <p style="color:#334155;font-size:12px;margin:0 0 6px;">AgenticWhatsup · by <a href="https://vocalis.pro" style="color:#25D366;text-decoration:none;">vocalis.pro</a></p>
          <p style="color:#1e293b;font-size:11px;margin:0;">agentic-whatsup.com</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  try {
    const resend = getResend();
    await resend.emails.send({
      from: "AgenticWhatsup <noreply@resend.dev>",
      to: clientEmail,
      subject: `✅ Session confirmée — regardez cette vidéo avant notre appel`,
      html,
    });
    await resend.emails.send({
      from: "AgenticWhatsup <noreply@resend.dev>",
      to: "contact@vocalis.pro",
      replyTo: clientEmail,
      subject: `Nouvelle session AgenticWhatsup — ${clientName}`,
      html: `<h2>Nouvelle session réservée</h2><p><strong>Nom :</strong> ${clientName}</p><p><strong>Email :</strong> ${clientEmail}</p><p><strong>Date :</strong> ${formattedDate}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
