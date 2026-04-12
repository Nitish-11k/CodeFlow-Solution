import { Check, X } from "lucide-react";

export default function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#1B365D] mb-4">
            Stop Reinventing the Wheel
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            See why <strong>FounderKit</strong> is the smartest choice for your next SaaS.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-4 text-left text-gray-500 font-medium">Features</th>
                <th className="p-4 text-center text-[var(--text-secondary)] font-medium">Building from Scratch</th>
                <th className="p-4 text-center text-[var(--text-secondary)] font-medium">Other Node.js Kits</th>
                <th className="p-4 text-center bg-[#F1F5F9] rounded-t-xl text-[#1B365D] font-bold border-t border-x border-[#E2E8F0]">
                  FounderKit (.NET)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Setup Time", scratch: "3-4 Weeks", other: "2 Days", us: "15 Seconds" },
                { name: "Architecture", scratch: "Spaghetti Code", other: "Basic MVC", us: "Clean Architecture" },
                { name: "Security", scratch: "Do it yourself", other: "Basic Auth", us: "Enterprise Grade (JWT/RBAC)" },
                { name: "Performance", scratch: "Varies", other: "Good", us: "Extreme (Compiled C#)" },
                { name: "Database", scratch: "Manual Setup", other: "MongoDB", us: "SQL Server + EF Core" },
                { name: "Cost", scratch: "$5,000+ (Dev time)", other: "$199+", us: "One-time Payment" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-[#1B365D]">{row.name}</td>
                  <td className="p-4 text-center text-gray-500">{row.scratch}</td>
                  <td className="p-4 text-center text-gray-500">{row.other}</td>
                  <td className="p-4 text-center bg-[#F8FAFC] border-x border-gray-100 font-bold text-green-600">
                    {row.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}