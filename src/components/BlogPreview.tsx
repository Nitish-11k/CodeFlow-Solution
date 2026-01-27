"use client";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-[#020617] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
           <div>
             <span className="text-[#D4AF37] font-bold tracking-wider uppercase text-sm">Our Blog</span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Latest Insights</h2>
           </div>
           
           <Link href="/blog" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-all font-medium text-sm group">
             View all posts <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
           </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={i} className="group cursor-pointer">
              <div className="bg-[#0F172A] p-6 rounded-3xl border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D4AF37]/5">
                
                {/* Meta Tags */}
                <div className="flex items-center justify-between mb-4">
                  {/* Using a generic dark badge style instead of the light colored ones in data for consistency, 
                      OR keeping the color but making it translucent */}
                  <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white/5 text-gray-300 border border-white/10`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={12} /> {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between text-sm">
                   <div className="flex items-center gap-2 text-gray-500 text-xs">
                     <Calendar size={14} /> {post.date}
                   </div>
                   <div className="flex items-center gap-1 text-[#D4AF37] font-bold text-xs group-hover:gap-2 transition-all">
                     Read Article <ArrowRight size={14} />
                   </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
        
        {/* Mobile View Button */}
        <div className="mt-12 text-center md:hidden">
           <Link href="/blog" className="text-white font-bold inline-flex items-center gap-2 border border-white/10 px-6 py-3 rounded-xl hover:bg-[#D4AF37] hover:text-[#020617] hover:border-[#D4AF37] transition-colors">
             View all posts <ArrowRight size={18} />
           </Link>
        </div>

      </div>
    </section>
  );
}