import EUFundsBanner from "../../components/eu-funds-banner";

export default function WebDevelopmentPage() {
  return (
    <section className="max-w-4xl mx-auto">
      
      <h1 className="font-bold text-5xl mb-8 tracking-tighter bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
        Sitio Web y Presencia en Internet
      </h1>
      
      <div className="h-[2px] w-full bg-gradient-to-r from-black to-transparent dark:from-white mb-12"></div>
      
      <EUFundsBanner />
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Solución: Web Corporativa Profesional</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg font-medium mb-2">Categoría de Solución:</p>
            <p>Sitio Web y Presencia en Internet</p>
          </div>
          
          <p className="text-lg mb-4">
            Desarrollo completo de sitios web profesionales adaptados a las necesidades específicas 
            de cada empresa. La solución incluye:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Diseño web responsive y moderno adaptado a tu marca</li>
            <li>Desarrollo frontend y backend personalizado</li>
            <li>Optimización SEO y rendimiento web</li>
            <li>Integración con Google Analytics</li>
            <li>Panel de administración de contenidos</li>
            <li>Alojamiento web y dominio incluidos</li>
            <li>Certificado SSL para conexiones seguras</li>
            <li>Mantenimiento y soporte técnico</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Precios</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-4">
              <li>Web Corporativa Básica: desde 2.000€
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Hasta 5 páginas de contenido</li>
                  <li>Formulario de contacto</li>
                  <li>Integración con redes sociales</li>
                </ul>
              </li>
              <li>Web Corporativa Avanzada: desde 3.500€
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Hasta 15 páginas de contenido</li>
                  <li>Blog corporativo</li>
                  <li>Área privada de clientes</li>
                  <li>Integración con CRM</li>
                </ul>
              </li>
            </ul>

            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              * Todos los precios incluyen:
              <ul className="list-disc pl-6 mt-2">
                <li>Desarrollo e implementación completa</li>
                <li>Formación para la gestión del contenido</li>
                <li>Mantenimiento y soporte por 12 meses</li>
                <li>Hosting y dominio por el primer año</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Requisitos Mínimos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dominio y hosting incluidos en el servicio</li>
            <li>Diseño responsive adaptado a todos los dispositivos</li>
            <li>Optimización SEO básica</li>
            <li>Autogestionable mediante CMS</li>
            <li>Cumplimiento de RGPD y políticas de privacidad</li>
            <li>Certificado de seguridad SSL</li>
            <li>Optimización de carga y rendimiento</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Proceso de Implementación</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Análisis de requisitos y objetivos</li>
            <li>Diseño de la arquitectura web</li>
            <li>Desarrollo y programación</li>
            <li>Testing y control de calidad</li>
            <li>Despliegue y configuración</li>
            <li>Formación y entrega de documentación</li>
            <li>Soporte y mantenimiento continuo</li>
          </ol>
        </div>
      </div>
    </section>
  );
} 