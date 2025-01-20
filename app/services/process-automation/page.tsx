import EUFundsBanner from "../../components/eu-funds-banner";

export default function ProcessAutomationPage() {
  return (
    <section className="max-w-4xl mx-auto">
      
      <h1 className="font-bold text-5xl mb-8 tracking-tighter bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
        Gestión de Procesos
      </h1>
      
      <div className="h-[2px] w-full bg-gradient-to-r from-black to-transparent dark:from-white mb-12"></div>
      
      <EUFundsBanner />
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Solución: Automatización Empresarial</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg font-medium mb-2">Categoría de Solución:</p>
            <p>Gestión de Procesos</p>
          </div>
          
          <p className="text-lg mb-4">
            Servicio integral de automatización de procesos empresariales para optimizar 
            las operaciones y mejorar la eficiencia. La solución incluye:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Análisis detallado de procesos actuales</li>
            <li>Diseño de flujos de trabajo optimizados</li>
            <li>Implementación de herramientas de automatización</li>
            <li>Integración con sistemas existentes</li>
            <li>Monitorización y análisis de resultados</li>
            <li>Formación del personal</li>
            <li>Soporte técnico continuo</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Precios</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-4">
              <li>Automatización Básica: desde 2.500€
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Hasta 3 procesos automatizados</li>
                  <li>Integración con herramientas básicas</li>
                  <li>Reportes mensuales</li>
                </ul>
              </li>
              <li>Automatización Avanzada: desde 4.000€
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Hasta 8 procesos automatizados</li>
                  <li>Integraciones avanzadas</li>
                  <li>Dashboard en tiempo real</li>
                  <li>Análisis predictivo</li>
                </ul>
              </li>
            </ul>

            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              * Todos los precios incluyen:
              <ul className="list-disc pl-6 mt-2">
                <li>Análisis y diseño de procesos</li>
                <li>Implementación completa</li>
                <li>Formación del personal</li>
                <li>Soporte técnico por 12 meses</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Requisitos Mínimos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Digitalización de procesos manuales</li>
            <li>Automatización de tareas repetitivas</li>
            <li>Integración entre sistemas</li>
            <li>Monitorización de procesos</li>
            <li>Generación de informes</li>
            <li>Alertas y notificaciones</li>
            <li>Gestión de permisos y roles</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Beneficios</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reducción de errores humanos</li>
            <li>Ahorro de tiempo y recursos</li>
            <li>Mayor eficiencia operativa</li>
            <li>Mejora en la satisfacción del cliente</li>
            <li>Datos en tiempo real para toma de decisiones</li>
            <li>Escalabilidad del negocio</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 