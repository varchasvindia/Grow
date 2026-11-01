import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { contact } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";
export const metadata:Metadata={title:"Contact",description:"Start a conversation with varchasv India about your next project."};
export default function ContactPage(){return <section className="section contact-page"><Container><SectionHeading eyebrow="LET'S TALK" title="Have a project in mind?" description="Tell us what you are building. We would love to hear about it."/><div className="contact-grid"><div className="contact-details"><h3>Let’s make something meaningful.</h3><p>Share your goals and we’ll get back to you to discuss the next steps.</p><a href={`mailto:${contact.email}`}><Mail/>{contact.email}</a><a href={`tel:${contact.phone.replaceAll(" ","")}`}><Phone/>{contact.phone}</a><span><MapPin/>{contact.location}</span></div><ContactForm/></div></Container></section>}