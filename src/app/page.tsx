import HeroSection from "@/components/home/HeroSection";
import DXPillarsSection from "@/components/home/DXPillarsSection";
import ProjectGrid from "@/components/home/ProjectGrid";
import ImpactMetrics from "@/components/home/ImpactMetrics";
import AboutSection from "@/components/home/AboutSection";

import ContactSection from "@/components/home/ContactSection";
import FocalGuide from "@/components/ui/FocalGuide";

export default function Home() {
  return (
    <main className="bg-background relative">
      {/* Decorative vertical guide line on far right */}
      <div className="absolute right-10 top-0 bottom-0 w-px bg-white/[0.02] hidden lg:block z-0" />
      
      <HeroSection />
      
      <FocalGuide className="mt-8 mb-4" color="var(--neon-blue)" />
      <DXPillarsSection />
      
      <FocalGuide className="mt-8 mb-4" color="var(--neon-teal)" />
      <ImpactMetrics />
      
      <FocalGuide className="mt-8 mb-4" color="var(--neon-pink)" />
      <ProjectGrid />
      
      <FocalGuide className="mt-8 mb-4" color="var(--neon-blue)" />
      <AboutSection />
      

      
      <FocalGuide className="mt-8 mb-4" color="var(--neon-pink)" />
      <ContactSection />
    </main>
  );
}
