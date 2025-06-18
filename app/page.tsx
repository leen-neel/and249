"use client";

import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import SocialLinks from "./components/sections/SocialLinks";
import Footer from "./components/sections/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <SocialLinks />
      <Footer />
    </main>
  );
}
