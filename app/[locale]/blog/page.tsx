import { getTranslations } from "next-intl/server";
import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/blog/BlogCard";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: `https://agentic-whatsup.com/${locale}/blog`,
      languages: {
        fr: "https://agentic-whatsup.com/fr/blog",
        en: "https://agentic-whatsup.com/en/blog",
        de: "https://agentic-whatsup.com/de/blog",
        nl: "https://agentic-whatsup.com/nl/blog",
        "x-default": "https://agentic-whatsup.com/fr/blog",
      },
      types: {
        "application/rss+xml": `https://agentic-whatsup.com/${locale}/blog/feed.xml`,
      },
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = getAllPosts();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `https://agentic-whatsup.com/${locale}/blog` },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <h1 className="text-4xl font-extrabold text-white mb-4">{t("title")}</h1>
      <p className="text-slate-400 text-lg mb-12">{t("subtitle")}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </div>
  );
}
