import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Target,
  Eye,
  Lightbulb,
  Heart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Compass,
  Palette,
  Globe,
  Rocket,
  Fingerprint,
  Users,
  MessageCircle,
  Search,
  ChartNoAxesCombined,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover VARCHASV — a strategic brand-building and digital solutions partner helping businesses build identity, strengthen public presence and achieve meaningful growth.",
  openGraph: {
    title: "About VARCHASV | Brand Banao. Varchasv Banao.",
    description:
      "We build brands, shape public presence and turn ambitious ideas into meaningful growth.",
  },
};

const values = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "We believe every brand has a unique story. We bring ideas to life through thoughtful creativity and meaningful experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Strong brands are built on trust. We value transparency, consistency and relationships that grow over time.",
  },
  {
    icon: Target,
    title: "Purpose",
    description:
      "Every strategy begins with a clear purpose. We focus on meaningful work that moves businesses towards their goals.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "We think beyond short-term visibility and focus on building sustainable brand recognition and long-term growth.",
  },
  {
    icon: Heart,
    title: "Commitment",
    description:
      "We treat every business vision with care, dedication and the responsibility it deserves.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description:
      "From the smallest detail to the biggest strategy, we strive to create work that makes a lasting impression.",
  },
];

const capabilities = [
  {
    icon: Fingerprint,
    title: "Brand Identity",
    description:
      "Create a distinctive identity people can recognize and remember.",
  },
  {
    icon: Globe,
    title: "Digital Presence",
    description: "Build a strong, consistent and professional online presence.",
  },
  {
    icon: MessageCircle,
    title: "Public Presence",
    description:
      "Communicate your story and strengthen how people perceive your brand.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Business Growth",
    description:
      "Turn strategic visibility into meaningful business opportunities.",
  },
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Understand",
    description:
      "We understand your business, vision, audience, challenges and long-term ambitions.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategize",
    description:
      "We develop a clear direction and create a strategy aligned with your brand goals.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Create",
    description:
      "We transform strategy into identity, communication, creative experiences and digital solutions.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Grow",
    description:
      "We help strengthen your presence, connect with your audience and move your business forward.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="about-hero">
        <div className="about-hero-glow" />
        <Container>
          <div className="about-hero-content">
            <span className="about-eyebrow">
              <span className="eyebrow-line" />
              ABOUT VARCHASV
            </span>

            <h1>
              We Build Brands.
              <br />
              Shape Public Presence.
              <br />
              <span>Create Meaningful Growth.</span>
            </h1>

            <p>
              We build brands, shape public presence and turn ambitious ideas
              into meaningful growth. One strategic partner for your digital
              journey.
            </p>

            <div className="about-hero-actions">
              <Button href="/contact">Let's Build Your Brand</Button>

              <Link href="/services" className="about-text-link">
                Explore Our Services
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="about-hero-bottom">
            <span>STRATEGY. CREATIVITY. IDENTITY. GROWTH.</span>
            <span>01 / ABOUT US</span>
          </div>
        </Container>
      </section>

      {/* BRAND PHILOSOPHY */}
      <section className="philosophy-section">
        <Container>
          <div className="philosophy-grid">
            <div className="philosophy-content">
              <span className="about-eyebrow">OUR PHILOSOPHY</span>

              <h2>
                Brand Banao.
                <br />
                <span>Varchasv Banao.</span>
              </h2>

              <p>
                In today's digital world, simply having a business is not
                enough. People need to know who you are, what you stand for and
                why they should choose you.
              </p>

              <p>
                A website alone does not build a brand. A logo alone does not
                create recognition. True brand presence comes from the right
                identity, consistent communication, strategic visibility and the
                trust you build with people.
              </p>

              <p>
                At VARCHASV, we bring these elements together to help businesses
                establish their identity and create a meaningful presence in the
                world.
              </p>
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
                <span>YOUR IDENTITY.</span>
                <strong>YOUR VARCHASV.</strong>
                <span>YOUR RECOGNITION.</span>
              </div>

              <div className="floating-word word-one">IDENTITY</div>
              <div className="floating-word word-two">VISIBILITY</div>
              <div className="floating-word word-three">GROWTH</div>
            </div>
          </div>
        </Container>
      </section>

      {/* WHO WE ARE */}
      <section className="who-section">
        <Container>
          <div className="who-grid">
            <div className="who-heading">
              <span className="about-eyebrow">WHO WE ARE</span>

              <h2>
                More Than Services.
                <br />
                <span>A Strategic Partner.</span>
              </h2>
            </div>

            <div className="who-description">
              <p>
                VARCHASV is a brand-building and digital solutions partner
                focused on helping businesses create a strong identity and
                establish a powerful public presence.
              </p>

              <p>
                We bring together branding, digital marketing, communication,
                technology and creative thinking to support businesses at every
                stage of their journey.
              </p>

              <p>
                Whether you are starting something new, building recognition or
                taking your business to the next level, we help turn your vision
                into a clear and actionable direction.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* VISION AND MISSION */}
      <section className="vision-section">
        <Container>
          <div className="vision-grid">
            <article className="vision-card vision-card-one">
              <div className="vision-icon">
                <Eye size={27} />
              </div>

              <span className="about-eyebrow">OUR VISION</span>

              <h3>To Make Every Brand Recognizable.</h3>

              <p>
                To create a world where businesses of every size can build a
                distinctive identity, earn recognition and establish a
                meaningful presence in the digital world.
              </p>
            </article>

            <article className="vision-card vision-card-two">
              <div className="vision-icon">
                <Target size={27} />
              </div>

              <span className="about-eyebrow">OUR MISSION</span>

              <h3>To Turn Ambitions Into Impact.</h3>

              <p>
                To empower businesses through strategic branding, creative
                communication, digital innovation and growth-focused solutions
                that create lasting value.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* CORE VALUES */}
      <section className="values-section">
        <Container>
          <div className="about-section-heading">
            <span className="about-eyebrow">WHAT DEFINES US</span>

            <h2>
              Our Values.
              <br />
              <span>Our Foundation.</span>
            </h2>

            <p>
              The principles that guide our thinking, shape our work and define
              every relationship we build.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article className="value-card" key={value.title}>
                  <div className={`value-icon value-icon-${index + 1}`}>
                    <Icon size={23} />
                  </div>

                  <span className="value-number">0{index + 1}</span>

                  <h3>{value.title}</h3>

                  <p>{value.description}</p>
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
            <span className="about-eyebrow">THE VARCHASV APPROACH</span>

            <h2>
              Everything Your Brand Needs
              <br />
              <span>To Stand Out.</span>
            </h2>

            <p>
              We connect the important elements of brand building to create one
              consistent and powerful presence.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <article className="capability-card" key={item.title}>
                  <Icon size={27} />

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
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
            <span className="about-eyebrow">HOW WE WORK</span>

            <h2>
              From Vision
              <br />
              <span>To Varchasv.</span>
            </h2>

            <p>
              A thoughtful process that takes your business from an idea to a
              recognizable and growing brand.
            </p>
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

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
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
            <span className="about-eyebrow">YOUR JOURNEY STARTS HERE</span>

            <h2>
              Don't Just Build
              <br />
              a Business.
              <br />
              <span>Build Your Varchasv.</span>
            </h2>

            <p>
              Your ideas deserve recognition. Your business deserves a strong
              identity. Let's build something that people remember.
            </p>

            <Button href="/contact">
              Let's Create Something Extraordinary
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
