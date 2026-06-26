import fs from "fs";
import path from "path";
import matter from "gray-matter";

// v2026-05-26
const BLOG_DIR = path.join(process.cwd(), "content/blog");
const LOCALE_DIRS = ["en", "de", "nl"];
const BLOCKED_PRICING_SLUG_RE = /(cost|pricing|price|kosten|prix|tarif|combien|cout|coute|co[uû]t|aio|llm-seo)/i;

export interface HowToStep {
  name: string;
  text: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  dateModified?: string;
  description: string;
  readTime?: string;
  author?: string;
  coverImage?: string;
  coverImageAlt?: string;
  howToSteps?: HowToStep[];
}

const MOJIBAKE_REPLACEMENTS: Array<[RegExp, string]> = [
  [/Ã©/g, "é"],
  [/Ã¨/g, "è"],
  [/Ãª/g, "ê"],
  [/Ã«/g, "ë"],
  [/Ã /g, "à"],
  [/Ã¢/g, "â"],
  [/Ã¹/g, "ù"],
  [/Ã»/g, "û"],
  [/Ã´/g, "ô"],
  [/Ã®/g, "î"],
  [/Ã¯/g, "ï"],
  [/Ã§/g, "ç"],
  [/Ã‰/g, "É"],
  [/Ã€/g, "À"],
  [/Ã‡/g, "Ç"],
  [/Å“/g, "œ"],
  [/â€™/g, "’"],
  [/â€œ/g, "“"],
  [/â€/g, "”"],
  [/â€“/g, "–"],
  [/â€”/g, "—"],
  [/â†’/g, "→"],
  [/Â·/g, "·"],
  [/Â²/g, "²"],
  [/Â°/g, "°"],
  [/Â /g, " "],
];

function repairMojibake(value: string): string {
  if (!/[ÃÂâÅ]/.test(value)) return value;
  return MOJIBAKE_REPLACEMENTS.reduce(
    (text, [pattern, replacement]) => text.replace(pattern, replacement),
    value
  );
}

function sanitizePublicArticleMarkdown(value: string): string {
  let clean = value
    .replace(/[\uFEFF]/g, "")
    .replace(/\b(?:EUR|USD|GBP|CHF)\s*[\d][\d\s.,]*(?:\s*(?:HT|TTC|\/\s?mois|par mois|per month|\/mo))?/gi, "cadrage sur audit")
    .replace(/[$€£]\s*[\d][\d\s.,]*(?:\s*(?:HT|TTC|\/\s?mois|par mois|per month|\/mo))?/gi, "cadrage sur audit")
    .replace(/[\d][\d\s.,]*\s*(?:€|EUR|CHF|USD|GBP|dollars?|euros?|francs suisses?|francs|£)(?:\s*(?:HT|TTC|\/\s?mois|par mois|per month|\/mo))?/gi, "cadrage sur audit")
    .replace(/\bestimation personnalis(?:ée|ee)\b/gi, "cadrage sur audit")
    .replace(/\b(?:à partir de|a partir de|starts at|from|ab|vanaf)\s+cadrage sur audit/gi, "cadrage sur audit");

  clean = clean
    .replace(/##\s+Combien ça coûte\s*\??/gi, "## Cadrer le budget sans mauvaise surprise")
    .replace(/##\s+How much .*?\?/gi, "## How to frame the budget safely")
    .replace(/##\s+Was kostet .*?\?/gi, "## Budget sauber klären")
    .replace(/##\s+Wat kost .*?\?/gi, "## Budget helder kaderen")
    .replace(/##\s+.*?\b(?:pricing|prices?|costs?)\b.*$/gim, "## How to scope the project safely")
    .replace(/##\s+.*?\b(?:tarifs?|prix)\b.*$/gim, "## Cadrer le projet sans mauvaise surprise")
    .replace(/##\s+.*?\b(?:kosten|preise?)\b.*$/gim, "## Projektumfang sauber klären")
    .replace(/##\s+.*?\b(?:prijzen|prijs|tarieven)\b.*$/gim, "## Project helder kaderen")
    .replace(/\b(?:pricing|price list|prices?|costs?)\b/gi, "scope")
    .replace(/\b(?:tarifs?|tarifaire|tarification|prix)\b/gi, "cadrage")
    .replace(/\b(?:preise?|kosten|kostet)\b/gi, "Umfang")
    .replace(/\b(?:prijzen|prijs|tarieven|kosten)\b/gi, "scope")
    .replace(/\[Combien co[ûu]te[^\]]*\]\([^)]+\)/gi, "[Audit gratuit 30 min](/fr/contact)")
    .replace(/\[How much[^\]]*\]\([^)]+\)/gi, "[Book a personalized audit](/en/contact)")
    .replace(/\[Wie viel kostet[^\]]*\]\([^)]+\)/gi, "[Kostenloses Audit buchen](/de/contact)")
    .replace(/\[Wat kost[^\]]*\]\([^)]+\)/gi, "[Gratis audit aanvragen](/nl/contact)")
    .replace(/^## Maillage interne et ancres utiles[\s\S]*?(?=^## (?:R[eé]ponse rapide|Quick answer|Schnelle Antwort|Snel antwoord))/gim, "")
    .replace(/^## Pourquoi ce sujet compte dans l'algorithme Google 2026$/gim, "## Pourquoi ce sujet compte pour votre projet")
    .replace(/AI Overviews?/g, "moteurs de réponse")
    .replace(/les LLM à relier les sujets par usage metier, pas seulement par mot-cle/g, "les assistants IA à comprendre les liens entre les usages métier")
    .replace(/Ce contenu est relie au cluster WhatsApp AI.*$/gim, "");

  return clean;
}

function readPost(slug: string, locale?: string): { meta: PostMeta; content: string } {
  const candidates: string[] = [];
  if (locale && locale !== "fr") {
    candidates.push(path.join(BLOG_DIR, locale, `${slug}.mdx`));
  }
  candidates.push(path.join(BLOG_DIR, `${slug}.mdx`));
  // Fallback: try any locale dir when slug only exists there (e.g. EN-only slug requested in FR)
  for (const fallbackLocale of LOCALE_DIRS) {
    candidates.push(path.join(BLOG_DIR, fallbackLocale, `${slug}.mdx`));
  }

  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      const raw = sanitizePublicArticleMarkdown(repairMojibake(fs.readFileSync(filePath, "utf8")));
      const { data, content } = matter(raw);
      return { meta: { slug, ...data } as PostMeta, content };
    }
  }
  throw new Error(`Post not found: ${slug}`);
}

export function getAllPosts(locale?: string): PostMeta[] {
  const slugs = getAllSlugs();
  return slugs
    .map((slug) => {
      try {
        const { meta } = readPost(slug, locale);
        return meta;
      } catch {
        return null;
      }
    })
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string, locale?: string): { meta: PostMeta; content: string } {
  if (isBlockedPricingSlug(slug)) {
    throw new Error(`Blocked pricing post: ${slug}`);
  }
  return readPost(slug, locale);
}

export function isBlockedPricingSlug(slug: string): boolean {
  return BLOCKED_PRICING_SLUG_RE.test(slug);
}

export function getAllSlugs(): string[] {
  const rootSlugs = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));

  const seen = new Set(rootSlugs);
  const extra: string[] = [];

  for (const locale of LOCALE_DIRS) {
    const localeDir = path.join(BLOG_DIR, locale);
    if (!fs.existsSync(localeDir)) continue;
    fs.readdirSync(localeDir)
      .filter((f) => f.endsWith(".mdx"))
      .forEach((f) => {
        const slug = f.replace(/\.mdx$/, "");
        if (!seen.has(slug)) {
          seen.add(slug);
          extra.push(slug);
        }
      });
  }

  return [...rootSlugs, ...extra].filter((slug) => !isBlockedPricingSlug(slug));
}
