import { Mail, Phone, MapPin, Send } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Échange"
            title="Contact"
            description="Une opportunité, un projet ou une question ? N'hésitez pas à me contacter via le formulaire ci-dessous ou directement."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Coordonnées directes</h3>
                <Badge>{profile.availability.split("—")[0].trim()}</Badge>
              </div>
              <p className="mt-2 text-sm text-muted">
                Disponible pour échanger sur vos opportunités d’ingénierie et projets IoT / logiciels.
              </p>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">Email</dt>
                    <dd className="mt-0.5 font-medium">
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-cyan-300 hover:underline"
                      >
                        {profile.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
                    <Phone size={16} />
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">Téléphone</dt>
                    <dd className="mt-0.5 font-medium">
                      <a
                        href="tel:+21693501056"
                        className="hover:text-cyan-300"
                      >
                        +216 93 501 056
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-muted">Localisation</dt>
                    <dd className="mt-0.5">{profile.location}</dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <a
                href={`mailto:${profile.email}?subject=Opportunité professionnelle`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/15 px-4 py-2.5 text-sm font-medium text-cyan-200 transition-colors hover:bg-cyan-400/25"
              >
                <Send size={15} />
                M&apos;envoyer un e-mail direct
              </a>
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 text-lg font-semibold">Envoyer un message</h3>
            <ContactForm />
          </Card>
        </div>
      </Container>
    </section>
  );
}
