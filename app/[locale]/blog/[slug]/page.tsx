import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getAllPosts, getPostBySlug, isBlockedPricingSlug } from "@/lib/mdx";
import { normalizeBlogMarkdownHref } from "@/lib/normalize-blog-href";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock, User } from "lucide-react";
import { getTranslations } from "next-intl/server";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedArticles from "@/components/blog/RelatedArticles";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  const locales = ["fr", "en", "de", "nl"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }): Promise<Metadata> {
  try {
    const { slug, locale } = await params;
    if (isBlockedPricingSlug(slug)) {
      return {
        robots: {
          index: false,
          follow: true,
        },
        alternates: {
          canonical: `https://agentic-whatsup.com/${locale}/contact`,
        },
      };
    }
    const { meta } = getPostBySlug(slug, locale);
    return {
      title: meta.title,
      description: meta.description,
      alternates: {
        canonical: `https://agentic-whatsup.com/${locale}/blog/${slug}`,
        languages: {
          fr: `https://agentic-whatsup.com/fr/blog/${slug}`,
          en: `https://agentic-whatsup.com/en/blog/${slug}`,
          de: `https://agentic-whatsup.com/de/blog/${slug}`,
          nl: `https://agentic-whatsup.com/nl/blog/${slug}`,
          "x-default": `https://agentic-whatsup.com/fr/blog/${slug}`,
        },
      },
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
  if (isBlockedPricingSlug(slug)) {
    notFound();
  }
  const t = await getTranslations({ locale, namespace: "blog" });
  const allPosts = getAllPosts(locale);

  let post;
  try {
    post = getPostBySlug(slug, locale);
  } catch {
    notFound();
  }

  const mdxComponents: MDXRemoteProps["components"] = {
    img: ({ src, alt }) => (
      <span className="not-prose my-8 block overflow-hidden rounded-2xl border border-surface-2 bg-surface">
        {/* MDX images are editorial assets; constrain them so SVGs never cover text. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={typeof src === "string" ? src : ""}
          alt={typeof alt === "string" ? alt : ""}
          className="block h-auto w-full max-w-full object-contain"
          loading="lazy"
        />
      </span>
    ),
    a: ({ href, children }) => {
      if (!href) return <span>{children}</span>;
      const out = normalizeBlogMarkdownHref(href, locale, {
        sameOriginHosts: ["agentic-whatsup.com"],
      });
      const linkClass = "text-wa hover:underline";
      if (/^https?:\/\//i.test(out)) {
        return (
          <a href={out} target="_blank" rel="noopener noreferrer" className={linkClass}>
            {children}
          </a>
        );
      }
      return (
        <Link href={out} className={linkClass}>
          {children}
        </Link>
      );
    },
  };

  const canonicalUrl = `https://agentic-whatsup.com/${locale}/blog/${slug}`;
  const authorName = post.meta.author && post.meta.author !== "AgenticWhatsup"
    ? post.meta.author
    : "Laurent Duplat";
  const authorJsonLd = authorName === "Laurent Duplat"
    ? {
        "@type": "Person",
        "@id": "https://agentic-whatsup.com/fr/auteur/laurent-duplat",
        name: "Laurent Duplat",
        url: `https://agentic-whatsup.com/${locale}/auteur/laurent-duplat`,
        sameAs: ["https://www.linkedin.com/in/vocalisia/", "https://x.com/VocalisAi"],
      }
    : {
        "@type": "Person",
        name: authorName,
      };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    dateModified: post.meta.dateModified ?? post.meta.date,
    inLanguage: locale,
    author: authorJsonLd,
    publisher: {
      "@type": "Organization",
      "@id": "https://agentic-whatsup.com/#organization",
      name: "AgenticWhatsup",
      url: "https://agentic-whatsup.com",
      logo: {
        "@type": "ImageObject",
        url: "https://agentic-whatsup.com/icon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
    image: "https://agentic-whatsup.com/og-image.jpg",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".article-intro", ".article-summary"],
    },
  };

  // Auto-detect FAQ from MDX content (## Question? followed by answer).
  function stripMd(s: string): string {
    return s
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/\*\*([^*]+)\*\*/g, "estimation personnalisee")
      .replace(/\*([^*]+)\*/g, "estimation personnalisee")
      .replace(/`([^`]+)`/g, "estimation personnalisee")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "estimation personnalisee")
      .replace(/\s+/g, " ")
      .trim();
  }
  const md = post.content || "";
  const faqPairs: { question: string; answer: string }[] = (() => {
    const re = /^#{2,3}\s+(.+?\?)\s*$/gm;
    const matches = [...md.matchAll(re)];
    if (matches.length < 2) return [];
    const result: { question: string; answer: string }[] = [];
    for (let i = 0; i < matches.length; i++) {
      const m = matches[i];
      const start = (m.index ?? 0) + m[0].length;
      const end = i + 1 < matches.length ? (matches[i + 1].index ?? md.length) : md.length;
      const answer = stripMd(md.slice(start, end)).slice(0, 480);
      if (answer.length >= 30) {
        result.push({ question: stripMd(m[1]).slice(0, 220), answer });
      }
    }
    return result;
  })();
  const faqJsonLd = faqPairs.length >= 2
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: faqPairs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "AgenticWhatsup", "item": "https://agentic-whatsup.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `https://agentic-whatsup.com/${locale}/blog` },
      { "@type": "ListItem", "position": 3, "name": post.meta.title, "item": canonicalUrl },
    ],
  };

  const howToJsonLd = post.meta.howToSteps && post.meta.howToSteps.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: post.meta.title,
        description: post.meta.description,
        step: post.meta.howToSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }
    : null;

  return (
    <>
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
          {new Date(post.meta.date).toLocaleDateString(locale === "fr" ? "fr-FR" : locale === "de" ? "de-DE" : locale === "nl" ? "nl-NL" : "en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </span>
        {post.meta.dateModified && post.meta.dateModified !== post.meta.date && (
          <span className="text-slate-600">
            · {locale === "fr" ? "Mis à jour" : locale === "de" ? "Aktualisiert" : locale === "nl" ? "Bijgewerkt" : "Updated"}{" "}
            {new Date(post.meta.dateModified).toLocaleDateString(locale === "fr" ? "fr-FR" : locale === "de" ? "de-DE" : locale === "nl" ? "nl-NL" : "en-GB", { day: "numeric", month: "long", year: "numeric" })}
          </span>
        )}
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
        <MDXRemote source={post.content} components={mdxComponents} />
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

      <RelatedArticles locale={locale} currentSlug={slug} posts={allPosts} />
    </div>
    <StickyCTA locale={locale} />
    </>
  );
}
