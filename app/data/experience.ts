export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string | string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Full Stack Developer & Tech Lead",
    company: "Logixs",
    period: "2022 - Actualidad",
    description: "Como líder técnico, dirijo el desarrollo e implementación de soluciones empresariales de alta complejidad. Desarrollo software full-stack para proyectos críticos y gestiono y mentorizo equipos multidisciplinares estableciendo mejores prácticas y estándares de código, mientras implemento arquitecturas escalables basadas en microservicios.",
    technologies: ["NextJS", "NestJS", "PostgreSQL", "Microservices", "Kubernetes", "AWS"]
  },
  {
    title: "CTO y Fundador",
    company: "Mooviment",
    period: "2021 - 2023",
    description: "Lideré la visión tecnológica y la implementación de una plataforma innovadora de e-commerce con Realidad Aumentada, diseñando la arquitectura completa del sistema y supervisando su desarrollo desde cero. Establecí la infraestructura cloud-native y los procesos de desarrollo que permitieron escalar la plataforma de manera eficiente.",
    technologies: ["Angular", "React", "Express", "DynamoDB", "Flutter", "AWS", "Wordpress"]
  },
  {
    title: "Mobile & Web Developer",
    company: "Airhopping",
    period: "2017 - 2022",
    description: "Contribuí significativamente al desarrollo y evolución de las aplicaciones móviles y web de una plataforma innovadora en el sector turístico, implementando funcionalidades críticas que mejoraron la experiencia de usuario y aumentaron la retención de clientes. Lideré la migración exitosa de las aplicaciones a tecnologías modernas como Flutter y Angular, mejorando significativamente el rendimiento y la mantenibilidad del código.",
    technologies: ["Angular", "Ionic", "Flutter", "Django"]
  },
  {
    title: "CTO y Fundador",
    company: "MoneyUp",
    period: "2016 - 2017",
    description: "Diseñé y lideré el desarrollo de una innovadora plataforma Fintech, implementando integraciones seguras con APIs bancarias y desarrollando algoritmos avanzados para la gestión personalizada de ahorros. Establecí la arquitectura del sistema y los protocolos de seguridad cumpliendo con las regulaciones del sector financiero.",
    technologies: ["Angular", "Express", "Ionic", "MongoDB", "Integración de APIs bancarias"]
  },
  {
    title: "Freelance Developer",
    company: "Freelance",
    period: "2014 - 2022",
    description: "Desarrollé soluciones tecnológicas end-to-end para diversos clientes y sectores, abarcando desde aplicaciones móviles nativas hasta sistemas web empresariales complejos. Gestioné proyectos completos desde la conceptualización hasta el despliegue, manteniendo altos estándares de calidad y satisfacción del cliente.",
    technologies: ["React", "Flutter", "Express", "NestJS", "NextJS"]
  }
]; 