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
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-500">
      <Navbar />
      
      {/* Background Hero Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[var(--gold-primary)]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
        
        {/* Navigation */}
        <Link href="/#kits" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--gold-primary)] mb-12 transition-colors font-bold">
          <ArrowLeft size={18} /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-6 mb-20 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Elite <span className="text-[var(--gold-primary)]">VPS</span> Engineering
          </h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-medium">
            We don't just provide space—we engineer environments. Our VPS solutions are built for high-concurrency production applications that demand zero-compromise performance.
          </p>
        </div>

        {/* Technical Specs Grill */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          
          {/* Performance Card */}
          <div className="bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-color)] p-10 rounded-[2.5rem] space-y-6 hover:bg-[var(--card-hover)] transition-all group shadow-lg">
             <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-600 border border-purple-500/20 group-hover:scale-110 transition-transform">
               <Cpu size={28} />
             </div>
             <h3 className="text-2xl font-black">Compute Power</h3>
             <ul className="space-y-4">
               {[
                 "Dedicated vCPUs (x86 & ARM)",
                 "Up to 24 Core Parallelism",
                 "High-Performance Clock Speeds"
               ].map((item) => (
                 <li key={item} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm font-bold">
                   <CheckCircle2 size={16} className="text-[var(--gold-primary)]" /> {item}
                 </li>
               ))}
             </ul>
          </div>

          {/* Memory & Storage */}
          <div className="bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-color)] p-10 rounded-[2.5rem] space-y-6 hover:bg-[var(--card-hover)] transition-all group shadow-lg">
             <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-600 border border-green-500/20 group-hover:scale-110 transition-transform">
               <HardDrive size={28} />
             </div>
             <h3 className="text-2xl font-black">Memory & Storage</h3>
             <ul className="space-y-4">
               {[
                 "DDR5 ECC Error-Correcting RAM",
                 "Tier-1 NVMe SSD Storage",
                 "High-Durability Backups"
               ].map((item) => (
                 <li key={item} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm font-bold">
                   <CheckCircle2 size={16} className="text-[var(--gold-primary)]" /> {item}
                 </li>
               ))}
             </ul>
          </div>

          {/* Networking */}
          <div className="bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-color)] p-10 rounded-[2.5rem] space-y-6 hover:bg-[var(--card-hover)] transition-all group shadow-lg">
             <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-500/20 group-hover:scale-110 transition-transform">
               <Network size={28} />
             </div>
             <h3 className="text-2xl font-black">Connectivity</h3>
             <ul className="space-y-4">
               {[
                 "2.5 Gbps / 3 Gbps Port Speeds",
                 "Global Region Availability",
                 "Low-Latency Multi-VLAN Support"
               ].map((item) => (
                 <li key={item} className="flex items-center gap-3 text-[var(--text-secondary)] text-sm font-bold">
                   <CheckCircle2 size={16} className="text-[var(--gold-primary)]" /> {item}
                 </li>
               ))}
             </ul>
          </div>

        </div>

        {/* Tiers Section */}
        <div className="mb-24 space-y-12">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-4xl font-black">Architecture <span className="text-[var(--gold-primary)]">Tiers</span></h2>
            <p className="text-[var(--text-secondary)] max-w-2xl font-medium">Choose the foundation that aligns with your user engineering requirements.</p>
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
                color: "border-[var(--gold-primary)]",
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
                className={`group relative p-10 rounded-[2.5rem] bg-[var(--card-bg)] backdrop-blur-2xl border transition-all hover:bg-[var(--card-hover)] flex flex-col ${tier.color} ${tier.highlight ? 'ring-2 ring-[var(--gold-primary)]/50 shadow-2xl' : 'shadow-lg'}`}
              >
                <div className="mb-10">
                  <div className="text-[10px] font-black tracking-[0.2em] mb-2 text-[var(--gold-primary)] uppercase">{tier.tag}</div>
                  <h3 className="text-3xl font-black text-[var(--text-primary)]">{tier.name}</h3>
                </div>

                <div className="space-y-6 flex-1">
                  {tier.specs.map((s) => (
                    <div key={s.label} className="flex items-center justify-between py-3 border-b border-[var(--border-color)]">
                      <span className="text-[10px] text-[var(--text-secondary)] font-mono uppercase tracking-widest">{s.label}</span>
                      <span className="text-sm font-black text-[var(--text-primary)]">{s.val}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                   <div className="p-5 bg-[var(--background)]/40 rounded-2xl flex items-center gap-3 border border-[var(--border-color)]">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-600">
                         <Activity size={20} />
                      </div>
                      <div className="text-[10px] text-[var(--text-secondary)] leading-tight font-bold uppercase tracking-wider">
                        Optimized for <br /><span className="text-[var(--text-primary)] font-black">{tier.name.split(' ')[0]} Workloads</span>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative p-12 md:p-20 rounded-[3rem] bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden text-center shadow-2xl">
           <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5 pointer-events-none" />
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-black">Ready to Deploy?</h2>
              <p className="text-[var(--text-secondary)] font-medium text-lg">
                Our engineering team will help you choose the right architecture for your specific application workload. Let's build your foundation together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={supportLink}
                  target="_blank"
                  className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white font-black rounded-2xl hover:brightness-110 transition-all flex items-center justify-center gap-4 transform hover:-translate-y-1 shadow-xl uppercase tracking-widest text-xs"
                >
                  <MessageCircle size={24} /> Discuss Architecture
                </a>
              </div>
           </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
