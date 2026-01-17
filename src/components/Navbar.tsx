"use client";
import Image from "next/image";

export default function Navbar() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#E2E8F0] bg-[#FDFCF8]/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollTo('hero')}>
          {/* CHANGES MADE:
             1. w-64 (increased from w-48) -> Image width bada kiya
             2. h-16 (increased from h-12) -> Image height badi ki
             3. -ml-4 -> Negative margin se image ko thoda left shift kiya
          */}
          <div className="relative w-64 h-16 -ml-4">
            <Image 
              src="/Codeflow.png" 
              alt="CodeFlow Solution" 
              fill 
              className="object-contain" 
              priority
            />
          </div>
        </div>
        
        {/* Navigation */}
        <div className="hidden lg:flex gap-8 text-sm font-semibold text-[#64748B]">
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