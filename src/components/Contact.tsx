"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#1B365D] text-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Support & Queries</h2>
          <p className="text-[#94A3B8]">Ready to build? Send us your requirements.</p>
        </div>

        <form className="bg-white p-8 rounded-3xl text-[#1E293B] shadow-2xl space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input type="text" className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] outline-none focus:border-[#1B365D]" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input type="email" className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] outline-none focus:border-[#1B365D]" placeholder="email@company.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Requirement</label>
            <textarea className="w-full p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] outline-none focus:border-[#1B365D] h-32" placeholder="I need a custom backend for..." />
          </div>
          <button className="w-full py-4 rounded-xl bg-[#D4AF37] text-[#1B365D] font-bold hover:bg-[#B5952F] transition-colors">
            Submit Query
          </button>
        </form>
      </div>
    </section>
  );
}