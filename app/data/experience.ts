export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string | string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Web Developer & Tech Lead",
    company: "Logixs",
    period: "2022 - Actualidad",
    description: [
      "Participación en proyectos como Desarrollador Web FullStack",
      "Puesta en marcha, gestión y liderazgo de proyectos"
    ],
    technologies: ["NextJS", "NestJS", "PostgreSQL", "Microservices", "Kubernetes", "AWS"]
  },
  {
    title: "CTO y Fundador",
    company: "Mooviment",
    period: "2021 - 2023",
    description: "Definición y puesta a punto de toda la tecnología para dar servicio a la startup de Realidad Aumentada e Ecommerce.",
    technologies: ["Angular", "React", "Express", "DynamoDB", "Flutter", "AWS", "Wordpress"]
  },
  {
    title: "Mobile & Web Developer",
    company: "Airhopping",
    period: "2017 - 2022",
    description: "Desarrollo y mantenimiento en equipo de los clientes Web y App.",
    technologies: ["Angular", "Ionic", "Flutter", "Django"]
  },
  {
    title: "CTO y Fundador",
    company: "MoneyUp",
    period: "2016 - 2017",
    description: "Definición y puesta a punto de toda la tecnología de una startup Fintech, implementando un producto que ayuda a conseguir metas específicas de ahorro.",
    technologies: ["Angular", "Express", "Ionic", "MongoDB", "Integración de APIs bancarias"]
  },
  {
    title: "Freelance Developer",
    company: "Freelance",
    period: "2014 - 2022",
    description: "Desarrollo de aplicaciones móviles Android e iOS. Desarrollo Web a medida tanto front como back en diferentes tecnologías.",
    technologies: ["React", "Flutter", "Express", "NestJS", "NextJS"]
  }
]; 