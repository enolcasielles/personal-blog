import Image from "next/image";
import ExperienceTimeline from "../components/experience-timeline";
import { experiences } from "../data/experience";
import SectionCard from "../components/section-card";

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 mb-20">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-64 h-64 overflow-hidden rounded-full hover:scale-105 transition-transform duration-300">
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
              Desarrollador Full Stack & Consultor Digital
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="font-bold text-5xl mb-8 tracking-tighter bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Transformación Digital para tu Negocio
          </h1>
          <p className="text-lg leading-relaxed prose prose-neutral dark:prose-invert">
            Con más de 10 años de experiencia en desarrollo de software y consultoría digital, 
            ayudo a empresas y autónomos a modernizar sus negocios a través de soluciones tecnológicas 
            personalizadas que impulsan su crecimiento.
          </p>
          
          <p className="text-lg leading-relaxed prose prose-neutral dark:prose-invert">
            Mi experiencia en startups y desarrollo de productos digitales me permite 
            ofrecer soluciones efectivas y escalables que transforman la manera en que operas tu negocio.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="font-bold text-3xl mb-4 tracking-tighter">Servicios de Desarrollo</h2>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
          Ofrezco servicios profesionales especializados para impulsar la transformación digital de tu negocio:
        </p>
        <div className="grid grid-cols-1 gap-6">
          <SectionCard 
            title="Desarrollo Web y Aplicaciones"
            description="Creación de páginas web corporativas y aplicaciones web personalizadas para impulsar tu presencia digital."
            href="/services/web-development"
            buttonText="Ver servicio"
          />
          <SectionCard 
            title="Automatización de Procesos"
            description="Optimización y automatización de procesos empresariales para mejorar la eficiencia de tu negocio."
            href="/services/process-automation"
            buttonText="Ver servicio"
          />
          <SectionCard 
            title="Tiendas Online"
            description="Desarrollo de tiendas online completas para vender tus productos en internet de forma profesional."
            href="/services/ecommerce"
            buttonText="Ver servicio"
          />
        </div>
      </div>

      <div className="mb-20">
        <h2 className="font-bold text-3xl mb-4 tracking-tighter">Experiencia Profesional</h2>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
          A continuación, puedes ver mi experiencia profesional en el sector tecnológico.
        </p>
        <ExperienceTimeline experiences={experiences} />
      </div>

      <div className="mb-20">
        <h2 className="font-bold text-3xl mb-8 tracking-tighter">Recursos y Contenido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard 
            title="Blog Técnico"
            description="Artículos sobre desarrollo, tecnología y transformación digital para empresas."
            href="/blog"
            buttonText="Ver artículos"
          />
          <SectionCard 
            title="Proyectos"
            description="Casos de éxito y ejemplos de soluciones tecnológicas implementadas."
            href="/projects"
            buttonText="Ver proyectos"
          />
        </div>
      </div>
    </section>
  );
}
