"use client";
import { Check, ArrowRight, Lock, Hammer } from "lucide-react";
import Link from "next/link";
import { kitsData } from "@/lib/kitsData";

export default function Kits() {
  return (
    <section id="kits" className="py-24 bg-[#020617] relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="w-full relative z-10 max-w-[1400px] mx-auto">
        
        <div className="text-center mb-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Founder Services Kit
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the module that fits your stage.
          </p>
        </div>

        <div className={`
          flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-12 gap-8
          lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:overflow-visible lg:pb-0 lg:px-6 lg:justify-items-center
        `}>
          
          {kitsData.map((service) => {
            const isLocked = service.slug === "nexus-integrator" || service.slug === "apex-suite";

            return (
              <div 
                key={service.slug} 
                className={`
                  relative flex flex-col flex-shrink-0 
                  w-[320px] lg:w-full 
                  p-8 rounded-3xl border transition-all duration-300 ease-out group 
                  snap-center 
                  
                  /* ✅ NEW PREMIUM CARD STYLES */
                  ${service.highlight 
                    ? "bg-[#0B1120] border-[#D4AF37] shadow-[0_0_40px_-10px_rgba(212,175,55,0.15)] lg:scale-105 z-10" 
                    : "bg-[#0F172A] border-white/5 text-white hover:border-white/20"
                  }

                  ${!isLocked && "hover:-translate-y-2 cursor-pointer"}
                  ${isLocked && "opacity-70 border-white/5 bg-[#0B1120]"}
                `}
              >
                
                {/* 🔒 Locked Overlay */}
                {isLocked && (
                  <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#020617]/80 backdrop-blur-[2px] rounded-3xl text-center p-4">
                    <div className="bg-white/5 p-4 rounded-full mb-3 border border-white/10">
                       <Lock className="text-[#D4AF37]" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">Coming Soon</h3>
                    <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono uppercase tracking-widest mt-2">
                      <Hammer size={12} /> Building...
                    </div>
                  </div>
                )}

                <div className={isLocked ? "blur-[2px] pointer-events-none select-none grayscale-[0.8]" : ""}>
                    
                    {/* Tag */}
                    <div className={`
                      absolute top-0 right-0 mt-6 mr-6 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full
                      ${service.highlight 
                        ? "bg-[#D4AF37] text-[#020617]" 
                        : "bg-white/5 text-gray-400 border border-white/5"
                      }
                    `}>
                      {service.tag}
                    </div>

                    {/* Title */}
                    <h3 className={`text-2xl font-bold mb-3 mt-4 ${service.highlight ? "text-white" : "text-gray-200"}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm mb-8 text-gray-400 h-10 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="mb-8 pb-8 border-b border-white/5">
                      <span className={`text-4xl font-bold ${service.highlight ? "text-[#D4AF37]" : "text-white"}`}>
                        {service.price}
                      </span>
                      {service.price !== "Custom Quote" && <span className="text-sm ml-2 text-gray-500">/ license</span>}
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8 flex-1">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                          <Check className={`w-5 h-5 shrink-0 ${service.highlight ? "text-[#D4AF37]" : "text-gray-500"}`} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    {isLocked ? (
                        <div className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-white/5 text-gray-600 cursor-not-allowed border border-white/5">
                           Locked <Lock size={16} />
                        </div>
                    ) : (
                        <Link href={`/kits/${service.slug}`} className={`
                          w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all
                          ${service.highlight 
                            ? "bg-[#D4AF37] text-[#020617] hover:bg-white hover:text-[#020617]" 
                            : "bg-white/10 text-white hover:bg-white hover:text-[#020617]"
                          }
                        `}>
                          View Details <ArrowRight size={16} />
                        </Link>
                    )}
                </div>

              </div>
            );
          })}
          
        </div>

      </div>
    </section>
  );
}