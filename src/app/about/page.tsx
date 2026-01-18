"use client";
import Image from "next/image";
import { Linkedin, ArrowRight, XCircle, CheckCircle, Clock, Zap, DollarSign, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  
  const problems = [
    {
      id: 1,
      iconFront: <Clock className="w-8 h-8 text-red-500" />,
      titleFront: "Slow Development",
      textFront: "Building a robust backend from scratch takes months of testing.",
      
      iconBack: <Zap className="w-8 h-8 text-[#D4AF37]" />,
      titleBack: "Rapid Launch",
      textBack: "Launch in days, not months, with our pre-configured kits."
    },
    {
      id: 2,
      iconFront: <XCircle className="w-8 h-8 text-red-500" />,
      titleFront: "Complex Integration",
      textFront: "Struggling to connect Stripe, Auth, and Databases securely.",
      
      iconBack: <CheckCircle className="w-8 h-8 text-[#D4AF37]" />,
      titleBack: "Seamless Setup",
      textBack: "Plug-and-play modules that just work out of the box."
    },
    {
      id: 3,
      iconFront: <DollarSign className="w-8 h-8 text-red-500" />,
      titleFront: "High Costs",
      textFront: "Hiring senior architects to design scalable systems is expensive.",
      
      iconBack: <TrendingUp className="w-8 h-8 text-[#D4AF37]" />,
      titleBack: "Smart Investment",
      textBack: "Enterprise-grade architecture for a fraction of the cost."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFCF8]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* =========================================
            SECTION 1: INTRO & IMAGE (Side by Side)
           ========================================= */}
        {/* UPDATED: Reduced gap from 20 to 12/8 for closer look */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-24">
          
          {/* LEFT: Image */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-[#1B365D]/10 border border-[#E2E8F0]">
            <Image
              src="/AboutUsInCode.avif" 
              alt="Founder coding"
              fill
              className="object-cover"
              priority
              unoptimized
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-[#1B365D]/10 mix-blend-multiply" />
          </div>

          {/* RIGHT: Intro Text */}
          <div className="space-y-6">
            <div>
              {/* REMOVED "Who We Are" text here */}
              <h1 className="text-4xl md:text-5xl font-black text-[#1B365D] mt-2 mb-6">
                About CodeFlow
              </h1>
            </div>
            
            <h2 className="text-2xl font-bold text-[#1B365D]">
                We build the engine, <br/>
                <span className="text-[#D4AF37]">you drive the car.</span>
            </h2>

            <div className="space-y-4 text-[#64748B] text-lg leading-relaxed">
              <p>
                <strong>CodeFlow Solution</strong> exists for one reason: to empower startup founders who have the vision but need the technical foundation to bring it to life.
              </p>
              <p>
                We provide ready-made <strong>Backend Kits</strong> for founders who have a great idea but don't know how to implement the complex architecture behind it. We understand the struggle of starting from zero.
              </p>
              <p>
                Currently, CodeFlow is focusing entirely on providing you with a kit that <strong>seamlessly integrates</strong> into your workflow. We pour our full effort into making our kits as easy to understand as possible.
              </p>
            </div>
          </div>
        </div>


        {/* =========================================
            SECTION 2: PROBLEM & SOLUTION (Flip Cards)
           ========================================= */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-[#1B365D]">
              What We Are Solving
            </h3>
            <p className="text-[#64748B] mt-2">
              The biggest hurdles founders face, removed.
            </p>
          </div>
          
          {/* UPDATED: grid-cols-3 creates a ROW on desktop. h-48 gives enough height. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((item) => (
              <div key={item.id} className="group h-64 w-full perspective-1000 cursor-pointer">
                <div className="relative h-full w-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180 shadow-md hover:shadow-xl rounded-2xl">
                  
                  {/* FRONT (Problem) */}
                  <div className="absolute inset-0 h-full w-full backface-hidden bg-white border border-red-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4">
                    <div className="p-4 bg-red-50 rounded-full shrink-0">
                      {item.iconFront}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1B365D] text-xl mb-2">{item.titleFront}</h4>
                      <p className="text-sm text-gray-500 leading-snug">{item.textFront}</p>
                    </div>
                    <div className="mt-auto text-xs font-bold text-red-300 uppercase tracking-widest">Problem</div>
                  </div>

                  {/* BACK (Solution) */}
                  <div className="absolute inset-0 h-full w-full backface-hidden rotate-y-180 bg-[#1B365D] rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4">
                    <div className="p-4 bg-[#D4AF37]/20 rounded-full shrink-0">
                      {item.iconBack}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#D4AF37] text-xl mb-2">{item.titleBack}</h4>
                      <p className="text-sm text-gray-200 leading-snug">{item.textBack}</p>
                    </div>
                    <div className="mt-auto text-xs font-bold text-[#D4AF37]/50 uppercase tracking-widest">Solved</div>
                  </div>

                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6 animate-pulse">
            ( Hover or tap cards to flip )
          </p>
        </div>


        {/* =========================================
            SECTION 3: LINKEDIN COMMUNITY
           ========================================= */}
        <div className="pt-10 border-t border-gray-100">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-[#1B365D] mb-4">
              Join our Community
            </h3>
            <p className="text-[#64748B] mb-8 max-w-lg text-lg">
              Connect with other founders, get exclusive discounts on kits, and stay updated with our latest dev tools.
            </p>
            
            <a 
              href="https://www.linkedin.com/company/codeflow-solution/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077B5] text-white rounded-full font-bold hover:bg-[#005E93] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              <Linkedin size={24} />
              <span>Follow us on LinkedIn</span>
              <ArrowRight size={18} className="opacity-80 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}