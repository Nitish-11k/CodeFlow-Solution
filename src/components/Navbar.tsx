"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronRight } from "lucide-react";
// ✅ FIX 1: 'Variants' type ko import kiya
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Lock body scroll when menu is open to prevent background scrolling
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    if (window.location.pathname !== '/') {
        window.location.href = '/#' + id;
    } else {
        const element = document.getElementById(id);
        if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: "smooth" });
            }, 300);
        }
    }
  };

  // ✅ FIX 2: Explicitly Type define kiya 'Variants'
  // Ab TypeScript samjhega ki "easeOut" ek valid easing property hai
  const menuVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[60] border-b transition-all duration-300
        ${isMobileOpen 
          ? "bg-[#FDFCF8] border-transparent" 
          : "bg-[#FDFCF8]/80 border-[#E2E8F0]/50 backdrop-blur-xl" 
        }`}
      >
        <div className="w-full px-6 lg:px-10 h-20 flex items-center justify-between">
          
          {/* --- Logo Section (Extreme Left) --- */}
          <Link href="/" className="flex items-center cursor-pointer relative z-[70]">
            <div className="relative w-40 lg:w-56 h-12 lg:h-16 flex-shrink-0"> 
              <Image 
                src="/Codeflow.png" 
                alt="CodeFlow Solution" 
                fill 
                className="object-contain object-left" 
                priority
              />
            </div>
          </Link>
          
          {/* --- Desktop Navigation --- */}
          <div className="hidden lg:flex gap-8 text-sm font-semibold text-[#64748B]">
            <Link href="/about" className="hover:text-[#1B365D] hover:bg-[#F1F5F9] px-3 py-2 rounded-lg transition-colors">
              About Us
            </Link>
            <button onClick={() => scrollTo('mission')} className="hover:text-[#1B365D] hover:bg-[#F1F5F9] px-3 py-2 rounded-lg transition-colors">Our Aim</button>
            <button onClick={() => scrollTo('kits')} className="hover:text-[#1B365D] hover:bg-[#F1F5F9] px-3 py-2 rounded-lg transition-colors">Founder Kits</button>
            <button onClick={() => scrollTo('stack')} className="hover:text-[#1B365D] hover:bg-[#F1F5F9] px-3 py-2 rounded-lg transition-colors">Tech Stack</button>
          </div>

          {/* --- Desktop Support Button --- */}
          <div className="hidden lg:block">
            <button onClick={() => scrollTo('contact')} className="bg-[#1B365D] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#2C4A7C] hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Get Support
            </button>
          </div>

          {/* --- Mobile Hamburger Toggle --- */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-[#1B365D] hover:bg-[#F1F5F9] rounded-full transition-colors relative z-[70]"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[50] bg-[#FDFCF8] pt-24 px-6 lg:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col space-y-2">
              {[
                { label: "About Us", action: () => { setIsMobileOpen(false); window.location.href='/about'; } },
                { label: "Our Aim", action: () => scrollTo('mission') },
                { label: "Founder Kits", action: () => scrollTo('kits') },
                { label: "Tech Stack", action: () => scrollTo('stack') }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  custom={index}
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                >
                  <button 
                    onClick={item.action}
                    className="group w-full flex items-center justify-between p-4 text-lg font-medium text-[#1E293B] border-b border-gray-100 hover:bg-gray-50 active:bg-gray-100 rounded-xl transition-all duration-300"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                    <ChevronRight 
                      size={20} 
                      className="text-gray-300 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Mobile Support Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <button 
                onClick={() => scrollTo('contact')} 
                className="w-full bg-[#1B365D] text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
              >
                Get Support
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}