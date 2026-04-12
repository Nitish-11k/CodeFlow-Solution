"use client";
import { Check, ArrowRight, Lock, Hammer, Code2 } from "lucide-react";
import Link from "next/link";
import { kitsData } from "@/lib/kitsData";

export default function Kits() {
  return (
    <section id="kits" className="py-24 bg-[var(--background)] relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="w-full relative z-10 max-w-[1400px] mx-auto transition-all">
        <div className="text-center mb-16 px-6 max-w-4xl mx-auto font-sans">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] mb-4 tracking-tight">
            Founder Services <span className="text-[var(--gold-primary)]">Kits</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
            Engineered architecture that powers your vision. We handle the infrastructure, you build the product.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 px-6">
          {kitsData.map((service) => {
            const isLocked = service.status === "Under Construction";
            return (
              <div 
                key={service.slug} 
                className={`
                  relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 ease-out group shadow-xl
                  ${service.highlight 
                    ? "bg-[var(--card-bg)] border-[var(--gold-primary)] shadow-[0_0_50px_-15px_rgba(212,175,55,0.2)] z-10 scale-[1.02]" 
                    : "bg-[var(--card-bg)] border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--gold-primary)]/40"
                  }
                  ${!isLocked && "hover:-translate-y-3 cursor-pointer"}
                  ${isLocked && "opacity-60 border-[var(--border-color)] bg-[var(--background)]"}
                `}
              >
                {isLocked && (
                  <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[var(--background)]/80 backdrop-blur-[4px] rounded-[2.5rem] text-center p-6">
                    <div className="bg-white/5 p-5 rounded-3xl mb-4 border border-[var(--border-color)]">
                       <Hammer className="text-[var(--gold-primary)]" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Coming Soon</h3>
                    <p className="text-xs text-[var(--text-secondary)] max-w-[160px]">We are currently fine-tuning the Java engine for this kit.</p>
                  </div>
                )}
                <div className={isLocked ? "blur-[3px] pointer-events-none select-none grayscale-[0.8]" : ""}>
                    <div className="flex items-center justify-between mb-8">
                      <div className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border shadow-sm ${service.highlight ? "bg-[var(--gold-primary)] text-[var(--text-primary)] border-transparent" : "bg-white/5 text-[var(--text-secondary)] border-[var(--border-color)]"}`}>
                        {service.tag}
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--text-secondary)] uppercase font-bold opacity-60">
                         <Code2 size={12} className="text-[var(--gold-primary)]" /> {service.stack}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black mb-4 text-[var(--text-primary)]">{service.title}</h3>
                    <p className="text-sm mb-10 text-[var(--text-secondary)] min-h-[50px] leading-relaxed opacity-80">{service.description}</p>
                    <ul className="space-y-5 mb-10 flex-1">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-4 text-sm text-[var(--text-primary)] font-medium">
                          <Check className={`w-5 h-5 shrink-0 ${service.highlight ? "text-[var(--gold-primary)]" : "text-[#10B981]"}`} />
                          <span className="opacity-90">{feat}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                        {isLocked ? (
                            <div className="w-full py-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-3 bg-white/5 text-[var(--text-secondary)] cursor-not-allowed border border-[var(--border-color)]">
                               Locked <Lock size={14} />
                            </div>
                        ) : (
                            <Link href={service.status === "Custom" ? "/custom-product" : `/kits/${service.slug}`} className={`w-full py-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-3 transition-all uppercase tracking-widest shadow-lg ${service.highlight ? "bg-[var(--gold-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--background)]" : "bg-[var(--text-primary)] text-[var(--background)] hover:bg-[var(--gold-primary)] hover:text-[var(--text-primary)]"}`}>
                              View Architecture <ArrowRight size={16} />
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