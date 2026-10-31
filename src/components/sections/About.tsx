import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function About() {
  return <section className="about-section section" id="about"><Container><div className="about-grid">
    <div className="about-copy"><span className="eyebrow">ABOUT varchasv INDIA</span><h2>We Build Brands<br/>That Lead.</h2><p>We are a full-service digital marketing and branding firm, empowering startups and businesses with innovative strategies, creative storytelling and technology-driven solutions.</p><p>Our approach brings clarity to your brand, connects you with the right audience and turns ambitious ideas into measurable progress.</p><Button href="/about">Know More</Button></div>
    <div className="about-image-wrap"><Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90" alt="Contemporary premium office lounge" fill sizes="(max-width: 800px) 100vw, 50vw" className="about-image"/><div className="image-caption"><span className="mini-mark">V</span><strong>varchasv</strong><small>INDIA</small></div></div>
  </div></Container></section>;
}