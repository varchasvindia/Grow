import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { contact } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | varchasv India",
  description:
    "Start a conversation with varchasv India about your next project.",
};

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <section className="section contact-page">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("subtitle")}
        />
        <div className="contact-grid">
          <div className="contact-details">
            <h3 className="text-[#f7f6ff]">{t("sidebarTitle")}</h3>
            <p className="text-[#a7a6bd]">{t("sidebarDesc")}</p>
            
            <a href={`mailto:${contact.email}`} className="hover:text-[#19ddcf] transition-colors">
              <Mail className="text-[#f06a9f]" />
              <span className="text-[#d8d5e5]">{contact.email}</span>
            </a>
            
            <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="hover:text-[#19ddcf] transition-colors">
              <Phone className="text-[#f06a9f]" />
              <span className="text-[#d8d5e5]">{contact.phone}</span>
            </a>
            
            <span>
              <MapPin className="text-[#f06a9f]" />
              <span className="text-[#d8d5e5]">{contact.location}</span>
            </span>
          </div>
          
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}