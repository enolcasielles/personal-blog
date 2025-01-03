import { projects } from "../../data/projects";
import Image from "next/image";
import { Link } from 'next-view-transitions'
import { notFound } from "next/navigation";
import { ExternalLink, Code2, BookOpen, ArrowLeft } from 'lucide-react';
import { Metadata } from "next";


export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let project = projects.find((p) => p.id === params.id);
  if (!project) {
    return;
  }

  let ogImage = `https://www.enolcasielles.com${project.images[0]}`;

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      publishedTime: project.publishedAt,
      url: `https://www.enolcasielles.com/projects/${project.id}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }))
}

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
      <Link 
        href="/projects"
        className="inline-flex items-center gap-2 mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Volver a proyectos</span>
      </Link>

      {/* 
      
      */}

      <div className="grid grid-cols-1 gap-8 mb-12">
        <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            style={{viewTransitionName: `image-${project.id}`}}
          />
        </div>

        <h1 
          className="font-bold text-5xl mt-8 tracking-tighter bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
          style={{viewTransitionName: `title-${project.id}`}}
        >
          {project.title}
        </h1>

        <div className="h-[2px] w-full bg-gradient-to-r from-black to-transparent dark:from-white"></div>

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

          <div className="flex flex-wrap gap-4 not-prose mt-12">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Ver sitio web</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all hover:scale-105"
              >
                <Code2/>
                <span>Ver código</span>
              </a>
            )}
            {project.blogUrl && (
              <Link
                href={project.blogUrl}
                className="group flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                <span>Leer más</span>
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