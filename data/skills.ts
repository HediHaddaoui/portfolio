import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Développement & Langages",
    items: [
      { name: "Python" },
      { name: "Java" },
      { name: "C / C++" },
      { name: "Dart (Flutter)" },
      { name: "JavaScript / TypeScript" },
      { name: "SQL" },
    ],
  },
  {
    id: "iot",
    label: "IoT & Systèmes Embarqués",
    items: [
      { name: "ESP32" },
      { name: "Arduino" },
      { name: "STM32" },
      { name: "Raspberry Pi" },
      { name: "Protocole MQTT" },
      { name: "Node-RED" },
      { name: "Capteurs & Actionneurs" },
    ],
  },
  {
    id: "networks",
    label: "Réseaux & Systèmes",
    items: [
      { name: "CCNA (Routage & Switching)" },
      { name: "TCP/IP & Wi-Fi" },
      { name: "Linux (Debian / Ubuntu)" },
      { name: "Git & GitHub" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: [
      { name: "Amazon Web Services (AWS)" },
      { name: "Microsoft Azure" },
      { name: "Docker" },
      { name: "CI/CD & Méthodes Agiles" },
    ],
  },
  {
    id: "electronics",
    label: "Conception Électronique",
    items: [
      { name: "KiCad" },
      { name: "Eagle" },
      { name: "Conception & Routage PCB" },
      { name: "Prototypage & Schémas" },
    ],
  },
  {
    id: "web",
    label: "Mobile & Web",
    items: [
      { name: "Flutter" },
      { name: "Firebase" },
      { name: "Next.js / React" },
      { name: "Tailwind CSS" },
      { name: "APIs REST" },
    ],
  },
];
