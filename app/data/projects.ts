export interface Project {
  id: string;
  publishedAt: string;
  title: string;
  summary: string;
  description: string;
  images: string[];
  customer?: string;
  isPersonal?: boolean;
  jobTitle?: string;
  technologies: string[];
  challenges: string[];
  websiteUrl?: string;
  repoUrl?: string;
  blogUrl?: string;
}

export const projects: Project[] = [
  {
    id: "so-lo",
    publishedAt: "2023-12-01",
    title: "SO-LO",
    summary: "Plataforma innovadora que revoluciona el sector del transporte de mercancías conectando empresas con transportistas autónomos",
    description: "SO-LO representa una transformación digital en el sector del transporte de mercancías, funcionando como un marketplace que conecta de manera eficiente a empresas que necesitan realizar envíos con transportistas independientes. La plataforma implementa un sistema sofisticado de matching, gestión de rutas y seguimiento en tiempo real, todo ello respaldado por una arquitectura cloud robusta y escalable. El sistema incluye gestión avanzada de usuarios con diferentes roles, sistema de creación y asignación de envíos, generación de kpis claves de negocio, entre otras funcionalidades. La infraestructura, desplegada en AWS mediante Kubernetes, garantiza alta disponibilidad y escalabilidad, complementada con un sistema personalizado de CI/CD para automatizar el despliegue y garantizar la calidad del código.",
    images: ["/projects/so-lo/cover-image.png"],
    customer: "Soluciones Logísticas",
    isPersonal: false,
    jobTitle: "Tech Lead & Full Stack Developer",
    technologies: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Kubernetes",
      "AWS",
      "Docker",
      "PostgreSQL",
      "Redis",
      "GitHub Actions",
      "REST API"
    ],
    challenges: [
      "Liderazgo en la definición de la arquitectura técnica y selección de tecnologías para garantizar escalabilidad y mantenibilidad",
      "Diseño e implementación de una infraestructura cloud en AWS utilizando Kubernetes para alta disponibilidad",
      "Desarrollo de un sistema personalizado de CI/CD para automatizar el proceso de despliegue y testing",
      "Implementación del frontend con Next.js, creando una interfaz intuitiva y responsive para múltiples tipos de usuarios",
      "Desarrollo del backend con NestJS, incluyendo sistemas de autenticación, gestión de pagos y tracking en tiempo real",
      "Diseño e implementación de un algoritmo de matching para la asignación eficiente de transportistas a envíos",
      "Creación de un sistema de monitorización y análisis para el seguimiento de métricas operativas y de negocio",
      "Implementación de protocolos de seguridad robustos para la protección de datos sensibles y transacciones"
    ]
  },
  {
    id: "beeping",
    publishedAt: "2024-02-01",
    title: "Sistema ERP para Gestión de Almacén",
    summary: "Plataforma integral de gestión logística que optimiza operaciones de picking y fulfillment para e-commerce mediante integración con Shopify",
    description: "Solución empresarial avanzada diseñada para optimizar las operaciones de un centro logístico especializado en servicios de picking para e-commerce. El sistema implementa una arquitectura multiusuario que gestiona diferentes roles y niveles de acceso, facilitando la coordinación entre administradores, tiendas online y operarios de almacén. La plataforma se integra de manera nativa con la API de Shopify, permitiendo la sincronización en tiempo real de pedidos y automatizando los flujos de trabajo del almacén. La arquitectura del sistema está construida sobre tecnologías modernas y desplegada en una infraestructura cloud robusta y escalable, garantizando alta disponibilidad y rendimiento óptimo incluso en períodos de alta demanda.",
    images: ["/projects/beeping/cover-image.png"],
    customer: "Almacén Logístico",
    isPersonal: false,
    jobTitle: "Full Stack Developer",
    technologies: [
      "Next.js",
      "NestJS",
      "MySQL",
      "TypeScript",
      "Kubernetes",
      "AWS",
      "Aurora Serverless",
      "Shopify API",
      "Docker",
      "REST API"
    ],
    challenges: [
      "Diseño e implementación de una arquitectura multiusuario con gestión avanzada de roles y permisos",
      "Desarrollo de una integración robusta con la API de Shopify para sincronización de pedidos y gestión de inventario",
      "Implementación de un sistema de gestión de almacén optimizado para operaciones de picking y fulfillment",
      "Creación de interfaces específicas y flujos de trabajo adaptados para cada tipo de usuario (administrador, tienda, operario)",
      "Despliegue y gestión de la infraestructura en un cluster de Kubernetes en AWS, garantizando alta disponibilidad",
      "Implementación de una arquitectura de base de datos escalable utilizando Aurora Serverless para optimizar costes y rendimiento",
      "Desarrollo de un sistema de reporting y analytics para seguimiento de KPIs logísticos y rendimiento operacional"
    ],
  },
  {
    id: "tappy",
    publishedAt: "2024-03-01",
    title: "Tappy",
    summary: "Sistema IoT innovador que revoluciona la experiencia de servicio de cerveza mediante una plataforma automatizada y una app móvil intuitiva",
    description: "Tappy representa una solución pionera en el sector de la hostelería que transforma la experiencia tradicional de servir cerveza mediante un sistema IoT avanzado. La plataforma integra hardware especializado con una robusta infraestructura backend y una aplicación móvil intuitiva, permitiendo a los usuarios servirse su propia cerveza de manera automatizada. El sistema incluye gestión de usuarios, control de consumo, integración con sistemas de pago y monitorización en tiempo real del estado de los grifos, todo ello respaldado por una arquitectura cloud altamente disponible y escalable en AWS. La infraestructura utiliza servicios gestionados como Elastic Beanstalk para el despliegue de aplicaciones, Aurora para la base de datos, S3 para el almacenamiento y SES para las comunicaciones por email.",
    images: ["/projects/tappy/cover-image.png"],
    customer: "Tappy",
    isPersonal: false,
    jobTitle: "Lead Backend Developer",
    technologies: ["NestJS", "MySQL", "Flutter", "TypeScript", "Docker", "AWS", "Elastic Beanstalk", "Aurora", "S3", "SES", "REST API"],
    challenges: [
      "Diseño e implementación de una arquitectura backend robusta y escalable utilizando NestJS y MySQL",
      "Desarrollo de un sistema de autenticación y autorización seguro para el control de acceso a los grifos",
      "Implementación de una API REST para la comunicación en tiempo real entre la aplicación móvil y los dispositivos IoT",
      "Integración de sistemas de pago y gestión de transacciones para el control del consumo",
      "Supervisión y contribución al desarrollo de la aplicación móvil Flutter, asegurando la correcta integración con el backend",
      "Implementación de un sistema de monitorización y diagnóstico para el mantenimiento preventivo de los dispositivos",
      "Arquitectura e implementación de una infraestructura cloud en AWS utilizando servicios gestionados como Elastic Beanstalk, Aurora, S3, SES",
      "Configuración de un pipeline de CI/CD para automatizar el despliegue y garantizar la calidad del código"
    ],
  },
  {
    id: "airhopping",
    publishedAt: "2024-01-01",
    title: "Airhopping",
    summary: "Plataforma innovadora de viajes multidestino que revoluciona la planificación de itinerarios mediante tecnología web y móvil avanzada",
    description: "Airhopping representa una innovación en el sector turístico, ofreciendo una plataforma integral para la planificación y reserva de viajes multidestino. El proyecto abarca múltiples soluciones tecnológicas: una plataforma web para usuarios finales, un sofisticado panel de operaciones para la gestión interna, y aplicaciones móviles nativas que facilitan la experiencia del viajero. La arquitectura del sistema evoluciona constantemente para incorporar las últimas tecnologías y mejorar la experiencia del usuario, destacando la migración exitosa de la aplicación móvil de Ionic a Flutter para optimizar el rendimiento y la experiencia de usuario.",
    images: ["/projects/airhopping/cover-image.png"],
    customer: "Airhopping",
    isPersonal: false,
    jobTitle: "Frontend & Mobile Developer",
    technologies: [
      "Angular",
      "Flutter",
      "Ionic",
      "Django",
      "Express",
      "TypeScript",
      "Python",
      "JavaScript",
      "SCSS",
      "REST API"
    ],
    challenges: [
      "Desarrollo e implementación de la primera versión de la plataforma web con Angular, estableciendo la base de la experiencia de usuario",
      "Diseño y desarrollo de un panel de operaciones complejo para la gestión interna de viajes y reservas",
      "Creación de la primera versión de la aplicación móvil utilizando Ionic, permitiendo una rápida entrada al mercado móvil",
      "Liderazgo y ejecución de la migración de la aplicación móvil a Flutter, mejorando significativamente el rendimiento y la experiencia de usuario",
      "Implementación de funcionalidades backend específicas utilizando Django, contribuyendo a la arquitectura general del sistema",
      "Desarrollo full-stack de un proyecto paralelo utilizando Angular y Express, demostrando versatilidad técnica",
      "Integración de múltiples APIs de proveedores de viajes y sistemas de reserva",
      "Optimización del rendimiento y la experiencia de usuario en todas las plataformas"
    ],
  },
  {
    id: "fluento",
    publishedAt: "2024-12-20",
    title: "Fluento",
    summary: "Aplicación móvil innovadora que revoluciona el aprendizaje del inglés mediante IA y traducción inversa",
    description: "Fluento representa una innovación en el campo del aprendizaje de idiomas, combinando metodologías probadas con tecnología de vanguardia. La aplicación implementa el método de traducción inversa, respaldado por IA avanzada, donde los usuarios traducen frases del español al inglés recibiendo feedback instantáneo y personalizado. Este enfoque no solo mejora la precisión gramatical y el vocabulario, sino que también desarrolla la intuición lingüística natural del usuario. La aplicación incorpora un sistema de aprendizaje adaptativo que ajusta la dificultad y frecuencia de los ejercicios según el progreso individual, maximizando así la eficiencia del aprendizaje.",
    images: ["/projects/fluento/cover-image.png"],
    customer: "Proyecto Personal",
    isPersonal: true,
    technologies: ["NextJS", "React Native", "Expo", "OpenAI", "TypeScript", "TailwindCSS"],
    challenges: [
      "Desarrollo de un sistema de evaluación basado en IA que analiza múltiples aspectos lingüísticos: gramática, vocabulario, naturalidad y contexto",
      "Implementación de un algoritmo de repetición espaciada inspirado en Anki, optimizado para el aprendizaje de idiomas",
      "Integración de tecnologías avanzadas de reconocimiento de voz y text-to-speech para mejorar la experiencia de aprendizaje",
      "Diseño de una interfaz móvil intuitiva que prioriza la experiencia de usuario y mantiene altos niveles de engagement"
    ],
    repoUrl: "https://github.com/enolcasielles/es.fluento.next",
    blogUrl: "/blog/construyendo-fluento-1-idea"
  },
  {
    id: "memomate",
    publishedAt: "2024-12-04",
    title: "MemoMate",
    summary: "Asistente personal inteligente en Telegram que revoluciona la gestión de relaciones personales mediante IA avanzada",
    description: "MemoMate es una innovadora solución de gestión de relaciones personales que utiliza procesamiento de lenguaje natural avanzado para transformar la manera en que recordamos y mantenemos información sobre nuestros contactos. A través de una interfaz conversacional natural en Telegram, el sistema permite a los usuarios registrar y recuperar información detallada sobre sus contactos de forma intuitiva. La aplicación emplea tecnologías de IA de última generación para analizar, categorizar y recuperar información contextualmente relevante, facilitando la construcción y mantenimiento de relaciones más significativas.",
    images: ["/projects/memomate/imagen1.png"],
    customer: "Proyecto Personal",
    isPersonal: true,
    technologies: ["NextJS", "OpenAI", "PostgreSQL", "Pinecone", "Telegram API", "TypeScript"],
    challenges: [
      "Diseño e implementación de una arquitectura robusta para el procesamiento de conversaciones naturales mediante la API de Telegram",
      "Desarrollo de un sistema sofisticado de procesamiento de lenguaje natural utilizando OpenAI para la extracción y análisis de información contextual",
      "Implementación de una estructura de base de datos optimizada en PostgreSQL para el almacenamiento eficiente de información relacional",
      "Integración de búsqueda semántica avanzada utilizando Pinecone para recuperación precisa de información contextual",
      "Desarrollo de un sistema de gestión de suscripciones y monitorización de uso mediante Stripe"
    ],
    repoUrl: "https://github.com/enolcasielles/memo-mate",
    blogUrl: "/blog/memomate"
  },
  {
    id: "mooviment",
    publishedAt: "2024-05-01",
    title: "Mooviment",
    summary: "Plataforma innovadora de Realidad Aumentada que transforma productos físicos en experiencias interactivas multimedia",
    description: "Mooviment es una plataforma integral que revoluciona la interacción entre productos físicos y contenido digital mediante Realidad Aumentada. El sistema permite a empresas y creadores vincular contenido multimedia dinámico a productos tangibles, creando experiencias inmersivas y memorables. La solución incluye una robusta plataforma web para la gestión de contenidos y una aplicación móvil de última generación para la visualización de experiencias AR, todo ello respaldado por una infraestructura cloud escalable.",
    images: ["/projects/mooviment/mooviment_1.png"],
    customer: "Mooviment Lab SL",
    isPersonal: true,
    jobTitle: "Fundador y CTO",
    technologies: ["Angular", "Flutter", "AR", "Express", "AWS", "React"],
    challenges: [
      "Desarrollo e integración de tecnologías AR avanzadas mediante Wikitude en una aplicación Flutter multiplataforma",
      "Diseño e implementación de una API REST escalable con Express para la gestión robusta de usuarios y productos",
      "Creación de un Editor de Productos intuitivo y potente utilizando Angular, facilitando la configuración y personalización de experiencias AR",
      "Integración seamless del Editor de Productos con WooCommerce para una gestión eficiente del e-commerce",
      "Arquitectura e implementación de una infraestructura cloud en AWS altamente disponible y escalable",
      "Desarrollo de un sistema serverless mediante AWS Lambda para el procesamiento eficiente de assets multimedia"
    ],
    websiteUrl: "https://www.mooviment.com",
  },
  {
    id: 'ai-agency',
    publishedAt: "2024-04-15",
    title: 'Framework para Agencias de IA',
    summary: 'Framework modular y escalable para el desarrollo y despliegue de agentes de inteligencia artificial personalizados',
    description: 'Framework innovador diseñado para facilitar la creación, prueba y despliegue de agentes de inteligencia artificial especializados. La solución proporciona una arquitectura modular que permite el rápido desarrollo de agentes IA personalizados, incluyendo herramientas de testing avanzadas y capacidades de monitorización en producción. El framework está optimizado para integrarse con las últimas tecnologías de IA, permitiendo crear soluciones empresariales robustas y escalables.',
    images: ["/projects/ai-agency/cover-image.png"],
    customer: "Proyecto Personal",
    isPersonal: true,
    technologies: ["OpenAI", "Next.js", "pnpm", "TypeScript", "Jest"],
    challenges: [
      "Diseño e implementación de una arquitectura modular y extensible para la creación flexible de agentes de IA",
      "Desarrollo de una integración avanzada con la API Assistant de OpenAI, optimizando el rendimiento y la eficiencia",
      "Implementación de un sistema comprehensivo de testing para validar el comportamiento de los agentes de IA",
      "Creación de herramientas de monitorización y análisis para evaluar el rendimiento de los agentes en producción"
    ],
    repoUrl: "https://github.com/enolcasielles/ai-agency-typescript",
    blogUrl: "/blog/agencia-ia-proyecto-base"
  },
]; 