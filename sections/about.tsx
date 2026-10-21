import { CheckCircle2, Globe2, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Profil"
            title="À propos"
            description={profile.availability}
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5 text-base leading-relaxed text-muted">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {/* Fiche récapitulative & Langues */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-300">
                <Sparkles size={18} />
                <h3 className="font-semibold text-slate-100">Points clés du profil</h3>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-cyan-400 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-200">Localisation</p>
                    <p className="text-muted">{profile.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 text-cyan-400 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-200">Spécialisation</p>
                    <p className="text-muted">IoT, Systèmes Embarqués, Réseaux & Développement</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 size={16} className="mt-0.5 text-cyan-400 shrink-0" />
                  <div className="w-full">
                    <p className="font-medium text-slate-200">Langues</p>
                    <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="rounded-lg border border-white/10 bg-white/5 py-1.5 px-2">
                        <span className="font-semibold text-slate-200 block">Arabe</span>
                        <span className="text-cyan-300">Maternelle</span>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 py-1.5 px-2">
                        <span className="font-semibold text-slate-200 block">Anglais</span>
                        <span className="text-cyan-300">Niveau C1</span>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 py-1.5 px-2">
                        <span className="font-semibold text-slate-200 block">Français</span>
                        <span className="text-cyan-300">Niveau B1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
