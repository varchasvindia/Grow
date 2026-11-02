// src/components/sections/About.tsx

"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation"; // Locale-aware Link
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function About() {
  const t = useTranslations("About");

  return (
    <section className="about-section section" id="about">
      <Container>
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">{t("eyebrow")}</span>

            <h2>
              {t("titleLine1")}
              <br />
              {t("titleLine2")}
            </h2>

            <p>{t("paragraph1")}</p>
            <p>{t("paragraph2")}</p>

            {/* Use locale-aware Link so it routes to /hi/about */}
            <Link href="/about">
              <Button>{t("cta")}</Button>
            </Link>
          </div>

          <div className="about-image-wrap">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90"
              alt="Creative strategy team collaborating in a modern studio"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className="about-image"
            />

            <div className="image-caption">
              <Image
                src="/images/Varchasv_Logo_Emblem.png"
                alt="Varchasv emblem"
                width={35}
                height={35}
                className="mini-mark"
              />

              <strong>Varchasv</strong>
              <small>INDIA</small>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}