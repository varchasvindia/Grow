 import {
  Megaphone, Rocket, Radio, PanelsTopLeft, Heart, Workflow,
  type LucideIcon
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/projects" },
  { label: "Blog", href: "/#insights" }
];

export type Service = { title: string; description: string; icon: LucideIcon; number: string };
export const services: Service[] = [
  { number: "01", title: "Digital Marketing", description: "SEO, Social Media, Paid Ads, Content & more.", icon: Megaphone },
  { number: "02", title: "Startup Support", description: "Strategy, Funding, Mentorship, Growth.", icon: Rocket },
  { number: "03", title: "PR & Media", description: "Media Relations, Brand PR, Thought Leadership.", icon: Radio },
  { number: "04", title: "Website Design & Development", description: "Modern, Scalable, SEO-friendly Websites.", icon: PanelsTopLeft },
  { number: "05", title: "Branding & Design", description: "Logo, Identity, Creative, Positioning.", icon: Heart },
  { number: "06", title: "Digital Solutions", description: "Automation, Analytics, CRM & More.", icon: Workflow }
];

export const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Happy Clients" },
  { value: "15+", label: "Industries Served" },
  { value: "95%", label: "Client Retention Rate" }
];

export const projects = [
  { name: "Fashion Brand", type: "Social Media & Branding", category: "Branding", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85", tag: "01" },
  { name: "EdTech Startup", type: "Website + Performance Marketing", category: "Digital", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85", tag: "02" },
  { name: "Healthcare Brand", type: "PR + Digital Campaign", category: "Campaign", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85", tag: "03" }
];

export const testimonials = [
  { quote: "varchasv India helped us build a powerful brand presence and drive meaningful results. Their team is professional, creative and committed.", name: "Neha Kapoor", role: "Founder, Retail Brand", initials: "NK" },
  { quote: "A thoughtful team that understood our goals and translated them into a digital experience that feels distinctive and performs beautifully.", name: "Arjun Mehta", role: "Co-founder, Technology Startup", initials: "AM" },
  { quote: "From strategy to execution, the varchasv team brought clarity, consistency and fresh ideas to every part of our campaign.", name: "Priya Sharma", role: "Marketing Director", initials: "PS" }
];

export const contact = {
  email: "info@varchasv.com",
  phone: "+91 91719 00017",
  location: "Flat No. 101, C Block, Vinayak Heights, Zora, Raipur Chhattisgarh 492012"
};