"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ChevronRight, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light";
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileOpen]);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    } else {
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
          ? "bg-[var(--background)] border-transparent" 
          : "bg-[var(--background)]/80 border-[var(--border-color)] backdrop-blur-xl" 
        }`}
      >
        <div className="w-full px-6 lg:px-10 h-20 flex items-center justify-between">
          
          <Link href="/" className="flex items-center cursor-pointer relative z-[70]">
            <div className="relative w-40 lg:w-56 h-12 lg:h-16 flex-shrink-0"> 
              <Image 
                src="/Codeflow.png" 
                alt="CodeFlow Solution" 
                fill 
                className="object-contain object-left transition-all"
                style={{ 
                  filter: 'var(--logo-filter)'
                }}
                priority
              />
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[var(--text-primary)]">
            <Link href="/about" className="hover:text-[var(--gold-primary)] hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
              About Us
            </Link>
            <button onClick={() => scrollTo('mission')} className="hover:text-[var(--gold-primary)] hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
              Our Aim
            </button>
            <button onClick={() => scrollTo('stack')} className="hover:text-[var(--gold-primary)] hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
              Tech Stack
            </button>

            <div className="relative group">
                <button className="flex items-center gap-1 hover:text-[var(--gold-primary)] hover:bg-white/5 px-3 py-2 rounded-lg transition-colors text-[var(--text-primary)]">
                    Resources <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300"/>
                </button>
                <div className="absolute top-full right-0 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl shadow-xl py-2 flex flex-col overflow-hidden">
                        <Link href="/blog" className="px-5 py-3 hover:bg-white/5 hover:text-[var(--gold-primary)] text-[var(--text-primary)] text-left transition-colors">
                            <span className="block font-bold">Blog</span>
                            <span className="block text-xs text-gray-500 font-normal mt-0.5">Latest Insights</span>
                        </Link>
                        <Link href="/admin" className="px-5 py-3 hover:bg-white/5 hover:text-[var(--gold-primary)] text-[var(--text-primary)] text-left transition-colors">
                            <span className="block font-bold">Admin Console</span>
                            <span className="block text-xs text-gray-500 font-normal mt-0.5">Telemetry & Logs</span>
                        </Link>
                        <button onClick={() => scrollTo('kits')} className="px-5 py-3 hover:bg-white/5 hover:text-[var(--gold-primary)] text-[var(--text-primary)] text-left transition-colors w-full">
                            <span className="block font-bold">Services</span>
                            <span className="block text-xs text-gray-500 font-normal mt-0.5">Add-on Modules</span>
                        </button>
                    </div>
                </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/5 border border-[var(--border-color)] hover:bg-white/10 transition-all text-[var(--text-secondary)] hover:text-[var(--gold-primary)]"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => scrollTo('contact')} className="hidden lg:block bg-[var(--gold-primary)] text-[var(--text-primary)] px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all">
              Get Support
            </button>
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-[var(--text-primary)] hover:bg-white/10 rounded-full transition-colors relative z-[70]"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[50] bg-[var(--background)] pt-24 px-6 lg:hidden flex flex-col h-screen"
          >
            <div className="flex flex-col space-y-2">
              {[
                { label: "About Us", action: () => { setIsMobileOpen(false); window.location.href='/about'; } },
                { label: "Our Aim", action: () => scrollTo('mission') },
                { label: "Services", action: () => scrollTo('kits') },
                { label: "Tech Stack", action: () => scrollTo('stack') },
                { label: "Admin Console", action: () => { setIsMobileOpen(false); window.location.href='/admin'; } },
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
                    className="group w-full flex items-center justify-between p-4 text-lg font-medium text-[var(--text-primary)] border-b border-[var(--border-color)] hover:bg-white/5 rounded-xl transition-all duration-300"
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                    <ChevronRight size={20} className="text-gray-500 group-hover:text-[var(--gold-primary)] group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 space-y-4"
            >
              <button 
                onClick={toggleTheme}
                className="w-full flex items-center justify-between p-4 rounded-xl border border-[var(--border-color)] bg-white/5 text-[var(--text-primary)] font-bold transition-all"
              >
                 <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
                 {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button 
                onClick={() => scrollTo('contact')} 
                className="w-full bg-[var(--gold-primary)] text-[var(--text-primary)] py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
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