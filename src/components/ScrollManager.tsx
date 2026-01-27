"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ScrollManager() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    
    if (section) {
      // 1. Element dhundo
      const element = document.getElementById(section);
      
      if (element) {
        // 2. Thoda wait karke scroll karo (taaki page load ho jaye)
        setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
        }, 100);

        // 3. URL Clean karo (Remove ?section=...)
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
      }
    }
  }, [searchParams]);

  return null; // Ye UI pe kuch nahi dikhayega
}