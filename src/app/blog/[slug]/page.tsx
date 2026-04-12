"use client";
import { useParams } from "next/navigation";
import { blogPosts } from "@/lib/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function BlogPostPage() {
  const params = useParams();
  // Safe handling of slug
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  
  const post = blogPosts.find((p) => p.slug === slug);

  // Logic for "You might be interested in"
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-[#D4AF37] hover:underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    // ✅ Global Dark Background
    <main className="bg-[var(--background)] min-h-screen">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-12">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[#D4AF37] mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-10 border-b border-white/10 pb-10">
          <div className="flex flex-wrap gap-4 items-center text-sm text-[var(--text-secondary)] mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-bold ${post.color}`}>
              {post.category}
            </span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-[var(--text-primary)] leading-tight mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed border-l-4 border-[#D4AF37] pl-6 italic">
            {post.excerpt}
          </p>
        </div>

        {/* Content (Thematic adaptivity) */}
        <div 
          className="prose prose-lg max-w-none text-[var(--text-primary)]
            prose-headings:text-[var(--text-primary)] prose-headings:font-bold
            prose-a:text-[#D4AF37] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[var(--text-primary)]
            prose-code:text-[#D4AF37] prose-code:bg-[var(--card-bg)] prose-code:px-1 prose-code:rounded
            prose-pre:bg-[var(--card-bg)] prose-pre:border prose-pre:border-white/10
            prose-li:marker:text-[#D4AF37]
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Call to Action Box */}
        <div className="mt-16 bg-[var(--card-bg)] border border-white/10 p-8 rounded-3xl text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
           
           <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 relative z-10">Ready to build?</h3>
           <p className="text-[var(--text-secondary)] mb-6 relative z-10">Start your next project with FounderKit's clean architecture today.</p>
           <Link href="/#kits" className="inline-block bg-[#D4AF37] text-[var(--background)] px-8 py-3 rounded-xl font-bold hover:bg-white transition-all shadow-lg hover:shadow-[#D4AF37]/20 relative z-10">
             Get the Kit
           </Link>
        </div>

      </article>

      {/* --- YOU MIGHT BE INTERESTED IN SECTION --- */}
      <section className="bg-[var(--card-bg)] py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-8">You might be interested in</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {relatedPosts.map((related, i) => (
              <Link href={`/blog/${related.slug}`} key={i} className="group">
                <div className="bg-[var(--card-bg)] p-6 rounded-2xl border border-white/5 hover:border-[#D4AF37]/30 shadow-lg hover:shadow-[#D4AF37]/5 hover:-translate-y-1 transition-all h-full flex flex-col">
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${related.color}`}>
                      {related.category}
                    </span>
                    <span className="text-xs text-gray-500">{related.readTime}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {related.title}
                  </h4>
                  
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4 flex-grow">
                    {related.excerpt}
                  </p>
                  
                  <div className="flex items-center text-[#D4AF37] text-sm font-bold gap-2">
                    Read Now <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}