"use client";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { kitsData } from "@/lib/kitsData"; // Import the data

export default function Kits() {
  return (
    <section id="kits" className="py-24 bg-[#FDFCF8] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Hide Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="w-full relative z-10 max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1B365D] mb-4 tracking-tight">
            Founder Services Kit
          </h2>
          <p className="text-[#64748B] text-lg">
            Stop building from scratch. Choose a modular kit to accelerate your launch.
          </p>
        </div>

        {/* --- CARD CONTAINER --- */}
        <div className={`
          flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 pb-12 gap-6
          lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:overflow-visible lg:pb-0 lg:px-6 lg:justify-items-center
        `}>
          
          {kitsData.map((service) => (
            <Link 
              key={service.slug} 
              href={`/kits/${service.slug}`} // Links to the dynamic page
              className="contents" // Ensures Link doesn't break flex/grid layout
            >
              <div className={`
                relative flex flex-col flex-shrink-0 
                w-[300px] lg:w-full 
                p-8 rounded-2xl border transition-all duration-300 ease-out group 
                snap-center cursor-pointer

                /* --- BASE STYLES --- */
                ${service.highlight 
                  ? "bg-[#1B365D] border-[#1B365D] text-white shadow-xl lg:scale-105 z-10" 
                  : "bg-white border-[#E2E8F0] text-[#1E293B]"
                }

                /* --- HOVER POP UP EFFECT --- */
                hover:-translate-y-2 
                hover:shadow-2xl 
                hover:shadow-[#1B365D]/20 
                hover:border-[#D4AF37]
              `}>
                
                {/* Tag */}
                <div className={`
                  absolute top-0 right-0 mt-6 mr-6 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full
                  ${service.highlight ? "bg-[#D4AF37] text-[#1B365D]" : "bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#D4AF37] group-hover:text-[#1B365D] transition-colors"}
                `}>
                  {service.tag}
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 mt-4">{service.title}</h3>
                <p className={`text-sm mb-6 ${service.highlight ? "text-gray-300" : "text-[#64748B]"}`}>
                  {service.description}
                </p>

                {/* Price in Rupees */}
                <div className="mb-8">
                  <span className="text-4xl font-bold">{service.price}</span>
                  {service.price !== "Custom Quote" && <span className={`text-sm ml-1 ${service.highlight ? "text-gray-400" : "text-gray-500"}`}>/ license</span>}
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-1">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className={`w-5 h-5 shrink-0 ${service.highlight ? "text-[#D4AF37]" : "text-[#1B365D] group-hover:text-[#D4AF37]"}`} />
                      <span className={service.highlight ? "text-gray-200" : "text-gray-600"}>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className={`
                  w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all
                  ${service.highlight 
                    ? "bg-[#D4AF37] text-[#1B365D] hover:bg-white" 
                    : "bg-[#1B365D] text-white hover:bg-[#D4AF37] hover:text-[#1B365D]"
                  }
                `}>
                  View Details <ArrowRight size={16} />
                </button>

              </div>
            </Link>
          ))}
          
        </div>

      </div>
    </section>
  );
}