"use client";

import { cn } from "@/lib/utils";
import { projectFilters } from "@/data/projects";

interface ProjectFiltersProps {
  active: (typeof projectFilters)[number];
  onChange: (filter: (typeof projectFilters)[number]) => void;
}

export function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filtrer les projets"
    >
      {projectFilters.map((filter) => (
        <button
          key={filter}
          type="button"
          role="tab"
          aria-selected={active === filter}
          onClick={() => onChange(filter)}
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition-colors",
            active === filter
              ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-200"
              : "border-white/10 bg-white/5 text-muted hover:text-foreground",
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
