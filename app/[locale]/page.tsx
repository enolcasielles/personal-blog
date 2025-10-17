import Image from "next/image";
import ExperienceTimeline from "../components/experience-timeline";
import CertificationsSection from "../components/certifications-section";
import { experiences } from "../data/experience";
import { certifications } from "../data/certifications";
import SectionCard from "../components/section-card";
import { useTranslations } from "next-intl";
import { use } from "react";
import { setRequestLocale } from "next-intl/server";

export default function Page({params}: {params: Promise<{locale: string}>}) {
  const {locale} = use(params);
 
  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <section className="max-w-4xl mx-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 mb-20">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-64 h-64 overflow-hidden rounded-full  hover:scale-105 transition-transform duration-300">
            <Image 
              fill
              alt="enol-photo" 
              src="/ec-photo.png" 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
          
          <div className="text-center">
            <h2 className="font-bold text-2xl mb-2">Enol Casielles</h2>
            <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
              {t("title")}
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed prose prose-neutral dark:prose-invert">
            {t("description1")}
            <a 
              href="https://www.mooviment.com" 
              target="_blank" 
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
            >
              {" "}{t("moovimentLink")}
            </a>{t("description1End")}
          </p>
          
          <p className="text-lg leading-relaxed prose prose-neutral dark:prose-invert">
            {t("description2")}
          </p>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="font-bold text-3xl mb-8 tracking-tighter">{t("exploreContent")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard 
            title={t("blogTitle")}
            description={t("blogDescription")}
            href="/blog"
            buttonText={t("blogButton")}
          />
          <SectionCard 
            title={t("projectsTitle")}
            description={t("projectsDescription")}
            href="/projects"
            buttonText={t("projectsButton")}
          />
        </div>
      </div>

      <ExperienceTimeline experiences={experiences[locale]} />

      <div className="mt-20">
        <CertificationsSection certifications={certifications[locale]} />
      </div>
    </section>
  );
}
