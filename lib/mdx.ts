import fs from "fs";
import path from "path";
import matter from "gray-matter";

// v2026-05-26
const BLOG_DIR = path.join(process.cwd(), "content/blog");
const LOCALE_DIRS = ["en", "de", "nl"];
const BLOCKED_PRICING_SLUG_RE = /(cost|pricing|kosten|prix|tarif)/i;

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
  howToSteps?: HowToStep[];
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
      const raw = fs.readFileSync(filePath, "utf8");
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
