export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  images: string[];
  customer?: string;
  technologies: string[];
  challenges: string[];
  websiteUrl?: string;
  repoUrl?: string;
  blogUrl?: string;
}

export const projects: Project[] = [
  {
    id: "mooviment",
    title: "Mooviment",
    summary: "Plataforma de gestión integral para centros deportivos que permite la administración de clases, reservas y pagos.",
    description: "Plataforma de gestión integral para centros deportivos que permite la administración de clases, reservas y pagos.",
    images: ["/projects/mooviment/mooviment_1.png", "/projects/mooviment/schedule.png"],
    customer: "Mooviment Sports SL",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    challenges: [
      "Implementación de un sistema de reservas en tiempo real",
      "Integración con múltiples pasarelas de pago",
      "Desarrollo de una API escalable para manejar alta concurrencia"
    ],
    websiteUrl: "https://www.mooviment.com",
    repoUrl: "https://github.com/mooviment/platform",
    blogUrl: "/blog/creating-mooviment"
  },
  {
    id: 'ai-agency',
    title: 'Framework para agencias de IA',
    summary: 'Framework para la construcción, testeo y puesta en marcha de agencias de inteligencia artificial.',
    description: 'Framework para la construcción, testeo y puesta en marcha de agencias de inteligencia artificial.',
    images: ["/projects/ai-agency/cover-image.png"],
    technologies: ["OpenAI", "Next.js", "pnpm"],
    challenges: [
      "Implementación de un sistema modular sobre el cual se pueden crear nuevas agencias de IA",
      "Integración con la API Assistant de OpenAI",
      "Desarrollo de un sistema que permita testear las agencias implementadas"
    ],
    repoUrl: "https://github.com/enolcasielles/ai-agency-typescript",
    blogUrl: "/blog/agencia-ia-proyecto-base"
  },
]; 