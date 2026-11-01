import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Cookie, UserCheck, Mail } from "lucide-react";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | varchasv India",
  description:
    "Learn how varchasv India collects, uses, and protects your personal information. Our privacy policy explains your rights and how we handle your data.",
  alternates: {
    canonical: "https://www.varchasvindia.com/privacy",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(19,220,202,.12)] text-[#21e0cf] text-[10px] font-bold uppercase tracking-[1px] mb-5">
            <Shield size={12} /> Legal
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#f7f6ff] mb-4">
            Privacy Policy
          </h1>
          <p className="text-[12px] text-[#77748d]">
            Last updated: <span className="text-[#a7a6bd]">{lastUpdated}</span>
          </p>
        </header>

        <div className="h-px bg-[rgba(174,171,224,.16)] mb-10" />

        {/* Intro */}
        <p className="text-[15px] text-[#a7a6bd] leading-[1.9] mb-8">
          At <span className="text-[#f7f6ff] font-semibold">varchasv India</span>{" "}
          (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we respect your privacy
          and are committed to protecting your personal information. This Privacy
          Policy explains what data we collect, why we collect it, and how you can
          control it.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          <Section
            icon={<Eye size={18} />}
            title="1. Information We Collect"
          >
            <p>We collect information you voluntarily provide and information collected automatically when you use our website.</p>
            <ul>
              <li><strong>Contact information</strong> - name, email, phone number, company name when you fill out a form.</li>
              <li><strong>Project information</strong> - details you share when enquiring about our services.</li>
              <li><strong>Usage data</strong> - IP address, browser type, pages visited, time spent, referral source.</li>
              <li><strong>Cookies</strong> - small files that help us improve your experience.</li>
            </ul>
          </Section>

          <Section
            icon={<UserCheck size={18} />}
            title="2. How We Use Your Information"
          >
            <ul>
              <li>Respond to your enquiries and provide our services.</li>
              <li>Send project updates, invoices, and important communications.</li>
              <li>Improve our website, content, and user experience.</li>
              <li>Comply with legal obligations under Indian law.</li>
            </ul>
            <p>We <strong>never sell</strong> your personal data to third parties.</p>
          </Section>

          <Section
            icon={<Lock size={18} />}
            title="3. How We Protect Your Data"
          >
            <p>
              We use industry-standard safeguards - SSL/TLS encryption, secure
              hosting, access controls, and encrypted storage - to protect your
              data. However, no transmission over the internet is 100% secure.
            </p>
          </Section>

          <Section
            icon={<Cookie size={18} />}
            title="4. Cookies & Tracking"
          >
            <p>
              We use essential cookies (site functionality) and analytics cookies
              (Google Analytics, Vercel Analytics) to understand how visitors use
              our site. You can disable cookies in your browser settings - some
              features may stop working.
            </p>
          </Section>

          <Section
            icon={<Mail size={18} />}
            title="5. Third-Party Services"
          >
            <p>We use trusted third parties to run our business:</p>
            <ul>
              <li><strong>Vercel</strong> - hosting and analytics</li>
              <li><strong>Google</strong> - analytics and fonts</li>
              <li><strong>Email providers</strong> - transactional emails</li>
            </ul>
            <p>Each has its own privacy policy that we encourage you to review.</p>
          </Section>

          <Section
            icon={<Shield size={18} />}
            title="6. Your Rights"
          >
            <p>Under the Digital Personal Data Protection Act (India) and general data protection best practices, you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent at any time.</li>
            </ul>
          </Section>

          <Section
            icon={<UserCheck size={18} />}
            title="7. Data Retention"
          >
            <p>
              We retain your personal data only as long as necessary to fulfil the
              purpose it was collected for, or to comply with legal obligations.
              Enquiry data is typically kept for <strong>24 months</strong>.
            </p>
          </Section>

          <Section
            icon={<Mail size={18} />}
            title="8. Contact Us"
          >
            <p>If you have questions about this Privacy Policy or your data:</p>
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

          <Section
            icon={<Lock size={18} />}
            title="9. Changes to This Policy"
          >
            <p>
              We may update this Privacy Policy from time to time. The &quot;Last
              updated&quot; date at the top will reflect the most recent revision.
              Continued use of our website after changes constitutes acceptance.
            </p>
          </Section>
        </div>

        {/* Footer note */}
        <div className="mt-16 p-6 rounded-2xl bg-[#101027] border border-[rgba(174,171,224,.16)]">
          <p className="text-[12px] text-[#77748d] leading-[1.8]">
            By using varchasvindia.com, you agree to this Privacy Policy. If you do
            not agree, please discontinue use of our site. See also our{" "}
            <Link href="/terms" className="text-[#19ddcf] hover:underline">
              Terms &amp; Conditions
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
        <span className="w-9 h-9 rounded-lg bg-[rgba(240,68,145,.12)] border border-[rgba(240,68,145,.18)] text-[#f06a9f] grid place-items-center shrink-0">
          {icon}
        </span>
        <h2 className="font-heading text-xl md:text-2xl font-bold text-[#f7f6ff]">
          {title}
        </h2>
      </div>
      <div className="[&_p]:text-[14px] [&_p]:text-[#a7a6bd] [&_p]:leading-[1.9] [&_p]:mb-3 [&_ul]:space-y-2 [&_ul]:mb-3 [&_li]:text-[14px] [&_li]:text-[#a7a6bd] [&_li]:leading-[1.8] [&_li]:pl-4 [&_li]:relative [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[10px] [&_li]:before:w-1 [&_li]:before:h-1 [&_li]:before:rounded-full [&_li]:before:bg-[#21e0cf] [&_strong]:text-[#f7f6ff] [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}