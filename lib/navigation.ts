import { profile } from "@/data/profile";

export const navItems = [
  { href: "/#about", label: "À propos" },
  { href: "/#skills", label: "Compétences" },
  { href: "/#projects", label: "Projets" },
  { href: "/#experience", label: "Expérience" },
  { href: "/#education", label: "Formation" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#cv", label: "CV" },
  { href: "/#contact", label: "Contact" },
] as const;

export const brandName = profile.name;
