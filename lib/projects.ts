import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/data/types";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(
  category: ProjectCategory | "Tous",
): Project[] {
  if (category === "Tous") {
    return projects;
  }

  return projects.filter((project) => project.category === category);
}
