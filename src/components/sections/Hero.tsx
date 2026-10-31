"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
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
          <span className="eyebrow">
            MARKETING&nbsp; | &nbsp;PR&nbsp; |&nbsp;DIGITAL SOLUTIONS &nbsp;BRANDING&nbsp; |
            &nbsp;DIGITAL SOLUTIONS
          </span>

          <h1>
            Your Vision.
            <br />
            Our Strategy.
            <br />
            <span>Real Growth.</span>
          </h1>

          <p>
            We combine creativity, technology and strategy to help your brand
            stand out, get noticed and scale faster.
          </p>

          <div className="hero-actions">
            <Button href="/contact">Get Started</Button>

            <a className="text-link" href="/services">
              Explore Services <ArrowRight size={16} />
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
                <span className="service-label service-top">MARKETING</span>

                <span className="service-label service-right">
                  PUBLIC RELATIONS
                </span>

                <span className="service-label service-bottom">BRANDING</span>

                <span className="service-label service-left">
                  DIGITAL SOLUTIONS
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
        <span>Ideas that move businesses forward</span>
        <span className="scroll-indicator">SCROLL TO EXPLORE&nbsp; ↓</span>
      </div>
    </section>
  );
}
