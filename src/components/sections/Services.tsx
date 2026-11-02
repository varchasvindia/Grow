"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section className="section services-section" id="services">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("subtitle")}
        />
        <div className="service-grid">
         {services.map((service, i) => {
  const Icon = service.icon;
  return (
    <article className="service-card" key={service.number}>
      <div className={`service-icon icon-${i}`}>
        <Icon size={23} />
      </div>
      <span className="service-number">{service.number}</span>
      
      {/* MUST use service.key here, not service.title */}
      <h3>{t(`items.${service.key}.title`)}</h3>
      <p>{t(`items.${service.key}.description`)}</p>
      
      <ArrowUpRight className="service-arrow" size={18} />
    </article>
  );
})}
        </div>
      </Container>
    </section>
  );
}