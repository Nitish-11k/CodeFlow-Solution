"use client";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar"; // Assuming you want the navbar here too

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFCF8]">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center min-h-screen px-6 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#1B365D]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl">
          {/* Icon */}
          <div className="w-20 h-20 bg-[#1B365D] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-[#1B365D]/20">
            <Construction className="w-10 h-10 text-[#D4AF37]" />
          </div>

          {/* Text */}
          <h1 className="text-4xl md:text-6xl font-black text-[#1B365D] mb-6 tracking-tight">
            Work in <span className="text-[#D4AF37]">Progress.</span>
          </h1>
          
          <p className="text-[#64748B] text-lg md:text-xl mb-10 leading-relaxed">
            Our <strong>About Us</strong> page and <strong>Founder Kits</strong> are currently under construction. 
            We are crafting something specific for startup founders to help them scale faster.
          </p>

          {/* Back Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1B365D] text-white rounded-full font-bold hover:bg-[#2C4A7C] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}