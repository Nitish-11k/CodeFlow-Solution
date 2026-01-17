import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Kits from "../components/Kits";
import Hosting from "../components/Hosting";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Kits />
      <Hosting />
      <TechStack />
      <Contact />
      
      <footer className="py-8 text-center text-[#64748B] text-sm bg-[#FDFCF8] border-t border-[#E2E8F0]">
        <p>© 2026 CodeFlow.Solution. Building MVPs for Founders.</p>
      </footer>
    </main>
  );
}