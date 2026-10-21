import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getVisibleSkillCategories } from "@/lib/skills";

export function SkillsSection() {
  const categories = getVisibleSkillCategories();

  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Stack"
            title="Compétences"
            description="Technologies, langages, protocoles et outils maîtrisés à travers mes projets académiques et professionnels."
          />
        </Reveal>
        {categories.length === 0 ? (
          <p className="mt-10 text-sm text-muted">
            Aucune compétence n’est affichée pour le moment.
          </p>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {categories.map((category, index) => (
              <Reveal key={category.id} delay={index * 0.05}>
                <Card>
                  <h3 className="text-lg font-semibold">{category.label}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Badge key={item.name}>{item.name}</Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
