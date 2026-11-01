import Link from "next/link";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Brand from "./Brand";
import { contact, navLinks } from "@/lib/data";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/officialvarchasv", Icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/varchasv-india", Icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/officialvarchasv", Icon: Facebook },
];

const services = [
  "Digital Marketing",
  "Startup Support",
  "PR & Media",
  "Website Design & Development",
  "Branding & Design",
  "Digital Solutions",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Ambient glows + subtle grid */}
      <div className="footer-glow footer-glow-aqua" aria-hidden />
      <div className="footer-glow footer-glow-pink" aria-hidden />
      <div className="footer-grid-bg" aria-hidden />

      <div className="container footer-inner">
        {/* Main grid */}
        <div className="footer-main">
          <div className="footer-brand-col">
            <Brand footer />
            <p className="footer-desc">
              A full-service marketing, PR and branding firm helping ambitious
              brands grow through strategy, creativity and measurable outcomes.
            </p>
            <div className="socials">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Explore">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              {navLinks.slice(0, 4).map((x) => (
                <li key={x.href}>
                  <Link href={x.href}>{x.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/services">{s}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-contact">
            <h4 className="footer-heading">Get in touch</h4>
            <a href={`mailto:${contact.email}`}>
              <span className="footer-icon">
                <Mail size={16} />
              </span>
              {contact.email}
            </a>
            <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
              <span className="footer-icon">
                <Phone size={16} />
              </span>
              {contact.phone}
            </a>
            <span>
              <span className="footer-icon">
                <MapPin size={16} />
              </span>
              {contact.location}
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} varchasv India. All rights reserved.
          </span>
          <span className="footer-motto">आपका वर्चस्व बना रहे</span>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}