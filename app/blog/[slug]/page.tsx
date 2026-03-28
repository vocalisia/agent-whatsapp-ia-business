import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  try {
    const { slug } = await params;
    const { meta } = getPostBySlug(slug);
    return { title: meta.title, description: meta.description };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-wa transition-colors text-sm mb-8">
        <ArrowLeft size={16} />Retour au blog
      </Link>
      <p className="text-wa text-sm font-medium mb-3">
        {new Date(post.meta.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
      </p>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">{post.meta.title}</h1>
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </div>
  );
}
