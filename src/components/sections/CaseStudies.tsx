import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";

export default function CaseStudies(){return <section className="section case-section" id="projects"><Container><div className="section-top"><SectionHeading eyebrow="OUR WORK" title="Our Success Stories" description="Real brands. Real results."/><Link className="text-link" href="/projects">View All <ArrowUpRight size={16}/></Link></div><div className="project-grid">{projects.map(p=><Link href="/projects" className="project-card" key={p.tag}><div className="project-image"><Image src={p.image} alt={p.name} fill sizes="(max-width: 700px) 100vw, 33vw"/><span className="project-tag">{p.category}</span></div><div className="project-info"><div><h3>{p.name}</h3><p>{p.type}</p></div><ArrowUpRight size={18}/></div></Link>)}</div></Container></section>}