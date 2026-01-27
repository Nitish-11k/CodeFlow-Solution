"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Import Router
import { Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const router = useRouter(); // ✅ Init Router

  // ✅ Same Logic as Navbar
  const scrollTo = (id: string) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        router.push(`/?section=${id}`);
    }
  };

  return (
    <footer className="bg-[#020617] border-t border-white/10 pt-16 pb-8 relative overflow-hidden text-gray-400">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B365D]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative w-40 h-12">
               <Image 
                src="/Codeflow.png" 
                alt="CodeFlow Solution" 
                fill 
                className="object-contain object-left" 
              />
            </Link>
            <p className="text-sm leading-relaxed pr-4 text-gray-500">
              Crafting digital excellence through pre-built founder kits, robust microservices, and enterprise-grade cloud hosting.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/company/codeflow-solution/" target="_blank" className="text-gray-400 hover:text-[#0077B5] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
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

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <button onClick={() => scrollTo('mission')} className="hover:text-[#D4AF37] transition-colors text-left">
                  Our Aim
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <a href="mailto:solutioncodeflow@gmail.com" className="hover:text-white transition-colors">
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CodeFlow Solution. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}