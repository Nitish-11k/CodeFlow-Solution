import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

export default function BlogList() {
  return (
    <main className="bg-[#FDFCF8] min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-[#1B365D] mb-6">
          The <span className="text-[#D4AF37]">Founder's</span> Log
        </h1>
        <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
          Insights on Architecture, SaaS Growth, and .NET Development.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <Link href={`/blog/${post.slug}`} key={i} className="group">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${post.color}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock size={12} /> {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-[#1B365D] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {post.title}
                </h2>
                
                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-sm">
                   <div className="flex items-center gap-2 text-gray-500">
                     <Calendar size={14} /> {post.date}
                   </div>
                   <span className="flex items-center gap-1 text-[#1B365D] font-bold group-hover:gap-2 transition-all">
                     Read <ArrowRight size={16} />
                   </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}