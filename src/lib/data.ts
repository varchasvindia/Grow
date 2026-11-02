import {
  Megaphone,
  Rocket,
  Radio,
  PanelsTopLeft,
  Heart,
  Workflow,
  type LucideIcon,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────
export const navLinks = [
  { key: "home", label: "Home", href: "/" },
  { key: "services", label: "Services", href: "/services" },
  { key: "about", label: "About", href: "/about" },
  { key: "projects", label: "Case Studies", href: "/projects" },
  { key: "blog", label: "Blog", href: "/blog" },
];

// ─────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────
export type Service = {
  number: string;
  key: string; // ← used to look up JSON translations
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    number: "01",
    key: "digitalMarketing",
    title: "Digital Marketing",
    description: "SEO, Social Media, Paid Ads, Content & more.",
    icon: Megaphone,
  },
  {
    number: "02",
    key: "startupSupport",
    title: "Startup Support",
    description: "Strategy, Funding, Mentorship, Growth.",
    icon: Rocket,
  },
  {
    number: "03",
    key: "prMedia",
    title: "PR & Media",
    description: "Media Relations, Brand PR, Thought Leadership.",
    icon: Radio,
  },
  {
    number: "04",
    key: "website",
    title: "Website Design & Development",
    description: "Modern, Scalable, SEO-friendly Websites.",
    icon: PanelsTopLeft,
  },
  {
    number: "05",
    key: "branding",
    title: "Branding & Design",
    description: "Logo, Identity, Creative, Positioning.",
    icon: Heart,
  },
  {
    number: "06",
    key: "digitalSolutions",
    title: "Digital Solutions",
    description: "Automation, Analytics, CRM & More.",
    icon: Workflow,
  },
];

// ─────────────────────────────────────────────────────────────
// STATS
// ─────────────────────────────────────────────────────────────
export const stats = [
  { key: "projects", value: "15+", label: "Projects Delivered" },
  { key: "clients", value: "10+", label: "Happy Clients" },
  { key: "industries", value: "5+", label: "Industries Served" },
  { key: "retention", value: "95%", label: "Client Retention Rate" },
];

// ─────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────
export type Project = {
  slug: string;
  name: string;
  type: string;
  category: string;
  image: string;
  tag: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "fashion-brand",
    name: "Fashion Brand",
    type: "Social Media & Branding",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    tag: "01",
    description:
      "A complete brand refresh for a modern fashion label - new identity, social media strategy, and a content system that lifted engagement and sales across channels.",
  },
  {
    slug: "edtech-startup",
    name: "EdTech Startup",
    type: "Website + Performance Marketing",
    category: "Digital",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    tag: "02",
    description:
      "Designed and built a conversion-focused website for an EdTech platform, paired with a performance marketing engine that reduced cost per lead while scaling signups.",
  },
  {
    slug: "healthcare-brand",
    name: "Healthcare Brand",
    type: "PR + Digital Campaign",
    category: "Campaign",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    tag: "03",
    description:
      "An integrated PR and digital campaign for a healthcare brand - earned media coverage, patient education content, and a measurable lift in appointment bookings.",
  },
];

// ─────────────────────────────────────────────────────────────
// PARTNERS
// ─────────────────────────────────────────────────────────────
export type Partner = {
  name: string;
  logo: string;
  website: string;
};

export const partners: Partner[] = [
  {
    name: "Partner A",
    logo: "/images/partners/Bose Academy.png",
    website: "https://play.google.com/store/apps/details?id=co.griffin.qlwmi&hl=en_IN",
  },
  {
    name: "Partner B",
    logo: "/images/partners/cgkalarmahasangh.jpeg",
    website: "https://www.cgkalarmahasangh.com/",
  },
  {
    name: "Partner C",
    logo: "/images/partners/LOGO-BOSE-BRIGADE.jpg",
    website: "https://bosebrigade.com/",
  },
  {
    name: "Partner D",
    logo: "/images/partners/LOGO-BOSE-BRIGADE.jpg",
    website: "https://bosebrigade.com/",
  },
];

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    key: "neha",
    quote:
      "varchasv India helped us build a powerful brand presence and drive meaningful results. Their team is professional, creative and committed.",
    name: "Neha Kapoor",
    role: "Founder, Retail Brand",
    initials: "NK",
  },
  {
    key: "arjun",
    quote:
      "A thoughtful team that understood our goals and translated them into a digital experience that feels distinctive and performs beautifully.",
    name: "Arjun Mehta",
    role: "Co-founder, Technology Startup",
    initials: "AM",
  },
  {
    key: "priya",
    quote:
      "From strategy to execution, the varchasv team brought clarity, consistency and fresh ideas to every part of our campaign.",
    name: "Priya Sharma",
    role: "Marketing Director",
    initials: "PS",
  },
];

// ─────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────
export const contact = {
  email: "varchasvind@gmail.com",
  phone: "+91 91719 00017",
  location:
    "Flat No. 101, C Block, Vinayak Heights, Zora, Raipur Chhattisgarh 492012",
};

// ─────────────────────────────────────────────────────────────
// BLOG POSTS
// ─────────────────────────────────────────────────────────────
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
  featured?: boolean;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "first-post",
    title: "How We Think About Strategy, Creativity and Growth",
    excerpt:
      "A short intro to our philosophy - why we believe great brands are built at the intersection of strategy, creativity and measurable growth.",
    date: "2025-11-01",
    readTime: "4 min read",
    category: "Strategy",
    author: "varchasv Team",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
    featured: true,
    content: `
# How We Think About Strategy, Creativity and Growth

Welcome to the varchasv India blog.

At varchasv, we believe great brands are built at the intersection of **strategy, creativity and measurable growth**.

## Why we started

Most agencies pick one lane - creative shops don't do strategy, performance agencies don't do brand. We built varchasv to do both.

## What we focus on

- **Strategy first** - every campaign starts with a business goal, not a creative idea
- **Creative that converts** - beautiful design that actually drives action
- **Measurable outcomes** - we report on revenue, not vanity metrics

## What's next

We'll be publishing regular posts on:
- Brand strategy for startups
- SEO that actually works in 2025
- Building marketing teams that scale

Stay tuned - more posts coming soon.
    `,
  },
  {
    slug: "seo-for-startups",
    title: "SEO for Startups: A Practical 90-Day Roadmap",
    excerpt:
      "Most startups treat SEO as a long-term bet with unclear returns. Here's a realistic 90-day plan to build compounding organic traffic.",
    date: "2025-10-28",
    readTime: "7 min read",
    category: "SEO",
    author: "varchasv Team",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    content: `
# SEO for Startups: A Practical 90-Day Roadmap

Most startups treat SEO as a long-term bet with unclear returns. That's a mistake - with the right plan, you can see meaningful results in 90 days.

## Month 1: Foundation

- **Technical audit** - fix crawl errors, site speed, mobile issues
- **Keyword research** - identify 20–30 realistic keywords your startup can rank for
- **Competitor gap analysis** - find keywords competitors rank for that you don't

## Month 2: Content Production

- Publish **4 long-form articles** (1,500–2,500 words each)
- Each article targets **one specific keyword cluster**
- Internally link to your product pages

## Month 3: Authority Building

- Get listed in **directories** relevant to your industry
- Pitch **3 guest posts** on established blogs
- Build **2 backlinks** per week through outreach

## Expected results

By day 90, you should see:
- 20–30 pages indexed
- 10–15 keywords ranking in positions 11–50
- Measurable organic traffic growth in Google Search Console

## What not to do

- ❌ Don't buy backlinks
- ❌ Don't keyword-stuff
- ❌ Don't expect instant results
    `,
  },
  {
    slug: "brand-identity-checklist",
    title: "The 12-Point Brand Identity Checklist Every Founder Needs",
    excerpt:
      "Before you spend on ads, make sure your brand identity is solid. This is the checklist we walk every client through.",
    date: "2025-10-20",
    readTime: "6 min read",
    category: "Branding",
    author: "varchasv Team",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
    content: `
# The 12-Point Brand Identity Checklist

Before you spend money on ads, make sure your brand identity is solid. Here's the checklist we walk every client through.

## The 12 essentials

1. **Logo** - primary, secondary, and icon versions
2. **Color palette** - primary and secondary colors with hex codes
3. **Typography** - 2–3 fonts used consistently
4. **Voice & tone** - how you sound in writing
5. **Photography style** - visual mood for all photos
6. **Illustration style** - if you use illustrations
7. **Social media templates** - consistent post layouts
8. **Presentation deck** - for pitches and meetings
9. **Email signature** - branded, consistent
10. **Business cards** - if you still use them
11. **Brand guidelines PDF** - a reference document
12. **Website design system** - consistent components

## Why this matters

Inconsistent branding makes you look **smaller and less trustworthy**. Every touchpoint - from your website to your invoices - should feel like the same brand.

## When to update

Review your brand identity every **12–18 months**, or when:
- You've outgrown your current positioning
- Your audience has shifted
- Your product has fundamentally changed

## What we do

At varchasv, we build the entire system - from logo to landing pages - so everything is consistent and recognizable.
    `,
  },
];
