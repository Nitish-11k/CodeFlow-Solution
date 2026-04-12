"use client";
import { useParams } from "next/navigation";
import { kitsData } from "@/lib/kitsData";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { 
  ArrowLeft, CheckCircle2, Shield, Zap, ArrowRight, 
  FileText, Copy, LifeBuoy, Mail, MessageCircle, AlertCircle, Laptop, Command, Check, Code2 
} from "lucide-react";
import { useState } from "react";

export default function KitDetailPage() {
  const params = useParams();
  
  // States for Copy Button Feedback
  const [copiedWin, setCopiedWin] = useState(false);
  const [copiedLin, setCopiedLin] = useState(false);

  // Derive slug directly from params to avoid unnecessary state updates
  const slug = Array.isArray(params?.slug) ? params.slug[0] : (params?.slug || "");
  const kit = kitsData.find((k) => k.slug === slug);

  const handleCopy = (text: string, type: 'win' | 'lin') => {
    navigator.clipboard.writeText(text);
    if (type === 'win') {
      setCopiedWin(true);
      setTimeout(() => setCopiedWin(false), 2000);
    } else {
      setCopiedLin(true);
      setTimeout(() => setCopiedLin(false), 2000);
    }
  };

  if (!slug) return <div className="min-h-screen bg-[#FDFCF8]" />; 

  if (!kit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFCF8]">
        <h1 className="text-2xl text-[#1B365D]">Kit Not Found</h1>
        <Link href="/" className="ml-4 text-blue-500 underline">Go Home</Link>
      </div>
    );
  }

  const whatsappMessage = `Hi CodeFlow, I am interested in ${kit.title}. Can we discuss more?`;
  const buyLink = `https://wa.me/918178748796?text=${encodeURIComponent(whatsappMessage)}`;
  const supportLink = `https://wa.me/918178748796?text=${encodeURIComponent("Hi, I need help with the kit setup.")}`;
  const isCustom = kit.slug === "bespoke-forge";

  return (
    <main className="min-h-screen bg-[#FDFCF8]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <Link href="/#kits" className="inline-flex items-center gap-2 text-[#64748B] hover:text-[#1B365D] mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to All Kits
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT COLUMN: DETAILS */}
          <div className="lg:col-span-2 space-y-12">
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

              <div className="bg-[#1B365D] p-8 rounded-3xl text-[var(--text-primary)] relative overflow-hidden">
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

            {/* DOCUMENTATION SECTION */}
            <div className="border border-[#E2E8F0] bg-white rounded-3xl overflow-hidden relative" id="docs">
              <div className="bg-gray-50 border-b border-[#E2E8F0] p-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#1B365D] flex items-center gap-2">
                  <FileText size={20} /> Setup Documentation
                </h3>
              </div>

              <div className="p-8 text-[#1E293B] space-y-10">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#1B365D] flex items-center gap-2">
                    <span className="bg-[#1B365D] text-[var(--text-primary)] w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                    Download & Install
                  </h4>
                  <p className="text-[#64748B]">
                    Copy the command for your OS. The installer will ask for a <strong>Project Name</strong> and your <strong>License Key</strong>.
                  </p>

                  <div className="bg-[var(--card-bg)] p-5 rounded-xl border border-gray-700 relative group">
                      <div className="absolute top-3 right-3 text-xs text-[var(--text-secondary)] font-bold flex items-center gap-1">
                        <Laptop size={14} /> Windows (PowerShell)
                      </div>
                      <code className="text-green-400 font-mono text-sm break-all pr-20 block">
                        irm https://code-flow-solution.vercel.app/install.ps1 | iex
                      </code>
                      <button 
                        onClick={() => handleCopy('irm https://code-flow-solution.vercel.app/install.ps1 | iex', 'win')}
                        className="absolute bottom-3 right-3 bg-white/10 hover:bg-white/20 text-[var(--text-primary)] text-xs px-3 py-1.5 rounded transition-colors flex items-center gap-1"
                      >
                        {copiedWin ? <span className="flex items-center gap-1 text-green-400"><Check size={12} /> Copied!</span> : <span className="flex items-center gap-1"><Copy size={12} /> Copy</span>}
                      </button>
                  </div>

                  <div className="bg-[#1E293B] p-5 rounded-xl border border-gray-600 relative group">
                      <div className="absolute top-3 right-3 text-xs text-[var(--text-secondary)] font-bold flex items-center gap-1">
                        <Command size={14} /> Mac / Linux
                      </div>
                      <code className="text-blue-400 font-mono text-sm break-all pr-20 block">
                        curl -sL https://code-flow-solution.vercel.app/install.sh | bash
                      </code>
                      <button 
                        onClick={() => handleCopy('curl -sL https://code-flow-solution.vercel.app/install.sh | bash', 'lin')}
                        className="absolute bottom-3 right-3 bg-white/10 hover:bg-white/20 text-[var(--text-primary)] text-xs px-3 py-1.5 rounded transition-colors flex items-center gap-1"
                      >
                         {copiedLin ? <span className="flex items-center gap-1 text-green-400"><Check size={12} /> Copied!</span> : <span className="flex items-center gap-1"><Copy size={12} /> Copy</span>}
                      </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#1B365D] flex items-center gap-2">
                    <span className="bg-[#1B365D] text-[var(--text-primary)] w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                    Configuration
                  </h4>
                  <p className="text-[#64748B]">
                    Open your new project folder in VS Code. Go to <code className="bg-gray-100 px-1 rounded text-[#1B365D]">FounderKit.API/appsettings.json</code> and update the <strong>Connection String</strong>.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-xl border border-gray-200">
                    <p className="font-mono text-sm text-gray-600">"ConnectionStrings": &#123; "DefaultConnection": "..." &#125;</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#1B365D] flex items-center gap-2">
                    <span className="bg-[#1B365D] text-[var(--text-primary)] w-8 h-8 rounded-lg flex items-center justify-center text-sm">3</span>
                    Database Setup
                  </h4>
                  <p className="text-[#64748B]">Run these commands inside your project folder:</p>
                  <div className="bg-[var(--card-bg)] p-4 rounded-xl border border-gray-700 space-y-4">
                      <div>
                        <p className="text-[var(--text-secondary)] text-xs mb-1"># 1. Restore .NET Tools</p>
                        <code className="text-green-400 font-mono text-sm block">dotnet tool restore</code>
                      </div>
                      <div>
                         <p className="text-[var(--text-secondary)] text-xs mb-1"># 2. Update Database</p>
                         <code className="text-[var(--text-primary)] font-mono text-sm block">dotnet ef database update --project FounderKit.Infrastructure --startup-project FounderKit.API</code>
                      </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-dashed border-gray-200">
                   <h4 className="text-lg font-bold text-[#1B365D] mb-4 flex items-center gap-2">
                     <LifeBuoy className="text-[#D4AF37]" size={20} /> Stuck? We are here.
                   </h4>
                   <div className="grid md:grid-cols-2 gap-4">
                      <a href={supportLink} target="_blank" className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-green-400 hover:bg-green-50 transition-all group">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform">
                          <MessageCircle size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-[#1B365D]">WhatsApp Support</p>
                        </div>
                      </a>
                      <a href="mailto:solutioncodeflow@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-[#E2E8F0] hover:border-blue-400 hover:bg-blue-50 transition-all group">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                          <Mail size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-[#1B365D]">Email Us</p>
                        </div>
                      </a>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-8 rounded-3xl border border-[#D4AF37]/30 shadow-2xl shadow-[#1B365D]/10 text-center">
              <div className="mb-8 text-left">
                <h3 className="text-sm font-bold text-[#1B365D] mb-4 uppercase tracking-widest flex items-center gap-2">
                   <Code2 size={16} className="text-[#D4AF37]" /> Step 1: Choose Backend
                </h3>
                <div className="grid grid-cols-1 gap-3">
                   <button className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-[#D4AF37] bg-white text-[#1B365D] font-bold transition-all">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-lg flex items-center justify-center text-[#D4AF37]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2zm0 3.7l7.53 13.3H4.47L12 5.7z"/></svg>
                         </div>
                         .NET BACKEND
                      </div>
                      <span className="text-[10px] bg-green-500 text-[var(--text-primary)] px-2 py-0.5 rounded">READY</span>
                   </button>
                   <button disabled className="w-full flex items-center justify-between p-4 rounded-xl border border-dashed border-gray-200 bg-gray-50 text-[var(--text-secondary)] font-bold opacity-60 cursor-not-allowed">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center text-[var(--text-secondary)]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 19.77h20L12 2zm0 3.7l7.53 13.3H4.47L12 5.7z"/></svg>
                         </div>
                         JAVA BACKEND
                      </div>
                      <span className="text-[10px] bg-gray-400 text-[var(--text-primary)] px-2 py-0.5 rounded italic whitespace-nowrap">COMING SOON</span>
                   </button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#1B365D] mb-2 font-black">Step 2: Start Building</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {isCustom ? "Share your custom requirements." : "Connect with our sales team to finalize your license."}
                </p>
              </div>

              <div className="space-y-4">
                {isCustom ? (
                  <Link href="/custom-product" className="w-full py-4 bg-[#D4AF37] text-[var(--background)] font-bold rounded-xl hover:bg-[#1B365D] hover:text-[var(--text-primary)] transition-all shadow-lg flex items-center justify-center gap-2 group">
                    <span>Request Custom Quote</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <a href={buyLink} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-[#25D366] text-[var(--text-primary)] font-bold rounded-xl flex items-center justify-center gap-2 group shadow-lg transition-all hover:-translate-y-1">
                    <span>Talk to Sales</span>
                    <ArrowRight size={18} className="text-[var(--text-primary)] group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-[#64748B]">
                <div className="flex justify-between mb-2"><span>Updates</span><span className="font-bold text-[#1B365D]">Lifetime</span></div>
                <div className="flex justify-between"><span>Support</span><span className="font-bold text-[#1B365D]">Priority</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}