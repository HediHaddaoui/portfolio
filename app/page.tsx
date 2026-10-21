import { AboutSection } from "@/sections/about";
import { CertificationsSection } from "@/sections/certifications";
import { ContactSection } from "@/sections/contact";
import { CvSection } from "@/sections/cv";
import { EducationSection } from "@/sections/education";
import { ExperienceSection } from "@/sections/experience";
import { HeroSection } from "@/sections/hero";
import { ProjectsSection } from "@/sections/projects";
import { SkillsSection } from "@/sections/skills";
import { SocialSection } from "@/sections/social";

export default function Home() {
  return (
    <main>
      <div className="grid-overlay pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <CvSection />
      <SocialSection />
      <ContactSection />
    </main>
  );
}
