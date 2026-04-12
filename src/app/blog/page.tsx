"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

const ITEMS_PER_PAGE = 6;
const CATEGORIES = ["All", "Vision", "Engineering", "Guide"];

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. Filter Logic
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // 2. Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1); // Reset to page 1
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    // ✅ Global Dark Theme
    <main className="bg-[var(--background)] min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header with Darker Gradient */}
      <section className="pt-32 pb-12 px-6 text-center bg-[var(--background)] text-[var(--text-primary)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[80px] -mr-10 -mt-10" />
        <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-[var(--text-primary)] tracking-tight">
            The <span className="text-[#D4AF37]">CodeFlow</span> Log
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Engineering deep dives, company vision, and guides for founders building the next unicorn.
            </p>
        </div>
      </section>

      {/* Filter Bar (Dark Frosted Glass) */}
      <div className="sticky top-20 z-40 bg-[var(--background)]/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all border
                    ${activeCategory === cat 
                        ? "bg-[#D4AF37] text-[var(--background)] border-[#D4AF37]" 
                        : "bg-white/5 text-[var(--text-secondary)] border-white/10 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex-grow">
        
        {visiblePosts.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
                <p>No articles found in this category.</p>
            </div>
        ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post, i) => (
                <Link href={`/blog/${post.slug}`} key={i} className="group">
                <div className="bg-[var(--card-bg)] p-6 rounded-3xl border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#D4AF37]/5">
                    
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${post.color}`}>
                        {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={12} /> {post.readTime}
                    </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                    {post.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Calendar size={14} /> {post.date}
                        </div>
                        <span className="flex items-center gap-1 text-[#D4AF37] font-bold text-xs group-hover:gap-2 transition-all">
                        Read <ArrowRight size={14} />
                        </span>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-16">
                <button 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-3 rounded-full border border-white/10 text-[var(--text-secondary)] hover:bg-[#D4AF37] hover:text-[var(--background)] hover:border-[#D4AF37] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--text-secondary)] transition-all"
                >
                    <ChevronLeft size={20} />
                </button>
                
                <span className="text-sm font-bold text-[#D4AF37]">
                    Page {currentPage} of {totalPages}
                </span>

                <button 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-3 rounded-full border border-white/10 text-[var(--text-secondary)] hover:bg-[#D4AF37] hover:text-[var(--background)] hover:border-[#D4AF37] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--text-secondary)] transition-all"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        )}

      </section>

      <Footer />
    </main>
  );
}