import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    title: project.name,
    description: project.type,
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

  return (
    <article className="py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        <Link
          href="/projects"
          className="text-sm text-gray-400 hover:text-white mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        <span className="text-xs uppercase tracking-widest text-orange-400">
          {project.category} · {project.tag}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-2">
          {project.name}
        </h1>
        <p className="text-lg text-gray-400 mb-10">{project.type}</p>

        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-10">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed">
            {/* Add real description later per project in data.ts */}
            Project details coming soon. This is where you describe the
            challenge, the strategy, and the results delivered for{" "}
            {project.name}.
          </p>
        </div>
      </div>
    </article>
  );
}
