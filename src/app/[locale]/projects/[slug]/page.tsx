import { projects } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  
  return {
    title: `${project.name} | varchasv India`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = await getTranslations("Projects");

  // ✅ Fetch translated project details from the JSON
  const projectT = t.raw(`items.${slug}`) as {
    name: string;
    type: string;
    category: string;
    description: string;
  } || {
    name: project.name,
    type: project.type,
    category: project.category,
    description: project.description,
  };

  return (
    <article className="py-20 px-6 md:px-12 bg-[#09091a] min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#a7a6bd] hover:text-[#19ddcf] transition-colors mb-10"
        >
          <ArrowLeft size={14} /> {t("backToAll")}
        </Link>

        {/* Project Info */}
        <div className="mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#21e0cf] bg-[rgba(19,220,202,.12)] px-3 py-1.5 rounded-full">
            {projectT.category} · {project.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-5 mb-3 text-[#f7f6ff] leading-tight">
            {projectT.name}
          </h1>
          <p className="text-lg text-[#a7a6bd]">{projectT.type}</p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 border border-[rgba(174,171,224,.16)]">
          <Image
            src={project.image}
            alt={projectT.name}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09091a] to-transparent opacity-40" />
        </div>

        {/* Content */}
        <div className="max-w-none text-[#a7a6bd] text-[15px] leading-[1.9]">
          <p>{projectT.description}</p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 pt-10 border-t border-[rgba(174,171,224,.16)]">
          <h3 className="text-2xl font-bold text-[#f7f6ff] mb-4">
            {t("ctaTitle")}
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-br from-[#ff805f] via-[#ee3c91] to-[#a735d1] text-white font-bold text-xs hover:-translate-y-0.5 hover:shadow-[0_9px_28px_rgba(239,55,145,.25)] transition-all"
          >
            {t("ctaButton")} <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}