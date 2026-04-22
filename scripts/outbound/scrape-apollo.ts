/* eslint-disable */
/**
 * Apollo.io lead scraper.
 *
 * Usage:
 *   APOLLO_API_KEY=xxx node --loader ts-node/esm scripts/outbound/scrape-apollo.ts
 *   (or compile with tsc then run the .js)
 *
 * Targets: PME ≥10 salariés, anglophone/francophone (hors Afrique),
 * secteurs B2B qualifiés (pas avocats/notaires/commerçants).
 */
import fs from "node:fs";
import path from "node:path";
import type { Lead } from "./types";

const APOLLO_API_KEY = process.env.APOLLO_API_KEY;
const OUTPUT = path.join(__dirname, "leads.json");

if (!APOLLO_API_KEY) {
  console.error("❌ APOLLO_API_KEY missing. Get it from apollo.io/settings/api");
  process.exit(1);
}

// Target countries — French + English-speaking excluding Africa
const COUNTRIES = [
  "France",
  "Belgium",
  "Switzerland",
  "Luxembourg",
  "Monaco",
  "Canada",
  "United Kingdom",
  "Ireland",
  "United States",
  "Australia",
  "New Zealand",
];

// B2B industries excluding law, notary, retail
const INDUSTRIES = [
  "accounting",
  "real estate",
  "health, wellness & fitness",
  "hospital & health care",
  "medical practice",
  "marketing & advertising",
  "computer software",
  "information technology & services",
  "insurance",
  "financial services",
  "logistics & supply chain",
  "transportation/trucking/railroad",
  "manufacturing",
  "industrial automation",
  "professional training & coaching",
  "higher education",
  "staffing & recruiting",
  "human resources",
];

interface ApolloContact {
  id: string;
  first_name: string;
  last_name: string;
  last_name_obfuscated?: string;
  email?: string;
  title: string;
  has_email?: boolean;
  organization?: { name: string; industry?: string; country?: string; estimated_num_employees?: number };
}

async function searchPage(page: number, perPage = 25) {
  const body = {
    q_organization_num_employees_ranges: ["10,50", "51,200", "201,500"],
    person_titles: ["CEO", "Founder", "Co-Founder", "Managing Director", "Owner", "COO", "VP Sales", "Head of Sales", "Sales Director"],
    organization_locations: COUNTRIES,
    organization_industry_tag_ids: INDUSTRIES,
    reveal_personal_emails: true,
    page,
    per_page: perPage,
  };

  const res = await fetch("https://api.apollo.io/api/v1/mixed_people/api_search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      "X-Api-Key": APOLLO_API_KEY!,
      accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Apollo ${res.status}: ${t.substring(0, 200)}`);
  }

  const data = (await res.json()) as { people: ApolloContact[]; pagination: { page: number; total_entries: number } };
  return data;
}

async function revealEmails(ids: string[]): Promise<Record<string, string>> {
  if (ids.length === 0) return {};
  const res = await fetch("https://api.apollo.io/api/v1/people/bulk_match", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Api-Key": APOLLO_API_KEY!, accept: "application/json" },
    body: JSON.stringify({ details: ids.map((id) => ({ id })), reveal_personal_emails: true }),
  });
  if (!res.ok) return {};
  const data = (await res.json()) as { matches?: Array<{ id: string; email?: string }> };
  const map: Record<string, string> = {};
  for (const m of data.matches ?? []) {
    if (m.id && m.email) map[m.id] = m.email;
  }
  return map;
}

function detectLocale(country?: string): "fr" | "en" {
  const fr = ["France", "Belgium", "Switzerland", "Luxembourg", "Monaco"];
  const qcMaybe = country === "Canada"; // Canada → default EN, manual override if Québec
  return country && fr.includes(country) ? "fr" : qcMaybe ? "en" : "en";
}

function pickVariant(idx: number): "roi" | "urgent" | "social" {
  const r = idx % 3;
  return r === 0 ? "roi" : r === 1 ? "urgent" : "social";
}

async function main() {
  const TARGET = 500;
  const leads: Lead[] = [];
  let page = 1;

  console.log(`🔍 Scraping ${TARGET} leads across ${COUNTRIES.length} countries, ${INDUSTRIES.length} industries...`);

  while (leads.length < TARGET && page <= 50) {
    try {
      const { people, pagination } = await searchPage(page, 25);
      console.log(`  page ${page}: ${people.length} contacts (total seen=${leads.length})`);

      // Reveal emails for people that have one but it's not shown
      const needReveal = people.filter((p) => !p.email && p.has_email).map((p) => p.id);
      const revealed = needReveal.length > 0 ? await revealEmails(needReveal) : {};

      for (const p of people) {
        const email = p.email ?? revealed[p.id];
        if (!email) continue;
        if (leads.length >= TARGET) break;
        leads.push({
          firstName: p.first_name,
          lastName: p.last_name ?? (p.last_name_obfuscated ? "" : ""),
          email,
          company: p.organization?.name ?? "your company",
          role: p.title,
          industry: p.organization?.industry,
          country: p.organization?.country,
          locale: detectLocale(p.organization?.country),
          status: "pending",
          variant: pickVariant(leads.length),
        });
      }

      if (page >= pagination.total_entries / 25) break;
      page += 1;
      await new Promise((r) => setTimeout(r, 1000)); // rate limit cushion
    } catch (e) {
      console.error(`⚠️  page ${page}:`, (e as Error).message);
      break;
    }
  }

  fs.writeFileSync(OUTPUT, JSON.stringify(leads, null, 2));
  console.log(`\n✅ Saved ${leads.length} leads to ${OUTPUT}`);
  console.log(`   FR: ${leads.filter((l) => l.locale === "fr").length}  |  EN: ${leads.filter((l) => l.locale === "en").length}`);
  console.log(`   ROI: ${leads.filter((l) => l.variant === "roi").length}  |  URGENT: ${leads.filter((l) => l.variant === "urgent").length}  |  SOCIAL: ${leads.filter((l) => l.variant === "social").length}`);
}

main().catch((e) => {
  console.error("FATAL:", e);
  process.exit(1);
});
