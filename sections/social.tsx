import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";
import { isHttpUrl } from "@/lib/utils";

export function SocialSection() {
  return (
    <section id="linkedin" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Présence"
            title="LinkedIn & GitHub"
            description="Retrouvez mon profil professionnel et mes projets de code en libre accès."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Card className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <p className="text-sm text-muted">{profile.linkedinUrl}</p>
              {isHttpUrl(profile.linkedinUrl) ? (
                <ButtonLink href={profile.linkedinUrl} external>
                  Voir mon LinkedIn
                  <LinkedInIcon size={16} />
                </ButtonLink>
              ) : (
                <p className="text-sm text-muted">Lien LinkedIn à renseigner.</p>
              )}
            </Card>
            <Card className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold">GitHub</h3>
              <p className="text-sm text-muted">{profile.githubUrl}</p>
              {isHttpUrl(profile.githubUrl) ? (
                <ButtonLink href={profile.githubUrl} external>
                  Voir mon GitHub
                  <GitHubIcon size={16} />
                </ButtonLink>
              ) : (
                <p className="text-sm text-muted">Lien GitHub à renseigner.</p>
              )}
            </Card>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
