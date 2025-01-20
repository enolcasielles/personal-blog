import { Experience } from "../data/experience";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0"></div>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-xl">{experience.title}</h3>
                <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
                  {experience.period}
                </span>
              </div>
              <h4 className="text-gray-600 dark:text-gray-400 font-medium">{experience.company}</h4>
              
              {Array.isArray(experience.description) ? (
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  {experience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">
                  {experience.description}
                </p>
              )}
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {experience.technologies.join(" · ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
} 