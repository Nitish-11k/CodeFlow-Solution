"use client";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border-color)] pt-20 pb-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="relative w-48 h-12">
               <Image 
                 src="/Codeflow.png" 
                 alt="CodeFlow Solution" 
                 fill 
                 className="object-contain object-left transition-all"
                 style={{ filter: 'var(--logo-filter)' }} 
               />
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs">
              Engineering the structural backbone of your Next-Gen startups. Backend excellence, redefined.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Github, label: "GitHub" },
                { Icon: Linkedin, label: "LinkedIn" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--gold-primary)] hover:border-[var(--gold-primary)] transition-all"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Infrastructure */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-[var(--gold-primary)]">Architecture</h4>
            <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
              <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">.NET 8 Web API</Link></li>
              <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Microservices</Link></li>
              <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Clean Architecture</Link></li>
              <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Security Layer</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-[var(--gold-primary)]">Resources</h4>
            <ul className="space-y-4 text-sm text-[var(--text-secondary)]">
              <li><Link href="/blog" className="hover:text-[var(--text-primary)] transition-colors">Engineering Blog</Link></li>
              <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">Documentation</Link></li>
              <li><Link href="/admin" className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-2">Admin Console <ExternalLink size={12} /></Link></li>
              <li><Link href="#" className="hover:text-[var(--text-primary)] transition-colors">GitHub Boilerplates</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-[var(--gold-primary)]">Connect</h4>
            <div className="p-6 rounded-[2rem] bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
               <p className="text-xs text-[var(--text-secondary)]">Need a custom backend?</p>
               <a href="mailto:support@codeflow.in" className="flex items-center gap-3 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--gold-primary)] transition-all">
                  <Mail size={16} /> Contact Engineering
               </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border-color)] pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[var(--text-secondary)] text-xs font-mono">
            &copy; {currentYear} FounderKit by CodeFlow Solution. Built for Builders.
          </p>
          <div className="flex gap-8 text-[var(--text-secondary)] text-xs font-bold uppercase tracking-widest">
             <Link href="#" className="hover:text-[var(--gold-primary)]">Privacy Policy</Link>
             <Link href="#" className="hover:text-[var(--gold-primary)]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}