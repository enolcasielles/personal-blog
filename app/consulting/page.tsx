import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-bold text-5xl text-black dark:text-white">
              Desarrollo de Producto y Consultoría Tecnológica
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              Ofrezco un servicio integral que combina desarrollo de productos digitales y consultoría tecnológica. 
              Con más de 10 años de experiencia, ayudo a empresas tanto en la implementación práctica como en la 
              dirección estratégica de sus proyectos tecnológicos.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/projects" 
                className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Ver casos de éxito
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border-2 border-black dark:border-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Contactar
              </a>
            </div>
          </div>
          <div className="relative w-[400px] h-[350px] mx-auto hidden md:block">
            <Image 
              fill
              priority
              alt="consulting-strategy" 
              src="/images/consulting/hero.jpg" 
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 400px"
              quality={100}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-24">
        <h2 className="font-bold text-3xl mb-8 tracking-tighter">Servicios de Consultoría Tecnológica</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
            <h3 className="font-bold text-xl mb-4">Desarrollo de Productos Digitales</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Transformo ideas en productos digitales funcionales y escalables, aplicando las mejores prácticas
              de desarrollo y una metodología centrada en resultados.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Desarrollo web full-stack</li>
              <li>• Arquitectura de software</li>
              <li>• Integración de IA y tecnologías emergentes</li>
              <li>• Desarrollo ágil y escalable</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
            <h3 className="font-bold text-xl mb-4">Consultoría Estratégica</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Asesoro en la toma de decisiones técnicas y estratégicas, ayudando a elegir las tecnologías
              y enfoques más adecuados para cada proyecto.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Planificación técnica</li>
              <li>• Selección de tecnologías</li>
              <li>• Optimización de procesos</li>
              <li>• Estrategia de producto</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
            <h3 className="font-bold text-xl mb-4">Auditorías y Mejoras</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Evalúo y optimizo productos existentes, identificando áreas de mejora tanto en el código
              como en la arquitectura y procesos.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Auditorías de código y arquitectura</li>
              <li>• Optimización de rendimiento</li>
              <li>• Mejora de procesos de desarrollo</li>
              <li>• Modernización tecnológica</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
            <h3 className="font-bold text-xl mb-4">Acompañamiento Continuo</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ofrezco soporte y seguimiento durante todo el ciclo de vida del proyecto, desde la 
              conceptualización hasta la implementación y mantenimiento.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• Mentoring técnico</li>
              <li>• Supervisión de implementación</li>
              <li>• Soporte en la toma de decisiones</li>
              <li>• Evolución del producto</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="mb-24">
        <h2 className="font-bold text-3xl mb-12 tracking-tighter text-center">¿Por qué trabajar conmigo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
            <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 w-fit group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-gray-700 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Experiencia Dual</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Mi experiencia como desarrollador y consultor me permite ofrecer una perspectiva única, 
              combinando visión estratégica con conocimiento técnico profundo.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
            <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 w-fit group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-gray-700 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Visión Estratégica</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Combino conocimiento técnico con visión de negocio para recomendar soluciones que no solo son 
              técnicamente sólidas, sino que también aportan valor al negocio.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
            <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 w-fit group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-gray-700 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Soluciones Adaptadas</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Cada empresa es única. Proporciono recomendaciones personalizadas que se ajustan a tu contexto, 
              recursos y objetivos específicos.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg">
            <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 w-fit group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-gray-700 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Acompañamiento Continuo</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              No solo entrego recomendaciones, sino que te acompaño en la implementación y seguimiento 
              de las soluciones propuestas.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="mb-24">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-bold text-3xl tracking-tighter">Casos de Éxito</h2>
          <Link 
            href="/projects"
            className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors inline-flex items-center"
          >
            Ver todos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video relative rounded-2xl overflow-hidden group">
            <Image
              fill
              src="/projects/mooviment/mooviment_1.png"
              alt="Proyecto Mooviment"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link 
                href="/projects/mooviment"
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
              >
                Ver Detalles
              </Link>
            </div>
          </div>
          <div className="aspect-video relative rounded-2xl overflow-hidden group">
            <Image
              fill
              src="/projects/beeping/cover-image.png"
              alt="Proyecto Beeping"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link 
                href="/projects/beeping"
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-opacity-90 transition-opacity"
              >
                Ver Detalles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-24">
        <div className="p-8 rounded-2xl border-2 border-gray-100 dark:border-gray-800 text-center">
          <h2 className="font-bold text-3xl mb-4 tracking-tighter">¿Necesitas asesoramiento tecnológico?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
            Cuéntame sobre los retos tecnológicos de tu empresa y exploremos cómo puedo ayudarte a superarlos.
          </p>
          <a 
            href="mailto:enolcasielles@gmail.com" 
            className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Solicitar consulta
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
