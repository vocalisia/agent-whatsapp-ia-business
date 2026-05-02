import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface HowToStep {
  name: string;
  text: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  readTime?: string;
  author?: string;
  howToSteps?: HowToStep[];
}

function readPost(slug: string, locale?: string): { meta: PostMeta; content: string } {
  // Try locale-specific file first, then fallback to FR root
  const candidates: string[] = [];
  if (locale && locale !== "fr") {
    candidates.push(path.join(BLOG_DIR, locale, `${slug}.mdx`));
  }
  candidates.push(path.join(BLOG_DIR, `${slug}.mdx`));

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
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
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
  return readPost(slug, locale);
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
