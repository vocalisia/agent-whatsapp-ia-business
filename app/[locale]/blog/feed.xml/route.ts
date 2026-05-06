import { getAllPosts } from "@/lib/mdx";
import { NextRequest } from "next/server";

const BASE_URL = "https://agentic-whatsup.com";

const siteNames: Record<string, string> = {
  fr: "AgenticWhatsup — Blog IA WhatsApp",
  en: "AgenticWhatsup — WhatsApp AI Blog",
  de: "AgenticWhatsup — WhatsApp KI Blog",
  nl: "AgenticWhatsup — WhatsApp AI Blog",
};

const siteDescs: Record<string, string> = {
  fr: "Articles sur l'agent IA WhatsApp : automatisation, qualification de leads, cas d'usage et guides pratiques.",
  en: "Articles on WhatsApp AI agents: automation, lead qualification, use cases and practical guides.",
  de: "Artikel über WhatsApp KI-Agenten: Automatisierung, Lead-Qualifizierung, Anwendungsfälle und praktische Leitfäden.",
  nl: "Artikelen over WhatsApp AI-agenten: automatisering, leadkwalificatie, gebruiksgevallen en praktische gidsen.",
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ locale: string }> }
) {
  const { locale } = await params;
  const lang = ["fr", "en", "de", "nl"].includes(locale) ? locale : "fr";
  const posts = getAllPosts(lang);

  const items = posts
    .slice(0, 30)
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      const url = `${BASE_URL}/${lang}/blog/${post.slug}`;
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>contact@agentic-whatsup.com (${post.author ?? "Laurent Duplat"})</author>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteNames[lang]}</title>
    <link>${BASE_URL}/${lang}/blog</link>
    <description>${siteDescs[lang]}</description>
    <language>${lang}</language>
    <atom:link href="${BASE_URL}/${lang}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <image>
      <url>${BASE_URL}/og-image.jpg</url>
      <title>${siteNames[lang]}</title>
      <link>${BASE_URL}/${lang}/blog</link>
    </image>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
