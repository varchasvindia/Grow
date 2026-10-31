import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";
import CTA from "@/components/sections/CTA";
export const metadata:Metadata={title:"Case Studies",description:"Explore selected varchasv India creative and digital project work."};
export default function ProjectsPage(){return <><section className="page-hero"><Container><span className="eyebrow">SELECTED WORK</span><h1>Ideas made<br/><span>impactful.</span></h1><p>A look at the kind of brand and digital experiences we love creating.</p></Container></section><section className="section"><Container><SectionHeading eyebrow="OUR PORTFOLIO" title="Our Success Stories" description="A selection of creative directions and digital work. Replace these sample entries with approved client case studies."/><div className="project-grid project-grid-page">{projects.map(p=><article className="project-card" key={p.tag}><div className="project-image"><Image src={p.image} alt={p.name} fill sizes="(max-width: 700px) 100vw, 33vw"/><span className="project-tag">{p.category}</span></div><div className="project-info"><div><h3>{p.name}</h3><p>{p.type}</p></div></div></article>)}</div></Container></section><CTA/></>}