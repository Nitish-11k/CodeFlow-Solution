import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Kits from "../components/Kits";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import WaitlistPopup from "../components/WaitlistPopup"; 
import Footer from "@/components/Footer";
import BlogPreview from "@/components/BlogPreview";
import Roadmap from "@/components/Roadmap";
import ScrollManager from "@/components/ScrollManager";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] transition-colors duration-500"> 
      <Suspense fallback={null}>
        <ScrollManager />
      </Suspense>

      <WaitlistPopup />
      
      <Navbar />
      <Hero />
      <Mission />
      <Kits />
      <TechStack />
      
      <BlogPreview />
      <Roadmap />
      
      <Contact /> 
      
      <Footer/>
    </main>
  );
}