import Link from "next/link";
import { PostMeta } from "@/lib/mdx";
import { Clock, Calendar } from "lucide-react";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block bg-surface rounded-xl p-6 border border-surface-2 hover:border-wa/50 transition-all duration-300 group">
      <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
        <span className="flex items-center gap-1">
          <Calendar size={12} />
          {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
        </span>
        {post.readTime && (
          <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
        )}
      </div>
      <h2 className="font-semibold text-white text-lg mb-2 group-hover:text-wa transition-colors leading-tight">{post.title}</h2>
      <p className="text-slate-400 text-sm leading-relaxed">{post.description}</p>
      <span className="inline-block mt-4 text-wa text-sm font-medium group-hover:underline">Lire l&apos;article →</span>
    </Link>
  );
}
