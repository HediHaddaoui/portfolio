import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-4rem)] items-center py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl space-y-6">
          <Reveal delay={0.1}>
            <Badge>{profile.availability}</Badge>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Bonjour, je suis{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <p className="mt-2 text-xl font-medium text-slate-300 sm:text-2xl">
              {profile.title}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {profile.shortBio}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <ButtonLink href="#projects" variant="primary" size="lg">
                Voir les projets
              </ButtonLink>
              <ButtonLink href="#contact" variant="secondary" size="lg">
                Me contacter
              </ButtonLink>
              {profile.cvPath && (
                <ButtonLink href={profile.cvPath} variant="ghost" size="lg" download>
                  Télécharger CV
                </ButtonLink>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
