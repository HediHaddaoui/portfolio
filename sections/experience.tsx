import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Parcours"
            title="Expérience"
            description="Missions techniques et stages réalisés en entreprise."
          />
        </Reveal>
        {experiences.length === 0 ? (
          <p className="mt-10 text-sm text-muted">
            Aucune expérience enregistrée pour le moment.
          </p>
        ) : (
          <ol className="relative mt-12 space-y-8 border-l border-white/10 pl-8">
            {experiences.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[37px] top-1.5 h-3.5 w-3.5 rounded-full border border-cyan-300 bg-cyan-400/80" />
                  <p className="text-sm text-cyan-300">
                    {item.startDate} — {item.endDate}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                  <p className="text-sm text-muted">
                    {item.company} · {item.location}
                  </p>
                  <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
                    {item.missions.map((mission) => (
                      <li key={mission}>{mission}</li>
                    ))}
                  </ul>
                  {item.achievements.length > 0 ? (
                    <ul className="mt-3 space-y-1 text-sm text-foreground/90">
                      {item.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        )}
      </Container>
    </section>
  );
}
