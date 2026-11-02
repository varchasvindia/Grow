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
        <p className="text-[#a7a6bd] mb-12">
          {t("subtitle")}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="relative h-72 rounded-2xl overflow-hidden mb-4 border border-[rgba(174,171,224,.16)]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09091a] to-transparent opacity-60" />
                <span className="absolute top-4 left-4 text-[10px] font-bold tracking-wider uppercase bg-[rgba(19,220,202,.15)] text-[#21e0cf] backdrop-blur-md px-3 py-1.5 rounded-full border border-[rgba(28,219,205,.3)]">
                  {project.category}
                </span>
              </div>
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