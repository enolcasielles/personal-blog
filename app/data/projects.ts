export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  images: string[];
  customer?: string;
  jobTitle?: string;
  technologies: string[];
  challenges: string[];
  websiteUrl?: string;
  repoUrl?: string;
  blogUrl?: string;
}

export const projects: Project[] = [
  {
    id: "memomate",
    title: "Memo Mate",
    summary: "MemoMate es un chatbot en Telegram que utiliza OpenAI para gestionar relaciones personales, recordando eventos y contactos mediante procesamiento de lenguaje natural",
    description: "MemoMate es un chatbot en Telegram que te ayuda a mejorar tus relaciones personales. A través de conversación natural, puedes ir contándole cualquier cosa que quieras recordar de tus contactos. El sistema se encargará de identificar el contacto (o de crearlo si no existira) y de guardar la información correspondiente. Así mismo, MemoMate te permite preguntarle cualquier cosa acerca de cualquiera de tus contactos, analizando la información almacenada y devolviendo una respuesta basada en los datos.",
    images: ["/projects/memomate/imagen1.png"],
    customer: "Proyecto Personal",
    technologies: ["NextJS", "Open AI", "PostgreSQL", "Pinecone", "Telegram API"],
    challenges: [
      "Implementación de un bot en Telegram para manejar la conversación con el usuario",
      "Integración con OpenAI para el procesamiento de lenguaje natural",
      "Desarrollo de un sistema de almacenamiento de datos en PostgreSQL",
      "Indexación y búsqueda semántica de contactos con usando una base de datos vectorial con Pinecone",
      "Gestión de Suscripciones con Stripe y control del uso del usuario"
    ],
    repoUrl: "https://github.com/enolcasielles/memo-mate",
  },
  {
    id: "mooviment",
    title: "Mooviment",
    summary: "Proyecto de Realidad Aumentada que permite esconder vídeos en una imagen.",
    description: "Plataforma Web y Aplicación Móvil que permite al usuario crear una experiencia de Realidad Aumentada, mediante una imagen y un vídeo, e imprimirla sobre un producto físico.",
    images: ["/projects/mooviment/mooviment_1.png"],
    customer: "Mooviment Lab SL",
    jobTitle: "Fundador y CTO",
    technologies: ["Angular", "Flutter", "AR", "Express", "AWS", "React"],
    challenges: [
      "Inestigación de tecnologías de Realidad Aumentada e integración de la herramienta Wikitude en una aplicación Flutter",
      "Desarrollo de una API REST con Express para la gestión de usuarios y productos",
      "Implementación de nuestro Editor de Productos, una aplicación Angular que permite la configuración de los diferentes productos.",
      "Integración de dicho Editor de Productos dentro del Woocommerce que utilizamos para dar soporte al e-commerce de la plataforma",
      "Configuración de AWS para dar soporte a las difrentes partes de la plataforma",
      "Uso de funciones lambda que permitan el procesado de imágenes, vídeos y demás ficheros que necesita la plataforma"
    ],
    websiteUrl: "https://www.mooviment.com",
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