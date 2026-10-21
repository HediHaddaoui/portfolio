export type SkillCategoryId =
  | "languages"
  | "iot"
  | "networks"
  | "cloud"
  | "electronics"
  | "web";

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  items: SkillItem[];
}

export type ProjectCategory =
  | "IoT"
  | "Mobile"
  | "Embarqué"
  | "Web"
  | "Backend"
  | "DevOps";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  image: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  role: string;
  github?: string;
  demo?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  missions: string[];
  technologies: string[];
  achievements: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  year: string;
  specialty: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface Profile {
  name: string;
  title: string;
  shortBio: string;
  about: string[];
  email: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  cvPath: string;
  siteUrl: string;
  availability: string;
}
