import { Reveal } from "@/components/reveal";
import { ProjectGrid } from "@/components/project-grid";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Réalisations"
            title="Projets"
            description="Une sélection de projets et architectures réalisés en IoT, développement mobile, systèmes embarqués et ingénierie logicielle."
          />
        </Reveal>
        <ProjectGrid />
      </Container>
    </section>
  );
}
