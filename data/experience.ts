import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    id: "experience-c2i",
    role: "Stagiaire — Conseil en informatique",
    company: "C2I Consulting",
    startDate: "Août 2026",
    endDate: "Août 2026",
    location: "Tunisie",
    missions: [
      "Participation active à des missions techniques dans un environnement de conseil IT en équipe pluridisciplinaire.",
      "Prise en main des méthodologies de conduite de projet et des processus d'ingénierie collaborative.",
      "Gestion rigoureuse du versioning et suivi des livrables techniques avec Git et GitHub.",
    ],
    technologies: ["Conseil IT", "Git", "GitHub", "Linux", "Gestion de projet"],
    achievements: [
      "Intégration rapide au sein de l'équipe et respect des standards qualité de l'entreprise.",
    ],
  },
  {
    id: "experience-aiot",
    role: "Stagiaire — Systèmes IoT",
    company: "AIOT",
    startDate: "Juillet 2026",
    endDate: "Juillet 2026",
    location: "Tunisie",
    missions: [
      "Développement et tests rigoureux de solutions connectées : acquisition de données capteurs et transmission en temps réel via MQTT.",
      "Mise en œuvre et sécurisation de la communication entre nœuds embarqués et passerelles réseau.",
      "Validation expérimentale et tests de robustesse en conditions d'exploitation réelles.",
    ],
    technologies: ["IoT", "MQTT", "Capteurs", "Systèmes embarqués", "Wi-Fi", "Python"],
    achievements: [
      "Fiabilisation des flux de télémétrie capteurs avec zéro perte de paquets lors des tests.",
    ],
  },
];
