import { projects } from "@/lib/data";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ProjectsPage() {
  const t = useTranslations("Projects");

  return (
    <section className="py-20 px-6 md:px-12 bg-[#09091a]">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#f7f6ff]">
          {t("title")}
        </h1>
        <p className="text-[#a7a6bd] mb-12">{t("subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col w-full"
            >
              {/* 
        ✅ We use standard img tag here or next/image with width/height 
        to let the image dictate the height naturally (no cropping).
      */}
              <div className="relative w-full rounded-2xl overflow-hidden mb-4 border border-[rgba(174,171,224,.16)] bg-[#101027]">
                {/* ✅ Category Pill - Positioned top left */}
                <span className="absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider text-[#21e0cf] bg-[#09091a]/90 border border-[rgba(174,171,224,.2)] backdrop-blur-md px-3 py-1.5 rounded-full shadow-md">
                  {project.category}
                </span>

                <Image
                  src={project.image}
                  alt={project.name}
                  width={900}
                  height={1200} // Setting a taller height ensures Next.js optimizes for vertical posters
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <h2 className="text-xl font-bold text-[#f7f6ff] group-hover:text-[#19ddcf] transition-colors">
                {project.name}
              </h2>
              <p className="text-sm text-[#a7a6bd]">{project.type}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
