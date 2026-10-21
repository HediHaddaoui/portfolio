import { Download, FileText } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

export function CvSection() {
  return (
    <section id="cv" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Documents"
            title="CV"
            description="Consultez en ligne ou téléchargez mon curriculum vitae au format PDF."
          />
          <Card className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-semibold">{profile.name}</p>
              <p className="mt-1 text-sm text-muted">{profile.title}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={profile.cvPath} download>
                Télécharger mon CV
                <Download size={16} />
              </ButtonLink>
              <ButtonLink href={profile.cvPath} variant="secondary" external>
                Voir mon CV
                <FileText size={16} />
              </ButtonLink>
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
