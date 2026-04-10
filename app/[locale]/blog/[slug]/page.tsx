import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const locales = ["fr", "en", "de"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const { meta } = getPostBySlug(slug);
    return {
      title: meta.title,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        type: "article",
        publishedTime: meta.date,
        authors: meta.author ? [meta.author] : ["AgenticWhatsup"],
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    author: {
      "@type": "Organization",
      name: post.meta.author ?? "AgenticWhatsup",
      url: "https://agentic-whatsup.com",
    },
    publisher: {
      "@type": "Organization",
      name: "AgenticWhatsup",
      url: "https://agentic-whatsup.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://agentic-whatsup.com/blog/${slug}`,
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-slate-400 hover:text-wa transition-colors text-sm mb-8">
        <ArrowLeft size={16} />{t("backToBlog")}
      </Link>

      {/* Cover */}
      <div className="h-48 rounded-2xl bg-gradient-to-br from-wa/20 via-surface to-indigo-500/15 border border-surface-2 flex items-center justify-center px-8 mb-8">
        <p className="text-white font-bold text-xl text-center leading-snug">{post.meta.title}</p>
      </div>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-6">
        <span>
          {new Date(post.meta.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
        </span>
        {post.meta.readTime && (
          <span className="flex items-center gap-1"><Clock size={11} />{post.meta.readTime} {t("reading")}</span>
        )}
        {post.meta.author && (
          <span className="flex items-center gap-1"><User size={11} />{post.meta.author}</span>
        )}
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-8 leading-tight" style={{ fontFamily: "Onest, sans-serif" }}>
        {post.meta.title}
      </h1>

      <div className="prose prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>

      {/* CTA fin d'article */}
      <div className="mt-16 bg-wa/5 border border-wa/20 rounded-2xl p-8 text-center">
        <p className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Onest, sans-serif" }}>
          {t("ctaTitle")}
        </p>
        <p className="text-slate-400 text-sm mb-5">{t("ctaSubtitle")}</p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-wa hover:bg-wa/90 text-white rounded-xl px-6 py-3 font-bold text-sm transition-colors"
        >
          {t("ctaButton")}
        </Link>
      </div>
    </div>
  );
}
