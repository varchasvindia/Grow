import { projects } from "@/lib/data";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function CaseStudies() {
  const t = useTranslations("CaseStudies");

  return (
    <section className="py-20 px-6 md:px-12 bg-[#09091a]">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-[#f7f6ff]">
              {t("title")}
            </h2>
            <p className="text-[#a7a6bd]">{t("subtitle")}</p>
          </div>
          <Link
            href="/projects"
            className="text-sm text-[#a7a6bd] hover:text-[#19ddcf] transition font-semibold"
          >
            {t("viewAll")} →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group cursor-pointer block"
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-4 border border-[rgba(174,171,224,.16)]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09091a] to-transparent opacity-80" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-[#f7f6ff] group-hover:text-[#19ddcf] transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-[#a7a6bd]">{project.type}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}