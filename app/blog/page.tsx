import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import BlogCard from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Blog — Agent IA WhatsApp",
  description: "Guides, tutoriels et conseils sur l'automatisation WhatsApp Business avec l'intelligence artificielle.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="text-4xl font-extrabold text-white mb-4">Blog</h1>
      <p className="text-slate-400 text-lg mb-12">Guides et conseils pour automatiser votre WhatsApp Business avec l&apos;IA.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
      </div>
    </div>
  );
}
