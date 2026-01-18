"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, Check, Mail, Sparkles, Linkedin, Loader2 } from "lucide-react";

export default function WaitlistPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem("codeflow_waitlist_seen");
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("codeflow_waitlist_seen", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          name: "Waitlist User",
          message: "User wants to join the priority waitlist.",
          type: "Waitlist Join"
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
           handleClose();
        }, 4000); 
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-sm cursor-pointer"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md bg-[#FDFCF8] rounded-3xl shadow-2xl overflow-hidden border border-[#D4AF37]/30"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#1B365D]/10 to-transparent rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />

            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#1B365D] hover:bg-gray-100 rounded-full transition-all z-50 cursor-pointer"
            >
              <X size={20} />
            </button>

            <div className="p-8 relative z-10">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Check className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h2 className="text-2xl font-black text-[#1B365D] mb-2">You're on the list!</h2>
                  <p className="text-[#64748B] mb-4">
                    Welcome to the inner circle. We'll send your exclusive access code soon.
                  </p>
                  <div className="inline-block px-4 py-2 bg-green-50 text-green-700 text-xs font-bold rounded-lg border border-green-200">
                    Confirmation email sent to {email}
                  </div>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF9E6] border border-[#D4AF37]/20 rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-5">
                      <Sparkles size={12} /> Priority Access
                    </div>
                    <h2 className="text-3xl font-black text-[#1B365D] mb-3 leading-tight">
                      Don't Build From Scratch.
                    </h2>
                    <p className="text-[#64748B] text-base leading-relaxed">
                      Get the <strong>Founder Kits</strong> that save you months of dev time. Join the waitlist to get the <span className="text-[#D4AF37] font-bold">best price deal</span> on launch day.
                    </p>
                    <p className="text-xs font-bold text-[#1B365D] mt-2 bg-blue-50 inline-block px-3 py-1 rounded-lg">
                      Limited offer for the first 20 founders.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1B365D] transition-colors" size={20} />
                      <input
                        type="email"
                        required
                        placeholder="founder@startup.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-gray-200 text-[#1E293B] placeholder:text-gray-400 focus:outline-none focus:border-[#1B365D] focus:ring-4 focus:ring-[#1B365D]/5 transition-all shadow-sm"
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-[#1B365D] hover:bg-[#2C4A7C] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span>Securing...</span>
                          <Loader2 size={18} className="animate-spin text-[#D4AF37]" />
                        </>
                      ) : (
                        <>
                          <span>Secure My Spot</span>
                          <Rocket size={18} className="text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-1 pt-4 border-t border-gray-100 text-center flex flex-col gap-3">
                     <p className="text-xs text-gray-400">Stay updated with our journey</p>
                     <a 
                       href="https://www.linkedin.com/company/codeflow-solution/" 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-full py-3 border border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                     >
                       <Linkedin size={18} /> Follow CodeFlow
                     </a>
                     <button 
                        onClick={handleClose}
                        className="text-xs text-gray-400 hover:text-[#1B365D] transition-colors mt-2"
                     >
                        No thanks, I'll browse the site
                     </button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}