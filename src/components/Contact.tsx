"use client";
import { useState } from "react";
import { Mail, MessageSquare, Linkedin, ArrowRight, Send, Loader2, CheckCircle, Bug } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirement: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.requirement) return;

    setLoading(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          message: formData.requirement,
          type: "Contact Query"
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", requirement: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#1B365D] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: Info --- */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff]/10 border border-white/10 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-6">
                <MessageSquare size={12} /> Support & Feedback
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Ready to launch <br/>
                <span className="text-[#D4AF37]">your dream?</span>
              </h2>
              
              {/* UPDATED TEXT SECTION */}
              <div className="space-y-4 text-blue-100/80 text-lg leading-relaxed max-w-md">
                <p>
                  Have a custom requirement or need help choosing the right kit? 
                  Drop us a message and our engineers will get back to you.
                </p>
                
                <div className="flex gap-3 pt-2">
                   <Bug className="text-[#D4AF37] shrink-0 mt-1" size={20} />
                   <p className="text-sm text-blue-200">
                     <strong>Found a bug?</strong> If you spot any errors on the website or have tips to optimize it, please let us know. We love feedback!
                   </p>
                </div>
              </div>

            </div>

            {/* LinkedIn Card */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-[#0077B5] rounded-2xl text-white shadow-lg shadow-[#0077B5]/20">
                  <Linkedin size={32} />
                </div>
                <div className="px-3 py-1 bg-[#D4AF37] text-[#1B365D] text-xs font-bold rounded-full">
                  Fastest Reply
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Connect on LinkedIn</h3>
              <p className="text-blue-100/70 mb-8">
                Follow CodeFlow for dev tips, exclusive kit discounts, and direct DM support from the founders.
              </p>
              <a 
                href="https://www.linkedin.com/company/codeflow-solution/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white font-semibold group-hover:gap-4 transition-all"
              >
                <span>Visit Company Page</span>
                <ArrowRight size={20} className="text-[#D4AF37]" />
              </a>
            </div>

            {/* Email Contact */}
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-blue-200 mb-1">Email us at</p>
                <p className="text-xl font-bold text-white">solutioncodeflow@gmail.com</p>
              </div>
            </div>
          </div>


          {/* --- RIGHT SIDE: The Form (With Animation) --- */}
          <div className="bg-[#FDFCF8] p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-black/20 relative min-h-[500px] flex flex-col justify-center overflow-hidden">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#D4AF37] rounded-full blur-2xl opacity-20 pointer-events-none" />

            <AnimatePresence mode="wait">
              {success ? (
                 // --- SUCCESS GREEN CARD ANIMATION ---
                 <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center text-center space-y-6"
                 >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-12 h-12 text-green-600" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-3xl font-bold text-[#1B365D] mb-2">Message Sent!</h3>
                      <p className="text-[#64748B] text-lg max-w-xs mx-auto">
                        We have received your details. Please check your inbox for a confirmation email.
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 text-green-700 text-sm font-medium rounded-xl border border-green-200">
                      ✅ Acknowledgment sent to {formData.email}
                    </div>
                 </motion.div>
              ) : (
                // --- FORM ---
                <motion.div 
                   key="form"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-bold text-[#1B365D] mb-6">Send a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#64748B] ml-1">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="w-full p-4 rounded-xl bg-white border border-[#E2E8F0] text-[#1E293B] focus:outline-none focus:border-[#1B365D] focus:ring-4 focus:ring-[#1B365D]/5 transition-all" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-[#64748B] ml-1">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@startup.com"
                          required
                          className="w-full p-4 rounded-xl bg-white border border-[#E2E8F0] text-[#1E293B] focus:outline-none focus:border-[#1B365D] focus:ring-4 focus:ring-[#1B365D]/5 transition-all" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-[#64748B] ml-1">Requirement</label>
                      <textarea 
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project, report a bug, or suggest an optimization..."
                        className="w-full p-4 rounded-xl bg-white border border-[#E2E8F0] text-[#1E293B] focus:outline-none focus:border-[#1B365D] focus:ring-4 focus:ring-[#1B365D]/5 transition-all min-h-[160px] resize-none" 
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="w-full py-4 bg-[#1B365D] text-white font-bold rounded-xl hover:bg-[#2C4A7C] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span>Sending...</span>
                          <Loader2 size={18} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          <span>Submit Query</span>
                          <Send size={18} className="text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
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