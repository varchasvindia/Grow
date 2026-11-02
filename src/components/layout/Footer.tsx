"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Brand from "./Brand";
import { contact, navLinks, services } from "@/lib/data";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/officialvarchasv", Icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/varchasv-india", Icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/officialvarchasv", Icon: Facebook },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const tServices = useTranslations("Services.items");

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
            <p className="footer-desc">{t("tagline")}</p>
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
            <h4 className="footer-heading">{t("exploreHeading")}</h4>
            <ul className="footer-links">
              {navLinks.slice(0, 4).map((x) => (
                <li key={x.href}>
                  <Link href={x.href}>
                    {/* ✅ FIXED: Use x.key directly */}
                    {tNav(x.key as any)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact">{tNav("contact")}</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <h4 className="footer-heading">{t("servicesHeading")}</h4>
            <ul className="footer-links">
              {services.map((s) => (
                <li key={s.key}>
                  <Link href="/services">
                    {/* Pull the translated title from the Services JSON */}
                    {tServices(`${s.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-contact">
            <h4 className="footer-heading">{t("contactHeading")}</h4>
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
            © {new Date().getFullYear()} {t("copyright")}
          </span>
          <span className="footer-motto">{t("motto")}</span>
          <div className="footer-legal">
            <Link href="/privacy">{t("privacy")}</Link>
            <Link href="/terms">{t("terms")}</Link>
            <Link href="/refund-policy">{t("refund")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}