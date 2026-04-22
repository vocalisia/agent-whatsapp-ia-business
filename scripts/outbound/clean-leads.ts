/* eslint-disable */
/**
 * Clean leads.json :
 *  - drop broken emails
 *  - mark generic (contact@, info@, etc.) vs personal
 *  - fix firstName for generics → "Bonjour" + capitalized company
 *  - emit clean-leads.json
 */
import fs from "node:fs";
import path from "node:path";
import type { Lead } from "./types";

const INPUT = path.join(__dirname, "leads.json");
const OUTPUT_CLEAN = path.join(__dirname, "leads.json");
const OUTPUT_DROPPED = path.join(__dirname, "leads-dropped.json");

const GENERIC_LOCAL_RE = /^(contact|info|hello|bonjour|welcome|support|admin|sales|reclamations|service|accueil|commercial|direction|rh|secretariat|equipe|team|office|bonjour|accueil|courrier|noreply|no-reply|postmaster|webmaster|facturation|compta|comptabilite)/i;

const raw: Lead[] = JSON.parse(fs.readFileSync(INPUT, "utf8"));
const kept: (Lead & { isGeneric: boolean })[] = [];
const dropped: Array<Lead & { reason: string }> = [];

for (const l of raw) {
  const email = (l.email || "").trim().toLowerCase();

  if (!email.includes("@") || email.includes("google.com/maps") || email.startsWith("//")) {
    dropped.push({ ...l, reason: "broken_email" });
    continue;
  }
  // Require valid email shape
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email)) {
    dropped.push({ ...l, reason: "invalid_email" });
    continue;
  }
  // Drop obvious personal inboxes (gmail/hotmail/yahoo) — low B2B signal
  if (/@(gmail|hotmail|yahoo|outlook|live|icloud|wanadoo|orange\.fr|free\.fr)\.(com|fr|be|ch|co\.uk)$/i.test(email)) {
    dropped.push({ ...l, reason: "personal_mailbox" });
    continue;
  }

  const local = email.split("@")[0];
  const isGeneric = GENERIC_LOCAL_RE.test(local);

  if (isGeneric) {
    kept.push({
      ...l,
      email,
      firstName: "Bonjour",
      lastName: "",
      isGeneric: true,
    });
  } else {
    // Attempt to better parse firstName.lastName
    const parts = local.split(/[._-]/).filter((p) => p.length > 0);
    let firstName = parts[0] ?? "Bonjour";
    let lastName = parts[1] ?? "";
    // Filter single-letter first names like "l.maruani" → keep as Bonjour
    if (firstName.length <= 2 && lastName.length > 2) {
      firstName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
      lastName = "";
    } else {
      firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
      lastName = lastName ? lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() : "";
    }
    kept.push({
      ...l,
      email,
      firstName,
      lastName,
      isGeneric: false,
    });
  }
}

fs.writeFileSync(OUTPUT_CLEAN, JSON.stringify(kept, null, 2));
fs.writeFileSync(OUTPUT_DROPPED, JSON.stringify(dropped, null, 2));

const stats = {
  total: raw.length,
  kept: kept.length,
  dropped: dropped.length,
  personal: kept.filter((l) => !l.isGeneric).length,
  generic: kept.filter((l) => l.isGeneric).length,
  byCountry: kept.reduce<Record<string, number>>((a, l) => {
    a[l.country ?? "??"] = (a[l.country ?? "??"] ?? 0) + 1;
    return a;
  }, {}),
  byVariant: kept.reduce<Record<string, number>>((a, l) => {
    a[l.variant] = (a[l.variant] ?? 0) + 1;
    return a;
  }, {}),
  droppedReasons: dropped.reduce<Record<string, number>>((a, l) => {
    a[l.reason] = (a[l.reason] ?? 0) + 1;
    return a;
  }, {}),
};

console.log(JSON.stringify(stats, null, 2));
