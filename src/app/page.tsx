import HeroSection from "@/components/home/HeroSection";
import ProjectGrid from "@/components/home/ProjectGrid";
import ImpactMetrics from "@/components/home/ImpactMetrics";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectGrid />
      <ImpactMetrics />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
