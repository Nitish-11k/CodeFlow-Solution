"use client";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  
  const scrollTo = (id: string) => {
    if (window.location.pathname !== '/') {
        window.location.href = '/#' + id;
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
  };

  return (
    // UPDATED: Background changed to #FDFCF8 (Hero Color) and Text to Dark Blue
    <footer className="bg-[#FDFCF8] border-t border-[#E2E8F0] pt-16 pb-8 relative overflow-hidden">
      
      {/* Optional: Subtle Background Gradients like Hero */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B365D]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* --- BRAND SECTION --- */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative w-40 h-12">
               <Image 
                src="/Codeflow.png" 
                alt="CodeFlow Solution" 
                fill 
                className="object-contain object-left" 
              />
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed pr-4">
              Crafting digital excellence through pre-built founder kits, robust microservices, and enterprise-grade cloud hosting.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/company/codeflow-solution/" target="_blank" className="text-[#64748B] hover:text-[#0077B5] transition-colors">
                <Linkedin size={20} />
              </a>
              {/* <a href="https://twitter.com" target="_blank" className="text-[#64748B] hover:text-[#1DA1F2] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-[#64748B] hover:text-[#E1306C] transition-colors">
                <Instagram size={20} />
              </a> */}
            </div>
          </div>

          {/* --- SERVICES --- */}
          <div>
            <h3 className="text-lg font-bold text-[#1B365D] mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-[#64748B]">
              <li>
                <button onClick={() => scrollTo('kits')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Founder Kits
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('hosting')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Cloud Hosting (VPS)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('stack')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Tech Stack Consulting
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('kits')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Custom Development
                </button>
              </li>
            </ul>
          </div>

          {/* --- COMPANY --- */}
          <div>
            <h3 className="text-lg font-bold text-[#1B365D] mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-[#64748B]">
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <button onClick={() => scrollTo('mission')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Our Aim
                </button>
              </li>
              {/* <li>
                <Link href="/privacy" className="hover:text-[#D4AF37] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#D4AF37] transition-colors">
                  Terms of Service
                </Link>
              </li> */}
            </ul>
          </div>

          {/* --- CONTACT --- */}
          <div>
            <h3 className="text-lg font-bold text-[#1B365D] mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-[#64748B]">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <a href="mailto:solutioncodeflow@gmail.com" className="hover:text-[#1B365D] transition-colors">
                  solutioncodeflow@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>
                  Delhi, India<br/>
                  (Remote First Agency)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#94A3B8]">
          <p>© {new Date().getFullYear()} CodeFlow Solution. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#1B365D] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#1B365D] transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-[#1B365D] transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}