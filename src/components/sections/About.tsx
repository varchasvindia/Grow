// src/components/sections/About.tsx

import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section className="about-section section" id="about">
      <Container>
        <div className="about-grid">
          <div className="about-copy">
            <span className="eyebrow">ABOUT VARCHASV INDIA</span>

            <h2>
              We Build Brands
              <br />
              That Lead.
            </h2>

            <p>
              We are a full-service digital marketing and branding firm,
              empowering startups and businesses with innovative strategies,
              creative storytelling and technology-driven solutions.
            </p>

            <p>
              Our approach brings clarity to your brand, connects you with the
              right audience and turns ambitious ideas into measurable progress.
            </p>

            <Button href="/about">Know More</Button>
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
