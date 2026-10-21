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
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 font-mono text-sm text-cyan-100/80">
              <p>const engineer = {"{"}</p>
              <p className="pl-4">name: &quot;{profile.name}&quot;,</p>
              <p className="pl-4">title: &quot;{profile.title}&quot;,</p>
              <p className="pl-4">location: &quot;{profile.location}&quot;,</p>
              <p className="pl-4">email: &quot;{profile.email}&quot;,</p>
              <p>{"}"}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
