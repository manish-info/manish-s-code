import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificatesSection from "@/components/CertificatesSection";
import InterestsSection from "@/components/InterestsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WelcomeGate from "@/components/WelcomeGate";

const Index = () => {
  const [visitor, setVisitor] = useState<{ name: string; email: string; passion: string } | null>(null);

  if (!visitor) {
    return <WelcomeGate onEnter={setVisitor} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection visitorName={visitor.name} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
        <CertificatesSection />
        <InterestsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
