import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services | varchasv India",
  description:
    "Explore digital marketing, branding, PR, website development and digital solutions from varchasv India.",
};

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");
  const tServices = useTranslations("Services.items");

  return (
    <>
      <section className="page-hero">
        <Container>
          <span className="eyebrow">{t("hero.eyebrow")}</span>
          <h1>
            {t("hero.titleLine1")}
            <br />
            <span>{t("hero.titleLine2")}</span>
          </h1>
          <p>{t("hero.subtitle")}</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow={t("expertise.eyebrow")}
            title={t("expertise.title")}
            description={t("expertise.description")}
          />
          
          <div className="service-grid service-grid-page">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <article className="service-card" key={s.number}>
                  <div className={`service-icon icon-${i}`}>
                    <Icon size={23} />
                  </div>
                  <span className="service-number">{s.number}</span>
                  {/* Use the translation keys we set up earlier */}
                  <h3>{tServices(`${s.key}.title`)}</h3>
                  <p>{tServices(`${s.key}.description`)}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
      
      <CTA />
    </>
  );
}