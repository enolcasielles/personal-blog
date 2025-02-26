import Image from "next/image";
import ExperienceTimeline from "./components/experience-timeline";
import { experiences } from "./data/experience";
import SectionCard from "./components/section-card";

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto">
      
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
              Ingeniero de software
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed prose prose-neutral dark:prose-invert">
            Ingeniero de software con más de 10 años de experiencia, especializado en la creación y desarrollo de productos digitales. Mi trayectoria está estrechamente ligada al mundo de las startups, donde he fundado proyectos exitosos como
            <a 
              href="https://www.mooviment.com" 
              target="_blank" 
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
            >
              {" "}mooviment.com
            </a>. Combino el desarrollo de productos innovadores con servicios de consultoría tecnológica, ayudando a empresas a materializar sus ideas en soluciones digitales efectivas.
          </p>
          
          <p className="text-lg leading-relaxed prose prose-neutral dark:prose-invert">
            Actualmente me centro en crear productos web que aprovechen tecnologías emergentes como la inteligencia artificial, mientras asesoro a empresas en su transformación digital. Mi objetivo es unir visión estratégica con implementación práctica para crear soluciones que generen valor real.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="font-bold text-3xl mb-8 tracking-tighter">Explora mi contenido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard 
            title="Blog"
            description="Artículos sobre desarrollo web, tecnologías emergentes y cualquier aprendizaje que me resulte interesante."
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

      <div className="mt-20">
        <h2 className="font-bold text-3xl mb-8 tracking-tighter">¿Tienes algún proyecto en mente?</h2>
        <div className="p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center">
            <div className="space-y-6">
              <h3 className="font-bold text-2xl">Desarrollo de Producto y Consultoría Tecnológica</h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Combino mi experiencia en desarrollo de productos digitales con servicios de consultoría tecnológica.
                Ya sea creando un nuevo producto desde cero o mejorando sistemas existentes, aporto una visión integral
                que une estrategia técnica con implementación práctica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/consulting" 
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Ver servicios
                  <svg 
                    className="ml-2 h-4 w-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
                <a 
                  href="mailto:enolcasielles@gmail.com"
                  className="w-full sm:w-auto text-center inline-flex items-center justify-center px-6 py-3 border-2 border-black dark:border-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Contactar
                </a>
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-[300px] mx-auto">
              <Image
                fill
                src="/images/consulting/hero.jpg"
                alt="Consultoría tecnológica"
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
