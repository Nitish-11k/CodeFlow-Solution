"use client";
import { useState } from "react";
import Image from "next/image";
import { Linkedin, ArrowRight, XCircle, CheckCircle, Clock, Zap, DollarSign, TrendingUp, MousePointerClick } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  
  const [flippedId, setFlippedId] = useState<number | null>(null);

  const handleFlip = (id: number) => {
    setFlippedId(flippedId === id ? null : id);
  };

  const problems = [
    {
      id: 1,
      iconFront: <Clock className="w-8 h-8 text-red-500" />,
      titleFront: "Slow Development",
      textFront: "Building a robust backend from scratch takes months of testing.",
      
      iconBack: <Zap className="w-8 h-8 text-[var(--background)]" />, 
      titleBack: "Rapid Launch",
      textBack: "Launch in days, not months, with our pre-configured kits."
    },
    {
      id: 2,
      iconFront: <XCircle className="w-8 h-8 text-red-500" />,
      titleFront: "Complex Integration",
      textFront: "Struggling to connect Stripe, Auth, and Databases securely.",
      
      iconBack: <CheckCircle className="w-8 h-8 text-[var(--background)]" />,
      titleBack: "Seamless Setup",
      textBack: "Plug-and-play modules that just work out of the box."
    },
    {
      id: 3,
      iconFront: <DollarSign className="w-8 h-8 text-red-500" />,
      titleFront: "High Costs",
      textFront: "Hiring senior architects to design scalable systems is expensive.",
      
      iconBack: <TrendingUp className="w-8 h-8 text-[var(--background)]" />,
      titleBack: "Smart Investment",
      textBack: "Enterprise-grade architecture for a fraction of the cost."
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* =========================================
            SECTION 1: INTRO & IMAGE
           ========================================= */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* LEFT: Image */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-[#D4AF37]/10 border border-white/10 group">
            <Image
              src="/About.jpg" 
              alt="Founder coding"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-[var(--background)]/20 mix-blend-multiply" />
          </div>

          {/* RIGHT: Intro Text */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mt-2 mb-6">
                About CodeFlow
              </h1>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-200">
                We build the engine, <br/>
                <span className="text-[#D4AF37]">you drive the car.</span>
            </h2>

            <div className="space-y-4 text-[var(--text-secondary)] text-lg leading-relaxed">
              <p>
                <strong>CodeFlow Solution</strong> exists for one reason: to empower startup founders who have the vision but need the technical foundation to bring it to life.
              </p>
              <p>
                We provide ready-made <strong>Backend Kits</strong> for founders who have a great idea but don't know how to implement the complex architecture behind it. We understand the struggle of starting from zero.
              </p>
              <p>
                Currently, CodeFlow is focusing entirely on providing you with a kit that <strong>seamlessly integrates</strong> into your workflow.
              </p>
            </div>
          </div>
        </div>


        {/* =========================================
            SECTION 2: PROBLEM & SOLUTION (Flip Cards)
           ========================================= */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">
              What We Are Solving
            </h3>
            <p className="text-[var(--text-secondary)] mt-2">
              The biggest hurdles founders face, removed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((item) => (
              <div 
                key={item.id} 
                className="group h-72 w-full perspective-1000 cursor-pointer"
                onMouseEnter={() => setFlippedId(item.id)} // Desktop Hover
                onMouseLeave={() => setFlippedId(null)}    // Desktop Hover Leave
                onClick={() => handleFlip(item.id)}        // Mobile Tap Toggle
              >
                {/* ✅ FIX: Explicit inline styles for Transform 
                    Use 'transformStyle: preserve-3d' to enable 3D space
                */}
                <div 
                    className="relative h-full w-full transition-all duration-500 shadow-xl rounded-2xl"
                    style={{
                        transformStyle: 'preserve-3d',
                        transform: flippedId === item.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                >
                  
                  {/* --- FRONT (Problem) --- */}
                  {/* ✅ FIX: backfaceVisibility: 'hidden' ensures this disappears when flipped */}
                  <div 
                    className="absolute inset-0 h-full w-full bg-[var(--card-bg)] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-full shrink-0">
                      {item.iconFront}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] text-xl mb-2">{item.titleFront}</h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.textFront}</p>
                    </div>
                    <div className="mt-auto text-xs font-bold text-red-400 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full">
                        Problem
                    </div>
                  </div>

                  {/* --- BACK (Solution) --- */}
                  {/* ✅ FIX: rotateY(180deg) puts it "behind" the front card initially */}
                  <div 
                    className="absolute inset-0 h-full w-full bg-[#D4AF37] rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                    style={{ 
                        backfaceVisibility: 'hidden', 
                        transform: 'rotateY(180deg)' 
                    }}
                  >
                    <div className="p-4 bg-[var(--background)]/10 rounded-full shrink-0">
                      {item.iconBack}
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--background)] text-xl mb-2">{item.titleBack}</h4>
                      <p className="text-sm text-[var(--background)]/80 leading-relaxed font-medium">{item.textBack}</p>
                    </div>
                    <div className="mt-auto text-xs font-bold text-[var(--background)] uppercase tracking-widest bg-[var(--background)]/10 px-3 py-1 rounded-full">
                        Solved
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-xs text-[#D4AF37] mt-8 animate-pulse flex items-center justify-center gap-2">
            <MousePointerClick size={14} /> ( Tap cards to flip )
          </p>
        </div>


        {/* =========================================
            SECTION 3: LINKEDIN COMMUNITY
           ========================================= */}
        <div className="pt-16 border-t border-white/10">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Join our Community
            </h3>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg text-lg">
              Connect with other founders, get exclusive discounts on kits, and stay updated with our latest dev tools.
            </p>
            
            <a 
              href="https://www.linkedin.com/company/codeflow-solution/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077B5] text-[var(--text-primary)] rounded-full font-bold hover:bg-[#005E93] transition-all shadow-lg hover:shadow-[#0077B5]/40 hover:-translate-y-1 group"
            >
              <Linkedin size={24} />
              <span>Follow us on LinkedIn</span>
              <ArrowRight size={18} className="opacity-80 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
      <Footer/>
    </main>
  );
}