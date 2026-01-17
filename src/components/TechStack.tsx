"use client";
import { useState } from "react";
import { Terminal, Copy, Server } from "lucide-react";

export default function TechStack() {
  // State to track which card is on top ('stack' or 'vps')
  const [activeCard, setActiveCard] = useState<'stack' | 'vps'>('stack');

  return (
    <section id="stack" className="py-24 bg-[#1B365D] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* LEFT: Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#D4AF37] to-[#FDFCF8] mb-6 drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">
            OUR <br />
            TECH <br />
            STACK
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-md mx-auto lg:mx-0">
            Enterprise-grade technologies configured for maximum scalability and zero downtime.
          </p>
          <p className="mt-6 text-[#D4AF37] text-sm font-mono animate-pulse">
            // Click the back card to shuffle
          </p>
        </div>

        {/* RIGHT: The Shuffling Cards Area */}
        <div className="flex-1 w-full max-w-2xl relative h-[450px] flex items-center justify-center">
          
          {/* ==============================================
              CARD 1: VPS HOSTING (Back/Front Logic)
             ============================================== */}
          <div 
            onClick={() => setActiveCard('vps')}
            className={`absolute w-full transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1) transform origin-bottom
              ${activeCard === 'vps' 
                ? "z-20 scale-100 translate-x-0 translate-y-0 rotate-0 opacity-100" 
                : "z-10 scale-95 translate-x-12 -translate-y-6 rotate-6 opacity-60 cursor-pointer hover:opacity-100 hover:scale-95"
              }`}
          >
            <div className="rounded-xl overflow-hidden bg-[#0B1120] border border-[#334155] shadow-2xl">
              {/* Header */}
              <div className="bg-[#1E293B] px-4 py-3 flex items-center justify-between border-b border-[#334155]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#334155]" />
                  <div className="w-3 h-3 rounded-full bg-[#334155]" />
                </div>
                <div className="text-[#64748B] text-xs font-mono flex items-center gap-2">
                  <Server size={12} /> vps_config.yml
                </div>
                <div className="w-4"></div>
              </div>
              {/* Code */}
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed text-gray-400">
                  <code className="language-yaml">
                    <span className="text-[#F07178]">server</span>:<br/>
                    {`  `}provider: <span className="text-[#C3E88D]">"CodeFlow Cloud"</span><br/>
                    {`  `}region: <span className="text-[#C3E88D]">"Global Edge"</span><br/>
                    <span className="text-[#F07178]">specs</span>:<br/>
                    {`  `}cpu: <span className="text-[#FFCB6B]">8 vCPU High-Freq</span><br/>
                    {`  `}ram: <span className="text-[#FFCB6B]">32GB DDR5</span><br/>
                    {`  `}storage: <span className="text-[#FFCB6B]">NVMe RAID 10</span><br/>
                    <span className="text-[#F07178]">security</span>:<br/>
                    {`  `}- <span className="text-[#C3E88D]">"DDoS Protection"</span><br/>
                    {`  `}- <span className="text-[#C3E88D]">"Automated Backups"</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* ==============================================
              CARD 2: TECH STACK (Back/Front Logic)
             ============================================== */}
          <div 
            onClick={() => setActiveCard('stack')}
            className={`absolute w-full transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1) transform origin-bottom
              ${activeCard === 'stack' 
                ? "z-20 scale-100 translate-x-0 translate-y-0 rotate-0 opacity-100" 
                : "z-10 scale-95 -translate-x-12 -translate-y-6 -rotate-6 opacity-60 cursor-pointer hover:opacity-100 hover:scale-95"
              }`}
          >
            <div className="rounded-xl overflow-hidden bg-[#0F172A] border border-[#334155] shadow-2xl shadow-black/50">
              {/* Header */}
              <div className="bg-[#1E293B] px-4 py-3 flex items-center justify-between border-b border-[#334155]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-[#64748B] text-xs font-mono flex items-center gap-2">
                  <Terminal size={12} /> config.ts
                </div>
                <Copy size={14} className="text-[#64748B]" />
              </div>
              {/* Code */}
              <div className="p-6 overflow-x-auto">
                <pre className="font-mono text-sm leading-relaxed">
                  <code className="language-javascript">
                    <span className="text-[#C77D63]">const</span> <span className="text-[#82AAFF]">CodeFlow_Stack</span> <span className="text-[#89DDFF]">=</span> <span className="text-[#FFCB6B]">{`{`}</span>
                    {`\n  `}
                    <span className="text-[#F07178]">frontend</span><span className="text-[#89DDFF]">:</span> <span className="text-[#FFCB6B]">{`{`}</span>
                    {`\n    `}framework<span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">"Next.js 14"</span>,
                    {`\n    `}style<span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">"Tailwind + Motion"</span>
                    {`\n  `}
                    <span className="text-[#FFCB6B]">{`}`}</span>,<br/>
                    {`  `}
                    <span className="text-[#F07178]">backend</span><span className="text-[#89DDFF]">:</span> <span className="text-[#FFCB6B]">{`{`}</span>
                    {`\n    `}core<span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">"Spring Boot / .NET"</span>,
                    {`\n    `}db<span className="text-[#89DDFF]">:</span> <span className="text-[#C3E88D]">"Postgres + Redis"</span>
                    {`\n  `}
                    <span className="text-[#FFCB6B]">{`}`}</span>
                    {`\n`}
                    <span className="text-[#FFCB6B]">{`}`}</span>;
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}