import { Coffee, Hammer, Rocket } from "lucide-react";

export default function Roadmap() {
  return (
    <section className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-1/2">
            <span className="text-[#D4AF37] font-bold tracking-wider uppercase text-sm mb-2 block">What's Next</span>
            <h2 className="text-3xl md:text-4xl font-black mb-6">Building for the Future</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We are not stopping at .NET. Our team is working hard to bring the same 
              <strong> Enterprise-Grade Architecture</strong> to the Java ecosystem.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-xl text-orange-400">
                  <Coffee size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Java Spring Boot Kit</h3>
                  <p className="text-gray-400 text-sm">
                    The ultimate boilerplate for Java developers. Microservices ready, 
                    Spring Security, and Hibernate pre-configured.
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-full font-bold border border-orange-500/20">
                    In Development 🚧
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-gray-800/50 p-8 rounded-3xl border border-gray-700 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
             
             <h3 className="text-2xl font-bold mb-4">Get Notified</h3>
             <p className="text-gray-400 mb-6">
               Want to be the first to know when the Java Kit drops? 
               Join the priority waitlist.
             </p>

             <form className="flex flex-col gap-3">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-[#D4AF37]"
               />
               <button type="button" className="bg-[#D4AF37] text-[#0F172A] font-bold py-3 rounded-xl hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2">
                 Join Waitlist <Rocket size={18} />
               </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
}