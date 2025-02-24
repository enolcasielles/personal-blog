import { projects } from "../data/projects";
import Image from "next/image";
import { Link } from 'next-view-transitions'
import PageTitle from "app/components/page-title";

export const metadata = {
  title: 'Proyectos',
  description: 'Proyectos de desarrollo web que he realizado.',
};

export default function ProjectsPage() {
  const personalProjects = projects.filter(project => project.isPersonal);
  const clientProjects = projects.filter(project => !project.isPersonal);

  return (
    <section className="max-w-4xl mx-auto">
      <PageTitle 
        title="Proyectos"
        description="Algunos de los proyectos en los que he trabajado en los últimos años"
      />

      {/* Tabs */}
      <div className="flex space-x-4 mb-8">
        <a 
          href="#personal"
          className="group inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Proyectos Personales ({personalProjects.length})
        </a>
        <a 
          href="#client"
          className="group inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Trabajos para Clientes ({clientProjects.length})
        </a>
      </div>

      {/* Projects Grid */}
      <h2 className="text-2xl font-bold mb-8" id="personal">Proyectos Personales</h2>
      <div id="personal" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {personalProjects.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id}
            className="group"
          >
            <article className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{viewTransitionName: `image-${project.id}`}}
                />
              </div>
              <div className="p-6">
                <h2 
                  className="text-xl font-bold mb-2" 
                  style={{viewTransitionName: `title-${project.id}`}}
                >
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-8" id="client">Trabajos para Clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {clientProjects.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id}
            className="group"
          >
            <article className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{viewTransitionName: `image-${project.id}`}}
                />
              </div>
              <div className="p-6">
                <h2 
                  className="text-xl font-bold mb-2" 
                  style={{viewTransitionName: `title-${project.id}`}}
                >
                  {project.title}
                </h2>
                {project.customer && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {project.customer}
                  </p>
                )}
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
} 