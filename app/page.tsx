"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import VideoSection from "@/components/sections/VideoSection";
import Thematics from "@/components/sections/Thematics";
import About from "@/components/sections/About";
import Partners from "@/components/sections/Partners";
import Advertising from "@/components/sections/Advertising";
import Contact from "@/components/sections/Contact";
import VisitCounter from "@/components/VisitCounter";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("accueil");

  // Scroll spy functionality to automatically update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "accueil",
        "actualites",
        "apropos",
        "video",
        "thematiques",
        "partenaires",
        "publicite",
        "contact",
      ];

      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(`${section}-section`);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleVideoClick = () => {
    setActiveSection("video");
    // Smooth scroll to video section
    const videoElement = document.getElementById("video-section");
    if (videoElement) {
      videoElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    // Smooth scroll to section
    const element = document.getElementById(`${section}-section`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main>
        <div id="accueil-section" className="pt-16">
          <Hero onVideoClick={handleVideoClick} />
        </div>

        <div id="actualites-section" className="pt-16">
          <News />
        </div>

        <div id="apropos-section" className="pt-16">
          <About />
        </div>

        <div id="video-section" className="pt-16">
          <VideoSection />
        </div>

        <div id="thematiques-section" className="pt-16">
          <Thematics />
        </div>

        <div id="partenaires-section" className="pt-16">
          <Partners />
        </div>

        {/* <div id="publicite-section" className="pt-16">
          <Advertising />
        </div> */}

        <div id="contact-section" className="pt-16">
          <Contact />
        </div>
      </main>

      <Footer />
      <VisitCounter />
    </div>
  );
}
