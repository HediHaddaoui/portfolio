"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { ProjectFilters } from "@/components/project-filters";
import { projectFilters, projects } from "@/data/projects";
import { getProjectsByCategory } from "@/lib/projects";

export function ProjectGrid() {
  const [filter, setFilter] =
    useState<(typeof projectFilters)[number]>("Tous");

  const visibleProjects = useMemo(
    () => getProjectsByCategory(filter),
    [filter],
  );

  if (projects.length === 0) {
    return (
      <p className="text-sm text-muted">
        Ajoutez vos projets dans <code>data/projects.ts</code>.
      </p>
    );
  }

  return (
    <div className="mt-10 space-y-8">
      <ProjectFilters active={filter} onChange={setFilter} />
      {visibleProjects.length === 0 ? (
        <p className="text-sm text-muted">
          Aucun projet dans cette catégorie pour le moment.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
