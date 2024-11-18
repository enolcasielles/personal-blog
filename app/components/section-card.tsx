import Link from 'next/link';

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  buttonText: string;
}

export default function SectionCard({ title, description, href, buttonText }: SectionCardProps) {
  return (
    <Link 
      href={href}
      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors group-hover:translate-x-1 duration-300"
    >
      <div className="group p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-800/30">
        <h3 className="font-bold text-2xl mb-3 bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
          {description}
        </p>
        <div className="flex items-center">
          <span className="font-medium">{buttonText}</span>
          <svg 
            className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </div>
      </div>
    </Link>
  );
} 