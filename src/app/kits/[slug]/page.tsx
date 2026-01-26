"use client";
import { useParams } from "next/navigation";
import { kitsData } from "@/lib/kitsData";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Shield, Zap, ArrowRight, FileText, Terminal, Copy } from "lucide-react";
import { useState, useEffect } from "react";
import WaitlistPopup from "@/components/WaitlistPopup";

export default function KitDetailPage() {
  const params = useParams();
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    if (params?.slug) {
      const finalSlug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
      setSlug(finalSlug);
    }
  }, [params]);

  const kit = kitsData.find((k) => k.slug === slug);

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

  // ✅ UPDATED: WhatsApp Message with your Number (8178748796)
  const whatsappMessage = `Hi CodeFlow, I am interested in buying the ${kit.title} (${kit.price}). Is it available?`;
  const whatsappLink = `https://wa.me/918178748796?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="min-h-screen bg-[#FDFCF8]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* Back Link */}
        <Link href="/#kits" className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#1B365D] mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to All Kits
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* =======================
              LEFT COLUMN: DETAILS 
             ======================= */}
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

            {/* =========================================================
                2. DOCUMENTATION SECTION (MAGIC INSTALLER)
               ========================================================= */}
            <div className="border border-[#E2E8F0] bg-white rounded-3xl overflow-hidden relative" id="docs">
              
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

              {/* Content */}
              <div className="p-8 text-[#1E293B] space-y-10">

                {/* Step 1: Prerequisites */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#1B365D] flex items-center gap-2">
                    <span className="bg-[#1B365D] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                    Prerequisites
                  </h4>
                  <p className="text-[#64748B]">Before you begin, ensure you have the following installed on your machine:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://dotnet.microsoft.com/download/dotnet/8.0" target="_blank" className="p-4 rounded-xl border border-[#E2E8F0] hover:border-[#D4AF37] hover:bg-blue-50/50 transition-all flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold">.NET</div>
                        <div>
                          <p className="font-bold text-[#1B365D]">.NET 8 SDK</p>
                          <p className="text-xs text-gray-500 group-hover:text-[#D4AF37]">Download Required</p>
                        </div>
                    </a>
                    <div className="p-4 rounded-xl border border-[#E2E8F0] flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 font-bold">SQL</div>
                        <div>
                          <p className="font-bold text-[#1B365D]">SQL Server</p>
                          <p className="text-xs text-gray-500">LocalDB or Docker</p>
                        </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Installation (MAGIC COMMAND) */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#1B365D] flex items-center gap-2">
                    <span className="bg-[#1B365D] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                    Installation
                  </h4>
                  <p className="text-[#64748B]">Run this single command in your terminal (PowerShell). It will download, extract, and configure the kit automatically.</p>

                  <div className="bg-[#0F172A] p-5 rounded-xl border border-gray-700 relative group">
                      <div className="absolute top-3 right-3 text-xs text-gray-500 font-mono">PowerShell (Windows)</div>
                      
                      <code className="text-green-400 font-mono text-sm break-all pr-12 block">
                        irm https://code-flow-solution.vercel.app/install.ps1 | iex
                      </code>

                      {/* Copy Button */}
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText('irm https://code-flow-solution.vercel.app/install.ps1 | iex');
                          alert("Command Copied!");
                        }}
                        className="absolute bottom-3 right-3 bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded transition-colors flex items-center gap-1"
                      >
                        <Copy size={12} /> Copy
                      </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mt-2">
                    * You will be asked to enter your <strong>License Key</strong> (provided after purchase) during installation.
                  </p>
                </div>

                {/* Step 3: Configuration */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#1B365D] flex items-center gap-2">
                    <span className="bg-[#1B365D] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3</span>
                    Configuration
                  </h4>
                  <p className="text-[#64748B]">
                    Open <code className="text-[#D4AF37] font-bold">FounderKit.API/appsettings.json</code> and update your database and email settings.
                  </p>

                  {/* Code Block for Appsettings */}
                  <div className="bg-[#0F172A] p-5 rounded-xl border border-gray-700 overflow-x-auto relative group">
                      <div className="absolute top-3 right-3 text-xs text-gray-500 font-mono">appsettings.json</div>
                      <pre className="font-mono text-sm leading-relaxed text-gray-300">
                        <code>
            <span className="text-[#F07178]">"ConnectionStrings"</span>: &#123;<br/>
              &nbsp;&nbsp;<span className="text-[#C3E88D]">"DefaultConnection"</span>: <span className="text-[#FFCB6B]">"Server=localhost;Database=MyStartupDB;User Id=sa;Password=YOUR_PASSWORD;TrustServerCertificate=True;"</span><br/>
            &#125;,<br/>
            <span className="text-[#F07178]">"EmailSettings"</span>: &#123;<br/>
              &nbsp;&nbsp;<span className="text-[#C3E88D]">"SenderEmail"</span>: <span className="text-[#FFCB6B]">"your-email@gmail.com"</span>,<br/>
              &nbsp;&nbsp;<span className="text-[#C3E88D]">"Password"</span>: <span className="text-[#FFCB6B]">"your-app-password"</span><br/>
            &#125;
                        </code>
                      </pre>
                  </div>
                </div>

                {/* Step 4: Run */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#1B365D] flex items-center gap-2">
                    <span className="bg-[#1B365D] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">4</span>
                    Launch the API
                  </h4>
                  <p className="text-[#64748B]">Open your terminal and run the following commands:</p>

                  <div className="bg-[#0F172A] p-4 rounded-xl border border-gray-700">
                      <div className="flex items-center gap-2 text-gray-400 font-mono text-xs mb-3 border-b border-gray-700 pb-2">
                        <Terminal size={14} /> terminal
                      </div>
                      <code className="text-green-400 font-mono text-sm block mb-2">
                        # 1. Create the database
                      </code>
                      <code className="text-white font-mono text-sm block mb-4 pl-4 border-l-2 border-gray-700">
                        dotnet ef database update --project FounderKit.Infrastructure --startup-project FounderKit.API
                      </code>
                      
                      <code className="text-green-400 font-mono text-sm block mb-2">
                        # 2. Start the server
                      </code>
                      <code className="text-white font-mono text-sm block pl-4 border-l-2 border-gray-700">
                        dotnet run --project FounderKit.API
                      </code>
                  </div>

                  <div className="p-4 bg-green-50 text-green-800 rounded-xl text-sm border border-green-200">
                    <strong>Success!</strong> Your API will be running at <u>http://localhost:5000/swagger</u>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* =================================
              RIGHT COLUMN: PRICING (STICKY) 
             ================================= */}
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
                
                {/* --- WHATSAPP BUY BUTTON --- */}
                <a 
                  href={whatsappLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <span>Buy via WhatsApp</span>
                  <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                </a>
                
                <p className="text-center text-xs text-[#94A3B8] leading-snug">
                  * Instant delivery via Email/Drive after payment verification.
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