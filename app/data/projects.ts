export interface Project {
  id: string;
  publishedAt: string;
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
    id: "fluento",
    publishedAt: "2024-12-20",
    title: "Fluento",
    summary: "Fluento es una aplicación móvil que ofrece una solución para mejorar tu inglés.",
    description: "Fluento es una aplicación móvil que ofrece una solución para mejorar tu inglés. La idea es explotar la metodología de los ejercicios de traducción inversa. El alumno recibe una frase en español y debe traducirla al inglés, que será evaluada por un modelo de IA. Esta metodología es ampliamente utilizada por reconocidas academias y ha demostrado unos resultados muy satisfactorios. Cuando el usuario realiza esta actividad una y otra vez, mejora su vocabulario, adquiere mayor fluidez a la hora de construir las frases y, en general, adquiere confianza en su capacidad para hablar inglés.",
    images: ["/projects/fluento/cover-image.png"],
    customer: "Proyecto Personal",
    technologies: ["NextJS", "React Native", "Expo", "Open AI"],
    challenges: [
      "Desarrollo de un sistema de evaluación de respuestas mediante IA que analice gramática y vocabulario",
      "Implementación de un algoritmo de adaptación inteligente inspirado en Anki para personalizar el aprendizaje",
      "Creación de un sistema de reconocimiento de voz y conversión a texto",
      "Desarrollo de una interfaz móvil intuitiva que facilite la práctica fluida de ejercicios"
    ],
    repoUrl: "https://github.com/enolcasielles/es.fluento.next",
    blogUrl: "/blog/construyendo-fluento-idea"
  },
  {
    id: "memomate",
    publishedAt: "2024-12-04",
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
    blogUrl: "/blog/memomate"
  },
  {
    id: "mooviment",
    publishedAt: "2024-05-01",
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
    publishedAt: "2024-04-15",
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