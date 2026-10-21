import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/data/certifications";
import { isHttpUrl } from "@/lib/utils";

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Preuves"
            title="Certifications"
            description="Certifications professionnelles obtenues en réseaux, Cloud et architectures informatiques."
          />
        </Reveal>
        {certifications.length === 0 ? (
          <p className="mt-10 text-sm text-muted">
            Aucune certification renseignée pour le moment.
          </p>
        ) : (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {certifications.map((item, index) => (
              <Reveal key={item.id} delay={index * 0.05}>
                <Card>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted">{item.issuer}</p>
                  <p className="mt-3 text-sm">{item.date}</p>
                  {item.credentialId ? (
                    <p className="mt-2 font-mono text-xs text-muted">
                      ID : {item.credentialId}
                    </p>
                  ) : null}
                  {isHttpUrl(item.verificationUrl) ? (
                    <a
                      href={item.verificationUrl}
                      className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vérifier
                      <ExternalLink size={14} />
                    </a>
                  ) : null}
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
