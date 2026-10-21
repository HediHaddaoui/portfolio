import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Globe } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";
import { getProjectBySlug } from "@/lib/projects";
import { isHttpUrl } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-16 sm:py-24">
      <Container>
        <ButtonLink href="/#projects" variant="ghost" size="sm">
          <ArrowLeft size={16} />
          Tous les projets
        </ButtonLink>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">
              {project.category}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">
              {project.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {isHttpUrl(project.github) ? (
                <ButtonLink href={project.github} variant="secondary" external>
                  GitHub
                  <GitHubIcon size={16} />
                </ButtonLink>
              ) : null}
              {isHttpUrl(project.demo) ? (
                <ButtonLink href={project.demo} variant="secondary" external>
                  Demo
                  <Globe size={16} />
                </ButtonLink>
              ) : null}
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={project.image}
              alt={`Visuel du projet ${project.name}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold">Problématique</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.problem}
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Solution</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.solution}
            </p>
          </Card>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold">Fonctionnalités</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Mon rôle</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.role}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </main>
  );
}
