import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Brand from "./Brand";
import { contact, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand footer />
            <p>
              Marketing&nbsp; | &nbsp;PR&nbsp; | &nbsp;Branding&nbsp; |
              &nbsp;Digital Solutions
            </p>
            <div className="socials">
              <a href="https://www.instagram.com/officialvarchasv" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/company/varchasv-india" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="https://www.facebook.com/officialvarchasv" aria-label="Facebook">
                <Facebook />
              </a>
              {/* <a href="#" aria-label="YouTube">
                <Youtube />
              </a> */}
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            {navLinks.slice(0, 4).map((x) => (
              <Link key={x.href} href={x.href}>
                {x.label}
              </Link>
            ))}
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <a href={`mailto:${contact.email}`}>
              <Mail /> {contact.email}
            </a>
            <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
              <Phone /> {contact.phone}
            </a>
            <span>
              <MapPin /> {contact.location}
            </span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} varchasv India. All rights reserved.
          </span>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
