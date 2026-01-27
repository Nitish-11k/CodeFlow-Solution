import { Suspense } from "react"; // Import Suspense
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Kits from "../components/Kits";
import Hosting from "../components/Hosting";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import WaitlistPopup from "../components/WaitlistPopup"; 
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";
import Roadmap from "@/components/Roadmap";
import ScrollManager from "@/components/ScrollManager"; // Import Manager

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]"> 
      {/* ✅ Scroll Logic Here */}
      <Suspense fallback={null}>
        <ScrollManager />
      </Suspense>

      <WaitlistPopup />
      
      <Navbar />
      <Hero />
      <Mission />
      <Kits />
      <Hosting />
      <TechStack />
      
      <BlogPreview />
      <Roadmap />
      
      <Contact /> 
      
      <Footer/>
    </main>
  );
}