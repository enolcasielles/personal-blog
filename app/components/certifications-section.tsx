import { Certification } from "../data/certifications";

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <>
      <h2 className="font-bold text-3xl mb-4 tracking-tighter">
        Certificaciones y Cursos
      </h2>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
        Formación continua y certificaciones que han contribuido a mi crecimiento profesional.
      </p>

      <div className="space-y-8">
        {certifications.map((certification, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-green-200 dark:border-green-700">
            <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-0"></div>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-xl">{certification.name}</h3>
                <span className="text-sm px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">
                  {certification.date}
                </span>
              </div>
              
              {certification.issuer && (
                <h4 className="text-gray-600 dark:text-gray-400 font-medium">
                  {certification.issuer}
                </h4>
              )}
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {certification.description}
              </p>
              
              {certification.url && (
                <a 
                  href={certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                >
                  Ver {certification.type === "certificate" ? "certificación" : "curso"}
                  <svg 
                    className="ml-1 h-3 w-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
