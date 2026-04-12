"use client";
import { CheckCircle2, Shield, Zap } from "lucide-react";

export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-[var(--background)] relative border-y border-[var(--border-color)] transition-colors duration-500">
      <h2 className="sr-only">Our Core Values</h2>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center text-[#D4AF37] mx-auto md:mx-0">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">Unmatched Speed</h3>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            Pre-configured .NET 8 templates with production-grade dependencies to shave off weeks of development.
          </p>
        </div>

        <div className="space-y-4">
          <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mx-auto md:mx-0">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">Secure by Design</h3>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            Enterprise Identity, JWT, and RBAC baked into every kit to ensure your data stays protected from Day 1.
          </p>
        </div>

        <div className="space-y-4">
          <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500 mx-auto md:mx-0">
            <CheckCircle2 size={24} />
          </div>
          <h3 className="text-xl font-bold text-[var(--text-primary)]">Proven Architecture</h3>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            Battle-tested Clean Architecture principles used by top-tier engineering teams worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}