"use client";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Zap, Shield } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  
  const scrollToKits = () => {
    const element = document.getElementById('kits');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      
      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-6 mx-auto relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-bold tracking-wide uppercase mb-8 backdrop-blur-md"
          >
            <Zap size={12} className="fill-[#D4AF37]" />
            Production Ready v2.0
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6"
          >
            Ship your Startup <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F59E0B]">
              This Weekend.
            </span>
          </motion.h1>
          
          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            The comprehensive <strong>.NET 8 Starter Kit</strong> for founders who care about performance. Authentication, Payments, and Clean Architecture — pre-configured.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={scrollToKits} 
              className="px-8 py-4 bg-[#D4AF37] text-[#020617] rounded-xl font-bold text-lg hover:bg-white transition-all hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.6)] flex items-center gap-2"
            >
              Get the Kit <ArrowRight className="w-5 h-5" />
            </button>
            
            <a href="/blog" className="px-8 py-4 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all flex items-center gap-2">
              <Terminal size={18} className="text-gray-500" />
              Documentation
            </a>
          </motion.div>
        </div>

        {/* --- HERO IMAGE (THE "COOL" PART) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* The Image Container with Glass Effect Border */}
          <div className="rounded-2xl border border-white/10 bg-[#0F172A]/50 backdrop-blur-xl p-2 shadow-2xl shadow-black/50">
             <div className="relative rounded-xl overflow-hidden aspect-video bg-[#020617] group">
                {/* 👉 REPLACE src="/AboutUsInCode.avif" WITH YOUR ACTUAL DASHBOARD/CODE SCREENSHOT 
                   Make sure the image is high quality!
                */}
                <Image 
                  src="/AboutUsInCode.avif" 
                  alt="FounderKit Dashboard Preview" 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
                
                {/* Overlay Gradient to blend bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                
                {/* Floating UI Elements (Optional "Techy" decorations) */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                   <div className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono text-green-400 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      System Operational
                   </div>
                   <div className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono text-blue-400 flex items-center gap-2">
                      <Shield size={12} />
                      Auth: Secure
                   </div>
                </div>
             </div>
          </div>

          {/* Glow behind the image */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-purple-600 rounded-2xl blur-2xl opacity-20 -z-10"></div>
        </motion.div>

      </div>
    </section>
  );
}