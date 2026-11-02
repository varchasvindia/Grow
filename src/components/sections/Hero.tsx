"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="hero">
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />

      <div className="container hero-inner">
        {/* HERO CONTENT */}
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">{t("eyebrow")}</span>

          <h1>
            {t("titleLine1")}
            <br />
            {t("titleLine2")}
            <br />
            <span>{t("titleLine3")}</span>
          </h1>

          <p>{t("subtitle")}</p>

          <div className="hero-actions">
            <Button href="/contact">{t("ctaPrimary")}</Button>

            <a className="text-link" href="/services">
              {t("ctaSecondary")} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* BRAND EMBLEM AND ORBITS */}
        <div className="hero-art">
          <div className="hero-glow" />

          <div className="hero-orbit-system">
            {/* Outer rotating orbit */}
            <div className="service-orbit">
              <div className="service-orbit-track">
                <span className="service-label service-top">
                  {t("orbit.marketing")}
                </span>

                <span className="service-label service-right">
                  {t("orbit.pr")}
                </span>

                <span className="service-label service-bottom">
                  {t("orbit.branding")}
                </span>

                <span className="service-label service-left">
                  {t("orbit.digital")}
                </span>
              </div>
            </div>

            {/* Middle rotating orbit */}
            <div className="orbit-ring orbit-ring-two">
              <span className="orbit-dot dot-two" />
            </div>

            {/* Inner rotating orbit */}
            <div className="orbit-ring orbit-ring-one">
              <span className="orbit-dot dot-one" />
            </div>

            {/* Stationary logo */}
            <div className="hero-emblem-wrap">
              <Image
                src="/images/Varchasv_Logo_Emblem.png"
                alt="Varchasv Brand Emblem"
                width={609}
                height={609}
                priority
                className="hero-emblem"
              />
            </div>
          </div>
        </div>
      </div>

      {/* HERO FOOTER */}
      <div className="hero-bottom container">
        <span>{t("tagline")}</span>
        <span className="scroll-indicator">{t("scrollHint")}</span>
      </div>
    </section>
  );
}