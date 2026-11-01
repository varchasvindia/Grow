import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-2">Our Projects</h1>
        <p className="text-gray-400 mb-12">
          A selection of work we're proud of.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="relative h-72 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 text-xs bg-black/60 backdrop-blur px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p className="text-sm text-gray-400">{project.type}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
