"use client";
import { useState } from "react";
import { Terminal, Cpu, Database, Sparkles, Code2, Globe, ShieldCheck } from "lucide-react";

export default function TechStack() {
  const [activeStack, setActiveStack] = useState<'dotnet' | 'java'>('dotnet');

  return (
    <section id="stack" className="py-24 bg-[var(--background)] relative overflow-hidden transition-colors duration-500">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight">
            Backend <span className="text-[var(--gold-primary)]">Architecture</span> Stacks
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
            We specialize in building the core engines. You choose your own frontend.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* .NET STACK (ACTIVE) */}
          <div 
            onClick={() => setActiveStack('dotnet')}
            className={`group relative p-8 rounded-[2.5rem] border transition-all duration-500 cursor-pointer overflow-hidden
              ${activeStack === 'dotnet' 
                ? "bg-[var(--card-bg)] border-[var(--gold-primary)]/30 shadow-2xl backdrop-blur-xl" 
                : "bg-[var(--background)]/[0.02] border-[var(--border-color)] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 backdrop-blur-sm"
              }`}
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[10px] font-bold tracking-[0.2em] bg-green-500/10 text-green-600 px-3 py-1 rounded-full border border-green-500/20 uppercase">
                Stable & Ready
              </span>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">.NET 8 Backend</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Optimized for high-concurrency microservices.</p>
                </div>
              </div>
              <div className="space-y-4 font-mono text-sm px-4 md:px-0">
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-[var(--border-color)] rounded-2xl transition-all group-hover:bg-white/10 shadow-sm">
                  <Cpu size={18} className="text-purple-500" />
                  <span className="text-[var(--text-secondary)]">Framework:</span>
                  <span className="text-[var(--text-primary)] font-bold">ASP.NET Core Web API 8.0</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-[var(--border-color)] rounded-2xl transition-all group-hover:bg-white/10 shadow-sm">
                  <Database size={18} className="text-green-500" />
                  <span className="text-[var(--text-secondary)]">Persistence:</span>
                  <span className="text-[var(--text-primary)] font-bold">SQL Server + Entity Framework</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-[var(--border-color)] rounded-2xl transition-all group-hover:bg-white/10 shadow-sm">
                  <ShieldCheck size={18} className="text-[#D4AF37]" />
                  <span className="text-[var(--text-secondary)]">Security:</span>
                  <span className="text-[var(--text-primary)] font-bold">JWT + Identity + RBAC</span>
                </div>
              </div>
            </div>
          </div>

          {/* JAVA STACK (COMING SOON) */}
          <div 
            onClick={() => setActiveStack('java')}
            className={`group relative p-8 rounded-[2.5rem] border transition-all duration-500 cursor-pointer overflow-hidden
              ${activeStack === 'java' 
                ? "bg-[var(--card-bg)] border-blue-500/30 shadow-2xl backdrop-blur-xl" 
                : "bg-[var(--background)]/[0.02] border-[var(--border-color)] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 backdrop-blur-sm"
              }`}
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[10px] font-bold tracking-[0.2em] bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full border border-blue-500/20 flex items-center gap-2">
                <Sparkles size={10} /> COMING SOON
              </span>
            </div>
            <div className="space-y-8 px-4 md:px-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-500/20">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">Java Spring Backend</h3>
                  <p className="text-sm text-[var(--text-secondary)]">Enterprise standard for financial systems.</p>
                </div>
              </div>
              <div className="space-y-4 font-mono text-sm opacity-50">
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-[var(--border-color)] rounded-2xl transition-all shadow-sm">
                  <Cpu size={18} className="text-red-500" />
                  <span className="text-[var(--text-secondary)]">Framework:</span>
                  <span className="text-[var(--text-primary)] font-bold">Spring Boot 3.3</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-[var(--border-color)] rounded-2xl transition-all shadow-sm">
                  <Database size={18} className="text-orange-500" />
                  <span className="text-[var(--text-secondary)]">Persistence:</span>
                  <span className="text-[var(--text-primary)] font-bold">PostgreSQL + Hibernate</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 border border-[var(--border-color)] rounded-2xl transition-all shadow-sm">
                  <ShieldCheck size={18} className="text-blue-500" />
                  <span className="text-[var(--text-secondary)]">Security:</span>
                  <span className="text-[var(--text-primary)] font-bold">OAuth2 + OpenID Connect</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-[var(--background)]/40 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="px-6 py-2 bg-blue-600 text-[var(--text-primary)] font-bold rounded-full text-xs animate-bounce shadow-lg">
                Development in Progress 🛠️
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 p-2 px-6 rounded-full bg-white/5 border border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)] shadow-sm">
            <Terminal size={14} className="text-[var(--gold-primary)]" />
            <span>System.out.println("Building the future of finance...");</span>
          </div>
        </div>
      </div>
    </section>
  );
}