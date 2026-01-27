"use client";
import { useParams } from "next/navigation";
import { blogPosts } from "@/lib/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export default function BlogPostPage() {
  const params = useParams();
  // Safe handling of slug
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#FDFCF8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1B365D] mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-[#D4AF37] hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#FDFCF8] min-h-screen">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#1B365D] mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-4 items-center text-sm text-[#64748B] mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${post.color}`}>
              {post.category}
            </span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-[#1B365D] leading-tight mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-[#64748B] leading-relaxed border-l-4 border-[#D4AF37] pl-6 italic">
            {post.excerpt}
          </p>
        </div>

        {/* Content */}
        <div 
          className="prose prose-lg prose-blue max-w-none text-[#334155]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Call to Action */}
        <div className="mt-16 bg-[#1B365D] p-8 rounded-3xl text-white text-center">
           <h3 className="text-2xl font-bold mb-4">Build Better, Faster.</h3>
           <p className="text-blue-200 mb-6">Start your next project with FounderKit's clean architecture.</p>
           <Link href="/#kits" className="inline-block bg-[#D4AF37] text-[#0F172A] px-8 py-3 rounded-xl font-bold hover:bg-white transition-colors">
             Get the Kit
           </Link>
        </div>

      </article>

      <Footer />
    </main>
  );
}