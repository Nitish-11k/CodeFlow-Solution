"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { 
  ShieldAlert, Lock, Activity, Terminal, ExternalLink, 
  MapPin, Search, Filter, RefreshCw, AlertTriangle, KeyRound, User 
} from "lucide-react";

export default function AdminDashboard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const logs = [
    { id: "LOG-9281", kit: "Nexus Integrator", ip: "192.168.1.45", region: "Mumbai, IN", status: "Success", type: "Installation", time: "2 mins ago" },
    { id: "LOG-9280", kit: "Bespoke Forge", ip: "45.12.89.21", region: "London, UK", status: "Success", type: "Requirement Generated", time: "15 mins ago" },
    { id: "LOG-9279", kit: "D-Secure Mobile", ip: "103.4.11.90", region: "Singapore", status: "Warning", type: "API Handshake", time: "1 hour ago" },
    { id: "LOG-9278", kit: "Nexus Integrator", ip: "82.34.112.5", region: "Frankfurt, DE", status: "Success", type: "Blueprint Export", time: "3 hours ago" },
    { id: "LOG-9277", kit: "FounderKit Core", ip: "201.5.0.122", region: "New York, US", status: "Success", type: "DB Migration", time: "5 hours ago" },
    { id: "LOG-9276", kit: "Bespoke Forge", ip: "103.4.11.90", region: "Singapore", status: "Failed", type: "Auth Attempt", time: "6 hours ago" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = username.toLowerCase();
    if ((user === "nitish" || user === "nits") && (password === "NickKnowslog12" || password === "NitishKnowslog12")) {
      setIsAuthorized(true);
      setError("");
    } else {
      setError("Invalid credentials. System access denied.");
    }
  };

  if (!isClient) return null; // Prevent hydration mismatch

  if (!isAuthorized) {
    return (
      <main className="min-h-screen bg-[var(--background)] flex items-center justify-center p-6 transition-colors duration-500 relative overflow-hidden">
        {/* Decorative Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-5 pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--gold-primary)]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-md w-full p-10 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-color)] shadow-2xl relative z-10 transition-all duration-500">
           <div className="w-20 h-20 bg-[var(--gold-primary)]/10 rounded-3xl flex items-center justify-center text-[var(--gold-primary)] mx-auto mb-8 border border-[var(--gold-primary)]/20 rotate-3 shadow-inner">
              <ShieldAlert size={36} />
           </div>
           
           <h1 className="text-3xl font-black text-[var(--text-primary)] mb-2 text-center tracking-tight">Admin Console</h1>
           <p className="text-[var(--text-secondary)] mb-8 text-center text-sm font-medium">Enter structural credentials to access telemetry.</p>
           
           <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
                 <input 
                   type="text" 
                   placeholder="Username" 
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                   className="w-full bg-[var(--background)] border border-[var(--border-color)] rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-[var(--gold-primary)] transition-all text-[var(--text-primary)] shadow-sm placeholder:text-[var(--text-secondary)]/50"
                   required
                 />
              </div>
              <div className="relative">
                 <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={18} />
                 <input 
                   type="password" 
                   placeholder="Security Password" 
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className="w-full bg-[var(--background)] border border-[var(--border-color)] rounded-2xl pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-[var(--gold-primary)] transition-all text-[var(--text-primary)] shadow-sm placeholder:text-[var(--text-secondary)]/50"
                   required
                 />
              </div>
              
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 text-xs rounded-xl flex items-center gap-2 font-bold animate-pulse">
                  <AlertTriangle size={14} /> {error}
                </div>
              )}

              <button 
                type="submit"
                className="w-full py-4 bg-[var(--gold-primary)] text-white font-black rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_10px_20px_-10px_rgba(217,119,6,0.5)] mt-4 uppercase tracking-widest text-xs"
              >
                Unlock Architecture
              </button>
           </form>
           
           <button 
             onClick={() => window.location.href = "/"}
             className="w-full mt-6 py-2 text-[var(--text-secondary)] text-xs font-bold hover:text-[var(--text-primary)] transition-all uppercase tracking-widest"
           >
             Return to Public View
           </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-500">
      <Navbar />

      <div className="pt-32 pb-20 px-6 lg:px-10 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
           <div className="space-y-4">
             <div className="inline-flex items-center gap-3 px-3 py-1 bg-[var(--gold-primary)]/10 border border-[var(--gold-primary)]/20 rounded-full text-[var(--gold-primary)] font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
                <ShieldAlert size={12} /> System Administrator
             </div>
             <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
               Control <span className="text-[var(--gold-primary)]">Console</span>
             </h1>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="hidden md:flex flex-col items-end px-4 border-r border-[var(--border-color)]">
                 <span className="text-[10px] text-[var(--text-secondary)] font-mono uppercase tracking-widest mb-1">System Status</span>
                 <span className="text-sm font-bold text-green-500 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    All Systems Operational
                 </span>
              </div>
              <button 
                onClick={() => window.location.reload()}
                className="p-3 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-xl hover:bg-[var(--card-hover)] transition-all text-[var(--text-secondary)] shadow-sm"
              >
                 <RefreshCw size={20} />
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
           {[
             { label: "Active Deployments", val: "421", color: "text-blue-500" },
             { label: "Telemetric Logs", val: "12,940", color: "text-purple-500" },
             { label: "Unique Users", val: "842", color: "text-green-500" },
             { label: "Security Alerts", val: "03", color: "text-red-500" },
           ].map((stat) => (
             <div key={stat.label} className="p-8 rounded-[2rem] bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm hover:shadow-md transition-all">
                <p className="text-[10px] text-[var(--text-secondary)] font-mono mb-4 uppercase tracking-[0.2em]">{stat.label}</p>
                <p className={`text-4xl font-black ${stat.color}`}>{stat.val}</p>
             </div>
           ))}
        </div>

        <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-[2.5rem] overflow-hidden shadow-2xl">
           <div className="p-8 border-b border-[var(--border-color)] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-[var(--gold-primary)]/10 rounded-2xl flex items-center justify-center text-[var(--gold-primary)] shadow-inner">
                    <Terminal size={24} />
                 </div>
                 <div>
                    <h3 className="text-2xl font-black text-[var(--text-primary)]">Telemetric Logs</h3>
                    <p className="text-xs text-[var(--text-secondary)] font-medium">Live FounderKit deployment streams</p>
                 </div>
              </div>

              <div className="flex items-center gap-3">
                 <div className="relative">
                    <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
                    <input 
                      type="text" 
                      placeholder="Search architecture..." 
                      className="bg-[var(--background)] border border-[var(--border-color)] rounded-2xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[var(--gold-primary)] transition-all w-full md:w-64 text-[var(--text-primary)] shadow-inner"
                    />
                 </div>
                 <button className="flex items-center gap-2 px-6 py-3 bg-[var(--background)] border border-[var(--border-color)] rounded-2xl text-xs font-bold hover:bg-[var(--card-hover)] transition-all text-[var(--text-primary)] shadow-sm">
                    <Filter size={14} /> Filter
                 </button>
              </div>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="bg-[var(--background)]/50 text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-[0.2em]">
                       <th className="px-10 py-6 border-b border-[var(--border-color)] font-black">Timestamp</th>
                       <th className="px-10 py-6 border-b border-[var(--border-color)] font-black">Kit Identity</th>
                       <th className="px-10 py-6 border-b border-[var(--border-color)] font-black">Logic Type</th>
                       <th className="px-10 py-6 border-b border-[var(--border-color)] font-black">Source IP</th>
                       <th className="px-10 py-6 border-b border-[var(--border-color)] font-black">Region</th>
                       <th className="px-10 py-6 border-b border-[var(--border-color)] font-black">Status</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-[var(--border-color)]">
                    {logs.map((log) => (
                       <tr key={log.id} className="hover:bg-[var(--background)] transition-colors group">
                          <td className="px-10 py-8">
                             <span className="text-xs text-[var(--text-secondary)] font-mono">{log.time}</span>
                          </td>
                          <td className="px-10 py-8">
                             <div className="font-black text-sm text-[var(--text-primary)]">{log.kit}</div>
                             <div className="text-[10px] text-[var(--text-secondary)] font-mono uppercase mt-1 opacity-70">ID: {log.id}</div>
                          </td>
                          <td className="px-10 py-8">
                             <span className="px-4 py-1.5 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] rounded-full text-[10px] font-black border border-[var(--gold-primary)]/20 shadow-sm uppercase tracking-wider">
                                {log.type}
                             </span>
                          </td>
                          <td className="px-10 py-8 font-mono text-xs text-[var(--text-secondary)]">
                             {log.ip}
                          </td>
                          <td className="px-10 py-8">
                             <div className="flex items-center gap-3 text-sm font-bold text-[var(--text-primary)]">
                                <MapPin size={14} className="text-red-500" /> {log.region}
                             </div>
                          </td>
                          <td className="px-10 py-8">
                             <div className={`flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] ${
                                log.status === "Success" ? "text-green-500" : 
                                log.status === "Warning" ? "text-yellow-500" : "text-red-500"
                             }`}>
                                <div className={`w-2.5 h-2.5 rounded-full animate-pulse shadow-sm ${
                                    log.status === "Success" ? "bg-green-500" : 
                                    log.status === "Warning" ? "bg-yellow-500" : "bg-red-500"
                                }`} />
                                {log.status}
                             </div>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           <div className="p-10 bg-[var(--background)]/30 text-center border-t border-[var(--border-color)]">
              <button className="text-xs font-black text-[var(--gold-primary)] hover:text-[var(--text-primary)] transition-all flex items-center justify-center gap-4 mx-auto uppercase tracking-[0.3em] bg-[var(--background)] px-10 py-4 rounded-2xl border border-[var(--border-color)] shadow-lg hover:shadow-[var(--gold-primary)]/10">
                 Load Network Archives <ExternalLink size={14} />
              </button>
           </div>
        </div>
      </div>
    </main>
  );
}
