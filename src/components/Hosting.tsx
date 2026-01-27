"use client";
import { useState } from "react";
import { Server, Shield, Cpu, Zap, CheckCircle2, MousePointerClick } from "lucide-react";

export default function Hosting() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [outIndex, setOutIndex] = useState<number | null>(null);

  const plans = [
    { 
      name: "Starter Node", 
      ram: "4GB RAM", 
      cpu: "2 vCPU", 
      storage: "50GB NVMe", 
      tag: "MVP Ready",
      color: "from-blue-400 to-blue-600"
    },
    { 
      name: "Growth Node", 
      ram: "8GB RAM", 
      cpu: "4 vCPU", 
      storage: "100GB NVMe", 
      tag: "Best Value",
      color: "from-[#D4AF37] to-yellow-600"
    },
    { 
      name: "Scale Node", 
      ram: "16GB RAM", 
      cpu: "8 vCPU", 
      storage: "250GB NVMe", 
      tag: "High Traffic",
      color: "from-purple-400 to-purple-600"
    },
  ];

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setOutIndex(activeIndex);
      setActiveIndex(index);
      setTimeout(() => {
        setOutIndex(null); 
      }, 600);
    }
  };

  const nextIndex = (activeIndex + 1) % plans.length;

  return (
    // ✅ Updated BG
    <section id="hosting" className="py-24 bg-[#020617] relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <style dangerouslySetInnerHTML={{__html: `
        .cards {
          position: relative;
          list-style-type: none;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        .card {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
          background: #0F172A;
          border: 1px solid #334155;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 0 40px rgba(0,0,0,0.5);
          transform: translateY(0) rotate(4deg) translateX(25px) scale(1);
          transform-origin: 0 0;
          transition: transform 0.6s cubic-bezier(.8,.2,.1,0.8) 0.1s, background 0.4s linear;
          cursor: pointer;
          user-select: none;
        }
        .card--next {
          z-index: 5;
          transform: translateY(-25px) rotate(4deg) translateX(25px) scale(1);
          background: #1E293B;
        }
        .card--out {
          animation: card-out 0.6s cubic-bezier(.8,.2,.1,0.8);
          transform: translateY(-50px) rotate(8deg) translateX(55px) scale(0.95);
          z-index: 1;
          background: #0B1120;
          opacity: 0.5;
          pointer-events: none;
        }
        .card--current {
          cursor: default;
          z-index: 10;
          opacity: 1;
          background: #0F172A;
          border: 1px solid #D4AF37;
          transform: rotate(-1deg) translateX(0%) scale(1);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        @keyframes card-out {
          0% { z-index: 20; transform: translateY(0px) rotate(-4deg); }
          50% { transform: translateY(-120%) rotate(-5deg) translateX(-40px); }
          80% { z-index: 1; }
          100% { transform: translateY(-50px) rotate(8deg) translateX(55px) scale(0.95); }
        }
      `}} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16 items-center relative z-10 w-full">
        
        <div className="text-center lg:text-left order-1 lg:order-2">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-[#94A3B8] mb-6">
            PREMIUM <br />
            <span className="text-[#D4AF37]">VPS CLOUD</span>
          </h2>
          
          <p className="text-[#94A3B8] text-lg max-w-md mx-auto lg:mx-0 leading-relaxed mb-8">
            Enterprise-grade infrastructure.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white/80 justify-center lg:justify-start">
              <CheckCircle2 className="text-[#D4AF37]" size={20} />
              <span>DDoS Protection Standard</span>
            </div>
            <div className="flex items-center gap-3 text-white/80 justify-center lg:justify-start">
              <CheckCircle2 className="text-[#D4AF37]" size={20} />
              <span>NVMe SSD Storage</span>
            </div>
            <div className="flex items-center gap-3 text-white/80 justify-center lg:justify-start">
              <CheckCircle2 className="text-[#D4AF37]" size={20} />
              <span>10Gbps Uplink</span>
            </div>
          </div>
        </div>

        <div className="relative h-[450px] w-full max-w-[400px] mx-auto order-2 lg:order-1">
          
          <ul className="cards">
            {plans.map((plan, index) => {
              let className = "card";
              if (index === activeIndex) className += " card--current";
              else if (index === nextIndex) className += " card--next";
              else if (index === outIndex) className += " card--out";

              return (
                <li key={index} className={className} onClick={() => handleCardClick(index)}>
                  <div className="h-full flex flex-col justify-between pointer-events-none">
                    
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color} animate-pulse`} />
                          <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">{plan.tag}</span>
                        </div>
                        <Server className="text-white/20" size={20} />
                    </div>

                    <div className="text-center py-4">
                      <h3 className="text-2xl font-bold text-white mb-6">{plan.name}</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                            <span className="text-[#94A3B8] text-sm flex items-center gap-2"><Cpu size={14}/> CPU</span>
                            <span className="text-white font-mono">{plan.cpu}</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                            <span className="text-[#94A3B8] text-sm flex items-center gap-2"><Shield size={14}/> RAM</span>
                            <span className="text-white font-mono">{plan.ram}</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                            <span className="text-[#94A3B8] text-sm flex items-center gap-2"><Zap size={14}/> SSD</span>
                            <span className="text-white font-mono">{plan.storage}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <div className="w-full py-2 bg-[#D4AF37] text-[#1B365D] font-bold text-sm uppercase rounded hover:bg-white transition-colors text-center">
                        Deploy Server
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 text-center animate-pulse">
            <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
              <MousePointerClick className="w-4 h-4" /> Click Stack to Cycle Plans
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}