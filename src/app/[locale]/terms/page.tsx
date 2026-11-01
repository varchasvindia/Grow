import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Scale,
  Ban,
  CreditCard,
  Copyright,
  ShieldAlert,
  Gavel,
  Mail,
} from "lucide-react";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions | varchasv India",
  description:
    "Read the terms and conditions governing the use of varchasv India's website and services. Covers engagement, payment, IP rights, and liability.",
  alternates: {
    canonical: "https://www.varchasvindia.com/terms",
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const lastUpdated = "November 1, 2025";

  return (
    <article className="bg-[#09091a] py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[12px] text-[#a7a6bd] hover:text-[#19ddcf] transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(240,68,145,.12)] text-[#ff76a9] text-[10px] font-bold uppercase tracking-[1px] mb-5">
            <FileText size={12} /> Legal
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#f7f6ff] mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-[12px] text-[#77748d]">
            Last updated: <span className="text-[#a7a6bd]">{lastUpdated}</span>
          </p>
        </header>

        <div className="h-px bg-[rgba(174,171,224,.16)] mb-10" />

        <p className="text-[15px] text-[#a7a6bd] leading-[1.9] mb-8">
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of{" "}
          <span className="text-[#f7f6ff] font-semibold">varchasvindia.com</span>{" "}
          and the services provided by{" "}
          <span className="text-[#f7f6ff] font-semibold">varchasv India</span>{" "}
          (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By accessing or using
          our site and services, you agree to these Terms.
        </p>

        <div className="space-y-10">
          <Section icon={<Scale size={18} />} title="1. Acceptance of Terms">
            <p>
              By accessing varchasvindia.com or engaging our services, you confirm
              that you have read, understood, and agree to be bound by these Terms.
              If you do not agree, please do not use our site or services.
            </p>
          </Section>

          <Section icon={<FileText size={18} />} title="2. Services">
            <p>
              varchasv India provides digital marketing, branding, PR, website
              design, and related consulting services. The specific scope, deliverables,
              timeline, and pricing for each engagement are defined in a separate
              written proposal or agreement signed by both parties.
            </p>
            <p>
              We reserve the right to refuse service, modify offerings, or discontinue
              services at our discretion.
            </p>
          </Section>

          <Section icon={<CreditCard size={18} />} title="3. Payment Terms">
            <ul>
              <li>Invoices are due within <strong>7–15 days</strong> of issuance unless otherwise agreed.</li>
              <li>Advance payment (typically 50%) is required before project commencement.</li>
              <li>Late payments may attract interest at <strong>1.5% per month</strong>.</li>
              <li>All prices are exclusive of GST unless stated otherwise.</li>
              <li>Refunds are not provided once work has commenced, except as required by law.</li>
            </ul>
          </Section>

          <Section icon={<Copyright size={18} />} title="4. Intellectual Property">
            <p>
              Upon full payment, ownership of <strong>final deliverables</strong>{" "}
              (logos, websites, campaign assets) transfers to the client, unless
              otherwise stated in the project agreement.
            </p>
            <p>
              varchasv India retains ownership of its <strong>pre-existing tools,
              templates, frameworks, and code libraries</strong>, and may reuse
              them in other projects.
            </p>
            <p>
              All content on varchasvindia.com - including text, design, logos, and
              graphics - is our property or licensed to us, and may not be copied
              or reused without written permission.
            </p>
          </Section>

          <Section icon={<Ban size={18} />} title="5. Prohibited Conduct">
            <p>You agree not to:</p>
            <ul>
              <li>Use our website for any unlawful purpose.</li>
              <li>Attempt to gain unauthorised access to our systems.</li>
              <li>Copy, scrape, or reproduce our content without permission.</li>
              <li>Transmit viruses, malware, or harmful code.</li>
              <li>Impersonate another person or entity.</li>
            </ul>
          </Section>

          <Section icon={<ShieldAlert size={18} />} title="6. Confidentiality">
            <p>
              Both parties agree to keep confidential any business, technical, or
              financial information disclosed during the engagement. This obligation
              survives the termination of any agreement.
            </p>
          </Section>

          <Section icon={<ShieldAlert size={18} />} title="7. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, varchasv India shall not be
              liable for any indirect, incidental, or consequential damages arising
              from your use of our website or services. Our total liability shall
              not exceed the fees paid by you in the{" "}
              <strong>preceding 3 months</strong>.
            </p>
            <p>
              We do not guarantee specific business results (rankings, traffic,
              revenue) from any marketing or SEO campaign.
            </p>
          </Section>

          <Section icon={<Gavel size={18} />} title="8. Governing Law & Disputes">
            <p>
              These Terms are governed by the laws of{" "}
              <strong>India</strong>. Any dispute shall be subject to the exclusive
              jurisdiction of the courts in{" "}
              <strong>Raipur, Chhattisgarh</strong>.
            </p>
            <p>
              Before litigation, both parties agree to attempt good-faith
              resolution through discussion for at least 30 days.
            </p>
          </Section>

          <Section icon={<FileText size={18} />} title="9. Termination">
            <p>
              Either party may terminate a project agreement with{" "}
              <strong>15 days written notice</strong>. Fees for work completed up
              to the termination date remain payable. Sections that by their nature
              survive termination (IP, confidentiality, liability) shall continue
              in effect.
            </p>
          </Section>

          <Section icon={<FileText size={18} />} title="10. Changes to Terms">
            <p>
              We may update these Terms at any time. The &quot;Last updated&quot;
              date will reflect changes. Continued use of our site or services
              after changes constitutes your acceptance of the revised Terms.
            </p>
          </Section>

          <Section icon={<Mail size={18} />} title="11. Contact Us">
            <p>For questions about these Terms:</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contact.email}`} className="text-[#19ddcf] hover:underline">
                {contact.email}
              </a>
              <br />
              <strong>Phone:</strong>{" "}
              <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="text-[#19ddcf] hover:underline">
                {contact.phone}
              </a>
              <br />
              <strong>Address:</strong> {contact.location}
            </p>
          </Section>
        </div>

        {/* Footer note */}
        <div className="mt-16 p-6 rounded-2xl bg-[#101027] border border-[rgba(174,171,224,.16)]">
          <p className="text-[12px] text-[#77748d] leading-[1.8]">
            By using varchasvindia.com, you acknowledge that you have read and
            agree to these Terms &amp; Conditions. See also our{" "}
            <Link href="/privacy" className="text-[#19ddcf] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <span className="w-9 h-9 rounded-lg bg-[rgba(19,220,202,.12)] border border-[rgba(19,220,202,.18)] text-[#21e0cf] grid place-items-center shrink-0">
          {icon}
        </span>
        <h2 className="font-heading text-xl md:text-2xl font-bold text-[#f7f6ff]">
          {title}
        </h2>
      </div>
      <div className="[&_p]:text-[14px] [&_p]:text-[#a7a6bd] [&_p]:leading-[1.9] [&_p]:mb-3 [&_ul]:space-y-2 [&_ul]:mb-3 [&_li]:text-[14px] [&_li]:text-[#a7a6bd] [&_li]:leading-[1.8] [&_li]:pl-4 [&_li]:relative [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[10px] [&_li]:before:w-1 [&_li]:before:h-1 [&_li]:before:rounded-full [&_li]:before:bg-[#f06a9f] [&_strong]:text-[#f7f6ff] [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}