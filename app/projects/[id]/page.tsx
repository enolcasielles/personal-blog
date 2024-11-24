import { projects } from "../../data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="font-bold text-5xl mb-8 tracking-tighter bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
        {project.title}
      </h1>
      
      <div className="h-[2px] w-full bg-gradient-to-r from-black to-transparent dark:from-white mb-12"></div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>Descripción</h2>
          <p>{project.description}</p>

          {project.customer && (
            <>
              <h2>Cliente</h2>
              <p>{project.customer}</p>
            </>
          )}

          {project.jobTitle && (
            <>
              <h2>Responsabilidad</h2>
              <p>{project.jobTitle}</p>
            </>
          )}

          <h2>Tecnologías</h2>
          <div className="flex flex-wrap gap-2 not-prose">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <h2>Desafíos</h2>
          <ul>
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>

          <div className="flex gap-4 not-prose">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Ver sitio web
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              >
                Ver código
              </a>
            )}
            {project.blogUrl && (
              <Link
                href={project.blogUrl}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                Leer más
              </Link>
            )}
          </div>
        </div>

        {project.images.slice(1).length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 