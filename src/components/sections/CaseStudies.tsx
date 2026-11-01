import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#050511]">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our Success Stories</h2>
            <p className="text-gray-400">Real Brands. Real Results.</p>
          </div>
          <Link
            href="/projects"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group cursor-pointer block"
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>
              <h3 className="text-xl font-bold mb-1">{project.name}</h3>
              <p className="text-sm text-gray-400">{project.type}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
