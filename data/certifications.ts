import type { Certification } from "./types";

export const certifications: Certification[] = [
  {
    id: "cert-ccna",
    name: "CCNA 1 & CCNA 2 (Routing & Switching)",
    issuer: "Cisco Networking Academy",
    date: "Certifié",
    credentialId: "Cisco Certified Network Associate Essentials",
    verificationUrl: "https://www.netacad.com",
  },
  {
    id: "cert-aws",
    name: "AWS Cloud",
    issuer: "Amazon Web Services",
    date: "Certifié",
    credentialId: "AWS Cloud Fundamentals & Architecture",
    verificationUrl: "https://aws.amazon.com/certification/",
  },
  {
    id: "cert-azure",
    name: "Microsoft Azure — Cloud Fundamentals",
    issuer: "Microsoft",
    date: "Certifié",
    credentialId: "Azure Cloud & IoT Fundamentals",
    verificationUrl: "https://learn.microsoft.com/certifications/",
  },
];
