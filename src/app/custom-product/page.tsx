"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, CheckCircle2, ArrowLeft, Loader2, FileCode, FolderTree, Database, Cpu, Download } from "lucide-react";
import Link from "next/link";

export default function CustomProductPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "SaaS Platform",
    users: "Up to 1,000 users",
    business: "",
    backend: ".NET Core (Recommended for scale)",
    database: "SQL Server",
    infrastructure: "Azure (Microsoft)",
    auth: "",
    userFields: "",
    businessTables: "",
    details: "",
    timeline: "< 1 Month"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  // --- Dynamic Generators ---
  const getSqlSchema = () => {
    const userFields = formData.userFields || "Name, Email, CreatedAt";
    const tables = formData.businessTables.split(',').map(t => t.trim()).filter(t => t);
    
    let sql = `-- Generated SQL for ${formData.project}\n`;
    sql += `CREATE TABLE Users (\n  UserId INT PRIMARY KEY IDENTITY(1,1),\n`;
    userFields.split(',').forEach(field => {
       sql += `  ${field.trim().replace(/\s+/g, '')} NVARCHAR(MAX),\n`;
    });
    sql += `  IsActive BIT DEFAULT 1,\n  PasswordHash VARBINARY(MAX)\n);\n\n`;

    tables.forEach(table => {
      sql += `CREATE TABLE ${table} (\n  ${table}Id INT PRIMARY KEY IDENTITY(1,1),\n  UserId INT FOREIGN KEY REFERENCES Users(UserId),\n  Name NVARCHAR(255),\n  CreatedAt DATETIME DEFAULT GETDATE()\n);\n\n`;
    });
    return sql;
  };

  const getFolderStructure = () => [
    { name: `FounderKit.${formData.project.replace(/\s+/g, '')}.API`, type: 'folder' },
    { name: `FounderKit.${formData.project.replace(/\s+/g, '')}.Core`, type: 'folder' },
    { name: `FounderKit.${formData.project.replace(/\s+/g, '')}.Infrastructure`, type: 'folder' },
    { name: "Migrations", type: 'folder' },
    { name: "appsettings.json", type: 'file' },
    { name: "Program.cs", type: 'file' }
  ];

  if (submitted) {
    return (
      <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
        <Navbar />
        <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[var(--card-bg)] p-8 rounded-3xl border border-green-500/20">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 border border-green-500/30">
                <CheckCircle2 size={32} />
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-bold">Architecture Generated!</h1>
                <p className="text-[var(--text-secondary)]">Your custom FounderKit blueprints are ready for review.</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-[#D4AF37] text-[var(--background)] font-bold rounded-xl flex items-center gap-2 hover:bg-white transition-all">
              <Download size={18} /> Download Blueprint (.zip)
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Folder Structure */}
            <div className="lg:col-span-1 border border-white/10 rounded-3xl p-6 bg-[var(--card-bg)]">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <FolderTree className="text-[#D4AF37]" size={20} /> Folder Hierarchy
              </h3>
              <div className="space-y-3 font-mono text-sm overflow-hidden">
                {getFolderStructure().map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    {item.type === 'folder' ? <FolderTree size={16} className="text-blue-400" /> : <FileCode size={16} className="text-green-400" />}
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Code Snippets */}
            <div className="lg:col-span-2 space-y-6">
              <div className="border border-white/10 rounded-3xl p-6 bg-[var(--background)]">
                 <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                   <Database className="text-[#D4AF37]" size={20} /> Generated Database Schema (SQL)
                 </h3>
                 <pre className="p-4 bg-[var(--background)]/40 rounded-xl text-green-400 text-xs overflow-x-auto border border-white/5">
                    {getSqlSchema()}
                 </pre>
              </div>

              <div className="border border-white/10 rounded-3xl p-6 bg-[var(--card-bg)]">
                 <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                   <Cpu className="text-purple-400" size={20} /> System Analysis
                 </h3>
                 <div className="grid grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-[#D4AF37] font-bold">Scaling Strategy</p>
                      <p>Horizontal Pod Autoscaling on {formData.infrastructure}</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl">
                      <p className="text-[#D4AF37] font-bold">Caching Layer</p>
                      <p>Redis implementation for {formData.users}</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>

          <div className="text-center">
            <button onClick={() => setSubmitted(false)} className="text-gray-500 hover:text-[var(--text-primary)] flex items-center gap-2 mx-auto transition-colors">
              <ArrowLeft size={16} /> Edit Requirements
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <Link href="/#kits" className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[#D4AF37] mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to Services
        </Link>
        
        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Custom Product Engineering</h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Tell us about your vision. We'll build the architecture to make it a reality.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-[var(--card-bg)] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
          {/* Contact Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[var(--text-secondary)]">Name</label>
              <input 
                required
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">Email Address</label>
              <input 
                required
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
          </div>

          {/* Project & Business Plan */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="project" className="text-sm font-medium text-[var(--text-secondary)]">Project Type</label>
              <select 
                id="project" 
                value={formData.project}
                onChange={handleChange}
                className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
              >
                <option>SaaS Platform</option>
                <option>Fintech Solution</option>
                <option>E-commerce Engine</option>
                <option>Internal Admin Tools</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="users" className="text-sm font-medium text-[var(--text-secondary)]">User Capacity (Expected Users)</label>
              <select 
                id="users" 
                value={formData.users}
                onChange={handleChange}
                className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
              >
                <option>Up to 1,000 users</option>
                <option>1,000 - 10,000 users</option>
                <option>10,000 - 100,000 users</option>
                <option>100,000+ (Enterprise Scale)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="business" className="text-sm font-medium text-[var(--text-secondary)]">Business Plan & Vision</label>
            <textarea 
              required
              id="business" 
              value={formData.business}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your business goals and how this product fits into your plan..."
              className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
            ></textarea>
          </div>

          {/* Technical Specs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="backend" className="text-sm font-medium text-[var(--text-secondary)]">Backend Preference</label>
              <select 
                id="backend" 
                value={formData.backend}
                onChange={handleChange}
                className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
              >
                <option>.NET Core (Recommended for scale)</option>
                <option>Node.js / TypeScript</option>
                <option>Python (FastAPI/Django)</option>
                <option>Go (Golang)</option>
                <option>Decide for me</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="database" className="text-sm font-medium text-[var(--text-secondary)]">Database Requirements</label>
              <input 
                type="text" 
                id="database" 
                value={formData.database}
                onChange={handleChange}
                placeholder="SQL Server, PostgreSQL, MongoDB, etc."
                className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <div className="space-y-2">
              <label htmlFor="infrastructure" className="text-sm font-medium text-[var(--text-secondary)]">Infrastructure (VPS/API/Cloud)</label>
              <select 
                id="infrastructure" 
                value={formData.infrastructure}
                onChange={handleChange}
                className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
              >
                <option>AWS (Amazon Web Services)</option>
                <option>Azure (Microsoft)</option>
                <option>DigitalOcean (VPS)</option>
                <option>Self-hosted Linux VPS</option>
                <option>Decide for me</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="timeline" className="text-sm font-medium text-[var(--text-secondary)]">Expected Timeline</label>
              <select 
                id="timeline" 
                value={formData.timeline}
                onChange={handleChange}
                className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
              >
                <option>&lt; 1 Month</option>
                <option>1-3 Months</option>
                <option>3-6 Months</option>
                <option>6+ Months</option>
              </select>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/5">
            <h3 className="text-lg font-bold text-[#D4AF37]">Data & Authentication Schema</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="auth" className="text-sm font-medium text-[var(--text-secondary)]">Authentication Requirements</label>
                <textarea 
                  id="auth" 
                  value={formData.auth}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. Email/Password, Social Login (Google/Apple), Two-Factor Auth (OTP), Single Sign-On..."
                  className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                ></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="userFields" className="text-sm font-medium text-[var(--text-secondary)]">User Profile Fields</label>
                <textarea 
                  id="userFields" 
                  value={formData.userFields}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. Name, Email, Phone, Address"
                  className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="businessTables" className="text-sm font-medium text-[var(--text-secondary)]">Business Domain Entities (Tables)</label>
              <textarea 
                id="businessTables" 
                value={formData.businessTables}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. Orders, Products, Subscriptions"
                className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
              ></textarea>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="details" className="text-sm font-medium text-[var(--text-secondary)]">Additional Requirements & Technical Constraints</label>
            <textarea 
              required
              id="details" 
              value={formData.details}
              onChange={handleChange}
              rows={4}
              placeholder="Describe user roles, core features, or any specific technical constraints..."
              className="w-full bg-[var(--background)] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            disabled={loading}
            type="submit" 
            className="w-full py-4 bg-[#D4AF37] text-[var(--background)] font-bold rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                Generate Custom Architecture <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>

      <Footer />
    </main>
  );
}
