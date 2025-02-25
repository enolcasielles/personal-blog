import { projects } from "../data/projects";
import Image from "next/image";
import { Link } from 'next-view-transitions'
import PageTitle from "app/components/page-title";
import ProjectCard from "app/components/project-card";

export const metadata = {
  title: 'Proyectos',
  description: 'Proyectos de desarrollo web que he realizado.',
};

export default function ProjectsPage() {
  const personalProjects = projects.filter(project => project.type === 'personal').sort((a, b) => a.order - b.order);
  const clientProjects = projects.filter(project => project.type === 'client').sort((a, b) => a.order - b.order);
  const experimentProjects = projects.filter(project => project.type === 'experiment').sort((a, b) => a.order - b.order);

  return (
    <section className="max-w-4xl mx-auto">
      <PageTitle 
        title="Proyectos"
        description="Algunos de los proyectos en los que he trabajado en los últimos años"
      />

      {/* Tabs */}
      <div className="hidden md:flex space-x-4 mb-8">
        <a 
          href="#personal"
          className="group inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Startups Lanzadas ({personalProjects.length})
        </a>
        <a 
          href="#experiment"
          className="group inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Experimentos ({experimentProjects.length})
        </a>
        <a 
          href="#client"
          className="group inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          Trabajos para Clientes ({clientProjects.length})
        </a>
      </div>

      {/* Projects Grid */}

      <h2 className="text-2xl font-bold mb-8" id="personal">Startups Lanzadas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {personalProjects.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id}
            className="group"
          >
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-8" id="experiment">Experimentos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {experimentProjects.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id}
            className="group"
          >
            <ProjectCard project={project} />
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
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </section>
  );
} 