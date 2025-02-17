import Image from "next/image";
import ExperienceTimeline from "./components/experience-timeline";
import { experiences } from "./data/experience";
import SectionCard from "./components/section-card";

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="font-bold text-5xl mb-8 tracking-tighter bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
        Sobre mí
      </h1>
      
      <div className="h-[2px] w-full bg-gradient-to-r from-black to-transparent dark:from-white mb-12"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 mb-20">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-64 h-64 overflow-hidden rounded-full  hover:scale-105 transition-transform duration-300">
            <Image 
              fill
              alt="enol-photo" 
              src="/ec-photo.png" 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          
          <div className="text-center">
            <h2 className="font-bold text-2xl mb-2">Enol Casielles</h2>
            <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
              Full Stack Developer
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed prose prose-neutral dark:prose-invert">
            Soy un desarrollador de software con más de 10 años de experiencia, especializado en la creación y desarrollo de productos digitales. Mi trayectoria está estrechamente ligada al mundo de las startups, donde he fundado proyectos exitosos como
            <a 
              href="https://www.mooviment.com" 
              target="_blank" 
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
            >
              {" "}mooviment.com
            </a>. He creado este espacio como punto central de mi marca personal, donde comparto conocimientos, experiencias y los proyectos innovadores en los que trabajo.
          </p>
          
          <p className="text-lg leading-relaxed prose prose-neutral dark:prose-invert">
            Actualmente estoy creando proyectos web que utilicen tecnologías emergentes como la inteligencia artificial. Creo firmemente en el aprendizaje constante y en compartir ese conocimiento para inspirar a otros desarrolladores a crear productos innovadores que resuelvan problemas reales.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="font-bold text-3xl mb-8 tracking-tighter">Explora mi contenido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard 
            title="Blog"
            description="Artículos sobre desarrollo web, inteligencia artificial y cualquier aprendizaje que me resulte interesante."
            href="/blog"
            buttonText="Ver artículos"
          />
          <SectionCard 
            title="Proyectos"
            description="Descubre los proyectos en los que trabajo, desde aplicaciones web hasta experimentos con IA."
            href="/projects"
            buttonText="Ver proyectos"
          />
        </div>
      </div>

      <ExperienceTimeline experiences={experiences} />
    </section>
  );
}
