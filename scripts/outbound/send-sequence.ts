/* eslint-disable */
/**
 * Cold email sequence sender.
 *
 * Usage:
 *   # Dry run (prints what would be sent, no real send)
 *   DRY_RUN=1 RESEND_API_KEY=xxx node dist/send-sequence.js
 *
 *   # Real send (limited to N per day)
 *   DAILY_LIMIT=30 FROM_EMAIL=laurent@outbound-yourdomain.com RESEND_API_KEY=xxx node dist/send-sequence.js
 *
 * Reads leads.json, sends next email per lead, updates state.json.
 * Respects DAILY_LIMIT (default 30) to preserve sender reputation.
 * Respects delayDays between emails.
 */
import fs from "node:fs";
import path from "node:path";
import type { Lead, Sequence } from "./types";
import { interpolate, pickSubject } from "./types";
import { roiFr } from "./templates/roi-fr";
import { urgentFr } from "./templates/urgent-fr";
import { socialFr } from "./templates/social-fr";
import { roiEn, urgentEn, socialEn } from "./templates/en";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL ?? "laurent@agentic-whatsup.com";
const REPLY_TO = process.env.REPLY_TO_EMAIL ?? "cohenrichard07@gmail.com";
const DAILY_LIMIT = Number(process.env.DAILY_LIMIT ?? 30);
const DRY_RUN = process.env.DRY_RUN === "1";

const LEADS_PATH = path.join(__dirname, "leads.json");
const STATE_PATH = path.join(__dirname, "state.json");

if (!DRY_RUN && !RESEND_API_KEY) {
  console.error("❌ RESEND_API_KEY missing (or set DRY_RUN=1)");
  process.exit(1);
}

const SEQUENCES: Sequence[] = [
  { variant: "roi", locale: "fr", templates: roiFr },
  { variant: "urgent", locale: "fr", templates: urgentFr },
  { variant: "social", locale: "fr", templates: socialFr },
  { variant: "roi", locale: "en", templates: roiEn },
  { variant: "urgent", locale: "en", templates: urgentEn },
  { variant: "social", locale: "en", templates: socialEn },
];

function findSequence(variant: string, locale: string) {
  return SEQUENCES.find((s) => s.variant === variant && s.locale === locale);
}

function nextTemplateIndex(status: Lead["status"]): number | null {
  if (status === "pending") return 0;
  if (status === "sent_1") return 1;
  if (status === "sent_2") return 2;
  return null;
}

function daysSince(iso: string): number {
  return (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60 * 24);
}

async function sendEmail(to: string, subject: string, body: string) {
  if (DRY_RUN) {
    console.log(`  [DRY] → ${to}  |  "${subject}"`);
    return { ok: true, dry: true };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Laurent @ AgenticWhatsup <${FROM_EMAIL}>`,
      to: [to],
      reply_to: REPLY_TO,
      subject,
      text: body,
      headers: {
        "List-Unsubscribe": `<mailto:${REPLY_TO}?subject=Unsubscribe>, <https://agentic-whatsup.com/unsubscribe?email=${encodeURIComponent(to)}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    }),
  });

  if (!res.ok) {
    const t = await res.text();
    return { ok: false, error: `${res.status} ${t.substring(0, 200)}` };
  }
  return { ok: true, data: await res.json() };
}

async function main() {
  if (!fs.existsSync(LEADS_PATH)) {
    console.error(`❌ ${LEADS_PATH} not found. Run scrape-apollo first.`);
    process.exit(1);
  }

  const leads: Lead[] = JSON.parse(fs.readFileSync(LEADS_PATH, "utf8"));
  console.log(`📧 ${leads.length} leads loaded. Daily limit: ${DAILY_LIMIT}. Dry run: ${DRY_RUN}`);

  let sent = 0;
  let skipped = 0;
  const errors: string[] = [];

  for (const lead of leads) {
    if (sent >= DAILY_LIMIT) break;

    if (["replied", "bounced", "unsubscribed", "sent_3"].includes(lead.status)) {
      skipped++;
      continue;
    }

    const idx = nextTemplateIndex(lead.status);
    if (idx === null) continue;

    const seq = findSequence(lead.variant, lead.locale);
    if (!seq) {
      errors.push(`No sequence for ${lead.variant}/${lead.locale}`);
      continue;
    }

    const tmpl = seq.templates[idx];
    if (!tmpl) continue;

    // Respect delay
    if (idx > 0 && lead.lastSentAt) {
      const needed = tmpl.delayDays ?? 0;
      const elapsed = daysSince(lead.lastSentAt);
      if (elapsed < needed) {
        skipped++;
        continue;
      }
    }

    const subject = pickSubject(tmpl.subjectVariants, lead);
    const body = tmpl.body(lead);
    const result = await sendEmail(lead.email, subject, body);

    if (result.ok) {
      lead.status = idx === 0 ? "sent_1" : idx === 1 ? "sent_2" : "sent_3";
      lead.lastSentAt = new Date().toISOString();
      lead.firstSentAt = lead.firstSentAt ?? lead.lastSentAt;
      sent++;
      console.log(`  ✓ ${lead.variant}/${lead.locale}/e${idx + 1} → ${lead.email}`);
    } else {
      errors.push(`${lead.email}: ${("error" in result && result.error) || "unknown"}`);
    }

    // rate limit 2s between sends
    await new Promise((r) => setTimeout(r, 2000));
  }

  // Persist
  fs.writeFileSync(LEADS_PATH, JSON.stringify(leads, null, 2));
  fs.writeFileSync(
    STATE_PATH,
    JSON.stringify({ lastRun: new Date().toISOString(), sent, skipped, errors: errors.length, errorSamples: errors.slice(0, 5) }, null, 2)
  );

  console.log(`\n📊 Summary: sent=${sent}  skipped=${skipped}  errors=${errors.length}`);
  if (errors.length) console.log(`  First errors:\n   ${errors.slice(0, 3).join("\n   ")}`);
}

main().catch((e) => {
  console.error("FATAL:", e);
  process.exit(1);
});
