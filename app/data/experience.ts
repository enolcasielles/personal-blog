export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string | string[];
  technologies: string[];
}

export const experiences: Record<string, Experience[]> = {
  es: [
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
  ],
  en: [
    {
      title: "Full Stack Developer & Tech Lead",
      company: "Logixs",
      period: "2022 - Present",
      description: "As a technical leader, I direct the development and implementation of highly complex enterprise solutions. I develop full-stack software for critical projects and manage and mentor multidisciplinary teams, establishing best practices and code standards, while implementing scalable microservices-based architectures.",
      technologies: ["NextJS", "NestJS", "PostgreSQL", "Microservices", "Kubernetes", "AWS"]
    },
    {
      title: "CTO & Founder",
      company: "Mooviment",
      period: "2021 - 2023",
      description: "I led the technological vision and implementation of an innovative e-commerce platform with Augmented Reality, designing the complete system architecture and overseeing its development from scratch. I established the cloud-native infrastructure and development processes that allowed the platform to scale efficiently.",
      technologies: ["Angular", "React", "Express", "DynamoDB", "Flutter", "AWS", "Wordpress"]
    },
    {
      title: "Mobile & Web Developer",
      company: "Airhopping",
      period: "2017 - 2022",
      description: "I contributed significantly to the development and evolution of mobile and web applications for an innovative platform in the tourism sector, implementing critical functionalities that improved user experience and increased customer retention. I led the successful migration of applications to modern technologies such as Flutter and Angular, significantly improving code performance and maintainability.",
      technologies: ["Angular", "Ionic", "Flutter", "Django"]
    },
    {
      title: "CTO & Founder",
      company: "MoneyUp",
      period: "2016 - 2017",
      description: "I designed and led the development of an innovative Fintech platform, implementing secure integrations with banking APIs and developing advanced algorithms for personalized savings management. I established the system architecture and security protocols complying with financial sector regulations.",
      technologies: ["Angular", "Express", "Ionic", "MongoDB", "Banking APIs Integration"]
    },
    {
      title: "Freelance Developer",
      company: "Freelance",
      period: "2014 - 2022",
      description: "I developed end-to-end technological solutions for various clients and sectors, ranging from native mobile applications to complex enterprise web systems. I managed complete projects from conceptualization to deployment, maintaining high standards of quality and customer satisfaction.",
      technologies: ["React", "Flutter", "Express", "NestJS", "NextJS"]
    }
  ]
}; 