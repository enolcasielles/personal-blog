export interface Certification {
  name: string;
  date: string;
  description: string;
  issuer?: string;
  url?: string;
  type: "certificate" | "course";
}

export const certifications: Certification[] = [
  {
    name: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    date: "2025",
    issuer: "Coursera",
    description: "Este curso me permitió dominar técnicas avanzadas de optimización de redes neuronales profundas, incluyendo tuning de hiperparámetros, regularización y métodos de optimización como Adam y RMSprop.",
    url: "https://www.coursera.org/account/accomplishments/verify/ORKEPZL3T4TV",
    type: "certificate"
  },
  {
    name: "Docker and Kubernetes: The Complete Guide",
    date: "2024",
    issuer: "Udemy",
    description: "Este curso me ayudó a dominar el uso de Docker y Kubernetes para desplegar aplicaciones de manera eficiente y escalable.",
    url: "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide",
    type: "course"
  },
  {
    name: "Arquitectura Hexagonal",
    date: "2023",
    issuer: "Codely",
    description: "Este curso me ayudó a entender la arquitectura hexagonal y cómo aplicarla en mis proyectos. Esto me ha ayudado a crear aplicaciones más modulares y testeables.",
    url: "https://pro.codely.com/library/arquitectura-hexagonal-31201/about/",
    type: "course"
  },
  {
    name: "Advanced React For Enterprise: React for senior engineers",
    date: "2022",
    issuer: "Udemy",
    description: "Este curso me ayudó a entender conceptos avanzados de React que me han ayudado a crear aplicaciones web más eficientes y escalables.",
    url: "https://www.udemy.com/course/react-for-senior-engineers",
    type: "course"
  },
  {
    name: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    date: "2021",
    issuer: "Coursera",
    description: "A través de este curso aprendí los fundamentos de TensorFlow y su aplicación en inteligencia artificial, machine learning y deep learning. Adquirí habilidades prácticas para implementar modelos de redes neuronales, procesar datos y crear aplicaciones de IA.",
    url: "https://www.coursera.org/account/accomplishments/verify/4E9XQDSC4DW7",
    type: "certificate"
  },
  {
    name: "Neural Networks and Deep Learning",
    date: "2019",
    issuer: "Coursera",
    description: "Este curso fundamental me introdujo a los conceptos básicos de redes neuronales y deep learning. Aprendí sobre perceptrones, backpropagation, y las matemáticas detrás del aprendizaje profundo.",
    url: "https://www.coursera.org/account/accomplishments/verify/Y24YMLR3G9MK",
    type: "certificate"
  },
];
