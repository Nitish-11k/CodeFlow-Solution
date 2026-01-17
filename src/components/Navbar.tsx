"use client";
import Image from "next/image";
import Link from "next/link"; // Import Link for page navigation

export default function Navbar() {
  const scrollTo = (id: string) => {
    // Check if we are on the homepage before scrolling
    if (window.location.pathname !== '/') {
        window.location.href = '/#' + id;
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#E2E8F0] bg-[#FDFCF8]/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center cursor-pointer">
          <div className="relative w-64 h-16 -ml-4">
            <Image 
              src="/Codeflow.png" 
              alt="CodeFlow Solution" 
              fill 
              className="object-contain" 
              priority
            />
          </div>
        </Link>
        
        {/* Navigation */}
        <div className="hidden lg:flex gap-8 text-sm font-semibold text-[#64748B]">
          {/* New About Us Page Link */}
          <Link href="/about" className="hover:text-[#1B365D] transition-colors">
            About Us
          </Link>

          {/* Existing Scroll Links */}
          <button onClick={() => scrollTo('mission')} className="hover:text-[#1B365D] transition-colors">Our Aim</button>
          <button onClick={() => scrollTo('kits')} className="hover:text-[#1B365D] transition-colors">Founder Kits</button>
          <button onClick={() => scrollTo('stack')} className="hover:text-[#1B365D] transition-colors">Tech Stack</button>
        </div>

        <button onClick={() => scrollTo('contact')} className="bg-[#1B365D] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2C4A7C] shadow-lg transition-all">
          Get Support
        </button>
      </div>
    </nav>
  );
}