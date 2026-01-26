"use client";
import { useParams } from "next/navigation";
import { kitsData } from "@/lib/kitsData";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { 
  ArrowLeft, CheckCircle2, Shield, Zap, ArrowRight, 
  FileText, Terminal, Copy, LifeBuoy, Mail, MessageCircle, AlertCircle 
} from "lucide-react";
import { useState, useEffect } from "react";

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

  if (!slug) return <div className="min-h-screen bg-[#FDFCF8]" />; 

  if (!kit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCF8]">
        <h1 className="text-2xl text-[#1B365D]">Kit Not Found</h1>
        <Link href="/" className="ml-4 text-blue-500 underline">Go Home</Link>
      </div>
    );
  }

  // WhatsApp Links
  const whatsappMessage = `Hi CodeFlow, I am interested in buying the ${kit.title} (${kit.price}). Is it available?`;
  const buyLink = `https://wa.me/918178748796?text=${encodeURIComponent(whatsappMessage)}`;
  
  const supportMessage = `Hi CodeFlow, I bought the kit but I am facing an issue. Please help.`;
  const supportLink = `https://wa.me/918178748796?text=${encodeURIComponent(supportMessage)}`;

  return (
    <main className="min-h-screen bg-[#FDFCF8]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        
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
                </div>
              </div>
            </div>

            {/* =========================================================
                2. DOCUMENTATION SECTION (STEP-BY-STEP GUIDANCE)
               ========================================================= */}
            <div className="border border-[#E2E8F0] bg-white rounded-3xl overflow-hidden relative" id="docs">
              
              <div className="bg-gray-50 border-b border-[#E2E8F0] p-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#1B365D] flex items-center gap-2">
                  <FileText size={20} /> Setup Documentation
                </h3>
              </div>

              <div className="p-8 text-[#1E293B] space-y-10">

                {/* Step 1: Install */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#1B365D] flex items-center gap-2">
                    <span className="bg-[#1B365D] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                    Download & Install
                  </h4>
                  <p className="text-[#64748B]">Run this command in <strong>PowerShell</strong>. It will download the kit and configure your license automatically.</p>

                  <div className="bg-[#0F172A] p-5 rounded-xl border border-gray-700 relative group">
                      <div className="absolute top-3 right-3 text-xs text-gray-500 font-mono">PowerShell</div>
                      <code className="text-green-400 font-mono text-sm break-all pr-16 block">
                        irm https://code-flow-solution.vercel.app/install.ps1 | iex
                      </code>
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
                </div>

                {/* Step 2: Configure */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#1B365D] flex items-center gap-2">
                    <span className="bg-[#1B365D] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                    Configuration
                  </h4>
                  <p className="text-[#64748B]">
                    Open <code className="bg-gray-100 px-1 rounded text-[#1B365D]">FounderKit.API/appsettings.json</code> and update your Connection String.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-xl border border-gray-200">
                    <p className="font-mono text-sm text-gray-600">"ConnectionStrings": &#123; "DefaultConnection": "..." &#125;</p>
                  </div>
                </div>

                {/* Step 3: Database (RESTORE TOOL) */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#1B365D] flex items-center gap-2">
                    <span className="bg-[#1B365D] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3</span>
                    Database Setup (Important)
                  </h4>
                  <p className="text-[#64748B]">
                    Run these commands inside the folder to restore tools and create the database.
                  </p>

                  <div className="bg-[#0F172A] p-4 rounded-xl border border-gray-700 space-y-4">
                      <div>
                        <p className="text-gray-400 text-xs mb-1"># 1. Restore .NET Tools (Fixes 'ef not found' error)</p>
                        <code className="text-green-400 font-mono text-sm block">dotnet tool restore</code>
                      </div>
                      <div>
                         <p className="text-gray-400 text-xs mb-1"># 2. Create Database Tables</p>
                         <code className="text-white font-mono text-sm block">dotnet ef database update --project FounderKit.Infrastructure --startup-project FounderKit.API</code>
                      </div>
                  </div>
                </div>

                {/* Step 4: Run */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#1B365D] flex items-center gap-2">
                    <span className="bg-[#1B365D] text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">4</span>
                    Launch API
                  </h4>
                  <div className="bg-[#0F172A] p-4 rounded-xl border border-gray-700">
                      <code className="text-green-400 font-mono text-sm block">dotnet run --project FounderKit.API</code>
                  </div>
                  <div className="p-3 bg-green-50 text-green-700 text-sm rounded-lg flex items-center gap-2">
                    <CheckCircle2 size={16} /> Your API will be live at <strong>http://localhost:5xxx/swagger</strong>
                  </div>
                </div>

                {/* --- TROUBLESHOOTING & SUPPORT --- */}
                <div className="mt-8 pt-8 border-t border-dashed border-gray-200">
                   <h4 className="text-lg font-bold text-[#1B365D] mb-4 flex items-center gap-2">
                     <LifeBuoy className="text-[#D4AF37]" size={20} /> Stuck? We are here.
                   </h4>
                   
                   <div className="grid md:grid-cols-2 gap-4">
                      {/* WhatsApp Support */}
                      <a href={supportLink} target="_blank" className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-green-400 hover:bg-green-50 transition-all group">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                          <MessageCircle size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-[#1B365D]">WhatsApp Support</p>
                          <p className="text-xs text-gray-500">Instant chat with devs</p>
                        </div>
                      </a>

                      {/* Email Support */}
                      <a href="mailto:solutioncodeflow@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-blue-400 hover:bg-blue-50 transition-all group">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                          <Mail size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-[#1B365D]">Email Us</p>
                          <p className="text-xs text-gray-500">solutioncodeflow@gmail.com</p>
                        </div>
                      </a>
                   </div>

                   <div className="mt-4 p-4 bg-yellow-50 text-yellow-800 text-sm rounded-xl flex items-start gap-3">
                      <AlertCircle className="shrink-0 mt-0.5" size={18} />
                      <p>
                        <strong>Common Error:</strong> If you see "Command not found", make sure you installed the <strong>.NET 8 SDK</strong> and ran <code>dotnet tool restore</code> in Step 3.
                      </p>
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
                  href={buyLink} 
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