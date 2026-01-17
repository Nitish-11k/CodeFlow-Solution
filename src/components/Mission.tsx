"use client";
import { Target } from "lucide-react";

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-[#1B365D] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center p-3 bg-[#D4AF37] rounded-full mb-6">
          <Target className="w-6 h-6 text-[#1B365D]" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D4AF37]">Our Mission</h2>
        
        <p className="text-xl md:text-2xl leading-relaxed font-light text-gray-100">
          "We aim to provide the better solution to every new startup founder who struggles to create their first MVP. 
          We are here to create your MVP in weeks which will save your time."
        </p>
      </div>
    </section>
  );
}