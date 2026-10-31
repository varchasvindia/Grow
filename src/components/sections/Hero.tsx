
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
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">
            MARKETING&nbsp; | &nbsp;PR&nbsp; | &nbsp;BRANDING&nbsp; |
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

        {/* Varchasv Brand Emblem */}
        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="hero-glow" />

          <Image
            src="/images/Varchasv_Logo_Emblem.png"
            alt="Varchasv India 3D turquoise brand emblem"
            width={609}
            height={609}
            priority
            className="hero-emblem"
          />
        </motion.div>
      </div>

      <div className="hero-bottom container">
        <span>Ideas that move businesses forward</span>
        <span className="scroll-indicator">
          SCROLL TO EXPLORE&nbsp; ↓
        </span>
      </div>
    </section>
  );
}
