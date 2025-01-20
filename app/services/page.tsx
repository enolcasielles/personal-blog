import Link from "next/link";
import SectionCard from "../components/section-card";

export default function ServicesPage() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="font-bold text-5xl mb-8 tracking-tighter bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
        Servicios Kit Digital
      </h1>
      
      <div className="h-[2px] w-full bg-gradient-to-r from-black to-transparent dark:from-white mb-12"></div>
      
      <div className="prose prose-neutral dark:prose-invert mb-12">
        <p className="text-lg">
          Como Agente Digitalizador autorizado, ofrezco los siguientes servicios dentro del programa Kit Digital:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <SectionCard 
          title="Creación de Páginas Web Corporativas y Aplicaciones Web"
          description="Desarrollo de sitios web profesionales y aplicaciones web personalizadas para impulsar tu presencia digital."
          href="/services/web-development"
          buttonText="Ver detalles"
        />
        <SectionCard 
          title="Automatización de Procesos"
          description="Optimización y automatización de procesos empresariales para mejorar la eficiencia de tu negocio."
          href="/services/process-automation"
          buttonText="Ver detalles"
        />
        <SectionCard 
          title="Creación de Tiendas Online"
          description="Desarrollo de tiendas online completas para vender tus productos en internet."
          href="/services/ecommerce"
          buttonText="Ver detalles"
        />
      </div>
    </section>
  );
} 