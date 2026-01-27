import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blogData"; // ✅ Real Data Import

export default function BlogPreview() {
  // Sirf pehle 3 latest blogs dikhao
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex items-center justify-between mb-12">
           <div>
             <span className="text-[#D4AF37] font-bold tracking-wider uppercase text-sm">Our Blog</span>
             <h2 className="text-3xl md:text-4xl font-black text-[#1B365D] mt-2">Latest Insights</h2>
           </div>
           
           <Link href="/blog" className="hidden md:flex items-center gap-2 text-[#1B365D] font-bold hover:gap-3 transition-all">
             View all posts <ArrowRight size={18} />
           </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={i} className="group cursor-pointer">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                
                {/* Meta Tags (Category & Read Time) */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${post.color}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={12} /> {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#1B365D] mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer (Date & Read More) */}
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between text-sm">
                   <div className="flex items-center gap-2 text-gray-400 text-xs">
                     <Calendar size={14} /> {post.date}
                   </div>
                   <div className="flex items-center gap-1 text-[#1B365D] font-bold group-hover:gap-2 transition-all">
                     Read Article <ArrowRight size={16} />
                   </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
        
        {/* Mobile View Button */}
        <div className="mt-10 text-center md:hidden">
           <Link href="/blog" className="text-[#D4AF37] font-bold inline-flex items-center gap-2 border border-[#D4AF37] px-6 py-3 rounded-xl hover:bg-[#D4AF37] hover:text-white transition-colors">
             View all posts <ArrowRight size={18} />
           </Link>
        </div>

      </div>
    </section>
  );
}