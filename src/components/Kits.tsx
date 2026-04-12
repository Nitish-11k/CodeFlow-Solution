"use client";
import { Check, ArrowRight, Lock, Hammer, Code2 } from "lucide-react";
import Link from "next/link";
import { kitsData } from "@/lib/kitsData";

export default function Kits() {
  return (
    <section id="kits" className="py-24 bg-[var(--background)] relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="w-full relative z-10 max-w-[1400px] mx-auto transition-all text-left">
        <div className="text-center mb-16 px-6 max-w-4xl mx-auto font-sans">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-[var(--gold-primary)]/20 shadow-sm">
             <Code2 size={14} /> Our Infrastructure
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4 tracking-tight">
            Founder Services <span className="text-[var(--gold-primary)]">Kits</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Engineered architecture that powers your vision. We handle the heavy lifting, you build the product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-6">
          {kitsData.map((service) => {
            const isLocked = service.status === "Under Construction";
            const isVps = service.status === "VPS";
            const isCustom = service.status === "Custom";

            return (
              <div 
                key={service.slug} 
                className={`
                  relative flex flex-col p-8 rounded-[2rem] border transition-all duration-500 ease-out group shadow-lg
                  ${service.highlight 
                    ? "bg-[var(--card-bg)] border-[var(--gold-primary)] shadow-[0_0_50px_-15px_rgba(212,175,55,0.15)] z-10 scale-[1.02]" 
                    : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--gold-primary)]/40 hover:shadow-xl"
                  }
                  ${!isLocked && "hover:-translate-y-2 cursor-pointer"}
                  ${isLocked && "opacity-60 grayscale"}
                `}
              >
                {isLocked && (
                  <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[var(--background)]/80 backdrop-blur-[4px] rounded-[2rem] text-center p-6">
                    <div className="bg-white/5 p-4 rounded-2xl mb-4 border border-[var(--border-color)]">
                       <Hammer className="text-[var(--gold-primary)]" size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">Coming Soon</h3>
                    <p className="text-[10px] text-[var(--text-secondary)] max-w-[140px] font-medium uppercase tracking-wider">Engine synchronization in progress</p>
                  </div>
                )}

                <div className={isLocked ? "blur-[2px] pointer-events-none select-none opacity-40" : ""}>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border shadow-sm ${service.highlight ? "bg-[var(--gold-primary)] text-[var(--text-primary)] border-transparent" : "bg-[var(--background)] text-[var(--text-secondary)] border-[var(--border-color)]"}`}>
                        {service.tag}
                      </div>
                      <div className="text-[9px] font-mono text-[var(--text-secondary)] uppercase font-bold opacity-60">
                         {service.stack}
                      </div>
                    </div>

                    <h3 className="text-xl font-black mb-3 text-[var(--text-primary)] leading-tight">{service.title}</h3>
                    <p className="text-xs mb-8 text-[var(--text-secondary)] min-h-[40px] leading-relaxed font-medium line-clamp-2">{service.description}</p>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                      {service.features.slice(0, 4).map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs text-[var(--text-primary)] font-bold">
                          <Check className={`w-4 h-4 shrink-0 ${service.highlight ? "text-[var(--gold-primary)]" : "text-green-500"}`} />
                          <span className="opacity-80">{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                        {isLocked ? (
                            <div className="w-full py-3.5 rounded-xl font-black text-[10px] flex items-center justify-center gap-2 bg-[var(--background)] text-[var(--text-secondary)] cursor-not-allowed border border-[var(--border-color)] uppercase tracking-widest">
                               Locked <Lock size={12} />
                            </div>
                        ) : (
                            <Link 
                              href={isCustom ? "/custom-product" : isVps ? "/vps" : `/kits/${service.slug}`} 
                              className={`w-full py-3.5 rounded-xl font-black text-[10px] flex items-center justify-center gap-2 transition-all uppercase tracking-widest shadow-md ${service.highlight ? "bg-[var(--gold-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)]" : "bg-[var(--text-primary)] text-[var(--background)] hover:bg-[var(--gold-primary)] hover:text-[var(--text-primary)]"}`}
                            >
                               {isVps ? "Explore Infrastructure" : "View Architecture"} <ArrowRight size={14} />
                            </Link>
                        )}
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}