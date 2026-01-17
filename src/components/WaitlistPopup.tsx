"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Hammer, Rocket, Check } from "lucide-react";

export default function WaitlistPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Trigger popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Optional: Check local storage if you only want to show it once per session
      // const hasSeen = sessionStorage.getItem("waitlist_seen");
      // if (!hasSeen) setIsOpen(true);
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // sessionStorage.setItem("waitlist_seen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would normally send the email to your API
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#1B365D]/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-[#FDFCF8] rounded-2xl shadow-2xl overflow-hidden border border-[#D4AF37]"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#1B365D]/5 rounded-full blur-2xl pointer-events-none -ml-10 -mb-10" />

            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-[#64748B] hover:text-[#1B365D] transition-colors"
            >
              <X size={20} />
            </button>

            <div className="p-8 text-center">
              {/* Icon */}
              <div className="w-16 h-16 bg-[#1B365D] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#1B365D]/20">
                {submitted ? (
                  <Check className="w-8 h-8 text-[#D4AF37]" />
                ) : (
                  <Hammer className="w-8 h-8 text-[#D4AF37]" />
                )}
              </div>

              {submitted ? (
                // Success State
                <div className="animate-in fade-in zoom-in duration-300">
                  <h2 className="text-2xl font-bold text-[#1B365D] mb-2">You're on the list!</h2>
                  <p className="text-[#64748B]">We'll notify you as soon as the kits drop.</p>
                </div>
              ) : (
                // Form State
                <>
                  <h2 className="text-2xl font-bold text-[#1B365D] mb-2">
                    Under Construction
                  </h2>
                  <p className="text-[#64748B] mb-6 text-sm leading-relaxed">
                    We are crafting the ultimate <strong>Founder Kits</strong> and polishing our website. 
                    Join the waitlist to get early access and exclusive discounts.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="founder@startup.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-4 pr-4 py-3 rounded-xl bg-white border border-[#E2E8F0] text-[#1E293B] placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full py-3 bg-[#1B365D] text-white font-bold rounded-xl hover:bg-[#2C4A7C] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      <span>Join Waitlist</span>
                      <Rocket size={18} className="text-[#D4AF37]" />
                    </button>
                  </form>
                  
                  <p className="mt-4 text-xs text-[#94A3B8]">
                    No spam. Only product updates.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}