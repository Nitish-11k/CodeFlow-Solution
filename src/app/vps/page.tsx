"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  ArrowLeft, Server, Cpu, Database, Shield, Zap, Globe, 
  CheckCircle2, Activity, HardDrive, Network, Lock, MessageCircle
} from "lucide-react";

export default function VPSPage() {
  const supportLink = `https://wa.me/918178748796?text=${encodeURIComponent("Hi FounderKit, I am interested in your Elite VPS solutions. Can we discuss technical requirements?")}`;

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />
      
      {/* Background Hero Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* Navigation */}
        <Link href="/#kits" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[#D4AF37] mb-12 transition-colors">
          <ArrowLeft size={18} /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-20 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Elite <span className="text-[#D4AF37]">VPS</span> Engineering
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            We don't just provide space—we engineer environments. Our VPS solutions are built for high-concurrency production applications that demand zero-compromise performance.
          </p>
        </div>

        {/* Technical Specs Grill - Glassmorphism */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          
          {/* Performance Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] space-y-6 hover:bg-white/[0.08] transition-all group">
             <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
               <Cpu size={28} />
             </div>
             <h3 className="text-2xl font-bold">Compute Power</h3>
             <ul className="space-y-3">
               <li className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                 <CheckCircle2 size={16} className="text-[#D4AF37]" /> Dedicated vCPUs (x86 & ARM)
               </li>
               <li className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                 <CheckCircle2 size={16} className="text-[#D4AF37]" /> Up to 24 Core Parallelism
               </li>
               <li className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                 <CheckCircle2 size={16} className="text-[#D4AF37]" /> High-Performance Clock Speeds
               </li>
             </ul>
          </div>

          {/* Memory & Storage */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] space-y-6 hover:bg-white/[0.08] transition-all group">
             <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-400 border border-green-500/20 group-hover:scale-110 transition-transform">
               <HardDrive size={28} />
             </div>
             <h3 className="text-2xl font-bold">Memory & Storage</h3>
             <ul className="space-y-3">
               <li className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                 <CheckCircle2 size={16} className="text-[#D4AF37]" /> DDR5 ECC Error-Correcting RAM
               </li>
               <li className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                 <CheckCircle2 size={16} className="text-[#D4AF37]" /> Tier-1 NVMe SSD Storage
               </li>
               <li className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                 <CheckCircle2 size={16} className="text-[#D4AF37]" /> High-Durability Backups
               </li>
             </ul>
          </div>

          {/* Networking */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] space-y-6 hover:bg-white/[0.08] transition-all group">
             <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
               <Network size={28} />
             </div>
             <h3 className="text-2xl font-bold">Connectivity</h3>
             <ul className="space-y-3">
               <li className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                 <CheckCircle2 size={16} className="text-[#D4AF37]" /> 2.5 Gbps / 3 Gbps Port Speeds
               </li>
               <li className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                 <CheckCircle2 size={16} className="text-[#D4AF37]" /> Global Region Availability
               </li>
               <li className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                 <CheckCircle2 size={16} className="text-[#D4AF37]" /> Low-Latency Multi-VLAN Support
               </li>
             </ul>
          </div>

        </div>

        {/* Tiers Section */}
        <div className="mb-24 space-y-12">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-4xl font-black">Architecture <span className="text-[#D4AF37]">Tiers</span></h2>
            <p className="text-[var(--text-secondary)] max-w-2xl">Choose the foundation that aligns with your user engineering requirements.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Small Foundation",
                specs: [
                  { label: "vCPU", val: "Up to 2 Cores" },
                  { label: "RAM", val: "1 - 2 GB DDR4" },
                  { label: "Storage", val: "40 GB NVMe" },
                  { label: "Bandwidth", val: "20 TB Transfer" },
                  { label: "User Capacity", val: "Up to 1,000 Users" },
                  { label: "Uptime SLA", val: "99.9% Baseline" },
                ],
                tag: "Microservices",
                color: "border-blue-500/30"
              },
              {
                name: "Professional Scale",
                specs: [
                  { label: "vCPU", val: "4 - 8 Cores (Dedicated)" },
                  { label: "RAM", val: "8 - 16 GB ECC" },
                  { label: "Storage", val: "256 GB NVMe Tier-1" },
                  { label: "Bandwidth", val: "2.5 Gbps Unmetered" },
                  { label: "User Capacity", val: "1,000 - 50,000 Users" },
                  { label: "Uptime SLA", val: "99.99% High-AV" },
                ],
                tag: "Recommended for SaaS",
                color: "border-[#D4AF37]",
                highlight: true
              },
              {
                name: "Advanced Elite",
                specs: [
                  { label: "vCPU", val: "18 - 24 High-Perf Cores" },
                  { label: "RAM", val: "Up to 96 GB DDR5" },
                  { label: "Storage", val: "700 GB + RAID Mirroring" },
                  { label: "Bandwidth", val: "3 Gbps Unlimited" },
                  { label: "User Capacity", val: "100,000+ (High Traffic)" },
                  { label: "Uptime SLA", val: "99.99% Premium" },
                ],
                tag: "Enterprise Performance",
                color: "border-purple-500/30"
              }
            ].map((tier) => (
              <div 
                key={tier.name} 
                className={`group relative p-8 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border transition-all hover:bg-white/[0.08] flex flex-col ${tier.color} ${tier.highlight ? 'ring-2 ring-[#D4AF37]/50 shadow-[0_0_50px_-12px_rgba(212,175,55,0.2)]' : ''}`}
              >
                <div className="mb-8">
                  <div className="text-[10px] font-bold tracking-[0.2em] mb-2 text-[#D4AF37] opacity-80 uppercase">{tier.tag}</div>
                  <h3 className="text-2xl font-black">{tier.name}</h3>
                </div>

                <div className="space-y-6 flex-1">
                  {tier.specs.map((s) => (
                    <div key={s.label} className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-xs text-[var(--text-secondary)] font-mono">{s.label}</span>
                      <span className="text-sm font-bold text-gray-200">{s.val}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                   <div className="p-4 bg-[var(--background)]/30 rounded-2xl flex items-center gap-3 border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                         <Activity size={16} />
                      </div>
                      <div className="text-[10px] text-[var(--text-secondary)] leading-tight">
                        Optimized for <span className="text-[var(--text-primary)] font-bold">{tier.name.split(' ')[0]} Workloads</span>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black">Architecture Scoring</h2>
            <div className="space-y-6">
              {[
                { label: "Performance Score", score: "96/100", width: "w-[96%]" },
                { label: "Uptime Availability", score: "99.99%", width: "w-[99%]" },
                { label: "Security Compliance", score: "98/100", width: "w-[98%]" },
              ].map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--text-secondary)] font-mono">{metric.label}</span>
                    <span className="text-[#D4AF37] font-bold">{metric.score}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-[#D4AF37] to-blue-500 ${metric.width} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-[#1B365D] p-10 rounded-[2.5rem] border border-[#D4AF37]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="text-[#D4AF37]" /> Enterprise Security
            </h3>
            <p className="text-blue-100/70 leading-relaxed mb-8">
              Every instance is fortified with industry-leading compliance protocols including ISO 27001 and SOC 2 Type II logic. We provide proactive DDoS protection and Cloud Firewalls by default.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-[var(--background)]/20 rounded-2xl text-center">
                <p className="text-xs text-blue-300 mb-1">DDoS Mitigation</p>
                <p className="font-bold">L3 / L4 / L7</p>
              </div>
              <div className="p-4 bg-[var(--background)]/20 rounded-2xl text-center">
                <p className="text-xs text-blue-300 mb-1">Monitoring</p>
                <p className="font-bold">24/7/365</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-[var(--card-bg)] to-[var(--background)] border border-white/5 overflow-hidden text-center">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-black">Ready to Deploy?</h2>
              <p className="text-[var(--text-secondary)]">
                Our engineering team will help you choose the right architecture for your specific application workload. Let's build your foundation together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={supportLink}
                  target="_blank"
                  className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-[var(--text-primary)] font-bold rounded-2xl hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1 shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={20} /> Discuss Architecture
                </a>
              </div>
           </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
