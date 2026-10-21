import { Download, ExternalLink, FileText } from "lucide-react";
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
            title="Curriculum Vitae"
            description="Consultez directement mon CV ci-dessous ou téléchargez-le au format PDF."
          />

          <Card className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xl font-semibold">{profile.name}</p>
              <p className="mt-1 text-sm text-cyan-300">{profile.title}</p>
              <p className="mt-2 text-xs text-muted">Format PDF · Mis à jour · 64 Ko</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={profile.cvPath} download>
                Télécharger mon CV
                <Download size={16} />
              </ButtonLink>
              <ButtonLink href={profile.cvPath} variant="secondary" external>
                Ouvrir en plein écran
                <ExternalLink size={16} />
              </ButtonLink>
            </div>
          </Card>

          {/* Visionneuse PDF intégrée */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-3.5 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <FileText size={16} className="text-cyan-400" />
                <span className="text-sm font-medium text-slate-200">Aperçu du CV — Mohamed El Hedi Haddaoui</span>
              </div>
              <a
                href={profile.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-300 hover:text-cyan-200 hover:underline"
              >
                Ouvrir dans un nouvel onglet ↗
              </a>
            </div>
            <div className="relative h-[650px] w-full bg-slate-950">
              <iframe
                src={`${profile.cvPath}#toolbar=0&navpanes=0`}
                className="h-full w-full border-0"
                title="Aperçu Curriculum Vitae"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
