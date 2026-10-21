import Image from "next/image";
import { Award, BookOpen, CheckCircle, Languages, Sparkles } from "lucide-react";
import { CopyEmailButton } from "@/components/copy-email-button";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Colonne Gauche : Présentation */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-medium text-cyan-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                {profile.availability}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Bonjour, je suis{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="mt-3 text-lg font-medium text-slate-300 sm:text-xl">
                {profile.title}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {profile.shortBio}
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <ButtonLink href="#projects" variant="primary" size="lg">
                  Voir les projets
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary" size="lg">
                  Me contacter
                </ButtonLink>
                <CopyEmailButton variant="secondary" size="lg" />
                {profile.cvPath && (
                  <ButtonLink href={profile.cvPath} variant="ghost" size="lg" download>
                    Télécharger CV
                  </ButtonLink>
                )}
              </div>
            </Reveal>
          </div>

          {/* Colonne Droite : Photo professionnelle avec halo néon */}
          <div className="flex justify-center lg:justify-end">
            <Reveal delay={0.25}>
              <div className="relative">
                {/* Lueur arrière-plan */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/30 via-sky-400/20 to-blue-600/30 blur-2xl" />

                {/* Cadre de la photo */}
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-cyan-400/40 bg-slate-900/80 p-1.5 shadow-2xl sm:h-72 sm:w-72">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src="/profile.jpg"
                      alt={profile.name}
                      fill
                      priority
                      className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 640px) 256px, 288px"
                    />
                  </div>
                </div>

                {/* Badge flottant sous la photo */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-slate-900/90 px-4 py-1.5 text-xs font-semibold text-slate-200 shadow-xl backdrop-blur-md">
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={13} className="text-cyan-400" />
                    IoT &amp; Systèmes Embarqués
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Barre de Chiffres Clés / Metrics */}
        <Reveal delay={0.5}>
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center transition-colors hover:border-cyan-400/30 hover:bg-white/[0.04]">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                <BookOpen size={18} />
              </div>
              <div className="text-2xl font-bold tracking-tight text-slate-100">2023</div>
              <div className="mt-1 text-xs text-muted">Licence Ingénierie Informatique (ISITCom)</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center transition-colors hover:border-cyan-400/30 hover:bg-white/[0.04]">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                <Award size={18} />
              </div>
              <div className="text-2xl font-bold tracking-tight text-cyan-300">3</div>
              <div className="mt-1 text-xs text-muted">Certifications (Cisco CCNA, AWS, Azure)</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center transition-colors hover:border-cyan-400/30 hover:bg-white/[0.04]">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                <CheckCircle size={18} />
              </div>
              <div className="text-2xl font-bold tracking-tight text-slate-100">4+</div>
              <div className="mt-1 text-xs text-muted">Projets IoT, Mobile Flutter &amp; PCB</div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-center transition-colors hover:border-cyan-400/30 hover:bg-white/[0.04]">
              <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                <Languages size={18} />
              </div>
              <div className="text-2xl font-bold tracking-tight text-cyan-300">C1</div>
              <div className="mt-1 text-xs text-muted">Anglais professionnel (CEFR)</div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
