import type { Project } from "./types";

export const projectFilters = [
  "Tous",
  "IoT",
  "Mobile",
  "Embarqué",
] as const;

export const projects: Project[] = [
  {
    slug: "supervision-transport-public",
    name: "Supervision du Transport Public",
    category: "Mobile",
    image: "/projects/transport-public.svg",
    description:
      "Application mobile de géolocalisation et suivi en temps réel des réseaux de transport public en Tunisie pour optimiser l'information des usagers.",
    problem:
      "L'absence d'information en temps réel sur les trajectoires et horaires des bus entraîne des temps d'attente imprévisibles et une expérience dégradée pour les voyageurs.",
    solution:
      "Conception et implémentation d'une application mobile réactive sous Flutter adossée à Firebase Cloud Firestore et l'API Google Maps pour diffuser les coordonnées GPS et alertes trafic en direct.",
    technologies: ["Flutter", "Firebase", "Dart", "Google Maps API", "Cloud Firestore"],
    features: [
      "Suivi cartographique des véhicules en direct sur le réseau",
      "Calcul dynamique des temps d'attente et correspondances aux arrêts",
      "Système de notifications instantanées en cas d'incident ou retard",
      "Mode hors-ligne pour la consultation des lignes et horaires réguliers",
    ],
    role: "Conception architecturale, développement de l'application mobile Flutter, modélisation de la base Firebase et intégration de la cartographie.",
    github: "https://github.com/HediHaddaoui",
    demo: "",
  },
  {
    slug: "smart-farm-iot",
    name: "Smart Farm — Agriculture Connectée",
    category: "IoT",
    image: "/projects/smart-farm.svg",
    description:
      "Plateforme IoT de télémétrie et supervision micro-climatique (humidité, température) avec tableau de bord temps réel et régulation automatisée.",
    problem:
      "Les variations climatiques et le stress hydrique non détectés à temps réduisent les rendements agricoles et provoquent des gaspillages d'eau conséquents.",
    solution:
      "Déploiement d'un réseau de capteurs environnementaux autour du microcontrôleur ESP32 communiquant via MQTT avec un broker centralisé et un tableau de bord Node-RED.",
    technologies: ["ESP32", "MQTT", "Node-RED", "C / C++", "Capteurs DHT22", "Wi-Fi"],
    features: [
      "Acquisition continue de l'humidité du sol, de la température et de l'hygrométrie",
      "Transmission télémétrique ultra-légère et résiliente via MQTT",
      "Dashboard interactif sous Node-RED avec graphiques dynamiques en temps réel",
      "Déclenchement automatique d'électrovannes d'arrosage selon des seuils critiques",
    ],
    role: "Développement du firmware C/C++ sur ESP32, paramétrage du broker MQTT, conception des flux et de l'interface Node-RED.",
    github: "https://github.com/HediHaddaoui",
    demo: "",
  },
  {
    slug: "smart-home-domotique",
    name: "Smart Home — Contrôle Domotique",
    category: "IoT",
    image: "/projects/smart-home.svg",
    description:
      "Système domotique intelligent de pilotage et supervision à distance d'équipements électriques haute tension via relais et protocole MQTT.",
    problem:
      "La gestion énergétique des habitations et le contrôle d'appareils électriques requièrent une solution fiable, sécurisée et pilotable à distance avec un temps de latence minimal.",
    solution:
      "Architecture matérielle sécurisée avec cartes relais isolées pilotées par ESP32, interfacée à une plateforme de contrôle Node-RED avec communication bidirectionnelle sécurisée.",
    technologies: ["ESP32", "Relais 220V", "MQTT", "Node-RED", "C++", "WebSockets"],
    features: [
      "Pilotage marche/arrêt instantané de charges 220V (éclairage, climatisation, prises)",
      "Vérification d'état et retour télémétrique en temps réel sur le tableau de bord",
      "Scénarios programmables de gestion d'énergie et programmation horaire",
      "Isolation galvanique par optocoupleurs pour une sécurité matérielle maximale",
    ],
    role: "Étude et câblage électronique, programmation du microcontrôleur ESP32, sécurisation des échanges et interface utilisateur.",
    github: "https://github.com/HediHaddaoui",
    demo: "",
  },
  {
    slug: "robot-detection-incendie",
    name: "Robot Détecteur d'Incendie & PCB",
    category: "Embarqué",
    image: "/projects/robot-incendie.svg",
    description:
      "Robot mobile autonome de sécurité pour la détection précoce de flammes et gaz, avec conception intégrale du circuit imprimé (PCB) sous KiCad.",
    problem:
      "L'intervention humaine dans les zones industrielles à risque lors de départs de feu présente un danger vital; une détection automatisée et mobile est indispensable.",
    solution:
      "Conception d'un robot autonome équipé de capteurs de flammes optiques et de gaz toxiques (MQ-2), piloté par une carte électronique PCB double face spécialement routée sous KiCad.",
    technologies: ["Arduino", "KiCad", "Eagle", "C++", "Capteur MQ-2", "Capteurs UV", "Conception PCB"],
    features: [
      "Détection 360° des foyers d'incendie par capteurs de flamme infrarouges",
      "Mesure continue de la concentration de gaz et fumées toxiques",
      "Conception du schéma électrique et routage double couche du PCB sous KiCad",
      "Navigation autonome avec évitement d'obstacles et avertisseurs d'urgence",
    ],
    role: "Routage électronique du PCB, approvisionnement des composants, brasage et développement du programme autonome C++.",
    github: "https://github.com/HediHaddaoui",
    demo: "",
  },
];
