import { NextRequest, NextResponse } from "next/server";
import { getResend, TO_EMAIL } from "@/lib/resend";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, message, phone } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
  }

  try {
    const resend = getResend();
    await resend.emails.send({
      from: "WhatsAgentIA <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `Nouveau contact — ${name} (${company || "sans société"})`,
      html: `<h2>Nouveau message depuis le site</h2><p><strong>Nom :</strong> ${name}</p><p><strong>Email :</strong> ${email}</p><p><strong>Téléphone :</strong> ${phone || "non renseigné"}</p><p><strong>Société :</strong> ${company || "non renseignée"}</p><hr/><p><strong>Message :</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
