"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/data/types";
import { isHttpUrl } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden p-0 transition-colors hover:border-cyan-400/30">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={`Visuel du projet ${project.name}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </Link>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-400">
                {project.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                <Link href={`/projects/${project.slug}`} className="hover:text-cyan-300">
                  {project.name}
                </Link>
              </h3>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="rounded-full border border-white/10 p-2 text-muted transition-colors group-hover:text-cyan-300"
              aria-label={`Voir ${project.name}`}
            >
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <p className="text-sm leading-relaxed text-muted">{project.description}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-1 text-sm">
            {isHttpUrl(project.github) ? (
              <a
                href={project.github}
                className="inline-flex items-center gap-1.5 text-muted hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon size={15} /> GitHub
              </a>
            ) : null}
            {isHttpUrl(project.demo) ? (
              <a
                href={project.demo}
                className="inline-flex items-center gap-1.5 text-muted hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={15} /> Demo
              </a>
            ) : null}
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
