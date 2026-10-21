import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Académique"
            title="Formation"
            description="Cursus universitaire et cycle d'ingénieur en IoT et systèmes informatiques."
          />
        </Reveal>
        {education.length === 0 ? (
          <p className="mt-10 text-sm text-muted">
            Aucune formation renseignée pour le moment.
          </p>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {education.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <Card>
                  <p className="text-sm text-cyan-300">{item.year}</p>
                  <h3 className="mt-2 text-xl font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted">{item.school}</p>
                  <p className="mt-3 text-sm font-medium">{item.specialty}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
