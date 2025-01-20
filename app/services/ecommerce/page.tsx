import EUFundsBanner from "../../components/eu-funds-banner";

export default function EcommercePage() {
  return (
    <section className="max-w-4xl mx-auto">
      
      <h1 className="font-bold text-5xl mb-8 tracking-tighter bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
        Comercio Electrónico
      </h1>
      
      <div className="h-[2px] w-full bg-gradient-to-r from-black to-transparent dark:from-white mb-12"></div>
      
      <EUFundsBanner />
      
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Solución: Tienda Online Profesional</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <p className="text-lg font-medium mb-2">Categoría de Solución:</p>
            <p>Comercio Electrónico</p>
          </div>
          
          <p className="text-lg mb-4">
            Desarrollo completo de tiendas online profesionales con todas las funcionalidades 
            necesarias para vender productos en internet. La solución incluye:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Diseño personalizado de la tienda</li>
            <li>Catálogo de productos avanzado</li>
            <li>Sistema de gestión de inventario</li>
            <li>Pasarela de pagos segura</li>
            <li>Panel de administración intuitivo</li>
            <li>Optimización SEO para e-commerce</li>
            <li>Integración con redes sociales</li>
            <li>Sistema de envíos y seguimiento</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Precios</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <ul className="list-disc pl-6 space-y-4">
              <li>Tienda Online Básica: desde 2.000€
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Hasta 100 productos</li>
                  <li>2 métodos de pago</li>
                  <li>Gestión básica de inventario</li>
                  <li>Informes de ventas básicos</li>
                </ul>
              </li>
              <li>Tienda Online Avanzada: desde 4.000€
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Productos ilimitados</li>
                  <li>Múltiples métodos de pago</li>
                  <li>Gestión avanzada de inventario</li>
                  <li>Sistema de descuentos y cupones</li>
                  <li>Integración con ERP</li>
                </ul>
              </li>
            </ul>

            <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
              * Todos los precios incluyen:
              <ul className="list-disc pl-6 mt-2">
                <li>Desarrollo e implementación completa</li>
                <li>Configuración de pasarelas de pago</li>
                <li>Formación en gestión de la tienda</li>
                <li>Soporte técnico por 12 meses</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Requisitos Mínimos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Catálogo de productos</li>
            <li>Carrito de compra</li>
            <li>Proceso de compra seguro</li>
            <li>Métodos de pago seguros</li>
            <li>Gestión de pedidos</li>
            <li>Panel de administración</li>
            <li>Gestión de clientes</li>
            <li>Certificado SSL</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Características Principales</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Diseño responsive optimizado para móviles</li>
            <li>Múltiples métodos de pago</li>
            <li>Gestión de pedidos y clientes</li>
            <li>Informes y análisis de ventas</li>
            <li>Marketing y promociones integradas</li>
            <li>Seguridad y protección de datos</li>
            <li>Copias de seguridad automáticas</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 