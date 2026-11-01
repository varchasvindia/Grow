import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  RefreshCw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  CreditCard,
  Clock,
  Mail,
  FileCheck,
  Scale,
} from "lucide-react";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | varchasv India",
  description:
    "Transparent refund and cancellation policy for varchasv India's digital marketing, branding and web development services. Learn how refunds are calculated based on project stage.",
  alternates: {
    canonical: "https://www.varchasvindia.com/refund-policy",
  },
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
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
            <RefreshCw size={12} /> Legal
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#f7f6ff] mb-4">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-[12px] text-[#77748d]">
            Last updated: <span className="text-[#a7a6bd]">{lastUpdated}</span>
          </p>
        </header>

        <div className="h-px bg-[rgba(174,171,224,.16)] mb-10" />

        {/* Intro */}
        <p className="text-[15px] text-[#a7a6bd] leading-[1.9] mb-8">
          At{" "}
          <span className="text-[#f7f6ff] font-semibold">varchasv India</span>,
          we believe in transparency. This Refund &amp; Cancellation Policy
          explains when and how refunds are issued for our digital marketing,
          branding, PR, and web development services. Our goal is to be fair to
          both our clients and our team, while fully complying with the{" "}
          <strong className="text-[#f7f6ff]">
            Consumer Protection Act, 2019
          </strong>{" "}
          and applicable Indian law.
        </p>

        <div className="space-y-10">
          {/* 1. Scope */}
          <Section
            icon={<FileCheck size={18} />}
            title="1. Scope of This Policy"
          >
            <p>This policy applies to all paid engagements including:</p>
            <ul>
              <li>Digital marketing retainers (monthly)</li>
              <li>Project-based work (branding, website design, campaigns)</li>
              <li>Consulting and strategy sessions</li>
            </ul>
            <p>
              It does <strong>not</strong> apply to third-party ad spend paid
              directly to Google, Meta, or other platforms - those are governed
              by the platforms&apos; own policies.
            </p>
          </Section>

          {/* 2. Tiered Refund Structure */}
          <Section
            icon={<CheckCircle2 size={18} />}
            title="2. Refund Structure by Project Stage"
          >
            <p>
              Refunds are calculated based on the <strong>stage of work</strong>{" "}
              at the time of cancellation. This protects both parties - you only
              pay for work actually delivered.
            </p>

            {/* Tier table */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[rgba(174,171,224,.16)]">
              <table className="w-full text-left text-[13px]">
                <thead className="bg-[#101027] text-[#f7f6ff]">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Project Stage</th>
                    <th className="px-4 py-3 font-semibold">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgba(174,171,224,.1)]">
                  <tr className="bg-[#0d0d21]">
                    <td className="px-4 py-3 text-[#a7a6bd]">
                      Before contract signing / before payment
                    </td>
                    <td className="px-4 py-3 text-[#21e0cf] font-semibold">
                      100% refund
                    </td>
                  </tr>
                  <tr className="bg-[#09091a]">
                    <td className="px-4 py-3 text-[#a7a6bd]">
                      Contract signed, work not yet started (within 3 days)
                    </td>
                    <td className="px-4 py-3 text-[#21e0cf] font-semibold">
                      85% refund (15% admin fee)
                    </td>
                  </tr>
                  <tr className="bg-[#0d0d21]">
                    <td className="px-4 py-3 text-[#a7a6bd]">
                      Discovery / research phase (0–25% complete)
                    </td>
                    <td className="px-4 py-3 text-[#f0c419] font-semibold">
                      60% of remaining amount
                    </td>
                  </tr>
                  <tr className="bg-[#09091a]">
                    <td className="px-4 py-3 text-[#a7a6bd]">
                      Design / development phase (26–50% complete)
                    </td>
                    <td className="px-4 py-3 text-[#f0c419] font-semibold">
                      40% of remaining amount
                    </td>
                  </tr>
                  <tr className="bg-[#0d0d21]">
                    <td className="px-4 py-3 text-[#a7a6bd]">
                      Execution phase (51–75% complete)
                    </td>
                    <td className="px-4 py-3 text-[#f06a9f] font-semibold">
                      20% of remaining amount
                    </td>
                  </tr>
                  <tr className="bg-[#09091a]">
                    <td className="px-4 py-3 text-[#a7a6bd]">
                      Final phase (76–100% complete) or post-delivery
                    </td>
                    <td className="px-4 py-3 text-[#f06a9f] font-semibold">
                      No refund
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              &quot;Remaining amount&quot; = total project fee minus fees
              already earned for completed work, minus any third-party costs
              already incurred.
            </p>
          </Section>

          {/* 3. Non-Refundable */}
          <Section icon={<XCircle size={18} />} title="3. Non-Refundable Items">
            <p>The following are strictly non-refundable once incurred:</p>
            <ul>
              <li>
                <strong>Ad spend</strong> paid to Google Ads, Meta Ads,
                LinkedIn, or any other advertising platform
              </li>
              <li>
                <strong>Third-party costs</strong> - domains, hosting, premium
                plugins, stock photos, software licences, API credits
              </li>
              <li>
                <strong>Completed &amp; approved deliverables</strong> - final
                logos, launched websites, published content, approved campaigns
              </li>
              <li>
                <strong>Setup / onboarding fees</strong> once work has begun
              </li>
              <li>
                <strong>Payment gateway fees</strong> charged by Razorpay,
                Stripe, or your bank
              </li>
              <li>
                <strong>Rush fees</strong> for expedited delivery
              </li>
            </ul>
          </Section>

          {/* 4. What Qualifies for Refund */}
          <Section
            icon={<CheckCircle2 size={18} />}
            title="4. What Qualifies for a Refund"
          >
            <p>We will issue a refund in these situations:</p>
            <ul>
              <li>
                We fail to deliver the agreed scope{" "}
                <strong>without a valid reason</strong>
              </li>
              <li>
                We miss the agreed deadline by more than{" "}
                <strong>30 days</strong> due to our own fault
              </li>
              <li>
                You were <strong>charged twice</strong> for the same invoice
              </li>
              <li>
                You cancel <strong>before any work has begun</strong>
              </li>
              <li>
                We are unable to start your project and cannot offer an
                alternative
              </li>
            </ul>
          </Section>

          {/* 5. What Does NOT Qualify */}
          <Section
            icon={<AlertTriangle size={18} />}
            title="5. What Does NOT Qualify for a Refund"
          >
            <ul>
              <li>
                <strong>Change of mind</strong> after work has begun
              </li>
              <li>
                <strong>Subjective dissatisfaction</strong> - deliverables that
                meet the agreed brief but don&apos;t match personal taste
              </li>
              <li>
                <strong>Business results</strong> - SEO rankings, ad
                performance, or sales outcomes (see Section 8)
              </li>
              <li>
                <strong>Delays caused by you</strong> - late feedback, missing
                content, unresponsive communication
              </li>
              <li>
                <strong>Scope creep</strong> - requesting changes outside the
                original agreement
              </li>
              <li>
                <strong>Platform policy changes</strong> by Google, Meta, or
                other third parties
              </li>
            </ul>
          </Section>

          {/* 6. Cancellation */}
          <Section icon={<Clock size={18} />} title="6. How to Cancel">
            <p>To cancel a project or retainer:</p>
            <ul>
              <li>
                Email us at{" "}
                <a
                  href={`mailto:${contact.email}`}
                  className="text-[#19ddcf] hover:underline"
                >
                  {contact.email}
                </a>{" "}
                with the subject line{" "}
                <strong>&quot;Cancellation Request&quot;</strong>
              </li>
              <li>
                Include your <strong>invoice number</strong> and reason for
                cancellation
              </li>
              <li>
                We will acknowledge within <strong>2 business days</strong>
              </li>
              <li>
                Final refund calculation shared within{" "}
                <strong>7 business days</strong>
              </li>
            </ul>
            <p>
              <strong>Monthly retainers:</strong> require{" "}
              <strong>15 days written notice</strong> before the next billing
              cycle. No partial refunds for the current month once it has
              started.
            </p>
          </Section>

          {/* 7. Refund Processing */}
          <Section icon={<CreditCard size={18} />} title="7. Refund Processing">
            <ul>
              <li>
                Approved refunds are processed within{" "}
                <strong>7–10 business days</strong>
              </li>
              <li>
                Refunds are issued via the <strong>same payment method</strong>{" "}
                used for the original transaction
              </li>
              <li>Bank / payment gateway charges (2–3%) may be deducted</li>
              <li>
                GST is refunded only if the original invoice was GST-inclusive
              </li>
            </ul>
          </Section>

          {/* 8. Results Disclaimer */}
          <Section
            icon={<Scale size={18} />}
            title="8. No Guarantee of Results"
          >
            <p>
              Digital marketing outcomes - including SEO rankings, ad
              performance, lead volume, conversions, and revenue - depend on
              many factors outside our control (algorithm changes, competition,
              market conditions, your product, your pricing).
            </p>
            <p>
              <strong>
                We do not guarantee specific results and therefore cannot issue
                refunds based on marketing outcomes alone.
              </strong>{" "}
              However, if we fail to deliver the agreed <em>work</em> (not the
              result), the refund structure in Section 2 applies.
            </p>
          </Section>

          {/* 9. Disputes */}
          <Section
            icon={<AlertTriangle size={18} />}
            title="9. Disputes & Grievance Redressal"
          >
            <p>
              In line with the{" "}
              <strong>Consumer Protection (E-Commerce) Rules, 2020</strong>, we
              have a Grievance Officer to resolve complaints promptly.
            </p>
            <p>
              <strong>Grievance Officer:</strong> varchasv India Support Team
              <br />
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-[#19ddcf] hover:underline"
              >
                {contact.email}
              </a>
              <br />
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${contact.phone.replaceAll(" ", "")}`}
                className="text-[#19ddcf] hover:underline"
              >
                {contact.phone}
              </a>
            </p>
            <ul>
              <li>
                Complaints acknowledged within <strong>48 hours</strong>
              </li>
              <li>
                Resolution within <strong>1 month</strong>
              </li>
              <li>
                If unresolved, you may escalate to the{" "}
                <strong>National Consumer Helpline (1915)</strong> or the
                appropriate Consumer Commission
              </li>
            </ul>
          </Section>

          {/* 10. Legal Rights */}
          <Section icon={<Scale size={18} />} title="10. Your Statutory Rights">
            <p>
              Nothing in this Refund Policy limits your statutory rights under
              the <strong>Consumer Protection Act, 2019</strong>, the{" "}
              <strong>Indian Contract Act, 1872</strong>, or any other
              applicable law. If a refund clause is deemed unfair, you retain
              the right to seek remedies from the appropriate forum.
            </p>
          </Section>

          {/* 11. Contact */}
          <Section icon={<Mail size={18} />} title="11. Contact Us">
            <p>For any questions about this policy:</p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-[#19ddcf] hover:underline"
              >
                {contact.email}
              </a>
              <br />
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${contact.phone.replaceAll(" ", "")}`}
                className="text-[#19ddcf] hover:underline"
              >
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
            This Refund Policy should be read together with our{" "}
            <Link href="/terms" className="text-[#19ddcf] hover:underline">
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#19ddcf] hover:underline">
              Privacy Policy
            </Link>
            . By engaging varchasv India, you acknowledge and accept this
            policy.
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
      <div className="[&_p]:text-[14px] [&_p]:text-[#a7a6bd] [&_p]:leading-[1.9] [&_p]:mb-3 [&_ul]:space-y-2 [&_ul]:mb-3 [&_li]:text-[14px] [&_li]:text-[#a7a6bd] [&_li]:leading-[1.8] [&_li]:pl-4 [&_li]:relative [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[10px] [&_li]:before:w-1 [&_li]:before:h-1 [&_li]:before:rounded-full [&_li]:before:bg-[#f06a9f] [&_strong]:text-[#f7f6ff] [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}
