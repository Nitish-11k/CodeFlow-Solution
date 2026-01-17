"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Database, Globe } from "lucide-react";

const services = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
    title: "Auth Service",
    desc: "JWT authentication, OAuth2 integration, and session management ready to drop in."
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "Event Bus",
    desc: "High-throughput message queuing for async microservice communication."
  },
  {
    icon: <Database className="w-6 h-6 text-green-400" />,
    title: "Data Cache",
    desc: "Redis-backed caching layer to reduce latency by up to 90%."
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    title: "Edge API",
    desc: "Global CDN distribution for your API endpoints ensuring minimal latency."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Solutions</h2>
          <p className="text-gray-400">Powering your architecture with enterprise-grade tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/50 transition-colors"
            >
              <div className="mb-4 p-3 bg-white/10 w-fit rounded-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}