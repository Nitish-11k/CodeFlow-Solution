"use client";
import { useParams } from "next/navigation";
import { kitsData } from "@/lib/kitsData";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Shield, Zap, Rocket, FileText, Lock, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import WaitlistPopup from "@/components/WaitlistPopup";

export default function KitDetailPage() {
  // ✅ FIX 1: Generic hata diya (Next.js isse support nahi karta)
  const params = useParams();
  
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    if (params?.slug) {
      // ✅ FIX 2: Check kiya ki slug string hai ya array, taaki Type Error na aaye
      const finalSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
      setSlug(finalSlug);
    }
  }, [params]);

  const kit = kitsData.find((k) => k.slug === slug);
  const [showWaitlist, setShowWaitlist] = useState(false);

  // Show loading while slug is being determined
  if (!slug) {
     return <div className="min-h-screen bg-[#FDFCF8]" />; 
  }

  if (!kit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCF8]">
        <h1 className="text-2xl text-[#1B365D]">Kit Not Found</h1>
        <Link href="/" className="ml-4 text-blue-500 underline">Go Home</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFCF8]">
      <Navbar />
      
      {showWaitlist && (
        <div className="fixed inset-0 z-[9999]">
           <WaitlistPopup />
           <div className="hidden" onClick={() => setShowWaitlist(false)}></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* Back Link */}
        <Link href="/#kits" className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#1B365D] mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to All Kits
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* --- LEFT: DETAILS --- */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* 1. Main Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-[#F1F5F9] text-[#1B365D] text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-[#E2E8F0]">
                  {kit.tag}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-[#1B365D] mb-4">{kit.title}</h1>
                <p className="text-xl text-[#64748B] leading-relaxed">
                  {kit.longDescription}
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-sm">
                <h3 className="text-xl font-bold text-[#1B365D] mb-6 flex items-center gap-2">
                  <Zap className="text-[#D4AF37]" /> What's Included
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {kit.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-[#64748B]">{feat}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-[#64748B]">Clean Architecture</span>
                  </div>
                  <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-[#64748B]">Environment Config</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1B365D] p-8 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl -mr-10 -mt-10" />
                <h3 className="text-xl font-bold mb-4 relative z-10 flex items-center gap-2">
                  <Shield className="text-[#D4AF37]" /> Why choose this kit?
                </h3>
                <p className="text-blue-100 relative z-10 leading-relaxed">
                  We have spent hundreds of hours refining this architecture so you don't have to. 
                  It is battle-tested, secure by default, and ready to deploy to production from Day 1.
                </p>
              </div>
            </div>

            {/* 2. DOCUMENTATION SECTION (Locked State) */}
            <div className="border border-[#E2E8F0] bg-white rounded-3xl overflow-hidden relative">
               
               {/* Header */}
               <div className="bg-gray-50 border-b border-[#E2E8F0] p-6 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1B365D] flex items-center gap-2">
                    <FileText size={20} /> Setup Documentation
                  </h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
               </div>

               <div className="relative p-8 min-h-[300px]">
                  
                  {/* --- BLURRED BACKGROUND CONTENT --- */}
                  <div className="opacity-30 blur-[2px] select-none pointer-events-none space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-[#1B365D] mb-2">1. Prerequisites</h4>
                      <p className="text-gray-500 mb-2">Before you begin, ensure you have the following installed:</p>
                      <ul className="list-disc pl-5 text-gray-500 space-y-1">
                        <li>Node.js v18 or higher</li>
                        <li>Java JDK 17 (for Backend)</li>
                        <li>Docker Desktop</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#1B365D] mb-3">2. Installation</h4>
                      <div className="bg-[#0F172A] p-4 rounded-xl border border-gray-700">
                         <div className="flex items-center gap-2 text-gray-400 font-mono text-sm mb-2 border-b border-gray-700 pb-2">
                            <Terminal size={14} /> terminal
                         </div>
                         <code className="text-green-400 font-mono text-sm">
                           git clone https://github.com/codeflow/{kit.slug}.git<br/>
                           cd {kit.slug}<br/>
                           npm install
                         </code>
                      </div>
                    </div>
                  </div>

                  {/* --- LOCKED OVERLAY --- */}
                  <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
                     <div className="w-16 h-16 bg-white border-2 border-[#E2E8F0] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <Lock size={32} className="text-[#D4AF37]" />
                     </div>
                     <h3 className="text-2xl font-black text-[#1B365D] mb-2">Documentation Locked</h3>
                     <p className="text-[#64748B] max-w-md">
                       Detailed setup guides, API references, and deployment instructions will be available here automatically once the kit is available.
                     </p>
                     <div className="mt-6 px-4 py-2 bg-[#1B365D]/5 text-[#1B365D] text-sm font-bold rounded-lg border border-[#1B365D]/10">
                        Coming Soon
                     </div>
                  </div>

               </div>
            </div>

          </div>

          {/* --- RIGHT: PRICING CARD (Sticky) --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-8 rounded-3xl border border-[#D4AF37]/30 shadow-2xl shadow-[#1B365D]/10">
              
              <div className="text-center mb-6">
                <p className="text-[#64748B] text-sm font-medium mb-1">One-time Payment</p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-5xl font-black text-[#1B365D]">{kit.price}</span>
                </div>
                {kit.price !== "Custom Quote" && (
                   <p className="text-green-600 text-sm font-bold mt-2 bg-green-50 inline-block px-2 py-1 rounded">
                     Save 120+ Dev Hours
                   </p>
                )}
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => setShowWaitlist(true)}
                  className="w-full py-4 bg-[#1B365D] text-white font-bold rounded-xl hover:bg-[#2C4A7C] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <span>Join Waitlist to Buy</span>
                  <Rocket size={18} className="text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <p className="text-center text-xs text-[#94A3B8] leading-snug">
                  * By joining the waitlist, you get early access and a special discount when we launch.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm text-[#64748B] mb-2">
                  <span>Updates</span>
                  <span className="font-bold text-[#1B365D]">Lifetime</span>
                </div>
                <div className="flex items-center justify-between text-sm text-[#64748B]">
                  <span>Support</span>
                  <span className="font-bold text-[#1B365D]">Email & Docs</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}