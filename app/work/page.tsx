export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-3xl mb-8 tracking-tighter">Trabajos</h1>
      <p className="prose prose-neutral dark:prose-invert">
        En esta página encontrarás información sobre los proyectos en los que he trabajado.
      </p>
      <div className="mt-8">
        <h2 className="font-medium text-2xl mb-4 tracking-tighter">Proyectos Ejemplares</h2>
        <ul className="list-disc list-inside">
          <li>
            <h3 className="font-semibold text-xl">Project A</h3>
            <p className="prose prose-neutral dark:prose-invert">
              Descripción del Proyecto A. <a href="https://example.com/project-a" target="_blank" className="hover:text-blue-400">Ver más</a>
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-xl">Project B</h3>
            <p className="prose prose-neutral dark:prose-invert">
              Descripción del Proyecto B. <a href="https://example.com/project-b" target="_blank" className="hover:text-blue-400">Ver más</a>
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-xl">Project C</h3>
            <p className="prose prose-neutral dark:prose-invert">
              Descripción del Proyecto C. <a href="https://example.com/project-c" target="_blank" className="hover:text-blue-400">Ver más</a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
