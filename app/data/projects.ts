export interface Project {
  id: string;
  order: number;
  publishedAt: string;
  title: string;
  summary: string;
  description: string;
  images: string[];
  customer?: string;
  type: 'personal' | 'client' | 'experiment';
  jobTitle?: string;
  technologies: string[];
  challenges: string[];
  websiteUrl?: string;
  repoUrl?: string;
  blogUrl?: string;
}

export const projects: Record<string, Project[]> = {
  es: [
  {
    id: "hexagonal-monorepo",
    order: 100,
    publishedAt: "2024-01-15",
    title: "Arquitectura Hexagonal en Monorepo",
    summary: "Implementación experimental de arquitectura hexagonal en un monorepo TypeScript, integrando Next.js y NestJS con separación clara de capas y responsabilidades",
    description: "Proyecto experimental que explora la implementación práctica de la arquitectura hexagonal (ports and adapters) en un entorno de monorepo moderno. El proyecto demuestra cómo estructurar aplicaciones empresariales complejas mediante la separación de capas en paquetes independientes, facilitando la mantenibilidad y el testing. La arquitectura incluye una aplicación web en Next.js y una API REST en NestJS, ambas compartiendo lógica de dominio común a través de paquetes internos. El monorepo, gestionado con pnpm, implementa prácticas avanzadas de desarrollo como workspaces o build optimizado, proporcionando un ejemplo práctico de cómo aplicar principios SOLID y Clean Architecture en aplicaciones TypeScript modernas.",
    images: ["/projects/hexagonal-monorepo/cover-image.png"],
    customer: "Proyecto Personal",
    type: 'experiment',
    technologies: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "pnpm",
      "Clean Architecture",
      "Monorepo",
      "REST API"
    ],
    challenges: [
      "Diseño e implementación de una estructura de monorepo que facilita la separación de capas según los principios de la arquitectura hexagonal",
      "Desarrollo de paquetes compartidos para lógica de dominio, casos de uso e interfaces de puertos y adaptadores",
      "Implementación de inyección de dependencias y inversión de control manteniendo el código desacoplado y testeable",
      "Configuración de un sistema de build optimizado que gestiona eficientemente las dependencias entre paquetes",
    ],
    repoUrl: "https://github.com/enolcasielles/next-nest-clean-arquitecture",
    blogUrl: "/blog/next-nest-clean-arquitecture"
  },
  {
    id: "moneyup",
    order: 100,
    publishedAt: "2023-11-01",
    title: "MoneyUp",
    summary: "Aplicación fintech innovadora que actúa como coach financiero personal, ayudando a los usuarios a alcanzar sus metas de ahorro mediante integración bancaria y análisis inteligente",
    description: "MoneyUp representa una innovación en el sector fintech, funcionando como un coach financiero digital que ayuda a los usuarios a alcanzar sus objetivos de ahorro de manera inteligente y automatizada. La aplicación se integra de forma segura con las cuentas bancarias del usuario para monitorizar en tiempo real los movimientos y saldos, implementando un sistema de 'ahorro virtual' que aparta y gestiona fondos de manera inteligente según las metas establecidas. La plataforma utiliza análisis de datos avanzado para optimizar las estrategias de ahorro, adaptándose a los patrones de gasto y capacidad financiera de cada usuario, todo ello manteniendo los más altos estándares de seguridad en el manejo de datos financieros sensibles.",
    images: ["/projects/moneyup/cover-image.png"],
    customer: "MoneyUp",
    type: 'personal',
    jobTitle: "Co-fundador & CTO",
    technologies: [
      "Ionic",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Azure",
      "Banking APIs",
      "REST API",
      "Wordpress"
    ],
    challenges: [
      "Desarrollo de integraciones seguras con APIs bancarias para la sincronización de datos financieros en tiempo real",
      "Implementación de un sistema de virtualización de ahorros que permite la gestión inteligente de objetivos financieros",
      "Diseño de una arquitectura robusta que garantiza la seguridad y privacidad de los datos financieros sensibles",
      "Creación de algoritmos de análisis para optimizar estrategias de ahorro basadas en patrones de gasto",
      "Desarrollo de una interfaz móvil intuitiva que simplifica la gestión financiera personal",
      "Implementación de un sistema de notificaciones inteligentes para mantener a los usuarios comprometidos con sus objetivos",
      "Integración de sistemas de procesamiento de pagos y transferencias bancarias seguras"
    ],
  },
  {
    id: "beeping",
    order: 40,
    publishedAt: "2024-02-01",
    title: "Beeping",
    summary: "Plataforma integral de gestión logística que optimiza operaciones de picking y fulfillment para e-commerce mediante integración con Shopify",
    description: "Solución empresarial avanzada diseñada para optimizar las operaciones de un centro logístico especializado en servicios de picking para e-commerce. El sistema implementa una arquitectura multiusuario que gestiona diferentes roles y niveles de acceso, facilitando la coordinación entre administradores, tiendas online y operarios de almacén. La plataforma se integra de manera nativa con la API de Shopify, permitiendo la sincronización en tiempo real de pedidos y automatizando los flujos de trabajo del almacén. La arquitectura del sistema está construida sobre tecnologías modernas y desplegada en una infraestructura cloud robusta y escalable, garantizando alta disponibilidad y rendimiento óptimo incluso en períodos de alta demanda.",
    images: ["/projects/beeping/cover-image.png"],
    customer: "Almacén Logístico",
    type: 'client',
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
    order: 60,
    publishedAt: "2024-03-01",
    title: "Tappy",
    summary: "Sistema IoT innovador que revoluciona la experiencia de servicio de cerveza mediante una plataforma automatizada y una app móvil intuitiva",
    description: "Tappy representa una solución pionera en el sector de la hostelería que transforma la experiencia tradicional de servir cerveza mediante un sistema IoT avanzado. La plataforma integra hardware especializado con una robusta infraestructura backend y una aplicación móvil intuitiva, permitiendo a los usuarios servirse su propia cerveza de manera automatizada. El sistema incluye gestión de usuarios, control de consumo, integración con sistemas de pago y monitorización en tiempo real del estado de los grifos, todo ello respaldado por una arquitectura cloud altamente disponible y escalable en AWS. La infraestructura utiliza servicios gestionados como Elastic Beanstalk para el despliegue de aplicaciones, Aurora para la base de datos, S3 para el almacenamiento y SES para las comunicaciones por email.",
    images: ["/projects/tappy/cover-image.png"],
    customer: "Tappy",
    type: 'client',
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
      "Configuración de pipelines de CI/CD para automatizar despliegues y garantizar la calidad del código"
    ],
  },
  {
    id: "airhopping",
    order: 80,
    publishedAt: "2024-01-01",
    title: "Airhopping",
    summary: "Plataforma innovadora de viajes multidestino que revoluciona la planificación de itinerarios mediante tecnología web y móvil avanzada",
    description: "Airhopping representa una innovación en el sector turístico, ofreciendo una plataforma integral para la planificación y reserva de viajes multidestino. El proyecto abarca múltiples soluciones tecnológicas: una plataforma web para usuarios finales, un sofisticado panel de operaciones para la gestión interna, y aplicaciones móviles nativas que facilitan la experiencia del viajero. La arquitectura del sistema evoluciona constantemente para incorporar las últimas tecnologías y mejorar la experiencia del usuario, destacando la migración exitosa de la aplicación móvil de Ionic a Flutter para optimizar el rendimiento y la experiencia de usuario.",
    images: ["/projects/airhopping/cover-image.png"],
    customer: "Airhopping",
    type: 'client',
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
      "REST API",
      "Azure"
    ],
    challenges: [
      "Desarrollo e implementación de la primera versión de la plataforma web con Angular, estableciendo la base de la experiencia de usuario",
      "Diseño y desarrollo de un panel de operaciones para la gestión interna de viajes y reservas",
      "Creación de la primera versión de la aplicación móvil utilizando Ionic, permitiendo una rápida entrada al mercado móvil",
      "Liderazgo y ejecución de la migración de la aplicación móvil a Flutter, mejorando significativamente el rendimiento y la experiencia de usuario",
      "Implementación de funcionalidades backend específicas utilizando Django, contribuyendo a la arquitectura general del sistema"
    ],
  },
  {
    id: "fluento",
    order: 10,
    publishedAt: "2024-12-20",
    title: "Fluento",
    summary: "Aplicación móvil innovadora que revoluciona el aprendizaje del inglés mediante IA y traducción inversa",
    description: "Fluento representa una innovación en el campo del aprendizaje de idiomas, combinando metodologías probadas con tecnología de vanguardia. La aplicación implementa el método de traducción inversa, respaldado por IA avanzada, donde los usuarios traducen frases del español al inglés recibiendo feedback instantáneo y personalizado. Este enfoque no solo mejora la precisión gramatical y el vocabulario, sino que también desarrolla la intuición lingüística natural del usuario. La aplicación incorpora un sistema de aprendizaje adaptativo, basado en Anki, que ajusta la frecuencia de los ejercicios según el progreso individual, maximizando así la eficiencia del aprendizaje.",
    images: ["/projects/fluento/cover-image.png"],
    customer: "Proyecto Personal",
    type: 'experiment',
    technologies: ["NextJS", "React Native", "Expo", "OpenAI", "TypeScript", "Kafka", "PostgreSQL"],
    challenges: [
      "Desarrollo de un sistema de evaluación basado en IA que analiza múltiples aspectos lingüísticos: gramática, vocabulario, naturalidad y contexto",
      "Implementación de un algoritmo de repetición espaciada inspirado en Anki, optimizado para el aprendizaje de idiomas",
      "Integración de tecnologías avanzadas de reconocimiento de voz y text-to-speech para mejorar la experiencia de aprendizaje",
      "Diseño de una interfaz móvil intuitiva que prioriza la experiencia de usuario y mantiene altos niveles de engagement"
    ],
    repoUrl: "https://github.com/enolcasielles/fluento-app",
    blogUrl: "/blog/construyendo-fluento"
  },
  {
    id: "memomate",
    order: 50,
    publishedAt: "2024-12-04",
    title: "MemoMate",
    summary: "Asistente personal inteligente en Telegram que revoluciona la gestión de relaciones personales mediante IA avanzada",
    description: "MemoMate es una innovadora solución de gestión de relaciones personales que utiliza procesamiento de lenguaje natural avanzado para transformar la manera en que recordamos y mantenemos información sobre nuestros contactos. A través de una interfaz conversacional natural en Telegram, el sistema permite a los usuarios registrar y recuperar información detallada sobre sus contactos de forma intuitiva. La aplicación emplea tecnologías de IA de última generación para analizar, categorizar y recuperar información contextualmente relevante, facilitando la construcción y mantenimiento de relaciones más significativas.",
    images: ["/projects/memomate/cover-image.png"],
    customer: "Proyecto Personal",
    type: 'experiment',
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
    order: 10,
    publishedAt: "2024-05-01",
    title: "Mooviment",
    summary: "Plataforma innovadora de Realidad Aumentada que transforma productos físicos en experiencias multimedia",
    description: "Mooviment es una plataforma integral que revoluciona la interacción entre productos físicos y contenido digital mediante Realidad Aumentada. El sistema permite vincular un vídeo a una imagen, haciendo que parezca que el vídeo está en la imagen. La solución incluye una plataforma web para la generación de las experiencias, un ecommerce para la venta de los productos y una aplicación móvil para la visualización de experiencias AR, todo ello respaldado por una infraestructura cloud escalable.",
    images: ["/projects/mooviment/mooviment_1.png"],
    customer: "Mooviment Lab SL",
    type: 'personal',
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
    order: 80,
    publishedAt: "2024-04-15",
    title: 'Framework para Agencias de IA',
    summary: 'Framework modular y escalable para el desarrollo y despliegue de agentes de inteligencia artificial personalizados',
    description: 'Framework innovador diseñado para facilitar la creación, prueba y despliegue de agentes de inteligencia artificial especializados. La solución proporciona una arquitectura modular que permite el rápido desarrollo de agentes IA personalizados, incluyendo un entorno de pruebas y depuración. El framework está optimizado para integrarse con las últimas tecnologías de IA, permitiendo crear soluciones robustas y escalables.',
    images: ["/projects/ai-agency/cover-image.png"],
    customer: "Proyecto Personal",
    type: 'experiment',
    technologies: ["OpenAI", "Next.js", "pnpm", "TypeScript", "Server Events"],
    challenges: [
      "Diseño e implementación de una arquitectura modular y extensible para la creación flexible de agentes de IA",
      "Desarrollo de una integración avanzada con la API Assistant de OpenAI, optimizando el rendimiento y la eficiencia",
      "Implementación de mecanismos que permitan la comunicación entre agentes de IA y el usuario final",
      "Implementación de una plataforma web que permita interacturar y probar las agencias creadas",
    ],
    repoUrl: "https://github.com/enolcasielles/ai-agency-typescript",
    blogUrl: "/blog/agencia-ia-proyecto-base"
  },
  ],
  en: [
    {
      id: "hexagonal-monorepo",
      order: 100,
      publishedAt: "2024-01-15",
      title: "Hexagonal Architecture in Monorepo",
      summary: "Experimental implementation of hexagonal architecture in a TypeScript monorepo, integrating Next.js and NestJS with clear separation of layers and responsibilities",
      description: "Experimental project exploring the practical implementation of hexagonal architecture (ports and adapters) in a modern monorepo environment. The project demonstrates how to structure complex enterprise applications through layer separation into independent packages, facilitating maintainability and testing. The architecture includes a web application in Next.js and a REST API in NestJS, both sharing common domain logic through internal packages. The monorepo, managed with pnpm, implements advanced development practices such as workspaces and optimized build, providing a practical example of how to apply SOLID principles and Clean Architecture in modern TypeScript applications.",
      images: ["/projects/hexagonal-monorepo/cover-image.png"],
      customer: "Personal Project",
      type: 'experiment',
      technologies: [
        "TypeScript",
        "Next.js",
        "NestJS",
        "pnpm",
        "Clean Architecture",
        "Monorepo",
        "REST API"
      ],
      challenges: [
        "Design and implementation of a monorepo structure that facilitates layer separation according to hexagonal architecture principles",
        "Development of shared packages for domain logic, use cases, and port and adapter interfaces",
        "Implementation of dependency injection and inversion of control while maintaining decoupled and testable code",
        "Configuration of an optimized build system that efficiently manages dependencies between packages",
      ],
      repoUrl: "https://github.com/enolcasielles/next-nest-clean-arquitecture",
      blogUrl: "/blog/next-nest-clean-arquitecture"
    },
    {
      id: "moneyup",
      order: 100,
      publishedAt: "2023-11-01",
      title: "MoneyUp",
      summary: "Innovative fintech application that acts as a personal financial coach, helping users achieve their savings goals through banking integration and smart analysis",
      description: "MoneyUp represents an innovation in the fintech sector, functioning as a digital financial coach that helps users achieve their savings goals in an intelligent and automated way. The application securely integrates with the user's bank accounts to monitor movements and balances in real-time, implementing a 'virtual savings' system that sets aside and manages funds intelligently according to established goals. The platform uses advanced data analysis to optimize savings strategies, adapting to each user's spending patterns and financial capacity, all while maintaining the highest security standards in handling sensitive financial data.",
      images: ["/projects/moneyup/cover-image.png"],
      customer: "MoneyUp",
      type: 'personal',
      jobTitle: "Co-founder & CTO",
      technologies: [
        "Ionic",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "Azure",
        "Banking APIs",
        "REST API",
        "Wordpress"
      ],
      challenges: [
        "Development of secure integrations with banking APIs for real-time financial data synchronization",
        "Implementation of a savings virtualization system that enables intelligent management of financial goals",
        "Design of a robust architecture that ensures security and privacy of sensitive financial data",
        "Creation of analysis algorithms to optimize savings strategies based on spending patterns",
        "Development of an intuitive mobile interface that simplifies personal financial management",
        "Implementation of a smart notification system to keep users engaged with their goals",
        "Integration of secure payment processing and bank transfer systems"
      ],
    },
    {
      id: "beeping",
      order: 40,
      publishedAt: "2024-02-01",
      title: "Beeping",
      summary: "Comprehensive logistics management platform that optimizes picking and fulfillment operations for e-commerce through Shopify integration",
      description: "Advanced enterprise solution designed to optimize the operations of a logistics center specialized in picking services for e-commerce. The system implements a multi-user architecture that manages different roles and access levels, facilitating coordination between administrators, online stores, and warehouse operators. The platform integrates natively with the Shopify API, enabling real-time order synchronization and automating warehouse workflows. The system architecture is built on modern technologies and deployed on a robust and scalable cloud infrastructure, ensuring high availability and optimal performance even during high-demand periods.",
      images: ["/projects/beeping/cover-image.png"],
      customer: "Logistics Warehouse",
      type: 'client',
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
        "Design and implementation of a multi-user architecture with advanced role and permission management",
        "Development of a robust integration with Shopify API for order synchronization and inventory management",
        "Implementation of a warehouse management system optimized for picking and fulfillment operations",
        "Creation of specific interfaces and adapted workflows for each user type (administrator, store, operator)",
        "Deployment and management of infrastructure on a Kubernetes cluster in AWS, ensuring high availability",
        "Implementation of a scalable database architecture using Aurora Serverless to optimize costs and performance",
        "Development of a reporting and analytics system for tracking logistics KPIs and operational performance"
      ],
    },
    {
      id: "tappy",
      order: 60,
      publishedAt: "2024-03-01",
      title: "Tappy",
      summary: "Innovative IoT system that revolutionizes the beer serving experience through an automated platform and intuitive mobile app",
      description: "Tappy represents a pioneering solution in the hospitality sector that transforms the traditional beer serving experience through an advanced IoT system. The platform integrates specialized hardware with a robust backend infrastructure and an intuitive mobile application, allowing users to pour their own beer in an automated way. The system includes user management, consumption control, payment system integration, and real-time tap status monitoring, all backed by a highly available and scalable cloud architecture on AWS. The infrastructure uses managed services such as Elastic Beanstalk for application deployment, Aurora for database, S3 for storage, and SES for email communications.",
      images: ["/projects/tappy/cover-image.png"],
      customer: "Tappy",
      type: 'client',
      jobTitle: "Lead Backend Developer",
      technologies: ["NestJS", "MySQL", "Flutter", "TypeScript", "Docker", "AWS", "Elastic Beanstalk", "Aurora", "S3", "SES", "REST API"],
      challenges: [
        "Design and implementation of a robust and scalable backend architecture using NestJS and MySQL",
        "Development of a secure authentication and authorization system for tap access control",
        "Implementation of a REST API for real-time communication between the mobile application and IoT devices",
        "Integration of payment systems and transaction management for consumption control",
        "Supervision and contribution to Flutter mobile application development, ensuring proper backend integration",
        "Implementation of a monitoring and diagnostic system for preventive device maintenance",
        "Architecture and implementation of cloud infrastructure on AWS using managed services like Elastic Beanstalk, Aurora, S3, SES",
        "Configuration of CI/CD pipelines to automate deployments and ensure code quality"
      ],
    },
    {
      id: "airhopping",
      order: 80,
      publishedAt: "2024-01-01",
      title: "Airhopping",
      summary: "Innovative multi-destination travel platform that revolutionizes itinerary planning through advanced web and mobile technology",
      description: "Airhopping represents an innovation in the tourism sector, offering a comprehensive platform for planning and booking multi-destination trips. The project encompasses multiple technological solutions: a web platform for end users, a sophisticated operations panel for internal management, and native mobile applications that facilitate the traveler's experience. The system architecture constantly evolves to incorporate the latest technologies and improve user experience, highlighting the successful migration of the mobile application from Ionic to Flutter to optimize performance and user experience.",
      images: ["/projects/airhopping/cover-image.png"],
      customer: "Airhopping",
      type: 'client',
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
        "REST API",
        "Azure"
      ],
      challenges: [
        "Development and implementation of the first version of the web platform with Angular, establishing the foundation for user experience",
        "Design and development of an operations panel for internal management of trips and bookings",
        "Creation of the first version of the mobile application using Ionic, enabling rapid mobile market entry",
        "Leadership and execution of mobile application migration to Flutter, significantly improving performance and user experience",
        "Implementation of specific backend functionalities using Django, contributing to the overall system architecture"
      ],
    },
    {
      id: "fluento",
      order: 10,
      publishedAt: "2024-12-20",
      title: "Fluento",
      summary: "Innovative mobile application that revolutionizes English learning through AI and reverse translation",
      description: "Fluento represents an innovation in the language learning field, combining proven methodologies with cutting-edge technology. The application implements the reverse translation method, backed by advanced AI, where users translate sentences from Spanish to English receiving instant and personalized feedback. This approach not only improves grammatical accuracy and vocabulary, but also develops the user's natural linguistic intuition. The application incorporates an adaptive learning system, based on Anki, that adjusts the frequency of exercises according to individual progress, thus maximizing learning efficiency.",
      images: ["/projects/fluento/cover-image.png"],
      customer: "Personal Project",
      type: 'experiment',
      technologies: ["NextJS", "React Native", "Expo", "OpenAI", "TypeScript", "Kafka", "PostgreSQL"],
      challenges: [
        "Development of an AI-based evaluation system that analyzes multiple linguistic aspects: grammar, vocabulary, naturalness, and context",
        "Implementation of a spaced repetition algorithm inspired by Anki, optimized for language learning",
        "Integration of advanced voice recognition and text-to-speech technologies to improve the learning experience",
        "Design of an intuitive mobile interface that prioritizes user experience and maintains high engagement levels"
      ],
      repoUrl: "https://github.com/enolcasielles/fluento-app",
      blogUrl: "/blog/construyendo-fluento"
    },
    {
      id: "memomate",
      order: 50,
      publishedAt: "2024-12-04",
      title: "MemoMate",
      summary: "Intelligent personal assistant on Telegram that revolutionizes personal relationship management through advanced AI",
      description: "MemoMate is an innovative personal relationship management solution that uses advanced natural language processing to transform the way we remember and maintain information about our contacts. Through a natural conversational interface on Telegram, the system allows users to record and retrieve detailed information about their contacts intuitively. The application employs cutting-edge AI technologies to analyze, categorize, and retrieve contextually relevant information, facilitating the building and maintenance of more meaningful relationships.",
      images: ["/projects/memomate/cover-image.png"],
      customer: "Personal Project",
      type: 'experiment',
      technologies: ["NextJS", "OpenAI", "PostgreSQL", "Pinecone", "Telegram API", "TypeScript"],
      challenges: [
        "Design and implementation of a robust architecture for processing natural conversations through the Telegram API",
        "Development of a sophisticated natural language processing system using OpenAI for contextual information extraction and analysis",
        "Implementation of an optimized database structure in PostgreSQL for efficient storage of relational information",
        "Integration of advanced semantic search using Pinecone for precise contextual information retrieval",
        "Development of a subscription management and usage monitoring system through Stripe"
      ],
      repoUrl: "https://github.com/enolcasielles/memo-mate",
      blogUrl: "/blog/memomate"
    },
    {
      id: "mooviment",
      order: 10,
      publishedAt: "2024-05-01",
      title: "Mooviment",
      summary: "Innovative Augmented Reality platform that transforms physical products into multimedia experiences",
      description: "Mooviment is a comprehensive platform that revolutionizes the interaction between physical products and digital content through Augmented Reality. The system allows linking a video to an image, making it appear as if the video is in the image. The solution includes a web platform for generating experiences, an e-commerce for selling products, and a mobile application for viewing AR experiences, all backed by a scalable cloud infrastructure.",
      images: ["/projects/mooviment/mooviment_1.png"],
      customer: "Mooviment Lab SL",
      type: 'personal',
      jobTitle: "Founder and CTO",
      technologies: ["Angular", "Flutter", "AR", "Express", "AWS", "React"],
      challenges: [
        "Development and integration of advanced AR technologies through Wikitude in a cross-platform Flutter application",
        "Design and implementation of a scalable REST API with Express for robust user and product management",
        "Creation of an intuitive and powerful Product Editor using Angular, facilitating AR experience configuration and customization",
        "Seamless integration of the Product Editor with WooCommerce for efficient e-commerce management",
        "Architecture and implementation of highly available and scalable cloud infrastructure on AWS",
        "Development of a serverless system using AWS Lambda for efficient multimedia asset processing"
      ],
      websiteUrl: "https://www.mooviment.com",
    },
    {
      id: 'ai-agency',
      order: 80,
      publishedAt: "2024-04-15",
      title: 'AI Agency Framework',
      summary: 'Modular and scalable framework for the development and deployment of custom artificial intelligence agents',
      description: 'Innovative framework designed to facilitate the creation, testing, and deployment of specialized artificial intelligence agents. The solution provides a modular architecture that enables rapid development of custom AI agents, including a testing and debugging environment. The framework is optimized to integrate with the latest AI technologies, enabling the creation of robust and scalable solutions.',
      images: ["/projects/ai-agency/cover-image.png"],
      customer: "Personal Project",
      type: 'experiment',
      technologies: ["OpenAI", "Next.js", "pnpm", "TypeScript", "Server Events"],
      challenges: [
        "Design and implementation of a modular and extensible architecture for flexible AI agent creation",
        "Development of an advanced integration with OpenAI's Assistant API, optimizing performance and efficiency",
        "Implementation of mechanisms that allow communication between AI agents and the end user",
        "Implementation of a web platform to interact and test created agencies",
      ],
      repoUrl: "https://github.com/enolcasielles/ai-agency-typescript",
      blogUrl: "/blog/agencia-ia-proyecto-base"
    },
  ]
};
