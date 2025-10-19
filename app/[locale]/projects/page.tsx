import { projects } from "../../data/projects";
import Image from "next/image";
import { Link } from 'next-view-transitions'
import PageTitle from "app/components/page-title";
import ProjectCard from "app/components/project-card";
import { setRequestLocale, getTranslations } from "next-intl/server";

export const metadata = {
  title: 'Proyectos',
  description: 'Proyectos de desarrollo web que he realizado.',
};

export default async function ProjectsPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations("ProjectsPage");
  
  const localizedProjects = projects[locale];
  const personalProjects = localizedProjects.filter(project => project.type === 'personal').sort((a, b) => a.order - b.order);
  const clientProjects = localizedProjects.filter(project => project.type === 'client').sort((a, b) => a.order - b.order);
  const experimentProjects = localizedProjects.filter(project => project.type === 'experiment').sort((a, b) => a.order - b.order);

  return (
    <section className="max-w-4xl mx-auto">
      <PageTitle 
        title={t("title")}
        description={t("description")}
      />

      {/* Tabs */}
      <div className="hidden md:flex space-x-4 mb-8">
        <a 
          href="#personal"
          className="group inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {t("startups")} ({personalProjects.length})
        </a>
        <a 
          href="#experiment"
          className="group inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {t("experiments")} ({experimentProjects.length})
        </a>
        <a 
          href="#client"
          className="group inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {t("clients")} ({clientProjects.length})
        </a>
      </div>

      {/* Projects Grid */}

      <h2 className="text-2xl font-bold mb-8" id="personal">{t("startups")}</h2>
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

      <h2 className="text-2xl font-bold mb-8" id="experiment">{t("experiments")}</h2>
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

      <h2 className="text-2xl font-bold mb-8" id="client">{t("clients")}</h2>
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