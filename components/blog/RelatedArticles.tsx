import Link from "next/link";
import { PostMeta } from "@/lib/mdx";
import { Clock, ArrowRight } from "lucide-react";

const labels: Record<string, { title: string; read: string }> = {
  fr: { title: "Autres articles qui pourraient vous intéresser", read: "Lire l'article" },
  en: { title: "You might also like", read: "Read article" },
  de: { title: "Weitere Artikel, die Sie interessieren könnten", read: "Artikel lesen" },
  nl: { title: "Andere artikelen die u misschien interesseren", read: "Artikel lezen" },
};

export default function RelatedArticles({
  locale,
  currentSlug,
  posts,
}: {
  locale: string;
  currentSlug: string;
  posts: PostMeta[];
}) {
  const l = labels[locale] ?? labels.fr;
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="mt-16 border-t border-surface-2 pt-12">
      <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "Onest, sans-serif" }}>
        {l.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            className="group block bg-surface border border-surface-2 hover:border-wa/40 rounded-xl p-4 transition-all duration-200"
          >
            <p className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-wa transition-colors line-clamp-3">
              {post.title}
            </p>
            {post.readTime && (
              <span className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                <Clock size={11} />
                {post.readTime}
              </span>
            )}
            <span className="flex items-center gap-1 text-wa text-xs font-medium group-hover:underline">
              {l.read} <ArrowRight size={12} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
