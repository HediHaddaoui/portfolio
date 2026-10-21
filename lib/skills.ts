import { skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/data/types";

export function getVisibleSkillCategories(): SkillCategory[] {
  return skillCategories.filter((category) => category.items.length > 0);
}
