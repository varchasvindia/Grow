import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return <section className="section services-section" id="services"><Container>
    <SectionHeading eyebrow="WHAT WE DO" title="Our Services" description="Integrated digital solutions for modern businesses."/>
    <div className="service-grid">{services.map((service,i)=>{const Icon=service.icon;return <article className="service-card" key={service.number}><div className={`service-icon icon-${i}`}><Icon size={23}/></div><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><ArrowUpRight className="service-arrow" size={18}/></article>})}</div>
  </Container></section>;
}