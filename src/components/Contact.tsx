"use client";
import { useState } from "react";
import { Mail, MessageSquare, Linkedin, ArrowRight, Send, Loader2, CheckCircle, Bug } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  
  const [formData, setFormData] = useState({ name: "", email: "", requirement: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.requirement) return;
    setLoading(true);
    // ... (Keep existing fetch logic same) ...
    // Simulating success for UI demo
    setTimeout(() => { setSuccess(true); setLoading(false); }, 1000);
  };

  return (
    // ✅ Main BG: Dark Navy
    <section id="contact" className="py-24 bg-[#020617] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: Info --- */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                <MessageSquare size={12} /> Support & Feedback
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to launch <br/>
                <span className="text-[#D4AF37]">your dream?</span>
              </h2>
              
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed max-w-md">
                <p>Have a custom requirement? Drop us a message.</p>
                <div className="flex gap-3 pt-2">
                   <Bug className="text-[#D4AF37] shrink-0 mt-1" size={20} />
                   <p className="text-sm text-gray-500">
                     <strong>Found a bug?</strong> Let us know. We love feedback!
                   </p>
                </div>
              </div>
            </div>

            {/* Email Contact */}
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#D4AF37]">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email us at</p>
                <p className="text-xl font-bold text-white">solutioncodeflow@gmail.com</p>
              </div>
            </div>
          </div>


          {/* --- RIGHT SIDE: The Form (Dark Mode) --- */}
          <div className="bg-[#0F172A]/50 border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-black/50 relative min-h-[500px] flex flex-col justify-center backdrop-blur-sm">
            
            <AnimatePresence mode="wait">
              {success ? (
                 <motion.div 
                    key="success"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex flex-col items-center text-center space-y-6"
                 >
                    <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-lg">We will reply shortly.</p>
                 </motion.div>
              ) : (
                <motion.div 
                   key="form"
                   initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-400 ml-1">Name</label>
                        <input 
                          type="text" name="name" required value={formData.name} onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full p-4 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-400 ml-1">Email</label>
                        <input 
                          type="email" name="email" required value={formData.email} onChange={handleChange}
                          placeholder="john@startup.com"
                          className="w-full p-4 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-400 ml-1">Requirement</label>
                      <textarea 
                        name="requirement" required value={formData.requirement} onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="w-full p-4 rounded-xl bg-[#020617] border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all min-h-[160px] resize-none" 
                      />
                    </div>

                    <button 
                      type="submit" disabled={loading}
                      className="w-full py-4 bg-[#D4AF37] text-[#020617] font-bold rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <><span>Submit Query</span> <Send size={18} /></>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}