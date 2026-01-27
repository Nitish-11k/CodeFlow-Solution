"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ Import Router
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter(); // ✅ Init Router

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  // ✅ UPDATED SCROLL FUNCTION (No Hashtag)
  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    
    // 1. Agar Home page par hain -> Seedha Scroll
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    } 
    // 2. Agar kisi aur page par hain -> Navigate with Query Param
    else {
        router.push(`/?section=${id}`);
    }
  };

  const menuVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[60] border-b transition-all duration-300
        ${isMobileOpen 
          ? "bg-[#020617] border-transparent" 
          : "bg-[#020617]/80 border-white/10 backdrop-blur-xl" 
        }`}
      >
        <div className="w-full px-6 lg:px-10 h-20 flex items-center justify-between">
          
          {/* Logo */}
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
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-300">
            <Link href="/about" className="hover:text-[#D4AF37] hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
              About Us
            </Link>
            
            <button onClick={() => scrollTo('mission')} className="hover:text-[#D4AF37] hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
              Our Aim
            </button>

            {/* Services -> Kits Section */}
            {/* <button onClick={() => scrollTo('kits')} className="hover:text-[#D4AF37] hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
              Services
            </button> */}

            <button onClick={() => scrollTo('stack')} className="hover:text-[#D4AF37] hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
              Tech Stack
            </button>

            {/* Resources Dropdown (No Icons) */}
            <div className="relative group">
                <button className="flex items-center gap-1 hover:text-[#D4AF37] hover:bg-white/5 px-3 py-2 rounded-lg transition-colors text-gray-300">
                    Resources <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/>
                </button>
                
                {/* Dropdown */}
                <div className="absolute top-full right-0 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-[#0F172A] border border-white/10 rounded-xl shadow-xl py-2 flex flex-col overflow-hidden">
                        
                        <Link href="/blog" className="px-5 py-3 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 text-left transition-colors">
                            <span className="block font-bold">Blog</span>
                            <span className="block text-xs text-gray-500 font-normal mt-0.5">Latest Insights</span>
                        </Link>

                        {/* Services Link inside Dropdown (Scrolls to Kits) */}
                        <button onClick={() => scrollTo('kits')} className="px-5 py-3 hover:bg-white/5 hover:text-[#D4AF37] text-gray-300 text-left transition-colors w-full">
                            <span className="block font-bold">Services</span>
                            <span className="block text-xs text-gray-500 font-normal mt-0.5">Add-on Modules</span>
                        </button>

                    </div>
                </div>
            </div>
          </div>

          {/* Support Button */}
          <div className="hidden lg:block">
            <button onClick={() => scrollTo('contact')} className="bg-[#D4AF37] text-[#020617] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Get Support
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors relative z-[70]"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[50] bg-[#020617] pt-24 px-6 lg:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col space-y-2">
              {[
                { label: "About Us", action: () => { setIsMobileOpen(false); window.location.href='/about'; } },
                { label: "Our Aim", action: () => scrollTo('mission') },
                { label: "Services", action: () => scrollTo('kits') },
                { label: "Tech Stack", action: () => scrollTo('stack') },
                { label: "Blog", action: () => { setIsMobileOpen(false); window.location.href='/blog'; } },
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
                    className="group w-full flex items-center justify-between p-4 text-lg font-medium text-gray-300 border-b border-white/10 hover:bg-white/5 rounded-xl transition-all duration-300"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                    <ChevronRight 
                      size={20} 
                      className="text-gray-500 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <button 
                onClick={() => scrollTo('contact')} 
                className="w-full bg-[#D4AF37] text-[#020617] py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
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