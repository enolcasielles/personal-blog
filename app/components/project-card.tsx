import { Project } from "app/data/projects"
import Image from "next/image"

export default function ProjectCard({ project }: { project: Project }) {
  return (
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
  );
}