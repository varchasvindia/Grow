"use client";

import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  const t = useTranslations("CTA");

  return (
    <section className="cta-section">
      <Container>
        <div className="cta-box">
          <div>
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2>{t("title")}</h2>
            <p>{t("subtitle")}</p>
          </div>
          <Button href="/contact" variant="light">
            {t("button")}
          </Button>
        </div>
      </Container>
    </section>
  );
}