"use client";
import { Check, ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Starter Core",
    price: "$49",
    tag: "MVP READY",
    description: "The essential backend foundation to get your startup off the ground immediately.",
    features: [
      "JWT Authentication System",
      "User Management API",
      "PostgreSQL Database Setup",
      "Dockerized Container",
      "Basic Swagger Documentation"
    ],
    highlight: false
  },
  {
    id: 2,
    title: "Nexus Integrator",
    price: "$129",
    tag: "POPULAR",
    description: "Connect your app to the world with pre-built third-party integration modules.",
    features: [
      "Stripe & Razorpay Payments",
      "SendGrid Email Templates",
      "Twilio SMS Integration",
      "Webhook Event Handlers",
      "File Upload (S3/Cloudinary)"
    ],
    highlight: true 
  },
  {
    id: 3,
    title: "Apex Suite",
    price: "$299",
    tag: "ENTERPRISE",
    description: "High-scale architecture for startups expecting rapid growth and heavy traffic.",
    features: [
      "Advanced Admin Dashboard",
      "Real-time Analytics API",
      "Multi-tenancy Support",
      "Redis Caching Layer",
      "Role-Based Access Control"
    ],
    highlight: false
  },
  {
    id: 4,
    title: "Bespoke Forge",
    price: "Custom",
    tag: "FULL SERVICE",
    description: "We act as your CTO. Custom architecture built specifically for your unique needs.",
    features: [
      "Tailored System Architecture",
      "Complex Business Logic",
      "Cloud Deployment (AWS/Azure)",
      "CI/CD Pipeline Setup",
      "24/7 Priority Support"
    ],
    highlight: false
  }
];

export default function Kits() {
  return (
    <section id="kits" className="py-24 bg-[#FDFCF8] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Hide Scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}} />

      <div className="w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-4 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1B365D] mb-4 tracking-tight">
            Founder Services Kit
          </h2>
          <p className="text-[#64748B] text-lg">
            Stop building from scratch. Choose a modular kit to accelerate your launch.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-6 px-6 py-12 w-full scrollbar-hide snap-x snap-mandatory scroll-smooth justify-start items-center">
          
          {services.map((service) => (
            <div 
              key={service.id}
              className={`
                relative flex flex-col flex-shrink-0 w-[320px] p-8 rounded-2xl border transition-all duration-300 ease-out group snap-center cursor-pointer
                
                /* --- BASE STYLES --- */
                ${service.highlight 
                  ? "bg-[#1B365D] border-[#1B365D] text-white shadow-xl scale-100 md:scale-105 z-10" 
                  : "bg-white border-[#E2E8F0] text-[#1E293B]"
                }

                /* --- HOVER POP UP EFFECT --- */
                hover:-translate-y-4 
                hover:scale-105 
                hover:shadow-2xl 
                hover:shadow-[#1B365D]/20 
                hover:z-30 
                hover:border-[#D4AF37]
              `}
            >
              {/* Tag */}
              <div className={`
                absolute top-0 right-0 mt-6 mr-6 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full
                ${service.highlight ? "bg-[#D4AF37] text-[#1B365D]" : "bg-[#F1F5F9] text-[#64748B] group-hover:bg-[#D4AF37] group-hover:text-[#1B365D] transition-colors"}
              `}>
                {service.tag}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold mb-3 mt-4">{service.title}</h3>
              <p className={`text-sm mb-6 ${service.highlight ? "text-gray-300" : "text-[#64748B]"}`}>
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold">{service.price}</span>
                {service.price !== "Custom" && <span className={`text-sm ml-1 ${service.highlight ? "text-gray-400" : "text-gray-500"}`}>/ license</span>}
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-1">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 shrink-0 ${service.highlight ? "text-[#D4AF37]" : "text-[#1B365D] group-hover:text-[#D4AF37]"}`} />
                    <span className={service.highlight ? "text-gray-200" : "text-gray-600"}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className={`
                w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all
                ${service.highlight 
                  ? "bg-[#D4AF37] text-[#1B365D] hover:bg-white" 
                  : "bg-[#1B365D] text-white hover:bg-[#D4AF37] hover:text-[#1B365D]"
                }
              `}>
                Get Started <ArrowRight size={16} />
              </button>

            </div>
          ))}
          
          {/* Spacer */}
          <div className="w-6 flex-shrink-0" />
        </div>

      </div>
    </section>
  );
}