import { partners } from "@/lib/data";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((p) => (
            <a key={p.name} href={p.website} target="_blank" rel="noopener noreferrer"
               className="flex justify-center opacity-70 hover:opacity-100 transition">
              <Image src={p.logo} alt={p.name} width={120} height={60} className="object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}