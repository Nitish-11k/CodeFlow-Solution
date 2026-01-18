"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Soft Royal Background Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1B365D]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px]" />

      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F1F5F9] text-[#1B365D] text-sm font-semibold mb-8 border border-[#E2E8F0]">
            <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
            <span>Premium Solutions for Founders</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-[#1B365D]">
            Stop Coding from Scratch.<br />
            <span className="text-[#D4AF37]">Launch Your MVP.</span>
          </h1>
          
          <p className="text-xl text-[#64748B] mb-10 max-w-2xl mx-auto leading-relaxed">
            Premium Microservices & Hosting designed to save you months of development time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            <button onClick={() => document.getElementById('kits')?.scrollIntoView({behavior:'smooth'})} className="flex items-center justify-center gap-2 bg-[#1B365D] hover:bg-[#2C4A7C] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#1B365D]/20 hover:-translate-y-1">
              View Solutions <ArrowRight className="w-5 h-5" />
            </button>

            {/* LinkedIn Logo Link */}
            <a 
              href="https://www.linkedin.com/company/codeflow-solution/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white border border-[#E2E8F0] text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
              aria-label="Visit our LinkedIn"
            >
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}