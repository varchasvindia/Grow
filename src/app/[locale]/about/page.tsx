import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight, Target, Eye, Lightbulb, Heart, ShieldCheck, Sparkles, TrendingUp, Compass, Palette, Globe, Rocket, Fingerprint, MessageCircle, Search, ChartNoAxesCombined,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | varchasv India",
  description: "Discover varchasv India - a strategic brand-building and digital solutions partner helping businesses build identity, strengthen public presence and achieve meaningful growth.",
};

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  // Define arrays using translation keys instead of hardcoded text
  const values = [
    { key: "creativity", icon: Lightbulb },
    { key: "trust", icon: ShieldCheck },
    { key: "purpose", icon: Target },
    { key: "growth", icon: TrendingUp },
    { key: "commitment", icon: Heart },
    { key: "excellence", icon: Sparkles },
  ];

  const capabilities = [
    { key: "brandIdentity", icon: Fingerprint },
    { key: "digitalPresence", icon: Globe },
    { key: "publicPresence", icon: MessageCircle },
    { key: "businessGrowth", icon: ChartNoAxesCombined },
  ];

  const process = [
    { number: "01", key: "understand", icon: Search },
    { number: "02", key: "strategize", icon: Compass },
    { number: "03", key: "create", icon: Palette },
    { number: "04", key: "grow", icon: Rocket },
  ];

  return (
    <>
      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-hero-glow" />
        <Container>
          <div className="about-hero-content">
            <span className="about-eyebrow">
              <span className="eyebrow-line" />
              {t("hero.eyebrow")}
            </span>

            <h1>
              {t("hero.titleLine1")}
              <br />
              {t("hero.titleLine2")}
              <br />
              <span>{t("hero.titleLine3")}</span>
            </h1>

            <p>{t("hero.subtitle")}</p>

            <div className="about-hero-actions">
              <Button href="/contact">{t("hero.ctaPrimary")}</Button>
              <Link href="/services" className="about-text-link">
                {t("hero.ctaSecondary")}
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="about-hero-bottom">
            <span>{t("hero.bottomLeft")}</span>
            <span>{t("hero.bottomRight")}</span>
          </div>
        </Container>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="philosophy-section">
        <Container>
          <div className="philosophy-grid">
            <div className="philosophy-content">
              <span className="about-eyebrow">{t("philosophy.eyebrow")}</span>
              <h2>
                {t("philosophy.titleLine1")}
                <br />
                <span>{t("philosophy.titleLine2")}</span>
              </h2>
              <p>{t("philosophy.p1")}</p>
              <p>{t("philosophy.p2")}</p>
              <p>{t("philosophy.p3")}</p>
            </div>

            <div className="philosophy-visual">
              <div className="philosophy-glow" />
              <div className="philosophy-symbol">
                <Image
                  src="/images/Varchasv_Logo_Emblem.png"
                  alt="Varchasv Brand Emblem"
                  width={300}
                  height={300}
                  priority
                  className="philosophy-logo"
                />
              </div>
              <div className="philosophy-caption">
                <span>{t("philosophy.caption1")}</span>
                <strong>{t("philosophy.caption2")}</strong>
                <span>{t("philosophy.caption3")}</span>
              </div>
              <div className="floating-word word-one">{t("philosophy.float1")}</div>
              <div className="floating-word word-two">{t("philosophy.float2")}</div>
              <div className="floating-word word-three">{t("philosophy.float3")}</div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO WE ARE */}
      <section className="who-section">
        <Container>
          <div className="who-grid">
            <div className="who-heading">
              <span className="about-eyebrow">{t("who.eyebrow")}</span>
              <h2>
                {t("who.titleLine1")}
                <br />
                <span>{t("who.titleLine2")}</span>
              </h2>
            </div>
            <div className="who-description">
              <p>{t("who.p1")}</p>
              <p>{t("who.p2")}</p>
              <p>{t("who.p3")}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* VISION AND MISSION */}
      <section className="vision-section">
        <Container>
          <div className="vision-grid">
            <article className="vision-card vision-card-one">
              <div className="vision-icon"><Eye size={27} /></div>
              <span className="about-eyebrow">{t("vision.eyebrow")}</span>
              <h3>{t("vision.title")}</h3>
              <p>{t("vision.desc")}</p>
            </article>
            <article className="vision-card vision-card-two">
              <div className="vision-icon"><Target size={27} /></div>
              <span className="about-eyebrow">{t("mission.eyebrow")}</span>
              <h3>{t("mission.title")}</h3>
              <p>{t("mission.desc")}</p>
            </article>
          </div>
        </Container>
      </section>

      {/* CORE VALUES */}
      <section className="values-section">
        <Container>
          <div className="about-section-heading">
            <span className="about-eyebrow">{t("valuesSection.eyebrow")}</span>
            <h2>
              {t("valuesSection.titleLine1")}
              <br />
              <span>{t("valuesSection.titleLine2")}</span>
            </h2>
            <p>{t("valuesSection.desc")}</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <article className="value-card" key={value.key}>
                  <div className={`value-icon value-icon-${index + 1}`}>
                    <Icon size={23} />
                  </div>
                  <span className="value-number">0{index + 1}</span>
                  <h3>{t(`valuesSection.items.${value.key}.title`)}</h3>
                  <p>{t(`valuesSection.items.${value.key}.description`)}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* WHAT WE BRING */}
      <section className="capabilities-section">
        <Container>
          <div className="about-section-heading">
            <span className="about-eyebrow">{t("capabilitiesSection.eyebrow")}</span>
            <h2>
              {t("capabilitiesSection.titleLine1")}
              <br />
              <span>{t("capabilitiesSection.titleLine2")}</span>
            </h2>
            <p>{t("capabilitiesSection.desc")}</p>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article className="capability-card" key={item.key}>
                  <Icon size={27} />
                  <h3>{t(`capabilitiesSection.items.${item.key}.title`)}</h3>
                  <p>{t(`capabilitiesSection.items.${item.key}.description`)}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* OUR PROCESS */}
      <section className="process-section">
        <Container>
          <div className="about-section-heading">
            <span className="about-eyebrow">{t("processSection.eyebrow")}</span>
            <h2>
              {t("processSection.titleLine1")}
              <br />
              <span>{t("processSection.titleLine2")}</span>
            </h2>
            <p>{t("processSection.desc")}</p>
          </div>
          <div className="process-grid">
            {process.map((step) => {
              const Icon = step.icon;
              return (
                <article className="process-card" key={step.number}>
                  <div className="process-top">
                    <span>{step.number}</span>
                    <Icon size={25} />
                  </div>
                  <h3>{t(`processSection.items.${step.key}.title`)}</h3>
                  <p>{t(`processSection.items.${step.key}.description`)}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FINAL BRAND MESSAGE */}
      <section className="brand-message-section">
        <Container>
          <div className="brand-message">
            <span className="about-eyebrow">{t("finalMessage.eyebrow")}</span>
            <h2>
              {t("finalMessage.titleLine1")}
              <br />
              {t("finalMessage.titleLine2")}
              <br />
              <span>{t("finalMessage.titleLine3")}</span>
            </h2>
            <p>{t("finalMessage.desc")}</p>
            <Button href="/contact">{t("finalMessage.cta")}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}