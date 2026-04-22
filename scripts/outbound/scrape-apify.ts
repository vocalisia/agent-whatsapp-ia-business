/* eslint-disable */
/**
 * Scraper PME B2B via Apify Google Maps + website email extractor.
 *
 * Usage:
 *   APIFY_TOKEN=apify_xxx npx tsx scripts/outbound/scrape-apify.ts
 *
 * Pipeline:
 *  1. Google Maps scraper (compass/crawler-google-places) → businesses with websites
 *  2. Email extractor (poidata/google-maps-email-extractor OR apify/website-content-crawler)
 *  3. Compose leads.json with first/last/email/company/country
 */
import fs from "node:fs";
import path from "node:path";
import type { Lead } from "./types";

const APIFY_TOKEN = process.env.APIFY_TOKEN;
const OUTPUT = path.join(__dirname, "leads.json");

if (!APIFY_TOKEN) {
  console.error("❌ APIFY_TOKEN missing. Set env var.");
  process.exit(1);
}

// B2B queries (no retail, no lawyers, no notaries)
const SEARCH_TERMS = [
  "cabinet comptable",
  "agence immobilière commerciale",
  "clinique dentaire",
  "agence marketing digital",
  "cabinet de recrutement",
  "entreprise logistique",
  "cabinet de coaching entreprise",
  "agence communication",
];

// Mix cities FR/BE/CH + some EN cities for coverage
const CITIES = [
  { q: "Paris, France", loc: "France" },
  { q: "Lyon, France", loc: "France" },
  { q: "Marseille, France", loc: "France" },
  { q: "Bordeaux, France", loc: "France" },
  { q: "Lille, France", loc: "France" },
  { q: "Nantes, France", loc: "France" },
  { q: "Bruxelles, Belgium", loc: "Belgium" },
  { q: "Anvers, Belgium", loc: "Belgium" },
  { q: "Geneva, Switzerland", loc: "Switzerland" },
  { q: "Zurich, Switzerland", loc: "Switzerland" },
  { q: "Lausanne, Switzerland", loc: "Switzerland" },
  { q: "London, UK", loc: "United Kingdom" },
  { q: "Manchester, UK", loc: "United Kingdom" },
  { q: "Dublin, Ireland", loc: "Ireland" },
];

interface GMapsPlace {
  title: string;
  categoryName?: string;
  website?: string;
  phone?: string;
  emails?: string[];
  address?: string;
  countryCode?: string;
  totalScore?: number;
  reviewsCount?: number;
}

function detectLocale(country: string): "fr" | "en" {
  const fr = ["France", "Belgium", "Switzerland", "Luxembourg", "Monaco"];
  return fr.includes(country) ? "fr" : "en";
}

function pickVariant(idx: number): "roi" | "urgent" | "social" {
  const r = idx % 3;
  return r === 0 ? "roi" : r === 1 ? "urgent" : "social";
}

// Run Apify actor synchronously and get dataset items
async function runActor(actorId: string, input: object): Promise<any[]> {
  const res = await fetch(`https://api.apify.com/v2/acts/${actorId}/run-sync-get-dataset-items?token=${APIFY_TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Apify actor ${actorId} ${res.status}: ${t.substring(0, 300)}`);
  }
  return res.json();
}

async function main() {
  const TARGET = 500;
  const allLeads: Lead[] = [];

  console.log(`🔍 Scraping ${SEARCH_TERMS.length} sectors × ${CITIES.length} cities via Apify Google Maps...`);

  for (const city of CITIES) {
    if (allLeads.length >= TARGET) break;

    console.log(`\n📍 ${city.q}`);
    const input = {
      searchStringsArray: SEARCH_TERMS.slice(0, 4), // 4 sectors per city first pass
      locationQuery: city.q,
      maxCrawledPlacesPerSearch: 8, // 4 × 8 = 32 businesses per city max
      scrapeContacts: true,
      includeWebResults: false,
      skipClosedPlaces: true,
      language: city.loc === "France" || city.loc === "Belgium" ? "fr" : "en",
    };

    try {
      const results: GMapsPlace[] = await runActor("compass~crawler-google-places", input);
      console.log(`   → ${results.length} businesses found`);

      for (const biz of results) {
        if (allLeads.length >= TARGET) break;
        if (!biz.website || !biz.emails || biz.emails.length === 0) continue;

        const email = biz.emails[0];
        // Filter out obvious generic emails you don't want in cold outreach
        if (/^(contact|info|hello|bonjour|welcome|support|admin|sales)@/i.test(email)) {
          // keep, but tag firstName as "équipe"
        }

        const company = biz.title.replace(/[,\.].*$/, "").trim();
        const localMatch = email.match(/^([a-z]+)[\._-]?([a-z]*)?@/i);
        const firstName = localMatch?.[1] ? localMatch[1][0].toUpperCase() + localMatch[1].slice(1) : "Bonjour";
        const lastName = localMatch?.[2] ? localMatch[2][0].toUpperCase() + localMatch[2].slice(1) : "";

        allLeads.push({
          firstName,
          lastName,
          email,
          company,
          role: biz.categoryName ?? "",
          industry: biz.categoryName ?? "",
          country: city.loc,
          locale: detectLocale(city.loc),
          status: "pending",
          variant: pickVariant(allLeads.length),
        });
      }
      console.log(`   ✓ cumulative leads: ${allLeads.length}`);
    } catch (e) {
      console.error(`   ⚠️  ${(e as Error).message}`);
    }
  }

  // Dedupe by email
  const seen = new Set<string>();
  const dedup = allLeads.filter((l) => {
    const k = l.email.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  fs.writeFileSync(OUTPUT, JSON.stringify(dedup, null, 2));
  console.log(`\n✅ Saved ${dedup.length} leads to ${OUTPUT}`);
  console.log(`   FR: ${dedup.filter((l) => l.locale === "fr").length}  |  EN: ${dedup.filter((l) => l.locale === "en").length}`);
  console.log(`   ROI: ${dedup.filter((l) => l.variant === "roi").length}  |  URGENT: ${dedup.filter((l) => l.variant === "urgent").length}  |  SOCIAL: ${dedup.filter((l) => l.variant === "social").length}`);
}

main().catch((e) => {
  console.error("FATAL:", e);
  process.exit(1);
});
