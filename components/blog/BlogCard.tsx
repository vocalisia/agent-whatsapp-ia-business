import Link from "next/link";
import { PostMeta } from "@/lib/mdx";
import { Clock, Calendar, User } from "lucide-react";

export default function BlogCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block bg-surface rounded-xl border border-surface-2 hover:border-wa/50 transition-all duration-300 group overflow-hidden">
      {/* Cover banner */}
      <div className="h-32 bg-gradient-to-br from-wa/20 via-surface to-indigo-500/10 flex items-center justify-center px-6 border-b border-surface-2">
        <p className="text-white font-bold text-sm text-center leading-snug line-clamp-3 group-hover:text-wa transition-colors">{post.title}</p>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </span>
          {post.readTime && (
            <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
          )}
        </div>
        <h2 className="font-semibold text-white text-base mb-2 group-hover:text-wa transition-colors leading-tight">{post.title}</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.description}</p>
        <div className="flex items-center justify-between">
          {post.author && (
            <span className="flex items-center gap-1.5 text-xs text-slate-500">
              <User size={11} />
              {post.author}
            </span>
          )}
          <span className="text-wa text-sm font-medium group-hover:underline ml-auto">Lire l&apos;article →</span>
        </div>
      </div>
    </Link>
  );
}
